import { CardAttachmentRecord } from "@/graphql/generated";
import Link from "next/link";
import styles from "./index.module.scss";
import classNames from "classnames/bind";
import { ElementType } from "react";
import { Icon } from "design-react-kit";
import { CardBadge } from "@/src/components/CardBadge";

const cn = classNames.bind(styles);

export function CardAttachment({
  props,
  TitleTag = "div",
}: {
  props: CardAttachmentRecord;
  TitleTag?: ElementType;
}) {
  const { title, description, label, date, href, cmsAsset, target, badge } =
    props;

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
      className={
        "it-card--attachment it-card pb-0 flex-grow-1 bg-white rounded border border-neutral-1-bg-a3 pt-3 rounded shadow"
      }
    >
      {title && (
        <TitleTag
          className={
            "it-card-title fw-semibold pb-3 lh-sm d-flex justify-content-between fs-4"
          }
        >
          {(href || cmsAsset?.url) && (
            <Link
              href={href || cmsAsset?.url || ""}
              target={targetLink}
              className={cn("decoration-1")}
            >
              {title}
            </Link>
          )}
          {!href && !cmsAsset?.url && (
            <span className={cn("decoration-1", "text-primary")}>{title}</span>
          )}
          <span className={cn("icon")} aria-hidden={"true"}>
            <Icon
              className="my-0"
              color="primary"
              icon="it-clip"
              title=""
              padding
            />
          </span>
        </TitleTag>
      )}
      <div className={"it-card-body d-flex flex-column pt-0 pb-0"}>
        {description && (
          <p className="it-card-text fs-6 flex-grow-1 pb-4 mb-3">
            {description}
          </p>
        )}
        {(label || formattedDate) && (
          <footer className={cn("it-card-related pb-4 pt-0 mt-0 flex-wrap")}>
            {label && (
              <div className={"it-card-taxonomy"}>
                <span className="visually-hidden">Categoria correlata: </span>
                <span className={"it-card-category"}>{label}</span>
              </div>
            )}
            {badge && (
              <div className={"it-card-taxonomy"}>
                <span className="visually-hidden">Stato risorsa: </span>
                <CardBadge content={badge} />
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
