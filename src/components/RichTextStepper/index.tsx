"use client";

import Link from "next/link";
import { StructuredText, renderNodeRule } from "react-datocms";
import {
  CardAttachmentRecord,
  ImagesGridRecord,
  RichTextStepperRecord,
  AlertRecord,
} from "@/graphql/generated";
import { Icon } from "design-react-kit";
import { ImagesGrid } from "@/src/components/ImagesGrid";
import { Alert } from "@/src/components/Alert";

import styles from "./index.module.scss";
import classNames from "classnames/bind";
import { CardAttachment } from "@/src/components/CardAttachment";

const cn = classNames.bind(styles);

type BlockContext = {
  record:
    | AlertRecord
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

export function RichTextStepper({ props }: { props: RichTextStepperRecord }) {
  const { content, alignment = "left" } = props;

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
      case "CardAttachmentRecord":
        return (
          <div key={record.id} className={"pt-5 d-block"}>
            <CardAttachment props={record as CardAttachmentRecord} />
          </div>
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
      default:
        return null;
    }
  };

  return (
    <div
      className={cn({
        "text-center": alignment === "center",
        "text-end": alignment === "right",
      })}
    >
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
  );
}
