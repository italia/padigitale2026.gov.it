"use client";

import { TableListRecord } from "@/graphql/generated";
import Link from "next/link";
import { Icon } from "design-react-kit";
import { TableListItem } from "./TableListItem";
import { TableListLinkItem } from "./TableListLinkItem";

import styles from "./index.module.scss";
import classNames from "classnames/bind";
const cn = classNames.bind(styles);

export function TableList({ props }: { props: TableListRecord }) {
  const { title, showTableHead, alignment, items, cta } = props;

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
    <div className="container-xxl">
      <div className={cn("w-100 mx-auto p-4")}>
        {title && (
          <h2
            className={cn("h-1 text-secondary pb-4", {
              "text-center": alignment === "center",
            })}
          >
            {title}
          </h2>
        )}

        {showTableHead && items[0].__typename !== "TableListLinkItemRecord" && (
          <div className="row border-bottom border-2 py-4 px-0 mx-0">
            <div className="col-12 col-sm-2 ps-0">
              <span className="h6 text-secondary">Data</span>
            </div>
            <div className="col-12 col-sm-10 ps-0">
              <span className="h6 text-secondary">Descrizione</span>
            </div>
          </div>
        )}

        {items.map((item, idx) => (
          <div key={idx}>
            {item.__typename === "TableListItemRecord" && (
              <TableListItem props={item} />
            )}
            {item.__typename === "TableListLinkItemRecord" && (
              <TableListLinkItem props={item} />
            )}
          </div>
        ))}
        {cta && (
          <div
            className={cn("w-100 pt-5", {
              "text-center": alignment === "center",
            })}
          >
            <Link
              className="btn btn-sm btn-outline-primary"
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
          </div>
        )}
      </div>
    </div>
  );
}
