import { getDatiData } from "@/lib/pageHelpers";
import { ModularContent } from "@/src/components/ModularContent";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const revalidate = 60;

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

  return {
    title: seo?.title || page.title || "Open Data - PA digitale 2026",
    description:
      seo?.description ||
      "Dati aperti e trasparenti sui finanziamenti per la transizione digitale della PA.",
    robots: seo?.noIndex ? "noindex, nofollow" : "index, follow",
    openGraph: {
      title: seo?.title || page.title || "Open Data - PA digitale 2026",
      description:
        seo?.description ||
        "Dati aperti e trasparenti sui finanziamenti per la transizione digitale della PA.",
      type: "website",
      url: "https://padigitale2026.gov.it/open-data",
      images: seo?.image?.responsiveImage
        ? [
            {
              url: seo.image.responsiveImage.src,
              width: seo.image.responsiveImage.width,
              height: seo.image.responsiveImage.height,
              alt:
                seo.image.responsiveImage.alt ||
                page.title ||
                "Open Data - PA digitale 2026",
            },
          ]
        : undefined,
    },
    twitter: {
      card:
        (seo?.twitterCard as "summary" | "summary_large_image") ||
        "summary_large_image",
      title: seo?.title || page.title || "Open Data - PA digitale 2026",
      description:
        seo?.description ||
        "Dati aperti e trasparenti sui finanziamenti per la transizione digitale della PA.",
      images: seo?.image?.responsiveImage
        ? [seo.image.responsiveImage.src]
        : undefined,
    },
  };
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
