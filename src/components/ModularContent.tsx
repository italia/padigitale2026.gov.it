"use client";

import {
  PageQuery,
  HeroRecord,
  SplitBannerRecord,
  BannerRecord,
  DataHeroRecord,
  RichTextRecord,
  VideoPlayerRecord,
  CardsGridGenericRecord,
  CardsGridAttachmentRecord,
  CardsGridServiceRecord,
  CardsGridResourceRecord,
  CardsGridNewsRecord,
  LayoutSidebarRecord,
  TableListRecord,
} from "@/graphql/generated";
import { Hero } from "@/src/components/Hero";
import { HeroWithData } from "@/src/components/HeroWithData";
import { SplitBanner } from "@/src/components/SplitBanner";
import { Banner } from "@/src/components/Banner";
import { RichText } from "@/src/components/RichText";
import { VideoPlayer } from "@/src/components/VideoPlayer";
import { CardsGrid } from "@/src/components/CardsGrid";
import { LayoutSidebar } from "@/src/components/LayoutSidebar";
import { TableList } from "@/src/components/TableList";
export function ModularContent({ content }: { content: PageQuery }) {
  return (
    <>
      {content.page?.body.map((el, idx) => {
        switch (el.__typename) {
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
            return <VideoPlayer key={idx} props={el as VideoPlayerRecord}/>;
          case "CardsGridGenericRecord":
            return <CardsGrid key={idx} props={el as CardsGridGenericRecord}/>
          case "CardsGridAttachmentRecord":
            return <CardsGrid key={idx} props={el as CardsGridAttachmentRecord}/>
          case "CardsGridServiceRecord":
            return <CardsGrid key={idx} props={el as CardsGridServiceRecord}/>
          case "CardsGridResourceRecord":
            return <CardsGrid key={idx} props={el as CardsGridResourceRecord}/>
          case "CardsGridNewsRecord":
            return <CardsGrid key={idx} props={el as CardsGridNewsRecord}/>
          case "LayoutSidebarRecord":
            return (
              <LayoutSidebar key={idx} props={el as LayoutSidebarRecord} />
            );
          case "TableListRecord":
            return <TableList key={idx} props={el as TableListRecord} />;
          default:
            return null;
        }
      })}
    </>
  );
}
