"use client";

import { TableListItemRecord } from "@/graphql/generated";
import { Icon } from "design-react-kit";
import Link from "next/link";

export function TableListItem({ props }: { props: TableListItemRecord }) {
  const { date, title, link } = props;

  const getHref = (link: TableListItemRecord["link"]) => {
    // href link > cms page
    if (link?.href) {
      return `${link.href}`;
    }
    if (link?.cmsPage?.slug) {
      return `/${link.cmsPage.slug}`;
    }
    return "";
  };

  const getTitle = (link: TableListItemRecord["link"]) => {
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
      {date && (
        <div className="col-12 col-sm-2 ps-0">
          <time>
            {new Intl.DateTimeFormat("it-IT", {
              timeZone: "Europe/Rome",
              day: "2-digit",
              month: "long",
              year: "numeric",
            }).format(Date.parse(date))}
          </time>
        </div>
      )}
      <div className={`col-12 ${date ? "col-sm-10" : "col-sm-12"} ps-0`}>
        <div className="d-flex justify-content-between align-items-center">
          <span className="me-3">{title}</span>
          <Link
            className="fw-bold text-nowrap"
            href={getHref(link)}
            title={getTitle(link)}
          >
            <span style={{ fontSize: "0.875rem" }}>{link?.text}</span>
            {link?.icon && (
              <Icon
                className="my-0"
                color="primary"
                icon={link.icon}
                size="sm"
                title="Freccia a destra"
                padding
              />
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}
