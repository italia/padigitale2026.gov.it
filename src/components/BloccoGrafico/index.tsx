import { BloccoGraficoRecord } from "@/graphql/generated";

import ReactEcharts from "echarts-for-react";

import styles from "./index.module.scss";
import classNames from "classnames/bind";
const cn = classNames.bind(styles);

export function BloccoGrafico({ props }: { props: BloccoGraficoRecord }) {
  const { subtitle, title, chart } = props;

  return (
    <div className={cn("wrapper", "p-0")}>
      <div className={cn("container-xxl")}>
        <div className="row h-100 py-4">
          {title && <h2 className={"col-12 mb-3 fs-2 lh-sm"}>{title}</h2>}
          {subtitle && <p className={"col-12 font-sans-serif"}>{subtitle}</p>}
          <h3>{chart?.title}</h3>
          {chart && (
            <ReactEcharts
              key={chart.id}
              option={chart.chartData}
              style={{
                height: "400px",
                width: "100%",
                border: "1px solid red",
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
