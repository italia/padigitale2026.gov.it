"use client";

import {
  PageQuery,
  HeroRecord,
  SplitBannerRecord,
  BannerRecord,
  DataHeroRecord,
  RichTextSectionRecord,
  VideoPlayerRecord,
  CardsGridGenericRecord,
  CardsGridAttachmentRecord,
  CardsGridServiceRecord,
  CardsGridResourceRecord,
  CardsGridNewsRecord,
  LayoutSidebarRecord,
  TableListRecord,
  CardsGridAnnouncementRecord,
  CardsGridImagesFragmentFragment
} from "@/graphql/generated";
import {Hero} from "@/src/components/Hero";
import {HeroWithData} from "@/src/components/HeroWithData";
import {SplitBanner} from "@/src/components/SplitBanner";
import {Banner} from "@/src/components/Banner";
import {VideoPlayer} from "@/src/components/VideoPlayer";
import {CardsGrid} from "@/src/components/CardsGrid";
import {CardsGridImages} from "@/src/components/CardsGridImages";
import {LayoutSidebar} from "@/src/components/LayoutSidebar";
import {TableList} from "@/src/components/TableList";
import {RichTextSection} from "@/src/components/RichTextSection";
import {BackToTop} from "design-react-kit";

export function ModularContent({content}: { content: PageQuery }) {
  return (
    <>
      {content.page?.body.map((el, idx) => {
        switch (el.__typename) {
          case "HeroRecord":
            return <Hero key={idx} props={el as HeroRecord}/>;
          case "SplitBannerRecord":
            return <SplitBanner key={idx} props={el as SplitBannerRecord}/>;
          case "BannerRecord":
            return <Banner key={idx} props={el as BannerRecord}/>;
          case "DataHeroRecord":
            return <HeroWithData key={idx} props={el as DataHeroRecord}/>;
          case "RichTextSectionRecord":
            return <RichTextSection key={idx} isPageSection={true} props={el as RichTextSectionRecord}/>;
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
          case "CardsGridAnnouncementRecord":
            return <CardsGrid key={idx} props={el as CardsGridAnnouncementRecord}/>
          case "CardsGridNewsRecord":
            return <CardsGrid key={idx} props={el as CardsGridNewsRecord}/>
          case "CardsGridImageRecord":
            return <CardsGridImages key={idx} props={el as CardsGridImagesFragmentFragment}/>;
          case "LayoutSidebarRecord":
            return <LayoutSidebar key={idx} props={el as LayoutSidebarRecord}/>;
          case "TableListRecord":
            return <TableList key={idx} props={el as TableListRecord}/>;
          default:
            return null;
        }
      })}
      <BackToTop ariaLabel={"Clicca qui per tornare in alto"} shadow={true}/>
    </>
  );
}
