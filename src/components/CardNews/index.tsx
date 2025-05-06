"use client";

import {NewsRecord} from "@/graphql/generated";
import Link from "next/link";
import styles from "./index.module.scss";
import classNames from "classnames/bind";
const cn = classNames.bind(styles);

export enum cardAspectEnum {
  borderBottom = "borderBottom",
  bordered = "bordered",
  nonBordered = "nonBordered"
}

export function CardNews({ props, cardAspect = cardAspectEnum.borderBottom }: { props: NewsRecord, cardAspect?: cardAspectEnum }) {
  const { title, summary, category, data, slug } = props;
  return (
    <article className={cn(
      "it-card pb-0 bg-white flex-grow-1",
      {
        "rounded border border-neutral-1-bg-a3": (cardAspect && cardAspect === 'bordered'),
      },
    )}>
      {title && (
        <h3 className={cn(
          "it-card-title fw-semibold lh-sm",
          {
            "fs-3": (cardAspect && ['borderBottom', 'nonBordered'].includes(cardAspect)),
            "fs-4": (cardAspect && cardAspect === 'bordered'),
          }
        )}>
          <Link href={`/${slug}`} className={cn('decoration-1')}>{title}</Link>
        </h3>
      )}
      <div className="it-card-body d-flex flex-column pt-3 pb-0">
        <p className="it-card-text fs-6 flex-grow-1">{summary || ''}</p>
        <footer className={cn(
          "it-card-related pb-4 ",
          {
            "border-bottom border-neutral-1-bg-a3": (cardAspect && cardAspect === 'borderBottom'),
          }
        )}>
          {category && (
            <div className={"it-card-taxonomy"}>
              <span className="visually-hidden">Categoria correlata: </span>
              <span className={"it-card-category"}>
                {category}
              </span>
            </div>
          )}
          {data && (
            <time className={"it-card-date"}>{data}</time>
          )}
        </footer>
      </div>
    </article>
  );
}
