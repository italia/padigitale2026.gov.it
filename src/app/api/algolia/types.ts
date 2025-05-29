export type ContentType =
  | "page"
  | "update"
  | "resource"
  | "news"
  | "supporto"
  | "faq"
  | "dati";

type EventType = "publish" | "unpublish" | "delete";

export type WebhookPayload = {
  id: string;
  content_type: ContentType;
  event_type: EventType;
};

export type AlgoliaDocument = {
  title?: string;
  content_type?: ContentType;
  slug?: string;
  content?: string;
};

export type AlgoliaResponse = {
  message: string;
};
