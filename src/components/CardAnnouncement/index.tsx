"use client";

import Link from "next/link";
import styles from "./index.module.scss";
import classNames from "classnames/bind";
import { ElementType } from "react";
import { Chip, ChipLabel, Icon, Badge } from "design-react-kit";

const cn = classNames.bind(styles);

export enum CardAnnouncementStatusType {
  "Aperto" = "Aperto",
  "Chiuso" = "Chiuso",
}

export enum CardAnnouncementLayout {
  "small" = "small",
  "small_with_border_top" = "small_with_border_top",
  "large_with_border_top" = "large_with_border_top",
  "large" = "large",
}

export type CardAnnouncementRecord = {
  __typename?: "CardAnnouncementRecord";
  badge?: string;
  istituto?: string;
  beneficiari?: string;
  stato?: CardAnnouncementStatusType;
  titolo?: string;
  dataDiPubblicazione?: string;
  dataDiScadenza?: string;
  href?: string;
  target?: string;
};

export function CardAnnouncement({
  props,
  TitleTag = "div",
  layout = CardAnnouncementLayout.small,
}: {
  props: CardAnnouncementRecord;
  TitleTag?: ElementType;
  layout?: CardAnnouncementLayout;
}) {
  const {
    badge,
    istituto,
    beneficiari,
    stato,
    titolo,
    dataDiPubblicazione,
    dataDiScadenza,
    href,
    target,
  } = props;

  let targetLink = "_self";
  if (typeof target !== "undefined" && target !== null) {
    targetLink = target;
  }

  return (
    <article
      className={cn(
        "it-card--announcement it-card pb-0 flex-grow-1 bg-white rounded border border-neutral-1-bg-a3 pt-3 shadow",
        {
          "it-card-border-top it-card-border-top-primary": [
            "small_with_border_top",
            "large_with_border_top",
          ].includes(layout),
        }
      )}
    >
      {titolo && (
        <TitleTag
          className={
            "it-card-title fw-semibold pb-2 lh-sm d-flex justify-content-between h3"
          }
        >
          {href && (
            <Link
              prefetch={false}
              href={href}
              target={targetLink}
              className={cn("decoration-1")}
            >
              {titolo}
            </Link>
          )}
          {!href && (
            <span className={cn("decoration-1", "text-primary")}>{titolo}</span>
          )}
        </TitleTag>
      )}
      <div className={"it-card-body d-flex flex-column pt-0 pb-0"}>
        <dl
          className={cn("it-card-description-list border-0", {
            "flex-md-row flex-md-wrap gap-md-0 pb-0": [
              "large_with_border_top",
              "large",
            ].includes(layout),
          })}
        >
          {stato && (
            <div
              className={cn("d-block", {
                "col-md-4 pe-md-2 pb-md-3": [
                  "large_with_border_top",
                  "large",
                ].includes(layout),
              })}
            >
              <dt
                className={
                  "d-block text-uppercase small fw-semibold text-secondary"
                }
              >
                Stato avviso
              </dt>
              <dd className={"d-block"}>
                <Chip color={stato === "Aperto" ? "success" : "danger"}>
                  <Icon
                    icon={stato === "Aperto" ? "it-horn" : "it-ban"}
                    size={"xs"}
                    color={stato === "Aperto" ? "success" : "danger"}
                  />
                  <ChipLabel className={"lh-base"}>{stato}</ChipLabel>
                </Chip>
              </dd>
            </div>
          )}
          {istituto && (
            <div
              className={cn("d-block", {
                "col-md-4 pe-md-2 pb-md-3": [
                  "large_with_border_top",
                  "large",
                ].includes(layout),
              })}
            >
              <dt
                className={
                  "d-block text-uppercase small fw-semibold text-secondary"
                }
              >
                Ente promotore
              </dt>
              <dd className={"d-block fw-semibold neutral-1-color-a9 pb-3"}>
                {istituto}
              </dd>
            </div>
          )}
          {beneficiari && (
            <div
              className={cn("d-block", {
                "col-md-4 pe-md-2 pb-md-3": [
                  "large_with_border_top",
                  "large",
                ].includes(layout),
              })}
            >
              <dt
                className={
                  "d-block text-uppercase small fw-semibold text-secondary"
                }
              >
                Beneficiari
              </dt>
              <dd className={"d-block fw-semibold neutral-1-color-a9 pb-3"}>
                {beneficiari}
              </dd>
            </div>
          )}
          {dataDiPubblicazione && (
            <div
              className={cn("d-block", {
                "col-md-4 pe-md-2 pb-md-3": [
                  "large_with_border_top",
                  "large",
                ].includes(layout),
              })}
            >
              <dt
                className={
                  "d-block text-uppercase small fw-semibold text-secondary"
                }
              >
                Pubblicazione
              </dt>
              <dd className={"d-block fw-semibold neutral-1-color-a9 pb-3"}>
                {dataDiPubblicazione}
                {badge && badge !== "In scadenza" && (
                  <Badge
                    className={cn("ms-2", {
                      "lightgrey-bg-a3 text-primary": badge === "Nuovo",
                      "lightgrey-bg-a1 neutral-1-color-a9":
                        badge === "Aggiornato",
                    })}
                  >
                    {badge}
                  </Badge>
                )}
              </dd>
            </div>
          )}
          {dataDiScadenza && (
            <div
              className={cn("d-block", {
                "col-md-4 pe-md-2 pb-md-3": [
                  "large_with_border_top",
                  "large",
                ].includes(layout),
              })}
            >
              <dt
                className={
                  "d-block text-uppercase small fw-semibold text-secondary"
                }
              >
                Scadenza
              </dt>
              <dd className={"d-block fw-semibold neutral-1-color-a9 pb-3"}>
                {dataDiScadenza}
                {badge && badge === "In scadenza" && (
                  <Badge
                    className={
                      "text-capitalize px-3 ms-2 complementary-2-bg-a1 neutral-1-color-a9"
                    }
                  >
                    {badge}
                  </Badge>
                )}
              </dd>
            </div>
          )}
        </dl>
      </div>
    </article>
  );
}
