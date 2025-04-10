import { getAllPages } from "@/lib/datocms";
import { AllPagesQuery } from "@/graphql/generated";
import { notFound } from "next/navigation";
import { ModularContent } from "../../components/ModularContent";

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

  return (
    <main>
      <div className="container">
        <h1>{page.title}</h1>
        <ModularContent content={{ page }} />
      </div>
    </main>
  );
}
