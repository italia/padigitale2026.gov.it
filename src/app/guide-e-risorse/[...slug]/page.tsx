import { getResourceData, generateAllStaticParams } from "@/lib/pageHelpers";
import { ModularContent } from "@/src/components/ModularContent";
import { notFound } from "next/navigation";

export const revalidate = 60;

export async function generateStaticParams() {
  const allParams = await generateAllStaticParams();
  return allParams.filter(
    (param) => param.slug[0] === "guide-e-risorse" && param.slug.length === 2
  );
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
