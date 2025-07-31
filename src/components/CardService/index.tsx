import { CardServiceRecord } from "@/graphql/generated";

import styles from "./index.module.scss";
import classNames from "classnames/bind";
import { ElementType } from "react";
import { Icon } from "design-react-kit";
import Link from "next/link";

const cn = classNames.bind(styles);

export function CardService({
  props,
  TitleTag = "div",
  customClass = "",
}: {
  props: CardServiceRecord;
  TitleTag?: ElementType;
  customClass?: string;
}) {
  const { label, title, description, button } = props;
  return (
    <article
      className={`it-card--service it-card pb-0 flex-grow-1 bg-transparent pt-3 ${customClass}`}
    >
      {label && (
        <div
          className={cn(
            "fw-normal pb-0 lh-sm px-0 ps-lg-2 pe-lg-2",
            "service_label"
          )}
        >
          {label}
        </div>
      )}
      {title && (
        <TitleTag
          className={"it-card-title fw-bold h3 pb-3 lh-sm px-0 ps-lg-2 pe-lg-2"}
        >
          <span className={cn("service_title")}>{title}</span>
        </TitleTag>
      )}
      <div
        className={
          "it-card-body d-flex flex-column pt-0 pb-0 px-0 ps-lg-2 pe-lg-2"
        }
      >
        {description && (
          <p className="it-card-text flex-grow-1 pb-4 mb-3">{description}</p>
        )}
        {button && (
          <footer
            className={cn(
              "it-card-related pb-4 pt-0 mt-0 d-flex justify-content-start"
            )}
          >
            {button && (
              <Link
                prefetch={false}
                href={button.href || `/${button.cmsPage?.slug || ""}`}
                className={"fw-semibold"}
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
