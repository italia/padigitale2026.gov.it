import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { NextRequest, NextResponse } from "next/server";
import { SessionData } from "../types";
import Tokens from "csrf";

if (!process.env.SESSION_SECRET) {
  throw new Error("SESSION_SECRET must be set.");
}

const sessionOptions = {
  password: process.env.SESSION_SECRET,
  cookieName: "session",
};

import cors_headers from "../cors_headers.json";

export async function OPTIONS(request: NextRequest) {
  const origin = request.headers.get("Origin") as string;

  return NextResponse.json(
    {},
    {
      headers: {
        ...cors_headers,
        "Access-Control-Allow-Origin": origin,
      },
    },
  );
}

export async function POST(request: NextRequest) {
  // questo endpoint crea un CSRF token, lo restituisce e lo mette in sessione.
  const origin = request.headers.get("Origin") as string;

  const session = await getIronSession<SessionData>(
    await cookies(),
    sessionOptions,
  );
  const tokens = new Tokens();

  // Secret non presente in sessione, ne creiamo uno.
  // Il secret non viene esposto, è legato alla sessione utente.
  if (!session.secret) {
    session.secret = tokens.secretSync();
  }

  const token = tokens.create(session.secret);

  session.csrf_token = token;

  await session.save();

  return NextResponse.json(
    {
      csrf_token: token,
    },
    {
      headers: {
        ...cors_headers,
        "Access-Control-Allow-Origin": origin,
      },
    },
  );
}
