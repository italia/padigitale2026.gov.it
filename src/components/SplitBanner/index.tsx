import { SRCImage } from "react-datocms";
import { SplitBannerRecord } from "@/graphql/generated";
import { Hero as SplitBannerComponent, Icon } from "design-react-kit";
import Link from "next/link";

import styles from "./index.module.scss";
import classNames from "classnames/bind";
const cn = classNames.bind(styles);

const getButtonHref = (button: SplitBannerRecord["button"]) => {
  // href link > cms page
  if (button?.href) {
    return `${button.href}`;
  }
  if (button?.cmsPage?.slug) {
    return `/${button.cmsPage.slug}`;
  }
  return "";
};

const getButtonTitle = (button: SplitBannerRecord["button"]) => {
  // href link > cms page
  if (button?.href) {
    return button.text || "";
  }
  if (button?.cmsPage?.title) {
    return `Vai alla pagina ${button.cmsPage.title}`;
  }
  return "";
};

export function SplitBanner({ props }: { props: SplitBannerRecord }) {
  const {
    lightTheme = false,
    title,
    description,
    image,
    links,
    imgLeft,
    button,
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
              <h2 className={"neutral-1-color-a9 mb-3 h-1 lh-sm"}>{title}</h2>
            )}
            {description && (
              <p className={"lead font-sans-serif neutral-1-color-a9"}>
                {description}
              </p>
            )}

            {button && (
              <Link
                className="btn btn-sm btn-outline-primary mt-2 me-3"
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

            {links && (
              <div className="mt-2 d-inline-flex gap-4 flex-wrap">
                {links.map((link) => (
                  <Link
                    key={link.id}
                    href={`/${link.slug}`}
                    className="fw-semibold"
                    style={{ fontSize: "1.125rem" }}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className={cn("colonna-immagine", "col-12 col-lg-6 px-0")}>
          {/* Image */}
          {image?.responsiveImage && (
            <div className={"h-100 w-100"}>
              <SRCImage
                data={image?.responsiveImage}
                imgClassName={cn("hero-image")}
                sizes="(max-width: 991px) 100vw, 50vw"
              />
            </div>
          )}
        </div>
      </div>
    </SplitBannerComponent>
  );
}
