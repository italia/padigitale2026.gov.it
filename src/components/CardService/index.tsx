"use client";

import { CardServiceRecord } from "@/graphql/generated";

import styles from "./index.module.scss";
import classNames from "classnames/bind";
import {ElementType} from "react";
import {Icon} from "design-react-kit";
import Link from "next/link";

const cn = classNames.bind(styles);

export function CardService({ props, TitleTag = "div" }: {
  props: CardServiceRecord;
  TitleTag?: ElementType;
}) {
  const {label, title, description, button} = props;
  return (
    <article
      className={"it-card pb-0 flex-grow-1 bg-white rounded border border-neutral-1-bg-a3"}>
      {title && (
        <TitleTag
          className={"it-card-title fw-semibold pb-3 lh-sm"}>
          {label}
          <span className={cn(
              "decoration-1",
              "color-primary"
            )}>
            {title}
          </span>
        </TitleTag>
      )}
      <div
        className={"it-card-body d-flex flex-column pt-0 pb-0"}>
        {description && (
          <p className="it-card-text fs-6 flex-grow-1 pb-4 mb-3">{description}</p>
        )}
        {button && (
          <footer className={cn("it-card-related pb-4 pt-0 mt-0")}>
            {button && (
              <Link
                href={button.href || `/${button.cmsPage?.slug || ""}`}
                className={"btn btn-outline-primary btn-lg"}
              >
                <span>{button.text}</span>
                {button.icon && (
                  <Icon
                    className="my-0"
                    color="primary"
                    icon={button.icon}
                    size="sm"
                    title=""
                    padding
                  />
                )}
              </Link>
            )}
          </footer>
        )}
      </div>
    </article>
  );
}
