import { ResourceRecord } from "@/graphql/generated";
import Link from "next/link";
import styles from "./index.module.scss";
import classNames from "classnames/bind";
import { ElementType } from "react";
import { CardBadge } from "@/src/components/CardBadge";

const cn = classNames.bind(styles);

export function CardResource({
  props,
  TitleTag = "div",
}: {
  props: ResourceRecord;
  TitleTag?: ElementType;
}) {
  const { title, summary, data, slug, _createdAt, _updatedAt } = props;

  const getBadge = (createdAt: string, updatedAt: string) => {
    const now = new Date();
    const createdDate = new Date(createdAt);
    const updatedDate = new Date(updatedAt);

    // Badge "Nuovo" wins over "Aggiornato" (if both are true)

    // if createdDate is < of 60 days return "Nuovo"
    if (createdDate > new Date(now.getTime() - 60 * 24 * 60 * 60 * 1000)) {
      return "Nuovo";
    }

    // if updatedDate is < of 60 days return "Aggiornato"
    if (updatedDate > new Date(now.getTime() - 60 * 24 * 60 * 60 * 1000)) {
      return "Aggiornato";
    }
  };

  return (
    <article className="it-card--resource it-card pb-0 bg-white flex-grow-1">
      {title && (
        <TitleTag className="it-card-title px-0 h3 fw-semibold lh-sm">
          <Link
            prefetch={false}
            href={`/${slug}`}
            className={cn("decoration-1")}
          >
            {title}
          </Link>
        </TitleTag>
      )}
      <div className="it-card-body px-0 pb-2 d-flex flex-column pt-3 pb-3 border-bottom border-neutral-1-bg-a3">
        {summary && <p className="it-card-text h6 flex-grow-1">{summary}</p>}
        <footer className="it-card-related pb-2">
          {(() => {
            const badge = getBadge(_createdAt, _updatedAt);
            return (
              badge && (
                <div className={"it-card-taxonomy"}>
                  <span className="visually-hidden">Tag correlato: </span>
                  <CardBadge content={badge} />
                </div>
              )
            );
          })()}
          {data && <time className={"it-card-date"}>{data}</time>}
        </footer>
      </div>
    </article>
  );
}
