import { SRCImage } from "react-datocms";
import { HeroRecord } from "@/graphql/generated";
import { Hero as HeroComponent, HeroTitle, Icon } from "design-react-kit";
import Link from "next/link";
import { Breadcrumbs } from "../Breadcrumbs";

import styles from "./index.module.scss";
import classNames from "classnames/bind";
const cn = classNames.bind(styles);

const getButtonHref = (button: HeroRecord["button"]) => {
  // href link > cms page
  if (button?.href) {
    return `${button.href}`;
  }
  if (button?.cmsPage?.slug) {
    return `/${button.cmsPage.slug}`;
  }
  return "";
};

const getButtonTitle = (button: HeroRecord["button"]) => {
  // href link > cms page
  if (button?.href) {
    return button.text || "";
  }
  if (button?.cmsPage?.title) {
    return `Vai alla pagina ${button.cmsPage.title}`;
  }
  return "";
};

export function Hero({ props }: { props: HeroRecord }) {
  const {
    lightTheme = false,
    title,
    description,
    button,
    hideBreadcrumbs = false,
    image,
    updateDate,
  } = props;
  return (
    <HeroComponent className={cn("wrapper", { "light-theme": lightTheme })}>
      <div
        className={
          "row container-xxl px-0 mx-auto position-relative flex-grow-1"
        }
      >
        <div className={cn("colonna-testo", "col-12 col-md-6 px-0")}>
          {/* Breadcrumbs */}
          {!hideBreadcrumbs && (
            <section
              className={cn("breadcrumbs-section", "pt-2 px-3 container-xxl")}
            >
              <Breadcrumbs lightTheme={lightTheme} />
            </section>
          )}
          {/* Body */}
          <div className="it-hero-text-wrapper container-xxl px-lg-2 mx-lg-1">
            {title && (
              <HeroTitle className={cn({ "neutral-1-color-a9": lightTheme })}>
                {title}
              </HeroTitle>
            )}
            {description && (
              <p
                className={cn("h-4 font-sans-serif", {
                  "neutral-1-color-a9": lightTheme,
                })}
              >
                {description}
              </p>
            )}
            {button && (
              <div
                className={cn("it-btn-container", {
                  "bg-dark bg-transparent": !lightTheme, // Trick to make the button with the correct color
                })}
              >
                {lightTheme ? (
                  <Link
                    className="btn btn-sm btn-outline-primary"
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
                ) : (
                  <Link
                    className="btn btn-sm btn-primary"
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
                )}
              </div>
            )}
            {updateDate && updateDate.length > 0 && (
              <p
                className={cn(
                  "position-absolute bottom-0 left-0 mb-4 font-sans-serif text-body-secondary",
                  {
                    "text-secondary": lightTheme,
                    "text-white": !lightTheme,
                  }
                )}
              >
                {updateDate}
              </p>
            )}
          </div>
        </div>
        <div className={cn("colonna-immagine", "col-12 col-md-6 px-0")}>
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
