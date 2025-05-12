"use client";

import { ResourceRecord } from "@/graphql/generated";
import Link from "next/link";
import styles from "./index.module.scss";
import classNames from "classnames/bind";
import { ElementType } from "react";
import {CardBadge} from "@/src/components/CardBadge";

const cn = classNames.bind(styles);

export function CardResource({
  props,
  TitleTag = "div",
}: {
  props: ResourceRecord;
  TitleTag?: ElementType;
}) {
  const { title, summary, badge, data, slug } = props;
  return (
    <article className="it-card pb-0 bg-white flex-grow-1">
      {title && (
        <TitleTag className="it-card-title px-0 fs-3 fw-semibold lh-sm">
          <Link href={`/${slug}`} className={cn("decoration-1")}>
            {title}
          </Link>
        </TitleTag>
      )}
      <div className="it-card-body px-0 pb-2 d-flex flex-column pt-3 pb-3 border-bottom border-neutral-1-bg-a3">
        {summary && <p className="it-card-text fs-6 flex-grow-1">{summary}</p>}
        <footer className="it-card-related pb-2">
          {badge && (
            <div className={"it-card-taxonomy"}>
              <span className="visually-hidden">Tag correlato: </span>
              <CardBadge content={badge} />
            </div>
          )}
          {data && <time className={"it-card-date"}>{data}</time>}
        </footer>
      </div>
    </article>
  );
}
