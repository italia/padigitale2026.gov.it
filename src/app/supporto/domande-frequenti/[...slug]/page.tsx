import { getFaqData, generateAllStaticParams } from "@/lib/pageHelpers";
import { ModularContent } from "@/src/components/ModularContent";
import { UpdateDate } from "@/src/components/UpdateDate";
import { notFound } from "next/navigation";

export const revalidate = 60;

export async function generateStaticParams() {
  const allParams = await generateAllStaticParams();
  return allParams.filter(
    (param) =>
      param.slug[0] === "supporto" &&
      param.slug[1] === "domande-frequenti" &&
      param.slug.length > 2
  );
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
        {"customUpdateDate" in page && page.customUpdateDate && (
          <UpdateDate date={page.customUpdateDate} />
        )}
      </>
    );
  }

  // Per le FAQ vere, usa getFaqData
  const pageData = await getFaqData(fullSlug);

  if (!pageData) return notFound();

  const { page } = pageData;

  return (
    <>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <ModularContent content={{ page } as any} pageContentType="faq" />
      {"customUpdateDate" in page && page.customUpdateDate && (
        <UpdateDate date={page.customUpdateDate} />
      )}
    </>
  );
}
