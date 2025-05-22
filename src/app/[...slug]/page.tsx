import {
  getAllPages,
  getAllFaqs,
  getAllNews,
  getAllResources,
} from "@/lib/datocms";
import {
  AllPagesQuery,
  AllFaqsQuery,
  AllNewsQuery,
  AllResourcesQuery,
} from "@/graphql/generated";
import { ModularContent } from "@/src/components/ModularContent";
import { notFound } from "next/navigation";
import { draftMode } from "next/headers";

export const dynamicParams = true;
export const revalidate = 120;

export async function generateStaticParams() {
  const pages = (await getAllPages()) as AllPagesQuery;

  return pages.allPages
    .filter((page) => page.slug)
    .map((page) => ({
      slug: page.slug!.split("/"),
      customUpdateDate: page.customUpdateDate,
    }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const fullSlug = slug.join("/");
  const { isEnabled } = await draftMode(); // get draft content or not

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let page: any;
  let pages: AllPagesQuery | AllFaqsQuery | AllNewsQuery | AllResourcesQuery;

  switch (true) {
    case fullSlug.includes("domande-frequenti/"):
      pages = (await getAllFaqs(isEnabled)) as AllFaqsQuery;
      page = pages.allFaqs.find((p) => p.slug === fullSlug);
      break;
    case fullSlug.includes("notizie/"):
      pages = (await getAllNews(isEnabled)) as AllNewsQuery;
      page = pages.allNews.find((p) => p.slug === fullSlug);
      break;
    case fullSlug.includes("guide-e-risorse/"):
      pages = (await getAllResources(isEnabled)) as AllResourcesQuery;
      page = pages.allResources.find((p) => p.slug === fullSlug);
      break;
    default:
      pages = (await getAllPages(isEnabled)) as AllPagesQuery;
      page = pages.allPages.find((p) => p.slug === fullSlug);
      break;
  }

  if (!page) return notFound();

  // console.log('page', page);

  return (
    <>
      <ModularContent content={{ page }} />
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
