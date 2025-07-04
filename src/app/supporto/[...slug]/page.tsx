import {
  getSupportoData,
  generateSupportoStaticParams,
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

  const pageData = await getSupportoData(fullSlug);

  if (!pageData) {
    return {
      title: "Pagina di supporto non trovata - PA digitale 2026",
      description: "La pagina di supporto richiesta non esiste.",
    };
  }

  const { page } = pageData;
  const seo = page.seo;

  return {
    title: seo?.title || page.title || "Supporto - PA digitale 2026",
    description:
      seo?.description || "Supporto e assistenza per PA digitale 2026",
    robots: seo?.noIndex ? "noindex, nofollow" : "index, follow",
    openGraph: {
      title: seo?.title || page.title || "Supporto - PA digitale 2026",
      description:
        seo?.description || "Supporto e assistenza per PA digitale 2026",
      type: "website",
      url: `https://padigitale2026.gov.it/supporto/${fullSlug}`,
      images: seo?.image?.responsiveImage
        ? [
            {
              url: seo.image.responsiveImage.src,
              width: seo.image.responsiveImage.width,
              height: seo.image.responsiveImage.height,
              alt:
                seo.image.responsiveImage.alt ||
                page.title ||
                "Supporto - PA digitale 2026",
            },
          ]
        : undefined,
    },
    twitter: {
      card:
        (seo?.twitterCard as "summary" | "summary_large_image") ||
        "summary_large_image",
      title: seo?.title || page.title || "Supporto - PA digitale 2026",
      description:
        seo?.description || "Supporto e assistenza per PA digitale 2026",
      images: seo?.image?.responsiveImage
        ? [seo.image.responsiveImage.src]
        : undefined,
    },
  };
}

export async function generateStaticParams() {
  return await generateSupportoStaticParams();
}

export default async function SupportoPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const fullSlug = slug.join("/");

  const pageData = await getSupportoData(fullSlug);

  if (!pageData) return notFound();

  const { page } = pageData;

  return (
    <>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <ModularContent content={{ page } as any} pageContentType="supporto" />
    </>
  );
}
