import Link from "next/link";
import { FaqRecord, TableListFaqRecord } from "@/graphql/generated";
import { Badge } from "design-react-kit";
import { Icon } from "design-react-kit";
import { usePageContentType } from "@/src/contexts/PageContentTypeContext";

import styles from "./index.module.scss";
import classNames from "classnames/bind";
const cn = classNames.bind(styles);

export function TableListFaq({
  props,
  noPadding = false,
}: {
  props: TableListFaqRecord;
  noPadding?: boolean;
}) {
  const { title, alignment, questionsRef, id } = props;
  const pageContentType = usePageContentType();
  const isSupportPage = pageContentType === "supporto";
  const TitleTag = isSupportPage ? "h3" : "h2";

  const getBadge = (item: FaqRecord) => {
    const createdAt = item._createdAt;
    const updatedAt = item._updatedAt;
    const now = new Date();
    const createdDate = new Date(createdAt);
    const updatedDate = new Date(updatedAt);

    // Badge "Nuovo" wins over "Aggiornato" (if both are true)

    // if createdDate is < of 60 days return "Nuovo"
    if (createdDate > new Date(now.getTime() - 60 * 24 * 60 * 60 * 1000)) {
      return "Nuovo";
    }

    // if updatedDate is < of 60 days return "Aggiornato"
    if (updatedDate > new Date(now.getTime() - 60 * 24 * 60 * 60 * 1000)) {
      return "Aggiornato";
    }

    return null;
  };

  return (
    <div
      className={cn("container-xxl px-md-4", { "my-5": !noPadding })}
      role="region"
      // aria-labelledby={`${id}-title`}
    >
      {title && (
        <TitleTag
          id={`${id}-title`}
          className={cn(
            "col-12 pb-4",
            isSupportPage ? "h3" : "h1",
            {
              "text-center": alignment === "center",
            }
          )}
        >
          {title}
        </TitleTag>
      )}
      <div
        role="list"
        aria-label="Lista domande frequenti"
        className={cn("row py-2")}
      >
        {!questionsRef ||
        !Array.isArray(questionsRef) ||
        questionsRef.length === 0 ? (
          <div
            role="region"
            className={cn("col-12", {
              "text-center": alignment === "center",
              "px-0": noPadding,
            })}
            aria-label="Nessuna domanda frequente disponibile"
          >
            <p>Non ci sono domande frequenti al momento.</p>
          </div>
        ) : (
          questionsRef.map((item, idx) => {
            if (!item) return null;

            return (
              <div
                role="listitem"
                className={cn("col-12", { "px-0": noPadding })}
                key={`faq-item-${item.id || idx}`}
                data-beneficiari={item.beneficiari
                  ?.map((b) =>
                    b.label
                      ?.toLowerCase()
                      .replace(/à/g, "a")
                      .replace(/è/g, "e")
                      .replace(/ì/g, "i")
                      .replace(/ò/g, "o")
                      .replace(/ù/g, "u")
                      .replace(/[^a-z0-9]+/g, "-")
                      .replace(/(^-|-$)/g, "")
                  )
                  .join(" ")}
              >
                <div className="row border-bottom m-0 p-0 py-3 w-100">
                  <div className="col ps-0">
                    <Link
                      prefetch={false}
                      className="d-flex justify-content-between align-items-center text-decoration-none"
                      href={`/${item.slug}`}
                      title={item.title || ""}
                      key={`faq-link-${item.id || idx}`}
                      aria-label={
                        item.category
                          ? `Categoria: ${item.category.label}`
                          : undefined
                      }
                    >
                      <div className="me-4">
                        <h3
                          className="fw-semibold text-decoration-underline mb-1 lh-base"
                          style={{ fontSize: "1.125rem", lineHeight: "1.556" }}
                        >
                          {item.title}
                        </h3>

                        {item.category &&
                          item.category.label === "Misure" &&
                          item.misura && (
                            <div className="text-secondary text-decoration-none text-transform-uppercase fw-semibold lh-base">
                              <span className="visually-hidden">Misura: </span>
                              {item.misura.label}
                            </div>
                          )}
                        {item.category && item.category.label !== "Misure" && (
                          <div className="text-secondary text-decoration-none text-transform-uppercase fw-semibold lh-base">
                            <span className="visually-hidden">Categoria: </span>
                            {item.category.label}
                          </div>
                        )}
                      </div>
                      <div className="d-flex align-items-center">
                        {(() => {
                          const badge = getBadge(item);
                          return (
                            badge && (
                              <Badge
                                className={cn(
                                  "badge me-2",
                                  {
                                    "lightgrey-bg-a3 text-primary":
                                      badge === "Nuovo",
                                    "neutral-1-bg-a2 text-dark":
                                      badge === "Aggiornato",
                                  }
                                )}
                                aria-label={`${badge}`}
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
                          aria-hidden="true"
                          title="Freccia a destra"
                          padding
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
