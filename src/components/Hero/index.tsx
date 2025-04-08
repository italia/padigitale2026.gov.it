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

import styles from "./index.module.scss";
import classNames from "classnames/bind";
const cn = classNames.bind(styles);

export function Hero({ props }: { props: HeroRecord }) {
  const { title, text, textstr } = props;
  return (
    <HeroComponent className={cn("wrapper")}>
      <HeroBody>
        {/* <HeroCategory>Category</HeroCategory> */}
        {title && <HeroTitle>{title}</HeroTitle>}
        {text && <p className="d-none d-lg-block font-sans-serif">{text}</p>}
        <div className="font-sans-serif">
          <StructuredText data={textstr?.value as StructuredTextDocument} />
        </div>
        <HeroButton color="primary">Label button</HeroButton>
      </HeroBody>
    </HeroComponent>
  );
}
