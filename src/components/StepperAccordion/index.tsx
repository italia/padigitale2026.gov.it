"use client";

import {StepperRecord} from "@/graphql/generated";
import styles from "./index.module.scss";
import classNames from "classnames/bind";
import {
  Accordion,
  AccordionItem,
  AccordionBody
} from "design-react-kit";
import {useEffect, useState} from "react";
import {RichTextStepper} from "@/src/components/RichTextStepper";
const cn = classNames.bind(styles);

export function StepperAccordion({props}: {props:StepperRecord}) {
  const [collapseElementOpen, setCollapseElementOpen] = useState<Array<string>>([]);
  const [allIndexes, setAllIndexes] = useState<Array<string>>([]);
  const {steps} = props;

  const getFreshCollapsedArray = function (elId: string, arrayEl: Array<string>) {
    if (arrayEl.includes(elId)) {
      return arrayEl.filter(id => id !== elId);
    } else {
      return [...arrayEl, elId];
    }
  }

  const accord = <Accordion className={cn("num-accordion", "border-bottom-0")} tag={"section"} role="region" aria-live="polite">
    {steps && steps.map((stepperStepRecord, idx) => {
      return (
        <AccordionItem key={stepperStepRecord.id} tag={"article"} id={stepperStepRecord.id}>
          <div className="accordion-header">
            <h3 className={`accordion-button collapsed status-${stepperStepRecord?.stepStatus}`}
                id={`label${stepperStepRecord.id}`}>
              <span aria-hidden={true} className={"accordion-button-order"}>{idx + 1}</span>
              <span className={"accordion-button-text"}>{stepperStepRecord.stepTitle}</span>
            </h3>
          </div>
          <button aria-expanded={collapseElementOpen.includes(stepperStepRecord.id)}
                  aria-controls={`content${stepperStepRecord.id}`}
                  aria-label={`${(collapseElementOpen.includes(stepperStepRecord.id) ? "Nascondi" : "Mostra")} il contenuto di questo articolo`}
                  onClick={() => setCollapseElementOpen(getFreshCollapsedArray(stepperStepRecord.id, collapseElementOpen))}
                  className={"accordion-body-hide text-dark p-0 border-0 bg-transparent small fw-semibold"}>
            {collapseElementOpen.includes(stepperStepRecord.id) ? "Nascondi dettagli" : "Mostra dettagli"}
          </button>
          <br/>
          <AccordionBody role="region"
                         id={`content${stepperStepRecord.id}`}
                         aria-labelledby={`label${stepperStepRecord.id}`}
                         active={collapseElementOpen.includes(stepperStepRecord.id)}>
            {(stepperStepRecord.stepBody?.__typename === 'RichTextStepperRecord') && (
              <RichTextStepper props={stepperStepRecord.stepBody} />
            )}
          </AccordionBody>
        </AccordionItem>
      );
    })}
  </Accordion>;

  useEffect(() => {
    const bindAllIndexes = steps.map((step) => step.id) || [];
    setAllIndexes(bindAllIndexes);
    setCollapseElementOpen(bindAllIndexes);
  }, [steps]);

  return (
    <>
      <button aria-expanded={collapseElementOpen.length > 0}
              aria-controls={allIndexes.map(itemid => `content${itemid}`).join(" ")}
              aria-label={`${(collapseElementOpen.length > 0 ? "Nascondi" : "Mostra")} i contenuti degli articoli sottostanti`}
              onClick={() => collapseElementOpen.length ? setCollapseElementOpen([]) : setCollapseElementOpen(allIndexes)}
              className={cn(
                "text-dark m-0 mb-3 p-0 border-0 bg-transparent small fw-semibold",
                "accordion-all-hide"
              )}>
        {collapseElementOpen.length > 0 ? "Nascondi tutto" : "Mostra tutto"}
      </button>
      {accord}
    </>
  );
}
