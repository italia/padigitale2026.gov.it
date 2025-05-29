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
  related_entities: RelatedEntities[];
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

export interface RelatedEntities {
  id: string;
  type: string;
  attributes: Attributes;
  relationships: Relationships;
  meta: Meta;
}

export interface Attributes {
  name: string;
  singleton: boolean;
  sortable: boolean;
  api_key: string;
  ordering_direction: null;
  ordering_meta: null;
  tree: boolean;
  modular_block: boolean;
  draft_mode_active: boolean;
  draft_saving_active: boolean;
  all_locales_required: boolean;
  collection_appearance: string;
  has_singleton_item: boolean;
  hint: null;
  inverse_relationships_enabled: boolean;
}

export interface Meta {
  has_singleton_item: boolean;
}

export interface Relationships {
  fields: ExcerptField;
  fieldsets: ExcerptField;
  singleton_item: ExcerptField;
  ordering_field: ExcerptField;
  presentation_title_field: ExcerptField;
  presentation_image_field: ExcerptField;
  title_field: ExcerptField;
  image_preview_field: ExcerptField;
  excerpt_field: ExcerptField;
  workflow: ExcerptField;
}

export interface ExcerptField {
  data: DAT[] | DAT | null;
}

export interface DAT {
  id: string;
  type: string;
}
