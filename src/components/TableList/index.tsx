"use client";

import { TableListRecord } from "@/graphql/generated";
import Link from "next/link";

import styles from "./index.module.scss";
import classNames from "classnames/bind";
import { Icon } from "design-react-kit";
const cn = classNames.bind(styles);

export function TableList({ props }: { props: TableListRecord }) {
  const { title, showTableHead, alignment, items, cta } = props;
  console.log("props", props);

  const getButtonHref = (button: TableListRecord["cta"]) => {
    // href link > cms page
    if (button?.href) {
      return `${button.href}`;
    }
    if (button?.cmsPage?.slug) {
      return `/${button.cmsPage.slug}`;
    }
    return "";
  };

  const getButtonTitle = (button: TableListRecord["cta"]) => {
    // href link > cms page
    if (button?.href) {
      return button.text || "";
    }
    if (button?.cmsPage?.title) {
      return `Vai alla pagina ${button.cmsPage.title}`;
    }
    return "";
  };

  return (
    <div className="mx-auto container-xxl">
      {/* Body */}
      <div
        className={cn("w-100", {
          "text-center": alignment === "center",
        })}
      >
        {title && <h2>{title}</h2>}

        {showTableHead && <p>head</p>}

        {items.map((item) => (
          <p key={item.id}>{item.__typename}</p>
        ))}

        {cta && (
          <Link
            className="btn btn-sm btn-outline-primary mt-2"
            href={getButtonHref(cta)}
            target={cta.target || "_self"}
            title={getButtonTitle(cta)}
          >
            {cta.text}
            {cta.icon && (
              <Icon
                className="my-0"
                color="primary"
                icon={cta.icon}
                size="sm"
                title=""
                padding
              />
            )}
          </Link>
        )}
      </div>
    </div>
  );
}
