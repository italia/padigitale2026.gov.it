import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    DATOCMS_API_TOKEN: process.env.DATOCMS_API_TOKEN,
    DATOCMS_ENVIRONMENT: process.env.DATOCMS_ENVIRONMENT,
    DATOCMS_INCLUDE_DRAFTS: process.env.DATOCMS_INCLUDE_DRAFTS,
    NEXT_PUBLIC_DOMAIN: process.env.NEXT_PUBLIC_DOMAIN,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: `max-age=0, s-max-age=120, stale-while-revalidate=120`,
          },
          {
            key: "CDN-Cache-Control",
            value: `max-age=120`,
          },
          {
            key: "Vercel-CDN-Cache-Control",
            value: `max-age=120`,
          },
        ],
      },
    ];
  },
};

export default nextConfig;
