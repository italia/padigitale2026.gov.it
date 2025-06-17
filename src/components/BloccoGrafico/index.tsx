import { BloccoGraficoRecord } from "@/graphql/generated";

import {
  // ChartConfigType,
  // RenderChart,
  ChartWrapper,
  FieldDataType,
} from "dataviz-components";

import styles from "./index.module.scss";
import classNames from "classnames/bind";
const cn = classNames.bind(styles);

export function BloccoGrafico({ props }: { props: BloccoGraficoRecord }) {
  const { bgTransparent, subtitle, title, chart } = props;

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
      <div className={cn("container-xxl text-center")}>
        <div className="row h-100 py-4">
          {title && <h3 className={"col-12 mb-3 h3"}>{title}</h3>}
          {subtitle && <p className={"col-12"}>{subtitle}</p>}

          {chart && (
            <ChartWrapper
              data={chart?.chartData as FieldDataType}
              hFactor={1}
              info={{ text: "custom info" }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
