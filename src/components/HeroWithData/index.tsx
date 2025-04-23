"use client";

import { DataHeroRecord } from "@/graphql/generated";
import { Hero as HeroComponent, HeroTitle, Icon } from "design-react-kit";
import Link from "next/link";
import { Breadcrumbs } from "@/src/components/Breadcrumbs";

import styles from "./index.module.scss";
import classNames from "classnames/bind";
const cn = classNames.bind(styles);

const getButtonHref = (button: DataHeroRecord["button"]) => {
  // href link > cms page
  if (button?.href) {
    return `${button.href}`;
  }
  if (button?.cmsPage?.slug) {
    return `/${button.cmsPage.slug}`;
  }
  return "";
};

const getButtonTitle = (button: DataHeroRecord["button"]) => {
  // href link > cms page
  if (button?.href) {
    return button.text || "";
  }
  if (button?.cmsPage?.title) {
    return `Vai alla pagina ${button.cmsPage.title}`;
  }
  return "";
};

export function HeroWithData({ props }: { props: DataHeroRecord }) {
  const {
    title,
    button,
    hideBreadcrumbs = false,
    updateDate,
    argomento,
    misura,
    beneficiari,
    badge,
  } = props;
  return (
    <HeroComponent className={cn("wrapper")}>
      <div className={"row container-xxl px-0 mx-auto position-relative"}>
        <div className={"px-0"}>
          {/* Breadcrumbs */}
          {!hideBreadcrumbs && (
            <section className={cn("pt-2 px-4")}>
              <Breadcrumbs lightTheme />
            </section>
          )}
          {/* Body */}
          <div className={"pb-4 px-4"}>
            {title && (
              <HeroTitle className={cn("text-secondary fs-1")}>
                {title}
              </HeroTitle>
            )}
            <div
              className={cn("d-flex flex-wrap my-4 pb-3")}
              style={{ columnGap: "4rem", rowGap: "1rem" }}
            >
              {argomento && (
                <div
                  className={cn("text-secondary fs-6")}
                  style={{ minWidth: "114px" }}
                >
                  <h6 className="fw-normal fs-6">Argomento</h6>
                  <a className="fw-semibold fs-6" href={argomento.slug || ""}>
                    {argomento.label}
                  </a>
                </div>
              )}
              {misura && (
                <div className={cn("text-secondary fs-6")}>
                  <h6 className="fw-normal fs-6">Misura</h6>
                  <a
                    className="fw-semibold fs-6"
                    href={`${misura.basePath || ""}${misura.slug || ""}`}
                  >
                    {misura.label}
                  </a>
                </div>
              )}
              {beneficiari && (
                <div className={cn("text-secondary fs-6")}>
                  <h6 className="fw-normal fs-6">Beneficiari</h6>
                  <p className="fw-semibold fs-6 mb-0">{beneficiari.label}</p>
                </div>
              )}
              {badge && (
                <div className={cn("text-secondary fs-6")}>
                  <h6 className="fw-normal fs-6">Stato</h6>
                  <p className="fw-semibold fs-6 mb-0">{badge.label}</p>
                </div>
              )}
            </div>
            <div
              className={cn("d-flex flex-wrap align-items-center")}
              style={{ columnGap: "4rem", rowGap: "1rem" }}
            >
              {button && (
                <div className={cn("it-btn-container")}>
                  <Link
                    className="btn btn-sm btn-outline-primary btn-mini"
                    href={getButtonHref(button)}
                    target={button.target || "_self"}
                    title={getButtonTitle(button)}
                  >
                    {button.text}
                    {button.icon && (
                      <Icon
                        className="mb-2"
                        color=""
                        icon={button.icon}
                        size="sm"
                        title=""
                        padding
                      />
                    )}
                  </Link>
                </div>
              )}
              {updateDate && updateDate.length > 0 && (
                <p
                  className={
                    "font-sans-serif text-body-secondary text-secondary m-0 fw-normal fs-6"
                  }
                >
                  {updateDate}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </HeroComponent>
  );
}
