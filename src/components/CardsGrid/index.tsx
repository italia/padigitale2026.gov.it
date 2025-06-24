'use client'

import {
  CardsGridGenericRecord,
  CardsGridAttachmentRecord,
  CardsGridServiceRecord,
  CardsGridResourceRecord,
  CardsGridNewsRecord,
  CardsGridAnnouncementRecord,
  NewsRecord
} from "@/graphql/generated";

import styles from "./index.module.scss";
import classNames from "classnames/bind";
import Link from "next/link";
import {Col, Icon, Pager, Row} from "design-react-kit";
import {ElementType, Fragment, startTransition, useCallback, useEffect, useState} from "react";
import {
  PaginationItem,
  PaginationLink
} from "reactstrap";

import {
  genericCardLayoutEnum,
  CardGeneric,
} from "@/src/components/CardGeneric";
import {CardAttachment} from "@/src/components/CardAttachment";
import {CardResource} from "@/src/components/CardResource";
import {CardService} from "@/src/components/CardService";
import {
  CardAnnouncement,
  CardAnnouncementRecord,
  CardAnnouncementStatusType,
  CardAnnouncementLayout,
} from "@/src/components/CardAnnouncement";
import {newsCardLayoutEnum, CardNews} from "@/src/components/CardNews";
import {usePathname} from "next/navigation";
import {usePages} from "@/src/contexts/PagesContext";
import { fetchAnnouncements } from "@/src/app/actions";
import { Avviso } from "@/lib/salesforce";

const cn = classNames.bind(styles);

export function CardsGrid({
                            props,
                            hasSidebar = false,
                          }: {
  props:
    | CardsGridGenericRecord
    | CardsGridAttachmentRecord
    | CardsGridServiceRecord
    | CardsGridResourceRecord
    | CardsGridNewsRecord
    | CardsGridAnnouncementRecord;
  hasSidebar?: boolean;
}) {
  const allDatoObjects = usePages();
  const {__typename, id, sectionFields} = props;
  let title = null;
  if (
    typeof sectionFields !== "undefined" &&
    sectionFields &&
    typeof sectionFields.title !== "undefined"
  ) {
    title = sectionFields.title;
  }

  let singleCardsTitleTag = null;
  if (
    typeof sectionFields !== "undefined" &&
    sectionFields &&
    typeof sectionFields.singleCardsTitleTag !== "undefined"
  ) {
    singleCardsTitleTag = sectionFields.singleCardsTitleTag;
  }

  let description = null;
  if (
    typeof sectionFields !== "undefined" &&
    sectionFields &&
    typeof sectionFields.description !== "undefined"
  ) {
    description = sectionFields.description;
  }

  let button = null;
  if (
    typeof sectionFields !== "undefined" &&
    sectionFields &&
    typeof sectionFields.button !== "undefined"
  ) {
    button = sectionFields.button;
  }

  let alignment = null;
  if (
    typeof sectionFields !== "undefined" &&
    sectionFields &&
    typeof sectionFields.alignment !== "undefined"
  ) {
    alignment = sectionFields.alignment;
  }

  let columns = 1;
  if (
    typeof sectionFields !== "undefined" &&
    sectionFields &&
    typeof sectionFields.columns !== "undefined"
  ) {
    columns = parseInt(sectionFields.columns as string);
  }

  let backgroundColor = null;
  if (
    typeof sectionFields !== "undefined" &&
    sectionFields &&
    typeof sectionFields.backgroundColor !== "undefined"
  ) {
    backgroundColor = sectionFields.backgroundColor;
  }

  // let titleHtmlTag = null;
  // if (typeof sectionFields !== 'undefined' && sectionFields && typeof sectionFields.titleHtmlTag !== 'undefined') {
  //   titleHtmlTag = sectionFields.titleHtmlTag;
  // }

  let cardLayout = null;
  let cards = null;

  let news: NewsRecord[] = [];
  let newsSelection: string | null = null;

  const pathname = usePathname();

  const [currentPage, setCurrentPage] = useState<number>(1);

  const getPageFromHash = useCallback(() => {
    const hash = window?.location.hash?.substring(1);
    const params = new URLSearchParams(hash);

    if (params.get(`${id}-page`) === null) {
      return null;
    }

    const page = parseInt(params.get(`${id}-page`) || '1');
    return isNaN(page) ? 1 : page;
  }, [id]);

  // Effect: Update current page from hash after mount
  useEffect(() => {
    const handleHashChange = () => {
      const pageFromHash = getPageFromHash();
      if (pageFromHash) {
        setCurrentPage(pageFromHash);
        const hash = window?.location.hash?.substring(1);
        if (hash.includes(id)) {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }
      }
    };

    handleHashChange(); // Run on first mount
    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [getPageFromHash, id]);

  const createPageURL = (pageNumber: number, listItems: NewsRecord[], limit: number) => {
    if (pageNumber <= 1) {
      pageNumber = 1;
    }
    const maxPages = Math.ceil(listItems.length / limit);
    if (pageNumber > maxPages) {
      pageNumber = maxPages;
    }
    return `${pathname}#${id}-page=${pageNumber}`;
  };


  let resources = null;
  let borderOnTop = false;
  let announcements: CardAnnouncementRecord[] | null = null;
  const [fetchedAnnouncements, setAnnouncements] = useState<Avviso[] | null>(null);

  useEffect(() => {
    if (__typename === "CardsGridAnnouncementRecord") {
      startTransition(async () => {
        const updatedViews = await fetchAnnouncements(props)
        setAnnouncements(updatedViews)
      })
    }
  }, [props, __typename])

  if (__typename === "CardsGridAnnouncementRecord") {
    borderOnTop =
      typeof props.borderOnTop !== "undefined" ? props.borderOnTop : false;

    if(fetchedAnnouncements) {
      const today = new Date();
      announcements = fetchedAnnouncements.map((announcement: Avviso) => {
        // Parse start and end dates from the announcement
        const startDate = new Date(announcement.startDate);
        const endDate = new Date(announcement.endDate);
        
        // Calculate days difference between today and start date
        const diffTime = Math.abs(today.getTime() - startDate.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        // Show "Nuovo" badge if announcement was published within last 15 days
        const isNew = diffDays <= 15;

        // Calculate days difference between today and end date
        const diffTimeEnd = Math.abs(endDate.getTime() - today.getTime());
        const diffDaysEnd = Math.ceil(diffTimeEnd / (1000 * 60 * 60 * 24));
        // Show "In scadenza" badge if end date is in the future and within 15 days
        const isEnding = endDate >= today && diffDaysEnd <= 15;

        // Determine badge text with priority: "Nuovo" takes precedence over "In scadenza"
        let badgeText = undefined;
        if (isNew) {
          badgeText = "Nuovo";
        } else if (isEnding) {
          badgeText = "In scadenza";
        }
    
        return {
          __typename: "CardAnnouncementRecord",
          badge: badgeText,
          istituto: announcement.entePromotore,
          beneficiari: announcement.beneficiari.join(', '),
          stato: announcement.status === 'PUBBLICATO' ? CardAnnouncementStatusType.Aperto : CardAnnouncementStatusType.Chiuso,
          titolo: announcement.oggettoBando,
          dataDiPubblicazione: new Date(announcement.startDate).toLocaleDateString('it-IT', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          }),
          dataDiScadenza: new Date(announcement.endDate).toLocaleDateString('it-IT', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          }),
          href: `${announcement.url}?id=${announcement.id}`,
          target: "_blank",
        } as CardAnnouncementRecord;
      });
    }
  }

  if (__typename === "CardsGridGenericRecord") {
    cardLayout =
      typeof props.cardLayout !== "undefined" ? props.cardLayout : null;
    cards = typeof props.cards !== "undefined" ? props.cards : null;
  }

  if (
    __typename === "CardsGridAttachmentRecord" ||
    __typename === "CardsGridServiceRecord"
  ) {
    cards = typeof props.cards !== "undefined" ? props.cards : null;
  }

  if (__typename === "CardsGridResourceRecord") {
    resources = typeof props.resources !== "undefined" ? props.resources : null;
  }

  if (__typename === "CardsGridNewsRecord") {
    if (typeof props.news !== "undefined" && props.news.length) {
      news = props.news as NewsRecord[];
    }

    cardLayout =
      typeof props.cardLayout !== "undefined" ? props.cardLayout : newsCardLayoutEnum.clean;

    newsSelection = typeof props.newsSelection !== "undefined" ? props.newsSelection : null;

    if (!news.length) {
      if (allDatoObjects.news?.allNews) {
        news = allDatoObjects.news.allNews as NewsRecord[];
        if (newsSelection === 'latest_3') {
          news = news.slice(0, 3);
        } else if (newsSelection === 'latest_6') {
          news = news.slice(0, 6);
        }
      }
    }
  }

  const cardTitleTag: ElementType = (singleCardsTitleTag ||
    "h3") as ElementType;
  // const SectionTitleTag:ElementType = (titleHtmlTag || "h2") as ElementType;

  let colClasses = "";

  return (
    <div
      key={id}
      id={id}
      aria-labelledby={`section${id}`}
      className={cn(`${backgroundColor}`, {
        "wrapper py-5": !hasSidebar,
        "row pt-3": hasSidebar,
      })}
    >
      <div
        className={cn({
          "section-content": !hasSidebar,
          "col-12": hasSidebar,
        })}
      >
        <div
          className={cn({
            "container-xxl": !hasSidebar,
          })}
        >
          <div className={"row"}>
            <div className="col-12 pb-3">
              {title && (
                <h2
                  id={`section${id}`}
                  className={cn(
                    "mb-0 lh-sm",
                    alignment === "center" ? "text-center" : "text-start"
                  )}
                >
                  {title}
                </h2>
              )}
              {description && (
                <p
                  className={cn(
                    "font-sans-serif mt-3 mb-0",
                    alignment === "center" ? "text-center" : "text-start"
                  )}
                >
                  {description}
                </p>
              )}
            </div>
          </div>

          {announcements && (() => {
            if (columns === 1) {
              colClasses = "col-12";
            } else if (columns === 2) {
              colClasses = "col-12 col-md-6";
            } else if (columns === 3) {
              colClasses = "col-12 col-lg-4";
            } else if (columns === 4) {
              colClasses = "col-12 col-lg-3";
            }
            return (
              <div className={"row"}>
                {announcements.map((announcement, idx) => {
                  return (
                    <div
                      key={idx}
                      className={cn(
                        `${colClasses} d-flex flex-column justify-content-stretch`,
                        {
                          "pt-5": columns && columns === 1,
                          "pt-4": (columns && columns >= 2) || !columns,
                        }
                      )}
                    >
                      <CardAnnouncement
                        layout={
                          columns === 1
                            ? borderOnTop
                              ? CardAnnouncementLayout.large_with_border_top
                              : CardAnnouncementLayout.large
                            : borderOnTop
                              ? CardAnnouncementLayout.small_with_border_top
                              : CardAnnouncementLayout.small
                        }
                        TitleTag={cardTitleTag}
                        props={announcement}
                      />
                    </div>
                  );
                })}
              </div>
            )
          })() || ""}

          {resources && (() => {
            if (columns === 1) {
              colClasses = "col-12";
            } else if (columns === 2) {
              colClasses = "col-12 col-md-6";
            } else if (columns === 3) {
              colClasses = "col-12 col-lg-4";
            } else if (columns === 4) {
              colClasses = "col-12 col-lg-3";
            }
            return (
              <div className={"row"}>
                {resources.map((resource, idx) => {
                  return (
                    <div
                      key={idx}
                      className={`${colClasses} pt-4 d-flex flex-column justify-content-stretch`}
                    >
                      <CardResource TitleTag={cardTitleTag} props={resource}/>
                    </div>
                  );
                })}
              </div>
            )
          })() || ""}

          {news && news.length && (!newsSelection || newsSelection !== "paginated") && (() => {
            if (columns === 1) {
              colClasses = "col-12";
            } else if (columns === 2) {
              colClasses = "col-12 col-md-6";
            } else if (columns === 3) {
              colClasses = "col-12 col-lg-4";
            } else if (columns === 4) {
              colClasses = "col-12 col-lg-3";
            }

            return (
              <div className={"row h-100"} role={"list"}>
                {news.map((record, idx) => {
                  return (
                    <div
                      role={"listitem"}
                      key={idx}
                      className={`${colClasses} pt-4 d-flex flex-column justify-content-stretch`}
                    >
                      <CardNews
                        TitleTag={cardTitleTag}
                        cardLayout={
                          newsCardLayoutEnum[
                            (cardLayout ??
                              "bordered") as keyof typeof newsCardLayoutEnum
                            ]
                        }
                        props={record}
                        parentId={id}
                      />
                    </div>
                  );
                })}
              </div>
            )
          })() || ""}

          {news && news.length && (newsSelection && newsSelection === "paginated") && (() => {
            if (columns === 1) {
              colClasses = "col-12";
            } else if (columns === 2) {
              colClasses = "col-12 col-md-6";
            } else if (columns === 3) {
              colClasses = "col-12 col-lg-4";
            } else if (columns === 4) {
              colClasses = "col-12 col-lg-3";
            }

            const itemsPerPage = columns !== 3 ? 14 : 12;

            return (
              <>
                <div
                  role="region"
                  aria-label="Lista notizie"
                  aria-live="polite"
                >
                  <Row role={"list"} className={"h-100"}>
                    {news.map((newsRecord: NewsRecord, idx) => {
                      const startIndex = (currentPage - 1) * itemsPerPage;
                      const endIndex = currentPage * itemsPerPage;
                      const shouldHide = (idx < startIndex || idx >= endIndex);

                      if (shouldHide && news.length >= itemsPerPage) return null;

                      return (
                        <div
                          role={"listitem"}
                          key={idx}
                          className={`${colClasses} pt-4 d-flex flex-column justify-content-stretch`}
                        >
                          <CardNews
                            TitleTag={cardTitleTag}
                            cardLayout={
                              newsCardLayoutEnum[
                                (cardLayout ??
                                  "bordered") as keyof typeof newsCardLayoutEnum
                                ]
                            }
                            props={newsRecord}
                            parentId={id}
                          />
                        </div>
                      );
                    })}
                  </Row>
                </div>

                {news.length > itemsPerPage && (
                  <Col
                    className={cn("col-12 pt-5", {"d-flex justify-content-center": alignment === "center"})}>
                    <Pager aria-label="Naviga tra le pagine di questa lista di notizie"
                           role="navigation">
                      <PaginationItem disabled={currentPage <= 1}>
                        <PaginationLink
                          // onClick={(e) => {
                          //   e.preventDefault();
                          //   const newPage = currentPage - 1;
                          //   const url = createPageURL(newPage, news, itemsPerPage);
                          //   window.history.replaceState(null, "", url);
                          //   setCurrentPage(newPage);
                          // }}
                          href={createPageURL(currentPage - 1, news, itemsPerPage)}>
                          <span className="visually-hidden">Pagina precedente</span>
                          <Icon aria-hidden icon="it-chevron-left"/>
                        </PaginationLink>
                      </PaginationItem>
                      {Array.from({length: Math.ceil(news.length / itemsPerPage)}).map((_, pageIndex) => (
                        <PaginationItem key={pageIndex}>
                          <PaginationLink
                            aria-current={currentPage === pageIndex + 1 ? "page" : undefined}
                            aria-label={`Vai alla pagina ${pageIndex + 1} di questa lista di notizie`}
                            // onClick={(e) => {
                            //   e.preventDefault();
                            //   const newPage = pageIndex + 1;
                            //   const url = createPageURL(newPage, news, itemsPerPage);
                            //   window.history.replaceState(null, "", url);
                            //   setCurrentPage(newPage);
                            // }}
                            href={createPageURL(pageIndex + 1, news, itemsPerPage)}>
                            {pageIndex + 1}
                          </PaginationLink>
                        </PaginationItem>
                      ))}
                      <PaginationItem
                        disabled={currentPage >= Math.ceil(news.length / itemsPerPage)}>
                        <PaginationLink
                          // onClick={(e) => {
                          //   e.preventDefault();
                          //   const newPage = currentPage + 1;
                          //   const url = createPageURL(newPage, news, itemsPerPage);
                          //   window.history.replaceState(null, "", url);
                          //   setCurrentPage(newPage);
                          // }}
                          href={createPageURL(currentPage + 1, news, itemsPerPage)}>
                          <span className="visually-hidden">Pagina successiva</span>
                          <Icon aria-hidden icon="it-chevron-right"/>
                        </PaginationLink>
                      </PaginationItem>
                    </Pager>
                  </Col>
                )}
              </>
            )
          })() || ""}

          {cards !== null && (() => {
            if (columns === 1) {
              colClasses = "col-12";
            } else if (columns === 2) {
              colClasses = "col-12 col-md-6";
            } else if (columns === 3) {
              colClasses = "col-12 col-lg-4";
            } else if (columns === 4) {
              colClasses = "col-12 col-lg-3";
            }

            return (
              <div className={"row h-100"}>
                {cards.map((card, idx) => {
                  if (card.__typename === "CardGenericRecord") {
                    return (
                      <div
                        key={idx}
                        className={`${colClasses} pt-4 d-flex flex-column justify-content-stretch`}
                      >
                        <CardGeneric
                          TitleTag={cardTitleTag}
                          cardLayout={
                            genericCardLayoutEnum[
                              (cardLayout ??
                                "bordered") as keyof typeof genericCardLayoutEnum
                              ]
                          }
                          props={card}
                        />
                      </div>
                    );
                  } else if (card.__typename === "CardAttachmentRecord") {
                    return (
                      <div
                        key={idx}
                        className={`${colClasses} pt-4 d-flex flex-column justify-content-stretch`}
                      >
                        <CardAttachment TitleTag={cardTitleTag} props={card}/>
                      </div>
                    );
                  } else if (card.__typename === "CardServiceRecord") {
                    return (
                      <Fragment key={idx}>
                        {(idx === 0 || idx % 3 === 0) && (
                          <div className={"col-12"}>
                            <div className={"w-100 border-top-lg"}></div>
                            {" "}
                          </div>
                        )}
                        <div
                          className={cn(
                            "col-12 col-lg-4 d-flex flex-column pt-3 justify-content-stretch border-neutral-1-bg-a3",
                            {
                              "border-end-lg": (idx + 1) % 3 != 0,
                            }
                          )}
                        >
                          <CardService
                            customClass={"border-bottom border-bottom-lg-0"}
                            TitleTag={cardTitleTag}
                            props={card}
                          />
                        </div>
                        {cards.length === idx + 1 && (
                          <div className={"col-12"}>
                            <div className={"w-100 border-top-lg"}></div>
                            {" "}
                          </div>
                        )}
                      </Fragment>
                    );
                  }
                })}
              </div>
            )
          })() || ""}

          {button && (
            <div className={"row h-100"}>
              <div
                className={cn(
                  "col-12 pt-5",
                  alignment === "center" ? "text-center" : "text-start"
                )}
              >
                <Link
                  href={button.href || `/${button.cmsPage?.slug || ""}`}
                  className={"btn btn-outline-primary"}
                >
                  <span>{button.text}</span>
                  {button.icon && (
                    <Icon
                      className="my-0"
                      color="primary"
                      icon={button.icon}
                      size="sm"
                      title=""
                      padding
                    />
                  )}
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}