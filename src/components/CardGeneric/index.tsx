"use client";

import {NewsRecord, CardGenericRecord} from "@/graphql/generated";
import Link from "next/link";
import styles from "./index.module.scss";
import classNames from "classnames/bind";
import {width} from "dom-helpers";

const cn = classNames.bind(styles);

export enum cardAspectEnum {
  borderBottom = "borderBottom",
  bordered = "bordered",
  clean = "clean"
}

export function CardGeneric({props, cardAspect = cardAspectEnum.borderBottom, TitleTag = 'div'}: {
  props: NewsRecord | CardGenericRecord,
  cardAspect?: cardAspectEnum,
  TitleTag?: string
}) {
  if (props.date && props.date.length > 0) {
    try {
      props.date = new Intl.DateTimeFormat('it-IT', {
        timeZone: 'Europe/Rome',
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      }).format(Date.parse(props.date));
    } catch (exception) {

    }
  }
  return (
    <article className={cn(
      "it-card pb-0 flex-grow-1",
      {
        "bg-white rounded border border-neutral-1-bg-a3": (cardAspect && cardAspect === 'bordered'),
        "bg-transparent border-bottom border-neutral-1-bg-a3": (cardAspect && cardAspect === 'borderBottom'),
      },
    )}>
      {props.title && (
        <TitleTag className={cn(
          "it-card-title fw-semibold pb-3 lh-sm",
          {
            "fs-3": (cardAspect && ['borderBottom', 'clean'].includes(cardAspect)),
            "fs-4": (cardAspect && cardAspect === 'bordered'),
            "px-0": (cardAspect && cardAspect === 'borderBottom'),
          }
        )}>
          {props.iconBeforeTitle && (
            <div className={cn(
              "d-inline-block me-3",
              "title_icon"
            )}
              dangerouslySetInnerHTML={{ __html: props.iconBeforeTitle }}
            />
          )}
          <Link href={`/${props.slug}`} className={cn('decoration-1')}>
            {props.title}
          </Link>
        </TitleTag>
      )}
      <div className={cn(
          "it-card-body d-flex flex-column pt-0 pb-0",
          {
            "px-0": (cardAspect && cardAspect === 'borderBottom'),
          }
        )}>
        {(props.summary || props.description) && (
          <p className="it-card-text fs-6 flex-grow-1 pb-4 mb-3">{props.summary || props.description}</p>
        )}
        {(props.category || props.label || props.data || props.date) && (
          <footer className={cn(
            "it-card-related pb-4 pt-0 mt-0"
          )}>
            {(props.category || props.label) && (
              <div className={"it-card-taxonomy"}>
                <span className="visually-hidden">Categoria correlata: </span>
                <span className={"it-card-category"}>
                {props.category || props.label}
              </span>
              </div>
            )}
            {(props.data || props.date) && (
              <time className={"it-card-date"}>{props.data || props.date}</time>
            )}
          </footer>
        )}
      </div>
    </article>
  );
}
