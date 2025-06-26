import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    DATOCMS_API_TOKEN: process.env.DATOCMS_API_TOKEN,
    DATOCMS_ENVIRONMENT: process.env.DATOCMS_ENVIRONMENT,
    DATOCMS_INCLUDE_DRAFTS: process.env.DATOCMS_INCLUDE_DRAFTS,
    NEXT_PUBLIC_DOMAIN: process.env.NEXT_PUBLIC_DOMAIN,
  },
};

export default nextConfig;
