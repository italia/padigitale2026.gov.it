import { NewsRecord } from "@/graphql/generated";
import Link from "next/link";
import styles from "./index.module.scss";
import classNames from "classnames/bind";
import { ElementType } from "react";

const cn = classNames.bind(styles);

export enum newsCardLayoutEnum {
  borderBottom = "borderBottom",
  bordered = "bordered",
  clean = "clean",
}

export function CardNews({
  props,
  cardLayout = newsCardLayoutEnum.borderBottom,
  TitleTag = "div",
}: {
  props: NewsRecord;
  cardLayout?: newsCardLayoutEnum;
  TitleTag?: ElementType;
}) {
  const { title, summary, category, customUpdateDate, slug } = props;

  return (
    <article
      className={cn("it-card--news it-card pb-0 flex-grow-1", {
        "bg-white rounded border border-neutral-1-bg-a3":
          cardLayout && cardLayout === "bordered",
        "bg-transparent border-bottom border-neutral-1-bg-a3":
          cardLayout && cardLayout === "borderBottom",
      })}
    >
      {title && (
        <TitleTag
          className={cn("it-card-title fw-semibold pb-3 lh-sm", {
            "fs-3":
              cardLayout && ["borderBottom", "clean"].includes(cardLayout),
            "fs-4": cardLayout && cardLayout === "bordered",
            "px-0": cardLayout && cardLayout === "borderBottom",
          })}
        >
          <Link
            href={`/${slug}`}
            className={cn("decoration-1")}
            target={"_self"}
          >
            {title}
          </Link>
        </TitleTag>
      )}
      <div
        className={cn("it-card-body d-flex flex-column pt-0 pb-0", {
          "px-0": cardLayout && cardLayout === "borderBottom",
        })}
      >
        {summary && (
          <p className="it-card-text fs-6 flex-grow-1 pb-4 mb-3">{summary}</p>
        )}
        {(category || customUpdateDate) && (
          <footer className={cn("it-card-related pb-4 pt-0 mt-0")}>
            {category && (
              <div className={"it-card-taxonomy"}>
                <span className="visually-hidden">Categoria correlata: </span>
                <span className={"it-card-category"}>{category}</span>
              </div>
            )}
            {customUpdateDate && (
              <time className={"it-card-date"}>
                {new Intl.DateTimeFormat("it-IT", {
                  timeZone: "Europe/Rome",
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                }).format(Date.parse(customUpdateDate))}
              </time>
            )}
          </footer>
        )}
      </div>
    </article>
  );
}
