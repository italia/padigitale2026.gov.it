"use client";

import { LayoutSidebarFilterRecord } from "@/graphql/generated";
import { RichText } from "@/src/components/RichText";
import { NavScroll } from "@/src/components/NavScroll";
import { StepperAccordion } from "@/src/components/StepperAccordion";
import { usePages } from "@/src/contexts/PagesContext";
import { useEffect, useState, Fragment } from "react";
import { Col, Select } from "design-react-kit";

export function LayoutSidebarFilter({
  props,
}: {
  props: LayoutSidebarFilterRecord;
}) {
  const { sidebar, content } = props;
  const { enteBeneficiarios } = usePages();
  const [isClient, setIsClient] = useState(false);
  const [value, setValue] = useState<string>("");
  const handleChange = (selectedOption: string) => setValue(selectedOption);

  const createSlug = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  useEffect(() => {
    setIsClient(true);

    // Gestione del filtraggio
    const elements = document.querySelectorAll("[data-beneficiari]");
    elements.forEach((element) => {
      if (!value) {
        // Se nessun valore è selezionato, mostra tutti gli elementi
        element.classList.remove("d-none");
      } else {
        const beneficiari =
          element.getAttribute("data-beneficiari")?.split(" ") || [];
        if (beneficiari.includes(value)) {
          element.classList.remove("d-none");
        } else {
          element.classList.add("d-none");
        }
      }
    });
  }, [value]);

  return (
    <div className="container-xxl py-lg-5">
      <div className="row" style={{ marginTop: "64px", marginBottom: "48px" }}>
        <div className="col-12 col-lg-4">
          <Select
            id="example-reactstrap"
            label="Beneficiari"
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
        <div className="col-12 col-lg-4">
          {isClient ? (
            <div data-bs-toggle="sticky" data-bs-stackable="true">
              {sidebar && <NavScroll props={sidebar} />}
            </div>
          ) : (
            <div>{sidebar && <NavScroll props={sidebar} />}</div>
          )}
        </div>
        <div className="col-12 col-lg-8 it-page-sections-container">
          {content.map((item, index) => (
            <Fragment key={index}>
              {item.__typename === "RichTextRecord" && (
                <div
                  className="row it-page-section pb-4"
                  id={item.anchorId || undefined}
                  // data-beneficiari-wrap={}
                >
                  <RichText props={item} padding={false} />
                </div>
              )}
              {item.__typename === "StepperRecord" && (
                <div
                  className="row it-page-section"
                  id={item?.anchorId || undefined}
                >
                  <Col>
                    <StepperAccordion props={item} />
                  </Col>
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
