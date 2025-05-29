"use client";

import { CardsListFilterRecord } from "@/graphql/generated";
import { usePages } from "@/src/contexts/PagesContext";
import { Select } from "design-react-kit";
import { CardMisura } from "@/src/components/CardMisura";

import styles from "./index.module.scss";
import classNames from "classnames/bind";
const cn = classNames.bind(styles);

export function CardsListFilter({ props }: { props: CardsListFilterRecord }) {
  const { items } = props;
  const { enteBeneficiarios, entePromotores } = usePages();

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

  const handleChangePromotore = (selectedOption: string) => {
    console.log("selectedOption", selectedOption);
  };

  const handleChangeBeneficiario = (selectedOption: string) => {
    console.log("selectedOption", selectedOption);
  };

  return (
    <div className={cn("container-xxl py-lg-5")}>
      <div className="row my-4">
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
            {/* {statusMessageBeneficiario} */}
          </div>
        </div>
        <div className="col-12 col-lg-4 py-4">
          <Select
            id="select-misura"
            label="Misura"
            onChange={handleChangePromotore}
            aria-label="Seleziona una misura per filtrare i contenuti"
            aria-describedby="misura-description"
          >
            <>
              <option value="">Scegli misura</option>
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
            {/* {statusMessageMisura} */}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 it-page-sections-container">
          {items.map((item) => (
            <CardMisura key={item.id} props={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
