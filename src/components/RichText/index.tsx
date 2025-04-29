"use client";

// import { SRCImage } from "react-datocms";
import Link from "next/link";
import { StructuredText } from "react-datocms";
import { RichTextRecord, ImagesGridRecord } from "@/graphql/generated";
import { Icon } from "design-react-kit";
import { ImagesGrid } from "@/src/components/ImagesGrid";

import styles from "./index.module.scss";
import classNames from "classnames/bind";
const cn = classNames.bind(styles);

type BlockContext = {
  record:
    | ImagesGridRecord
    | {
        __typename?: string;
        color?: string;
        text?: string;
        href?: string;
        icon?: string;
        cmsPage?: {
          slug?: string;
        };
        id?: string;
        images?: Array<{
          url: string;
          basename: string;
          alt: string;
          format: string;
          width: number;
          height: number;
          id: string;
          title: string;
          responsiveImage: {
            src: string;
            srcSet: string;
            title: string;
            width: number;
            height: number;
            alt: string;
            aspectRatio: number;
          };
        }>;
      };
};

export function RichText({ props }: { props: RichTextRecord }) {
  const { content, alignment = "left" } = props;

  const renderBlock = (context: BlockContext) => {
    const record = context.record;

    if (!record?.__typename) return null;

    switch (record.__typename) {
      case "ImagesGridRecord":
        return <ImagesGrid props={record as ImagesGridRecord} />;
      case "LinkRecord":
        return (
          <Link
            className="fw-bold"
            href={record.href || `/${record.cmsPage?.slug || ""}`}
          >
            {record.text}
            {record.icon && (
              <Icon
                className="my-0"
                color="primary"
                icon={record.icon}
                size="sm"
                title=""
                padding
              />
            )}
          </Link>
        );
      case "ButtonRecord":
        return (
          <Link
            className="btn btn-sm btn-outline-primary btn-mini"
            href={record.href || `/${record.cmsPage?.slug || ""}`}
          >
            {record.text}
            {record.icon && (
              <Icon
                className="my-0"
                color="primary"
                icon={record.icon}
                size="sm"
                title=""
                padding
              />
            )}
          </Link>
        );
      default:
        return null;
    }
  };

  return (
    <div className="mx-auto container-xxl">
      {/* Body */}
      <div
        className={cn("p-4 w-100", {
          "text-center": alignment === "center",
          "text-end": alignment === "right",
        })}
      >
        {content && (
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          <StructuredText data={content as any} renderBlock={renderBlock} />
        )}
      </div>
    </div>
  );
}
