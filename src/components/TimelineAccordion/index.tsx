"use client";

import styles from "./index.module.scss";
import classNames from "classnames/bind";
import Link from "next/link";
import {
  Col,
  GridList,
  GridRow,
  GridItem,
  ResponsiveImage,
  Row,
  Icon,
  GridItemTextWrapper,
  GridItemText
} from "design-react-kit";
import {useState} from "react";
import {NumAccordion, NumAccordionBody, NumAccordionHeader, NumAccordionItem} from "@/src/design-react-kit-extension";

const cn = classNames.bind(styles);

export function TimelineAccordion() {
  const [collapseElementOpen, setCollapseElementOpen] = useState<Array<string>>(["1"]);

  const getFreshCollapsedArray = function (elId: string, arrayEl: Array<string>) {
    if (arrayEl.includes(elId)) {
      return arrayEl.filter(id => id !== elId);
    } else {
      return [...arrayEl, elId];
    }
  }

  return (
    <>
      <button aria-label={"Nascondi il testo contenuto in questo articolo"}
              onClick={() => setCollapseElementOpen([])}
              className={"accordion-body-hide text-dark m-0 mb-3 p-0 border-0 bg-transparent small fw-semibold"}>
        {collapseElementOpen.length > 0 ? "Nascondi tutto" : "Mostra tutto"}
      </button>
      <NumAccordion className={cn("num-accordion")}>
        <NumAccordionItem>
          <NumAccordionHeader active={collapseElementOpen.includes("1")}
                              onToggle={() => setCollapseElementOpen(getFreshCollapsedArray("1", collapseElementOpen))}>
            <span className={"accordion-button-order"}>1</span>
            <span className={"accordion-button-text"}>Titolo del passo</span>
          </NumAccordionHeader>
          <NumAccordionBody active={collapseElementOpen.includes("1")}>
            <button aria-label={"Nascondi il testo contenuto in questo articolo"}
                    onClick={() => setCollapseElementOpen(getFreshCollapsedArray("1", collapseElementOpen))}
                    className={"accordion-body-hide text-dark m-0 mb-3 p-0 border-0 bg-transparent small fw-semibold"}>
              Nascondi dettagli
            </button><br />

            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon
            officia aute, non cupidatat
            skateboard dolor brunch.
          </NumAccordionBody>
        </NumAccordionItem>
        <NumAccordionItem>
          <NumAccordionHeader active={collapseElementOpen.includes("2")}
                              onToggle={() => setCollapseElementOpen(getFreshCollapsedArray("2", collapseElementOpen))}>
            <span className={"accordion-button-order"}>2</span>
            <span className={"accordion-button-text"}>Titolo del passo</span>
          </NumAccordionHeader>
          <NumAccordionBody active={collapseElementOpen.includes("2")}>
            Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth
            nesciunt you probably haven&apos;t
            heard of them accusamus labore sustainable VHS.
          </NumAccordionBody>
        </NumAccordionItem>
        <NumAccordionItem>
          <NumAccordionHeader active={collapseElementOpen.includes("3")}
                              onToggle={() => setCollapseElementOpen(getFreshCollapsedArray("3", collapseElementOpen))}>
            Elemento Richiudibile #3
          </NumAccordionHeader>
          <NumAccordionBody active={collapseElementOpen.includes("3")}>
            Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
            single-origin coffee nulla assumenda
            shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
            proident.
          </NumAccordionBody>
        </NumAccordionItem>
      </NumAccordion>
    </>
  );
}
