import { getPageData, generatePageStaticParams } from "@/lib/pageHelpers";
import { ModularContent } from "@/src/components/ModularContent";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SeoOrFaviconTag, toNextMetadata } from "react-datocms";

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
    "supporto/domande-frequenti/progetti",
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

  const nextSeo = toNextMetadata(seo as SeoOrFaviconTag[]);

  return nextSeo;
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
    "supporto/domande-frequenti/progetti",
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
