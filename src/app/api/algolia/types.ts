type ContentType = 'page' | 'support' | 'faq'

type EventType = 'publish' | 'unpublish' | 'delete'

export type WebhookPayload = {
    id: string
    content_type: ContentType,
    event_type: EventType
}

export type AlgoliaDocument = {
    id?: string
    title?: string
    content_type?: ContentType
    slug?: string
    content?: string
}

export type AlgoliaResponse = {
    message: string
}
