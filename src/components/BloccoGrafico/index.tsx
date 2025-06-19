import { BloccoGraficoRecord } from "@/graphql/generated";

import {
  type FieldDataType,
  ChartWrapper,
  RenderChart,
} from "dataviz-components";

import { useEffect, useState } from "react";

import styles from "./index.module.scss";
import classNames from "classnames/bind";
const cn = classNames.bind(styles);

export function BloccoGrafico({ props }: { props: BloccoGraficoRecord }) {
  const {
    id,
    bgTransparent,
    titleBig,
    title,
    subtitle,
    chart,
    kpi,
    textBottom,
  } = props;
  const [isClient, setIsClient] = useState(false);

  const kpiData: FieldDataType = {
    id: `kpi-group-${id}`,
    dataSource: kpi,
    chart: "kpi",
    config: {
      direction: "horizontal",
      h: 0,
      labeLine: true,
      legend: true,
      legendPosition: "",
      palette: [],
      tooltip: true,
      tooltipFormatter: "",
      valueFormatter: "",
      totalLabel: "",
      tooltipTrigger: "",
      colors: [],
    },
    data: null,
  };

  console.log("kpi", kpi);
  console.log("chart", chart);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div
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
          <div className="text-center">
            {titleBig ? (
              <>{title && <h2 className={"col-12 mb-3 h2"}>{title}</h2>}</>
            ) : (
              <>{title && <h3 className={"col-12 mb-3 h3"}>{title}</h3>}</>
            )}
            {subtitle && <p className={"col-12"}>{subtitle}</p>}
          </div>

          {chart && (
            <div className="mx-auto" style={{ maxWidth: "950px" }}>
              {isClient ? (
                <ChartWrapper
                  data={chart?.chartData as FieldDataType}
                  info={{ text: "custom info" }}
                  enableDownloadData={false}
                  enableDownloadImage={false}
                />
              ) : (
                <div
                  style={{ height: "300px" }}
                  className="d-flex align-items-center justify-content-center"
                >
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Caricamento...</span>
                  </div>
                </div>
              )}
            </div>
          )}

          {kpi && (
            <>
              {isClient ? (
                <RenderChart {...kpiData} />
              ) : (
                <div
                  style={{ height: "300px" }}
                  className="d-flex align-items-center justify-content-center"
                >
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Caricamento...</span>
                  </div>
                </div>
              )}
            </>
          )}

          {textBottom && (
            <div className="text-center mt-3">
              <p
                className={"col-12 text-muted lh-sm mx-auto"}
                style={{ fontSize: "0.875rem", maxWidth: "424px" }}
                dangerouslySetInnerHTML={{
                  __html: textBottom.replace(/\./g, ".<br />"),
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
