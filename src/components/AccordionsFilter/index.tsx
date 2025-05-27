"use client";

import { AccordionsFilterRecord } from "@/graphql/generated";
import { usePages } from "@/src/contexts/PagesContext";
import { useState, Fragment } from "react";
import { Select } from "design-react-kit";

export function AccordionsFilter({ props }: { props: AccordionsFilterRecord }) {
  const { items } = props;
  const { misuras, enteBeneficiarios } = usePages();
  const [value, setValue] = useState<string>("");
  // const [hasVisibleContent, setHasVisibleContent] = useState(true);
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

  // useEffect(() => {
  //   // Reset visibility state at the start of each filter change
  //   setHasVisibleContent(false);

  //   // Filter management
  //   const elements = document.querySelectorAll("[data-beneficiari]");
  //   let hasVisibleElements = false;

  //   elements.forEach((element) => {
  //     if (!value) {
  //       // If no value is selected, show all elements
  //       element.classList.remove("d-none");
  //       hasVisibleElements = true;
  //     } else {
  //       const beneficiari =
  //         element.getAttribute("data-beneficiari")?.split(" ") || [];
  //       if (beneficiari.includes(value)) {
  //         element.classList.remove("d-none");
  //         hasVisibleElements = true;
  //       } else {
  //         element.classList.add("d-none");
  //       }
  //     }
  //   });

  //   // Container visibility management
  //   const containers = document.querySelectorAll(".it-page-section");

  //   containers.forEach((container) => {
  //     const visibleElements = container.querySelectorAll(
  //       "[data-beneficiari]:not(.d-none)"
  //     );
  //     const containerId = container.id;

  //     if (visibleElements.length === 0 && value !== "") {
  //       container.classList.add("d-none");
  //       // Disable sidebar link pointing to this section
  //       if (containerId) {
  //         const sidebarLink = document.querySelector(
  //           `a[href="#${containerId}"]`
  //         );
  //         if (sidebarLink) {
  //           sidebarLink.classList.remove("active");
  //           sidebarLink.classList.add("disabled");
  //           sidebarLink.setAttribute("aria-disabled", "true");
  //           (sidebarLink as HTMLElement).style.pointerEvents = "none";
  //           (sidebarLink as HTMLElement).style.opacity = "0.5";
  //         }
  //       }
  //     } else {
  //       container.classList.remove("d-none");
  //       // Re-enable sidebar link
  //       if (containerId) {
  //         const sidebarLink = document.querySelector(
  //           `a[href="#${containerId}"]`
  //         );
  //         if (sidebarLink) {
  //           sidebarLink.classList.remove("disabled");
  //           sidebarLink.removeAttribute("aria-disabled");
  //           (sidebarLink as HTMLElement).style.pointerEvents = "";
  //           (sidebarLink as HTMLElement).style.opacity = "";
  //         }
  //       }
  //     }
  //   });

  //   // Update visibility state after all DOM manipulations
  //   setHasVisibleContent(hasVisibleElements);
  // }, [value]);

  return (
    <div className="container-xxl py-lg-5">
      <div className="row" style={{ marginTop: "64px", marginBottom: "48px" }}>
        <div className="col-12 d-flex gap-4">
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
          {/* {!hasVisibleContent && value !== "" && (
            <div className="alert alert-info" role="alert">
              <p className="mb-0">
                Non ci sono contenuti disponibili per il beneficiario
                selezionato.
              </p>
            </div>
          )} */}
          {items.map((item, index) => (
            <Fragment key={index}>
              <div
                className="row it-page-section pb-4"
                // id={item.anchorId || undefined}
              >
                <h2>{item.title}</h2>
                <div className="row">
                  {/* {item.cards.map((card, index) => (
                    <div key={index}>{card.title}</div>
                  ))} */}
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
