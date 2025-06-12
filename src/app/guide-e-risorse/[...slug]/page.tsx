import {
  resource,
  getAllResources
} from "@/lib/datocms";
import {
  AllResourcesQuery,
  ResourceQuery,
} from "@/graphql/generated";
import { ModularContent } from "@/src/components/ModularContent";
import { notFound } from "next/navigation";

export const dynamicParams = true;
export const revalidate = 120;

export async function generateStaticParams() {
  const pages = (await getAllResources()) as AllResourcesQuery;

  return pages.allResources
    .filter((page) => page.slug)
    .map((page) => {
      const slug = page.slug!.replace(/^supporto\//, '');
      return {
        slug: slug.split("/"),
        customUpdateDate: page.customUpdateDate,
      };
    });
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const fullSlug = `supporto/${slug.slice(1).join("/")}`;

  const pages = (await resource(fullSlug)) as ResourceQuery;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const page: any = pages.resource;
  const pageContentType = "resource";

  if (!page) return notFound();

  // console.log(page, 'page')

  return (
    <>
      <ModularContent content={{ page }} pageContentType={pageContentType} />
      {page.customUpdateDate && (
        <div className="container-xxl">
          <p className="my-4 fs-6 text-secondary">
            Aggiornato il{" "}
            <time dateTime={page.customUpdateDate}>
              {new Intl.DateTimeFormat("it-IT", {
                timeZone: "Europe/Rome",
                day: "2-digit",
                month: "long",
                year: "numeric",
              }).format(new Date(page.customUpdateDate))}
            </time>
          </p>
        </div>
      )}
    </>
  );
}
