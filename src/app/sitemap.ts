import { MetadataRoute } from 'next';
import { getSitemapPagesWithOption } from '@/lib/datocms';

if (!process.env.NEXT_PUBLIC_DOMAIN) {
    throw new Error("Domain is not defined");
}

const domain = process.env.NEXT_PUBLIC_DOMAIN;

// Regenerate the sitemap hourly
export const revalidate = 3600;

// Slugs (normalized) that must not appear in the sitemap
const EXCLUDED_SLUGS = ['notizie']; // redirect
const EXCLUDED_PREFIXES = ['design']; // internal pages (matches "design" and "design/...")

function isExcluded(slug: string): boolean {
    return (
        EXCLUDED_SLUGS.includes(slug) ||
        EXCLUDED_PREFIXES.some((prefix) => slug === prefix || slug.startsWith(`${prefix}/`))
    );
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const records = await getSitemapPagesWithOption(false);

    const entries = new Map<string, MetadataRoute.Sitemap[number]>();

    for (const record of records) {
        if (!record.slug) continue;

        const slug = record.slug.trim().replace(/^\/+|\/+$/g, '');
        if (!slug || isExcluded(slug)) continue;

        const url = slug === 'homepage' ? `${domain}/` : `${domain}/${slug}`;
        if (entries.has(url)) continue;

        entries.set(url, {
            url,
            lastModified: record._updatedAt
        });
    }

    return Array.from(entries.values());
}
