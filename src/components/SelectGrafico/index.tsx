import { BloccoGraficoRecord, SelectGraficoRecord } from "@/graphql/generated";
import { Select, Spinner } from "design-react-kit";
import { useEffect, useState, useMemo } from "react";
import { BloccoGrafico } from "@/src/components/BloccoGrafico";

import styles from "./index.module.scss";
import classNames from "classnames/bind";
const cn = classNames.bind(styles);

export function SelectGrafico({ props }: { props: SelectGraficoRecord }) {
  const { id, bgTransparent, titleBig, title, subtitle, charts } = props;

  const [selectedId, setSelectedId] = useState(charts[0]?.id || "");
  const [isClient, setIsClient] = useState(false);

  // Aggiorna selectedId quando charts cambia e non è vuoto
  useEffect(() => {
    if (charts.length > 0) {
      setSelectedId(charts[0].id);
    }
  }, [charts]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const selectedChart = useMemo(
    () => charts.find((chart) => chart.id === selectedId),
    [charts, selectedId]
  );

  return (
    <div
      id={id}
      className={cn(
        "wrapper",
        {
          "bg-light-blue": !bgTransparent,
        },
        "p-0"
      )}
    >
      <div className={cn("container-xxl py-4")}>
        <div className="py-4">
          {titleBig ? (
            <>{title && <h2 className={"col-12 mb-3 h2"}>{title}</h2>}</>
          ) : (
            <>{title && <h3 className={"col-12 mb-3 h3"}>{title}</h3>}</>
          )}
          {subtitle && <p className={"col-12"}>{subtitle}</p>}
        </div>

        <Select
          id="select-grafico"
          label="Progetti"
          value={selectedId}
          onChange={setSelectedId}
          aria-label="Seleziona un progetto per visualizzare il grafico corrispondente"
          aria-describedby="filter-description"
          className="w-auto mb-4"
        >
          {charts.map((chart) => (
            <option key={chart.id} value={chart.id}>
              {chart.title}
            </option>
          ))}
        </Select>

        <div className="mx-auto position-relative">
          {isClient ? (
            selectedChart && (
              <BloccoGrafico
                props={{ ...selectedChart, title: "" } as BloccoGraficoRecord}
              />
            )
          ) : (
            <div
              style={{ height: "300px" }}
              className="d-flex align-items-center justify-content-center"
            >
              <Spinner active small />
              <span className="visually-hidden">Caricamento...</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
