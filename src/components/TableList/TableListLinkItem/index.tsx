"use client";

import { TableListLinkItemRecord } from "@/graphql/generated";
import { Icon } from "design-react-kit";
import Link from "next/link";

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

  return (
    <div className="row border-bottom m-0 p-0 py-2 w-100">
      <div className="col ps-0">
        <Link
          className="d-flex justify-content-between align-items-center text-decoration-none"
          href={getHref(link)}
          title={getTitle(link)}
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
          <Icon
            className="my-0"
            color="primary"
            icon="it-chevron-right"
            size="sm"
            title="Freccia a destra"
            padding
          />
        </Link>
      </div>
    </div>
  );
}
