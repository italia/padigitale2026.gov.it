import {
  getAllPages,
  getAllFaqs,
  getAllNews,
  getAllResources,
  getAllSupportos,
  getAllDatis,
  getAllNewsWithOption,
  getAllSupportosWithOption,
  getAllResourcesWithOption,
  getAllFaqsSlug
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

// Lista delle eccezioni che devono essere gestite come supporto
const supportoFaqExceptions = [
  "supporto/domande-frequenti/misure-e-avvisi",
  "supporto/domande-frequenti/utilizzo-della-piattaforma",
  "supporto/domande-frequenti/piani-di-migrazione",
  "supporto/domande-frequenti/fondo-innovazione",
  "supporto/domande-frequenti/generali",
  "supporto/domande-frequenti/classificazione-dati-e-servizi",
  "supporto/domande-frequenti/rendicontazione",
  "supporto/domande-frequenti/progetti",
  "supporto/domande-frequenti/questionari",
];

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

// Funzione per generare parametri statici specifici per le FAQ
export async function generateFaqStaticParams() {
  const faqs = (await getAllFaqsSlug()) as AllFaqsQuery;

  return faqs.allFaqs
    .filter((faq) => faq.slug && !supportoFaqExceptions.includes(faq.slug))
    .map((faq) => ({
      slug: faq.slug!.split("/").slice(2), // Rimuovi "supporto/domande-frequenti" dal slug
      customUpdateDate: faq.customUpdateDate,
    }));
}

// Funzione per generare parametri statici specifici per il supporto
export async function generateSupportoStaticParams() {
  const supportos = (await getAllSupportosWithOption(false)) as AllSupportosQuery;
  
  return supportos.allSupportos
    .filter((supporto) => supporto.slug)
    .map((supporto) => {
      let cleanSlug: string;
      
      if (supporto.slug!.startsWith("supporto/")) {
        // Se il slug già inizia con "supporto/", rimuovi il prefisso
        cleanSlug = supporto.slug!.replace("supporto/", "");
      } else {
        // Altrimenti usa il slug così com'è
        cleanSlug = supporto.slug!;
      }

      return {
        slug: cleanSlug.split("/"),
      };
    });
}

// Funzione per generare parametri statici specifici per le notizie
export async function generateNewsStaticParams() {
  const news = (await getAllNewsWithOption(false)) as AllNewsQuery;
  
  return news.allNews
    .filter((news) => news.slug)
    .map((news) => {
      let cleanSlug: string;
      
      if (news.slug!.startsWith("notizie/")) {
        // Se il slug già inizia con "notizie/", rimuovi il prefisso
        cleanSlug = news.slug!.replace("notizie/", "");
      } else {
        // Altrimenti usa il slug così com'è
        cleanSlug = news.slug!;
      }
      
      // Se il cleanSlug contiene ancora "/", prendi solo l'ultima parte
      if (cleanSlug.includes("/")) {
        cleanSlug = cleanSlug.split("/").pop() || cleanSlug;
      }
      
      return {
        slug: [cleanSlug],
        customUpdateDate: news.customUpdateDate,
      };
    });
}

// Funzione per generare parametri statici specifici per le risorse
export async function generateResourceStaticParams() {
  const resources = (await getAllResourcesWithOption(false)) as AllResourcesQuery;
  
  return resources.allResources
    .filter((resource) => resource.slug)
    .map((resource) => {
      let cleanSlug: string;
      
      if (resource.slug!.startsWith("guide-e-risorse/")) {
        // Se il slug già inizia con "guide-e-risorse/", rimuovi il prefisso
        cleanSlug = resource.slug!.replace("guide-e-risorse/", "");
      } else {
        // Altrimenti usa il slug così com'è
        cleanSlug = resource.slug!;
      }
      
      return {
        slug: cleanSlug.split("/"),
        customUpdateDate: resource.customUpdateDate,
      };
    });
}

// Funzione per generare parametri statici per le pagine normali
export async function generatePageStaticParams() {
  const pages = (await getAllPages()) as AllPagesQuery;
  
  return pages.allPages
    .filter((page) => page.slug)
    .map((page) => ({
      slug: page.slug!.split("/"),
      customUpdateDate: page.customUpdateDate,
    }));
}

// Funzione per generare tutti i parametri statici (per la route principale)
export async function generateAllStaticParams() {
  const [pages, faqs, supportos, news, resources] = await Promise.all([
    getAllPages() as Promise<AllPagesQuery>,
    getAllFaqs() as Promise<AllFaqsQuery>,
    getAllSupportos() as Promise<AllSupportosQuery>,
    getAllNews() as Promise<AllNewsQuery>,
    getAllResources() as Promise<AllResourcesQuery>,
  ]);

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
      .map((faq) => ({
        slug: faq.slug!.split("/"),
        customUpdateDate: faq.customUpdateDate,
      })),
    // Supporto - evita duplicazione del prefisso
    ...supportos.allSupportos
      .filter((supporto) => supporto.slug)
      .map((supporto) => {
        // Se il slug già inizia con "supporto/", non aggiungere il prefisso
        const fullSlug = supporto.slug!.startsWith("supporto/") 
          ? supporto.slug! 
          : `supporto/${supporto.slug}`;
        return {
          slug: fullSlug.split("/"),
        };
      }),
    // Notizie - evita duplicazione del prefisso
    ...news.allNews
      .filter((news) => news.slug)
      .map((news) => {
        // Se il slug già inizia con "notizie/", non aggiungere il prefisso
        const fullSlug = news.slug!.startsWith("notizie/") 
          ? news.slug! 
          : `notizie/${news.slug}`;
        return {
          slug: fullSlug.split("/"),
          customUpdateDate: news.customUpdateDate,
        };
      }),
    // Risorse - evita duplicazione del prefisso
    ...resources.allResources
      .filter((resource) => resource.slug)
      .map((resource) => {
        // Se il slug già inizia con "guide-e-risorse/", non aggiungere il prefisso
        const fullSlug = resource.slug!.startsWith("guide-e-risorse/") 
          ? resource.slug! 
          : `guide-e-risorse/${resource.slug}`;
        return {
          slug: fullSlug.split("/"),
          customUpdateDate: resource.customUpdateDate,
        };
      }),
  ];

  return params;
} 