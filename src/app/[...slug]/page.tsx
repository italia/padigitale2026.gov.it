import {
  getAllPages,
  getAllFaqs,
  getAllNews,
  getAllResources,
  getAllSupportos,
  getAllDatis,
} from "@/lib/datocms";
import {
  AllPagesQuery,
  AllFaqsQuery,
  AllNewsQuery,
  AllResourcesQuery,
  AllSupportosQuery,
  AllDatisQuery,
} from "@/graphql/generated";
import { ModularContent } from "@/src/components/ModularContent";
import { notFound } from "next/navigation";

export const dynamicParams = true;
export const revalidate = 120;

export async function generateStaticParams() {
  const [pages, faqs, supportos, news, resources] = await Promise.all([
    getAllPages() as Promise<AllPagesQuery>,
    getAllFaqs() as Promise<AllFaqsQuery>,
    getAllSupportos() as Promise<AllSupportosQuery>,
    getAllNews() as Promise<AllNewsQuery>,
    getAllResources() as Promise<AllResourcesQuery>,
  ]);

  const params = [
    // Pagine normali
    ...pages.allPages
      .filter((page) => page.slug)
      .map((page) => ({
        slug: page.slug!.split("/"),
        customUpdateDate: page.customUpdateDate,
      })),
    // FAQ
    ...faqs.allFaqs
      .filter((faq) => faq.slug)
      .map((faq) => ({
        slug: `domande-frequenti/${faq.slug}`.split("/"),
        customUpdateDate: faq.customUpdateDate,
      })),
    ...supportos.allSupportos
      .filter((supporto) => supporto.slug)
      .map((supporto) => ({
        slug: `supporto/${supporto.slug}`.split("/"),
      })),
    // Notizie
    ...news.allNews
      .filter((news) => news.slug)
      .map((news) => ({
        slug: `notizie/${news.slug}`.split("/"),
        customUpdateDate: news.customUpdateDate,
      })),
    // Risorse
    ...resources.allResources
      .filter((resource) => resource.slug)
      .map((resource) => ({
        slug: `guide-e-risorse/${resource.slug}`.split("/"),
        customUpdateDate: resource.customUpdateDate,
      })),
  ];

  return params;
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
  let pages:
    | AllPagesQuery
    | AllFaqsQuery
    | AllNewsQuery
    | AllResourcesQuery
    | AllSupportosQuery
    | AllDatisQuery;

  let pageContentType:
    | "page"
    | "faq"
    | "news"
    | "resource"
    | "supporto"
    | "dati" = "page";

  const supportoFaqExceptions = [
    "supporto/domande-frequenti/utilizzo-della-piattaforma",
    "supporto/domande-frequenti/piani-di-migrazione",
    "supporto/domande-frequenti/fondo-innovazione",
    "supporto/domande-frequenti/generali",
    "supporto/domande-frequenti/classificazione-dati-e-servizi",
    "supporto/domande-frequenti/rendicontazione",
  ];

  switch (true) {
    // eccezione per la pagina supporto/domande-frequenti (non c'è "/" alla fine)
    case fullSlug === "supporto/domande-frequenti":
      pages = (await getAllPages()) as AllPagesQuery;
      page = pages.allPages.find((p) => p.slug === fullSlug);
      pageContentType = "page";
      break;
    // eccezione per open-data
    case fullSlug === "open-data":
      pages = (await getAllDatis()) as AllDatisQuery;
      page = pages.allDatis.find((p) => p.slug === fullSlug);
      pageContentType = "dati";
      break;
    // eccezioni per slug specifici
    case supportoFaqExceptions.some((slug) => fullSlug === slug):
      pages = (await getAllSupportos()) as AllSupportosQuery;
      page = pages.allSupportos.find((p) => p.slug === fullSlug);
      pageContentType = "supporto";
      break;
    // fine eccezioni per slug specifici
    case fullSlug.includes("supporto/domande-frequenti/"):
      pages = (await getAllFaqs()) as AllFaqsQuery;
      page = pages.allFaqs.find((p) => p.slug === fullSlug);
      pageContentType = "faq";
      break;
    case fullSlug.includes("supporto/"):
      pages = (await getAllSupportos()) as AllSupportosQuery;
      page = pages.allSupportos.find((p) => p.slug === fullSlug);
      pageContentType = "supporto";
      break;
    case fullSlug.includes("notizie/"):
      pages = (await getAllNews()) as AllNewsQuery;
      page = pages.allNews.find((p) => p.slug === fullSlug);
      pageContentType = "news";
      break;
    case fullSlug.includes("guide-e-risorse/"):
      pages = (await getAllResources()) as AllResourcesQuery;
      page = pages.allResources.find((p) => p.slug === fullSlug);
      pageContentType = "resource";
      break;
    default:
      pages = (await getAllPages()) as AllPagesQuery;
      page = pages.allPages.find((p) => p.slug === fullSlug);
      pageContentType = "page";
      break;
  }

  if (!page) return notFound();

  // console.log(page, 'page')

  return (
    <>
      <ModularContent content={{ page }} pageContentType={pageContentType} />
      {page.customUpdateDate && (
        <div className="container-xxl">
          <p className="my-4 h-6 text-secondary">
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
