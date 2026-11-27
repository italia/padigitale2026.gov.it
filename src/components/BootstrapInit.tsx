"use client";

import { Collapse, Popover, Tooltip } from "bootstrap-italia";
import { useEffect, useRef } from "react";

export default function BootstrapInit() {
  const initializedRef = useRef(false);

  useEffect(() => {
    const initBootstrap = () => {
      if (!initializedRef.current) {
        // Inizializza solo i componenti che sono effettivamente presenti nel DOM
        // e che non sono già stati inizializzati da Bootstrap Italia

        // Tooltip - solo se non sono già inizializzati
        const tooltipTriggerList = document.querySelectorAll(
          '[data-bs-toggle="tooltip"]:not([data-bs-initialized])'
        );
        if (tooltipTriggerList.length > 0) {
          [...tooltipTriggerList].forEach((tooltipTriggerEl) => {
            try {
              // Verifica se il tooltip è già inizializzato
              const existingTooltip =
                Tooltip.getInstance(tooltipTriggerEl);
              if (!existingTooltip) {
                new Tooltip(tooltipTriggerEl);
                tooltipTriggerEl.setAttribute("data-bs-initialized", "true");
              }
            } catch (error) {
              console.warn("Errore nell'inizializzazione del tooltip:", error);
            }
          });
        }

        // Popover - solo se non sono già inizializzati
        const popoverTriggerList = document.querySelectorAll(
          '[data-bs-toggle="popover"]:not([data-bs-initialized])'
        );
        if (popoverTriggerList.length > 0) {
          [...popoverTriggerList].forEach((popoverTriggerEl) => {
            try {
              // Verifica se il popover è già inizializzato
              const existingPopover =
                Popover.getInstance(popoverTriggerEl);
              if (!existingPopover) {
                new Popover(popoverTriggerEl);
                popoverTriggerEl.setAttribute("data-bs-initialized", "true");
              }
            } catch (error) {
              console.warn("Errore nell'inizializzazione del popover:", error);
            }
          });
        }

        // Accordion/Collapse - solo se non sono già inizializzati
        const collapseTriggerList = document.querySelectorAll(
          '[data-bs-toggle="collapse"]:not([data-bs-initialized])'
        );
        if (collapseTriggerList.length > 0) {
          [...collapseTriggerList].forEach((collapseTriggerEl) => {
            try {
              // Verifica se il collapse è già inizializzato
              const existingCollapse =
                Collapse.getInstance(collapseTriggerEl);
              if (!existingCollapse) {
                new Collapse(collapseTriggerEl, { toggle: false });
                collapseTriggerEl.setAttribute("data-bs-initialized", "true");
              }
            } catch (error) {
              console.warn("Errore nell'inizializzazione del collapse:", error);
            }
          });
        }

        initializedRef.current = true;
      }
    };

    // Osservatore per i mutamenti del DOM
    const observer = new MutationObserver((mutations) => {
      let shouldReinit = false;
      mutations.forEach((mutation) => {
        if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
          // Verifica se sono stati aggiunti elementi che potrebbero necessitare Bootstrap
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as Element;
              if (element.querySelectorAll("[data-bs-toggle]").length > 0) {
                shouldReinit = true;
              }
            }
          });
        }
      });

      if (shouldReinit) {
        // Debounce per evitare troppe inizializzazioni
        setTimeout(initBootstrap, 100);
      }
    });

    // Inizializzazione iniziale
    if (document.readyState === "complete") {
      initBootstrap();
    } else {
      window.addEventListener("load", initBootstrap);
    }

    // Avvia l'osservatore per i mutamenti del DOM
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Cleanup
    return () => {
      window.removeEventListener("load", initBootstrap);
      observer.disconnect();

      // Cleanup dei componenti Bootstrap se necessario
      if (initializedRef.current) {
        initializedRef.current = false;
        // Disinizializza tooltip
        document
          .querySelectorAll('[data-bs-toggle="tooltip"]')
          .forEach((el) => {
            const tooltip = Tooltip.getInstance(el);
            if (tooltip) {
              tooltip.dispose();
              el.removeAttribute("data-bs-initialized");
            }
          });

        // Disinizializza popover
        document
          .querySelectorAll('[data-bs-toggle="popover"]')
          .forEach((el) => {
            const popover = Popover.getInstance(el);
            if (popover) {
              popover.dispose();
              el.removeAttribute("data-bs-initialized");
            }
          });
      }
    };
  }, []);

  return null;
}
