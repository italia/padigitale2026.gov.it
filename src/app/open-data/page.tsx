import { getDatiData } from "@/lib/pageHelpers";
import { ModularContent } from "@/src/components/ModularContent";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SeoOrFaviconTag, toNextMetadata } from "react-datocms";

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getDatiData("open-data");

  if (!pageData) {
    return {
      title: "Open Data - PA digitale 2026",
      description:
        "Dati aperti e trasparenti sui finanziamenti per la transizione digitale della PA.",
    };
  }

  const { page } = pageData;
  const seo = page.seo;

  const nextSeo = toNextMetadata(seo as SeoOrFaviconTag[]);

  return nextSeo;
}

export default async function OpenDataPage() {
  const pageData = await getDatiData("open-data");

  if (!pageData) return notFound();

  const { page } = pageData;

  return (
    <>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <ModularContent content={{ page } as any} pageContentType="dati" />
    </>
  );
}
