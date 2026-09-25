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

const AGENTFORCE_SCRIPT_URL =
  "https://padigitale2026--collaudo.sandbox.my.site.com/ESWAgentforceChannel1781257978389/assets/js/bootstrap.min.js";

function initEmbeddedMessaging() {
  try {
    const embeddedServiceBootstrap = window.embeddedservice_bootstrap;

    if (!embeddedServiceBootstrap) {
      throw new Error("Embedded Messaging bootstrap non disponibile");
    }

    embeddedServiceBootstrap.settings.language = "it";
    embeddedServiceBootstrap.init(
      "00D3N0000008lSz",
      "AgentforceChannel",
      "https://padigitale2026--collaudo.sandbox.my.site.com/ESWAgentforceChannel1781257978389",
      {
        scrt2URL:
          "https://padigitale2026--collaudo.sandbox.my.salesforce-scrt.com",
      },
    );
  } catch (error) {
    console.error("Error loading Embedded Messaging: ", error);
  }
}

export default function AgentforceMessaging() {
  return (
    <Script
      id="agentforce-embedded-messaging"
      src={AGENTFORCE_SCRIPT_URL}
      strategy="afterInteractive"
      onLoad={initEmbeddedMessaging}
      onError={(error) => {
        console.error("Error loading Embedded Messaging script: ", error);
      }}
    />
  );
}
