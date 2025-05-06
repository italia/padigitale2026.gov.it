"use client";

import { LayoutSidebarRecord } from "@/graphql/generated";
import { RichText } from "@/src/components/RichText";
import { NavScroll } from "@/src/components/NavScroll";

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
        <div className="col-12 col-lg-8 it-page-sections-container">
          {content.map((item, index) => (
            <div
              key={index}
              className="it-page-section"
              id={item.anchorId || undefined}
            >
              <RichText props={item} padding={false} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
