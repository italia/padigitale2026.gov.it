"use client";

import Link from "next/link";
import { TableListFaqRecord } from "@/graphql/generated";
import { Badge } from "design-react-kit";
import { Icon } from "design-react-kit";

import styles from "./index.module.scss";
import classNames from "classnames/bind";
const cn = classNames.bind(styles);

export function TableListFaq({ props }: { props: TableListFaqRecord }) {
  const { questionsRef } = props;

  if (
    !questionsRef ||
    !Array.isArray(questionsRef) ||
    questionsRef.length === 0
  ) {
    console.warn("TableListFaq: questionsRef is missing or empty");
    return null;
  }

  return (
    <div className="container-xxl">
      <div className={cn("row pt-4")}>
        {questionsRef.map((item, index) => {
          if (!item) return null;

          return (
            <div className={"col-12"} key={`faq-item-${item.id || index}`}>
              <div className="row border-bottom m-0 p-0 py-2 w-100">
                <div className="col ps-0">
                  <Link
                    className="d-flex justify-content-between align-items-center text-decoration-none"
                    href={`${item.slug}`}
                    title={item.title || ""}
                    key={`faq-link-${item.id || index}`}
                  >
                    <div>
                      <div
                        className="fw-bold text-decoration-underline mb-1"
                        style={{ fontSize: "1.125rem" }}
                      >
                        {item.title}
                      </div>

                      {item.category && (
                        <div className="text-secondary text-decoration-none text-transform-uppercase fw-semibold">
                          {item.category.label}
                        </div>
                      )}
                    </div>
                    <div className="d-flex align-items-center">
                      {item.badge && (
                        <Badge
                          className={cn("badge text-capitalize px-3 me-2", {
                            "lightgrey-bg-a3 text-primary":
                              item.badge.label === "Nuovo",
                            "neutral-1-bg-a2 text-dark":
                              item.badge.label === "aggiornato",
                          })}
                        >
                          {item.badge.label}
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
            </div>
          );
        })}
      </div>
    </div>
  );
}
