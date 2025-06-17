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
  const { bgTransparent, titleBig, title, subtitle, chart, textBottom, kpi } =
    props;
  const [isClient, setIsClient] = useState(false);

  console.log("kpi", kpi);

  const data1: FieldDataType = {
    id: "kpi-group1",
    dataSource: kpi,
    chart: "kpi",
    config: {
      direction: "horizontal",
      h: 0,
      labeLine: false,
      legend: false,
      legendPosition: "",
      palette: [],
      tooltip: false,
      tooltipFormatter: "",
      valueFormatter: "",
      totalLabel: "",
      tooltipTrigger: "",
      colors: [],
    },
    data: null,
  };

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

          {kpi && <RenderChart {...data1} />}
          {/* {kpi && <ChartWrapper data={kpi[0] as KpiItemType} />} */}

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
