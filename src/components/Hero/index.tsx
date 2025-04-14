"use client";

import { SRCImage } from "react-datocms";
import { HeroRecord } from "@/graphql/generated";
import {
  Hero as HeroComponent,
  HeroBody,
  HeroTitle,
  HeroButton,
  Breadcrumb,
  BreadcrumbItem,
} from "design-react-kit";

import styles from "./index.module.scss";
import classNames from "classnames/bind";
const cn = classNames.bind(styles);

export function Hero({ props }: { props: HeroRecord }) {
  const {
    temaChiaro = false,
    title,
    description,
    hideBreadcrumbs = false,
    image,
    dataDiAggiornamento,
  } = props;
  return (
    <HeroComponent className={cn("wrapper", { "light-theme": temaChiaro })}>
      <div className={"row container px-0 mx-auto position-relative"}>
        <div className={cn("colonna-testo", "col-12 col-lg-6 px-0")}>
          {/* Breadcrumbs */}
          {!hideBreadcrumbs && (
            <section
              className={cn("breadcrumbs-section", "pt-2 px-4 container")}
            >
              {/* TODO: make breadcrumbs dynamic */}
              <Breadcrumb className={"w-100"}>
                <BreadcrumbItem>
                  <a
                    href="#"
                    className={temaChiaro ? "text-secondary" : "text-white"}
                  >
                    Home
                  </a>
                  <span
                    className={cn("separator mb-0", {
                      "text-secondary": temaChiaro,
                      "text-white": !temaChiaro,
                    })}
                  >
                    /
                  </span>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <a
                    href="#"
                    className={temaChiaro ? "text-secondary" : "text-white"}
                  >
                    Avvisi
                  </a>
                  <span
                    className={cn("separator mb-0", {
                      "text-secondary": temaChiaro,
                      "text-white": !temaChiaro,
                    })}
                  >
                    /
                  </span>
                </BreadcrumbItem>
                <BreadcrumbItem active>
                  <span
                    className={temaChiaro ? "text-secondary" : "text-white"}
                  >
                    Avviso 1.2 - Abilitazione al Cloud per le PA locali
                  </span>
                </BreadcrumbItem>
              </Breadcrumb>
            </section>
          )}
          {/* Body */}
          <HeroBody className={"container px-lg-2 mx-lg-1"}>
            {title && (
              <HeroTitle className={cn({ "text-secondary": temaChiaro })}>
                {title}
              </HeroTitle>
            )}
            {description && (
              <p
                className={cn("fs-4 font-sans-serif", {
                  "text-secondary": temaChiaro,
                })}
              >
                {description}
              </p>
            )}
            <HeroButton outline={temaChiaro} color={"primary"}>
              Label button
            </HeroButton>
            {dataDiAggiornamento && dataDiAggiornamento.length > 0 && (
              <p
                className={cn(
                  "position-absolute bottom-0 left-0 mb-4 font-sans-serif text-body-secondary",
                  {
                    "text-secondary": temaChiaro,
                    "text-white": !temaChiaro,
                  }
                )}
              >
                {dataDiAggiornamento}
              </p>
            )}
          </HeroBody>
        </div>
        <div className={cn("colonna-immagine", "col-12 col-lg-6 px-0")}>
          {/* Image */}
          {image?.responsiveImage && (
            <div className={"h-100 w-100"}>
              <SRCImage
                data={image?.responsiveImage}
                imgClassName={cn("hero-image")}
              />
            </div>
          )}
        </div>
      </div>
    </HeroComponent>
  );
}
