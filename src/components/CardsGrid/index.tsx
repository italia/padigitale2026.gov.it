"use client";

import {CardsGridRecord} from "@/graphql/generated";

import styles from "./index.module.scss";
import classNames from "classnames/bind";
import {CardResource} from "@/src/components/CardResource";
import Link from "next/link";
import {Icon} from "design-react-kit";
import {cardAspectEnum, CardNews} from "@/src/components/CardNews";

const cn = classNames.bind(styles);

export function CardsGrid({ props }: { props: CardsGridRecord }) {
  const { title, description, alignment, risorse, news, columns, button } = props;
  return (
    <div className={cn("wrapper", "p-0")}>
      <div className={cn("row w-100 h-100 mx-auto container-xxl")}>
        <div className="col-12 pb-3">
          {title && (
            <h2 className={cn(
              "text-dark mb-0 fs-2 lh-sm",
              alignment === "center" ? "text-center" : "text-start"
            )}>{title}</h2>
          )}
          {description && (
            <p className={cn(
              "font-sans-serif text-dark mt-3 mb-0",
              alignment === "center" ? "text-center" : "text-start"
            )}>{description}</p>
          )}
        </div>
      </div>
      {risorse && (
        <div className={'row w-100 h-100 mx-auto container-xxl'}>
          {risorse.map((resource, idx) => {
            let colClasses = "";
            const intColumns = (columns && parseInt(columns)) ?? 1;
            if (intColumns  === 1) {
              colClasses = "col-12";
            } else if (intColumns === 2) {
              colClasses = "col-12 col-md-6";
            } else if (intColumns === 3) {
              colClasses = "col-12 col-lg-4";
            } else if (intColumns === 4) {
              colClasses = "col-12 col-lg-3";
            }
            return (
              <div key={idx} className={`${colClasses} pt-4 d-flex flex-column justify-content-stretch`}>
                <CardResource props={resource} />
              </div>
            );
          })}
        </div>
      )}
      {news && (
        <div className={'row w-100 h-100 mx-auto container-xxl'}>
          {news.map((record, idx) => {
            let colClasses = "";
            const intColumns = (columns && parseInt(columns)) ?? 1;
            if (intColumns  === 1) {
              colClasses = "col-12";
            } else if (intColumns === 2) {
              colClasses = "col-12 col-md-6";
            } else if (intColumns === 3) {
              colClasses = "col-12 col-lg-4";
            } else if (intColumns === 4) {
              colClasses = "col-12 col-lg-3";
            }
            return (
              <div key={idx} className={`${colClasses} pt-4 d-flex flex-column justify-content-stretch`}>
                <CardNews cardAspect={cardAspectEnum.bordered} props={record} />
              </div>
            );
          })}
        </div>
      )}
      {(button && (
        <div className={'row w-100 h-100 mx-auto container-xxl'}>
          <div className={cn("col-12 py-5", alignment === "center" ? "text-center" : "text-start")}>
            <Link
              href={button.href || `/${button.cmsPage?.slug || ""}`}
              className={'btn btn-outline-primary btn-lg'}>
              <span>{button.text}</span>
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
        </div>
      ))}

    </div>
  );
}
