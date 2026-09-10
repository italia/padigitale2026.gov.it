import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

export const runtime = "nodejs";

const RECAPTCHA_VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify";
const DEFAULT_SMTP_PORT = 465;
const DEFAULT_FROM_ADDRESS = "no-reply@padigitale2026.gov.it";

const territoryAreas = [
  "nord-est",
  "lombardia",
  "nord-ovest",
  "centro",
  "sud-ovest",
  "sud-est",
] as const;

const AREA_MAIL_ENV_KEYS = {
  "nord-est": "T_NORDEST_MAIL",
  lombardia: "T_LOMBARDIA_MAIL",
  "nord-ovest": "T_NORDOVEST_MAIL",
  centro: "T_CENTRO_MAIL",
  "sud-ovest": "T_SUDOVEST_MAIL",
  "sud-est": "T_SUDEST_MAIL",
} as const;

const requiredFields = [
  "contact",
  "name",
  "address",
  "phone",
  "area",
  "description",
  "captcha",
] as const;

const phoneSchema = z.string().trim().refine(
  (phone) => {
    const digits = phone.replace(/\D/g, "");

    return (
      /^\+?[\d\s()./-]+$/.test(phone) &&
      digits.length >= 6 &&
      digits.length <= 15
    );
  },
  { message: "Formato numero di telefono non valido" },
);

const territoryMessageSchema = z.object({
  contact: z.string().trim().min(1),
  name: z.string().trim().min(1),
  address: z.string().trim().email("Formato email non valido"),
  phone: phoneSchema,
  area: z.enum(territoryAreas, {
    message: "Area non valida",
  }),
  description: z.string().trim().min(1).max(300, {
    message: "La descrizione non può superare i 300 caratteri",
  }),
  captcha: z.string().trim().min(1),
});

type TerritoryMessageRequest = z.infer<typeof territoryMessageSchema>;
type SmtpTransporter = ReturnType<typeof nodemailer.createTransport>;

let smtpTransporter: SmtpTransporter | undefined;

interface TerritoryMessageResponse {
  message: string;
  [key: string]: unknown;
}

interface RecaptchaResponse {
  success?: boolean;
  score?: number;
  action?: string;
  "error-codes"?: string[];
}

function getRecaptchaScoreThreshold(): number {
  const configuredThreshold = Number(process.env.SCORE_THRESHOLD);

  return Number.isFinite(configuredThreshold) ? configuredThreshold : 0.5;
}

async function verifyRecaptcha(captcha: string): Promise<boolean> {
  const captchaKey = process.env.CAPTCHA_KEY;

  if (!captchaKey) {
    throw new Error("CAPTCHA_KEY non configurata");
  }

  const params = new URLSearchParams({
    secret: captchaKey,
    response: captcha,
  });
  const response = await fetch(RECAPTCHA_VERIFY_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params,
    cache: "no-store",
  });

  if (!response.ok) {
    console.error("Errore reCAPTCHA:", response.status);
    return false;
  }

  const result = (await response.json()) as RecaptchaResponse;
  const hasValidScore =
    result.score === undefined || result.score >= getRecaptchaScoreThreshold();
  const hasValidAction = result.action === undefined || result.action === "submit";

  if (!result.success || !hasValidScore || !hasValidAction) {
    console.warn("Verifica reCAPTCHA non riuscita", {
      action: result.action,
      errorCodes: result["error-codes"],
      score: result.score,
    });
    return false;
  }

  return true;
}

function getSmtpTransporter(): SmtpTransporter {
  if (smtpTransporter) {
    return smtpTransporter;
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || DEFAULT_SMTP_PORT);
  const username = process.env.SMTP_USERNAME;
  const password = process.env.SMTP_PASSWORD;

  if (!host) {
    throw new Error("SMTP_HOST non configurata");
  }

  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error("SMTP_PORT non valida");
  }

  if (!username || !password) {
    throw new Error("Credenziali SMTP non configurate");
  }

  const secure =
    process.env.SMTP_SECURE !== undefined
      ? process.env.SMTP_SECURE === "true"
      : true;

  smtpTransporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user: username,
      pass: password,
    },
  });

  return smtpTransporter;
}

function createEmailText(message: TerritoryMessageRequest): string {
  return [
    "Nuova richiesta dal form territoriale di PA digitale 2026",
    "",
    `Nome referente: ${message.contact}`,
    `Nome ente: ${message.name}`,
    `Email: ${message.address}`,
    `Telefono: ${message.phone}`,
    `Territorio: ${message.area}`,
    "",
    "Note per essere contattati:",
    message.description,
  ].join("\n");
}

async function sendTerritoryEmail(
  message: TerritoryMessageRequest,
): Promise<boolean> {
  const recipientEnvKey = AREA_MAIL_ENV_KEYS[message.area];
  const recipient = process.env[recipientEnvKey];

  if (!recipient) {
    throw new Error(`Destinatario non configurato per l'area ${message.area}`);
  }

  const transporter = getSmtpTransporter();

  try {
    await transporter.sendMail({
      from: {
        name: "PA digitale 2026",
        address: process.env.SMTP_FROM || DEFAULT_FROM_ADDRESS,
      },
      to: recipient,
      replyTo: message.address,
      subject: `Messaggio dal form - PA digitale 2026 - ${message.address}`,
      text: createEmailText(message),
      disableFileAccess: true,
      disableUrlAccess: true,
    });
  } catch (error) {
    console.error("Errore durante l'invio SMTP:", error);
    return false;
  }

  return true;
}

export async function POST(
  request: NextRequest,
): Promise<NextResponse<TerritoryMessageResponse>> {
  try {
    const requestBody = (await request.json()) as unknown;

    if (
      !requestBody ||
      typeof requestBody !== "object" ||
      Array.isArray(requestBody)
    ) {
      return NextResponse.json(
        { message: "Corpo della richiesta non valido" },
        { status: 400 },
      );
    }

    const body = requestBody as Record<string, unknown>;
    const missingFields = requiredFields.filter(
      (field) => typeof body[field] !== "string" || !body[field].trim(),
    );

    if (missingFields.length > 0) {
      return NextResponse.json(
        { message: `Campi obbligatori mancanti: ${missingFields.join(", ")}` },
        { status: 400 },
      );
    }

    const validationResult = territoryMessageSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          message:
            validationResult.error.issues[0]?.message || "Dati non validi",
        },
        { status: 400 },
      );
    }

    const message = validationResult.data;

    if (!(await verifyRecaptcha(message.captcha))) {
      return NextResponse.json(
        { message: "Verifica reCAPTCHA non riuscita" },
        { status: 400 },
      );
    }

    if (!(await sendTerritoryEmail(message))) {
      return NextResponse.json(
        { message: "Errore durante l'invio del messaggio" },
        { status: 502 },
      );
    }

    return NextResponse.json({
      message: "Messaggio inviato con successo. Ti contatteremo presto!",
    });
  } catch (error) {
    console.error("Errore durante l'invio del messaggio:", error);
    return NextResponse.json(
      { message: "Errore interno del server" },
      { status: 500 },
    );
  }
}
