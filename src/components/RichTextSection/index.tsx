"use client";

// import { SRCImage } from "react-datocms";
import Link from "next/link";
import { StructuredText, renderNodeRule } from "react-datocms";
import {
  ImagesGridRecord,
  RichTextModelContentField,
  RichTextSectionRecord,
  StepperRecord,
  AlertRecord,
  ImmagineRecord,
} from "@/graphql/generated";
import { Icon } from "design-react-kit";
import { ImagesGrid } from "@/src/components/ImagesGrid";
import { Alert } from "@/src/components/Alert";

import styles from "./index.module.scss";
import classNames from "classnames/bind";
import { StepperAccordion } from "../StepperAccordion";
import { Immagine } from "../Immagine";
const cn = classNames.bind(styles);

type BlockContext = {
  record:
    | AlertRecord
    | ImmagineRecord
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

interface RichTextProps extends RichTextSectionRecord {
  richTextContent?: RichTextModelContentField;
}

export function RichTextSection({
  props,
  padding = false,
  isPageSection = false,
}: {
  props: RichTextSectionRecord;
  padding?: boolean;
  isPageSection?: boolean;
}) {
  const { richTextContent: content, alignment = "left" } =
    props as RichTextProps;

  const customNodeRules = [
    renderNodeRule(
      (node) => node.type === "link",
      ({ node, children }) => {
        const isExternal =
          node.url.startsWith("http://") || node.url.startsWith("https://");
        return (
          <Link
            key={JSON.stringify(node.url)}
            href={node.url}
            className={isExternal ? "external-link" : ""}
          >
            {children}
            {isExternal && (
              <Icon
                className="mt-0"
                color="primary"
                icon="it-external-link"
                size="sm"
                title="Link esterno"
                padding
              />
            )}
          </Link>
        );
      }
    ),
  ];

  const renderBlock = (context: BlockContext) => {
    const record = context.record;

    if (!record?.__typename) return null;

    switch (record.__typename) {
      case "AlertRecord":
        return <Alert key={record.id} props={record as AlertRecord} />;
      case "ImmagineRecord":
        return <Immagine key={record.id} props={record as ImmagineRecord} />;
      case "ImagesGridRecord":
        return (
          <ImagesGrid key={record.id} props={record as ImagesGridRecord} />
        );
      case "LinkRecord":
        return (
          <Link
            key={record.id}
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
            key={record.id}
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
      case "StepperRecord":
        return (
          <StepperAccordion key={record.id} props={record as StepperRecord} />
        );
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
            <StructuredText
              key={JSON.stringify(content)}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              data={content as any}
              renderBlock={renderBlock}
              customNodeRules={customNodeRules}
            />
          )}
        </div>
      </div>
    </div>
  );
}
