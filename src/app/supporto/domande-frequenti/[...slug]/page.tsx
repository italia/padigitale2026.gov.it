import { getFaqData, generateFaqStaticParams } from "@/lib/pageHelpers";
import { ModularContent } from "@/src/components/ModularContent";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SeoOrFaviconTag, toNextMetadata } from "react-datocms";
import { faqWithOption } from "@/lib/datocms";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const fullSlug = slug.join("/");

  // Lista delle eccezioni che devono essere gestite come supporto
  const supportoFaqExceptions = [
    "supporto/domande-frequenti/misure-e-avvisi",
    "supporto/domande-frequenti/utilizzo-della-piattaforma",
    "supporto/domande-frequenti/piani-di-migrazione",
    "supporto/domande-frequenti/fondo-innovazione",
    "supporto/domande-frequenti/generali",
    "supporto/domande-frequenti/classificazione-dati-e-servizi",
    "supporto/domande-frequenti/rendicontazione",
    "supporto/domande-frequenti/progetti",
  ];

  // Costruisci il slug completo per il controllo delle eccezioni
  const fullSlugForCheck = `supporto/domande-frequenti/${fullSlug}`;

  let pageData;

  // Se è un'eccezione, gestiscila come supporto
  if (supportoFaqExceptions.includes(fullSlugForCheck)) {
    const { getSupportoData } = await import("@/lib/pageHelpers");
    const exceptionSlug = `domande-frequenti/${fullSlug}`;
    pageData = await getSupportoData(exceptionSlug);
  } else {
    // Per le FAQ vere, usa getFaqData
    pageData = await getFaqData(fullSlug);
  }

  if (!pageData) {
    return {
      title: "FAQ non trovata - PA digitale 2026",
      description: "La FAQ richiesta non esiste.",
    };
  }

  const { page } = pageData;
  const seo = page.seo;

  const nextSeo = toNextMetadata(seo as SeoOrFaviconTag[]);

  return nextSeo;
}

export async function generateStaticParams() {
  return await generateFaqStaticParams();
}

export default async function FaqPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const fullSlug = slug.join("/");

  // Lista delle eccezioni che devono essere gestite come supporto
  const supportoFaqExceptions = [
    "supporto/domande-frequenti/misure-e-avvisi",
    "supporto/domande-frequenti/utilizzo-della-piattaforma",
    "supporto/domande-frequenti/piani-di-migrazione",
    "supporto/domande-frequenti/fondo-innovazione",
    "supporto/domande-frequenti/generali",
    "supporto/domande-frequenti/classificazione-dati-e-servizi",
    "supporto/domande-frequenti/rendicontazione",
    "supporto/domande-frequenti/progetti",
  ];

  // Costruisci il slug completo per il controllo delle eccezioni
  const fullSlugForCheck = `supporto/domande-frequenti/${fullSlug}`;

  // Se è un'eccezione, gestiscila come supporto
  if (supportoFaqExceptions.includes(fullSlugForCheck)) {
    const { getSupportoData } = await import("@/lib/pageHelpers");
    // Per le eccezioni, passa solo domande-frequenti/misure-e-avvisi (senza il prefisso supporto/)
    const exceptionSlug = `domande-frequenti/${fullSlug}`;
    const pageData = await getSupportoData(exceptionSlug);

    if (!pageData) return notFound();

    const { page } = pageData;

    return (
      <>
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        <ModularContent content={{ page } as any} pageContentType="supporto" />
      </>
    );
  }

  // Per le FAQ vere, usa getFaqData
  const pageData = await faqWithOption(fullSlugForCheck, false);

  if (!pageData) return notFound();

  const faq = pageData.faq;

  return (
    <>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <ModularContent content={{ page: faq } as any} pageContentType="faq" />
    </>
  );
}
