import { MetadataRoute } from 'next';
import { getSitemapPages } from '@/lib/datocms';
import { SitemapPagesQuery } from '@/graphql/generated';

if (!process.env.NEXT_PUBLIC_DOMAIN) {
    throw new Error("Domain is not defined");
}

const domain = process.env.NEXT_PUBLIC_DOMAIN;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const urls = await getSitemapPages() as SitemapPagesQuery;

    return urls.allPages.map((page) => ({
        url: `${domain}/${page.slug}`,
        lastModified: page._updatedAt
    }));
}
