import { BloccoGraficoRecord } from "@/graphql/generated";

import styles from "./index.module.scss";
import classNames from "classnames/bind";
const cn = classNames.bind(styles);

export function BloccoGrafico({ props }: { props: BloccoGraficoRecord }) {
  const { subtitle, title } = props;
  return (
    <div className={cn("wrapper", "p-0")}>
      <div className={cn("container-xxl")}>
        {/* Body */}
        <div className="row h-100 py-4">
          {title && <h2 className={"col-12 mb-3 fs-2 lh-sm"}>{title}</h2>}
          {subtitle && <p className={"col-12 font-sans-serif"}>{subtitle}</p>}
        </div>
      </div>
    </div>
  );
}
