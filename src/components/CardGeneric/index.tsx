"use client";

import { NewsRecord, CardGenericRecord } from "@/graphql/generated";
import Link from "next/link";
import styles from "./index.module.scss";
import classNames from "classnames/bind";
import { ElementType } from "react";

const cn = classNames.bind(styles);

export enum cardAspectEnum {
  borderBottom = "borderBottom",
  bordered = "bordered",
  clean = "clean",
}

export function CardGeneric({
  props,
  cardAspect = cardAspectEnum.borderBottom,
  TitleTag = "div",
}: {
  props: NewsRecord | CardGenericRecord;
  cardAspect?: cardAspectEnum;
  TitleTag?: ElementType;
}) {
  const isNewsRecord = (
    props: NewsRecord | CardGenericRecord
  ): props is NewsRecord => {
    return "summary" in props;
  };

  const isCardGenericRecord = (
    props: NewsRecord | CardGenericRecord
  ): props is CardGenericRecord => {
    return "date" in props;
  };

  let formattedDate: string | undefined;
  if (isCardGenericRecord(props) && props.date) {
    try {
      formattedDate = new Intl.DateTimeFormat("it-IT", {
        timeZone: "Europe/Rome",
        day: "2-digit",
        month: "long",
        year: "numeric",
      }).format(Date.parse(props.date));
    } catch {}
  }

  const summary = isNewsRecord(props) ? props.summary : props.description;
  const category = isNewsRecord(props) ? props.category : undefined;
  const label = !isNewsRecord(props) ? props.label : undefined;
  const data = isNewsRecord(props) ? props.data : undefined;
  const iconBeforeTitle = isCardGenericRecord(props)
    ? props.iconBeforeTitle
    : undefined;
  const slug = isNewsRecord(props) ? props.slug : undefined;

  return (
    <article
      className={cn("it-card pb-0 flex-grow-1", {
        "bg-white rounded border border-neutral-1-bg-a3":
          cardAspect && cardAspect === "bordered",
        "bg-transparent border-bottom border-neutral-1-bg-a3":
          cardAspect && cardAspect === "borderBottom",
      })}
    >
      {props.title && (
        <TitleTag
          className={cn("it-card-title fw-semibold pb-3 lh-sm", {
            "fs-3":
              cardAspect && ["borderBottom", "clean"].includes(cardAspect),
            "fs-4": cardAspect && cardAspect === "bordered",
            "px-0": cardAspect && cardAspect === "borderBottom",
          })}
        >
          {iconBeforeTitle && (
            <div
              className={cn("d-inline-block me-3", "title_icon")}
              dangerouslySetInnerHTML={{ __html: iconBeforeTitle }}
            />
          )}
          <Link href={`/${slug}`} className={cn("decoration-1")}>
            {props.title}
          </Link>
        </TitleTag>
      )}
      <div
        className={cn("it-card-body d-flex flex-column pt-0 pb-0", {
          "px-0": cardAspect && cardAspect === "borderBottom",
        })}
      >
        {summary && (
          <p className="it-card-text fs-6 flex-grow-1 pb-4 mb-3">{summary}</p>
        )}
        {(category || label || data || formattedDate) && (
          <footer className={cn("it-card-related pb-4 pt-0 mt-0")}>
            {(category || label) && (
              <div className={"it-card-taxonomy"}>
                <span className="visually-hidden">Categoria correlata: </span>
                <span className={"it-card-category"}>{category || label}</span>
              </div>
            )}
            {(data || formattedDate) && (
              <time className={"it-card-date"}>{data || formattedDate}</time>
            )}
          </footer>
        )}
      </div>
    </article>
  );
}
