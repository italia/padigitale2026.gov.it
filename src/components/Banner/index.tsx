"use client";

import { BannerRecord } from "@/graphql/generated";
import {
  Hero as BannerComponent,
  HeroTitle as BannerTitle,
  Icon,
} from "design-react-kit";
import Link from "next/link";

import styles from "./index.module.scss";
import classNames from "classnames/bind";
const cn = classNames.bind(styles);

const getButtonHref = (button: BannerRecord["button"]) => {
  // href link > cms page
  if (button?.href) {
    return `${button.href}`;
  }
  if (button?.cmsPage?.slug) {
    return `/${button.cmsPage.slug}`;
  }
  return "";
};

const getButtonTitle = (button: BannerRecord["button"]) => {
  // href link > cms page
  if (button?.href) {
    return button.text || "";
  }
  if (button?.cmsPage?.title) {
    return `Vai alla pagina ${button.cmsPage.title}`;
  }
  return "";
};

export function Banner({ props }: { props: BannerRecord }) {
  const { lightTheme = false, title, description, button } = props;
  return (
    <BannerComponent
      className={cn(
        "wrapper",
        {
          "light-theme": lightTheme,
        },
        "p-0"
      )}
    >
      <div className={cn("row w-100 h-100 mx-auto container-xxl")}>
        {/* Body */}
        <div className="p-4">
          {title && (
            <BannerTitle className={"text-secondary mb-3 fs-1 lh-sm"}>
              {title}
            </BannerTitle>
          )}
          {description && (
            <p className={"font-sans-serif text-secondary"}>{description}</p>
          )}

          {button && (
            <Link
              className="btn btn-sm btn-outline-primary mt-2"
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
          )}
        </div>
      </div>
    </BannerComponent>
  );
}
