"use client";

import { SRCImage } from "react-datocms";
import { SplitBannerRecord } from "@/graphql/generated";
import { Hero as SplitBannerComponent, HeroTitle } from "design-react-kit";

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
    // imgLeft,
    // button,
  } = props;
  return (
    <SplitBannerComponent
      className={cn("wrapper", { "light-theme": lightTheme })}
    >
      <div className={"row container px-0 mx-auto position-relative"}>
        <div className={cn("colonna-testo", "col-12 col-lg-6 px-0")}>
          {/* Body */}
          <div className="it-hero-text-wrapper container px-lg-2 mx-lg-1">
            {title && (
              <HeroTitle className={cn({ "text-secondary": lightTheme })}>
                {title}
              </HeroTitle>
            )}
            {description && (
              <p
                className={cn("fs-4 font-sans-serif", {
                  "text-secondary": lightTheme,
                })}
              >
                {description}
              </p>
            )}
            <div
              className={cn("it-btn-container", {
                "bg-dark bg-transparent": !lightTheme, // Trick to make the button with the correct color
              })}
            >
              {lightTheme ? (
                <a className="btn btn-sm btn-outline-primary" href="#">
                  Azione primaria{" "}
                </a>
              ) : (
                <a className="btn btn-sm btn-primary" href="#">
                  Azione primaria{" "}
                </a>
              )}
            </div>
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
