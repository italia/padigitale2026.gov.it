"use client";

import { LayoutSidebarRecord } from "@/graphql/generated";
import { RichText } from "@/src/components/RichText";
import { NavScroll } from "@/src/components/NavScroll";
import {StepperAccordion} from "@/src/components/StepperAccordion";
import { useEffect, useState } from "react";
import {Col} from "design-react-kit";
import {Fragment} from "react";

export function LayoutSidebar({ props }: { props: LayoutSidebarRecord }) {
  const { sidebar, content } = props;
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="container-xxl py-lg-5">
      <div className="row">
        <div className="col-12 col-lg-4">
          {isClient ? (
            <div data-bs-toggle="sticky" data-bs-stackable="true">
              {sidebar && <NavScroll props={sidebar} />}
            </div>
          ) : (
            <div>{sidebar && <NavScroll props={sidebar} />}</div>
          )}
        </div>
        <div className="col-12 col-lg-8 it-page-sections-container">
          {content.map((item, index) => (
            <Fragment key={index}>
              {(item.__typename === 'RichTextRecord') && (
                <div
                  className="row it-page-section"
                  id={item.anchorId || undefined}
                >
                  <RichText props={item} padding={false} />
                </div>
              )}
              {(item.__typename === 'StepperRecord') && (
                <div
                  className="row it-page-section"
                  id={item?.anchorId || undefined}
                >
                  <Col>
                    <StepperAccordion props={item}/>
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
