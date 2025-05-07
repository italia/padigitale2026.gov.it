import { getAllPages, getAllFaqs } from "@/lib/datocms";
import { AllPagesQuery, AllFaqsQuery } from "@/graphql/generated";
import { ModularContent } from "@/src/components/ModularContent";
import { notFound } from "next/navigation";

export const dynamicParams = true;
export const dynamic = "force-static";
export const fetchCache = "auto";
export const revalidate = 60;

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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let page: any;
  let pages: AllPagesQuery | AllFaqsQuery;

  switch (true) {
    case fullSlug.includes("domande-frequenti"):
      console.log("Pagina domande frequenti rilevata");
      pages = (await getAllFaqs()) as AllFaqsQuery;
      page = pages.allFaqs.find((p) => p.slug === fullSlug);
      break;
    default:
      pages = (await getAllPages()) as AllPagesQuery;
      page = pages.allPages.find((p) => p.slug === fullSlug);
      break;
  }

  if (!page) return notFound();

  return (
    <>
      <ModularContent content={{ page }} />
      {page.customUpdateDate && (
        <div className="container-xxl">
          <p className="my-4 fs-6 text-secondary">
            Aggiornato il{" "}
            {new Intl.DateTimeFormat("it-IT", {
              day: "numeric",
              month: "long",
              year: "numeric",
            }).format(new Date(page.customUpdateDate))}
          </p>
        </div>
      )}
    </>
  );
}
