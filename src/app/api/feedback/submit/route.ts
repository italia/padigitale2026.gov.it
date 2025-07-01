import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { buildClient } from "@datocms/cma-client";
import { getIronSession } from "iron-session";
import Tokens from "csrf";
import { z } from "zod/v4";
import { createClient } from "redis";
import { SessionData } from "../types";

const redis = createClient({ url: process.env.REDIS_URL });
await redis.connect();

// TODO: Muovere in env var?
const RATE_LIMIT = 10;
const WINDOW_SECONDS = 300; // 5 minuti

import cors_headers from "../cors_headers.json";

// Serve per validare i dati in POST che arrivano dal feedback
const FeedbackData = z.object({
  utile: z.boolean(),
  commento: z.string().optional(),
  link: z.string(),
});

function getIP(req: NextRequest): string {
  const xff = req.headers.get("x-forwarded-for");
  return xff ? xff.split(",")[0].trim() : "unknown";
}

export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      headers: cors_headers,
    },
  );
}

export async function POST(request: NextRequest) {
  if (
    !process.env.SESSION_SECRET ||
    !process.env.FEEDBACK_API_TOKEN ||
    !process.env.FEEDBACK_SCHEMA_ID
  ) {
    throw new Error("SESSION_SECRET and FEEDBACK_API_TOKEN must be set.");
  }

  // START: Rate limit
  const ip = getIP(request);
  const key = `rate_limit:${ip}`;

  const count = await redis.incr(key);

  if (count === 1) {
    await redis.expire(key, WINDOW_SECONDS);
  }

  const ttl = await redis.ttl(key);
  const remaining = Math.max(RATE_LIMIT - count, 0);

  const headers = new Headers({
    "X-RateLimit-Limit": RATE_LIMIT.toString(),
    "X-RateLimit-Remaining": remaining.toString(),
    "X-RateLimit-Reset": (Math.floor(Date.now() / 1000) + ttl).toString(), // UNIX timestamp
    "Content-Type": "application/json",
    ...cors_headers,
  });

  if (count > RATE_LIMIT) {
    return new NextResponse(
      JSON.stringify({
        message: "Too many requests. Try again later.",
      }),
      { status: 429, headers },
    );
  }
  // END: Rate limit

  // Setup sessione
  // La validazione prevede che:
  // 1. Il CSRF token sia valido
  // 2. Il CSRF token inviato sia uguale a quello in sessione.
  const sessionOptions = {
    password: process.env.SESSION_SECRET,
    cookieName: "session",
  };
  const session = await getIronSession<SessionData>(
    await cookies(),
    sessionOptions,
  );
  const tokens = new Tokens();
  const secret = session.secret;
  const csrf_token = request.headers.get("X-CSRF-TOKEN");

  // Conterrà i dati in POST.
  let data;

  // Parsing dei dati in POST
  try {
    data = FeedbackData.parse(await request.json());
  } catch (e) {
    return NextResponse.json(
      {
        message: e,
      },
      {
        status: 400,
        headers,
      },
    );
  }

  // Fallisce se il CSRF token:
  // 1. non è presente
  // 2. non combacia con quello in sessione
  // 3. non è valido.
  if (
    !csrf_token ||
    csrf_token != session.csrf_token ||
    !tokens.verify(secret, csrf_token)
  ) {
    return NextResponse.json(
      {
        message: "Missing or mismatching CSRF Token.",
      },
      {
        status: 400,
        headers,
      },
    );
  }

  // Logica per salvare il feedback in DatoCMS usando la content management API.
  const client = buildClient({ apiToken: process.env.FEEDBACK_API_TOKEN });

  try {
    await client.items.create({
      item_type: {
        type: "item_type",
        id: process.env.FEEDBACK_SCHEMA_ID,
      },
      utile: data.utile,
      commento: data.commento,
      link: data.link,
    });
  } catch (e) {
    console.error(e);

    return NextResponse.json(
      {
        message: "Error saving feedback.",
      },
      { status: 500, headers },
    );
  }

  // Alla fine delle operazioni, distrugge la sessione per prevenire richieste
  // successive con lo stesso token.
  session.destroy();

  return NextResponse.json(
    {
      message: "Feedback saved.",
    },
    {
      headers,
    },
  );
}
