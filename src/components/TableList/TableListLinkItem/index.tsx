import { TableListLinkItemRecord } from "@/graphql/generated";
import { Badge, Icon } from "design-react-kit";
import Link from "next/link";
import classNames from "classnames/bind";
import styles from "@/src/components/CardBadge/index.module.scss";
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getBadgeLabel = (body: any) => {
    if (body?.[0]?.__typename === "DataHeroRecord") {
      if (body[0].badge.label === "Nuovo") {
        return "nuovo";
      }
    }
    return "aggiornato";
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getBadge = (body: any) => {
    if (body?.[0]?.__typename === "DataHeroRecord") {
      return body[0].badge.label;
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
            {getBadge(link?.cmsPage?.body) && (
              <Badge
                className={cn("badge text-capitalize px-3 me-2", {
                  "lightgrey-bg-a3 text-primary":
                    getBadgeLabel(link?.cmsPage?.body) === "nuovo",
                  "neutral-1-bg-a2 text-dark":
                    getBadgeLabel(link?.cmsPage?.body) === "aggiornato",
                })}
              >
                {getBadge(link?.cmsPage?.body)}
              </Badge>
            )}
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
