"use client";

import Script from "next/script";

interface EmbeddedServiceBootstrap {
  settings: {
    language: string;
  };
  init: (
    organizationId: string,
    deploymentName: string,
    siteUrl: string,
    options: {
      scrt2URL: string;
    },
  ) => void;
}

declare global {
  interface Window {
    embeddedservice_bootstrap?: EmbeddedServiceBootstrap;
  }
}

const AGENTFORCE_ORGANIZATION_ID =
  process.env.NEXT_PUBLIC_AGENTFORCE_ORGANIZATION_ID || "";
const AGENTFORCE_DEPLOYMENT_NAME =
  process.env.NEXT_PUBLIC_AGENTFORCE_DEPLOYMENT_NAME || "";
const AGENTFORCE_SITE_URL = (
  process.env.NEXT_PUBLIC_AGENTFORCE_SITE_URL || ""
).replace(/\/+$/, "");
const AGENTFORCE_SCRT2_URL =
  process.env.NEXT_PUBLIC_AGENTFORCE_SCRT2_URL || "";
const AGENTFORCE_LANGUAGE = process.env.NEXT_PUBLIC_AGENTFORCE_LANGUAGE || "it";

function initEmbeddedMessaging() {
  try {
    const embeddedServiceBootstrap = window.embeddedservice_bootstrap;

    if (!embeddedServiceBootstrap) {
      throw new Error("Embedded Messaging bootstrap non disponibile");
    }

    embeddedServiceBootstrap.settings.language = AGENTFORCE_LANGUAGE;
    embeddedServiceBootstrap.init(
      AGENTFORCE_ORGANIZATION_ID,
      AGENTFORCE_DEPLOYMENT_NAME,
      AGENTFORCE_SITE_URL,
      {
        scrt2URL: AGENTFORCE_SCRT2_URL,
      },
    );
  } catch (error) {
    console.error("Error loading Embedded Messaging: ", error);
  }
}

export default function AgentforceMessaging() {
  if (
    !AGENTFORCE_ORGANIZATION_ID ||
    !AGENTFORCE_DEPLOYMENT_NAME ||
    !AGENTFORCE_SITE_URL ||
    !AGENTFORCE_SCRT2_URL
  ) {
    return null;
  }

  return (
    <Script
      id="agentforce-embedded-messaging"
      src={`${AGENTFORCE_SITE_URL}/assets/js/bootstrap.min.js`}
      strategy="afterInteractive"
      onLoad={initEmbeddedMessaging}
      onError={(error) => {
        console.error("Error loading Embedded Messaging script: ", error);
      }}
    />
  );
}
