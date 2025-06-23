import { cookies } from 'next/headers';
import { getIronSession } from 'iron-session';
import { NextResponse } from 'next/server';
import { SessionData } from '../types';
import Tokens from 'csrf';

if (!process.env.SESSION_SECRET) {
    throw new Error("SESSION_SECRET must be set.");
}

const sessionOptions = { password: process.env.SESSION_SECRET, cookieName: "session" }

export async function POST() {
    // questo endpoint crea un CSRF token, lo restituisce e lo mette in sessione.
    const session = await getIronSession<SessionData>(await cookies(), sessionOptions);
    const tokens = new Tokens();

    // Secret non presente in sessione, ne creiamo uno.
    // Il secret non viene esposto, è legato alla sessione utente.
    if (!session.secret) {
        session.secret = tokens.secretSync();
    }

    const token = tokens.create(session.secret);

    session.csrf_token = token;

    await session.save();

    return NextResponse.json({
        csrf_token: token
    })
}
