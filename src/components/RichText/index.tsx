"use client";

// import { SRCImage } from "react-datocms";
import { StructuredText } from "react-datocms";
import { RichTextRecord, AlertRecord, ButtonRecord } from "@/graphql/generated";
import { Hero as RichTextComponent, Alert, Button } from "design-react-kit";

import styles from "./index.module.scss";
import classNames from "classnames/bind";
const cn = classNames.bind(styles);

export function RichText({ props }: { props: RichTextRecord }) {
  const { content } = props;

  const renderBlock = (context: any) => {
    const record = context.record;

    if (!record?.__typename) return null;

    switch (record.__typename) {
      case "AlertRecord":
        return <Alert color={record.color}>{record.text}</Alert>;
      case "ButtonRecord":
        return (
          <Button href={record.href || `/${record.cmsPage?.slug || ""}`}>
            {record.text}
          </Button>
        );
      default:
        return null;
    }
  };

  return (
    <RichTextComponent className={cn("wrapper p-0")}>
      <div className={cn("row w-100 h-100 mx-auto container-xxl")}>
        <div className={cn("colonna-testo", "col-12 col-lg-6 px-0")}>
          {/* Body */}
          <div className="it-hero-text-wrapper container px-4">
            {content && (
              <StructuredText data={content} renderBlock={renderBlock} />
            )}
          </div>
        </div>
      </div>
    </RichTextComponent>
  );
}
