import { CardGenericRecord } from "@/graphql/generated";
import Link from "next/link";
import styles from "./index.module.scss";
import classNames from "classnames/bind";
import { ElementType } from "react";
import { Icon } from "design-react-kit";

const cn = classNames.bind(styles);

export enum genericCardLayoutEnum {
  borderBottom = "borderBottom",
  bordered = "bordered",
  clean = "clean",
}

export function CardGeneric({
  props,
  cardLayout = genericCardLayoutEnum.borderBottom,
  TitleTag = "div",
}: {
  props: CardGenericRecord;
  cardLayout?: genericCardLayoutEnum;
  TitleTag?: ElementType;
}) {
  const {
    iconBeforeTitle,
    title,
    iconAfterTitle,
    description,
    label,
    date,
    href,
    cmsPage,
    target,
  } = props;

  let formattedDate: string | undefined;

  try {
    if (date) {
      formattedDate = new Intl.DateTimeFormat("it-IT", {
        timeZone: "Europe/Rome",
        day: "2-digit",
        month: "long",
        year: "numeric",
      }).format(Date.parse(date));
    }
  } catch {}

  let targetLink = "_self";
  if (typeof target !== "undefined" && target !== null) {
    targetLink = target;
  }

  return (
    <article
      className={cn("it-card--generic it-card pb-0 flex-grow-1", {
        "bg-white rounded border border-neutral-1-bg-a3":
          cardLayout && cardLayout === "bordered",
        "bg-transparent border-bottom border-neutral-1-bg-a3":
          cardLayout && cardLayout === "borderBottom",
      })}
    >
      {title && (
        <TitleTag
          className={cn(
            "it-card-title fw-semibold pb-3 lh-sm h-3 d-flex justify-content-between",
            {
              "px-0": cardLayout && cardLayout === "borderBottom",
            }
          )}
        >
          {iconBeforeTitle && (
            <div
              className={cn("d-inline-block me-3", "title_icon")}
              dangerouslySetInnerHTML={{ __html: iconBeforeTitle }}
            />
          )}
          {(href || cmsPage?.slug) && (
            <Link
              href={href || cmsPage?.slug || ""}
              target={targetLink}
              className={cn("decoration-1", "flex-grow-1")}
            >
              {title}
            </Link>
          )}
          {!href && !cmsPage?.slug && (
            <span className={"flex-grow-1"}>{title}</span>
          )}
          {iconAfterTitle && (
            <span className={cn("icon")} aria-hidden={"true"}>
              <Icon className="my-0" color="primary" icon={iconAfterTitle} />
            </span>
          )}
        </TitleTag>
      )}
      <div
        className={cn("it-card-body d-flex flex-column pt-0 pb-0", {
          "px-0": cardLayout && cardLayout === "borderBottom",
        })}
      >
        {description && (
          <p className="it-card-text h-6 flex-grow-1 pb-4 mb-3">
            {description}
          </p>
        )}
        {(label || formattedDate) && (
          <footer className={cn("it-card-related pb-4 pt-0 mt-0")}>
            {label && (
              <div className={"it-card-taxonomy"}>
                <span className="visually-hidden">Categoria correlata: </span>
                <span className={"it-card-category"}>{label}</span>
              </div>
            )}
            {formattedDate && (
              <time className={"it-card-date"}>{formattedDate}</time>
            )}
          </footer>
        )}
      </div>
    </article>
  );
}
