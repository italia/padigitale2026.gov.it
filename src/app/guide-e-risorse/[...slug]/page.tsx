import {
  getResourceData,
  generateResourceStaticParams,
} from "@/lib/pageHelpers";
import { ModularContent } from "@/src/components/ModularContent";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const revalidate = 60;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const fullSlug = slug.join("/");

  const pageData = await getResourceData(fullSlug);

  if (!pageData) {
    return {
      title: "Risorsa non trovata - PA digitale 2026",
      description: "La risorsa richiesta non esiste.",
    };
  }

  const { page } = pageData;
  const seo = page.seo;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const resourceRecord = page as any; // Cast temporaneo per accedere ai campi ResourceRecord

  return {
    title: seo?.title || page.title || "Guide e Risorse - PA digitale 2026",
    description:
      seo?.description ||
      resourceRecord.summary ||
      "Guide e risorse per la transizione digitale della PA",
    robots: seo?.noIndex ? "noindex, nofollow" : "index, follow",
    openGraph: {
      title: seo?.title || page.title || "Guide e Risorse - PA digitale 2026",
      description:
        seo?.description ||
        resourceRecord.summary ||
        "Guide e risorse per la transizione digitale della PA",
      type: "article",
      url: `https://padigitale2026.gov.it/guide-e-risorse/${fullSlug}`,
      images: seo?.image?.responsiveImage
        ? [
            {
              url: seo.image.responsiveImage.src,
              width: seo.image.responsiveImage.width,
              height: seo.image.responsiveImage.height,
              alt:
                seo.image.responsiveImage.alt ||
                page.title ||
                "Guide e Risorse - PA digitale 2026",
            },
          ]
        : undefined,
    },
    twitter: {
      card:
        (seo?.twitterCard as "summary" | "summary_large_image") ||
        "summary_large_image",
      title: seo?.title || page.title || "Guide e Risorse - PA digitale 2026",
      description:
        seo?.description ||
        resourceRecord.summary ||
        "Guide e risorse per la transizione digitale della PA",
      images: seo?.image?.responsiveImage
        ? [seo.image.responsiveImage.src]
        : undefined,
    },
  };
}

export async function generateStaticParams() {
  return await generateResourceStaticParams();
}

export default async function ResourcePage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const fullSlug = slug.join("/");

  const pageData = await getResourceData(fullSlug);

  if (!pageData) return notFound();

  const { page } = pageData;

  return (
    <>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <ModularContent content={{ page } as any} pageContentType="resource" />
    </>
  );
}
