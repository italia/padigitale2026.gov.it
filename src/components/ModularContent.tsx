"use client";

import {
  PageQuery,
  HeroRecord,
  SplitBannerRecord,
  BannerRecord,
  DataHeroRecord,
  RichTextRecord,
  VideoPlayerRecord,
  CardServiceRecord,
  NavScrollRecord,
} from "@/graphql/generated";
import { Alert, Button } from "design-react-kit";
import { Hero } from "@/src/components/Hero";
import { HeroWithData } from "@/src/components/HeroWithData";
import { SplitBanner } from "@/src/components/SplitBanner";
import { Banner } from "@/src/components/Banner";
import { RichText } from "@/src/components/RichText";
import { VideoPlayer } from "@/src/components/VideoPlayer";
import { CardService } from "@/src/components/CardService";
import { NavScroll } from "@/src/components/NavScroll";
export function ModularContent({ content }: { content: PageQuery }) {
  return (
    <>
      {content.page?.body.map((el, idx) => {
        switch (el.__typename) {
          case "AlertRecord":
            return <Alert key={idx}>{el.text}</Alert>;
          case "ButtonRecord":
            return (
              <Button key={idx} href={el.href ? el.href : ""}>
                {el.text}
              </Button>
            );
          case "HeroRecord":
            return <Hero key={idx} props={el as HeroRecord} />;
          case "SplitBannerRecord":
            return <SplitBanner key={idx} props={el as SplitBannerRecord} />;
          case "BannerRecord":
            return <Banner key={idx} props={el as BannerRecord} />;
          case "DataHeroRecord":
            return <HeroWithData key={idx} props={el as DataHeroRecord} />;
          case "RichTextRecord":
            return <RichText key={idx} props={el as RichTextRecord} />;
          case "VideoPlayerRecord":
            return <VideoPlayer key={idx} props={el as VideoPlayerRecord} />;
          case "CardServiceRecord":
            return <CardService key={idx} props={el as CardServiceRecord} />;
          case "NavScrollRecord":
            return <NavScroll key={idx} props={el as NavScrollRecord} />;
          default:
            return null;
        }
      })}
    </>
  );
}
