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

export type PageContentType = "page" | "faq" | "news" | "resource" | "supporto" | "dati";

// Tipo union per tutti i possibili tipi di pagina
type PageRecord = 
  | AllPagesQuery['allPages'][0]
  | AllFaqsQuery['allFaqs'][0]
  | AllNewsQuery['allNews'][0]
  | AllResourcesQuery['allResources'][0]
  | AllSupportosQuery['allSupportos'][0]
  | AllDatisQuery['allDatis'][0];

// Helper per le pagine normali
export async function getPageData(slug: string): Promise<{ page: PageRecord } | null> {
  const pages = (await getAllPages()) as AllPagesQuery;
  const page = pages.allPages.find((p) => p.slug === slug);
  
  if (!page) return null;
  
  return { page };
}

// Helper per le FAQ
export async function getFaqData(slug: string): Promise<{ page: PageRecord } | null> {
  const faqs = (await getAllFaqs()) as AllFaqsQuery;
  
  // Cerca il slug completo (incluso il prefisso supporto/domande-frequenti/)
  const fullSlug = `supporto/domande-frequenti/${slug}`;
  
  const page = faqs.allFaqs.find((p) => p.slug === fullSlug);
  
  if (!page) return null;
  
  return { page };
}

// Helper per le notizie
export async function getNewsData(slug: string): Promise<{ page: PageRecord } | null> {
  const news = (await getAllNews()) as AllNewsQuery;
  const page = news.allNews.find((p) => p.slug === slug);
  
  if (!page) return null;
  
  return { page };
}

// Helper per le risorse
export async function getResourceData(slug: string): Promise<{ page: PageRecord } | null> {
  const resources = (await getAllResources()) as AllResourcesQuery;
  
  // Cerca il slug completo (incluso il prefisso guide-e-risorse/)
  const fullSlug = `guide-e-risorse/${slug}`;
  
  const page = resources.allResources.find((p) => p.slug === fullSlug);
  
  if (!page) return null;
  
  return { page };
}

// Helper per il supporto
export async function getSupportoData(slug: string): Promise<{ page: PageRecord } | null> {
  const supportos = (await getAllSupportos()) as AllSupportosQuery;
  
  // Cerca il slug completo (incluso il prefisso supporto/)
  const fullSlug = `supporto/${slug}`;
  
  const page = supportos.allSupportos.find((p) => p.slug === fullSlug);
  
  if (!page) return null;
  
  return { page };
}

// Helper per i dati (open-data)
export async function getDatiData(slug: string): Promise<{ page: PageRecord } | null> {
  const datis = (await getAllDatis()) as AllDatisQuery;
  const page = datis.allDatis.find((p) => p.slug === slug);
  
  if (!page) return null;
  
  return { page };
}

// Funzione per generare tutti i parametri statici
export async function generateAllStaticParams() {
  const [pages, faqs, supportos, news, resources] = await Promise.all([
    getAllPages() as Promise<AllPagesQuery>,
    getAllFaqs() as Promise<AllFaqsQuery>,
    getAllSupportos() as Promise<AllSupportosQuery>,
    getAllNews() as Promise<AllNewsQuery>,
    getAllResources() as Promise<AllResourcesQuery>,
  ]);

  // Lista delle eccezioni che devono essere gestite come supporto
  const supportoFaqExceptions = [
    "supporto/domande-frequenti/misure-e-avvisi",
    "supporto/domande-frequenti/utilizzo-della-piattaforma",
    "supporto/domande-frequenti/piani-di-migrazione",
    "supporto/domande-frequenti/fondo-innovazione",
    "supporto/domande-frequenti/generali",
    "supporto/domande-frequenti/classificazione-dati-e-servizi",
    "supporto/domande-frequenti/rendicontazione",
  ];

  const params = [
    // Pagine normali (escludendo la homepage e altre pagine speciali)
    ...pages.allPages
      .filter((page) => {
        // Escludi slug problematici
        if (!page.slug || page.slug === "homepage" || page.slug === "" || page.slug === "/") {
          return false;
        }
        // Escludi slug che iniziano con / o che potrebbero essere interpretati come homepage
        if (page.slug.startsWith("/") || page.slug === "index") {
          return false;
        }
        return true;
      })
      .map((page) => ({
        slug: page.slug!.split("/"),
        customUpdateDate: page.customUpdateDate,
      })),
    // FAQ (escludendo le eccezioni)
    ...faqs.allFaqs
      .filter((faq) => faq.slug && !supportoFaqExceptions.includes(faq.slug))
      .map((faq) => {
        // Estrai solo la parte finale dello slug (senza supporto/domande-frequenti/)
        const slugParts = faq.slug!.split("/");
        const finalSlug = slugParts.slice(2).join("/"); // Rimuovi i primi due segmenti
        return {
          slug: finalSlug.split("/"),
          customUpdateDate: faq.customUpdateDate,
        };
      }),
    // Supporto
    ...supportos.allSupportos
      .filter((supporto) => supporto.slug)
      .map((supporto) => {
        // Estrai solo la parte finale dello slug (senza supporto/)
        const slugParts = supporto.slug!.split("/");
        const finalSlug = slugParts.slice(2).join("/"); // Rimuovi i primi due segmenti
        return {
          slug: finalSlug.split("/"),
        };
      }),
    // Notizie
    ...news.allNews
      .filter((news) => news.slug)
      .map((news) => {
        // Estrai solo la parte finale dello slug (senza notizie/)
        const slugParts = news.slug!.split("/");
        const finalSlug = slugParts.slice(2).join("/"); // Rimuovi i primi due segmenti
        return {
          slug: finalSlug.split("/"),
          customUpdateDate: news.customUpdateDate,
        };
      }),
    // Risorse
    ...resources.allResources
      .filter((resource) => resource.slug)
      .map((resource) => {
        // Estrai solo la parte finale dello slug (senza guide-e-risorse/)
        const slugParts = resource.slug!.split("/");
        const finalSlug = slugParts.slice(2).join("/"); // Rimuovi i primi due segmenti
        return {
          slug: finalSlug.split("/"),
          customUpdateDate: resource.customUpdateDate,
        };
      }),
  ];

  return params;
} 