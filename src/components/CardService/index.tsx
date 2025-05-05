"use client";

import { CardServiceRecord } from "@/graphql/generated";

import styles from "./index.module.scss";
import classNames from "classnames/bind";
const cn = classNames.bind(styles);

export function CardService({ props }: { props: CardServiceRecord }) {
  const { title } = props;
  return (
    <div className={cn("wrapper", "p-0")}>
      <div className={cn("row w-100 h-100 mx-auto container-xxl")}>
        {/* Body */}
        <div className="p-4">
          {title && (
            <h2 className={"text-secondary mb-3 fs-2 lh-sm"}>{title}</h2>
          )}
        </div>
      </div>
    </div>
  );
}
