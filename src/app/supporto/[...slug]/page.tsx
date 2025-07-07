import {
  getSupportoData,
  generateSupportoStaticParams,
} from "@/lib/pageHelpers";
import { ModularContent } from "@/src/components/ModularContent";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SeoOrFaviconTag, toNextMetadata } from "react-datocms";

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

  const nextSeo = toNextMetadata(seo as SeoOrFaviconTag[]);

  return nextSeo;

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
