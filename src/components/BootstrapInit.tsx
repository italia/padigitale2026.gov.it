"use client";

import { useEffect } from "react";

export default function BootstrapInit() {
  useEffect(() => {
    const initBootstrap = () => {
      if (typeof window !== "undefined" && window.bootstrap) {
        const bootstrap = window.bootstrap;
        // Inizializza tutti i componenti Bootstrap
        const tooltipTriggerList = document.querySelectorAll(
          '[data-bs-toggle="tooltip"]'
        );
        [...tooltipTriggerList].map(
          (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
        );

        const popoverTriggerList = document.querySelectorAll(
          '[data-bs-toggle="popover"]'
        );
        [...popoverTriggerList].map(
          (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
        );
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
