import { getNewsData, generateNewsStaticParams } from "@/lib/pageHelpers";
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

  const pageData = await getNewsData(fullSlug);

  if (!pageData) {
    return {
      title: "Notizia non trovata - PA digitale 2026",
      description: "La notizia richiesta non esiste.",
    };
  }

  const { page } = pageData;
  const seo = page.seo;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const newsRecord = page as any; // Cast temporaneo per accedere ai campi NewsRecord

  return {
    title: seo?.title || page.title || "Notizie - PA digitale 2026",
    description:
      seo?.description ||
      newsRecord.summary ||
      "Notizie e aggiornamenti su PA digitale 2026",
    robots: seo?.noIndex ? "noindex, nofollow" : "index, follow",
    openGraph: {
      title: seo?.title || page.title || "Notizie - PA digitale 2026",
      description:
        seo?.description ||
        newsRecord.summary ||
        "Notizie e aggiornamenti su PA digitale 2026",
      type: "article",
      url: `https://padigitale2026.gov.it/notizie/${fullSlug}`,
      images: seo?.image?.responsiveImage
        ? [
            {
              url: seo.image.responsiveImage.src,
              width: seo.image.responsiveImage.width,
              height: seo.image.responsiveImage.height,
              alt:
                seo.image.responsiveImage.alt ||
                page.title ||
                "Notizie - PA digitale 2026",
            },
          ]
        : undefined,
    },
    twitter: {
      card:
        (seo?.twitterCard as "summary" | "summary_large_image") ||
        "summary_large_image",
      title: seo?.title || page.title || "Notizie - PA digitale 2026",
      description:
        seo?.description ||
        newsRecord.summary ||
        "Notizie e aggiornamenti su PA digitale 2026",
      images: seo?.image?.responsiveImage
        ? [seo.image.responsiveImage.src]
        : undefined,
    },
  };
}

export async function generateStaticParams() {
  return await generateNewsStaticParams();
}

export default async function NewsPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const fullSlug = slug.join("/");

  const pageData = await getNewsData(fullSlug);

  if (!pageData) return notFound();

  const { page } = pageData;

  return (
    <>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <ModularContent content={{ page } as any} pageContentType="news" />
    </>
  );
}
