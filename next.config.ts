import type { NextConfig } from "next";

const isProd = process.env["VERCEL_ENV"] === "production";
const TTL = isProd ? 120 : 0;

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
            // max-age=0 -> Indica di disattivare la cache del browser
            // s-maxage=120 -> Indica alla CDN di Vercel una cache di 120s
            // stale-while-revalidate=120 -> Serve contenuto stale per 120s
            // mentre viene fatto rebuild in background.
            value: `public, max-age=0, s-maxage=${TTL}, stale-while-revalidate=${
              TTL / 2
            }`,
          },
          {
            key: "Vercel-CDN-Cache-Control",
            // max-age=120 -> Header specifico per Vercel Edge, ha la precedenza
            // su Cache-Control.
            value: `max-age=${TTL}`,
          },
        ],
      },
    ];
  },
};

export default nextConfig;
