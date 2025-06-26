import { getNewsData, generateAllStaticParams } from "@/lib/pageHelpers";
import { ModularContent } from "@/src/components/ModularContent";
import { UpdateDate } from "@/src/components/UpdateDate";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const allParams = await generateAllStaticParams();
  return allParams.filter(
    (param) => param.slug[0] === "notizie" && param.slug.length === 2
  );
}

export default async function NewsPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const fullSlug = slug.join("/");

  const pageData = await getNewsData(fullSlug);

  if (!pageData) return notFound();

  const { page } = pageData;

  return (
    <>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <ModularContent content={{ page } as any} pageContentType="news" />
      {"customUpdateDate" in page && page.customUpdateDate && (
        <UpdateDate date={page.customUpdateDate} />
      )}
    </>
  );
}
