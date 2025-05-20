"use client";

// import { SRCImage } from "react-datocms";
import Link from "next/link";
import { StructuredText } from "react-datocms";
import {
  RichTextRecord,
  ImagesGridRecord,
  RichTextModelContentField,
  CardsGridGenericRecord,
  CardsGridAttachmentRecord,
  CardsGridServiceRecord,
  CardsGridResourceRecord,
  CardsGridNewsRecord,
  CardsGridImagesFragmentFragment,
  TableListRecord,
} from "@/graphql/generated";
import { Icon } from "design-react-kit";
import { ImagesGrid } from "@/src/components/ImagesGrid";
import { CardsGrid } from "@/src/components/CardsGrid";

import styles from "./index.module.scss";
import classNames from "classnames/bind";
import { CardsGridImages } from "@/src/components/CardsGridImages";
import { TableList } from "../TableList";
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

interface RichTextProps extends RichTextRecord {
  richTextContent?: RichTextModelContentField;
}

export function RichText({
  props,
  padding = false,
  isPageSection = false,
}: {
  props: RichTextRecord;
  padding?: boolean;
  isPageSection?: boolean;
}) {
  const { richTextContent: content, alignment = "left" } =
    props as RichTextProps;

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
      case "CardsGridGenericRecord":
        return (
          <CardsGrid
            hasSidebar={true}
            props={record as CardsGridGenericRecord}
          />
        );
      case "CardsGridAttachmentRecord":
        return (
          <CardsGrid
            hasSidebar={true}
            props={record as CardsGridAttachmentRecord}
          />
        );
      case "CardsGridServiceRecord":
        return (
          <CardsGrid
            hasSidebar={true}
            props={record as CardsGridServiceRecord}
          />
        );
      case "CardsGridResourceRecord":
        return (
          <CardsGrid
            hasSidebar={true}
            props={record as CardsGridResourceRecord}
          />
        );
      case "CardsGridNewsRecord":
        return (
          <CardsGrid hasSidebar={true} props={record as CardsGridNewsRecord} />
        );
      case "CardsGridImageRecord":
        return (
          <CardsGridImages
            hasSidebar={true}
            props={record as CardsGridImagesFragmentFragment}
          />
        );
      case "TableListRecord":
        return <TableList props={record as TableListRecord} />;
      default:
        return null;
    }
  };

  return (
    <div
      className={cn("it-section container-xxl", {
        "text-center": alignment === "center",
        "text-end": alignment === "right",
        "py-4": padding || isPageSection,
      })}
    >
      <div className={"row"}>
        <div className={"col-12"}>
          {content && (
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            <StructuredText data={content as any} renderBlock={renderBlock} />
          )}
        </div>
      </div>
    </div>
  );
}
