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
  TableListFaqRecord,
  CardsGridAnnouncementRecord,
  CardsGridImagesFragmentFragment,
  LayoutSidebarFilterRecord,
  FaqRecord,
  AccordionsFilterRecord,
  TableListUpdateRecord,
  CardsListFilterRecord,
  HeroSearchRecord,
  InstantSearchFaqRecord,
  BloccoGraficoRecord,
  TabsWrapRecord,
} from "@/graphql/generated";
import { BackToTop } from "design-react-kit";
import { Hero } from "@/src/components/Hero";
import { HeroWithData } from "@/src/components/HeroWithData";
import { SplitBanner } from "@/src/components/SplitBanner";
import { Banner } from "@/src/components/Banner";
import { VideoPlayer } from "@/src/components/VideoPlayer";
import { CardsGrid } from "@/src/components/CardsGrid";
import { CardsGridImages } from "@/src/components/CardsGridImages";
import { LayoutSidebar } from "@/src/components/LayoutSidebar";
import { TableList } from "@/src/components/TableList";
import { RichTextSection } from "@/src/components/RichTextSection";
import { TableListFaq } from "@/src/components/TableListFaq";
import { LayoutSidebarFilter } from "@/src/components/LayoutSidebarFilter";
import { AccordionsFilter } from "@/src/components/AccordionsFilter";
import { TableListUpdates } from "@/src/components/TableListUpdates";
import { CardsListFilter } from "@/src/components/CardsListFilter";
import { HeroSearch } from "@/src/components/HeroSearch";
import { InstantSearchFaq } from "@/src/components/InstantSearchFaq";
import { BloccoGrafico } from "@/src/components/BloccoGrafico";
import { TabsWrap } from "@/src/components/TabsWrap";
import { FormNewsletter } from "@/src/components/FormNewsletter";
import { FormTo } from "@/src/components/FormTo";

export function ModularContent({
  content,
  pageContentType,
}: {
  content: PageQuery;
  pageContentType: "page" | "faq" | "news" | "resource" | "supporto" | "dati";
}) {
  return (
    <>
      {/* 
        FAQ pages ALWAYS have a HeroWithData as first element in the body 
        that is populated by the CMS page data automatically 
      */}
      {pageContentType === "faq" && (
        <HeroWithData
          props={
            {
              _createdAt: content.page?._createdAt,
              _updatedAt: content.page?._updatedAt,
              title: content.page?.title || null,
              updateDate: content.page?.customUpdateDate || null,
              argomento: (content.page as FaqRecord)?.category || null,
              misura: (content.page as FaqRecord)?.misura || null,
              beneficiari: (content.page as FaqRecord)?.beneficiari || null,
            } as DataHeroRecord
          }
        />
      )}
      {content.page?.body.map((el, idx) => {
        switch (el.__typename) {
          case "HeroRecord":
            return <Hero key={idx} props={el as HeroRecord} />;
          case "SplitBannerRecord":
            return <SplitBanner key={idx} props={el as SplitBannerRecord} />;
          case "BannerRecord":
            return <Banner key={idx} props={el as BannerRecord} />;
          case "RichTextSectionRecord":
            return (
              <RichTextSection
                key={idx}
                isPageSection={true}
                props={el as RichTextSectionRecord}
              />
            );
          case "VideoPlayerRecord":
            return <VideoPlayer key={idx} props={el as VideoPlayerRecord} />;
          case "CardsGridGenericRecord":
            return <CardsGrid key={idx} props={el as CardsGridGenericRecord} />;
          case "CardsGridAttachmentRecord":
            return (
              <CardsGrid key={idx} props={el as CardsGridAttachmentRecord} />
            );
          case "CardsGridServiceRecord":
            return <CardsGrid key={idx} props={el as CardsGridServiceRecord} />;
          case "CardsGridResourceRecord":
            return (
              <CardsGrid key={idx} props={el as CardsGridResourceRecord} />
            );
          case "CardsGridAnnouncementRecord":
            return (
              <CardsGrid key={idx} props={el as CardsGridAnnouncementRecord} />
            );
          case "CardsGridNewsRecord":
            return <CardsGrid key={idx} props={el as CardsGridNewsRecord} />;
          case "CardsGridImageRecord":
            return (
              <CardsGridImages
                key={idx}
                props={el as CardsGridImagesFragmentFragment}
              />
            );
          case "LayoutSidebarRecord":
            return (
              <LayoutSidebar key={idx} props={el as LayoutSidebarRecord} />
            );
          case "LayoutSidebarFilterRecord":
            return (
              <LayoutSidebarFilter
                key={idx}
                props={el as LayoutSidebarFilterRecord}
              />
            );
          case "TableListRecord":
            return <TableList key={idx} props={el as TableListRecord} />;
          case "TableListFaqRecord":
            return <TableListFaq key={idx} props={el as TableListFaqRecord} />;
          case "AccordionsFilterRecord":
            return (
              <AccordionsFilter
                key={idx}
                props={el as AccordionsFilterRecord}
              />
            );
          case "TableListUpdateRecord":
            return (
              <TableListUpdates key={idx} props={el as TableListUpdateRecord} />
            );
          case "CardsListFilterRecord":
            return (
              <CardsListFilter key={idx} props={el as CardsListFilterRecord} />
            );
          case "HeroSearchRecord":
            return <HeroSearch key={idx} props={el as HeroSearchRecord} />;
          case "InstantSearchFaqRecord":
            return (
              <InstantSearchFaq
                key={idx}
                props={el as InstantSearchFaqRecord}
              />
            );
          case "BloccoGraficoRecord":
            return (
              <BloccoGrafico key={idx} props={el as BloccoGraficoRecord} />
            );
          case "TabsWrapRecord":
            return <TabsWrap key={idx} props={el as TabsWrapRecord} />;
          case "FormNewsletterRecord":
            return <FormNewsletter key={idx} />;
          case "FormToRecord":
            return <FormTo key={idx} />;
          default:
            return null;
        }
      })}
      <BackToTop ariaLabel={"Clicca qui per tornare in alto"} shadow={true} />
    </>
  );
}
