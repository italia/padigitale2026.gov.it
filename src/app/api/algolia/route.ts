import { algoliasearch } from "algoliasearch";
import { indexEntity, removeEntity } from "./functions_entity";
import type { Algoliasearch } from "algoliasearch";
import type { ContentType, WebhookPayload } from "./types";

if (
  !process.env.NEXT_PUBLIC_ALGOLIA_APP_ID ||
  !process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME ||
  !process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY ||
  !process.env.ALGOLIA_WRITE_API_KEY
) {
  throw Error(
    "NEXT_PUBLIC_ALGOLIA_APP_ID, ALGOLIA_WRITE_API_KEY, NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY and NEXT_PUBLIC_ALGOLIA_INDEX_NAME, must be defined."
  );
}

const algoliaClient: Algoliasearch = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.ALGOLIA_WRITE_API_KEY
);

export async function POST(request: Request) {
  const secret = request.headers.get("X-Webhook-Secret");

  if (secret != process.env.WEBHOOK_SECRET) {
    return Response.json(
      {
        message: "Unauthorized",
      },
      {
        status: 401,
      }
    );
  }

  try {
    const data: WebhookPayload = await request.json();

    switch (data.event_type) {
      case "publish":
        return Response.json(
          await indexEntity(
            data.entity.id,
            data.related_entities.pop()?.attributes.api_key as ContentType,
            algoliaClient
          )
        );
      case "unpublish":
      case "delete":
        return Response.json(await removeEntity(data.entity.id, algoliaClient));
      default:
        Response.json({
          message: `Unmapped action ${data.event_type}`,
        });
    }
  } catch (error) {
    return Response.json(
      {
        message: `${error}`,
      },
      {
        status: 400,
      }
    );
  }
}
