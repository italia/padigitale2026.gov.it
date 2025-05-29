"use client";

import { AccordionsFilterRecord } from "@/graphql/generated";
import { usePages } from "@/src/contexts/PagesContext";
import { useState, useEffect } from "react";
import {
  Select,
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
} from "design-react-kit";

import { CardResource } from "@/src/components/CardResource";

import styles from "./index.module.scss";
import classNames from "classnames/bind";
const cn = classNames.bind(styles);

export function AccordionsFilter({ props }: { props: AccordionsFilterRecord }) {
  const { items } = props;
  const { misuras, enteBeneficiarios } = usePages();

  const createSlug = (text: string) => {
    return text
      .toLowerCase()
      .replace(/à/g, "a")
      .replace(/è/g, "e")
      .replace(/ì/g, "i")
      .replace(/ò/g, "o")
      .replace(/ù/g, "u")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  const [collapseElementOpen, setCollapseElement] = useState(
    items[0]?.titleMisura?.slug ? createSlug(items[0].titleMisura.slug) : ""
  );
  const [visibleCards, setVisibleCards] = useState<{ [key: string]: boolean }>(
    {}
  );
  const [statusMessageMisura, setStatusMessageMisura] = useState<string>("");
  const [statusMessageBeneficiario, setStatusMessageBeneficiario] =
    useState<string>("");

  const updateVisibleCards = () => {
    const newVisibleCards: { [key: string]: boolean } = {};
    items.forEach((item, index) => {
      const accordionId = createSlug(
        item.titleMisura?.slug ?? index.toString()
      );
      const hasVisibleCards = item.resources?.some((resource) => {
        const element = document.querySelector(
          `[data-beneficiari="${resource.entiBeneficiari
            ?.map((b) =>
              b.label
                ?.toLowerCase()
                .replace(/à/g, "a")
                .replace(/è/g, "e")
                .replace(/ì/g, "i")
                .replace(/ò/g, "o")
                .replace(/ù/g, "u")
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/(^-|-$)/g, "")
            )
            .join(" ")}"]`
        );
        return !element?.classList.contains("d-none");
      });
      newVisibleCards[accordionId] = hasVisibleCards;
    });
    setVisibleCards(newVisibleCards);
  };

  const handleChangeMisura = (selectedOption: string) => {
    const accordions = document.querySelectorAll(".accordion");

    // Update status message for screen readers
    if (selectedOption === "") {
      setStatusMessageMisura("Tutte le misure sono visibili");
    } else {
      const selectedMisura = misuras.allMisuras.find(
        (misura) => createSlug(misura.label || "") === selectedOption
      );
      setStatusMessageMisura(
        `Contenuti filtrati per misura: ${selectedMisura?.label || ""}`
      );
    }

    accordions.forEach((accordion, index) => {
      if (index === 0) {
        // First accordion is always visible
        accordion.classList.remove("d-none");

        if (!selectedOption) {
          // If no measure is selected, keep first accordion open
          setCollapseElement(createSlug(items[0]?.titleMisura?.slug ?? ""));
        } else {
          // If a measure is selected, close first accordion
          setCollapseElement("");
        }
      } else if (!selectedOption) {
        // If no measure is selected, show all accordions
        accordion.classList.remove("d-none");
      } else {
        const accordionSlug = createSlug(items[index]?.titleMisura?.slug ?? "");
        if (accordionSlug === selectedOption) {
          // Show and open the selected accordion
          accordion.classList.remove("d-none");
          setCollapseElement(accordionSlug);
        } else {
          // Hide other accordions
          accordion.classList.add("d-none");
        }
      }
    });
    updateVisibleCards();
  };

  const handleChangeBeneficiario = (selectedOption: string) => {
    // Update status message for screen readers
    if (selectedOption === "") {
      setStatusMessageBeneficiario("Tutti i beneficiari sono visibili");
    } else {
      const selectedEnte = enteBeneficiarios.allEnteBeneficiarios.find(
        (ente) => createSlug(ente.label || "") === selectedOption
      );
      setStatusMessageBeneficiario(
        `Contenuti filtrati per beneficiario: ${selectedEnte?.label || ""}`
      );
    }

    // Filter management
    const elements = document.querySelectorAll("[data-beneficiari]");
    elements.forEach((element) => {
      if (!selectedOption) {
        // If no value is selected, show all elements
        element.classList.remove("d-none");
      } else {
        const beneficiari =
          element.getAttribute("data-beneficiari")?.split(" ") || [];
        if (beneficiari.includes(selectedOption)) {
          element.classList.remove("d-none");
        } else {
          element.classList.add("d-none");
        }
      }
    });
    updateVisibleCards();
  };

  // Update visible cards state on component mount
  useEffect(() => {
    updateVisibleCards();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={cn("container-xxl py-lg-5")}>
      <div className="row my-4">
        <div className="col-12 col-lg-4 py-4">
          <Select
            id="select-misura"
            label="Misura"
            onChange={handleChangeMisura}
            aria-label="Seleziona una misura per filtrare i contenuti"
            aria-describedby="misura-description"
          >
            <>
              <option value="">Scegli misura</option>
              {misuras.allMisuras
                .filter(
                  (misura) =>
                    misura.label !== "Risorse generali" &&
                    items.some(
                      (item) =>
                        createSlug(item.titleMisura?.label || "") ===
                        createSlug(misura.label || "")
                    )
                )
                .map((misura) => (
                  <option
                    key={misura.id}
                    value={misura.label ? createSlug(misura.label) : ""}
                  >
                    {misura.label}
                  </option>
                ))}
            </>
          </Select>
          <div id="misura-description" className="visually-hidden">
            Usa questo menu per filtrare i contenuti in base alla misura
            selezionata
          </div>
          <div
            id="misura-status"
            className="visually-hidden"
            aria-live="polite"
            aria-atomic="true"
          >
            {statusMessageMisura}
          </div>
        </div>
        <div className="col-12 col-lg-4 py-4">
          <Select
            id="select-beneficiario"
            label="Beneficiario"
            onChange={handleChangeBeneficiario}
            aria-label="Seleziona un beneficiario per filtrare i contenuti"
            aria-describedby="beneficiario-description"
          >
            <>
              <option value="">Scegli beneficiario</option>
              {enteBeneficiarios.allEnteBeneficiarios.map((ente) => (
                <option
                  key={ente.id}
                  value={ente.label ? createSlug(ente.label) : ""}
                >
                  {ente.label}
                </option>
              ))}
            </>
          </Select>
          <div id="beneficiario-description" className="visually-hidden">
            Usa questo menu per filtrare i contenuti in base al beneficiario
            selezionato
          </div>
          <div
            id="beneficiario-status"
            className="visually-hidden"
            aria-live="polite"
            aria-atomic="true"
          >
            {statusMessageBeneficiario}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 it-page-sections-container">
          {items.map((item, index) => (
            <Accordion iconLeft key={index} className={cn("border-0")}>
              <AccordionItem>
                <AccordionHeader
                  className={cn("custom-accordion-header")}
                  active={
                    collapseElementOpen ===
                    createSlug(item.titleMisura?.slug ?? index.toString())
                  }
                  onToggle={() =>
                    setCollapseElement(
                      collapseElementOpen !==
                        createSlug(item.titleMisura?.slug ?? index.toString())
                        ? createSlug(item.titleMisura?.slug ?? index.toString())
                        : ""
                    )
                  }
                >
                  {item.titleMisura?.label}
                </AccordionHeader>
                <AccordionBody
                  className={cn("custom-accordion-body")}
                  active={
                    collapseElementOpen ===
                    createSlug(item.titleMisura?.slug ?? index.toString())
                  }
                  aria-expanded={
                    collapseElementOpen ===
                    createSlug(item.titleMisura?.slug ?? index.toString())
                  }
                >
                  {item.resources && (
                    <div className={"row"} role="list">
                      {item.resources.map((resource, idx) => {
                        return (
                          <div
                            key={idx}
                            className={`col-12 col-md-6 pt-4 d-flex flex-column justify-content-stretch`}
                            data-beneficiari={resource.entiBeneficiari
                              ?.map((b) =>
                                b.label
                                  ?.toLowerCase()
                                  .replace(/à/g, "a")
                                  .replace(/è/g, "e")
                                  .replace(/ì/g, "i")
                                  .replace(/ò/g, "o")
                                  .replace(/ù/g, "u")
                                  .replace(/[^a-z0-9]+/g, "-")
                                  .replace(/(^-|-$)/g, "")
                              )
                              .join(" ")}
                            role="listitem"
                          >
                            <CardResource TitleTag={"h3"} props={resource} />
                          </div>
                        );
                      })}
                      {!visibleCards[
                        createSlug(item.titleMisura?.slug ?? index.toString())
                      ] && (
                        <div
                          className="col-12 text-center py-1"
                          role="status"
                          aria-live="polite"
                        >
                          <p className="h5 text-muted">
                            Nessun risultato trovato con i filtri attuali
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </AccordionBody>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
}
