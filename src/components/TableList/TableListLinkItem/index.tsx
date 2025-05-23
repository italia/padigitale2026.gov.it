import { TableListLinkItemRecord } from "@/graphql/generated";
import { Badge, Icon } from "design-react-kit";
import Link from "next/link";
import classNames from "classnames/bind";
import styles from "@/src/components/CardBadge/index.module.scss";
import { HTMLAttributeAnchorTarget } from "react";
const cn = classNames.bind(styles);

export function TableListLinkItem({
  props,
}: {
  props: TableListLinkItemRecord;
}) {
  const { link, category } = props;

  const getHref = (link: TableListLinkItemRecord["link"]) => {
    // href link > cms page
    if (link?.href) {
      return `${link.href}`;
    }
    if (link?.cmsPage?.slug) {
      return `/${link.cmsPage.slug}`;
    }
    return "";
  };

  const getTitle = (link: TableListLinkItemRecord["link"]) => {
    // href link > cms page
    if (link?.href) {
      return link.text || "";
    }
    if (link?.cmsPage?.title) {
      return `Vai alla pagina ${link.cmsPage.title}`;
    }
    return "";
  };

  const getBadge = (item: TableListLinkItemRecord["link"]) => {
    if (!item?.cmsPage?._createdAt && !item?.cmsPage?._updatedAt) {
      return null;
    }

    const now = new Date();
    const createdDate = item.cmsPage._createdAt
      ? new Date(item.cmsPage._createdAt)
      : null;
    const updatedDate = item.cmsPage._updatedAt
      ? new Date(item.cmsPage._updatedAt)
      : null;

    // Badge "Nuovo" wins over "Aggiornato" (if both are true)

    // if createdDate is < of 60 days return "Nuovo"
    if (
      createdDate &&
      createdDate > new Date(now.getTime() - 60 * 24 * 60 * 60 * 1000)
    ) {
      return "Nuovo";
    }

    // if updatedDate is < of 60 days return "Aggiornato"
    if (
      updatedDate &&
      updatedDate > new Date(now.getTime() - 60 * 24 * 60 * 60 * 1000)
    ) {
      return "Aggiornato";
    }

    return null;
  };

  return (
    <div className="row border-bottom m-0 p-0 py-2 w-100">
      <div className="col ps-0">
        <Link
          className="d-flex justify-content-between align-items-center text-decoration-none"
          href={getHref(link)}
          title={getTitle(link)}
          target={link?.target as HTMLAttributeAnchorTarget}
        >
          <div>
            <div
              className="fw-bold text-decoration-underline mb-1"
              style={{ fontSize: "1.125rem" }}
            >
              {link?.text}
            </div>

            {category && (
              <div className="text-secondary text-decoration-none text-transform-uppercase fw-semibold">
                {category.label}
              </div>
            )}
          </div>
          <div className="d-flex align-items-center">
            {(() => {
              const badge = getBadge(link);
              return (
                badge && (
                  <Badge
                    className={cn("badge text-capitalize px-3 me-2", {
                      "lightgrey-bg-a3 text-primary": badge === "Nuovo",
                      "neutral-1-bg-a2 text-dark": badge === "Aggiornato",
                    })}
                  >
                    {badge}
                  </Badge>
                )
              );
            })()}
            <Icon
              className="my-0"
              color="primary"
              icon="it-chevron-right"
              size="sm"
              title="Freccia a destra"
              padding
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
