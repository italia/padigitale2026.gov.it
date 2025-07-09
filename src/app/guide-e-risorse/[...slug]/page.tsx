import {
  getResourceData,
  generateResourceStaticParams,
} from "@/lib/pageHelpers";
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
  // const resourceRecord = page as any; // Cast temporaneo per accedere ai campi ResourceRecord

  const nextSeo = toNextMetadata(seo as SeoOrFaviconTag[]);

  return nextSeo;
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
