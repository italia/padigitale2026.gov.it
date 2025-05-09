"use client";

import {
  CardsGridGenericRecord,
  CardsGridAttachmentRecord,
  CardsGridServiceRecord,
  CardsGridResourceRecord,
  CardsGridNewsRecord
} from "@/graphql/generated";

import styles from "./index.module.scss";
import classNames from "classnames/bind";
import Link from "next/link";
import {Icon} from "design-react-kit";
import {ElementType} from "react";

import {genericCardLayoutEnum, CardGeneric} from "@/src/components/CardGeneric";
import {CardAttachment} from "@/src/components/CardAttachment";
import {CardResource} from "@/src/components/CardResource";
import {CardService} from "@/src/components/CardService";
import {newsCardLayoutEnum, CardNews} from "@/src/components/CardNews";

const cn = classNames.bind(styles);

export function CardsGrid({props}: {
  props: CardsGridGenericRecord | CardsGridAttachmentRecord | CardsGridServiceRecord | CardsGridResourceRecord | CardsGridNewsRecord
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
    <div key={id} className={`wrapper py-5 ${backgroundColor}`}>
      <div className={cn("row w-100 h-100 mx-auto container-xxl")}>
        <div className="col-12 pb-3">
          {title && (
            <SectionTitleTag
              className={cn(
                "text-dark mb-0 fs-2 lh-sm",
                alignment === "center" ? "text-center" : "text-start"
              )}>
              {title}
            </SectionTitleTag>
          )}
          {description && (
            <p
              className={cn(
                "font-sans-serif text-dark mt-3 mb-0",
                alignment === "center" ? "text-center" : "text-start"
              )}>
              {description}
            </p>
          )}
        </div>
      </div>
      {resources && (
        <div className={"row w-100 h-100 mx-auto container-xxl"}>
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
        <div className={"row w-100 h-100 mx-auto container-xxl"}>
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
        <div className={"row w-100 h-100 mx-auto container-xxl"}>
          {cards.map((card, idx) => {
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
            } else if (card.__typename === 'CardAttachmentRecord') {
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
            } else if (card.__typename === 'CardServiceRecord') {
              return (
                <div
                  key={idx}
                  className={`${colClasses} pt-4 d-flex flex-column justify-content-stretch`}>
                  <CardService
                    TitleTag={cardTitleTag}
                    props={card}
                  />
                </div>
              );
            }

          })}
        </div>
      )}
      {button && (
        <div className={"row w-100 h-100 mx-auto container-xxl"}>
          <div
            className={cn(
              "col-12 pt-5",
              alignment === "center" ? "text-center" : "text-start"
            )}
          >
            <Link
              href={button.href || `/${button.cmsPage?.slug || ""}`}
              className={"btn btn-outline-primary btn-lg"}
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
  );
}
