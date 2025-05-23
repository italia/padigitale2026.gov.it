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
      <div className={"container-xxl position-relative"}>
        <div className={"row"}>
          {/* Breadcrumbs */}
          {!hideBreadcrumbs && (
            <section className={cn("pt-2 col-12")}>
              <Breadcrumbs lightTheme />
            </section>
          )}
          {/* Body */}
          <div className={"pb-4 col-12"}>
            {title && <HeroTitle className={cn("fs-1")}>{title}</HeroTitle>}
            <div
              className={cn("d-flex flex-wrap my-4 pb-3")}
              style={{ columnGap: "4rem", rowGap: "1rem" }}
            >
              {argomento && (
                <div
                  className={cn("text-secondary fs-6")}
                  style={{ minWidth: "114px" }}
                >
                  <div className="fw-normal fs-6">Argomento</div>
                  <a className="fw-semibold fs-6" href={argomento.slug || ""}>
                    {argomento.label}
                  </a>
                </div>
              )}
              {misura && (
                <div className={cn("text-secondary fs-6")}>
                  <div className="fw-normal fs-6">Misura</div>
                  <a
                    className="fw-semibold fs-6"
                    href={`${misura.basePath || ""}${misura.slug || ""}`}
                  >
                    {misura.label}
                  </a>
                </div>
              )}
              {badge && (
                <div className={cn("text-secondary fs-6")}>
                  <div className="fw-normal fs-6">Stato</div>
                  <p className="fw-semibold fs-6 mb-0">{badge.label}</p>
                </div>
              )}
              {beneficiari && (
                <div className={cn("text-secondary fs-6")}>
                  <div className="fw-normal fs-6">Beneficiari</div>
                  <p className="fw-semibold fs-6 mb-0">
                    {beneficiari.map((ente, idx) => (
                      <span key={idx}>
                        {ente.label}
                        {idx < beneficiari.length - 1 && ", "}
                      </span>
                    ))}
                  </p>
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
              )}
              {updateDate && updateDate.length > 0 && (
                <p
                  className={
                    "font-sans-serif text-body-secondary m-0 fw-normal fs-6"
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
