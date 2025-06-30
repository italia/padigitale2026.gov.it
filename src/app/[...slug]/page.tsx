import { getPageData, generateAllStaticParams } from "@/lib/pageHelpers";
import { ModularContent } from "@/src/components/ModularContent";
import { notFound } from "next/navigation";

export const revalidate = 60;

export async function generateStaticParams() {
  const allParams = await generateAllStaticParams();

  // Lista delle eccezioni che devono essere gestite dalla pagina principale
  const supportoFaqExceptions = [
    "supporto/domande-frequenti/misure-e-avvisi",
    "supporto/domande-frequenti/utilizzo-della-piattaforma",
    "supporto/domande-frequenti/piani-di-migrazione",
    "supporto/domande-frequenti/fondo-innovazione",
    "supporto/domande-frequenti/generali",
    "supporto/domande-frequenti/classificazione-dati-e-servizi",
    "supporto/domande-frequenti/rendicontazione",
  ];

  return allParams.filter((param) => {
    const fullSlug = param.slug.join("/");

    // Solo pagine normali (non supporto, notizie, risorse, FAQ)
    const isNormalPage =
      !param.slug.includes("supporto") &&
      !param.slug.includes("notizie") &&
      !param.slug.includes("guide-e-risorse") &&
      param.slug[0] !== "open-data";

    // Includi anche le eccezioni
    const isException = supportoFaqExceptions.includes(fullSlug);

    return isNormalPage || isException;
  });
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
