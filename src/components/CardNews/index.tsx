import { NewsRecord } from "@/graphql/generated";
import Link from "next/link";
import styles from "./index.module.scss";
import classNames from "classnames/bind";
import { ElementType } from "react";
import { Icon } from "design-react-kit";

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
  parentId = null,
}: {
  props: NewsRecord;
  cardLayout?: newsCardLayoutEnum;
  TitleTag?: ElementType;
  parentId: string | null;
}) {
  const { id, title, summary, category, customUpdateDate, slug, externalLink } =
    props;

  return (
    <article
      // aria-labelledby={
      //   parentId && title ? `title-${parentId}-${id}` : undefined
      // }
      className={cn("it-card--news it-card p-0 flex-grow-1", {
        "bg-white rounded border border-neutral-1-bg-a3":
          cardLayout && cardLayout === "bordered",
        "bg-transparent border-bottom border-neutral-1-bg-a3":
          cardLayout && cardLayout === "borderBottom",
      })}
    >
      {title && (
        <TitleTag
          className={cn(
            "it-card-title fw-semibold pb-3 lh-sm h4 d-flex justify-content-between",
            {
              h3: cardLayout && ["borderBottom", "clean"].includes(cardLayout),
              h4: cardLayout && cardLayout === "bordered",
              "px-0": cardLayout && cardLayout === "borderBottom",
            }
          )}
        >
          <Link
            prefetch={false}
            href={externalLink?.length ? externalLink : `/${slug}`}
            className={cn("decoration-1")}
            target={externalLink ? "_blank" : "_self"}
            id={parentId && title ? `title-${parentId}-${id}` : undefined}
          >
            {title}
          </Link>

          {externalLink && (
            <span className={cn("icon")} aria-hidden={"true"}>
              <Icon className="my-0" color="primary" icon="it-external-link" />
            </span>
          )}
        </TitleTag>
      )}
      <div
        className={cn("it-card-body d-flex flex-column pt-0 pb-0", {
          "px-0": cardLayout && cardLayout === "borderBottom",
        })}
      >
        {summary && (
          <p className="it-card-text flex-grow-1 pb-4 mb-3">{summary}</p>
        )}
        {(category || customUpdateDate) && (
          <footer className={cn("it-card-related pb-4 pt-0 mt-0")}>
            {category && (
              <div className={"it-card-taxonomy"}>
                <span className="visually-hidden me-1">
                  Categoria correlata:{" "}
                </span>
                <span className={"it-card-category"}>{category}</span>
              </div>
            )}
            {customUpdateDate && (
              <>
                <span className="visually-hidden me-1">Data: </span>
                <time className={"it-card-date"}>
                  {new Intl.DateTimeFormat("it-IT", {
                    timeZone: "Europe/Rome",
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  }).format(Date.parse(customUpdateDate))}
                </time>
              </>
            )}
          </footer>
        )}
      </div>
    </article>
  );
}
