import { getNewsData, generateNewsStaticParams } from "@/lib/pageHelpers";
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

  const pageData = await getNewsData(fullSlug);

  if (!pageData) {
    return {
      title: "Notizia non trovata - PA digitale 2026",
      description: "La notizia richiesta non esiste.",
    };
  }

  const { page } = pageData;
  const seo = page.seo;

  const nextSeo = toNextMetadata(seo as SeoOrFaviconTag[]);

  return nextSeo;
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

  const pageData = await getNewsData(`novita/notizie/${fullSlug}`);

  if (!pageData) return notFound();

  const { page } = pageData;

  return (
    <>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <ModularContent content={{ page } as any} pageContentType="news" />
    </>
  );
}
