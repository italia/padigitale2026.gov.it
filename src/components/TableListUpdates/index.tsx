"use client";

import {
  ButtonRecord,
  TableListUpdateRecord,
  UpdateRecord,
} from "@/graphql/generated";
import Link from "next/link";
import { Col, Icon, Pager, Row } from "design-react-kit";
import { PaginationItem, PaginationLink } from "reactstrap";

import styles from "./index.module.scss";
import classNames from "classnames/bind";
import { usePages } from "@/src/contexts/PagesContext";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const cn = classNames.bind(styles);

export function TableListUpdates({
  props,
  hasSidebar = false,
}: {
  props: TableListUpdateRecord;
  hasSidebar?: boolean;
}) {
  const { alignment, button, filterByInstitute, id, showLastItems, title } =
    props;

  const itemsPerPage = 12;
  const pathname = usePathname();
  const [currentPage, setCurrentPage] = useState<number>(1);

  let updates: UpdateRecord[] = [];

  const getPageFromHash = useCallback(() => {
    const hash = window?.location.hash?.substring(1);
    const params = new URLSearchParams(hash);
    const page = parseInt(params.get(`${id}-page`) || "1");
    return isNaN(page) ? 1 : page;
  }, [id]);

  // Effect: Update current page from hash after mount
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getPageFromHash());
    };

    handleHashChange(); // Run on first mount
    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [getPageFromHash]);

  const createPageURL = (pageNumber: number) => {
    if (pageNumber <= 1) {
      pageNumber = 1;
    }
    const maxPages = Math.ceil(updates.length / itemsPerPage);
    if (pageNumber > maxPages) {
      pageNumber = maxPages;
    }
    return `${pathname}#${id}-page=${pageNumber}`;
  };

  const allDatoObjects = usePages();
  if (allDatoObjects.updates?.allUpdates) {
    //uncomment before commit
    updates = allDatoObjects.updates.allUpdates as UpdateRecord[];
    // Just for testing purposes
    // if (allDatoObjects.updates.allUpdates.length <= 69) {
    //   const elem = allDatoObjects.updates.allUpdates[0];
    //   for (let i = 0; i <= 69; i++) {
    //     const elemCopy = {...elem};
    //     elemCopy.id = elemCopy.id + (showLastItems ? 'a' : 'b') + i;
    //     elemCopy.title = elemCopy.title + " " + i;
    //     updates.push(elemCopy);
    //   }
    // }
    // remove before commit
  }

  if (showLastItems) {
    if (updates.length > 6) {
      updates = updates.slice(0, 6);
    }
  }

  const filtersIds: string[] =
    filterByInstitute && filterByInstitute.length
      ? filterByInstitute.map((i) => i.id)
      : [];
  if (filtersIds.length) {
    updates = updates.filter((update) => {
      let found = false;
      if (update.beneficiari && update.beneficiari.length) {
        update.beneficiari.forEach((b) => {
          if (filtersIds.includes(b.id)) {
            found = true;
          }
        });
      }
      return found;
    });
  }

  const getButtonHref = (button: ButtonRecord) => {
    if (button?.href) return `${button.href}`;
    if (button?.cmsPage?.slug) return `/${button.cmsPage.slug}`;
    return "";
  };

  const getButtonTitle = (button: ButtonRecord) => {
    if (button?.href) return button.text || "";
    if (button?.cmsPage?.title)
      return `Vai alla pagina ${button.cmsPage.title}`;
    return "";
  };

  return (
    <div
      id={id}
      className={cn("pb-5", {
        "container-xxl container-fluid": !hasSidebar,
      })}
      role="region"
      aria-labelledby={`${id}-title`}
    >
      <Row className="pt-4">
        <Col>
          <h2
            id={`${id}-title`}
            className={cn("col-12 h1 pb-4", {
              "text-center": alignment === "center",
              "visually-hidden": !title || title.length === 0,
            })}
          >
            {title && title.length > 0 ? title : "Ultimi aggiornamenti"}
          </h2>
        </Col>
      </Row>
      {updates && (
        <>
          <div className={cn("tableList")}>
            <div className={cn("tableListInner")}>
              {updates && updates.length > 0 && (
                <Row
                  className="border-bottom border-2 py-4 px-0 mx-0"
                  aria-hidden={true}
                >
                  <Col className="col-3 col-md-2 ps-0">
                    <span className="h6 text-secondary">Data</span>
                  </Col>
                  <Col className="col-9 col-md-10 ps-0">
                    <span className="h6 text-secondary">Descrizione</span>
                  </Col>
                </Row>
              )}
              <div
                role="region"
                aria-label="Lista aggiornamenti"
                aria-live="polite"
              >
                <div role="list">
                  {(updates as UpdateRecord[]).map(
                    (update: UpdateRecord, itemIndex) => {
                      const {
                        cta,
                        customUpdateDate,
                        id: updateId,
                        title: itemTitle,
                      } = update;
                      let shouldHide =
                        !showLastItems &&
                        (itemIndex < (currentPage - 1) * itemsPerPage ||
                          itemIndex >= currentPage * itemsPerPage);

                      if (showLastItems) {
                        shouldHide = false;
                      }

                      if (shouldHide) return null;

                      return (
                        <div
                          key={updateId}
                          role="listitem"
                          className="row border-bottom m-0 p-0 py-3 w-100 flex-nowrap"
                        >
                          {customUpdateDate && (
                            <div className="col-3 col-md-2 ps-0">
                              <span className="visually-hidden">
                                Data di aggiornamento:
                              </span>
                              <time dateTime={customUpdateDate}>
                                {new Intl.DateTimeFormat("it-IT", {
                                  timeZone: "Europe/Rome",
                                  day: "2-digit",
                                  month: "long",
                                  year: "numeric",
                                }).format(Date.parse(customUpdateDate))}
                              </time>
                            </div>
                          )}
                          <div
                            className={`${
                              customUpdateDate ? "col-9 col-md-10" : "col-12"
                            } ps-0`}
                          >
                            <div className="d-flex justify-content-between align-items-center">
                              <span className="me-3">
                                <span className="visually-hidden">
                                  Descrizione dell&apos;aggiornamento:
                                </span>
                                {itemTitle}
                              </span>
                              {(() => {
                                const buttonHref = getButtonHref(
                                  cta as ButtonRecord,
                                );

                                return buttonHref.length > 0 ? (
                                  <Link
                                    prefetch={false}
                                    className="fw-semibold text-nowrap"
                                    href={buttonHref}
                                    aria-label={cta?.text || ""}
                                    target={"_self"}
                                  >
                                    <span className="small">{cta?.text}</span>
                                    {cta?.icon && (
                                      <Icon
                                        className="my-0"
                                        color="primary"
                                        icon={cta.icon}
                                        size="sm"
                                        aria-hidden
                                        padding
                                      />
                                    )}
                                  </Link>
                                ) : null;
                              })()}
                            </div>
                          </div>
                        </div>
                      );
                    },
                  )}
                </div>
              </div>
            </div>
          </div>
          {!showLastItems && updates?.length > itemsPerPage && (
            <Row>
              <Col
                className={cn("col-12 pt-5", {
                  "d-flex justify-content-center": alignment === "center",
                })}
              >
                <Pager aria-label="Naviga tra le pagine della lista aggiornamenti">
                  <PaginationItem disabled={currentPage <= 1}>
                    <PaginationLink href={createPageURL(currentPage - 1)}>
                      <span className="visually-hidden">Pagina precedente</span>
                      <Icon aria-hidden icon="it-chevron-left" />
                    </PaginationLink>
                  </PaginationItem>
                  {Array.from({
                    length: Math.ceil(updates.length / itemsPerPage),
                  }).map((_, pageIndex) => (
                    <PaginationItem key={pageIndex}>
                      <PaginationLink
                        aria-current={
                          currentPage === pageIndex + 1 ? "page" : undefined
                        }
                        aria-label={`Vai alla pagina ${pageIndex + 1}`}
                        href={createPageURL(pageIndex + 1)}
                      >
                        {pageIndex + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  <PaginationItem
                    disabled={
                      currentPage >= Math.ceil(updates.length / itemsPerPage)
                    }
                  >
                    <PaginationLink href={createPageURL(currentPage + 1)}>
                      <span className="visually-hidden">Pagina successiva</span>
                      <Icon aria-hidden icon="it-chevron-right" />
                    </PaginationLink>
                  </PaginationItem>
                </Pager>
              </Col>
            </Row>
          )}
        </>
      )}

      {(!updates || updates?.length <= 0) && (
        <Row role="region" aria-label="Nessun aggiornamento disponibile">
          <Col className={cn({ "text-center": alignment === "center" })}>
            <p>
              <strong>Non ci sono aggiornamenti al momento.</strong> <br />
              <Link prefetch={false} href={"/novita/newsletter"}>
                Iscriviti alla newsletter
              </Link>{" "}
              per ricevere aggiornamenti sulle opportunità in arrivo.
            </p>
          </Col>
        </Row>
      )}

      {button && updates && updates.length > 0 && (
        <Row>
          <Col
            className={cn("col-12 pt-5", {
              "text-center": alignment === "center",
            })}
          >
            <Link
              prefetch={false}
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
                  padding
                />
              )}
            </Link>
          </Col>
        </Row>
      )}
    </div>
  );
}
