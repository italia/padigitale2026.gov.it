import { getAllPages } from "@/lib/datocms";
import { AllPagesQuery } from "@/graphql/generated";
import { ModularContent } from "@/src/components/ModularContent";
import { notFound } from "next/navigation";

// const isProd: boolean = process.env.VERCEL_ENV === "production";

export const dynamicParams = true;
export const dynamic = "force-static";
export const fetchCache = "auto";
export const revalidate = 60;

export async function generateStaticParams() {
  const pages = (await getAllPages()) as AllPagesQuery;

  return pages.allPages.map((page) => ({
    slug: page.slug,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const pages = (await getAllPages()) as AllPagesQuery;
  const page = pages.allPages.find((p) => p.slug === slug);

  if (!page) return notFound();

  return <ModularContent content={{ page }} />;
}
