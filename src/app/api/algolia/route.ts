import { algoliasearch } from "algoliasearch";
import { indexPage, removePage } from "./functions_page";
import type { Algoliasearch } from "algoliasearch";
import type { WebhookPayload } from "./types";

if (!process.env.ALGOLIA_APP_ID || !process.env.ALGOLIA_WRITE_API_KEY || !process.env.ALGOLIA_INDEX_NAME) {
    throw Error("ALGOLIA_APP_ID, ALGOLIA_WRITE_API_KEY and ALGOLIA_INDEX_NAME, must be defined.")
}

const algoliaClient: Algoliasearch = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_WRITE_API_KEY);

export async function POST(request: Request) {
    const secret = request.headers.get("X-Webhook-Secret");

    if (secret != process.env.WEBHOOK_SECRET) {
        return Response.json({
            "message": "Unauthorized"
        }, {
            status: 401
        })
    }

    try {
        const data: WebhookPayload = await request.json();

        switch (data.content_type) {
            case "page":
                switch (data.event_type) {
                    case "publish":
                        return Response.json(await indexPage(data.id, algoliaClient))
                    case "unpublish":
                    case "delete":
                        return Response.json(await removePage(data.id, algoliaClient))
                }
        }

        return Response.json({
            "message": `Unmapped content type ${data.content_type}`
        })
    }
    catch {
        return Response.json({
            "message": `Malformed request`
        }, {
            status: 400
        })
    }
}
