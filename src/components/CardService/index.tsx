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
      className={"it-card pb-0 flex-grow-1 bg-white pt-3"}>
      {label && (
        <div className={cn(
          "fw-normal pb-0 lh-sm",
          "service_label"
        )}>
          {title}
        </div>
      )}
      {title && (
        <TitleTag
          className={"it-card-title fw-bold fs-3 pb-3 lh-sm"}>
          <span className={cn(
              "service_title",
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
          <footer className={cn("it-card-related pb-4 pt-0 mt-0 d-flex justify-content-start")}>
            {button && (
              <Link
                href={button.href || `/${button.cmsPage?.slug || ""}`}
                className={"text-decoration-none fw-semibold"}
              >
                <small>{button.text}</small>
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
