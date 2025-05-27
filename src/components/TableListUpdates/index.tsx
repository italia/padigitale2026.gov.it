"use client";

import {ButtonRecord, TableListUpdateRecord, UpdateRecord} from "@/graphql/generated";
import Link from "next/link";
import {
  // Badge,
  Col,
  Container,
  Icon,
  Pager,
  Row
} from "design-react-kit";
import {
  PaginationItem,
  PaginationLink
} from "reactstrap";

import styles from "./index.module.scss";
import classNames from "classnames/bind";
import {usePages} from "@/src/contexts/PagesContext";
// import {HTMLAttributeAnchorTarget} from "react";
import {usePathname} from "next/navigation";
import {useCallback, useEffect, useState} from "react";

const cn = classNames.bind(styles);

export function TableListUpdates({props}: { props: TableListUpdateRecord }) {
  const {
    alignment,
    button,
    // filterByInstitute,
    id,
    showLastItems,
    title
  } = props;

  const itemsPerPage = 12;
  const pathname = usePathname();
  const [currentPage, setCurrentPage] = useState<number>(1);
  let updates = null;

  const getPageFromHash = useCallback(() => {
    const hash = window?.location.hash?.substring(1);
    const params = new URLSearchParams(hash);
    const page = parseInt(params.get(`${id}-page`) || '1');
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
  if (!showLastItems) {
    if (allDatoObjects?.updates) {
      updates = allDatoObjects.updates?.allUpdates;

      // Just for test
      if (updates.length <= 69) {
        const elem = updates[0];
        for (let i = updates.length; i <= 69; i++) {
          const elemCopy = {...elem};
          elemCopy.id = elemCopy.id + i;
          elemCopy.title = elemCopy.title + " " + i;
          updates.push(elemCopy);
        }
      }
      // remove before commit

    }
  }

  const getButtonHref = (button: ButtonRecord) => {
    if (button?.href) return `${button.href}`;
    if (button?.cmsPage?.slug) return `/${button.cmsPage.slug}`;
    return "";
  };

  const getButtonTitle = (button: ButtonRecord) => {
    if (button?.href) return button.text || "";
    if (button?.cmsPage?.title) return `Vai alla pagina ${button.cmsPage.title}`;
    return "";
  };

  return (
    <Container
      id={id}
      fluid
      className="container-xxl"
      role="region"
      aria-labelledby={`${id}-title`}
    >
      <Row className="pt-4">
        <Col>
          <h2
            id={`${id}-title`}
            className={cn(
              "col-12 h-1 pb-4",
              {
                "text-center": alignment === "center",
                "visually-hidden": !title
              }
              )}>
            {title ?? 'Ultimi aggiornamenti'}
          </h2>
        </Col>
      </Row>

      <Row className="border-bottom border-2 py-4 px-0 mx-0" aria-hidden={true}>
        <Col className="col-12 col-sm-2 ps-0">
          <span className="h6 text-secondary">Data</span>
        </Col>
        <Col className="col-12 col-sm-10 ps-0">
          <span className="h6 text-secondary">Descrizione</span>
        </Col>
      </Row>
      {updates && (
        <div role="region" aria-label="Lista aggiornamenti" aria-live="polite">
          {(updates as UpdateRecord[]).map((update: UpdateRecord, itemIndex) => {
            const {cta, customUpdateDate, id: updateId, title: itemTitle} = update;
            const shouldHide =
              !showLastItems &&
              (itemIndex < (currentPage - 1) * itemsPerPage || itemIndex >= currentPage * itemsPerPage);

            if (shouldHide) return null;

            return (
              <div
                key={updateId}
                role="listitem"
                id={updateId}
                className="row border-bottom m-0 p-0 py-2 w-100">
                {customUpdateDate && (
                  <div className="col-12 col-sm-2 ps-0">
                    <span className="visually-hidden">Data di aggiornamento:</span>
                    <time>
                      {new Intl.DateTimeFormat("it-IT", {
                        timeZone: "Europe/Rome",
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      }).format(Date.parse(customUpdateDate))}
                    </time>
                  </div>
                )}
                <div className={`col-12 ${customUpdateDate ? "col-sm-10" : "col-sm-12"} ps-0`}>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="me-3">
                      <span className="visually-hidden">Descrizione dell&apos;aggiornamento:</span>
                      {itemTitle}
                    </span>
                    <Link
                      className="fw-bold text-nowrap"
                      href={cta?.href ? `/${cta.href}` : cta?.cmsPage ? `/${cta.cmsPage.slug}` : ""}
                      aria-label={`Vai alla pagina aggiornata di ${itemTitle}`}
                      target={"_self"}
                    >
                      {cta?.href && <span className="small">Vai alla risorsa aggiornata</span>}
                      {cta?.cmsPage && cta?.text && <span className="small">{cta.text}</span>}
                      {cta?.cmsPage && !cta?.text && cta?.cmsPage?.title && (
                        <span className="small">{cta.cmsPage.title}</span>
                      )}
                      {cta?.cmsPage && !cta?.text && !cta?.cmsPage?.title && (
                        <span className="small">
                      {cta.cmsPage.__typename === "PageRecord" && "Vai alla pagina aggiornata"}
                    </span>
                      )}
                      <Icon
                        className="my-0"
                        color="primary"
                        icon={cta?.target === "_self" ? "it-arrow-right" : "it-external-link"}
                        size="sm"
                        aria-hidden
                        padding
                      />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}



      {(!updates || updates?.length <= 0) && (
        <Row role="region" aria-label="Nessun aggiornamento disponibile">
          <Col>
            <h3>Non ci sono aggiornamenti al momento.</h3>
            <p>
              Iscriviti alla newsletter per ricevere aggiornamenti sulle opportunità in arrivo.
            </p>
          </Col>
        </Row>
      )}

      {!showLastItems && updates && updates?.length > itemsPerPage && (
        <Row>
          <Col className={cn("col-12 pt-5", {"d-flex justify-content-center": alignment === "center"})}>
            <Pager aria-label="Naviga tra le pagine della lista aggiornamenti">
              <ul className="pagination" aria-label={"Paginazione"}>
                <PaginationItem disabled={currentPage <= 1}>
                  <PaginationLink href={createPageURL(currentPage - 1)}>
                    <span className="visually-hidden">Pagina precedente</span>
                    <Icon aria-hidden icon="it-chevron-left"/>
                  </PaginationLink>
                </PaginationItem>
                {Array.from({length: Math.ceil(updates.length / itemsPerPage)}).map((_, pageIndex) => (
                  <PaginationItem key={pageIndex}>
                    <PaginationLink
                      aria-current={currentPage === pageIndex + 1 ? "page" : undefined}
                      aria-label={`Vai alla pagina ${pageIndex + 1}`}
                      href={createPageURL(pageIndex + 1)}
                    >
                      {pageIndex + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem disabled={currentPage >= Math.ceil(updates.length / itemsPerPage)}>
                  <PaginationLink href={createPageURL(currentPage + 1)}>
                    <span className="visually-hidden">Pagina successiva</span>
                    <Icon aria-hidden icon="it-chevron-right"/>
                  </PaginationLink>
                </PaginationItem>
              </ul>
            </Pager>
          </Col>
        </Row>
      )}

      {button && (
        <Row>
          <Col className={cn("col-12 pt-5", {"text-center": alignment === "center"})}>
            <Link
              className="btn btn-sm btn-outline-primary"
              href={getButtonHref(button)}
              target={button.target || "_self"}
              title={getButtonTitle(button)}
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
    </Container>
  );
}
