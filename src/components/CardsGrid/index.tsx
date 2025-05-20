"use client";

import {
  CardsGridGenericRecord,
  CardsGridAttachmentRecord,
  CardsGridServiceRecord,
  CardsGridResourceRecord,
  CardsGridNewsRecord,
  CardsGridAnnouncementRecord
} from "@/graphql/generated";

import styles from "./index.module.scss";
import classNames from "classnames/bind";
import Link from "next/link";
import {Icon} from "design-react-kit";
import {ElementType, Fragment} from "react";

import {genericCardLayoutEnum, CardGeneric} from "@/src/components/CardGeneric";
import {CardAttachment} from "@/src/components/CardAttachment";
import {CardResource} from "@/src/components/CardResource";
import {CardService} from "@/src/components/CardService";
import {CardAnnouncement,CardAnnouncementRecord, CardAnnouncementStatusType, CardAnnouncementLayout} from "@/src/components/CardAnnouncement";
import {newsCardLayoutEnum, CardNews} from "@/src/components/CardNews";

const cn = classNames.bind(styles);

export function CardsGrid({props, hasSidebar = false}: {
  props: CardsGridGenericRecord | CardsGridAttachmentRecord | CardsGridServiceRecord | CardsGridResourceRecord | CardsGridNewsRecord | CardsGridAnnouncementRecord;
  hasSidebar?: boolean;
}) {

  const {__typename, id, sectionFields} = props;
  let title = null;
  if (typeof sectionFields !== 'undefined' && sectionFields && typeof sectionFields.title !== 'undefined') {
    title = sectionFields.title;
  }

  let singleCardsTitleTag = null;
  if (typeof sectionFields !== 'undefined' && sectionFields && typeof sectionFields.singleCardsTitleTag !== 'undefined') {
    singleCardsTitleTag = sectionFields.singleCardsTitleTag;
  }

  let description = null;
  if (typeof sectionFields !== 'undefined' && sectionFields && typeof sectionFields.description !== 'undefined') {
    description = sectionFields.description;
  }

  let button = null;
  if (typeof sectionFields !== 'undefined' && sectionFields && typeof sectionFields.button !== 'undefined') {
    button = sectionFields.button;
  }

  let alignment = null;
  if (typeof sectionFields !== 'undefined' && sectionFields && typeof sectionFields.alignment !== 'undefined') {
    alignment = sectionFields.alignment;
  }

  let columns = null;
  if (typeof sectionFields !== 'undefined' && sectionFields && typeof sectionFields.columns !== 'undefined') {
    columns = sectionFields.columns;
  }

  let backgroundColor = null;
  if (typeof sectionFields !== 'undefined' && sectionFields && typeof sectionFields.backgroundColor !== 'undefined') {
    backgroundColor = sectionFields.backgroundColor;
  }

  let titleHtmlTag = null;
  if (typeof sectionFields !== 'undefined' && sectionFields && typeof sectionFields.titleHtmlTag !== 'undefined') {
    titleHtmlTag = sectionFields.titleHtmlTag;
  }

  let cardLayout = null;
  let cards = null;
  let news = null;
  let resources = null;
  let announcements: CardAnnouncementRecord[]|null = null;
  let borderOnTop = false;

  if (__typename === 'CardsGridAnnouncementRecord') {
    borderOnTop = (typeof props.borderOnTop !== 'undefined') ? props.borderOnTop : false;
    announcements = [];
    if (columns && parseInt(columns) === 3) {
      announcements.push({
        __typename: 'CardAnnouncementRecord',
        badge: 'Nuovo',
        istituto: 'Dipartimento della funzione pubblica',
        beneficiari: 'ASL, Province, Città Metropolitane',
        stato: CardAnnouncementStatusType.Aperto,
        titolo: 'Avviso Misura 2.2.3 "Digitalizzazione delle procedure (SUAP e SUE)"',
        dataDiPubblicazione: '2 febbraio 2025',
        dataDiScadenza: '28 marzo 2025',
        href: '',
        target: '_blank',
      } as CardAnnouncementRecord);

      announcements.push({
        __typename: 'CardAnnouncementRecord',
        badge: 'Nuovo',
        istituto: 'Dipartimento della funzione pubblica',
        beneficiari: 'Province',
        stato: CardAnnouncementStatusType.Aperto,
        titolo: '2.2.3 "Digitalizzazione delle procedure (SUAP e SUE)" - Enti Terzi - Regioni',
        dataDiPubblicazione: '2 febbraio 2025',
        dataDiScadenza: '22 marzo 2025',
        href: '',
        target: '_self',
      } as CardAnnouncementRecord);

      announcements.push({
        __typename: 'CardAnnouncementRecord',
        badge: 'Nuovo',
        istituto: 'Dipartimento per la trasformazione digitale',
        beneficiari: 'Comuni',
        stato: CardAnnouncementStatusType.Aperto,
        titolo: 'Avviso Misura 2.2.3 "Digitalizzazione delle procedure (SUAP e SUE)"',
        dataDiPubblicazione: '5 gennaio 2025',
        dataDiScadenza: '20 marzo 2025',
        href: '',
        target: '_self',
      } as CardAnnouncementRecord);
    }
    else {
      announcements.push({
        __typename: 'CardAnnouncementRecord',
        badge: 'Nuovo',
        istituto: 'Dipartimento della funzione pubblica',
        beneficiari: 'Comuni, ASL',
        stato: CardAnnouncementStatusType.Aperto,
        titolo: 'Avviso Misura 2.2.3 "Digitalizzazione delle procedure (SUAP e SUE)" -Enti Terzi - Comuni',
        dataDiPubblicazione: '4 febbraio 2025',
        dataDiScadenza: '28 aprile 2025',
        href: '',
        target: '_self',
      } as CardAnnouncementRecord);
      announcements.push({
        __typename: 'CardAnnouncementRecord',
        badge: 'Nuovo',
        istituto: 'Dipartimento della funzione pubblica',
        beneficiari: 'Comuni, ASL, Regioni e province autonome, Città metropolitane',
        stato: CardAnnouncementStatusType.Aperto,
        titolo: 'Avviso Misura 2.2.3 "Digitalizzazione delle procedure (SUAP e SUE)" Comuni - Seconda edizione',
        dataDiPubblicazione: '10 gennaio 2025',
        dataDiScadenza: '15 aprile  2025',
        href: '',
        target: '_self',
      } as CardAnnouncementRecord);
      announcements.push({
        __typename: 'CardAnnouncementRecord',
        badge: 'Nuovo',
        istituto: 'Dipartimento per la trasformazione digitale',
        beneficiari: 'Comuni, ASL, Regioni e province autonome, Città metropolitane',
        stato: CardAnnouncementStatusType.Aperto,
        titolo: 'Avviso Investimento 1.2 “Abilitazione al Cloud per le PA Locali ” Comuni settembre 2024',
        dataDiPubblicazione: '9 gennaio 2025',
        dataDiScadenza: '20 marzo 2025',
        href: '',
        target: '_self',
      } as CardAnnouncementRecord);
    }

  }

  if (__typename === 'CardsGridGenericRecord') {
    cardLayout = typeof props.cardLayout !== 'undefined' ? props.cardLayout : null;
    cards = typeof props.cards !== 'undefined' ? props.cards : null;
  }

  if (__typename === 'CardsGridAttachmentRecord' || __typename === 'CardsGridServiceRecord') {
    cards = typeof props.cards !== 'undefined' ? props.cards : null;
  }

  if (__typename === 'CardsGridResourceRecord') {
    resources = typeof props.resources !== 'undefined' ? props.resources : null;
  }

  if (__typename === 'CardsGridNewsRecord') {
    news = typeof props.news !== 'undefined' ? props.news : null;
  }

  const cardTitleTag:ElementType = (singleCardsTitleTag || "h3") as ElementType;
  const SectionTitleTag:ElementType = (titleHtmlTag || "h2") as ElementType;

  return (
    <div key={id}
         aria-labelledby={`section${id}`}
         className={cn(
      `${backgroundColor}`,
      {
        "wrapper py-5": !hasSidebar,
        "row pt-3": hasSidebar,
      }
    )}>
      <div className={cn(
        {
          "section-content": !hasSidebar,
          "col-12": hasSidebar,
        }
      )}>
        <div className={cn(
          {
            "container-xxl": !hasSidebar,
          }
        )}>
          <div className={"row"}>
            <div className="col-12 pb-3">
              {title && (
                <SectionTitleTag
                  id={`section${id}`}
                  className={cn(
                    "mb-0 fs-2 lh-sm",
                    alignment === "center" ? "text-center" : "text-start"
                  )}>
                  {title}
                </SectionTitleTag>
              )}
              {description && (
                <p
                  className={cn(
                    "font-sans-serif mt-3 mb-0",
                    alignment === "center" ? "text-center" : "text-start"
                  )}>
                  {description}
                </p>
              )}
            </div>
          </div>

          {announcements && (
            <div className={"row"}>
              {announcements.map((announcement, idx) => {
                let colClasses = "";
                const intColumns = (columns && parseInt(columns)) ?? 1;
                if (intColumns === 1) {
                  colClasses = "col-12";
                } else if (intColumns === 2) {
                  colClasses = "col-12 col-md-6";
                } else if (intColumns === 3) {
                  colClasses = "col-12 col-lg-4";
                } else if (intColumns === 4) {
                  colClasses = "col-12 col-lg-3";
                }
                return (
                  <div
                    key={idx}
                    className={cn(
                      `${colClasses} d-flex flex-column justify-content-stretch`,
                      {
                        "pt-5": intColumns && intColumns === 1,
                        "pt-4": (intColumns && intColumns >= 2) || !intColumns
                      }
                    )}>
                    <CardAnnouncement
                      layout={
                        intColumns === 1 ? (borderOnTop ? CardAnnouncementLayout.large_with_border_top : CardAnnouncementLayout.large) : (borderOnTop ? CardAnnouncementLayout.small_with_border_top : CardAnnouncementLayout.small)
                      }
                      TitleTag={cardTitleTag}
                      props={announcement}
                    />
                  </div>
                );
              })}
            </div>
          )}

          {resources && (
            <div className={"row"}>
              {resources.map((resource, idx) => {
                let colClasses = "";
                const intColumns = (columns && parseInt(columns)) ?? 1;
                if (intColumns === 1) {
                  colClasses = "col-12";
                } else if (intColumns === 2) {
                  colClasses = "col-12 col-md-6";
                } else if (intColumns === 3) {
                  colClasses = "col-12 col-lg-4";
                } else if (intColumns === 4) {
                  colClasses = "col-12 col-lg-3";
                }
                return (
                  <div
                    key={idx}
                    className={`${colClasses} pt-4 d-flex flex-column justify-content-stretch`}>
                    <CardResource
                      TitleTag={cardTitleTag}
                      props={resource}
                    />
                  </div>
                );
              })}
            </div>
          )}
          {news && (
            <div className={"row h-100"}>
              {news.map((record, idx) => {
                let colClasses = "";
                const intColumns = (columns && parseInt(columns)) ?? 1;
                if (intColumns === 1) {
                  colClasses = "col-12";
                } else if (intColumns === 2) {
                  colClasses = "col-12 col-md-6";
                } else if (intColumns === 3) {
                  colClasses = "col-12 col-lg-4";
                } else if (intColumns === 4) {
                  colClasses = "col-12 col-lg-3";
                }
                return (
                  <div
                    key={idx}
                    className={`${colClasses} pt-4 d-flex flex-column justify-content-stretch`}>
                    <CardNews
                      TitleTag={cardTitleTag}
                      cardLayout={newsCardLayoutEnum.clean}
                      props={record}
                    />
                  </div>
                );
              })}
            </div>
          )}
          {cards !== null && (
            <div className={"row h-100"}>
              {cards.map((card, idx) => {
                // console.log(`cards for ${__typename}`, cards);
                let colClasses = "";
                const intColumns = (columns && parseInt(columns)) ?? 1;
                if (intColumns === 1) {
                  colClasses = "col-12";
                } else if (intColumns === 2) {
                  colClasses = "col-12 col-md-6";
                } else if (intColumns === 3) {
                  colClasses = "col-12 col-lg-4";
                } else if (intColumns === 4) {
                  colClasses = "col-12 col-lg-3";
                }
                if (card.__typename === 'CardGenericRecord') {
                  return (
                    <div
                      key={idx}
                      className={`${colClasses} pt-4 d-flex flex-column justify-content-stretch`}>
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
                }
                else if (card.__typename === 'CardAttachmentRecord') {
                  // if (intColumns === 1) {
                  //   colClasses = "col-12 col-lg-8";
                  // }
                  return (
                    <div
                      key={idx}
                      className={`${colClasses} pt-4 d-flex flex-column justify-content-stretch`}>
                      <CardAttachment
                        TitleTag={cardTitleTag}
                        props={card}
                      />
                    </div>
                  );
                }
                else if (card.__typename === 'CardServiceRecord') {
                  return (
                    <Fragment key={idx}>
                      {(idx === 0 || (idx % 3) === 0) && (
                        <div className={"col-12"}><div className={"w-100 border-top-lg"}></div> </div>
                      )}
                      <div
                        className={cn(
                          "col-12 col-lg-4 d-flex flex-column pt-3 justify-content-stretch border-neutral-1-bg-a3",
                          {
                            "border-end-lg": (idx + 1) % 3 != 0
                          }
                        )}>
                        <CardService
                          customClass={"border-bottom border-bottom-lg-0"}
                          TitleTag={cardTitleTag}
                          props={card}
                        />
                      </div>
                      {(cards.length === idx + 1) && (
                        <div className={"col-12"}><div className={"w-100 border-top-lg"}></div> </div>
                      )}
                    </Fragment>
                  );
                }

              })}
            </div>
          )}
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
