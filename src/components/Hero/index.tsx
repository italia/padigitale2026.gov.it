"use client";
import { StructuredText, type StructuredTextDocument } from "react-datocms";

import { HeroRecord } from "@/graphql/generated";
import {
  Hero as HeroComponent,
  HeroBody,
  // HeroCategory,
  HeroTitle,
  HeroButton,
} from "design-react-kit";

export function Hero({ props }: { props: HeroRecord }) {
  const { title, text, textstr } = props;
  return (
    <HeroComponent>
      <HeroBody>
        {/* <HeroCategory>Category</HeroCategory> */}
        {title && <HeroTitle>{title}</HeroTitle>}
        {text && <p className="d-none d-lg-block">{text}</p>}
        <div className="d-none d-lg-block">
          <StructuredText data={textstr?.value as StructuredTextDocument} />
        </div>
        <HeroButton color="primary">Label button</HeroButton>
      </HeroBody>
    </HeroComponent>
  );
}
