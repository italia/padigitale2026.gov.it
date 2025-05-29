import { TableListRecord } from "@/graphql/generated";
import Link from "next/link";
import { Icon } from "design-react-kit";
import { TableListItem } from "./TableListItem";
import { TableListLinkItem } from "./TableListLinkItem";

import styles from "./index.module.scss";
import classNames from "classnames/bind";
const cn = classNames.bind(styles);

export function TableList({ props }: { props: TableListRecord }) {
  const { title, showTableHead, alignment, items, button, id } = props;

  const getButtonHref = (button: TableListRecord["button"]) => {
    // href link > cms page
    if (button?.href) {
      return `${button.href}`;
    }
    if (button?.cmsPage?.slug) {
      return `/${button.cmsPage.slug}`;
    }
    return "";
  };

  const getButtonTitle = (button: TableListRecord["button"]) => {
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
    <div
      className="container-xxl"
      role="region"
      aria-labelledby={title ? `${id}-title` : undefined}
    >
      <div className={cn("row pt-4")}>
        {title && (
          <h2
            id={`${id}-title`}
            className={cn("col-12 h-1 pb-4", {
              "text-center": alignment === "center",
            })}
          >
            {title}
          </h2>
        )}

        {showTableHead && items[0].__typename !== "TableListLinkItemRecord" && (
          <div
            className="row border-bottom border-2 py-4 mx-0"
            role="rowgroup"
            aria-hidden="true"
          >
            <div className="col-12 col-sm-2 ps-0">
              <span className="h6 text-secondary">Data</span>
            </div>
            <div className="col-12 col-sm-10 ps-0">
              <span className="h6 text-secondary">Descrizione</span>
            </div>
          </div>
        )}

        <div
          role="list"
          aria-label={title ? `Lista ${title}` : "Lista elementi"}
          className="col-12"
        >
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
        </div>

        {button && (
          <div
            className={cn("col-12 pt-5", {
              "text-center": alignment === "center",
            })}
          >
            <Link
              className="btn btn-sm btn-outline-primary"
              href={getButtonHref(button)}
              target={button.target || "_self"}
              title={getButtonTitle(button)}
              aria-label={getButtonTitle(button)}
            >
              {button.text}
              {button.icon && (
                <Icon
                  className="my-0"
                  color="primary"
                  icon={button.icon}
                  size="sm"
                  aria-hidden="true"
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
