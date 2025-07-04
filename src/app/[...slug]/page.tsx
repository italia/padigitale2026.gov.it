import { getPageData, generatePageStaticParams } from "@/lib/pageHelpers";
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

  // Gestione delle eccezioni per supporto
  const supportoFaqExceptions = [
    "supporto/domande-frequenti/misure-e-avvisi",
    "supporto/domande-frequenti/utilizzo-della-piattaforma",
    "supporto/domande-frequenti/piani-di-migrazione",
    "supporto/domande-frequenti/fondo-innovazione",
    "supporto/domande-frequenti/generali",
    "supporto/domande-frequenti/classificazione-dati-e-servizi",
    "supporto/domande-frequenti/rendicontazione",
  ];

  let pageData;

  if (supportoFaqExceptions.includes(fullSlug)) {
    const { getSupportoData } = await import("@/lib/pageHelpers");
    pageData = await getSupportoData(fullSlug);
  } else {
    pageData = await getPageData(fullSlug);
  }

  if (!pageData) {
    return {
      title: "Pagina non trovata",
      description: "La pagina richiesta non esiste.",
    };
  }

  const { page } = pageData;
  const seo = page.seo;

  return {
    title: seo?.title || page.title || "PA digitale 2026",
    description:
      seo?.description ||
      "PA digitale 2026 - Trova gli avvisi di finanziamento per la transizione digitale della tua amministrazione",
    robots: seo?.noIndex ? "noindex, nofollow" : "index, follow",
    openGraph: {
      title: seo?.title || page.title || "PA digitale 2026",
      description:
        seo?.description ||
        "PA digitale 2026 - Trova gli avvisi di finanziamento per la transizione digitale della tua amministrazione",
      type: "website",
      url: `https://padigitale2026.gov.it/${fullSlug}`,
      images: seo?.image?.responsiveImage
        ? [
            {
              url: seo.image.responsiveImage.src,
              width: seo.image.responsiveImage.width,
              height: seo.image.responsiveImage.height,
              alt:
                seo.image.responsiveImage.alt ||
                page.title ||
                "PA digitale 2026",
            },
          ]
        : undefined,
    },
    twitter: {
      card:
        (seo?.twitterCard as "summary" | "summary_large_image") ||
        "summary_large_image",
      title: seo?.title || page.title || "PA digitale 2026",
      description:
        seo?.description ||
        "PA digitale 2026 - Trova gli avvisi di finanziamento per la transizione digitale della tua amministrazione",
      images: seo?.image?.responsiveImage
        ? [seo.image.responsiveImage.src]
        : undefined,
    },
  };
}

export async function generateStaticParams() {
  return await generatePageStaticParams();
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const fullSlug = slug.join("/");

  // Gestione delle eccezioni
  const supportoFaqExceptions = [
    "supporto/domande-frequenti/misure-e-avvisi",
    "supporto/domande-frequenti/utilizzo-della-piattaforma",
    "supporto/domande-frequenti/piani-di-migrazione",
    "supporto/domande-frequenti/fondo-innovazione",
    "supporto/domande-frequenti/generali",
    "supporto/domande-frequenti/classificazione-dati-e-servizi",
    "supporto/domande-frequenti/rendicontazione",
  ];

  // Se è un'eccezione, usa getSupportoData
  if (supportoFaqExceptions.includes(fullSlug)) {
    const { getSupportoData } = await import("@/lib/pageHelpers");
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

  // Per tutte le altre pagine, usa getPageData
  const pageData = await getPageData(fullSlug);

  if (!pageData) return notFound();

  const { page } = pageData;

  return (
    <>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <ModularContent content={{ page } as any} pageContentType="page" />
    </>
  );
}
