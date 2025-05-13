"use client";

import { BannerRecord } from "@/graphql/generated";
import { Icon } from "design-react-kit";
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
    <div
      className={cn(
        "wrapper",
        {
          "light-theme": lightTheme,
        },
        "p-0"
      )}
    >
      <div className={cn("container-xxl")}>
        {/* Body */}
        <div className="row h-100 pt-4">
          {title && (
            <h2 className={"col-12 text-secondary mb-3 fs-2 lh-sm"}>{title}</h2>
          )}
          {description && (
            <p className={"col-12 font-sans-serif text-secondary"}>{description}</p>
          )}

          {button && (
            <div className={"col-12"}>
              <Link
                className="btn btn-sm btn-outline-primary mt-2"
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
        </div>
      </div>
    </div>
  );
}
