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

  return (
    <div className="container-xxl">
      <div className={cn("row pt-4")}>
        {questionsRef.map((item, idx: number) => (
          <div className={"col-12"} key={idx}>
            <div className="row border-bottom m-0 p-0 py-2 w-100">
              <div className="col ps-0">
                <Link
                  className="d-flex justify-content-between align-items-center text-decoration-none"
                  href={`/faq/${item.slug}`}
                  title={item.title || ""}
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
        ))}
      </div>
    </div>
  );
}
