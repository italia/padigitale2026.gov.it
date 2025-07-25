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
    <div role="listitem" className="row border-bottom m-0 p-0 py-3 w-100">
      {date && (
        <div className="col-12 col-sm-2 ps-0">
          <span className="visually-hidden">Data: </span>
          <time dateTime={date}>
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
            prefetch={false}
            className="fw-semibold text-nowrap d-flex align-items-center"
            href={getHref(link)}
            title={getTitle(link)}
            aria-label={
              date
                ? `Data: ${new Intl.DateTimeFormat("it-IT", {
                    timeZone: "Europe/Rome",
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  }).format(Date.parse(date))}`
                : undefined
            }
          >
            <h3
              className="p-0 m-0"
              style={{ fontSize: "0.875rem", lineHeight: "1.556" }}
            >
              {link?.text}
            </h3>
            {link?.icon && (
              <Icon
                className="my-0"
                color="primary"
                icon={link.icon}
                size="sm"
                aria-hidden="true"
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
