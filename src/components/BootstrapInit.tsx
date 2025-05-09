"use client";

import { useEffect } from "react";

export default function BootstrapInit() {
  useEffect(() => {
    const initBootstrap = () => {
      if (typeof window !== "undefined" && window.bootstrap) {
        // @ts-expect-error bootstrap è aggiunto globalmente da bootstrap-italia
        window.bootstrap.init();
      }
    };

    // Se lo script è già caricato
    if (document.readyState === "complete") {
      initBootstrap();
    } else {
      // Altrimenti aspetta che lo script sia caricato
      window.addEventListener("load", initBootstrap);
      return () => window.removeEventListener("load", initBootstrap);
    }
  }, []);

  return null;
}
