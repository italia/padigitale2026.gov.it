import {
  LayoutSidebarRecord,
  RichTextModelContentField,
  RichTextRecord,
} from "@/graphql/generated";
import { RichText } from "@/src/components/RichText";
import { NavScroll } from "@/src/components/NavScroll";
import { StepperAccordion } from "@/src/components/StepperAccordion";
import { Col } from "design-react-kit";
import { Fragment } from "react";

type NavSubsection = {
  id: string;
  title: string;
};

type RichTextWithContent = RichTextRecord & {
  richTextContent?: RichTextModelContentField;
};

export function LayoutSidebar({ props }: { props: LayoutSidebarRecord }) {
  const { sidebar, content } = props;
  const subsectionsBySection = content.reduce<Record<string, NavSubsection[]>>(
    (subsections, item) => {
      if (item.__typename !== "RichTextRecord" || !item.anchorId) {
        return subsections;
      }

      const sectionId = item.anchorId;
      const richTextItem = item as RichTextWithContent;
      const subsectionsForSection =
        richTextItem.richTextContent?.blocks.flatMap((block) => {
          if (block.__typename !== "TableListFaqRecord" || !block.title) {
            return [];
          }

          return [{ id: `${block.id}-title`, title: block.title }];
        }) || [];

      if (subsectionsForSection.length > 0) {
        subsections[sectionId] = subsectionsForSection;
      }

      return subsections;
    },
    {},
  );

  return (
    <div className="container-xxl px-md-4 py-lg-5">
      <div className="row">
        <div className="col-12 col-lg-4">
          <div data-bs-toggle="sticky" data-bs-stackable="true">
            {sidebar && (
              <NavScroll props={sidebar} subsections={subsectionsBySection} />
            )}
          </div>
        </div>
        <div
          className="col-12 col-lg-8 it-page-sections-container"
          role="main"
          aria-label="Contenuto principale"
        >
          {content.map((item, index) => (
            <Fragment key={index}>
              {item.__typename === "RichTextRecord" && (
                <div
                  className="row it-page-section pb-4"
                  id={item.anchorId || undefined}
                  role="region"
                  aria-label={
                    item.anchorId ? `Sezione ${item.anchorId}` : undefined
                  }
                >
                  <RichText props={item} />
                </div>
              )}
              {item.__typename === "StepperRecord" && (
                <div
                  className="row it-page-section"
                  id={item?.anchorId || undefined}
                  role="region"
                  aria-label={
                    item?.anchorId ? `Sezione ${item.anchorId}` : undefined
                  }
                >
                  <Col>
                    <StepperAccordion props={item} />
                  </Col>
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
