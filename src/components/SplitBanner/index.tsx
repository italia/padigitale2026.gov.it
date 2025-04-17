"use client";

import { SRCImage } from "react-datocms";
import { SplitBannerRecord } from "@/graphql/generated";
import {
  Hero as SplitBannerComponent,
  HeroTitle as SplitBannerTitle,
} from "design-react-kit";

import styles from "./index.module.scss";
import classNames from "classnames/bind";
const cn = classNames.bind(styles);

export function SplitBanner({ props }: { props: SplitBannerRecord }) {
  const {
    lightTheme = false,
    title,
    description,
    image,
    // links,
    imgLeft,
    // button,
  } = props;
  return (
    <SplitBannerComponent
      className={cn(
        "wrapper",
        {
          "light-theme": lightTheme,
        },
        "p-0"
      )}
    >
      <div
        className={cn("row w-100 h-100 mx-auto container-xxl", {
          "flex-row-reverse": imgLeft,
        })}
      >
        <div className={cn("colonna-testo", "col-12 col-lg-6 px-0")}>
          {/* Body */}
          <div className="it-hero-text-wrapper container px-4">
            {title && (
              <SplitBannerTitle className={"text-secondary mb-3 fs-1 lh-sm"}>
                {title}
              </SplitBannerTitle>
            )}
            {description && (
              <p className={"font-sans-serif text-secondary"}>{description}</p>
            )}

            {/* TO DO: Add button properly */}
            <a className="btn btn-sm btn-outline-primary mt-2" href="#">
              Azione primaria{" "}
            </a>
          </div>
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
    </SplitBannerComponent>
  );
}
