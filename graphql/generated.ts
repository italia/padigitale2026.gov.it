import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BooleanType: { input: boolean; output: boolean; }
  CustomData: { input: Record<string, unknown>; output: Record<string, unknown>; }
  Date: { input: string; output: string; }
  DateTime: { input: string; output: string; }
  FloatType: { input: number; output: number; }
  IntType: { input: number; output: number; }
  ItemId: { input: string; output: string; }
  JsonField: { input: unknown; output: unknown; }
  MetaTagAttributes: { input: Record<string, string>; output: Record<string, string>; }
  UploadId: { input: string; output: string; }
};

export type ArgomentoModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ArgomentoModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ArgomentoModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  label?: InputMaybe<StringFilter>;
  slug?: InputMaybe<SlugFilter>;
};

export enum ArgomentoModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC'
}

/** Record of type 📔 Argomento (argomento) */
export type ArgomentoRecord = RecordInterface & {
  __typename?: 'ArgomentoRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  label?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
};


/** Record of type 📔 Argomento (argomento) */
export type ArgomentoRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type BadgeModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<BadgeModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<BadgeModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  label?: InputMaybe<StringFilter>;
};

export enum BadgeModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC'
}

/** Record of type 🏷️ Badge (badge) */
export type BadgeRecord = RecordInterface & {
  __typename?: 'BadgeRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  label?: Maybe<Scalars['String']['output']>;
};


/** Record of type 🏷️ Badge (badge) */
export type BadgeRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Banner (banner) */
export type BannerRecord = RecordInterface & {
  __typename?: 'BannerRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  button?: Maybe<ButtonRecord>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  lightTheme: Scalars['BooleanType']['output'];
  title?: Maybe<Scalars['String']['output']>;
};


/** Block of type Banner (banner) */
export type BannerRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type 📊 Blocco grafico (blocco_grafico) */
export type BloccoGraficoRecord = RecordInterface & {
  __typename?: 'BloccoGraficoRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  chart?: Maybe<DatavizRecord>;
  id: Scalars['ItemId']['output'];
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


/** Block of type 📊 Blocco grafico (blocco_grafico) */
export type BloccoGraficoRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter Boolean fields */
export type BooleanFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['BooleanType']['input']>;
};

/** Block of type 🆗 Button (button) */
export type ButtonRecord = RecordInterface & {
  __typename?: 'ButtonRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  cmsPage?: Maybe<PageRecord>;
  href?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  target?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
};


/** Block of type 🆗 Button (button) */
export type ButtonRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Card attachment (card_attachment) */
export type CardAttachmentRecord = RecordInterface & {
  __typename?: 'CardAttachmentRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  cmsAsset?: Maybe<FileField>;
  date?: Maybe<Scalars['Date']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  href?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  label?: Maybe<Scalars['String']['output']>;
  target?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated: Scalars['BooleanType']['output'];
};


/** Block of type Card attachment (card_attachment) */
export type CardAttachmentRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type Card attachment (card_attachment) */
export type CardAttachmentRecordDescriptionArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Block of type Card generic (card_generic) */
export type CardGenericRecord = RecordInterface & {
  __typename?: 'CardGenericRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  cmsPage?: Maybe<PageRecord>;
  date?: Maybe<Scalars['Date']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  href?: Maybe<Scalars['String']['output']>;
  iconBeforeTitle?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  label?: Maybe<Scalars['String']['output']>;
  target?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


/** Block of type Card generic (card_generic) */
export type CardGenericRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type Card generic (card_generic) */
export type CardGenericRecordDescriptionArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Block of type Card Service (card_service) */
export type CardServiceRecord = RecordInterface & {
  __typename?: 'CardServiceRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  title?: Maybe<Scalars['String']['output']>;
};


/** Block of type Card Service (card_service) */
export type CardServiceRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Cards Grid (cards_grid) */
export type CardsGridRecord = RecordInterface & {
  __typename?: 'CardsGridRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  alignment?: Maybe<Scalars['String']['output']>;
  background?: Maybe<Scalars['String']['output']>;
  button?: Maybe<ButtonRecord>;
  cardTitleTag?: Maybe<Scalars['String']['output']>;
  columns?: Maybe<Scalars['String']['output']>;
  customCards?: Maybe<GenericCardListRecord>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  news: Array<NewsRecord>;
  risorse: Array<ResourceRecord>;
  title?: Maybe<Scalars['String']['output']>;
};


/** Block of type Cards Grid (cards_grid) */
export type CardsGridRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type Cards Grid (cards_grid) */
export type CardsGridRecordDescriptionArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CollectionMetadata = {
  __typename?: 'CollectionMetadata';
  count: Scalars['IntType']['output'];
};

export enum ColorBucketType {
  Black = 'black',
  Blue = 'blue',
  Brown = 'brown',
  Cyan = 'cyan',
  Green = 'green',
  Grey = 'grey',
  Orange = 'orange',
  Pink = 'pink',
  Purple = 'purple',
  Red = 'red',
  White = 'white',
  Yellow = 'yellow'
}

export type ColorField = {
  __typename?: 'ColorField';
  alpha: Scalars['IntType']['output'];
  blue: Scalars['IntType']['output'];
  cssRgb: Scalars['String']['output'];
  green: Scalars['IntType']['output'];
  hex: Scalars['String']['output'];
  red: Scalars['IntType']['output'];
};

/** Specifies how to filter by creation datetime */
export type CreatedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Block of type Hero with data (data_hero) */
export type DataHeroRecord = RecordInterface & {
  __typename?: 'DataHeroRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  argomento?: Maybe<ArgomentoRecord>;
  badge?: Maybe<BadgeRecord>;
  beneficiari?: Maybe<EnteBeneficiarioRecord>;
  button?: Maybe<ButtonRecord>;
  hideBreadcrumbs: Scalars['BooleanType']['output'];
  id: Scalars['ItemId']['output'];
  misura?: Maybe<MisuraRecord>;
  title?: Maybe<Scalars['String']['output']>;
  updateDate?: Maybe<Scalars['String']['output']>;
};


/** Block of type Hero with data (data_hero) */
export type DataHeroRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type DatavizModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<DatavizModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<DatavizModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  chartData?: InputMaybe<JsonFilter>;
  id?: InputMaybe<ItemIdFilter>;
};

export enum DatavizModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

/** Record of type 📊 Dataviz (dataviz) */
export type DatavizRecord = RecordInterface & {
  __typename?: 'DatavizRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  chartData?: Maybe<Scalars['JsonField']['output']>;
  id: Scalars['ItemId']['output'];
};


/** Record of type 📊 Dataviz (dataviz) */
export type DatavizRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter DateTime fields */
export type DateTimeFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EnteBeneficiarioModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<EnteBeneficiarioModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EnteBeneficiarioModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  label?: InputMaybe<StringFilter>;
};

export enum EnteBeneficiarioModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC'
}

/** Record of type 🏛️ Ente beneficiario (ente_beneficiario) */
export type EnteBeneficiarioRecord = RecordInterface & {
  __typename?: 'EnteBeneficiarioRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  label?: Maybe<Scalars['String']['output']>;
};


/** Record of type 🏛️ Ente beneficiario (ente_beneficiario) */
export type EnteBeneficiarioRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type FaqModelBodyField = BannerRecord | CardsGridRecord | DataHeroRecord | HeroRecord | LayoutSidebarRecord | RichTextRecord | SplitBannerRecord | VideoPlayerRecord;

export type FaqModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<FaqModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FaqModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  customUpdateDate?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<ItemIdFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
};

export enum FaqModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CustomUpdateDateAsc = 'customUpdateDate_ASC',
  CustomUpdateDateDesc = 'customUpdateDate_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** Record of type ⁉️ Domanda frequente (faq) */
export type FaqRecord = RecordInterface & {
  __typename?: 'FaqRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  body: Array<FaqModelBodyField>;
  customUpdateDate?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ItemId']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


/** Record of type ⁉️ Domanda frequente (faq) */
export type FaqRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export enum FaviconType {
  AppleTouchIcon = 'appleTouchIcon',
  Icon = 'icon',
  MsApplication = 'msApplication'
}

export type FileField = FileFieldInterface & {
  __typename?: 'FileField';
  _createdAt: Scalars['DateTime']['output'];
  /** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  alt?: Maybe<Scalars['String']['output']>;
  author?: Maybe<Scalars['String']['output']>;
  basename: Scalars['String']['output'];
  blurUpThumb?: Maybe<Scalars['String']['output']>;
  blurhash?: Maybe<Scalars['String']['output']>;
  colors: Array<ColorField>;
  copyright?: Maybe<Scalars['String']['output']>;
  customData: Scalars['CustomData']['output'];
  exifInfo: Scalars['CustomData']['output'];
  filename: Scalars['String']['output'];
  focalPoint?: Maybe<FocalPoint>;
  format: Scalars['String']['output'];
  height?: Maybe<Scalars['IntType']['output']>;
  id: Scalars['UploadId']['output'];
  md5: Scalars['String']['output'];
  mimeType: Scalars['String']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  responsiveImage?: Maybe<ResponsiveImage>;
  size: Scalars['IntType']['output'];
  smartTags: Array<Scalars['String']['output']>;
  tags: Array<Scalars['String']['output']>;
  thumbhash?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
  video?: Maybe<UploadVideoField>;
  width?: Maybe<Scalars['IntType']['output']>;
};


export type FileFieldAltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type FileFieldBlurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
  punch?: Scalars['Float']['input'];
  quality?: Scalars['Int']['input'];
  size?: Scalars['Int']['input'];
};


export type FileFieldCustomDataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type FileFieldFocalPointArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type FileFieldResponsiveImageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  imgixParams?: InputMaybe<ImgixParams>;
  locale?: InputMaybe<SiteLocale>;
  sizes?: InputMaybe<Scalars['String']['input']>;
};


export type FileFieldTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type FileFieldUrlArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
};

export type FileFieldInterface = {
  _createdAt: Scalars['DateTime']['output'];
  /** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  alt?: Maybe<Scalars['String']['output']>;
  author?: Maybe<Scalars['String']['output']>;
  basename: Scalars['String']['output'];
  blurUpThumb?: Maybe<Scalars['String']['output']>;
  blurhash?: Maybe<Scalars['String']['output']>;
  colors: Array<ColorField>;
  copyright?: Maybe<Scalars['String']['output']>;
  customData: Scalars['CustomData']['output'];
  exifInfo: Scalars['CustomData']['output'];
  filename: Scalars['String']['output'];
  focalPoint?: Maybe<FocalPoint>;
  format: Scalars['String']['output'];
  height?: Maybe<Scalars['IntType']['output']>;
  id: Scalars['UploadId']['output'];
  md5: Scalars['String']['output'];
  mimeType: Scalars['String']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  responsiveImage?: Maybe<ResponsiveImage>;
  size: Scalars['IntType']['output'];
  smartTags: Array<Scalars['String']['output']>;
  tags: Array<Scalars['String']['output']>;
  thumbhash?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
  video?: Maybe<UploadVideoField>;
  width?: Maybe<Scalars['IntType']['output']>;
};


export type FileFieldInterfaceAltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type FileFieldInterfaceBlurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
  punch?: Scalars['Float']['input'];
  quality?: Scalars['Int']['input'];
  size?: Scalars['Int']['input'];
};


export type FileFieldInterfaceCustomDataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type FileFieldInterfaceFocalPointArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type FileFieldInterfaceResponsiveImageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  imgixParams?: InputMaybe<ImgixParams>;
  locale?: InputMaybe<SiteLocale>;
  sizes?: InputMaybe<Scalars['String']['input']>;
};


export type FileFieldInterfaceTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type FileFieldInterfaceUrlArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
};

/** Record of type ⬇️ Footer (footer) */
export type FooterRecord = RecordInterface & {
  __typename?: 'FooterRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  linkColonna1: Array<PageRecord>;
  linkColonna2: Array<PageRecord>;
  linkColonna3: Array<PageRecord>;
  linkNewsletter?: Maybe<PageRecord>;
  linkUtili: Array<PageRecord>;
  title?: Maybe<Scalars['String']['output']>;
  titleColonna1?: Maybe<Scalars['String']['output']>;
  titleColonna2?: Maybe<Scalars['String']['output']>;
  titleColonna3?: Maybe<Scalars['String']['output']>;
};


/** Record of type ⬇️ Footer (footer) */
export type FooterRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Generic card list (generic_card_list) */
export type GenericCardListRecord = RecordInterface & {
  __typename?: 'GenericCardListRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  cardLayout?: Maybe<Scalars['String']['output']>;
  cards: Array<CardGenericRecord>;
  id: Scalars['ItemId']['output'];
};


/** Block of type Generic card list (generic_card_list) */
export type GenericCardListRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type GlobalSeoField = {
  __typename?: 'GlobalSeoField';
  facebookPageUrl?: Maybe<Scalars['String']['output']>;
  fallbackSeo?: Maybe<SeoField>;
  siteName?: Maybe<Scalars['String']['output']>;
  titleSuffix?: Maybe<Scalars['String']['output']>;
  twitterAccount?: Maybe<Scalars['String']['output']>;
};

/** Record of type ⬆️ Header (header) */
export type HeaderRecord = RecordInterface & {
  __typename?: 'HeaderRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  mainLinks: Array<PageRecord>;
  secondaryLinks: Array<PageRecord>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


/** Record of type ⬆️ Header (header) */
export type HeaderRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Hero (hero) */
export type HeroRecord = RecordInterface & {
  __typename?: 'HeroRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  button?: Maybe<ButtonRecord>;
  description?: Maybe<Scalars['String']['output']>;
  hideBreadcrumbs: Scalars['BooleanType']['output'];
  id: Scalars['ItemId']['output'];
  image?: Maybe<FileField>;
  lightTheme: Scalars['BooleanType']['output'];
  title?: Maybe<Scalars['String']['output']>;
  updateDate?: Maybe<Scalars['String']['output']>;
};


/** Block of type Hero (hero) */
export type HeroRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type 🏙️ Images grid (images_grid) */
export type ImagesGridRecord = RecordInterface & {
  __typename?: 'ImagesGridRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  images: Array<FileField>;
};


/** Block of type 🏙️ Images grid (images_grid) */
export type ImagesGridRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type ImgixParams = {
  /**
   * Aspect Ratio
   *
   * Specifies an aspect ratio to maintain when resizing and cropping the image
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/aspect-ratio)
   */
  ar?: InputMaybe<Scalars['String']['input']>;
  /**
   * Automatic
   *
   * Applies automatic enhancements to images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/automatic)
   */
  auto?: InputMaybe<Array<ImgixParamsAuto>>;
  /**
   * Background Color
   *
   * Colors the background of padded and partially-transparent images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/background-color)
   */
  bg?: InputMaybe<Scalars['String']['input']>;
  /**
   * Background Removal
   *
   * Removes background from image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/background-removal)
   */
  bgRemove?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Background Removal Fallback
   *
   * Overrides default fallback behavior for bg-remove failures.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/background-removal-fallback)
   */
  bgRemoveFallback?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Background Removal Foreground Type
   *
   * Specifies the image foreground type for background removal.
   *
   * Depends on: `bg-remove=true`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/background-removal-foreground-type)
   */
  bgRemoveFgType?: InputMaybe<Array<ImgixParamsBgRemoveFgType>>;
  /**
   * Background Removal Semi Transparency
   *
   * Enables background removal while retaining semi-transparent areas.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/background-removal-semi-transparency)
   */
  bgRemoveSemiTransparency?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Background Replacement
   *
   * Replaces background from image using a string based prompt.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/background-replacement)
   */
  bgReplace?: InputMaybe<Scalars['String']['input']>;
  /**
   * Background Replace Fallback
   *
   * Overrides default fallback behavior for bg-replace failures.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/background-replace-fallback)
   */
  bgReplaceFallback?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Background Replacement Negative Prompt
   *
   * Provides a negative text suggestion for background replacement.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/background-replacement-negative-prompt)
   */
  bgReplaceNegPrompt?: InputMaybe<Scalars['String']['input']>;
  /**
   * Blend
   *
   * Specifies the location of the blend image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend)
   */
  blend?: InputMaybe<Scalars['String']['input']>;
  /**
   * Blend Align
   *
   * Changes the blend alignment relative to the parent image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-align)
   */
  blendAlign?: InputMaybe<Array<ImgixParamsBlendAlign>>;
  /**
   * Blend Alpha
   *
   * Changes the alpha of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-alpha)
   */
  blendAlpha?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Blend Color
   *
   * Specifies a color to use when applying the blend.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-color)
   */
  blendColor?: InputMaybe<Scalars['String']['input']>;
  /**
   * Blend Crop
   *
   * Specifies the type of crop for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-crop)
   */
  blendCrop?: InputMaybe<Array<ImgixParamsBlendCrop>>;
  /**
   * Blend Fit
   *
   * Specifies the fit mode for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-fit)
   */
  blendFit?: InputMaybe<ImgixParamsBlendFit>;
  /**
   * Blend Height
   *
   * Adjusts the height of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-height)
   */
  blendH?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Blend Mode
   *
   * Sets the blend mode for a blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-mode)
   */
  blendMode?: InputMaybe<ImgixParamsBlendMode>;
  /**
   * Blend Padding
   *
   * Applies padding to the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-padding)
   */
  blendPad?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Blend Size
   *
   * Adjusts the size of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-size)
   */
  blendSize?: InputMaybe<ImgixParamsBlendSize>;
  /**
   * Blend Width
   *
   * Adjusts the width of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-width)
   */
  blendW?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Blend X Position
   *
   * Adjusts the x-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-x-position)
   */
  blendX?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Blend Y Position
   *
   * Adjusts the y-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-y-position)
   */
  blendY?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Gaussian Blur
   *
   * Applies a gaussian blur to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/stylize/gaussian-blur)
   */
  blur?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Border Size & Color
   *
   * Applies a border to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size)
   */
  border?: InputMaybe<Scalars['String']['input']>;
  /**
   * Border Bottom
   *
   * Sets bottom border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/border-bottom)
   */
  borderBottom?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Border Left
   *
   * Sets left border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/border-left)
   */
  borderLeft?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Outer Border Radius
   *
   * Sets the outer radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/outer-border-radius)
   */
  borderRadius?: InputMaybe<Scalars['String']['input']>;
  /**
   * Inner Border Radius
   *
   * Sets the inner radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/inner-border-radius)
   */
  borderRadiusInner?: InputMaybe<Scalars['String']['input']>;
  /**
   * Border Right
   *
   * Sets right border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/border-right)
   */
  borderRight?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Border Top
   *
   * Sets top border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/border-top)
   */
  borderTop?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Brightness
   *
   * Adjusts the brightness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/brightness)
   */
  bri?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Client Hints
   *
   * Sets one or more Client-Hints headers
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/client-hints)
   */
  ch?: InputMaybe<Array<ImgixParamsCh>>;
  /**
   * Chroma Subsampling
   *
   * Specifies the output chroma subsampling rate.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/chroma-subsampling)
   */
  chromasub?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Color Quantization
   *
   * Limits the number of unique colors in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/color-quantization)
   */
  colorquant?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Palette Color Count
   *
   * Specifies how many colors to include in a palette-extraction response.
   *
   * Depends on: `palette`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/color-palette/palette-color-count)
   */
  colors?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Contrast
   *
   * Adjusts the contrast of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/contrast)
   */
  con?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Mask Corner Radius
   *
   * Specifies the radius value for a rounded corner mask.
   *
   * Depends on: `mask=corners`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/mask-image/mask-corner-radius)
   */
  cornerRadius?: InputMaybe<Scalars['String']['input']>;
  /**
   * Crop Mode
   *
   * Specifies how to crop an image.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/crop-mode)
   */
  crop?: InputMaybe<Array<ImgixParamsCrop>>;
  /**
   * Color Space
   *
   * Specifies the color space of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/color-space)
   */
  cs?: InputMaybe<ImgixParamsCs>;
  /**
   * Download
   *
   * Forces a URL to use send-file in its response.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/download)
   */
  dl?: InputMaybe<Scalars['String']['input']>;
  /**
   * Dots Per Inch
   *
   * Sets the DPI value in the EXIF header.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/dots-per-inch)
   */
  dpi?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Device Pixel Ratio
   *
   * Adjusts the device-pixel ratio of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/device-pixel-ratio)
   */
  dpr?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Duotone
   *
   * Applies a duotone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/stylize/duotone)
   */
  duotone?: InputMaybe<Scalars['String']['input']>;
  /**
   * Duotone Alpha
   *
   * Changes the alpha of the duotone effect atop the source image.
   *
   * Depends on: `duotone`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/stylize/duotone-alpha)
   */
  duotoneAlpha?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Exposure
   *
   * Adjusts the exposure of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/exposure)
   */
  exp?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Url Expiration Timestamp
   *
   * A Unix timestamp specifying a UTC time. Requests made to this URL after that time will output a 404 status code.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/expiration)
   */
  expires?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Face Blur
   *
   * Specifies the amount of blur to apply to detected faces. Defaults to 0.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/face-detection/face-blur)
   */
  faceBlur?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Face Pixelation
   *
   * Specifies the pixelation amount of the face.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/face-detection/face-pixelation)
   */
  facePixel?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Face Index
   *
   * Selects a face to crop to.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/face-detection/face-index)
   */
  faceindex?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Face Padding
   *
   * Adjusts padding around a selected face.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/face-detection/face-padding)
   */
  facepad?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Json Face Data
   *
   * Specifies that face data should be included in output when combined with `fm=json`.
   *
   * Depends on: `fm=json`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/face-detection/json-face-data)
   */
  faces?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Fill Mode
   *
   * Determines how to fill in additional space created by the fit setting
   *
   * Depends on: `fit`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-mode)
   */
  fill?: InputMaybe<ImgixParamsFill>;
  /**
   * Fill Color
   *
   * Sets the fill color for images with additional space created by the fit setting
   *
   * Depends on: `fill=solid`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-color)
   */
  fillColor?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fill Generative Fallback
   *
   * Sets the fallback behavior for generative fill.
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-generative-fallback)
   */
  fillGenFallback?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Fill Generative Negative Prompt
   *
   * Provides a negative text suggestion to the generative fill parameter. Used to reduce the probability of a subject, detail, or object appearing in generative output.
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-generative-negative-prompt)
   */
  fillGenNegPrompt?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fill Generative Position
   *
   * Sets the position of the Origin Image in relation to the generative fill.
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-generative-position)
   */
  fillGenPos?: InputMaybe<Array<ImgixParamsFillGenPos>>;
  /**
   * Fill Generative Prompt
   *
   * Provides a text suggestion to the generative fill parameter.
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-generative-prompt)
   */
  fillGenPrompt?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fill Generative Seed
   *
   * Sets the generative seed value. Used to generate similar outputs from different prompts.
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-generative-seed)
   */
  fillGenSeed?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Fill Gradient Color Space
   *
   * Defines the color space as linear, sRGB, Oklab, HSL, or LCH for gradient color interpolation
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-color-space)
   */
  fillGradientCs?: InputMaybe<ImgixParamsFillGradientCs>;
  /**
   * Fill Gradient Linear
   *
   * Blends a gradient between two colors, {color1} and {color2}, along a straight path
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-linear)
   */
  fillGradientLinear?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fill Gradient Linear Direction
   *
   * The fill-gradient-linear-direction specifies the gradient's direction, flowing towards the bottom, top, right, or left
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-linear-direction)
   */
  fillGradientLinearDirection?: InputMaybe<Array<ImgixParamsFillGradientLinearDirection>>;
  /**
   * Fill Gradient Radial
   *
   * The fill-gradient-radial parameter creates a circular gradient transitioning from a central color (Color1) to an outer color (Color2)
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-radial)
   */
  fillGradientRadial?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fill Gradient Radial Radius
   *
   * Parameter defines the radial gradient's radius as pixels or a percentage (0.0-1.0) of the image's smallest dimension
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-radial-radius)
   */
  fillGradientRadialRadius?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fill Gradient Radial X
   *
   * Specifies the location of the radial gradient's center along the x-axis, using either a pixel value or a floating point percentage (ranging from 0.0 to 1.0) of the image's width
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-radial-x)
   */
  fillGradientRadialX?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Fill Gradient Radial Y
   *
   * Parameter sets the radial gradient's center on the y-axis, using pixels or a 0.0 to 1.0 percentage of the image's height
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-radial-y)
   */
  fillGradientRadialY?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Fill Gradient Type
   *
   * Specifies if a gradient is radial (circular) or linear (straight)
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-type)
   */
  fillGradientType?: InputMaybe<ImgixParamsFillGradientType>;
  /**
   * Resize Fit Mode
   *
   * Specifies how to map the source image to the output image dimensions.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/resize-fit-mode)
   */
  fit?: InputMaybe<ImgixParamsFit>;
  /**
   * Flip Axis
   *
   * Flips an image on a specified axis.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/rotation/flip-axis)
   */
  flip?: InputMaybe<ImgixParamsFlip>;
  /**
   * Output Format
   *
   * Changes the format of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/output-format)
   */
  fm?: InputMaybe<ImgixParamsFm>;
  /**
   * Focal Point Debug
   *
   * Displays crosshairs identifying the location of the set focal point
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/focal-point-crop/focal-point-debug)
   */
  fpDebug?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Focal Point X Position
   *
   * Sets the relative horizontal value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/focal-point-crop/focal-point-x-position)
   */
  fpX?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Focal Point Y Position
   *
   * Sets the relative vertical value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/focal-point-crop/focal-point-y-position)
   */
  fpY?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Focal Point Zoom
   *
   * Sets the relative zoom value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/focal-point-crop/focal-point-zoom)
   */
  fpZ?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Frames Per Second
   *
   * Specifies the framerate of the generated image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/animation/frames-per-second)
   */
  fps?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Frame Selection
   *
   * Specifies the frame of an animated image to use.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/animation/frame-selection)
   */
  frame?: InputMaybe<Scalars['String']['input']>;
  /**
   * Gamma
   *
   * Adjusts the gamma of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/gamma)
   */
  gam?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Animated Gif Quality
   *
   * Specifies the quality of the animated gif. The higher the value, the better more compression is applied.
   *
   * Depends on: `fm=gif`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/animation/animated-gif-quality)
   */
  gifQ?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Grid Colors
   *
   * Sets grid colors for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/grid-colors)
   */
  gridColors?: InputMaybe<Scalars['String']['input']>;
  /**
   * Grid Size
   *
   * Sets grid size for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/grid-size)
   */
  gridSize?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Image Height
   *
   * Adjusts the height of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/image-height)
   */
  h?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Highlight
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/highlight)
   */
  high?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Halftone
   *
   * Applies a half-tone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/stylize/halftone)
   */
  htn?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Hue Shift
   *
   * Adjusts the hue of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/hue-shift)
   */
  hue?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Frame Interval
   *
   * Displays every Nth frame starting with the first frame.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/animation/frame-interval)
   */
  interval?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Invert
   *
   * Inverts the colors on the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/invert)
   */
  invert?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Iptc Passthrough
   *
   * Determine if IPTC data should be passed for JPEG images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/iptc-passthrough)
   */
  iptc?: InputMaybe<ImgixParamsIptc>;
  /**
   * Jpg Progressive
   *
   * Specifies whether or not a jpg/jpeg uses progressive (true) or baseline (false)
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/jpg-progressive)
   */
  jpgProgressive?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Animation Loop Count
   *
   * Specifies the number of times an animated image should repeat. A value of 0 means infinite looping.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/animation)
   */
  loop?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Lossless Compression
   *
   * Specifies that the output image should be a lossless variant.
   *
   * Depends on: `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/lossless-compression)
   */
  lossless?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * License Plate Blur
   *
   * Specifies the amount of blur to apply to detected license plates. Defaults to 0.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/license-plate-detection/license-plate-blur)
   */
  lpBlur?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Watermark Image Url
   *
   * Specifies the location of the watermark image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-image-url)
   */
  mark?: InputMaybe<Scalars['String']['input']>;
  /**
   * Watermark Alignment Mode
   *
   * Changes the watermark alignment relative to the parent image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-alignment-mode)
   */
  markAlign?: InputMaybe<Array<ImgixParamsMarkAlign>>;
  /**
   * Watermark Alpha
   *
   * Changes the alpha of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-alpha)
   */
  markAlpha?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Watermark Base Url
   *
   * Changes base URL of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-base-url)
   */
  markBase?: InputMaybe<Scalars['String']['input']>;
  /**
   * Watermark Fit Mode
   *
   * Specifies the fit mode for watermark images.
   *
   * Depends on: `mark`, `markw`, `markh`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-fit-mode)
   */
  markFit?: InputMaybe<ImgixParamsMarkFit>;
  /**
   * Watermark Height
   *
   * Adjusts the height of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-height)
   */
  markH?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Watermark If Minimum Height
   *
   * Displays the watermark if rendered base image pixel height is equal to or larger than the supplied value
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-if-minimum-height)
   */
  markIfMinHeight?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Watermark If Minimum Width
   *
   * Displays the watermark if rendered base image pixel width is equal to or larger than the supplied value
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-if-minimum-width)
   */
  markIfMinWidth?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Watermark Padding
   *
   * Applies padding to the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-padding)
   */
  markPad?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Watermark Rotation
   *
   * Rotates a watermark or tiled watermarks by a specified number of degrees.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-rotation)
   */
  markRot?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Watermark Scale
   *
   * Adjusts the scale of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-scale)
   */
  markScale?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Watermark Tile
   *
   * Adds tiled watermark.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-tile)
   */
  markTile?: InputMaybe<ImgixParamsMarkTile>;
  /**
   * Watermark Width
   *
   * Adjusts the width of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-width)
   */
  markW?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Watermark X Position
   *
   * Adjusts the x-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-x-position)
   */
  markX?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Watermark Y Position
   *
   * Adjusts the y-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-y-position)
   */
  markY?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Mask Type
   *
   * Defines the type of mask and specifies the URL if that type is selected.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/mask-image/mask-type)
   */
  mask?: InputMaybe<Scalars['String']['input']>;
  /**
   * Mask Background Color
   *
   * Colors the background of the transparent mask area of images
   *
   * Depends on: `mask`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/mask-image/mask-background-color)
   */
  maskBg?: InputMaybe<Scalars['String']['input']>;
  /**
   * Maximum Height
   *
   * Specifies the maximum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/maximum-height)
   */
  maxH?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Maximum Width
   *
   * Specifies the maximum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/maximum-width)
   */
  maxW?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Minimum Height
   *
   * Specifies the minimum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/minimum-height)
   */
  minH?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Minimum Width
   *
   * Specifies the minimum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/minimum-width)
   */
  minW?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Monochrome
   *
   * Applies a monochrome effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/stylize/monochrome)
   */
  monochrome?: InputMaybe<Scalars['String']['input']>;
  /**
   * Noise Reduction Bound
   *
   * Reduces the noise in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/noise-reduction/noise-reduction-bound)
   */
  nr?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Noise Reduction Sharpen
   *
   * Provides a threshold by which to sharpen an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/noise-reduction/noise-reduction-sharpen)
   */
  nrs?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Object Removal Negative Prompt
   *
   * Provides a negative text suggestion to object-removal-prompt. Used to reduce the probability of a subject, detail, or object appearing in generative output.
   *
   * Depends on: `object-removal-rect`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/object-manipulation/object-removal-negative-prompt)
   */
  objectRemovalNegativePrompt?: InputMaybe<Scalars['String']['input']>;
  /**
   * Object Removal Prompt
   *
   * Suggest auto generative fill for the object-removal-rect parameter
   *
   * Depends on: `object-removal-rect`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/object-manipulation/object-removal-prompt)
   */
  objectRemovalPrompt?: InputMaybe<Scalars['String']['input']>;
  /**
   * Object Removal
   *
   * Using a specified rectangle, an object is removed from the image
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/object-manipulation/object-removal)
   */
  objectRemovalRect?: InputMaybe<Scalars['String']['input']>;
  /**
   * Object Removal Seed
   *
   * Sets the generative seed value for object-removal. Used to generate new outputs from the same prompt
   *
   * Depends on: `object-removal-rect`, `object-removal-prompt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/object-manipulation/object-removal-seed)
   */
  objectRemovalSeed?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Orientation
   *
   * Changes the image orientation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/rotation/orientation)
   */
  orient?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Padding
   *
   * Pads an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/padding)
   */
  pad?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Padding Bottom
   *
   * Sets bottom padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/padding-bottom)
   */
  padBottom?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Padding Left
   *
   * Sets left padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/padding-left)
   */
  padLeft?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Padding Right
   *
   * Sets right padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/padding-right)
   */
  padRight?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Padding Top
   *
   * Sets top padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/padding-top)
   */
  padTop?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Pdf Page Number
   *
   * Selects a page from a PDF for display.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/pdf/pdf-page-number)
   */
  page?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Color Palette Extraction
   *
   * Specifies an output format for palette-extraction.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/color-palette/color-palette-extraction)
   */
  palette?: InputMaybe<ImgixParamsPalette>;
  /**
   * Pdf Annotation
   *
   * Enables or disables PDF annotation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/pdf/pdf-annotation)
   */
  pdfAnnotation?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Css Prefix
   *
   * Specifies a CSS prefix for all classes in palette-extraction.
   *
   * Depends on: `palette=css`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/color-palette/css-prefix)
   */
  prefix?: InputMaybe<Scalars['String']['input']>;
  /**
   * Pixellate
   *
   * Applies a pixelation effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/stylize/pixellate)
   */
  px?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Output Quality
   *
   * Adjusts the quality of an output image.
   *
   * Depends on: `fm=avif`, `fm=jpg`, `fm=pjpg`, `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/output-quality)
   */
  q?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Rasterize Bypass
   *
   * Bypasses all rendering parameters (including default parameters) and serves the original image. Works for svg+xml,x-eps,pdf, and vnd.adobe.illustrator.
   */
  rasterizeBypass?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Source Rectangle Region
   *
   * Crops an image to a specified rectangle.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/source-rectangle-region)
   */
  rect?: InputMaybe<Scalars['String']['input']>;
  /**
   * Reverse
   *
   * Reverses the frame order on the source animation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/animation/reverse)
   */
  reverse?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Rotation
   *
   * Rotates an image by a specified number of degrees.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/rotation/rotation)
   */
  rot?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Rotation Type
   *
   * Changes the rotation type.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/rotation/rotation-type)
   */
  rotType?: InputMaybe<ImgixParamsRotType>;
  /**
   * Saturation
   *
   * Adjusts the saturation of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/saturation)
   */
  sat?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Sepia Tone
   *
   * Applies a sepia effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/stylize/sepia-tone)
   */
  sepia?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Shadow
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/shadow)
   */
  shad?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Sharpen
   *
   * Adjusts the sharpness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/sharpen)
   */
  sharp?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Frame Skip
   *
   * Skips every Nth frame starting with the first frame.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/animation/frame-skip)
   */
  skip?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Bypasses any [DatoCMS Automatic Image Optimization](https://www.datocms.com/docs/cdn-settings/advanced-asset-settings) that might be set up for the project.
   *
   * Exercise caution when using this parameter, as it could significantly increase your bandwidth costs.
   */
  skipDefaultOptimizations?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Sanitize Svg
   *
   * Specifies whether to sanitize an SVG.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/sanitize-svg)
   */
  svgSanitize?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Transparency
   *
   * Adds checkerboard behind images which support transparency.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/transparency)
   */
  transparency?: InputMaybe<ImgixParamsTransparency>;
  /**
   * Trim Image
   *
   * Trims the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/trim/trim-image)
   */
  trim?: InputMaybe<ImgixParamsTrim>;
  /**
   * Trim Alpha
   *
   * Specifies a trim alpha on a trim operation.
   *
   * Depends on: `trim=alpha`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/trim/trim-alpha)
   */
  trimAlpha?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Trim Color
   *
   * Specifies a trim color on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/trim/trim-color)
   */
  trimColor?: InputMaybe<Scalars['String']['input']>;
  /**
   * Trim Mean Difference
   *
   * Specifies the mean difference on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/trim/trim-mean-difference)
   */
  trimMd?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Trim Padding
   *
   * Pads the area of the source image before trimming.
   *
   * Depends on: `trim`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/trim/trim-padding)
   */
  trimPad?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Trim Standard Deviation
   *
   * Specifies the standard deviation on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/trim/trim-standard-deviation)
   */
  trimSd?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Trim Tolerance
   *
   * Specifies the tolerance on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/trim/trim-tolerance)
   */
  trimTol?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Text String
   *
   * Sets the text string to render.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-string)
   */
  txt?: InputMaybe<Scalars['String']['input']>;
  /**
   * Text Align
   *
   * Sets the vertical and horizontal alignment of rendered text relative to the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-align)
   */
  txtAlign?: InputMaybe<Array<ImgixParamsTxtAlign>>;
  /**
   * Text Clipping Mode
   *
   * Sets the clipping properties of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-clipping-mode)
   */
  txtClip?: InputMaybe<Array<ImgixParamsTxtClip>>;
  /**
   * Text Color
   *
   * Specifies the color of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-color)
   */
  txtColor?: InputMaybe<Scalars['String']['input']>;
  /**
   * Text Fit Mode
   *
   * Specifies the fit approach for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-fit-mode)
   */
  txtFit?: InputMaybe<ImgixParamsTxtFit>;
  /**
   * Text Font
   *
   * Selects a font for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-font)
   */
  txtFont?: InputMaybe<Scalars['String']['input']>;
  /**
   * Text Leading
   *
   * Sets the leading (line spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/typesetting-endpoint/text-leading)
   */
  txtLead?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Outline
   *
   * Outlines the rendered text with a specified color.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-outline)
   */
  txtLine?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Outline Color
   *
   * Specifies a text outline color.
   *
   * Depends on: `txt`, `txtline`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-outline-color)
   */
  txtLineColor?: InputMaybe<Scalars['String']['input']>;
  /**
   * Text Padding
   *
   * Specifies the padding (in device-independent pixels) between a textbox and the edges of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-padding)
   */
  txtPad?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Shadow
   *
   * Applies a shadow to rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-shadow)
   */
  txtShad?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Text Font Size
   *
   * Sets the font size of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-font-size)
   */
  txtSize?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Tracking
   *
   * Sets the tracking (letter spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/typesetting-endpoint/text-tracking)
   */
  txtTrack?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Width
   *
   * Sets the width of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-width)
   */
  txtWidth?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text X Position
   *
   * Sets the horizontal (x) position of the text in pixels relative to the left edge of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-x-position)
   */
  txtX?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Y Position
   *
   * Sets the vertical (y) position of the text in pixels relative to the top edge of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-y-position)
   */
  txtY?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Super Resolution
   *
   * Uses generative AI fill to upscale low resolution images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/super-resolution)
   */
  upscale?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Super Resolution Fallback
   *
   * Overrides default fallback behavior for super resolution failures
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/super-resolution)
   */
  upscaleFallback?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Unsharp Mask
   *
   * Sharpens the source image using an unsharp mask.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/unsharp-mask)
   */
  usm?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Unsharp Mask Radius
   *
   * Specifies the radius for an unsharp mask operation.
   *
   * Depends on: `usm`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/unsharp-mask-radius)
   */
  usmrad?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Vibrance
   *
   * Adjusts the vibrance of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/vibrance)
   */
  vib?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Image Width
   *
   * Adjusts the width of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/image-width)
   */
  w?: InputMaybe<Scalars['FloatType']['input']>;
};

export enum ImgixParamsAuto {
  Compress = 'compress',
  Enhance = 'enhance',
  Format = 'format',
  Redeye = 'redeye'
}

export enum ImgixParamsBgRemoveFgType {
  Auto = 'auto',
  Car = 'car'
}

export enum ImgixParamsBlendAlign {
  Bottom = 'bottom',
  Center = 'center',
  Left = 'left',
  Middle = 'middle',
  Right = 'right',
  Top = 'top'
}

export enum ImgixParamsBlendCrop {
  Bottom = 'bottom',
  Faces = 'faces',
  Left = 'left',
  Right = 'right',
  Top = 'top'
}

export enum ImgixParamsBlendFit {
  Clamp = 'clamp',
  Clip = 'clip',
  Crop = 'crop',
  Max = 'max',
  Scale = 'scale'
}

export enum ImgixParamsBlendMode {
  Burn = 'burn',
  Color = 'color',
  Darken = 'darken',
  Difference = 'difference',
  Dodge = 'dodge',
  Exclusion = 'exclusion',
  Hardlight = 'hardlight',
  Hue = 'hue',
  Lighten = 'lighten',
  Luminosity = 'luminosity',
  Multiply = 'multiply',
  Normal = 'normal',
  Overlay = 'overlay',
  Saturation = 'saturation',
  Screen = 'screen',
  Softlight = 'softlight'
}

export enum ImgixParamsBlendSize {
  Inherit = 'inherit'
}

export enum ImgixParamsCh {
  Dpr = 'dpr',
  SaveData = 'saveData',
  Width = 'width'
}

export enum ImgixParamsCrop {
  Bottom = 'bottom',
  Edges = 'edges',
  Entropy = 'entropy',
  Faces = 'faces',
  Focalpoint = 'focalpoint',
  Left = 'left',
  Right = 'right',
  Top = 'top'
}

export enum ImgixParamsCs {
  Adobergb1998 = 'adobergb1998',
  Origin = 'origin',
  Srgb = 'srgb',
  Strip = 'strip',
  Tinysrgb = 'tinysrgb'
}

export enum ImgixParamsFill {
  Blur = 'blur',
  Gen = 'gen',
  Generative = 'generative',
  Gradient = 'gradient',
  Solid = 'solid'
}

export enum ImgixParamsFillGenPos {
  Bottom = 'bottom',
  Center = 'center',
  Left = 'left',
  Middle = 'middle',
  Right = 'right',
  Top = 'top'
}

export enum ImgixParamsFillGradientCs {
  Hsl = 'hsl',
  Lch = 'lch',
  Linear = 'linear',
  Oklab = 'oklab',
  Srgb = 'srgb'
}

export enum ImgixParamsFillGradientLinearDirection {
  Bottom = 'bottom',
  Left = 'left',
  Right = 'right',
  Top = 'top'
}

export enum ImgixParamsFillGradientType {
  Linear = 'linear',
  Radial = 'radial'
}

export enum ImgixParamsFit {
  Clamp = 'clamp',
  Clip = 'clip',
  Crop = 'crop',
  Facearea = 'facearea',
  Fill = 'fill',
  Fillmax = 'fillmax',
  Max = 'max',
  Min = 'min',
  Scale = 'scale'
}

export enum ImgixParamsFlip {
  H = 'h',
  Hv = 'hv',
  V = 'v'
}

export enum ImgixParamsFm {
  Avif = 'avif',
  Blurhash = 'blurhash',
  Gif = 'gif',
  Jp2 = 'jp2',
  Jpg = 'jpg',
  Json = 'json',
  Jxr = 'jxr',
  Mp4 = 'mp4',
  Pjpg = 'pjpg',
  Png = 'png',
  Png8 = 'png8',
  Png32 = 'png32',
  Webm = 'webm',
  Webp = 'webp'
}

export enum ImgixParamsIptc {
  Allow = 'allow',
  Block = 'block'
}

export enum ImgixParamsMarkAlign {
  Bottom = 'bottom',
  Center = 'center',
  Left = 'left',
  Middle = 'middle',
  Right = 'right',
  Top = 'top'
}

export enum ImgixParamsMarkFit {
  Clip = 'clip',
  Crop = 'crop',
  Fill = 'fill',
  Max = 'max',
  Scale = 'scale'
}

export enum ImgixParamsMarkTile {
  Grid = 'grid'
}

export enum ImgixParamsPalette {
  Css = 'css',
  Json = 'json'
}

export enum ImgixParamsRotType {
  Pivot = 'pivot',
  Straighten = 'straighten'
}

export enum ImgixParamsTransparency {
  Grid = 'grid'
}

export enum ImgixParamsTrim {
  Alpha = 'alpha',
  Auto = 'auto',
  Color = 'color'
}

export enum ImgixParamsTxtAlign {
  Bottom = 'bottom',
  Center = 'center',
  Left = 'left',
  Middle = 'middle',
  Right = 'right',
  Top = 'top'
}

export enum ImgixParamsTxtClip {
  Ellipsis = 'ellipsis',
  End = 'end',
  Middle = 'middle',
  Start = 'start'
}

export enum ImgixParamsTxtFit {
  Max = 'max'
}

/** Specifies how to filter by usage */
export type InUseFilter = {
  /** Search uploads that are currently used by some record or not */
  eq?: InputMaybe<Scalars['BooleanType']['input']>;
};

/** Specifies how to filter by ID */
export type ItemIdFilter = {
  /** Search the record with the specified ID */
  eq?: InputMaybe<Scalars['ItemId']['input']>;
  /** Search records with the specified IDs */
  in?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
  /** Exclude the record with the specified ID */
  neq?: InputMaybe<Scalars['ItemId']['input']>;
  /** Search records that do not have the specified IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
};

export enum ItemStatus {
  Draft = 'draft',
  Published = 'published',
  Updated = 'updated'
}

/** Specifies how to filter JSON fields */
export type JsonFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
};

/** Block of type LatestPages (latest) */
export type LatestRecord = RecordInterface & {
  __typename?: 'LatestRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  title?: Maybe<Scalars['String']['output']>;
};


/** Block of type LatestPages (latest) */
export type LatestRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type ↔️ Layout con sidebar (layout_sidebar) */
export type LayoutSidebarRecord = RecordInterface & {
  __typename?: 'LayoutSidebarRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  content: Array<RichTextRecord>;
  id: Scalars['ItemId']['output'];
  sidebar?: Maybe<NavScrollRecord>;
};


/** Block of type ↔️ Layout con sidebar (layout_sidebar) */
export type LayoutSidebarRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type 🔗 Link (link) */
export type LinkRecord = RecordInterface & {
  __typename?: 'LinkRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  cmsPage?: Maybe<PageRecord>;
  href?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  target?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
};


/** Block of type 🔗 Link (link) */
export type LinkRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter Multiple-links fields */
export type LinksFilter = {
  /** Filter records linked to all of the specified records. The specified values must be Record IDs */
  allIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
  /** Filter records linked to at least one of the specified records. The specified values must be Record IDs */
  anyIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
  /** Search for records with an exact match. The specified values must be Record IDs */
  eq?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records not linked to any of the specified records. The specified values must be Record IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
};

export type MisuraModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<MisuraModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MisuraModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  basePath?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  label?: InputMaybe<StringFilter>;
  slug?: InputMaybe<SlugFilter>;
};

export enum MisuraModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  BasePathAsc = 'basePath_ASC',
  BasePathDesc = 'basePath_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC'
}

/** Record of type 📐 Misura (misura) */
export type MisuraRecord = RecordInterface & {
  __typename?: 'MisuraRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  basePath?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  label?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
};


/** Record of type 📐 Misura (misura) */
export type MisuraRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export enum MuxThumbnailFormatType {
  Gif = 'gif',
  Jpg = 'jpg',
  Png = 'png'
}

export type NavScrollModelContentField = {
  __typename?: 'NavScrollModelContentField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

/** Block of type ⚓ Nav Scroll (nav_scroll) */
export type NavScrollRecord = RecordInterface & {
  __typename?: 'NavScrollRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  content?: Maybe<NavScrollModelContentField>;
  id: Scalars['ItemId']['output'];
  title?: Maybe<Scalars['String']['output']>;
};


/** Block of type ⚓ Nav Scroll (nav_scroll) */
export type NavScrollRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type NewsModelBodyField = BannerRecord | BloccoGraficoRecord | CardsGridRecord | DataHeroRecord | HeroRecord | LatestRecord | LayoutSidebarRecord | RichTextRecord | SplitBannerRecord | VideoPlayerRecord;

export type NewsModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<NewsModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<NewsModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  category?: InputMaybe<StringFilter>;
  customUpdateDate?: InputMaybe<DateTimeFilter>;
  data?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  slug?: InputMaybe<SlugFilter>;
  summary?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export enum NewsModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CategoryAsc = 'category_ASC',
  CategoryDesc = 'category_DESC',
  CustomUpdateDateAsc = 'customUpdateDate_ASC',
  CustomUpdateDateDesc = 'customUpdateDate_DESC',
  DataAsc = 'data_ASC',
  DataDesc = 'data_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  SummaryAsc = 'summary_ASC',
  SummaryDesc = 'summary_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** Record of type 🗞️ Notizia (news) */
export type NewsRecord = RecordInterface & {
  __typename?: 'NewsRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  body: Array<NewsModelBodyField>;
  category?: Maybe<Scalars['String']['output']>;
  customUpdateDate?: Maybe<Scalars['DateTime']['output']>;
  data?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


/** Record of type 🗞️ Notizia (news) */
export type NewsRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by image orientation */
export type OrientationFilter = {
  /** Search uploads with the specified orientation */
  eq?: InputMaybe<UploadOrientation>;
  /** Exclude uploads with the specified orientation */
  neq?: InputMaybe<UploadOrientation>;
};

export type PageModelBodyField = BannerRecord | BloccoGraficoRecord | CardServiceRecord | CardsGridRecord | DataHeroRecord | HeroRecord | LatestRecord | LayoutSidebarRecord | RichTextRecord | SplitBannerRecord | TableListRecord | VideoPlayerRecord;

export type PageModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  customUpdateDate?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<ItemIdFilter>;
  seo?: InputMaybe<SeoFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
};

export enum PageModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CustomUpdateDateAsc = 'customUpdateDate_ASC',
  CustomUpdateDateDesc = 'customUpdateDate_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** Record of type 📄 Page (page) */
export type PageRecord = RecordInterface & {
  __typename?: 'PageRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  body: Array<PageModelBodyField>;
  customUpdateDate?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ItemId']['output'];
  seo?: Maybe<SeoField>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


/** Record of type 📄 Page (page) */
export type PageRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by publication datetime */
export type PublishedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

/** The query root for this schema */
export type Query = {
  __typename?: 'Query';
  /** Returns meta information regarding a record collection */
  _allArgomentosMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allBadgesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allDatavizsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allEnteBeneficiariosMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allFaqsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allMisurasMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allNewsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allPagesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allResourcesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allUpdatesMeta: CollectionMetadata;
  /** Returns meta information regarding an assets collection */
  _allUploadsMeta: CollectionMetadata;
  /** Returns the single instance record */
  _site: Site;
  /** Returns a collection of records */
  allArgomentos: Array<ArgomentoRecord>;
  /** Returns a collection of records */
  allBadges: Array<BadgeRecord>;
  /** Returns a collection of records */
  allDatavizs: Array<DatavizRecord>;
  /** Returns a collection of records */
  allEnteBeneficiarios: Array<EnteBeneficiarioRecord>;
  /** Returns a collection of records */
  allFaqs: Array<FaqRecord>;
  /** Returns a collection of records */
  allMisuras: Array<MisuraRecord>;
  /** Returns a collection of records */
  allNews: Array<NewsRecord>;
  /** Returns a collection of records */
  allPages: Array<PageRecord>;
  /** Returns a collection of records */
  allResources: Array<ResourceRecord>;
  /** Returns a collection of records */
  allUpdates: Array<UpdateRecord>;
  /** Returns a collection of assets */
  allUploads: Array<FileField>;
  /** Returns a specific record */
  argomento?: Maybe<ArgomentoRecord>;
  /** Returns a specific record */
  badge?: Maybe<BadgeRecord>;
  /** Returns a specific record */
  dataviz?: Maybe<DatavizRecord>;
  /** Returns a specific record */
  enteBeneficiario?: Maybe<EnteBeneficiarioRecord>;
  /** Returns a specific record */
  faq?: Maybe<FaqRecord>;
  /** Returns the single instance record */
  footer?: Maybe<FooterRecord>;
  /** Returns the single instance record */
  header?: Maybe<HeaderRecord>;
  /** Returns a specific record */
  misura?: Maybe<MisuraRecord>;
  /** Returns a specific record */
  news?: Maybe<NewsRecord>;
  /** Returns a specific record */
  page?: Maybe<PageRecord>;
  /** Returns a specific record */
  resource?: Maybe<ResourceRecord>;
  /** Returns a specific record */
  update?: Maybe<UpdateRecord>;
  /** Returns a specific asset */
  upload?: Maybe<FileField>;
};


/** The query root for this schema */
export type Query_AllArgomentosMetaArgs = {
  filter?: InputMaybe<ArgomentoModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllBadgesMetaArgs = {
  filter?: InputMaybe<BadgeModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllDatavizsMetaArgs = {
  filter?: InputMaybe<DatavizModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllEnteBeneficiariosMetaArgs = {
  filter?: InputMaybe<EnteBeneficiarioModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllFaqsMetaArgs = {
  filter?: InputMaybe<FaqModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllMisurasMetaArgs = {
  filter?: InputMaybe<MisuraModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllNewsMetaArgs = {
  filter?: InputMaybe<NewsModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllPagesMetaArgs = {
  filter?: InputMaybe<PageModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllResourcesMetaArgs = {
  filter?: InputMaybe<ResourceModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllUpdatesMetaArgs = {
  filter?: InputMaybe<UpdateModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllUploadsMetaArgs = {
  filter?: InputMaybe<UploadFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_SiteArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryAllArgomentosArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ArgomentoModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ArgomentoModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllBadgesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<BadgeModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<BadgeModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllDatavizsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<DatavizModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<DatavizModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllEnteBeneficiariosArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<EnteBeneficiarioModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<EnteBeneficiarioModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllFaqsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<FaqModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<FaqModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllMisurasArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MisuraModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MisuraModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllNewsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<NewsModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<NewsModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllPagesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PageModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PageModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllResourcesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ResourceModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ResourceModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllUpdatesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<UpdateModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<UpdateModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllUploadsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<UploadFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryArgomentoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ArgomentoModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ArgomentoModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryBadgeArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<BadgeModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<BadgeModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryDatavizArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<DatavizModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<DatavizModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryEnteBeneficiarioArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<EnteBeneficiarioModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<EnteBeneficiarioModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryFaqArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<FaqModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<FaqModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryFooterArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryHeaderArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryMisuraArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MisuraModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MisuraModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryNewsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<NewsModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<NewsModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryPageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PageModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PageModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryResourceArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ResourceModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ResourceModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryUpdateArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<UpdateModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<UpdateModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryUploadArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<UploadFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>;
};

export type RecordInterface = {
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
};


export type RecordInterface_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by upload type */
export type ResolutionFilter = {
  /** Search uploads with the specified resolution */
  eq?: InputMaybe<ResolutionType>;
  /** Search uploads with the specified resolutions */
  in?: InputMaybe<Array<InputMaybe<ResolutionType>>>;
  /** Exclude uploads with the specified resolution */
  neq?: InputMaybe<ResolutionType>;
  /** Search uploads without the specified resolutions */
  notIn?: InputMaybe<Array<InputMaybe<ResolutionType>>>;
};

export enum ResolutionType {
  Icon = 'icon',
  Large = 'large',
  Medium = 'medium',
  Small = 'small'
}

export type ResourceModelBodyField = BannerRecord | CardsGridRecord | DataHeroRecord | HeroRecord | LayoutSidebarRecord | RichTextRecord | SplitBannerRecord | VideoPlayerRecord;

export type ResourceModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ResourceModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ResourceModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  badge?: InputMaybe<StringFilter>;
  customUpdateDate?: InputMaybe<DateTimeFilter>;
  data?: InputMaybe<StringFilter>;
  entiBeneficiari?: InputMaybe<LinksFilter>;
  id?: InputMaybe<ItemIdFilter>;
  slug?: InputMaybe<SlugFilter>;
  summary?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export enum ResourceModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  BadgeAsc = 'badge_ASC',
  BadgeDesc = 'badge_DESC',
  CustomUpdateDateAsc = 'customUpdateDate_ASC',
  CustomUpdateDateDesc = 'customUpdateDate_DESC',
  DataAsc = 'data_ASC',
  DataDesc = 'data_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  SummaryAsc = 'summary_ASC',
  SummaryDesc = 'summary_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** Record of type 💎 Risorsa (resource) */
export type ResourceRecord = RecordInterface & {
  __typename?: 'ResourceRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  badge?: Maybe<Scalars['String']['output']>;
  body: Array<ResourceModelBodyField>;
  customUpdateDate?: Maybe<Scalars['DateTime']['output']>;
  data?: Maybe<Scalars['String']['output']>;
  entiBeneficiari: Array<EnteBeneficiarioRecord>;
  id: Scalars['ItemId']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


/** Record of type 💎 Risorsa (resource) */
export type ResourceRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type ResponsiveImage = {
  __typename?: 'ResponsiveImage';
  alt?: Maybe<Scalars['String']['output']>;
  aspectRatio: Scalars['FloatType']['output'];
  base64?: Maybe<Scalars['String']['output']>;
  bgColor?: Maybe<Scalars['String']['output']>;
  height: Scalars['IntType']['output'];
  sizes: Scalars['String']['output'];
  src: Scalars['String']['output'];
  srcSet: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  webpSrcSet: Scalars['String']['output'];
  width: Scalars['IntType']['output'];
};

export type RichTextModelContentBlocksField = ButtonRecord | CardsGridRecord | ImagesGridRecord | LinkRecord | VideoPlayerRecord;

export type RichTextModelContentField = {
  __typename?: 'RichTextModelContentField';
  blocks: Array<RichTextModelContentBlocksField>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

/** Block of type 📝 Rich text (rich_text) */
export type RichTextRecord = RecordInterface & {
  __typename?: 'RichTextRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  alignment?: Maybe<Scalars['String']['output']>;
  anchorId?: Maybe<Scalars['String']['output']>;
  content?: Maybe<RichTextModelContentField>;
  id: Scalars['ItemId']['output'];
};


/** Block of type 📝 Rich text (rich_text) */
export type RichTextRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type SeoField = {
  __typename?: 'SeoField';
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<FileField>;
  noIndex?: Maybe<Scalars['BooleanType']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  twitterCard?: Maybe<Scalars['String']['output']>;
};

/** Specifies how to filter SEO meta tags fields */
export type SeoFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
};

export type Site = {
  __typename?: 'Site';
  favicon?: Maybe<FileField>;
  faviconMetaTags: Array<Tag>;
  globalSeo?: Maybe<GlobalSeoField>;
  locales: Array<SiteLocale>;
  noIndex?: Maybe<Scalars['BooleanType']['output']>;
};


export type SiteFaviconMetaTagsArgs = {
  variants?: InputMaybe<Array<InputMaybe<FaviconType>>>;
};


export type SiteGlobalSeoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export enum SiteLocale {
  It = 'it'
}

/** Specifies how to filter Slug fields */
export type SlugFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Filter records that have one of the specified slugs */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Filter records that do have one of the specified slugs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Block of type Split Banner (split_banner) */
export type SplitBannerRecord = RecordInterface & {
  __typename?: 'SplitBannerRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  button?: Maybe<ButtonRecord>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  image?: Maybe<FileField>;
  imgLeft: Scalars['BooleanType']['output'];
  lightTheme: Scalars['BooleanType']['output'];
  links: Array<PageRecord>;
  title?: Maybe<Scalars['String']['output']>;
};


/** Block of type Split Banner (split_banner) */
export type SplitBannerRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by status */
export type StatusFilter = {
  /** Search the record with the specified status */
  eq?: InputMaybe<ItemStatus>;
  /** Search records with the specified statuses */
  in?: InputMaybe<Array<InputMaybe<ItemStatus>>>;
  /** Exclude the record with the specified status */
  neq?: InputMaybe<ItemStatus>;
  /** Search records without the specified statuses */
  notIn?: InputMaybe<Array<InputMaybe<ItemStatus>>>;
};

/** Specifies how to filter Single-line string fields */
export type StringFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not [DEPRECATED] */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records that equal one of the specified values */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Filter records with the specified field set as blank (null or empty string) */
  isBlank?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with the specified field present (neither null, nor empty string) */
  isPresent?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Filter records that do not equal one of the specified values */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude records based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

export type StringMatchesFilter = {
  caseSensitive?: InputMaybe<Scalars['BooleanType']['input']>;
  pattern: Scalars['String']['input'];
  regexp?: InputMaybe<Scalars['BooleanType']['input']>;
};

/** Block of type ➖ Table List Item (table_list_item) */
export type TableListItemRecord = RecordInterface & {
  __typename?: 'TableListItemRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  date?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ItemId']['output'];
  link?: Maybe<LinkRecord>;
  title?: Maybe<Scalars['String']['output']>;
};


/** Block of type ➖ Table List Item (table_list_item) */
export type TableListItemRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type 🟰 Table List Link Item (table_list_link_item) */
export type TableListLinkItemRecord = RecordInterface & {
  __typename?: 'TableListLinkItemRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  category?: Maybe<ArgomentoRecord>;
  id: Scalars['ItemId']['output'];
  link?: Maybe<LinkRecord>;
};


/** Block of type 🟰 Table List Link Item (table_list_link_item) */
export type TableListLinkItemRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type TableListModelItemsField = TableListItemRecord | TableListLinkItemRecord;

/** Block of type 🔲 Table List (table_list) */
export type TableListRecord = RecordInterface & {
  __typename?: 'TableListRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  alignment?: Maybe<Scalars['String']['output']>;
  cta?: Maybe<ButtonRecord>;
  id: Scalars['ItemId']['output'];
  items: Array<TableListModelItemsField>;
  showTableHead: Scalars['BooleanType']['output'];
  title?: Maybe<Scalars['String']['output']>;
};


/** Block of type 🔲 Table List (table_list) */
export type TableListRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type Tag = {
  __typename?: 'Tag';
  attributes?: Maybe<Scalars['MetaTagAttributes']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  tag: Scalars['String']['output'];
};

/** Specifies how to filter by upload type */
export type TypeFilter = {
  /** Search uploads with the specified type */
  eq?: InputMaybe<UploadType>;
  /** Search uploads with the specified types */
  in?: InputMaybe<Array<InputMaybe<UploadType>>>;
  /** Exclude uploads with the specified type */
  neq?: InputMaybe<UploadType>;
  /** Search uploads without the specified types */
  notIn?: InputMaybe<Array<InputMaybe<UploadType>>>;
};

export type UpdateModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<UpdateModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<UpdateModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  beneficiari?: InputMaybe<LinksFilter>;
  customUpdateDate?: InputMaybe<DateTimeFilter>;
  data?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  slug?: InputMaybe<SlugFilter>;
  testo?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export enum UpdateModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CustomUpdateDateAsc = 'customUpdateDate_ASC',
  CustomUpdateDateDesc = 'customUpdateDate_DESC',
  DataAsc = 'data_ASC',
  DataDesc = 'data_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TestoAsc = 'testo_ASC',
  TestoDesc = 'testo_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** Record of type 🆕 Aggiornamento (update) */
export type UpdateRecord = RecordInterface & {
  __typename?: 'UpdateRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  beneficiari: Array<EnteBeneficiarioRecord>;
  cta?: Maybe<ButtonRecord>;
  customUpdateDate?: Maybe<Scalars['DateTime']['output']>;
  data?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  testo?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


/** Record of type 🆕 Aggiornamento (update) */
export type UpdateRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by update datetime */
export type UpdatedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Specifies how to filter by default alt */
export type UploadAltFilter = {
  /** Search the uploads with the specified alt */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Filter uploads with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Search uploads with the specified values as default alt */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude the uploads with the specified alt */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Search uploads that do not have the specified values as default alt */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by auhtor */
export type UploadAuthorFilter = {
  /** Filter uploads with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by basename */
export type UploadBasenameFilter = {
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by colors */
export type UploadColorsFilter = {
  /** Filter uploads that have all of the specified colors */
  allIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
  /** Filter uploads that have at least one of the specified colors */
  anyIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
  /** Filter uploads that have the specified colors */
  contains?: InputMaybe<ColorBucketType>;
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
  /** Filter uploads that do not have any of the specified colors */
  notIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
};

/** Specifies how to filter by copyright */
export type UploadCopyrightFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by creation datetime */
export type UploadCreatedAtFilter = {
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Exclude uploads with an exact match */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Specifies how to filter by filename */
export type UploadFilenameFilter = {
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

export type UploadFilter = {
  AND?: InputMaybe<Array<InputMaybe<UploadFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<UploadFilter>>>;
  _createdAt?: InputMaybe<UploadCreatedAtFilter>;
  _updatedAt?: InputMaybe<UploadUpdatedAtFilter>;
  alt?: InputMaybe<UploadAltFilter>;
  author?: InputMaybe<UploadAuthorFilter>;
  basename?: InputMaybe<UploadBasenameFilter>;
  colors?: InputMaybe<UploadColorsFilter>;
  copyright?: InputMaybe<UploadCopyrightFilter>;
  filename?: InputMaybe<UploadFilenameFilter>;
  format?: InputMaybe<UploadFormatFilter>;
  height?: InputMaybe<UploadHeightFilter>;
  id?: InputMaybe<UploadIdFilter>;
  inUse?: InputMaybe<InUseFilter>;
  md5?: InputMaybe<UploadMd5Filter>;
  mimeType?: InputMaybe<UploadMimeTypeFilter>;
  notes?: InputMaybe<UploadNotesFilter>;
  orientation?: InputMaybe<OrientationFilter>;
  resolution?: InputMaybe<ResolutionFilter>;
  size?: InputMaybe<UploadSizeFilter>;
  smartTags?: InputMaybe<UploadTagsFilter>;
  tags?: InputMaybe<UploadTagsFilter>;
  title?: InputMaybe<UploadTitleFilter>;
  type?: InputMaybe<TypeFilter>;
  width?: InputMaybe<UploadWidthFilter>;
};

/** Specifies how to filter by format */
export type UploadFormatFilter = {
  /** Search the asset with the specified format */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets with the specified formats */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude the asset with the specified format */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets that do not have the specified formats */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Specifies how to filter by height */
export type UploadHeightFilter = {
  /** Search assets with the specified height */
  eq?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger than the specified height */
  gt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified height */
  gte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets smaller than the specified height */
  lt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified height */
  lte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search assets that do not have the specified height */
  neq?: InputMaybe<Scalars['IntType']['input']>;
};

/** Specifies how to filter by ID */
export type UploadIdFilter = {
  /** Search the asset with the specified ID */
  eq?: InputMaybe<Scalars['UploadId']['input']>;
  /** Search assets with the specified IDs */
  in?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
  /** Exclude the asset with the specified ID */
  neq?: InputMaybe<Scalars['UploadId']['input']>;
  /** Search assets that do not have the specified IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
};

/** Specifies how to filter by MD5 */
export type UploadMd5Filter = {
  /** Search the asset with the specified MD5 */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets with the specified MD5s */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude the asset with the specified MD5 */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets that do not have the specified MD5s */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Specifies how to filter by mime type */
export type UploadMimeTypeFilter = {
  /** Search the asset with the specified mime type */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets with the specified mime types */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude the asset with the specified mime type */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets that do not have the specified mime types */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by notes */
export type UploadNotesFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

export enum UploadOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  BasenameAsc = 'basename_ASC',
  BasenameDesc = 'basename_DESC',
  FilenameAsc = 'filename_ASC',
  FilenameDesc = 'filename_DESC',
  FormatAsc = 'format_ASC',
  FormatDesc = 'format_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  ResolutionAsc = 'resolution_ASC',
  ResolutionDesc = 'resolution_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC'
}

export enum UploadOrientation {
  Landscape = 'landscape',
  Portrait = 'portrait',
  Square = 'square'
}

/** Specifies how to filter by size */
export type UploadSizeFilter = {
  /** Search assets with the specified size (in bytes) */
  eq?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger than the specified size (in bytes) */
  gt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified size (in bytes) */
  gte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets smaller than the specified size (in bytes) */
  lt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified size (in bytes) */
  lte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search assets that do not have the specified size (in bytes) */
  neq?: InputMaybe<Scalars['IntType']['input']>;
};

/** Specifies how to filter by tags */
export type UploadTagsFilter = {
  /** Filter uploads linked to all of the specified tags */
  allIn?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Filter uploads linked to at least one of the specified tags */
  anyIn?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Filter uploads linked to the specified tag */
  contains?: InputMaybe<Scalars['String']['input']>;
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Filter uploads not linked to any of the specified tags */
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** Specifies how to filter by default title */
export type UploadTitleFilter = {
  /** Search the asset with the specified title */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Filter assets with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Search assets with the specified as default title */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude the asset with the specified title */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets that do not have the specified as default title */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

export enum UploadType {
  Archive = 'archive',
  Audio = 'audio',
  Image = 'image',
  Pdfdocument = 'pdfdocument',
  Presentation = 'presentation',
  Richtext = 'richtext',
  Spreadsheet = 'spreadsheet',
  Video = 'video'
}

/** Specifies how to filter by update datetime */
export type UploadUpdatedAtFilter = {
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Exclude uploads with an exact match */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UploadVideoField = {
  __typename?: 'UploadVideoField';
  alt?: Maybe<Scalars['String']['output']>;
  blurUpThumb?: Maybe<Scalars['String']['output']>;
  blurhash?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  framerate?: Maybe<Scalars['Int']['output']>;
  height: Scalars['IntType']['output'];
  mp4Url?: Maybe<Scalars['String']['output']>;
  muxAssetId: Scalars['String']['output'];
  muxPlaybackId: Scalars['String']['output'];
  streamingUrl: Scalars['String']['output'];
  thumbhash?: Maybe<Scalars['String']['output']>;
  thumbnailUrl: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  width: Scalars['IntType']['output'];
};


export type UploadVideoFieldAltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type UploadVideoFieldBlurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
  punch?: Scalars['Float']['input'];
  quality?: Scalars['Int']['input'];
  size?: Scalars['Int']['input'];
};


export type UploadVideoFieldMp4UrlArgs = {
  exactRes?: InputMaybe<VideoMp4Res>;
  res?: InputMaybe<VideoMp4Res>;
};


export type UploadVideoFieldThumbnailUrlArgs = {
  format?: InputMaybe<MuxThumbnailFormatType>;
};


export type UploadVideoFieldTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by width */
export type UploadWidthFilter = {
  /** Search assets with the specified width */
  eq?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger than the specified width */
  gt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified width */
  gte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets smaller than the specified width */
  lt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified width */
  lte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search assets that do not have the specified width */
  neq?: InputMaybe<Scalars['IntType']['input']>;
};

export enum VideoMp4Res {
  High = 'high',
  Low = 'low',
  Medium = 'medium'
}

/** Block of type 🎬 Video Player (video_player) */
export type VideoPlayerRecord = RecordInterface & {
  __typename?: 'VideoPlayerRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  poster?: Maybe<FileField>;
  title?: Maybe<Scalars['String']['output']>;
  transcription?: Maybe<Scalars['String']['output']>;
  transcriptionLabel?: Maybe<Scalars['String']['output']>;
  videoSources: Array<VideoSourceRecord>;
};


/** Block of type 🎬 Video Player (video_player) */
export type VideoPlayerRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type 🎥 Video Source (video_source) */
export type VideoSourceRecord = RecordInterface & {
  __typename?: 'VideoSourceRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  sourceSrc?: Maybe<Scalars['String']['output']>;
  sourceType?: Maybe<Scalars['String']['output']>;
};


/** Block of type 🎥 Video Source (video_source) */
export type VideoSourceRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type FocalPoint = {
  __typename?: 'focalPoint';
  x: Scalars['FloatType']['output'];
  y: Scalars['FloatType']['output'];
};

export type AllFaqsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllFaqsQuery = { __typename?: 'Query', allFaqs: Array<{ __typename?: 'FaqRecord', title?: string | null, slug?: string | null, customUpdateDate?: string | null, body: Array<{ __typename: 'BannerRecord', id: string, title?: string | null, description?: string | null, lightTheme: boolean, button?: { __typename: 'ButtonRecord', id: string, href?: string | null, target?: string | null, text?: string | null, icon?: string | null, cmsPage?: { __typename?: 'PageRecord', title?: string | null, slug?: string | null, id: string } | null } | null } | { __typename: 'CardsGridRecord', id: string, background?: string | null, title?: string | null, description?: string | null, alignment?: string | null, columns?: string | null, cardTitleTag?: string | null, customCards?: { __typename: 'GenericCardListRecord', id: string, cardLayout?: string | null, cards: Array<{ __typename: 'CardGenericRecord', id: string, title?: string | null, description?: string | null, date?: string | null, label?: string | null, iconBeforeTitle?: string | null }> } | null, risorse: Array<{ __typename: 'ResourceRecord', id: string, slug?: string | null, title?: string | null, summary?: string | null, badge?: string | null, data?: string | null }>, news: Array<{ __typename: 'NewsRecord', id: string, slug?: string | null, title?: string | null, summary?: string | null, category?: string | null, data?: string | null }>, button?: { __typename: 'ButtonRecord', id: string, href?: string | null, target?: string | null, text?: string | null, icon?: string | null, cmsPage?: { __typename?: 'PageRecord', title?: string | null, slug?: string | null, id: string } | null } | null } | { __typename: 'DataHeroRecord', hideBreadcrumbs: boolean, title?: string | null, updateDate?: string | null, button?: { __typename: 'ButtonRecord', id: string, href?: string | null, target?: string | null, text?: string | null, icon?: string | null, cmsPage?: { __typename?: 'PageRecord', title?: string | null, slug?: string | null, id: string } | null } | null, argomento?: { __typename?: 'ArgomentoRecord', label?: string | null, slug?: string | null } | null, badge?: { __typename?: 'BadgeRecord', label?: string | null } | null, beneficiari?: { __typename?: 'EnteBeneficiarioRecord', label?: string | null } | null, misura?: { __typename?: 'MisuraRecord', label?: string | null, slug?: string | null, basePath?: string | null } | null } | { __typename: 'HeroRecord', lightTheme: boolean, hideBreadcrumbs: boolean, title?: string | null, description?: string | null, updateDate?: string | null, image?: { __typename?: 'FileField', responsiveImage?: { __typename: 'ResponsiveImage', src: string, alt?: string | null, aspectRatio: number, width: number, height: number } | null } | null, button?: { __typename: 'ButtonRecord', id: string, href?: string | null, target?: string | null, text?: string | null, icon?: string | null, cmsPage?: { __typename?: 'PageRecord', title?: string | null, slug?: string | null, id: string } | null } | null } | { __typename: 'LayoutSidebarRecord', sidebar?: { __typename: 'NavScrollRecord', title?: string | null, content?: { __typename?: 'NavScrollModelContentField', value: unknown } | null } | null, content: Array<{ __typename?: 'RichTextRecord', alignment?: string | null, anchorId?: string | null, richTextContent?: { __typename?: 'RichTextModelContentField', value: unknown, blocks: Array<{ __typename: 'ButtonRecord', id: string, href?: string | null, target?: string | null, text?: string | null, icon?: string | null, cmsPage?: { __typename?: 'PageRecord', title?: string | null, slug?: string | null, id: string } | null } | { __typename: 'CardsGridRecord', id: string, background?: string | null, title?: string | null, description?: string | null, alignment?: string | null, columns?: string | null, cardTitleTag?: string | null, customCards?: { __typename: 'GenericCardListRecord', id: string, cardLayout?: string | null, cards: Array<{ __typename: 'CardGenericRecord', id: string, title?: string | null, description?: string | null, date?: string | null, label?: string | null, iconBeforeTitle?: string | null }> } | null, risorse: Array<{ __typename: 'ResourceRecord', id: string, slug?: string | null, title?: string | null, summary?: string | null, badge?: string | null, data?: string | null }>, news: Array<{ __typename: 'NewsRecord', id: string, slug?: string | null, title?: string | null, summary?: string | null, category?: string | null, data?: string | null }>, button?: { __typename: 'ButtonRecord', id: string, href?: string | null, target?: string | null, text?: string | null, icon?: string | null, cmsPage?: { __typename?: 'PageRecord', title?: string | null, slug?: string | null, id: string } | null } | null } | { __typename: 'ImagesGridRecord', id: string, images: Array<{ __typename?: 'FileField', url: string, basename: string, alt?: string | null, format: string, width?: number | null, height?: number | null, id: string, title?: string | null, responsiveImage?: { __typename: 'ResponsiveImage', src: string, alt?: string | null, aspectRatio: number, width: number, height: number } | null }> } | { __typename: 'LinkRecord', id: string, href?: string | null, icon?: string | null, target?: string | null, text?: string | null, cmsPage?: { __typename?: 'PageRecord', slug?: string | null, title?: string | null, id: string } | null } | { __typename: 'VideoPlayerRecord', id: string, title?: string | null, transcription?: string | null, transcriptionLabel?: string | null, videoSources: Array<{ __typename?: 'VideoSourceRecord', sourceSrc?: string | null, sourceType?: string | null }>, poster?: { __typename?: 'FileField', url: string } | null }> } | null }> } | { __typename: 'RichTextRecord', alignment?: string | null, anchorId?: string | null, richTextContent?: { __typename?: 'RichTextModelContentField', value: unknown, blocks: Array<{ __typename: 'ButtonRecord', id: string, href?: string | null, target?: string | null, text?: string | null, icon?: string | null, cmsPage?: { __typename?: 'PageRecord', title?: string | null, slug?: string | null, id: string } | null } | { __typename: 'CardsGridRecord', id: string, background?: string | null, title?: string | null, description?: string | null, alignment?: string | null, columns?: string | null, cardTitleTag?: string | null, customCards?: { __typename: 'GenericCardListRecord', id: string, cardLayout?: string | null, cards: Array<{ __typename: 'CardGenericRecord', id: string, title?: string | null, description?: string | null, date?: string | null, label?: string | null, iconBeforeTitle?: string | null }> } | null, risorse: Array<{ __typename: 'ResourceRecord', id: string, slug?: string | null, title?: string | null, summary?: string | null, badge?: string | null, data?: string | null }>, news: Array<{ __typename: 'NewsRecord', id: string, slug?: string | null, title?: string | null, summary?: string | null, category?: string | null, data?: string | null }>, button?: { __typename: 'ButtonRecord', id: string, href?: string | null, target?: string | null, text?: string | null, icon?: string | null, cmsPage?: { __typename?: 'PageRecord', title?: string | null, slug?: string | null, id: string } | null } | null } | { __typename: 'ImagesGridRecord', id: string, images: Array<{ __typename?: 'FileField', url: string, basename: string, alt?: string | null, format: string, width?: number | null, height?: number | null, id: string, title?: string | null, responsiveImage?: { __typename: 'ResponsiveImage', src: string, alt?: string | null, aspectRatio: number, width: number, height: number } | null }> } | { __typename: 'LinkRecord', id: string, href?: string | null, icon?: string | null, target?: string | null, text?: string | null, cmsPage?: { __typename?: 'PageRecord', slug?: string | null, title?: string | null, id: string } | null } | { __typename: 'VideoPlayerRecord', id: string, title?: string | null, transcription?: string | null, transcriptionLabel?: string | null, videoSources: Array<{ __typename?: 'VideoSourceRecord', sourceSrc?: string | null, sourceType?: string | null }>, poster?: { __typename?: 'FileField', url: string } | null }> } | null } | { __typename: 'SplitBannerRecord', id: string, title?: string | null, description?: string | null, imgLeft: boolean, lightTheme: boolean, links: Array<{ __typename?: 'PageRecord', id: string, slug?: string | null, title?: string | null }>, image?: { __typename?: 'FileField', responsiveImage?: { __typename: 'ResponsiveImage', src: string, alt?: string | null, aspectRatio: number, width: number, height: number } | null } | null, button?: { __typename: 'ButtonRecord', id: string, href?: string | null, target?: string | null, text?: string | null, icon?: string | null, cmsPage?: { __typename?: 'PageRecord', title?: string | null, slug?: string | null, id: string } | null } | null } | { __typename: 'VideoPlayerRecord', id: string, title?: string | null, transcription?: string | null, transcriptionLabel?: string | null, videoSources: Array<{ __typename?: 'VideoSourceRecord', sourceSrc?: string | null, sourceType?: string | null }>, poster?: { __typename?: 'FileField', url: string } | null }> }>, _allFaqsMeta: { __typename?: 'CollectionMetadata', count: number } };

export type AllNewsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllNewsQuery = { __typename?: 'Query', allNews: Array<{ __typename?: 'NewsRecord', title?: string | null, slug?: string | null, customUpdateDate?: string | null, body: Array<{ __typename: 'BannerRecord', id: string, title?: string | null, description?: string | null, lightTheme: boolean, button?: { __typename: 'ButtonRecord', id: string, href?: string | null, target?: string | null, text?: string | null, icon?: string | null, cmsPage?: { __typename?: 'PageRecord', title?: string | null, slug?: string | null, id: string } | null } | null } | { __typename?: 'BloccoGraficoRecord' } | { __typename: 'CardsGridRecord', id: string, background?: string | null, title?: string | null, description?: string | null, alignment?: string | null, columns?: string | null, cardTitleTag?: string | null, customCards?: { __typename: 'GenericCardListRecord', id: string, cardLayout?: string | null, cards: Array<{ __typename: 'CardGenericRecord', id: string, title?: string | null, description?: string | null, date?: string | null, label?: string | null, iconBeforeTitle?: string | null }> } | null, risorse: Array<{ __typename: 'ResourceRecord', id: string, slug?: string | null, title?: string | null, summary?: string | null, badge?: string | null, data?: string | null }>, news: Array<{ __typename: 'NewsRecord', id: string, slug?: string | null, title?: string | null, summary?: string | null, category?: string | null, data?: string | null }>, button?: { __typename: 'ButtonRecord', id: string, href?: string | null, target?: string | null, text?: string | null, icon?: string | null, cmsPage?: { __typename?: 'PageRecord', title?: string | null, slug?: string | null, id: string } | null } | null } | { __typename: 'DataHeroRecord', hideBreadcrumbs: boolean, title?: string | null, updateDate?: string | null, button?: { __typename: 'ButtonRecord', id: string, href?: string | null, target?: string | null, text?: string | null, icon?: string | null, cmsPage?: { __typename?: 'PageRecord', title?: string | null, slug?: string | null, id: string } | null } | null, argomento?: { __typename?: 'ArgomentoRecord', label?: string | null, slug?: string | null } | null, badge?: { __typename?: 'BadgeRecord', label?: string | null } | null, beneficiari?: { __typename?: 'EnteBeneficiarioRecord', label?: string | null } | null, misura?: { __typename?: 'MisuraRecord', label?: string | null, slug?: string | null, basePath?: string | null } | null } | { __typename: 'HeroRecord', lightTheme: boolean, hideBreadcrumbs: boolean, title?: string | null, description?: string | null, updateDate?: string | null, image?: { __typename?: 'FileField', responsiveImage?: { __typename: 'ResponsiveImage', src: string, alt?: string | null, aspectRatio: number, width: number, height: number } | null } | null, button?: { __typename: 'ButtonRecord', id: string, href?: string | null, target?: string | null, text?: string | null, icon?: string | null, cmsPage?: { __typename?: 'PageRecord', title?: string | null, slug?: string | null, id: string } | null } | null } | { __typename?: 'LatestRecord' } | { __typename: 'LayoutSidebarRecord', sidebar?: { __typename: 'NavScrollRecord', title?: string | null, content?: { __typename?: 'NavScrollModelContentField', value: unknown } | null } | null, content: Array<{ __typename?: 'RichTextRecord', alignment?: string | null, anchorId?: string | null, richTextContent?: { __typename?: 'RichTextModelContentField', value: unknown, blocks: Array<{ __typename: 'ButtonRecord', id: string, href?: string | null, target?: string | null, text?: string | null, icon?: string | null, cmsPage?: { __typename?: 'PageRecord', title?: string | null, slug?: string | null, id: string } | null } | { __typename: 'CardsGridRecord', id: string, background?: string | null, title?: string | null, description?: string | null, alignment?: string | null, columns?: string | null, cardTitleTag?: string | null, customCards?: { __typename: 'GenericCardListRecord', id: string, cardLayout?: string | null, cards: Array<{ __typename: 'CardGenericRecord', id: string, title?: string | null, description?: string | null, date?: string | null, label?: string | null, iconBeforeTitle?: string | null }> } | null, risorse: Array<{ __typename: 'ResourceRecord', id: string, slug?: string | null, title?: string | null, summary?: string | null, badge?: string | null, data?: string | null }>, news: Array<{ __typename: 'NewsRecord', id: string, slug?: string | null, title?: string | null, summary?: string | null, category?: string | null, data?: string | null }>, button?: { __typename: 'ButtonRecord', id: string, href?: string | null, target?: string | null, text?: string | null, icon?: string | null, cmsPage?: { __typename?: 'PageRecord', title?: string | null, slug?: string | null, id: string } | null } | null } | { __typename: 'ImagesGridRecord', id: string, images: Array<{ __typename?: 'FileField', url: string, basename: string, alt?: string | null, format: string, width?: number | null, height?: number | null, id: string, title?: string | null, responsiveImage?: { __typename: 'ResponsiveImage', src: string, alt?: string | null, aspectRatio: number, width: number, height: number } | null }> } | { __typename: 'LinkRecord', id: string, href?: string | null, icon?: string | null, target?: string | null, text?: string | null, cmsPage?: { __typename?: 'PageRecord', slug?: string | null, title?: string | null, id: string } | null } | { __typename: 'VideoPlayerRecord', id: string, title?: string | null, transcription?: string | null, transcriptionLabel?: string | null, videoSources: Array<{ __typename?: 'VideoSourceRecord', sourceSrc?: string | null, sourceType?: string | null }>, poster?: { __typename?: 'FileField', url: string } | null }> } | null }> } | { __typename: 'RichTextRecord', alignment?: string | null, anchorId?: string | null, richTextContent?: { __typename?: 'RichTextModelContentField', value: unknown, blocks: Array<{ __typename: 'ButtonRecord', id: string, href?: string | null, target?: string | null, text?: string | null, icon?: string | null, cmsPage?: { __typename?: 'PageRecord', title?: string | null, slug?: string | null, id: string } | null } | { __typename: 'CardsGridRecord', id: string, background?: string | null, title?: string | null, description?: string | null, alignment?: string | null, columns?: string | null, cardTitleTag?: string | null, customCards?: { __typename: 'GenericCardListRecord', id: string, cardLayout?: string | null, cards: Array<{ __typename: 'CardGenericRecord', id: string, title?: string | null, description?: string | null, date?: string | null, label?: string | null, iconBeforeTitle?: string | null }> } | null, risorse: Array<{ __typename: 'ResourceRecord', id: string, slug?: string | null, title?: string | null, summary?: string | null, badge?: string | null, data?: string | null }>, news: Array<{ __typename: 'NewsRecord', id: string, slug?: string | null, title?: string | null, summary?: string | null, category?: string | null, data?: string | null }>, button?: { __typename: 'ButtonRecord', id: string, href?: string | null, target?: string | null, text?: string | null, icon?: string | null, cmsPage?: { __typename?: 'PageRecord', title?: string | null, slug?: string | null, id: string } | null } | null } | { __typename: 'ImagesGridRecord', id: string, images: Array<{ __typename?: 'FileField', url: string, basename: string, alt?: string | null, format: string, width?: number | null, height?: number | null, id: string, title?: string | null, responsiveImage?: { __typename: 'ResponsiveImage', src: string, alt?: string | null, aspectRatio: number, width: number, height: number } | null }> } | { __typename: 'LinkRecord', id: string, href?: string | null, icon?: string | null, target?: string | null, text?: string | null, cmsPage?: { __typename?: 'PageRecord', slug?: string | null, title?: string | null, id: string } | null } | { __typename: 'VideoPlayerRecord', id: string, title?: string | null, transcription?: string | null, transcriptionLabel?: string | null, videoSources: Array<{ __typename?: 'VideoSourceRecord', sourceSrc?: string | null, sourceType?: string | null }>, poster?: { __typename?: 'FileField', url: string } | null }> } | null } | { __typename: 'SplitBannerRecord', id: string, title?: string | null, description?: string | null, imgLeft: boolean, lightTheme: boolean, links: Array<{ __typename?: 'PageRecord', id: string, slug?: string | null, title?: string | null }>, image?: { __typename?: 'FileField', responsiveImage?: { __typename: 'ResponsiveImage', src: string, alt?: string | null, aspectRatio: number, width: number, height: number } | null } | null, button?: { __typename: 'ButtonRecord', id: string, href?: string | null, target?: string | null, text?: string | null, icon?: string | null, cmsPage?: { __typename?: 'PageRecord', title?: string | null, slug?: string | null, id: string } | null } | null } | { __typename: 'VideoPlayerRecord', id: string, title?: string | null, transcription?: string | null, transcriptionLabel?: string | null, videoSources: Array<{ __typename?: 'VideoSourceRecord', sourceSrc?: string | null, sourceType?: string | null }>, poster?: { __typename?: 'FileField', url: string } | null }> }>, _allNewsMeta: { __typename?: 'CollectionMetadata', count: number } };

export type AllPagesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllPagesQuery = { __typename?: 'Query', allPages: Array<{ __typename?: 'PageRecord', title?: string | null, slug?: string | null, customUpdateDate?: string | null, body: Array<{ __typename: 'BannerRecord', id: string, title?: string | null, description?: string | null, lightTheme: boolean, button?: { __typename: 'ButtonRecord', id: string, href?: string | null, target?: string | null, text?: string | null, icon?: string | null, cmsPage?: { __typename?: 'PageRecord', title?: string | null, slug?: string | null, id: string } | null } | null } | { __typename?: 'BloccoGraficoRecord' } | { __typename: 'CardServiceRecord', id: string, title?: string | null } | { __typename: 'CardsGridRecord', id: string, background?: string | null, title?: string | null, description?: string | null, alignment?: string | null, columns?: string | null, cardTitleTag?: string | null, customCards?: { __typename: 'GenericCardListRecord', id: string, cardLayout?: string | null, cards: Array<{ __typename: 'CardGenericRecord', id: string, title?: string | null, description?: string | null, date?: string | null, label?: string | null, iconBeforeTitle?: string | null }> } | null, risorse: Array<{ __typename: 'ResourceRecord', id: string, slug?: string | null, title?: string | null, summary?: string | null, badge?: string | null, data?: string | null }>, news: Array<{ __typename: 'NewsRecord', id: string, slug?: string | null, title?: string | null, summary?: string | null, category?: string | null, data?: string | null }>, button?: { __typename: 'ButtonRecord', id: string, href?: string | null, target?: string | null, text?: string | null, icon?: string | null, cmsPage?: { __typename?: 'PageRecord', title?: string | null, slug?: string | null, id: string } | null } | null } | { __typename: 'DataHeroRecord', hideBreadcrumbs: boolean, title?: string | null, updateDate?: string | null, button?: { __typename: 'ButtonRecord', id: string, href?: string | null, target?: string | null, text?: string | null, icon?: string | null, cmsPage?: { __typename?: 'PageRecord', title?: string | null, slug?: string | null, id: string } | null } | null, argomento?: { __typename?: 'ArgomentoRecord', label?: string | null, slug?: string | null } | null, badge?: { __typename?: 'BadgeRecord', label?: string | null } | null, beneficiari?: { __typename?: 'EnteBeneficiarioRecord', label?: string | null } | null, misura?: { __typename?: 'MisuraRecord', label?: string | null, slug?: string | null, basePath?: string | null } | null } | { __typename: 'HeroRecord', lightTheme: boolean, hideBreadcrumbs: boolean, title?: string | null, description?: string | null, updateDate?: string | null, image?: { __typename?: 'FileField', responsiveImage?: { __typename: 'ResponsiveImage', src: string, alt?: string | null, aspectRatio: number, width: number, height: number } | null } | null, button?: { __typename: 'ButtonRecord', id: string, href?: string | null, target?: string | null, text?: string | null, icon?: string | null, cmsPage?: { __typename?: 'PageRecord', title?: string | null, slug?: string | null, id: string } | null } | null } | { __typename?: 'LatestRecord' } | { __typename: 'LayoutSidebarRecord', sidebar?: { __typename: 'NavScrollRecord', title?: string | null, content?: { __typename?: 'NavScrollModelContentField', value: unknown } | null } | null, content: Array<{ __typename?: 'RichTextRecord', alignment?: string | null, anchorId?: string | null, richTextContent?: { __typename?: 'RichTextModelContentField', value: unknown, blocks: Array<{ __typename: 'ButtonRecord', id: string, href?: string | null, target?: string | null, text?: string | null, icon?: string | null, cmsPage?: { __typename?: 'PageRecord', title?: string | null, slug?: string | null, id: string } | null } | { __typename: 'CardsGridRecord', id: string, background?: string | null, title?: string | null, description?: string | null, alignment?: string | null, columns?: string | null, cardTitleTag?: string | null, customCards?: { __typename: 'GenericCardListRecord', id: string, cardLayout?: string | null, cards: Array<{ __typename: 'CardGenericRecord', id: string, title?: string | null, description?: string | null, date?: string | null, label?: string | null, iconBeforeTitle?: string | null }> } | null, risorse: Array<{ __typename: 'ResourceRecord', id: string, slug?: string | null, title?: string | null, summary?: string | null, badge?: string | null, data?: string | null }>, news: Array<{ __typename: 'NewsRecord', id: string, slug?: string | null, title?: string | null, summary?: string | null, category?: string | null, data?: string | null }>, button?: { __typename: 'ButtonRecord', id: string, href?: string | null, target?: string | null, text?: string | null, icon?: string | null, cmsPage?: { __typename?: 'PageRecord', title?: string | null, slug?: string | null, id: string } | null } | null } | { __typename: 'ImagesGridRecord', id: string, images: Array<{ __typename?: 'FileField', url: string, basename: string, alt?: string | null, format: string, width?: number | null, height?: number | null, id: string, title?: string | null, responsiveImage?: { __typename: 'ResponsiveImage', src: string, alt?: string | null, aspectRatio: number, width: number, height: number } | null }> } | { __typename: 'LinkRecord', id: string, href?: string | null, icon?: string | null, target?: string | null, text?: string | null, cmsPage?: { __typename?: 'PageRecord', slug?: string | null, title?: string | null, id: string } | null } | { __typename: 'VideoPlayerRecord', id: string, title?: string | null, transcription?: string | null, transcriptionLabel?: string | null, videoSources: Array<{ __typename?: 'VideoSourceRecord', sourceSrc?: string | null, sourceType?: string | null }>, poster?: { __typename?: 'FileField', url: string } | null }> } | null }> } | { __typename: 'RichTextRecord', alignment?: string | null, anchorId?: string | null, richTextContent?: { __typename?: 'RichTextModelContentField', value: unknown, blocks: Array<{ __typename: 'ButtonRecord', id: string, href?: string | null, target?: string | null, text?: string | null, icon?: string | null, cmsPage?: { __typename?: 'PageRecord', title?: string | null, slug?: string | null, id: string } | null } | { __typename: 'CardsGridRecord', id: string, background?: string | null, title?: string | null, description?: string | null, alignment?: string | null, columns?: string | null, cardTitleTag?: string | null, customCards?: { __typename: 'GenericCardListRecord', id: string, cardLayout?: string | null, cards: Array<{ __typename: 'CardGenericRecord', id: string, title?: string | null, description?: string | null, date?: string | null, label?: string | null, iconBeforeTitle?: string | null }> } | null, risorse: Array<{ __typename: 'ResourceRecord', id: string, slug?: string | null, title?: string | null, summary?: string | null, badge?: string | null, data?: string | null }>, news: Array<{ __typename: 'NewsRecord', id: string, slug?: string | null, title?: string | null, summary?: string | null, category?: string | null, data?: string | null }>, button?: { __typename: 'ButtonRecord', id: string, href?: string | null, target?: string | null, text?: string | null, icon?: string | null, cmsPage?: { __typename?: 'PageRecord', title?: string | null, slug?: string | null, id: string } | null } | null } | { __typename: 'ImagesGridRecord', id: string, images: Array<{ __typename?: 'FileField', url: string, basename: string, alt?: string | null, format: string, width?: number | null, height?: number | null, id: string, title?: string | null, responsiveImage?: { __typename: 'ResponsiveImage', src: string, alt?: string | null, aspectRatio: number, width: number, height: number } | null }> } | { __typename: 'LinkRecord', id: string, href?: string | null, icon?: string | null, target?: string | null, text?: string | null, cmsPage?: { __typename?: 'PageRecord', slug?: string | null, title?: string | null, id: string } | null } | { __typename: 'VideoPlayerRecord', id: string, title?: string | null, transcription?: string | null, transcriptionLabel?: string | null, videoSources: Array<{ __typename?: 'VideoSourceRecord', sourceSrc?: string | null, sourceType?: string | null }>, poster?: { __typename?: 'FileField', url: string } | null }> } | null } | { __typename: 'SplitBannerRecord', id: string, title?: string | null, description?: string | null, imgLeft: boolean, lightTheme: boolean, links: Array<{ __typename?: 'PageRecord', id: string, slug?: string | null, title?: string | null }>, image?: { __typename?: 'FileField', responsiveImage?: { __typename: 'ResponsiveImage', src: string, alt?: string | null, aspectRatio: number, width: number, height: number } | null } | null, button?: { __typename: 'ButtonRecord', id: string, href?: string | null, target?: string | null, text?: string | null, icon?: string | null, cmsPage?: { __typename?: 'PageRecord', title?: string | null, slug?: string | null, id: string } | null } | null } | { __typename: 'TableListRecord', id: string, title?: string | null, showTableHead: boolean, alignment?: string | null, cta?: { __typename: 'ButtonRecord', id: string, href?: string | null, target?: string | null, text?: string | null, icon?: string | null, cmsPage?: { __typename?: 'PageRecord', title?: string | null, slug?: string | null, id: string } | null } | null, items: Array<{ __typename: 'TableListItemRecord', date?: string | null, title?: string | null, link?: { __typename: 'LinkRecord', id: string, href?: string | null, icon?: string | null, target?: string | null, text?: string | null, cmsPage?: { __typename?: 'PageRecord', slug?: string | null, title?: string | null, id: string } | null } | null } | { __typename: 'TableListLinkItemRecord', category?: { __typename?: 'ArgomentoRecord', label?: string | null, slug?: string | null } | null, link?: { __typename: 'LinkRecord', id: string, href?: string | null, icon?: string | null, target?: string | null, text?: string | null, cmsPage?: { __typename?: 'PageRecord', slug?: string | null, title?: string | null, id: string, body: Array<{ __typename: 'BannerRecord' } | { __typename: 'BloccoGraficoRecord' } | { __typename: 'CardServiceRecord' } | { __typename: 'CardsGridRecord' } | { __typename: 'DataHeroRecord', id: string, badge?: { __typename?: 'BadgeRecord', label?: string | null } | null } | { __typename: 'HeroRecord' } | { __typename: 'LatestRecord' } | { __typename: 'LayoutSidebarRecord' } | { __typename: 'RichTextRecord' } | { __typename: 'SplitBannerRecord' } | { __typename: 'TableListRecord' } | { __typename: 'VideoPlayerRecord' }> } | null } | null }> } | { __typename: 'VideoPlayerRecord', id: string, title?: string | null, transcription?: string | null, transcriptionLabel?: string | null, videoSources: Array<{ __typename?: 'VideoSourceRecord', sourceSrc?: string | null, sourceType?: string | null }>, poster?: { __typename?: 'FileField', url: string } | null }> }>, _allPagesMeta: { __typename?: 'CollectionMetadata', count: number } };

export type AllResourcesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllResourcesQuery = { __typename?: 'Query', allResources: Array<{ __typename?: 'ResourceRecord', title?: string | null, slug?: string | null, customUpdateDate?: string | null, body: Array<{ __typename: 'BannerRecord', id: string, title?: string | null, description?: string | null, lightTheme: boolean, button?: { __typename: 'ButtonRecord', id: string, href?: string | null, target?: string | null, text?: string | null, icon?: string | null, cmsPage?: { __typename?: 'PageRecord', title?: string | null, slug?: string | null, id: string } | null } | null } | { __typename: 'CardsGridRecord', id: string, background?: string | null, title?: string | null, description?: string | null, alignment?: string | null, columns?: string | null, cardTitleTag?: string | null, customCards?: { __typename: 'GenericCardListRecord', id: string, cardLayout?: string | null, cards: Array<{ __typename: 'CardGenericRecord', id: string, title?: string | null, description?: string | null, date?: string | null, label?: string | null, iconBeforeTitle?: string | null }> } | null, risorse: Array<{ __typename: 'ResourceRecord', id: string, slug?: string | null, title?: string | null, summary?: string | null, badge?: string | null, data?: string | null }>, news: Array<{ __typename: 'NewsRecord', id: string, slug?: string | null, title?: string | null, summary?: string | null, category?: string | null, data?: string | null }>, button?: { __typename: 'ButtonRecord', id: string, href?: string | null, target?: string | null, text?: string | null, icon?: string | null, cmsPage?: { __typename?: 'PageRecord', title?: string | null, slug?: string | null, id: string } | null } | null } | { __typename: 'DataHeroRecord', hideBreadcrumbs: boolean, title?: string | null, updateDate?: string | null, button?: { __typename: 'ButtonRecord', id: string, href?: string | null, target?: string | null, text?: string | null, icon?: string | null, cmsPage?: { __typename?: 'PageRecord', title?: string | null, slug?: string | null, id: string } | null } | null, argomento?: { __typename?: 'ArgomentoRecord', label?: string | null, slug?: string | null } | null, badge?: { __typename?: 'BadgeRecord', label?: string | null } | null, beneficiari?: { __typename?: 'EnteBeneficiarioRecord', label?: string | null } | null, misura?: { __typename?: 'MisuraRecord', label?: string | null, slug?: string | null, basePath?: string | null } | null } | { __typename: 'HeroRecord', lightTheme: boolean, hideBreadcrumbs: boolean, title?: string | null, description?: string | null, updateDate?: string | null, image?: { __typename?: 'FileField', responsiveImage?: { __typename: 'ResponsiveImage', src: string, alt?: string | null, aspectRatio: number, width: number, height: number } | null } | null, button?: { __typename: 'ButtonRecord', id: string, href?: string | null, target?: string | null, text?: string | null, icon?: string | null, cmsPage?: { __typename?: 'PageRecord', title?: string | null, slug?: string | null, id: string } | null } | null } | { __typename: 'LayoutSidebarRecord', sidebar?: { __typename: 'NavScrollRecord', title?: string | null, content?: { __typename?: 'NavScrollModelContentField', value: unknown } | null } | null, content: Array<{ __typename?: 'RichTextRecord', alignment?: string | null, anchorId?: string | null, richTextContent?: { __typename?: 'RichTextModelContentField', value: unknown, blocks: Array<{ __typename: 'ButtonRecord', id: string, href?: string | null, target?: string | null, text?: string | null, icon?: string | null, cmsPage?: { __typename?: 'PageRecord', title?: string | null, slug?: string | null, id: string } | null } | { __typename: 'CardsGridRecord', id: string, background?: string | null, title?: string | null, description?: string | null, alignment?: string | null, columns?: string | null, cardTitleTag?: string | null, customCards?: { __typename: 'GenericCardListRecord', id: string, cardLayout?: string | null, cards: Array<{ __typename: 'CardGenericRecord', id: string, title?: string | null, description?: string | null, date?: string | null, label?: string | null, iconBeforeTitle?: string | null }> } | null, risorse: Array<{ __typename: 'ResourceRecord', id: string, slug?: string | null, title?: string | null, summary?: string | null, badge?: string | null, data?: string | null }>, news: Array<{ __typename: 'NewsRecord', id: string, slug?: string | null, title?: string | null, summary?: string | null, category?: string | null, data?: string | null }>, button?: { __typename: 'ButtonRecord', id: string, href?: string | null, target?: string | null, text?: string | null, icon?: string | null, cmsPage?: { __typename?: 'PageRecord', title?: string | null, slug?: string | null, id: string } | null } | null } | { __typename: 'ImagesGridRecord', id: string, images: Array<{ __typename?: 'FileField', url: string, basename: string, alt?: string | null, format: string, width?: number | null, height?: number | null, id: string, title?: string | null, responsiveImage?: { __typename: 'ResponsiveImage', src: string, alt?: string | null, aspectRatio: number, width: number, height: number } | null }> } | { __typename: 'LinkRecord', id: string, href?: string | null, icon?: string | null, target?: string | null, text?: string | null, cmsPage?: { __typename?: 'PageRecord', slug?: string | null, title?: string | null, id: string } | null } | { __typename: 'VideoPlayerRecord', id: string, title?: string | null, transcription?: string | null, transcriptionLabel?: string | null, videoSources: Array<{ __typename?: 'VideoSourceRecord', sourceSrc?: string | null, sourceType?: string | null }>, poster?: { __typename?: 'FileField', url: string } | null }> } | null }> } | { __typename: 'RichTextRecord', alignment?: string | null, anchorId?: string | null, richTextContent?: { __typename?: 'RichTextModelContentField', value: unknown, blocks: Array<{ __typename: 'ButtonRecord', id: string, href?: string | null, target?: string | null, text?: string | null, icon?: string | null, cmsPage?: { __typename?: 'PageRecord', title?: string | null, slug?: string | null, id: string } | null } | { __typename: 'CardsGridRecord', id: string, background?: string | null, title?: string | null, description?: string | null, alignment?: string | null, columns?: string | null, cardTitleTag?: string | null, customCards?: { __typename: 'GenericCardListRecord', id: string, cardLayout?: string | null, cards: Array<{ __typename: 'CardGenericRecord', id: string, title?: string | null, description?: string | null, date?: string | null, label?: string | null, iconBeforeTitle?: string | null }> } | null, risorse: Array<{ __typename: 'ResourceRecord', id: string, slug?: string | null, title?: string | null, summary?: string | null, badge?: string | null, data?: string | null }>, news: Array<{ __typename: 'NewsRecord', id: string, slug?: string | null, title?: string | null, summary?: string | null, category?: string | null, data?: string | null }>, button?: { __typename: 'ButtonRecord', id: string, href?: string | null, target?: string | null, text?: string | null, icon?: string | null, cmsPage?: { __typename?: 'PageRecord', title?: string | null, slug?: string | null, id: string } | null } | null } | { __typename: 'ImagesGridRecord', id: string, images: Array<{ __typename?: 'FileField', url: string, basename: string, alt?: string | null, format: string, width?: number | null, height?: number | null, id: string, title?: string | null, responsiveImage?: { __typename: 'ResponsiveImage', src: string, alt?: string | null, aspectRatio: number, width: number, height: number } | null }> } | { __typename: 'LinkRecord', id: string, href?: string | null, icon?: string | null, target?: string | null, text?: string | null, cmsPage?: { __typename?: 'PageRecord', slug?: string | null, title?: string | null, id: string } | null } | { __typename: 'VideoPlayerRecord', id: string, title?: string | null, transcription?: string | null, transcriptionLabel?: string | null, videoSources: Array<{ __typename?: 'VideoSourceRecord', sourceSrc?: string | null, sourceType?: string | null }>, poster?: { __typename?: 'FileField', url: string } | null }> } | null } | { __typename: 'SplitBannerRecord', id: string, title?: string | null, description?: string | null, imgLeft: boolean, lightTheme: boolean, links: Array<{ __typename?: 'PageRecord', id: string, slug?: string | null, title?: string | null }>, image?: { __typename?: 'FileField', responsiveImage?: { __typename: 'ResponsiveImage', src: string, alt?: string | null, aspectRatio: number, width: number, height: number } | null } | null, button?: { __typename: 'ButtonRecord', id: string, href?: string | null, target?: string | null, text?: string | null, icon?: string | null, cmsPage?: { __typename?: 'PageRecord', title?: string | null, slug?: string | null, id: string } | null } | null } | { __typename: 'VideoPlayerRecord', id: string, title?: string | null, transcription?: string | null, transcriptionLabel?: string | null, videoSources: Array<{ __typename?: 'VideoSourceRecord', sourceSrc?: string | null, sourceType?: string | null }>, poster?: { __typename?: 'FileField', url: string } | null }> }>, _allResourcesMeta: { __typename?: 'CollectionMetadata', count: number } };

export type FooterQueryVariables = Exact<{ [key: string]: never; }>;


export type FooterQuery = { __typename?: 'Query', footer?: { __typename?: 'FooterRecord', title?: string | null, titleColonna1?: string | null, titleColonna2?: string | null, titleColonna3?: string | null, linkColonna1: Array<{ __typename?: 'PageRecord', id: string, slug?: string | null, title?: string | null }>, linkColonna2: Array<{ __typename?: 'PageRecord', id: string, slug?: string | null, title?: string | null }>, linkColonna3: Array<{ __typename?: 'PageRecord', id: string, slug?: string | null, title?: string | null }>, linkNewsletter?: { __typename?: 'PageRecord', id: string, slug?: string | null, title?: string | null } | null, linkUtili: Array<{ __typename?: 'PageRecord', id: string, slug?: string | null, title?: string | null }> } | null };

export type ButtonFragmentFragment = { __typename: 'ButtonRecord', id: string, href?: string | null, target?: string | null, text?: string | null, icon?: string | null, cmsPage?: { __typename?: 'PageRecord', title?: string | null, slug?: string | null, id: string } | null };

export type ImageFragmentFragment = { __typename: 'ResponsiveImage', src: string, alt?: string | null, aspectRatio: number, width: number, height: number };

export type ImagesGridFragmentFragment = { __typename: 'ImagesGridRecord', id: string, images: Array<{ __typename?: 'FileField', url: string, basename: string, alt?: string | null, format: string, width?: number | null, height?: number | null, id: string, title?: string | null, responsiveImage?: { __typename: 'ResponsiveImage', src: string, alt?: string | null, aspectRatio: number, width: number, height: number } | null }> };

export type LinkFragmentFragment = { __typename: 'LinkRecord', id: string, href?: string | null, icon?: string | null, target?: string | null, text?: string | null, cmsPage?: { __typename?: 'PageRecord', slug?: string | null, title?: string | null, id: string } | null };

type RichTextContentFragment_ButtonRecord_Fragment = { __typename: 'ButtonRecord', id: string, href?: string | null, target?: string | null, text?: string | null, icon?: string | null, cmsPage?: { __typename?: 'PageRecord', title?: string | null, slug?: string | null, id: string } | null };

type RichTextContentFragment_CardsGridRecord_Fragment = { __typename: 'CardsGridRecord', id: string, background?: string | null, title?: string | null, description?: string | null, alignment?: string | null, columns?: string | null, cardTitleTag?: string | null, customCards?: { __typename: 'GenericCardListRecord', id: string, cardLayout?: string | null, cards: Array<{ __typename: 'CardGenericRecord', id: string, title?: string | null, description?: string | null, date?: string | null, label?: string | null, iconBeforeTitle?: string | null }> } | null, risorse: Array<{ __typename: 'ResourceRecord', id: string, slug?: string | null, title?: string | null, summary?: string | null, badge?: string | null, data?: string | null }>, news: Array<{ __typename: 'NewsRecord', id: string, slug?: string | null, title?: string | null, summary?: string | null, category?: string | null, data?: string | null }>, button?: { __typename: 'ButtonRecord', id: string, href?: string | null, target?: string | null, text?: string | null, icon?: string | null, cmsPage?: { __typename?: 'PageRecord', title?: string | null, slug?: string | null, id: string } | null } | null };

type RichTextContentFragment_ImagesGridRecord_Fragment = { __typename: 'ImagesGridRecord', id: string, images: Array<{ __typename?: 'FileField', url: string, basename: string, alt?: string | null, format: string, width?: number | null, height?: number | null, id: string, title?: string | null, responsiveImage?: { __typename: 'ResponsiveImage', src: string, alt?: string | null, aspectRatio: number, width: number, height: number } | null }> };

type RichTextContentFragment_LinkRecord_Fragment = { __typename: 'LinkRecord', id: string, href?: string | null, icon?: string | null, target?: string | null, text?: string | null, cmsPage?: { __typename?: 'PageRecord', slug?: string | null, title?: string | null, id: string } | null };

type RichTextContentFragment_VideoPlayerRecord_Fragment = { __typename: 'VideoPlayerRecord', id: string, title?: string | null, transcription?: string | null, transcriptionLabel?: string | null, videoSources: Array<{ __typename?: 'VideoSourceRecord', sourceSrc?: string | null, sourceType?: string | null }>, poster?: { __typename?: 'FileField', url: string } | null };

export type RichTextContentFragmentFragment = RichTextContentFragment_ButtonRecord_Fragment | RichTextContentFragment_CardsGridRecord_Fragment | RichTextContentFragment_ImagesGridRecord_Fragment | RichTextContentFragment_LinkRecord_Fragment | RichTextContentFragment_VideoPlayerRecord_Fragment;

export type RichTextFragmentFragment = { __typename: 'RichTextRecord', alignment?: string | null, anchorId?: string | null, richTextContent?: { __typename?: 'RichTextModelContentField', value: unknown, blocks: Array<{ __typename: 'ButtonRecord', id: string, href?: string | null, target?: string | null, text?: string | null, icon?: string | null, cmsPage?: { __typename?: 'PageRecord', title?: string | null, slug?: string | null, id: string } | null } | { __typename: 'CardsGridRecord', id: string, background?: string | null, title?: string | null, description?: string | null, alignment?: string | null, columns?: string | null, cardTitleTag?: string | null, customCards?: { __typename: 'GenericCardListRecord', id: string, cardLayout?: string | null, cards: Array<{ __typename: 'CardGenericRecord', id: string, title?: string | null, description?: string | null, date?: string | null, label?: string | null, iconBeforeTitle?: string | null }> } | null, risorse: Array<{ __typename: 'ResourceRecord', id: string, slug?: string | null, title?: string | null, summary?: string | null, badge?: string | null, data?: string | null }>, news: Array<{ __typename: 'NewsRecord', id: string, slug?: string | null, title?: string | null, summary?: string | null, category?: string | null, data?: string | null }>, button?: { __typename: 'ButtonRecord', id: string, href?: string | null, target?: string | null, text?: string | null, icon?: string | null, cmsPage?: { __typename?: 'PageRecord', title?: string | null, slug?: string | null, id: string } | null } | null } | { __typename: 'ImagesGridRecord', id: string, images: Array<{ __typename?: 'FileField', url: string, basename: string, alt?: string | null, format: string, width?: number | null, height?: number | null, id: string, title?: string | null, responsiveImage?: { __typename: 'ResponsiveImage', src: string, alt?: string | null, aspectRatio: number, width: number, height: number } | null }> } | { __typename: 'LinkRecord', id: string, href?: string | null, icon?: string | null, target?: string | null, text?: string | null, cmsPage?: { __typename?: 'PageRecord', slug?: string | null, title?: string | null, id: string } | null } | { __typename: 'VideoPlayerRecord', id: string, title?: string | null, transcription?: string | null, transcriptionLabel?: string | null, videoSources: Array<{ __typename?: 'VideoSourceRecord', sourceSrc?: string | null, sourceType?: string | null }>, poster?: { __typename?: 'FileField', url: string } | null }> } | null };

export type LayoutSidebarFragmentFragment = { __typename: 'LayoutSidebarRecord', sidebar?: { __typename: 'NavScrollRecord', title?: string | null, content?: { __typename?: 'NavScrollModelContentField', value: unknown } | null } | null, content: Array<{ __typename?: 'RichTextRecord', alignment?: string | null, anchorId?: string | null, richTextContent?: { __typename?: 'RichTextModelContentField', value: unknown, blocks: Array<{ __typename: 'ButtonRecord', id: string, href?: string | null, target?: string | null, text?: string | null, icon?: string | null, cmsPage?: { __typename?: 'PageRecord', title?: string | null, slug?: string | null, id: string } | null } | { __typename: 'CardsGridRecord', id: string, background?: string | null, title?: string | null, description?: string | null, alignment?: string | null, columns?: string | null, cardTitleTag?: string | null, customCards?: { __typename: 'GenericCardListRecord', id: string, cardLayout?: string | null, cards: Array<{ __typename: 'CardGenericRecord', id: string, title?: string | null, description?: string | null, date?: string | null, label?: string | null, iconBeforeTitle?: string | null }> } | null, risorse: Array<{ __typename: 'ResourceRecord', id: string, slug?: string | null, title?: string | null, summary?: string | null, badge?: string | null, data?: string | null }>, news: Array<{ __typename: 'NewsRecord', id: string, slug?: string | null, title?: string | null, summary?: string | null, category?: string | null, data?: string | null }>, button?: { __typename: 'ButtonRecord', id: string, href?: string | null, target?: string | null, text?: string | null, icon?: string | null, cmsPage?: { __typename?: 'PageRecord', title?: string | null, slug?: string | null, id: string } | null } | null } | { __typename: 'ImagesGridRecord', id: string, images: Array<{ __typename?: 'FileField', url: string, basename: string, alt?: string | null, format: string, width?: number | null, height?: number | null, id: string, title?: string | null, responsiveImage?: { __typename: 'ResponsiveImage', src: string, alt?: string | null, aspectRatio: number, width: number, height: number } | null }> } | { __typename: 'LinkRecord', id: string, href?: string | null, icon?: string | null, target?: string | null, text?: string | null, cmsPage?: { __typename?: 'PageRecord', slug?: string | null, title?: string | null, id: string } | null } | { __typename: 'VideoPlayerRecord', id: string, title?: string | null, transcription?: string | null, transcriptionLabel?: string | null, videoSources: Array<{ __typename?: 'VideoSourceRecord', sourceSrc?: string | null, sourceType?: string | null }>, poster?: { __typename?: 'FileField', url: string } | null }> } | null }> };

export type VideoPlayerFragmentFragment = { __typename: 'VideoPlayerRecord', id: string, title?: string | null, transcription?: string | null, transcriptionLabel?: string | null, videoSources: Array<{ __typename?: 'VideoSourceRecord', sourceSrc?: string | null, sourceType?: string | null }>, poster?: { __typename?: 'FileField', url: string } | null };

export type NavScrollFragmentFragment = { __typename: 'NavScrollRecord', title?: string | null, content?: { __typename?: 'NavScrollModelContentField', value: unknown } | null };

export type CardsGridFragmentFragment = { __typename: 'CardsGridRecord', id: string, background?: string | null, title?: string | null, description?: string | null, alignment?: string | null, columns?: string | null, cardTitleTag?: string | null, customCards?: { __typename: 'GenericCardListRecord', id: string, cardLayout?: string | null, cards: Array<{ __typename: 'CardGenericRecord', id: string, title?: string | null, description?: string | null, date?: string | null, label?: string | null, iconBeforeTitle?: string | null }> } | null, risorse: Array<{ __typename: 'ResourceRecord', id: string, slug?: string | null, title?: string | null, summary?: string | null, badge?: string | null, data?: string | null }>, news: Array<{ __typename: 'NewsRecord', id: string, slug?: string | null, title?: string | null, summary?: string | null, category?: string | null, data?: string | null }>, button?: { __typename: 'ButtonRecord', id: string, href?: string | null, target?: string | null, text?: string | null, icon?: string | null, cmsPage?: { __typename?: 'PageRecord', title?: string | null, slug?: string | null, id: string } | null } | null };

export type HeroFragmentFragment = { __typename: 'HeroRecord', lightTheme: boolean, hideBreadcrumbs: boolean, title?: string | null, description?: string | null, updateDate?: string | null, image?: { __typename?: 'FileField', responsiveImage?: { __typename: 'ResponsiveImage', src: string, alt?: string | null, aspectRatio: number, width: number, height: number } | null } | null, button?: { __typename: 'ButtonRecord', id: string, href?: string | null, target?: string | null, text?: string | null, icon?: string | null, cmsPage?: { __typename?: 'PageRecord', title?: string | null, slug?: string | null, id: string } | null } | null };

export type DataHeroFragmentFragment = { __typename: 'DataHeroRecord', hideBreadcrumbs: boolean, title?: string | null, updateDate?: string | null, button?: { __typename: 'ButtonRecord', id: string, href?: string | null, target?: string | null, text?: string | null, icon?: string | null, cmsPage?: { __typename?: 'PageRecord', title?: string | null, slug?: string | null, id: string } | null } | null, argomento?: { __typename?: 'ArgomentoRecord', label?: string | null, slug?: string | null } | null, badge?: { __typename?: 'BadgeRecord', label?: string | null } | null, beneficiari?: { __typename?: 'EnteBeneficiarioRecord', label?: string | null } | null, misura?: { __typename?: 'MisuraRecord', label?: string | null, slug?: string | null, basePath?: string | null } | null };

export type SplitBannerFragmentFragment = { __typename: 'SplitBannerRecord', id: string, title?: string | null, description?: string | null, imgLeft: boolean, lightTheme: boolean, links: Array<{ __typename?: 'PageRecord', id: string, slug?: string | null, title?: string | null }>, image?: { __typename?: 'FileField', responsiveImage?: { __typename: 'ResponsiveImage', src: string, alt?: string | null, aspectRatio: number, width: number, height: number } | null } | null, button?: { __typename: 'ButtonRecord', id: string, href?: string | null, target?: string | null, text?: string | null, icon?: string | null, cmsPage?: { __typename?: 'PageRecord', title?: string | null, slug?: string | null, id: string } | null } | null };

export type BannerFragmentFragment = { __typename: 'BannerRecord', id: string, title?: string | null, description?: string | null, lightTheme: boolean, button?: { __typename: 'ButtonRecord', id: string, href?: string | null, target?: string | null, text?: string | null, icon?: string | null, cmsPage?: { __typename?: 'PageRecord', title?: string | null, slug?: string | null, id: string } | null } | null };

export type TableListItemFragmentFragment = { __typename: 'TableListItemRecord', date?: string | null, title?: string | null, link?: { __typename: 'LinkRecord', id: string, href?: string | null, icon?: string | null, target?: string | null, text?: string | null, cmsPage?: { __typename?: 'PageRecord', slug?: string | null, title?: string | null, id: string } | null } | null };

export type TableListLinkItemFragmentFragment = { __typename: 'TableListLinkItemRecord', category?: { __typename?: 'ArgomentoRecord', label?: string | null, slug?: string | null } | null, link?: { __typename: 'LinkRecord', id: string, href?: string | null, icon?: string | null, target?: string | null, text?: string | null, cmsPage?: { __typename?: 'PageRecord', slug?: string | null, title?: string | null, id: string, body: Array<{ __typename: 'BannerRecord' } | { __typename: 'BloccoGraficoRecord' } | { __typename: 'CardServiceRecord' } | { __typename: 'CardsGridRecord' } | { __typename: 'DataHeroRecord', id: string, badge?: { __typename?: 'BadgeRecord', label?: string | null } | null } | { __typename: 'HeroRecord' } | { __typename: 'LatestRecord' } | { __typename: 'LayoutSidebarRecord' } | { __typename: 'RichTextRecord' } | { __typename: 'SplitBannerRecord' } | { __typename: 'TableListRecord' } | { __typename: 'VideoPlayerRecord' }> } | null } | null };

export type TableListFragmentFragment = { __typename: 'TableListRecord', id: string, title?: string | null, showTableHead: boolean, alignment?: string | null, cta?: { __typename: 'ButtonRecord', id: string, href?: string | null, target?: string | null, text?: string | null, icon?: string | null, cmsPage?: { __typename?: 'PageRecord', title?: string | null, slug?: string | null, id: string } | null } | null, items: Array<{ __typename: 'TableListItemRecord', date?: string | null, title?: string | null, link?: { __typename: 'LinkRecord', id: string, href?: string | null, icon?: string | null, target?: string | null, text?: string | null, cmsPage?: { __typename?: 'PageRecord', slug?: string | null, title?: string | null, id: string } | null } | null } | { __typename: 'TableListLinkItemRecord', category?: { __typename?: 'ArgomentoRecord', label?: string | null, slug?: string | null } | null, link?: { __typename: 'LinkRecord', id: string, href?: string | null, icon?: string | null, target?: string | null, text?: string | null, cmsPage?: { __typename?: 'PageRecord', slug?: string | null, title?: string | null, id: string, body: Array<{ __typename: 'BannerRecord' } | { __typename: 'BloccoGraficoRecord' } | { __typename: 'CardServiceRecord' } | { __typename: 'CardsGridRecord' } | { __typename: 'DataHeroRecord', id: string, badge?: { __typename?: 'BadgeRecord', label?: string | null } | null } | { __typename: 'HeroRecord' } | { __typename: 'LatestRecord' } | { __typename: 'LayoutSidebarRecord' } | { __typename: 'RichTextRecord' } | { __typename: 'SplitBannerRecord' } | { __typename: 'TableListRecord' } | { __typename: 'VideoPlayerRecord' }> } | null } | null }> };

export type HeaderQueryVariables = Exact<{ [key: string]: never; }>;


export type HeaderQuery = { __typename?: 'Query', header?: { __typename?: 'HeaderRecord', title?: string | null, subtitle?: string | null, mainLinks: Array<{ __typename?: 'PageRecord', id: string, slug?: string | null, title?: string | null }>, secondaryLinks: Array<{ __typename?: 'PageRecord', id: string, slug?: string | null, title?: string | null }> } | null };

export type PageQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
}>;


export type PageQuery = { __typename?: 'Query', page?: { __typename?: 'PageRecord', title?: string | null, slug?: string | null, customUpdateDate?: string | null, body: Array<{ __typename: 'BannerRecord', id: string, title?: string | null, description?: string | null, lightTheme: boolean, button?: { __typename: 'ButtonRecord', id: string, href?: string | null, target?: string | null, text?: string | null, icon?: string | null, cmsPage?: { __typename?: 'PageRecord', title?: string | null, slug?: string | null, id: string } | null } | null } | { __typename?: 'BloccoGraficoRecord' } | { __typename: 'CardServiceRecord', id: string, title?: string | null } | { __typename: 'CardsGridRecord', id: string, background?: string | null, title?: string | null, description?: string | null, alignment?: string | null, columns?: string | null, cardTitleTag?: string | null, customCards?: { __typename: 'GenericCardListRecord', id: string, cardLayout?: string | null, cards: Array<{ __typename: 'CardGenericRecord', id: string, title?: string | null, description?: string | null, date?: string | null, label?: string | null, iconBeforeTitle?: string | null }> } | null, risorse: Array<{ __typename: 'ResourceRecord', id: string, slug?: string | null, title?: string | null, summary?: string | null, badge?: string | null, data?: string | null }>, news: Array<{ __typename: 'NewsRecord', id: string, slug?: string | null, title?: string | null, summary?: string | null, category?: string | null, data?: string | null }>, button?: { __typename: 'ButtonRecord', id: string, href?: string | null, target?: string | null, text?: string | null, icon?: string | null, cmsPage?: { __typename?: 'PageRecord', title?: string | null, slug?: string | null, id: string } | null } | null } | { __typename: 'DataHeroRecord', hideBreadcrumbs: boolean, title?: string | null, updateDate?: string | null, button?: { __typename: 'ButtonRecord', id: string, href?: string | null, target?: string | null, text?: string | null, icon?: string | null, cmsPage?: { __typename?: 'PageRecord', title?: string | null, slug?: string | null, id: string } | null } | null, argomento?: { __typename?: 'ArgomentoRecord', label?: string | null, slug?: string | null } | null, badge?: { __typename?: 'BadgeRecord', label?: string | null } | null, beneficiari?: { __typename?: 'EnteBeneficiarioRecord', label?: string | null } | null, misura?: { __typename?: 'MisuraRecord', label?: string | null, slug?: string | null, basePath?: string | null } | null } | { __typename: 'HeroRecord', lightTheme: boolean, hideBreadcrumbs: boolean, title?: string | null, description?: string | null, updateDate?: string | null, image?: { __typename?: 'FileField', responsiveImage?: { __typename: 'ResponsiveImage', src: string, alt?: string | null, aspectRatio: number, width: number, height: number } | null } | null, button?: { __typename: 'ButtonRecord', id: string, href?: string | null, target?: string | null, text?: string | null, icon?: string | null, cmsPage?: { __typename?: 'PageRecord', title?: string | null, slug?: string | null, id: string } | null } | null } | { __typename?: 'LatestRecord' } | { __typename: 'LayoutSidebarRecord', sidebar?: { __typename: 'NavScrollRecord', title?: string | null, content?: { __typename?: 'NavScrollModelContentField', value: unknown } | null } | null, content: Array<{ __typename?: 'RichTextRecord', alignment?: string | null, anchorId?: string | null, richTextContent?: { __typename?: 'RichTextModelContentField', value: unknown, blocks: Array<{ __typename: 'ButtonRecord', id: string, href?: string | null, target?: string | null, text?: string | null, icon?: string | null, cmsPage?: { __typename?: 'PageRecord', title?: string | null, slug?: string | null, id: string } | null } | { __typename: 'CardsGridRecord', id: string, background?: string | null, title?: string | null, description?: string | null, alignment?: string | null, columns?: string | null, cardTitleTag?: string | null, customCards?: { __typename: 'GenericCardListRecord', id: string, cardLayout?: string | null, cards: Array<{ __typename: 'CardGenericRecord', id: string, title?: string | null, description?: string | null, date?: string | null, label?: string | null, iconBeforeTitle?: string | null }> } | null, risorse: Array<{ __typename: 'ResourceRecord', id: string, slug?: string | null, title?: string | null, summary?: string | null, badge?: string | null, data?: string | null }>, news: Array<{ __typename: 'NewsRecord', id: string, slug?: string | null, title?: string | null, summary?: string | null, category?: string | null, data?: string | null }>, button?: { __typename: 'ButtonRecord', id: string, href?: string | null, target?: string | null, text?: string | null, icon?: string | null, cmsPage?: { __typename?: 'PageRecord', title?: string | null, slug?: string | null, id: string } | null } | null } | { __typename: 'ImagesGridRecord', id: string, images: Array<{ __typename?: 'FileField', url: string, basename: string, alt?: string | null, format: string, width?: number | null, height?: number | null, id: string, title?: string | null, responsiveImage?: { __typename: 'ResponsiveImage', src: string, alt?: string | null, aspectRatio: number, width: number, height: number } | null }> } | { __typename: 'LinkRecord', id: string, href?: string | null, icon?: string | null, target?: string | null, text?: string | null, cmsPage?: { __typename?: 'PageRecord', slug?: string | null, title?: string | null, id: string } | null } | { __typename: 'VideoPlayerRecord', id: string, title?: string | null, transcription?: string | null, transcriptionLabel?: string | null, videoSources: Array<{ __typename?: 'VideoSourceRecord', sourceSrc?: string | null, sourceType?: string | null }>, poster?: { __typename?: 'FileField', url: string } | null }> } | null }> } | { __typename: 'RichTextRecord', alignment?: string | null, anchorId?: string | null, richTextContent?: { __typename?: 'RichTextModelContentField', value: unknown, blocks: Array<{ __typename: 'ButtonRecord', id: string, href?: string | null, target?: string | null, text?: string | null, icon?: string | null, cmsPage?: { __typename?: 'PageRecord', title?: string | null, slug?: string | null, id: string } | null } | { __typename: 'CardsGridRecord', id: string, background?: string | null, title?: string | null, description?: string | null, alignment?: string | null, columns?: string | null, cardTitleTag?: string | null, customCards?: { __typename: 'GenericCardListRecord', id: string, cardLayout?: string | null, cards: Array<{ __typename: 'CardGenericRecord', id: string, title?: string | null, description?: string | null, date?: string | null, label?: string | null, iconBeforeTitle?: string | null }> } | null, risorse: Array<{ __typename: 'ResourceRecord', id: string, slug?: string | null, title?: string | null, summary?: string | null, badge?: string | null, data?: string | null }>, news: Array<{ __typename: 'NewsRecord', id: string, slug?: string | null, title?: string | null, summary?: string | null, category?: string | null, data?: string | null }>, button?: { __typename: 'ButtonRecord', id: string, href?: string | null, target?: string | null, text?: string | null, icon?: string | null, cmsPage?: { __typename?: 'PageRecord', title?: string | null, slug?: string | null, id: string } | null } | null } | { __typename: 'ImagesGridRecord', id: string, images: Array<{ __typename?: 'FileField', url: string, basename: string, alt?: string | null, format: string, width?: number | null, height?: number | null, id: string, title?: string | null, responsiveImage?: { __typename: 'ResponsiveImage', src: string, alt?: string | null, aspectRatio: number, width: number, height: number } | null }> } | { __typename: 'LinkRecord', id: string, href?: string | null, icon?: string | null, target?: string | null, text?: string | null, cmsPage?: { __typename?: 'PageRecord', slug?: string | null, title?: string | null, id: string } | null } | { __typename: 'VideoPlayerRecord', id: string, title?: string | null, transcription?: string | null, transcriptionLabel?: string | null, videoSources: Array<{ __typename?: 'VideoSourceRecord', sourceSrc?: string | null, sourceType?: string | null }>, poster?: { __typename?: 'FileField', url: string } | null }> } | null } | { __typename: 'SplitBannerRecord', id: string, title?: string | null, description?: string | null, imgLeft: boolean, lightTheme: boolean, links: Array<{ __typename?: 'PageRecord', id: string, slug?: string | null, title?: string | null }>, image?: { __typename?: 'FileField', responsiveImage?: { __typename: 'ResponsiveImage', src: string, alt?: string | null, aspectRatio: number, width: number, height: number } | null } | null, button?: { __typename: 'ButtonRecord', id: string, href?: string | null, target?: string | null, text?: string | null, icon?: string | null, cmsPage?: { __typename?: 'PageRecord', title?: string | null, slug?: string | null, id: string } | null } | null } | { __typename: 'TableListRecord', id: string, title?: string | null, showTableHead: boolean, alignment?: string | null, cta?: { __typename: 'ButtonRecord', id: string, href?: string | null, target?: string | null, text?: string | null, icon?: string | null, cmsPage?: { __typename?: 'PageRecord', title?: string | null, slug?: string | null, id: string } | null } | null, items: Array<{ __typename: 'TableListItemRecord', date?: string | null, title?: string | null, link?: { __typename: 'LinkRecord', id: string, href?: string | null, icon?: string | null, target?: string | null, text?: string | null, cmsPage?: { __typename?: 'PageRecord', slug?: string | null, title?: string | null, id: string } | null } | null } | { __typename: 'TableListLinkItemRecord', category?: { __typename?: 'ArgomentoRecord', label?: string | null, slug?: string | null } | null, link?: { __typename: 'LinkRecord', id: string, href?: string | null, icon?: string | null, target?: string | null, text?: string | null, cmsPage?: { __typename?: 'PageRecord', slug?: string | null, title?: string | null, id: string, body: Array<{ __typename: 'BannerRecord' } | { __typename: 'BloccoGraficoRecord' } | { __typename: 'CardServiceRecord' } | { __typename: 'CardsGridRecord' } | { __typename: 'DataHeroRecord', id: string, badge?: { __typename?: 'BadgeRecord', label?: string | null } | null } | { __typename: 'HeroRecord' } | { __typename: 'LatestRecord' } | { __typename: 'LayoutSidebarRecord' } | { __typename: 'RichTextRecord' } | { __typename: 'SplitBannerRecord' } | { __typename: 'TableListRecord' } | { __typename: 'VideoPlayerRecord' }> } | null } | null }> } | { __typename: 'VideoPlayerRecord', id: string, title?: string | null, transcription?: string | null, transcriptionLabel?: string | null, videoSources: Array<{ __typename?: 'VideoSourceRecord', sourceSrc?: string | null, sourceType?: string | null }>, poster?: { __typename?: 'FileField', url: string } | null }> } | null };

export type SitemapPagesQueryVariables = Exact<{ [key: string]: never; }>;


export type SitemapPagesQuery = { __typename?: 'Query', allPages: Array<{ __typename?: 'PageRecord', slug?: string | null, _updatedAt: string }> };

export const ImageFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ResponsiveImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]} as unknown as DocumentNode<ImageFragmentFragment, unknown>;
export const ImagesGridFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImagesGridFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImagesGridRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"basename"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"format"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ResponsiveImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]} as unknown as DocumentNode<ImagesGridFragmentFragment, unknown>;
export const LinkFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LinkRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"cmsPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<LinkFragmentFragment, unknown>;
export const ButtonFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"cmsPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<ButtonFragmentFragment, unknown>;
export const VideoPlayerFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"VideoPlayerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VideoPlayerRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"transcription"}},{"kind":"Field","name":{"kind":"Name","value":"transcriptionLabel"}},{"kind":"Field","name":{"kind":"Name","value":"videoSources"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sourceSrc"}},{"kind":"Field","name":{"kind":"Name","value":"sourceType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"poster"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<VideoPlayerFragmentFragment, unknown>;
export const CardsGridFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardsGridFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CardsGridRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"background"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"alignment"}},{"kind":"Field","name":{"kind":"Name","value":"columns"}},{"kind":"Field","name":{"kind":"Name","value":"cardTitleTag"}},{"kind":"Field","name":{"kind":"Name","value":"customCards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"cardLayout"}},{"kind":"Field","name":{"kind":"Name","value":"cards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"iconBeforeTitle"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"risorse"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"badge"}},{"kind":"Field","name":{"kind":"Name","value":"data"}}]}},{"kind":"Field","name":{"kind":"Name","value":"news"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"data"}}]}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"cmsPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CardsGridFragmentFragment, unknown>;
export const RichTextContentFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RichTextContentFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RichTextModelContentBlocksField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImagesGridRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImagesGridFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LinkRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VideoPlayerRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"VideoPlayerFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CardsGridRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardsGridFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ResponsiveImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"cmsPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImagesGridFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImagesGridRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"basename"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"format"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LinkRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"cmsPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"VideoPlayerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VideoPlayerRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"transcription"}},{"kind":"Field","name":{"kind":"Name","value":"transcriptionLabel"}},{"kind":"Field","name":{"kind":"Name","value":"videoSources"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sourceSrc"}},{"kind":"Field","name":{"kind":"Name","value":"sourceType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"poster"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardsGridFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CardsGridRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"background"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"alignment"}},{"kind":"Field","name":{"kind":"Name","value":"columns"}},{"kind":"Field","name":{"kind":"Name","value":"cardTitleTag"}},{"kind":"Field","name":{"kind":"Name","value":"customCards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"cardLayout"}},{"kind":"Field","name":{"kind":"Name","value":"cards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"iconBeforeTitle"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"risorse"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"badge"}},{"kind":"Field","name":{"kind":"Name","value":"data"}}]}},{"kind":"Field","name":{"kind":"Name","value":"news"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"data"}}]}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonFragment"}}]}}]}}]} as unknown as DocumentNode<RichTextContentFragmentFragment, unknown>;
export const RichTextFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RichTextFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RichTextRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"alignment"}},{"kind":"Field","name":{"kind":"Name","value":"anchorId"}},{"kind":"Field","alias":{"kind":"Name","value":"richTextContent"},"name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"blocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RichTextContentFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ResponsiveImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImagesGridFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImagesGridRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"basename"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"format"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LinkRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"cmsPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"cmsPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"VideoPlayerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VideoPlayerRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"transcription"}},{"kind":"Field","name":{"kind":"Name","value":"transcriptionLabel"}},{"kind":"Field","name":{"kind":"Name","value":"videoSources"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sourceSrc"}},{"kind":"Field","name":{"kind":"Name","value":"sourceType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"poster"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardsGridFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CardsGridRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"background"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"alignment"}},{"kind":"Field","name":{"kind":"Name","value":"columns"}},{"kind":"Field","name":{"kind":"Name","value":"cardTitleTag"}},{"kind":"Field","name":{"kind":"Name","value":"customCards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"cardLayout"}},{"kind":"Field","name":{"kind":"Name","value":"cards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"iconBeforeTitle"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"risorse"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"badge"}},{"kind":"Field","name":{"kind":"Name","value":"data"}}]}},{"kind":"Field","name":{"kind":"Name","value":"news"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"data"}}]}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RichTextContentFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RichTextModelContentBlocksField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImagesGridRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImagesGridFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LinkRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VideoPlayerRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"VideoPlayerFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CardsGridRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardsGridFragment"}}]}}]}}]} as unknown as DocumentNode<RichTextFragmentFragment, unknown>;
export const NavScrollFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NavScrollFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NavScrollRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<NavScrollFragmentFragment, unknown>;
export const LayoutSidebarFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LayoutSidebarFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayoutSidebarRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"sidebar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavScrollFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alignment"}},{"kind":"Field","name":{"kind":"Name","value":"anchorId"}},{"kind":"Field","alias":{"kind":"Name","value":"richTextContent"},"name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"blocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RichTextContentFragment"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ResponsiveImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImagesGridFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImagesGridRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"basename"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"format"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LinkRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"cmsPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"cmsPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"VideoPlayerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VideoPlayerRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"transcription"}},{"kind":"Field","name":{"kind":"Name","value":"transcriptionLabel"}},{"kind":"Field","name":{"kind":"Name","value":"videoSources"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sourceSrc"}},{"kind":"Field","name":{"kind":"Name","value":"sourceType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"poster"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardsGridFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CardsGridRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"background"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"alignment"}},{"kind":"Field","name":{"kind":"Name","value":"columns"}},{"kind":"Field","name":{"kind":"Name","value":"cardTitleTag"}},{"kind":"Field","name":{"kind":"Name","value":"customCards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"cardLayout"}},{"kind":"Field","name":{"kind":"Name","value":"cards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"iconBeforeTitle"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"risorse"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"badge"}},{"kind":"Field","name":{"kind":"Name","value":"data"}}]}},{"kind":"Field","name":{"kind":"Name","value":"news"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"data"}}]}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NavScrollFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NavScrollRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RichTextContentFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RichTextModelContentBlocksField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImagesGridRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImagesGridFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LinkRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VideoPlayerRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"VideoPlayerFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CardsGridRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardsGridFragment"}}]}}]}}]} as unknown as DocumentNode<LayoutSidebarFragmentFragment, unknown>;
export const HeroFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HeroRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"lightTheme"}},{"kind":"Field","name":{"kind":"Name","value":"hideBreadcrumbs"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"updateDate"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ResponsiveImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"cmsPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<HeroFragmentFragment, unknown>;
export const DataHeroFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DataHeroFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DataHeroRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"hideBreadcrumbs"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updateDate"}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"argomento"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"badge"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"beneficiari"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"misura"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"basePath"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"cmsPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DataHeroFragmentFragment, unknown>;
export const SplitBannerFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SplitBannerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SplitBannerRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"imgLeft"}},{"kind":"Field","name":{"kind":"Name","value":"lightTheme"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ResponsiveImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"cmsPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<SplitBannerFragmentFragment, unknown>;
export const BannerFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BannerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BannerRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"lightTheme"}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"cmsPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<BannerFragmentFragment, unknown>;
export const TableListItemFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TableListItemFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TableListItemRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LinkRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"cmsPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<TableListItemFragmentFragment, unknown>;
export const TableListLinkItemFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TableListLinkItemFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TableListLinkItemRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"cmsPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"body"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DataHeroRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"badge"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<TableListLinkItemFragmentFragment, unknown>;
export const TableListFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TableListFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TableListRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"showTableHead"}},{"kind":"Field","name":{"kind":"Name","value":"alignment"}},{"kind":"Field","name":{"kind":"Name","value":"cta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TableListItemRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TableListItemFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TableListLinkItemRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TableListLinkItemFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LinkRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"cmsPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"cmsPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TableListItemFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TableListItemRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TableListLinkItemFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TableListLinkItemRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"cmsPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"body"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DataHeroRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"badge"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<TableListFragmentFragment, unknown>;
export const AllFaqsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllFaqs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allFaqs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"customUpdateDate"}},{"kind":"Field","name":{"kind":"Name","value":"body"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HeroRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DataHeroRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DataHeroFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SplitBannerRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SplitBannerFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BannerRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BannerFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RichTextRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RichTextFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VideoPlayerRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"VideoPlayerFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CardsGridRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardsGridFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayoutSidebarRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayoutSidebarFragment"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"_allFaqsMeta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ResponsiveImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"cmsPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImagesGridFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImagesGridRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"basename"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"format"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LinkRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"cmsPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"VideoPlayerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VideoPlayerRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"transcription"}},{"kind":"Field","name":{"kind":"Name","value":"transcriptionLabel"}},{"kind":"Field","name":{"kind":"Name","value":"videoSources"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sourceSrc"}},{"kind":"Field","name":{"kind":"Name","value":"sourceType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"poster"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardsGridFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CardsGridRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"background"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"alignment"}},{"kind":"Field","name":{"kind":"Name","value":"columns"}},{"kind":"Field","name":{"kind":"Name","value":"cardTitleTag"}},{"kind":"Field","name":{"kind":"Name","value":"customCards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"cardLayout"}},{"kind":"Field","name":{"kind":"Name","value":"cards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"iconBeforeTitle"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"risorse"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"badge"}},{"kind":"Field","name":{"kind":"Name","value":"data"}}]}},{"kind":"Field","name":{"kind":"Name","value":"news"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"data"}}]}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RichTextContentFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RichTextModelContentBlocksField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImagesGridRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImagesGridFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LinkRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VideoPlayerRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"VideoPlayerFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CardsGridRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardsGridFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NavScrollFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NavScrollRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HeroRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"lightTheme"}},{"kind":"Field","name":{"kind":"Name","value":"hideBreadcrumbs"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"updateDate"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DataHeroFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DataHeroRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"hideBreadcrumbs"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updateDate"}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"argomento"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"badge"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"beneficiari"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"misura"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"basePath"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SplitBannerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SplitBannerRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"imgLeft"}},{"kind":"Field","name":{"kind":"Name","value":"lightTheme"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BannerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BannerRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"lightTheme"}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RichTextFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RichTextRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"alignment"}},{"kind":"Field","name":{"kind":"Name","value":"anchorId"}},{"kind":"Field","alias":{"kind":"Name","value":"richTextContent"},"name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"blocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RichTextContentFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LayoutSidebarFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayoutSidebarRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"sidebar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavScrollFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alignment"}},{"kind":"Field","name":{"kind":"Name","value":"anchorId"}},{"kind":"Field","alias":{"kind":"Name","value":"richTextContent"},"name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"blocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RichTextContentFragment"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AllFaqsQuery, AllFaqsQueryVariables>;
export const AllNewsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllNews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allNews"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"customUpdateDate"}},{"kind":"Field","name":{"kind":"Name","value":"body"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HeroRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DataHeroRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DataHeroFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SplitBannerRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SplitBannerFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BannerRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BannerFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RichTextRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RichTextFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VideoPlayerRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"VideoPlayerFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CardsGridRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardsGridFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayoutSidebarRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayoutSidebarFragment"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"_allNewsMeta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ResponsiveImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"cmsPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImagesGridFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImagesGridRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"basename"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"format"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LinkRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"cmsPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"VideoPlayerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VideoPlayerRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"transcription"}},{"kind":"Field","name":{"kind":"Name","value":"transcriptionLabel"}},{"kind":"Field","name":{"kind":"Name","value":"videoSources"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sourceSrc"}},{"kind":"Field","name":{"kind":"Name","value":"sourceType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"poster"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardsGridFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CardsGridRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"background"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"alignment"}},{"kind":"Field","name":{"kind":"Name","value":"columns"}},{"kind":"Field","name":{"kind":"Name","value":"cardTitleTag"}},{"kind":"Field","name":{"kind":"Name","value":"customCards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"cardLayout"}},{"kind":"Field","name":{"kind":"Name","value":"cards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"iconBeforeTitle"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"risorse"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"badge"}},{"kind":"Field","name":{"kind":"Name","value":"data"}}]}},{"kind":"Field","name":{"kind":"Name","value":"news"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"data"}}]}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RichTextContentFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RichTextModelContentBlocksField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImagesGridRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImagesGridFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LinkRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VideoPlayerRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"VideoPlayerFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CardsGridRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardsGridFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NavScrollFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NavScrollRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HeroRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"lightTheme"}},{"kind":"Field","name":{"kind":"Name","value":"hideBreadcrumbs"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"updateDate"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DataHeroFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DataHeroRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"hideBreadcrumbs"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updateDate"}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"argomento"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"badge"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"beneficiari"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"misura"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"basePath"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SplitBannerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SplitBannerRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"imgLeft"}},{"kind":"Field","name":{"kind":"Name","value":"lightTheme"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BannerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BannerRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"lightTheme"}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RichTextFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RichTextRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"alignment"}},{"kind":"Field","name":{"kind":"Name","value":"anchorId"}},{"kind":"Field","alias":{"kind":"Name","value":"richTextContent"},"name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"blocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RichTextContentFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LayoutSidebarFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayoutSidebarRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"sidebar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavScrollFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alignment"}},{"kind":"Field","name":{"kind":"Name","value":"anchorId"}},{"kind":"Field","alias":{"kind":"Name","value":"richTextContent"},"name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"blocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RichTextContentFragment"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AllNewsQuery, AllNewsQueryVariables>;
export const AllPagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllPages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allPages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"customUpdateDate"}},{"kind":"Field","name":{"kind":"Name","value":"body"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HeroRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DataHeroRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DataHeroFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SplitBannerRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SplitBannerFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BannerRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BannerFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RichTextRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RichTextFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VideoPlayerRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"VideoPlayerFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CardServiceRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CardsGridRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardsGridFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayoutSidebarRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayoutSidebarFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TableListRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TableListFragment"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"_allPagesMeta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ResponsiveImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"cmsPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImagesGridFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImagesGridRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"basename"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"format"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LinkRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"cmsPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"VideoPlayerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VideoPlayerRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"transcription"}},{"kind":"Field","name":{"kind":"Name","value":"transcriptionLabel"}},{"kind":"Field","name":{"kind":"Name","value":"videoSources"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sourceSrc"}},{"kind":"Field","name":{"kind":"Name","value":"sourceType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"poster"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardsGridFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CardsGridRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"background"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"alignment"}},{"kind":"Field","name":{"kind":"Name","value":"columns"}},{"kind":"Field","name":{"kind":"Name","value":"cardTitleTag"}},{"kind":"Field","name":{"kind":"Name","value":"customCards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"cardLayout"}},{"kind":"Field","name":{"kind":"Name","value":"cards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"iconBeforeTitle"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"risorse"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"badge"}},{"kind":"Field","name":{"kind":"Name","value":"data"}}]}},{"kind":"Field","name":{"kind":"Name","value":"news"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"data"}}]}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RichTextContentFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RichTextModelContentBlocksField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImagesGridRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImagesGridFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LinkRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VideoPlayerRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"VideoPlayerFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CardsGridRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardsGridFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NavScrollFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NavScrollRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TableListItemFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TableListItemRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TableListLinkItemFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TableListLinkItemRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"cmsPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"body"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DataHeroRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"badge"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HeroRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"lightTheme"}},{"kind":"Field","name":{"kind":"Name","value":"hideBreadcrumbs"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"updateDate"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DataHeroFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DataHeroRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"hideBreadcrumbs"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updateDate"}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"argomento"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"badge"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"beneficiari"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"misura"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"basePath"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SplitBannerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SplitBannerRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"imgLeft"}},{"kind":"Field","name":{"kind":"Name","value":"lightTheme"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BannerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BannerRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"lightTheme"}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RichTextFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RichTextRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"alignment"}},{"kind":"Field","name":{"kind":"Name","value":"anchorId"}},{"kind":"Field","alias":{"kind":"Name","value":"richTextContent"},"name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"blocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RichTextContentFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LayoutSidebarFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayoutSidebarRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"sidebar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavScrollFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alignment"}},{"kind":"Field","name":{"kind":"Name","value":"anchorId"}},{"kind":"Field","alias":{"kind":"Name","value":"richTextContent"},"name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"blocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RichTextContentFragment"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TableListFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TableListRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"showTableHead"}},{"kind":"Field","name":{"kind":"Name","value":"alignment"}},{"kind":"Field","name":{"kind":"Name","value":"cta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TableListItemRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TableListItemFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TableListLinkItemRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TableListLinkItemFragment"}}]}}]}}]}}]} as unknown as DocumentNode<AllPagesQuery, AllPagesQueryVariables>;
export const AllResourcesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllResources"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allResources"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"customUpdateDate"}},{"kind":"Field","name":{"kind":"Name","value":"body"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HeroRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DataHeroRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DataHeroFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SplitBannerRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SplitBannerFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BannerRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BannerFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RichTextRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RichTextFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VideoPlayerRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"VideoPlayerFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CardsGridRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardsGridFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayoutSidebarRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayoutSidebarFragment"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"_allResourcesMeta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ResponsiveImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"cmsPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImagesGridFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImagesGridRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"basename"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"format"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LinkRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"cmsPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"VideoPlayerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VideoPlayerRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"transcription"}},{"kind":"Field","name":{"kind":"Name","value":"transcriptionLabel"}},{"kind":"Field","name":{"kind":"Name","value":"videoSources"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sourceSrc"}},{"kind":"Field","name":{"kind":"Name","value":"sourceType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"poster"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardsGridFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CardsGridRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"background"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"alignment"}},{"kind":"Field","name":{"kind":"Name","value":"columns"}},{"kind":"Field","name":{"kind":"Name","value":"cardTitleTag"}},{"kind":"Field","name":{"kind":"Name","value":"customCards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"cardLayout"}},{"kind":"Field","name":{"kind":"Name","value":"cards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"iconBeforeTitle"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"risorse"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"badge"}},{"kind":"Field","name":{"kind":"Name","value":"data"}}]}},{"kind":"Field","name":{"kind":"Name","value":"news"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"data"}}]}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RichTextContentFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RichTextModelContentBlocksField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImagesGridRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImagesGridFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LinkRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VideoPlayerRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"VideoPlayerFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CardsGridRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardsGridFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NavScrollFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NavScrollRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HeroRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"lightTheme"}},{"kind":"Field","name":{"kind":"Name","value":"hideBreadcrumbs"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"updateDate"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DataHeroFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DataHeroRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"hideBreadcrumbs"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updateDate"}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"argomento"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"badge"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"beneficiari"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"misura"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"basePath"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SplitBannerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SplitBannerRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"imgLeft"}},{"kind":"Field","name":{"kind":"Name","value":"lightTheme"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BannerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BannerRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"lightTheme"}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RichTextFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RichTextRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"alignment"}},{"kind":"Field","name":{"kind":"Name","value":"anchorId"}},{"kind":"Field","alias":{"kind":"Name","value":"richTextContent"},"name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"blocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RichTextContentFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LayoutSidebarFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayoutSidebarRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"sidebar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavScrollFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alignment"}},{"kind":"Field","name":{"kind":"Name","value":"anchorId"}},{"kind":"Field","alias":{"kind":"Name","value":"richTextContent"},"name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"blocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RichTextContentFragment"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AllResourcesQuery, AllResourcesQueryVariables>;
export const FooterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Footer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"footer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"titleColonna1"}},{"kind":"Field","name":{"kind":"Name","value":"linkColonna1"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"titleColonna2"}},{"kind":"Field","name":{"kind":"Name","value":"linkColonna2"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"titleColonna3"}},{"kind":"Field","name":{"kind":"Name","value":"linkColonna3"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"linkNewsletter"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"linkUtili"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<FooterQuery, FooterQueryVariables>;
export const HeaderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Header"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"header"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"mainLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"secondaryLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<HeaderQuery, HeaderQueryVariables>;
export const PageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Page"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"customUpdateDate"}},{"kind":"Field","name":{"kind":"Name","value":"body"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HeroRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DataHeroRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DataHeroFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SplitBannerRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SplitBannerFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BannerRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BannerFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RichTextRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RichTextFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VideoPlayerRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"VideoPlayerFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CardServiceRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CardsGridRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardsGridFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayoutSidebarRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayoutSidebarFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TableListRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TableListFragment"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ResponsiveImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"cmsPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImagesGridFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImagesGridRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"basename"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"format"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LinkRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"cmsPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"VideoPlayerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VideoPlayerRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"transcription"}},{"kind":"Field","name":{"kind":"Name","value":"transcriptionLabel"}},{"kind":"Field","name":{"kind":"Name","value":"videoSources"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sourceSrc"}},{"kind":"Field","name":{"kind":"Name","value":"sourceType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"poster"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardsGridFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CardsGridRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"background"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"alignment"}},{"kind":"Field","name":{"kind":"Name","value":"columns"}},{"kind":"Field","name":{"kind":"Name","value":"cardTitleTag"}},{"kind":"Field","name":{"kind":"Name","value":"customCards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"cardLayout"}},{"kind":"Field","name":{"kind":"Name","value":"cards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"iconBeforeTitle"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"risorse"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"badge"}},{"kind":"Field","name":{"kind":"Name","value":"data"}}]}},{"kind":"Field","name":{"kind":"Name","value":"news"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"data"}}]}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RichTextContentFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RichTextModelContentBlocksField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImagesGridRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImagesGridFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LinkRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VideoPlayerRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"VideoPlayerFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CardsGridRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardsGridFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NavScrollFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NavScrollRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TableListItemFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TableListItemRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TableListLinkItemFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TableListLinkItemRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"cmsPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"body"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DataHeroRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"badge"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HeroRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"lightTheme"}},{"kind":"Field","name":{"kind":"Name","value":"hideBreadcrumbs"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"updateDate"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DataHeroFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DataHeroRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"hideBreadcrumbs"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updateDate"}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"argomento"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"badge"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"beneficiari"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"misura"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"basePath"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SplitBannerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SplitBannerRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"imgLeft"}},{"kind":"Field","name":{"kind":"Name","value":"lightTheme"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BannerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BannerRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"lightTheme"}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RichTextFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RichTextRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"alignment"}},{"kind":"Field","name":{"kind":"Name","value":"anchorId"}},{"kind":"Field","alias":{"kind":"Name","value":"richTextContent"},"name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"blocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RichTextContentFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LayoutSidebarFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayoutSidebarRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"sidebar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavScrollFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alignment"}},{"kind":"Field","name":{"kind":"Name","value":"anchorId"}},{"kind":"Field","alias":{"kind":"Name","value":"richTextContent"},"name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"blocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RichTextContentFragment"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TableListFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TableListRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"showTableHead"}},{"kind":"Field","name":{"kind":"Name","value":"alignment"}},{"kind":"Field","name":{"kind":"Name","value":"cta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TableListItemRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TableListItemFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TableListLinkItemRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TableListLinkItemFragment"}}]}}]}}]}}]} as unknown as DocumentNode<PageQuery, PageQueryVariables>;
export const SitemapPagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SitemapPages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allPages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"_updatedAt"}}]}}]}}]} as unknown as DocumentNode<SitemapPagesQuery, SitemapPagesQueryVariables>;