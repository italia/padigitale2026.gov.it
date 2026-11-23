import { MetadataRoute } from 'next';

if (!process.env.NEXT_PUBLIC_DOMAIN) {
    throw new Error("Domain is not defined");
}

const domain = process.env.NEXT_PUBLIC_DOMAIN;

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/api/',
        },
        sitemap: `${domain}/sitemap.xml`,
    };
}
