/**
 * Rappresenta un chunk di testo con la sua porzione di contenuto
 */
export type TextChunk = {
  chunk: string;
};

export type ContentType =
  | "page"
  | "update"
  | "resource"
  | "news"
  | "supporto"
  | "faq"
  | "dati";

export type AlgoliaDocument = {
  title?: string;
  content_type?: ContentType;
  slug?: string;
  content?: TextChunk[];
};

export type AlgoliaResponse = {
  message: string;
};

export interface WebhookPayload {
  webhook_call_id: string;
  event_triggered_at: Date;
  attempted_auto_retries_count: number;
  webhook_id: string;
  site_id: string;
  environment: string;
  is_environment_primary: boolean;
  entity_type: string;
  event_type: string;
  entity: Entity;
  related_entities: RelatedEntity[];
}

export interface Entity {
  id: string;
  type: string;
  attributes: EntityAttributes;
  relationships: EntityRelationships;
  meta: EntityMeta;
}

export interface EntityAttributes {
  title: string;
  slug: string;
  custom_update_date: null;
  seo: null;
}

export interface EntityMeta {
  created_at: Date;
  updated_at: Date;
  published_at: Date;
  publication_scheduled_at: null;
  unpublishing_scheduled_at: null;
  first_published_at: Date;
  is_valid: boolean;
  is_current_version_valid: boolean;
  is_published_version_valid: boolean;
  status: string;
  current_version: string;
  stage: null;
}

export interface EntityRelationships {
  item_type: Creator;
  creator: Creator;
}

export interface Creator {
  data: DAT[] | DAT | null;
}

export interface DAT {
  id: string;
  type: string;
}

export interface RelatedEntity {
  id: string;
  type: string;
  attributes: RelatedEntityAttributes;
  relationships: RelatedEntityRelationships;
  meta: RelatedEntityMeta;
}

export interface RelatedEntityAttributes {
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

export interface RelatedEntityMeta {
  has_singleton_item: boolean;
}

export interface RelatedEntityRelationships {
  fields: Creator;
  fieldsets: Creator;
  singleton_item: Creator;
  ordering_field: Creator;
  presentation_title_field: Creator;
  presentation_image_field: Creator;
  title_field: Creator;
  image_preview_field: Creator;
  excerpt_field: Creator;
  workflow: Creator;
}
