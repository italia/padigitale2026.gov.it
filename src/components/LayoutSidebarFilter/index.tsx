"use client";

import { LayoutSidebarFilterRecord } from "@/graphql/generated";
import { RichText } from "@/src/components/RichText";
import { NavScroll } from "@/src/components/NavScroll";
import { usePages } from "@/src/contexts/PagesContext";
import { useEffect, useState, Fragment } from "react";
import { Select } from "design-react-kit";

export function LayoutSidebarFilter({
  props,
}: {
  props: LayoutSidebarFilterRecord;
}) {
  const { sidebar, content } = props;
  const { enteBeneficiarios } = usePages();
  const [isClient, setIsClient] = useState(false);
  const [value, setValue] = useState<string>("");
  const [hasVisibleContent, setHasVisibleContent] = useState(true);
  const handleChange = (selectedOption: string) => setValue(selectedOption);

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

  useEffect(() => {
    setIsClient(true);

    // Reset visibility state at the start of each filter change
    setHasVisibleContent(false);

    // Filter management
    const elements = document.querySelectorAll("[data-beneficiari]");
    let hasVisibleElements = false;

    elements.forEach((element) => {
      if (!value) {
        // If no value is selected, show all elements
        element.classList.remove("d-none");
        hasVisibleElements = true;
      } else {
        const beneficiari =
          element.getAttribute("data-beneficiari")?.split(" ") || [];
        if (beneficiari.includes(value)) {
          element.classList.remove("d-none");
          hasVisibleElements = true;
        } else {
          element.classList.add("d-none");
        }
      }
    });

    // Container visibility management
    const containers = document.querySelectorAll(".it-page-section");

    containers.forEach((container) => {
      const visibleElements = container.querySelectorAll(
        "[data-beneficiari]:not(.d-none)"
      );
      const containerId = container.id;

      if (visibleElements.length === 0 && value !== "") {
        container.classList.add("d-none");
        // Disable sidebar link pointing to this section
        if (containerId) {
          const sidebarLink = document.querySelector(
            `a[href="#${containerId}"]`
          );
          if (sidebarLink) {
            sidebarLink.classList.remove("active");
            sidebarLink.classList.add("disabled");
            sidebarLink.setAttribute("aria-disabled", "true");
            (sidebarLink as HTMLElement).style.pointerEvents = "none";
            (sidebarLink as HTMLElement).style.opacity = "0.5";
          }
        }
      } else {
        container.classList.remove("d-none");
        // Re-enable sidebar link
        if (containerId) {
          const sidebarLink = document.querySelector(
            `a[href="#${containerId}"]`
          );
          if (sidebarLink) {
            sidebarLink.classList.remove("disabled");
            sidebarLink.removeAttribute("aria-disabled");
            (sidebarLink as HTMLElement).style.pointerEvents = "";
            (sidebarLink as HTMLElement).style.opacity = "";
          }
        }
      }
    });

    // Update visibility state after all DOM manipulations
    setHasVisibleContent(hasVisibleElements);
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
          {!hasVisibleContent && value !== "" && (
            <div className="alert alert-info" role="alert">
              <p className="mb-0">
                Non ci sono contenuti disponibili per il beneficiario
                selezionato.
              </p>
            </div>
          )}
          {content.map((item, index) => (
            <Fragment key={index}>
              {item.__typename === "RichTextRecord" && (
                <div
                  className="row it-page-section pb-4"
                  id={item.anchorId || undefined}
                >
                  <RichText props={item} padding={false} />
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
