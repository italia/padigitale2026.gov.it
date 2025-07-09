import { page } from "@/lib/datocms";
import { ModularContent } from "@/src/components/ModularContent";
import { PageQuery } from "@/graphql/generated";
import type { Metadata } from "next";
import { SeoOrFaviconTag, toNextMetadata } from "react-datocms";

export async function generateMetadata(): Promise<Metadata> {
  const content = (await page("homepage")) as PageQuery;
  const seo = content.page?.seo;

  const nextSeo = toNextMetadata(seo as SeoOrFaviconTag[]);

  return nextSeo;
}

export default async function Page() {
  const content = (await page("homepage")) as PageQuery;

  return <ModularContent content={content} pageContentType="page" />;
}
