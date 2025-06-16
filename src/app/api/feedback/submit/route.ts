import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { buildClient } from "@datocms/cma-client";
import { z } from "zod/v4";
import Tokens from 'csrf';

const FeedbackData = z.object({
    utile: z.boolean(),
    commento: z.string().optional(),
    link: z.string()
});

export async function POST(request: NextRequest) {
    if (!process.env.SESSION_SECRET || !process.env.FEEDBACK_API_TOKEN || !process.env.FEEDBACK_SCHEMA_ID) {
        throw new Error("SESSION_SECRET and FEEDBACK_API_TOKEN must be set.");
    }

    // Setup sessione
    const sessionOptions = { password: process.env.SESSION_SECRET, cookieName: "session" }
    const session = await getIronSession<SessionData>(await cookies(), sessionOptions);

    const tokens = new Tokens();
    const secret = session.secret;

    const csrf_token = request.headers.get("X-CSRF-TOKEN");

    // Conterrà i dati in POST.
    var data;

    // Parsing dei dati in POST
    try {
        data = FeedbackData.parse(await request.json());
    }
    catch (e) {
        return NextResponse.json({
            message: e
        }, {
            status: 400
        });
    }

    // Fallisce se il CSRF token non è presente o non combacia con quello in sessione.
    if (!csrf_token || csrf_token != session.csrf_token || !tokens.verify(secret, csrf_token)) {
        return NextResponse.json({
            message: "Missing or mismatching CSRF Token."
        }, {
            status: 400
        });
    }

    // Logica per salvare il feedback in DatoCMS usando la content management API.
    const client = buildClient({ apiToken: process.env.FEEDBACK_API_TOKEN });

    try {
        await client.items.create({
            item_type: {
                type: "item_type",
                id: process.env.FEEDBACK_SCHEMA_ID
            },
            utile: data.utile,
            commento: data.commento,
            link: data.link
        })
    }
    catch (e: any) {
        console.error(e);

        return NextResponse.json({
            message: "Error saving feedback."
        }, { status: 500 });
    }

    // Alla fine delle operazioni, distrugge la sessione per prevenire richieste
    // successive con lo stesso token.
    session.destroy();

    return NextResponse.json({
        message: "Feedback saved."
    });
}
