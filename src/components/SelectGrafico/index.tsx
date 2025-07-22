import { SelectGraficoRecord } from "@/graphql/generated";
import { Select } from "design-react-kit";
import { useEffect, useState } from "react";
// import { ChartWrapper } from "dataviz-components";

import styles from "./index.module.scss";
import classNames from "classnames/bind";
const cn = classNames.bind(styles);

export function SelectGrafico({ props }: { props: SelectGraficoRecord }) {
  const { id, bgTransparent, titleBig, title, subtitle, charts } = props;

  const [selectedId, setSelectedId] = useState(charts[0]?.id || "");
  // const [isClient, setIsClient] = useState(false);

  // Aggiorna selectedId quando charts cambia e non è vuoto
  useEffect(() => {
    if (charts.length > 0) {
      setSelectedId(charts[0].id);
    }
  }, [charts]);

  useEffect(() => {
    console.log("selectedId:", selectedId);
    console.log(
      "charts ids:",
      charts.map((c) => c.id)
    );
    const selectedChart = charts.find((chart) => chart.id === selectedId);
    console.log("selectedChart:", selectedChart);
    console.log("selectedChart.chart:", selectedChart?.chart);
  }, [charts, selectedId]);

  // useEffect(() => {
  //   setIsClient(true);
  // }, []);

  // const selectedChart = useMemo(
  //   () => charts.find((chart) => chart.id === selectedId),
  //   [charts, selectedId]
  // );

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
      </div>
      <Select
        id="select-grafico"
        label="Progetti"
        onChange={(e) => setSelectedId(e)}
        aria-label="Seleziona un progetto per visualizzare il grafico corrispondente"
        aria-describedby="filter-description"
      >
        <>
          {charts.map((chart, idx) => (
            <option
              key={chart.id}
              value={createSlug(chart?.title ?? `chart-${idx}`)}
            >
              {chart.title}
            </option>
          ))}
        </>
      </Select>

      {/* <div className="mx-auto position-relative">
        {isClient ? (
          selectedChart &&
          selectedChart.chart && (
            <ChartWrapper
              id={selectedChart.chart.id}
              data={selectedChart.chart.chartData}
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
      </div> */}
    </div>
  );
}
