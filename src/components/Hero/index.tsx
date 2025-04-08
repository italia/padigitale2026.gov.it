"use client";

import { HeroRecord } from "@/graphql/generated";
import {
  Hero as HeroComponent,
  HeroBody,
  HeroCategory,
  HeroTitle,
  HeroButton,
} from "design-react-kit";

export function Hero({ props }: { props: HeroRecord }) {
  const { title, text } = props;
  return (
    <HeroComponent>
      <HeroBody>
        <HeroCategory>Category</HeroCategory>
        {title && <HeroTitle>{title}</HeroTitle>}
        {text && <p className="d-none d-lg-block">{text}</p>}
        <HeroButton color="primary" outline>
          Label button
        </HeroButton>
      </HeroBody>
    </HeroComponent>
  );
}
