"use client";

import Script from "next/script";

export default function BootstrapScript() {
  return (
    <Script
      src="/bootstrap-italia.bundle.min.js"
      strategy="lazyOnload"
      onLoad={() => {
        // Trigger per ri-inizializzare i componenti dopo il caricamento
        if (typeof window !== "undefined") {
          window.dispatchEvent(new Event("bootstrap-loaded"));
        }
      }}
    />
  );
}
