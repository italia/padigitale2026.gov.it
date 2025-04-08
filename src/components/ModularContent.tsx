"use client";

import { PageQuery, HeroRecord } from "@/graphql/generated";
import { Alert, Button } from "design-react-kit";
import { Hero } from "./Hero";
export function ModularContent({ content }: { content: PageQuery }) {
  return (
    <>
      {content.page?.body.map((el, idx) => {
        switch (el.__typename) {
          case "AlertRecord":
            return <Alert key={idx}>{el.text}</Alert>;

          case "ButtonRecord":
            return (
              <Button
                key={idx}
                color={el.color ? el.color : ""}
                href={el.href ? el.href : ""}
                size={(el.size as "sm" | "lg" | "xs") || "sm"}
              >
                {el.text}
              </Button>
            );
          case "HeroRecord":
            return <Hero key={idx} props={el as HeroRecord} />;
          default:
            return null;
        }
      })}
    </>
  );
}
