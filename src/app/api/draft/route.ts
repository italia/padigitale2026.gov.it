import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

export async function GET(request: Request) {
    // Parse query string parameters
    const { searchParams } = new URL(request.url)
    const secret = searchParams.get('secret')
    const slug = searchParams.get('slug')

    // Check the secret and next parameters
    // This secret should only be known to this Route Handler and the CMS
    if (secret !== process.env.DRAFT_SECRET || !slug) {
        return Response.json({
            "message": 'Invalid token or missing slug'
        }, { status: 401 })
    }

    // Enable Draft Mode by setting the cookie
    const draft = await draftMode()
    draft.enable()

    // Redirect to the path from the fetched post
    // We don't redirect to searchParams.slug as that might lead to open redirect vulnerabilities
    redirect(`${process.env.NEXT_PUBLIC_DOMAIN}/${slug}`)
}
