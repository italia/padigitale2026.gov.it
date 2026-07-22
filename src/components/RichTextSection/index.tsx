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
  TableListFaqRecord,
  VideoPlayerRecord,
  TableRecord,
  CardsGridGenericRecord,
  CardsGridAttachmentRecord,
  CardsGridServiceRecord,
  CardsGridResourceRecord,
  CardsGridNewsRecord,
  CardsGridImagesFragmentFragment,
} from "@/graphql/generated";
import { Icon, Section, Container, Row, Col } from "design-react-kit";
import { ImagesGrid } from "@/src/components/ImagesGrid";
import { CardsGrid } from "@/src/components/CardsGrid";
import { CardsGridImages } from "@/src/components/CardsGridImages";
import { Alert } from "@/src/components/Alert";
import { VideoPlayer } from "@/src/components/VideoPlayer";
import { Table } from "@/src/components/Table";

import styles from "./index.module.scss";
import classNames from "classnames/bind";
import { StepperAccordion } from "../StepperAccordion";
import { Immagine } from "../Immagine";
import { TableListFaq } from "../TableListFaq";
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
        target?: string;
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

export function RichTextSection({ props }: { props: RichTextSectionRecord }) {
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
            prefetch={false}
            key={JSON.stringify(node.url)}
            href={node.url}
            className={isExternal ? "external-link" : ""}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
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
            prefetch={false}
            key={record.id}
            className="fw-bold"
            href={record.href || `/${record.cmsPage?.slug || ""}`}
            target={record.target || "_self"}
            rel={record.target === "_blank" ? "noopener noreferrer" : undefined}
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
            prefetch={false}
            key={record.id}
            className="btn btn-sm btn-outline-primary btn-mini mt-2"
            href={record.href || `/${record.cmsPage?.slug || ""}`}
            target={record.target || "_self"}
            rel={record.target === "_blank" ? "noopener noreferrer" : undefined}
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
            key={record.id}
            hasSidebar={true}
            props={record as CardsGridGenericRecord}
          />
        );
      case "CardsGridAttachmentRecord":
        return (
          <CardsGrid
            key={record.id}
            hasSidebar={true}
            props={record as CardsGridAttachmentRecord}
          />
        );
      case "CardsGridServiceRecord":
        return (
          <CardsGrid
            key={record.id}
            hasSidebar={true}
            props={record as CardsGridServiceRecord}
          />
        );
      case "CardsGridResourceRecord":
        return (
          <CardsGrid
            key={record.id}
            hasSidebar={true}
            props={record as CardsGridResourceRecord}
          />
        );
      case "CardsGridNewsRecord":
        return (
          <CardsGrid
            key={record.id}
            hasSidebar={true}
            props={record as CardsGridNewsRecord}
          />
        );
      case "CardsGridImageRecord":
        return (
          <CardsGridImages
            key={record.id}
            hasSidebar={true}
            props={record as CardsGridImagesFragmentFragment}
          />
        );
      case "StepperRecord":
        return (
          <StepperAccordion key={record.id} props={record as StepperRecord} />
        );
      case "TableListFaqRecord":
        return (
          <TableListFaq
            key={record.id}
            props={record as TableListFaqRecord}
            noPadding={true}
          />
        );
      case "VideoPlayerRecord":
        return (
          <VideoPlayer key={record.id} props={record as VideoPlayerRecord} />
        );
      case "TableRecord":
        return <Table key={record.id} props={record as TableRecord} />;
      default:
        return null;
    }
  };

  return (
    <Section>
      <Container
        className={cn("", {
          "text-center": alignment === "center",
          "text-end": alignment === "right",
        })}
      >
        <Row>
          <Col>
            {content && (
              <StructuredText
                key={JSON.stringify(content)}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                data={content as any}
                renderBlock={renderBlock}
                customNodeRules={customNodeRules}
              />
            )}
          </Col>
        </Row>
      </Container>
    </Section>
  );
}
