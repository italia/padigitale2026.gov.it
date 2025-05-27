import { LayoutSidebarRecord } from "@/graphql/generated";
import { RichText } from "@/src/components/RichText";
import { NavScroll } from "@/src/components/NavScroll";
import { StepperAccordion } from "@/src/components/StepperAccordion";
import { Col } from "design-react-kit";
import { Fragment } from "react";

export function LayoutSidebar({ props }: { props: LayoutSidebarRecord }) {
  const { sidebar, content } = props;

  return (
    <div className="container-xxl py-lg-5">
      <div className="row">
        <div className="col-12 col-lg-4">
          <div data-bs-toggle="sticky" data-bs-stackable="true">
            {sidebar && <NavScroll props={sidebar} />}
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
                  <RichText props={item} padding={false} />
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
