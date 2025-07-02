"use client";

import { StepperRecord } from "@/graphql/generated";
import styles from "./index.module.scss";
import classNames from "classnames/bind";
import { Accordion, AccordionItem, AccordionBody } from "design-react-kit";
import { useEffect, useState, useRef } from "react";
import { RichTextStepper } from "@/src/components/RichTextStepper";
const cn = classNames.bind(styles);

export function StepperAccordion({ props }: { props: StepperRecord }) {
  const [collapseElementOpen, setCollapseElementOpen] = useState<Array<string>>(
    []
  );
  const [allIndexes, setAllIndexes] = useState<Array<string>>([]);
  const { steps, layout } = props;

  // Ref per i bottoni delle intestazioni
  const headerButtonRefs = useRef<Array<HTMLButtonElement | null>>([]);

  // Stato per annuncio aria-live
  const [liveMessage, setLiveMessage] = useState("");

  const getFreshCollapsedArray = function (
    elId: string,
    arrayEl: Array<string>
  ) {
    if (arrayEl.includes(elId)) {
      return arrayEl.filter((id) => id !== elId);
    } else {
      return [...arrayEl, elId];
    }
  };

  const accord = (
    <Accordion
      className={cn("num-accordion", "border-bottom-0")}
      tag={"section"}
      aria-multiselectable="true"
    >
      {steps &&
        steps.map((stepperStepRecord, idx) => {
          return (
            <AccordionItem
              key={stepperStepRecord.id}
              tag={"article"}
              id={stepperStepRecord.id}
            >
              <div className="accordion-header">
                <h3
                  className={cn(
                    `accordion-button status-${stepperStepRecord?.stepStatus}`,
                    {
                      collapsed: !layout || layout !== "exploded",
                    }
                  )}
                  id={`label${stepperStepRecord.id}`}
                >
                  <span aria-hidden={true} className={"accordion-button-order"}>
                    {idx + 1}
                  </span>
                  <span className={"accordion-button-text"}>
                    {stepperStepRecord.stepTitle}
                  </span>
                </h3>
                {/* Bottone per espandere/collassare la sezione, con gestione tastiera */}
                <button
                  ref={(el) => {
                    headerButtonRefs.current[idx] = el;
                  }}
                  aria-expanded={collapseElementOpen.includes(
                    stepperStepRecord.id
                  )}
                  aria-controls={`content${stepperStepRecord.id}`}
                  aria-label={`${
                    collapseElementOpen.includes(stepperStepRecord.id)
                      ? "Nascondi"
                      : "Mostra"
                  } il contenuto di questo articolo`}
                  onClick={() => {
                    const isOpen = collapseElementOpen.includes(
                      stepperStepRecord.id
                    );
                    setCollapseElementOpen(
                      getFreshCollapsedArray(
                        stepperStepRecord.id,
                        collapseElementOpen
                      )
                    );
                    setLiveMessage(
                      `${stepperStepRecord.stepTitle}: ${
                        isOpen ? "chiuso" : "aperto"
                      }`
                    );
                  }}
                  className={
                    "accordion-body-hide neutral-1-color-a9 p-0 border-0 bg-transparent small fw-semibold"
                  }
                  onKeyDown={(e) => {
                    if (!steps) return;
                    if (e.key === "ArrowDown") {
                      e.preventDefault();
                      const nextIdx = (idx + 1) % steps.length;
                      headerButtonRefs.current[nextIdx]?.focus();
                    } else if (e.key === "ArrowUp") {
                      e.preventDefault();
                      const prevIdx = (idx - 1 + steps.length) % steps.length;
                      headerButtonRefs.current[prevIdx]?.focus();
                    } else if (e.key === "Home") {
                      e.preventDefault();
                      headerButtonRefs.current[0]?.focus();
                    } else if (e.key === "End") {
                      e.preventDefault();
                      headerButtonRefs.current[steps.length - 1]?.focus();
                    }
                  }}
                >
                  {collapseElementOpen.includes(stepperStepRecord.id)
                    ? "Nascondi dettagli"
                    : "Mostra dettagli"}
                </button>
              </div>
              {(!layout || layout !== "exploded") && (
                <>
                  <br />
                </>
              )}
              <AccordionBody
                role="region"
                id={`content${stepperStepRecord.id}`}
                aria-labelledby={`label${stepperStepRecord.id}`}
                active={collapseElementOpen.includes(stepperStepRecord.id)}
                tabIndex={-1}
              >
                {stepperStepRecord.stepBody?.__typename ===
                  "RichTextStepperRecord" && (
                  <RichTextStepper props={stepperStepRecord.stepBody} />
                )}
              </AccordionBody>
            </AccordionItem>
          );
        })}
    </Accordion>
  );

  useEffect(() => {
    const bindAllIndexes = steps.map((step) => step.id) || [];
    setAllIndexes(bindAllIndexes);
    setCollapseElementOpen(bindAllIndexes);
  }, [steps]);

  return (
    <>
      {/* Annuncio aria-live per screen reader */}
      <div aria-live="polite" style={{ position: "absolute", left: "-9999px" }}>
        {liveMessage}
      </div>
      {(!layout || layout !== "exploded") && (
        <button
          aria-expanded={collapseElementOpen.length > 0}
          aria-controls={allIndexes
            .map((itemid) => `content${itemid}`)
            .join(" ")}
          aria-label={`${
            collapseElementOpen.length > 0 ? "Nascondi" : "Mostra"
          } i contenuti degli articoli sottostanti`}
          onClick={() =>
            collapseElementOpen.length
              ? setCollapseElementOpen([])
              : setCollapseElementOpen(allIndexes)
          }
          className={cn(
            "neutral-1-color-a9 mt-3 m-0 mb-3 p-0 border-0 bg-transparent small fw-semibold",
            "accordion-all-hide"
          )}
        >
          {collapseElementOpen.length > 0 ? "Nascondi tutto" : "Mostra tutto"}
        </button>
      )}
      {accord}
    </>
  );
}
