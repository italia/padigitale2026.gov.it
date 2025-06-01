"use client";

import { CardsListFilterRecord } from "@/graphql/generated";
import { usePages } from "@/src/contexts/PagesContext";
import { Select } from "design-react-kit";
import { CardMisura } from "@/src/components/CardMisura";
import { useState, useEffect } from "react";

import styles from "./index.module.scss";
import classNames from "classnames/bind";
const cn = classNames.bind(styles);

export function CardsListFilter({ props }: { props: CardsListFilterRecord }) {
  const { items } = props;
  const { enteBeneficiarios, entePromotores } = usePages();
  const [statusMessageBeneficiario, setStatusMessageBeneficiario] =
    useState<string>("");
  const [statusMessagePromotore, setStatusMessagePromotore] =
    useState<string>("");
  const [visibleCards, setVisibleCards] = useState<boolean>(true);

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

  const updateVisibleCards = () => {
    const elements = document.querySelectorAll(
      "[data-beneficiari][data-promotore]"
    );
    let hasVisibleCards = false;

    elements.forEach((element) => {
      const beneficiari =
        element.getAttribute("data-beneficiari")?.split(" ") || [];
      const promotore = element.getAttribute("data-promotore") || "";
      const selectedBeneficiario =
        document.querySelector<HTMLSelectElement>("#select-beneficiario")
          ?.value || "";
      const selectedPromotore =
        document.querySelector<HTMLSelectElement>("#select-promotore")?.value ||
        "";

      const matchesBeneficiario =
        !selectedBeneficiario || beneficiari.includes(selectedBeneficiario);
      const matchesPromotore =
        !selectedPromotore || promotore === selectedPromotore;

      if (matchesBeneficiario && matchesPromotore) {
        element.classList.remove("d-none");
        hasVisibleCards = true;
      } else {
        element.classList.add("d-none");
      }
    });

    setVisibleCards(hasVisibleCards);
  };

  const handleChangePromotore = (selectedOption: string) => {
    if (selectedOption === "") {
      setStatusMessagePromotore("Tutti gli enti promotori sono visibili");
    } else {
      const selectedEnte = entePromotores.allEntePromotores.find(
        (ente) => createSlug(ente.label || "") === selectedOption
      );
      setStatusMessagePromotore(
        `Contenuti filtrati per promotore: ${selectedEnte?.label || ""}`
      );
    }
    updateVisibleCards();
  };

  const handleChangeBeneficiario = (selectedOption: string) => {
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
    updateVisibleCards();
  };

  // Update visible cards state on component mount
  useEffect(() => {
    updateVisibleCards();
  }, []);

  return (
    <div className={cn("container-xxl py-lg-5")}>
      <div className="row my-4">
        <div className="col-12 col-lg-6 py-4">
          <Select
            id="select-beneficiario"
            label="Beneficiari"
            onChange={handleChangeBeneficiario}
            aria-label="Seleziona un beneficiario per filtrare i contenuti"
            aria-describedby="beneficiario-description"
          >
            <>
              <option value="">Tutti i beneficiari</option>
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
        <div className="col-12 col-lg-6 py-4">
          <Select
            id="select-promotore"
            label="Ente promotore"
            onChange={handleChangePromotore}
            aria-label="Seleziona un promotore per filtrare i contenuti"
            aria-describedby="promotore-description"
          >
            <>
              <option value="">Tutti gli enti promotori</option>
              {entePromotores.allEntePromotores.map((ente) => (
                <option
                  key={ente.id}
                  value={ente.label ? createSlug(ente.label) : ""}
                >
                  {ente.label}
                </option>
              ))}
            </>
          </Select>
          <div id="promotore-description" className="visually-hidden">
            Usa questo menu per filtrare i contenuti in base al promotore
            selezionato
          </div>
          <div
            id="promotore-status"
            className="visually-hidden"
            aria-live="polite"
            aria-atomic="true"
          >
            {statusMessagePromotore}
          </div>
        </div>
      </div>
      <div className="row">
        {items.map((item) => (
          <div
            className="col-12 it-page-sections-container"
            key={item.id}
            data-promotore={item.entePromotore?.label
              ?.toLowerCase()
              .replace(/à/g, "a")
              .replace(/è/g, "e")
              .replace(/ì/g, "i")
              .replace(/ò/g, "o")
              .replace(/ù/g, "u")
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/(^-|-$)/g, "")}
            data-beneficiari={item.entiBeneficiari
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
          >
            <CardMisura key={item.id} props={item} />
          </div>
        ))}
        {!visibleCards && (
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
    </div>
  );
}
