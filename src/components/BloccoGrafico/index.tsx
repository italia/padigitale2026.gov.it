import { BloccoGraficoRecord } from "@/graphql/generated";

import { ChartConfigType, RenderChart } from "dataviz-components";

import styles from "./index.module.scss";
import classNames from "classnames/bind";
const cn = classNames.bind(styles);

export function BloccoGrafico({ props }: { props: BloccoGraficoRecord }) {
  const { subtitle, title, chart } = props;

  const config: ChartConfigType = {
    colors: [
      "#5470c6",
      "#91cc75",
      "#fac858",
      "#ee6666",
      "#73c0de",
      "#3ba272",
      "#fc8452",
      "#9a60b4",
      "#ea7ccc",
    ],
    direction: "string",
    h: 600,
    labeLine: false,
    legend: false,
    legendPosition: "",
    palette: [""],
    tooltip: false,
    tooltipFormatter: "",
    valueFormatter: "",
    totalLabel: "",
    tooltipTrigger: "",
  };

  const data = [
    ["progetto", "importo_progetto"],
    ["1.2 Abilitazione e facilitazione migrazione al Cloud", 912024891],
    ["1.4.1 Esperienza del cittadino nei servizi pubblici", 794505538],
    ["1.4.5 Digitalizzazione degli avvisi pubblici", 196809642],
    ["1.1 Infrastrutture digitali", 187664527],
    ["1.3.1 Piattaforma Digitale Nazionale Dati", 182712514.85],
    ["1.4.3 Adozione PagoPA e AppIO - PagoPA", 177899425],
    ["1.4.4 Adozione identità digitale - SPID/CIE", 95004000],
    ["1.4.3 Adozione PagoPA e AppIO - AppIO", 66310579],
    ["1.4.4 Adozione identità digitale - ANSC", 45504901.99999884],
  ];

  return (
    <div className={cn("wrapper", "p-0")}>
      <div className={cn("container-xxl")}>
        <div className="row h-100 py-4">
          {title && <h2 className={"col-12 mb-3 fs-2 lh-sm"}>{title}</h2>}
          {subtitle && <p className={"col-12 font-sans-serif"}>{subtitle}</p>}
          <h3>{chart?.title}</h3>
          {chart && data.length > 0 && (
            <RenderChart
              dataSource={chart.chartDatasource || ""}
              chart="pie"
              config={config}
              data={data}
              // style={{
              //   height: "400px",
              //   width: "100%",
              //   border: "1px solid red",
              // }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
