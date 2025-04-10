"use client";

import { HeroRecord } from "@/graphql/generated";
import {
  Hero as HeroComponent,
  HeroBody,
  HeroTitle,
  HeroButton,
  Breadcrumb,
  BreadcrumbItem,
  ResponsiveImage,
} from "design-react-kit";

import styles from "./index.module.scss";
import classNames from "classnames/bind";
const cn = classNames.bind(styles);

export function Hero({ props }: { props: HeroRecord }) {
  const { title, description, hideBreadcrumbs, background } = props;
  return (
    <HeroComponent
      className={cn("wrapper")}
      {...(background?.responsiveImage?.src && { overlay: "primary" })}
    >
      {/* Background */}
      {background?.responsiveImage?.src && (
        <div className={cn("position-absolute h-100 w-50 end-0")}>
          <ResponsiveImage
            src={background?.responsiveImage?.src}
            alt={background?.responsiveImage?.alt || ""}
            className={cn("image")}
          />
        </div>
      )}

      {/* Body */}
      <HeroBody className={cn("px-2 mx-1")}>
        {title && <HeroTitle>{title}</HeroTitle>}
        {description && <p className={cn("font-sans-serif")}>{description}</p>}
        <HeroButton color="primary">Label button</HeroButton>
      </HeroBody>

      {/* Breadcrumbs */}
      {!hideBreadcrumbs && (
        <section className={cn("px-4 pt-2 position-absolute")}>
          {/* TODO: make breadcrumbs dynamic */}
          <Breadcrumb className={cn("breadcrumbs")}>
            <BreadcrumbItem>
              <a href="#">Home</a>
              <span className="separator">/</span>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <a href="#">Avvisi</a>
              <span className="separator">/</span>
            </BreadcrumbItem>
            <BreadcrumbItem active>
              Avviso 1.2 - Abilitazione al Cloud per le PA locali
            </BreadcrumbItem>
          </Breadcrumb>
        </section>
      )}
    </HeroComponent>
  );
}
