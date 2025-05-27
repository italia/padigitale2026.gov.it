"use client";

import {
  AccordionsFilterRecord,
  CardsGridResourceRecord,
} from "@/graphql/generated";
import { usePages } from "@/src/contexts/PagesContext";
import { useState, Fragment } from "react";
import {
  Select,
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
} from "design-react-kit";

import { CardsGrid } from "@/src/components/CardsGrid";

import styles from "./index.module.scss";
import classNames from "classnames/bind";
const cn = classNames.bind(styles);

export function AccordionsFilter({ props }: { props: AccordionsFilterRecord }) {
  const { items } = props;
  const { misuras, enteBeneficiarios } = usePages();
  const [value, setValue] = useState<string>("");
  const [collapseElementOpen, setCollapseElement] = useState("");
  const handleChange = (selectedOption: string) => {
    setValue(selectedOption);
    console.log(value);
  };

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

  return (
    <div className={cn("container-xxl py-lg-5", styles.accordionsFilter)}>
      <div className="row" style={{ marginTop: "64px", marginBottom: "48px" }}>
        <div className="col-12 col-lg-4">
          <Select
            id="example-reactstrap"
            label="Misura"
            onChange={handleChange}
          >
            <>
              <option value="">Scegli misura</option>
              {misuras.allMisuras.map((misura) => (
                <option
                  key={misura.id}
                  value={misura.label ? createSlug(misura.label) : ""}
                >
                  {misura.label}
                </option>
              ))}
            </>
          </Select>
        </div>
        <div className="col-12 col-lg-4">
          <Select
            id="example-reactstrap"
            label="Beneficiario"
            onChange={handleChange}
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
        </div>
      </div>
      <div className="row">
        <div className="col-12 it-page-sections-container">
          {items.map((item, index) => (
            <Accordion iconLeft key={index}>
              <AccordionItem>
                <AccordionHeader
                  className="h2"
                  active={collapseElementOpen === index.toString()}
                  onToggle={() =>
                    setCollapseElement(
                      collapseElementOpen !== index.toString()
                        ? index.toString()
                        : ""
                    )
                  }
                >
                  {item.title}
                </AccordionHeader>
                <AccordionBody
                  active={collapseElementOpen === index.toString()}
                >
                  {item.cards && (
                    <CardsGrid
                      props={item.cards as CardsGridResourceRecord}
                      hasSidebar={false}
                    />
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
