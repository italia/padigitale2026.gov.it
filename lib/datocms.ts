import {
  executeQuery,
  executeQueryWithAutoPagination,
} from "@datocms/cda-client";
import {
  AllPagesDocument,
  AllFaqsDocument,
  AllSupportosDocument,
  AllNewsDocument,
  AllResourcesDocument,
  AllEnteBeneficiariosDocument,
  AllEntePromotoresDocument,
  AllMisurasDocument,
  AllDatisDocument,
  PageDocument,
  SupportoDocument,
  FaqDocument,
  NewsDocument,
  ResourceDocument,
  SitemapPagesDocument,
  PageQueryVariables,
  FooterDocument,
  HeaderDocument,  
  AlgoliaPageDocument,
  AlgoliaPageQueryVariables,
  AllUpdatesDocument,
  AllFilteredUpdatesDocument,
  AllFilteredUpdatesQueryVariables,
  AllFilteredEnteBeneficiariosDocument,
  AllFilteredEnteBeneficiariosQueryVariables,
  AllFilteredMisurasDocument,
  AllFilteredMisurasQueryVariables,
  AlgoliaResourceDocument,
  AlgoliaResourceQueryVariables,
  AlgoliaNewsDocument,
  AlgoliaNewsQueryVariables,
  AlgoliaFaqDocument,
  AlgoliaFaqQueryVariables,
  DatiDocument,
  UpdateDocument,
  UpdateQueryVariables,
  AllGuidelinesDocument,
  GuidelineDocument,
  MisuraDocument,
  MisuraQueryVariables,
  ArgomentoDocument,
  ArgomentoQueryVariables
} from "@/graphql/generated";
import { unstable_cache } from "next/cache";

// Cache revalidation time in seconds (2 minutes)
const CACHE_REVALIDATION_TIME = 120;

if (!process.env.DATOCMS_API_TOKEN) {
  throw new Error(
    "DatoCMS API Token is not defined. Please check your .env file and next.config.js"
  );
}

const baseOptions = {
  token: process.env.DATOCMS_API_TOKEN,
  includeDrafts: process.env.DATOCMS_INCLUDE_DRAFTS === "true",
  environment: process.env.DATOCMS_ENVIRONMENT || "main",
};

function getOptions(referer: string) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://padigitale2026.gov.it';
  const refererUrl = `${baseUrl}/api/${referer}`;
  
  return {
    ...baseOptions,
    referer: refererUrl,
    requestInitOptions: {
      referrer: refererUrl
    }
  };
}

// Original cached functions
export const getAllPages = unstable_cache(
  async () => {
    await sendPostToBetterStack({
      message: "getAllPages called",
      level: "info",
      metadata: {
        function: "getAllPages",
      }
    });
    return executeQueryWithAutoPagination(
      AllPagesDocument,
      getOptions(`fn_name:getAllPages`)
    );
  },
  ['getAllPages'],
  {
    revalidate: CACHE_REVALIDATION_TIME,
    tags: ['pages']
  }
);

export const page = unstable_cache(
  async (slug: string) => {
    await sendPostToBetterStack({
      message: "page called",
      level: "info",
      metadata: {
        function: "page",
        slug
      }
    });
    return executeQuery(PageDocument, {
      ...getOptions(`fn_name:page|slug:${slug}`),
      variables: {
        slug: slug,
        index: "2",
      } as PageQueryVariables,
    });
  },
  ['page'],
  {
    revalidate: CACHE_REVALIDATION_TIME,
    tags: ['pages']
  }
);

export const getAllFilteredUpdates = unstable_cache(
  async (idBeneficiari: Array<string>) => {
    await sendPostToBetterStack({
      message: "getAllFilteredUpdates called",
      level: "info",
      metadata: {
        function: "getAllFilteredUpdates",
        idBeneficiari
      }
    });
    return executeQuery(AllFilteredUpdatesDocument, {
      ...getOptions(
        `fn_name:allFilteredUpdates|idBeneficiari:${idBeneficiari.toString()}`
      ),
      variables: {
        idBeneficiari: idBeneficiari,
      } as AllFilteredUpdatesQueryVariables,
    });
  },
  ['getAllFilteredUpdates'],
  {
    revalidate: CACHE_REVALIDATION_TIME,
    tags: ['updates']
  }
);

export const getAllSupportos = unstable_cache(
  async () => {
    await sendPostToBetterStack({
      message: "getAllSupportos called",
      level: "info",
      metadata: {
        function: "getAllSupportos"
      }
    });
    return executeQueryWithAutoPagination(
      AllSupportosDocument,
      getOptions(`fn_name:getAllSupportos`)
    );
  },
  ['getAllSupportos'],
  {
    revalidate: CACHE_REVALIDATION_TIME,
    tags: ['supportos']
  }
);

export const supporto = unstable_cache(
  async (slug: string) => {
    await sendPostToBetterStack({
      message: "supporto called",
      level: "info",
      metadata: {
        function: "supporto",
        slug
      }
    });    
    return executeQuery(SupportoDocument, {
      ...getOptions(`fn_name:supporto|slug:${slug}`),
      variables: {
        slug: slug,
        index: "2",
      } as PageQueryVariables,
    });
  },
  ['faq'],
  {
    revalidate: CACHE_REVALIDATION_TIME,
    tags: ['faqs']
  }
);

export const getAllFaqs = unstable_cache(
  async () => {
    await sendPostToBetterStack({
      message: "getAllFaqs called",
      level: "info",
      metadata: {
        function: "getAllFaqs"
      }
    });
    return executeQueryWithAutoPagination(
      AllFaqsDocument,
      getOptions(`fn_name:getAllFaqs`)
    );
  },
  ['getAllFaqs'],
  {
    revalidate: CACHE_REVALIDATION_TIME,
    tags: ['faqs']
  }
);

export const faq = unstable_cache(
  async (slug: string) => {
    await sendPostToBetterStack({
      message: "faq called",
      level: "info",
      metadata: {
        function: "faq",
        slug
      }
    });    
    return executeQuery(FaqDocument, {
      ...getOptions(`fn_name:faq|slug:${slug}`),
      variables: {
        slug: slug,
        index: "2",
      } as PageQueryVariables,
    });
  },
  ['faq'],
  {
    revalidate: CACHE_REVALIDATION_TIME,
    tags: ['faqs']
  }
);

export const getAllNews = unstable_cache(
  async () => {
    await sendPostToBetterStack({
      message: "getAllNews called",
      level: "info",
      metadata: {
        function: "getAllNews"
      }
    });
    return executeQueryWithAutoPagination(
      AllNewsDocument,
      getOptions(`fn_name:getAllNews`)
    );
  },
  ['getAllNews'],
  {
    revalidate: CACHE_REVALIDATION_TIME,
    tags: ['news']
  }
);

export const news = unstable_cache(
  async (slug: string) => {
    await sendPostToBetterStack({
      message: "news called",
      level: "info",
      metadata: {
        function: "news",
        slug
      }
    });    
    return executeQuery(NewsDocument, {
      ...getOptions(`fn_name:news|slug:${slug}`),
      variables: {
        slug: slug,
        index: "2",
      } as PageQueryVariables,
    });
  },
  ['news'],
  {
    revalidate: CACHE_REVALIDATION_TIME,
    tags: ['news']
  }
);

export const getAllDatis = unstable_cache(
  async () => {
    await sendPostToBetterStack({
      message: "getAllDatis called",
      level: "info",
      metadata: {
        function: "getAllDatis"
      }
    });
    return executeQueryWithAutoPagination(
      AllDatisDocument,
      getOptions(`fn_name:getAllDatis`)
    );
  },
  ['getAllResources'],
  {
    revalidate: CACHE_REVALIDATION_TIME,
    tags: ['resources']
  }
);

export const dati = unstable_cache(
  async (slug: string) => {
    await sendPostToBetterStack({
      message: "dati called",
      level: "info",
      metadata: {
        function: "dati",
        slug
      }
    });
    return executeQuery(DatiDocument, {
      ...getOptions(`fn_name:dati|slug:${slug}`),
      variables: {
        slug: slug,
        index: "2",
      } as PageQueryVariables,
    });
  },
  ['dati'],
  {
    revalidate: CACHE_REVALIDATION_TIME,
    tags: ['dati']
  }
);

export const getAllResources = unstable_cache(
  async () => {
    await sendPostToBetterStack({
      message: "getAllResources called",
      level: "info",
      metadata: {
        function: "getAllResources"
      }
    });
    return executeQueryWithAutoPagination(
      AllResourcesDocument,
      getOptions(`fn_name:getAllResources`)
    );
  },
  ['getAllResources'],
  {
    revalidate: CACHE_REVALIDATION_TIME,
    tags: ['resources']
  }
);

export const resource = unstable_cache(
  async (slug: string) => {
    await sendPostToBetterStack({
      message: "resource called",
      level: "info",
      metadata: {
        function: "resource",
        slug
      }
    });
    return executeQuery(ResourceDocument, {
      ...getOptions(`fn_name:resource|slug:${slug}`),
      variables: {
        slug: slug,
        index: "2",
      } as PageQueryVariables,
    });
  },
  ['resource'],
  {
    revalidate: CACHE_REVALIDATION_TIME,
    tags: ['resources']
  }
);

export const getFooter = unstable_cache(
  async () => {
    await sendPostToBetterStack({
      message: "getFooter called",
      level: "info",
      metadata: {
        function: "getFooter"
      }
    });
    return executeQuery(FooterDocument, getOptions(`fn_name:getFooter`));
  },
  ['getFooter'],
  {
    revalidate: CACHE_REVALIDATION_TIME,
    tags: ['footer']
  }
);

export const getHeader = unstable_cache(
  async () => {
    await sendPostToBetterStack({
      message: "getHeader called",
      level: "info",
      metadata: {
        function: "getHeader"
      }
    });
    return executeQuery(HeaderDocument, getOptions(`fn_name:getHeader`));
  },
  ['getHeader'],
  {
    revalidate: CACHE_REVALIDATION_TIME,
    tags: ['header']
  }
);

export const getSitemapPages = unstable_cache(
  async () => {
    await sendPostToBetterStack({
      message: "getSitemapPages called",
      level: "info",
      metadata: {
        function: "getSitemapPages"
      }
    });
    return executeQueryWithAutoPagination(
      SitemapPagesDocument,
      getOptions(`fn_name:getSitemapPages`)
    );
  },
  ['getSitemapPages'],
  {
    revalidate: CACHE_REVALIDATION_TIME,
    tags: ['sitemap']
  }
);

export const getAllEnteBeneficiarios = unstable_cache(
  async () => {
    await sendPostToBetterStack({
      message: "getAllEnteBeneficiarios called",
      level: "info",
      metadata: {
        function: "getAllEnteBeneficiarios"
      }
    });
    return executeQueryWithAutoPagination(
      AllEnteBeneficiariosDocument,
      getOptions(`fn_name:getAllEnteBeneficiarios`)
    );
  },
  ['getAllEnteBeneficiarios'],
  {
    revalidate: CACHE_REVALIDATION_TIME,
    tags: ['beneficiari']
  }
);

export const getAllFilteredEnteBeneficiarios = unstable_cache(
  async (idBeneficiari: Array<string>) => {
    await sendPostToBetterStack({
      message: "getAllFilteredEnteBeneficiarios called",
      level: "info",
      metadata: {
        function: "getAllFilteredEnteBeneficiarios",
        idBeneficiari
      }
    });
    return executeQuery(AllFilteredEnteBeneficiariosDocument, {
      ...getOptions(
        `fn_name:allFilteredEnteBeneficiarios|idBeneficiari:${idBeneficiari.toString()}`
      ),
      variables: {
        idBeneficiari: idBeneficiari,
      } as AllFilteredEnteBeneficiariosQueryVariables,
    });
  },
  ['getAllFilteredEnteBeneficiarios'],
  {
    revalidate: CACHE_REVALIDATION_TIME,
    tags: ['beneficiari']
  }
);

export const getAllEntePromotores = unstable_cache(
  async () => {
    await sendPostToBetterStack({
      message: "getAllEntePromotores called",
      level: "info",
      metadata: {
        function: "getAllEntePromotores"
      }
    });
    return executeQueryWithAutoPagination(
      AllEntePromotoresDocument,
      getOptions(`fn_name:getAllEntePromotores`)
    );
  },
  ['getAllEntePromotores'],
  {
    revalidate: CACHE_REVALIDATION_TIME,
    tags: ['promotores']
  }
);

export const getAllMisuras = unstable_cache(
  async () => {
    await sendPostToBetterStack({
      message: "getAllMisuras called",
      level: "info",
      metadata: {
        function: "getAllMisuras"
      }
    });
    return executeQueryWithAutoPagination(
      AllMisurasDocument,
      getOptions(`fn_name:getAllMisuras`)
    );
  },
  ['getAllMisuras'],
  {
    revalidate: CACHE_REVALIDATION_TIME,
    tags: ['misura']
  }
);

export const misura = unstable_cache(
  async (id: string) => {
    await sendPostToBetterStack({
      message: "msiura called",
      level: "info",
      metadata: {
        function: "misura",
        id
      }
    });
    return executeQuery(MisuraDocument, {
      ...getOptions(`fn_name:misura|id:${id}`),
      variables: {
        id: id,
        index: "2",
      } as MisuraQueryVariables,
    });
  },
  ['misura'],
  {
    revalidate: CACHE_REVALIDATION_TIME,
    tags: ['misura']
  }
);

export const getAllFilteredMisuras = unstable_cache(
  async (idMisure: Array<string>) => {
    await sendPostToBetterStack({
      message: "getAllFilteredMisuras called",
      level: "info",
      metadata: {
        function: "getAllFilteredMisuras",
        idMisure
      }
    });
    return executeQuery(AllFilteredMisurasDocument, {
      ...getOptions(
        `fn_name:allFilteredMisuras|idMisure:${idMisure.toString()}`
      ),
      variables: {
        idMisure: idMisure,
      } as AllFilteredMisurasQueryVariables,
    });
  },
  ['getAllFilteredMisuras'],
  {
    revalidate: CACHE_REVALIDATION_TIME,
    tags: ['misure']
  }
);

export const update = unstable_cache(
  async (id: string) => {
    await sendPostToBetterStack({
      message: "update called",
      level: "info",
      metadata: {
        function: "update",
        id
      }
    });
    return executeQuery(UpdateDocument, {
      ...getOptions(`fn_name:update|id:${id}`),
      variables: {
        id: id,
        index: "2",
      } as UpdateQueryVariables,
    });
  },
  ['update'],
  {
    revalidate: CACHE_REVALIDATION_TIME,
    tags: ['update']
  }
);

export const getAllUpdates = unstable_cache(
  async () => {
    await sendPostToBetterStack({
      message: "getAllUpdates called",
      level: "info",
      metadata: {
        function: "getAllUpdates"
      }
    });
    return executeQueryWithAutoPagination(
      AllUpdatesDocument,
      getOptions(`fn_name:getAllUpdates`)
    );
  },
  ['getAllUpdates'],
  {
    revalidate: CACHE_REVALIDATION_TIME,
    tags: ['updates']
  }
);

export const guideline = unstable_cache(
  async (id: string) => {
    await sendPostToBetterStack({
      message: "guideline called",
      level: "info",
      metadata: {
        function: "update",
        id
      }
    });
    return executeQuery(GuidelineDocument, {
      ...getOptions(`fn_name:guideline|id:${id}`),
      variables: {
        id: id,
        index: "2",
      } as UpdateQueryVariables,
    });
  },
  ['guideline'],
  {
    revalidate: CACHE_REVALIDATION_TIME,
    tags: ['guidelines']
  }
);

export const getAllGuidelines = unstable_cache(
  async () => {
    await sendPostToBetterStack({
      message: "getAllGuidelines called",
      level: "info",
      metadata: {
        function: "getAllGuidelines"
      }
    });
    return executeQueryWithAutoPagination(
      AllGuidelinesDocument,
      getOptions(`fn_name:getAllGuidelines`)
    );
  },
  ['getAllGuidelines'],
  {
    revalidate: CACHE_REVALIDATION_TIME,
    tags: ['guidelines']
  }
);

export const argomento = unstable_cache(
  async (id: string) => {
    await sendPostToBetterStack({
      message: "argomento called",
      level: "info",
      metadata: {
        function: "argomento",
        id
      }
    });
    return executeQuery(ArgomentoDocument, {
      ...getOptions(`fn_name:argomento|id:${id}`),
      variables: {
        id: id,
        index: "2",
      } as ArgomentoQueryVariables,
    });
  },
  ['argomento'],
  {
    revalidate: CACHE_REVALIDATION_TIME,
    tags: ['argomento']
  }
);

// Wrapper functions with useCache parameter
export async function getAllPagesWithOption(useCache: boolean = true) {
  if (useCache) {
    return getAllPages();
  } else {
    await sendPostToBetterStack({
      message: "getAllPages called (no cache)",
      level: "info",
      metadata: {
        function: "getAllPages",
        useCache: false
      }
    });
    return executeQueryWithAutoPagination(
      AllPagesDocument,
      getOptions(`fn_name:getAllPages`)
    );
  }
}

export async function pageWithOption(slug: string, useCache: boolean = true) {
  if (useCache) {
    return page(slug);
  } else {
    await sendPostToBetterStack({
      message: "page called (no cache)",
      level: "info",
      metadata: {
        function: "page",
        slug,
        useCache: false
      }
    });
    return executeQuery(PageDocument, {
      ...getOptions(`fn_name:page|slug:${slug}`),
      variables: {
        slug: slug,
        index: "2",
      } as PageQueryVariables,
    });
  }
}

export async function getAllFilteredUpdatesWithOption(idBeneficiari: Array<string>, useCache: boolean = true) {
  if (useCache) {
    return getAllFilteredUpdates(idBeneficiari);
  } else {
    await sendPostToBetterStack({
      message: "getAllFilteredUpdates called (no cache)",
      level: "info",
      metadata: {
        function: "getAllFilteredUpdates",
        idBeneficiari,
        useCache: false
      }
    });
    return executeQuery(AllFilteredUpdatesDocument, {
      ...getOptions(
        `fn_name:allFilteredUpdates|idBeneficiari:${idBeneficiari.toString()}`
      ),
      variables: {
        idBeneficiari: idBeneficiari,
      } as AllFilteredUpdatesQueryVariables,
    });
  }
}

export async function getAllSupportosWithOption(useCache: boolean = true) {
  if (useCache) {
    return getAllSupportos();
  } else {
    await sendPostToBetterStack({
      message: "getAllSupportos called (no cache)",
      level: "info",
      metadata: {
        function: "getAllSupportos",
        useCache: false
      }
    });
    return executeQueryWithAutoPagination(
      AllSupportosDocument,
      getOptions(`fn_name:getAllSupportos`)
    );
  }
}

export async function supportoWithOption(slug: string, useCache: boolean = true) {
  if (useCache) {
    return supporto(slug);
  } else {
    await sendPostToBetterStack({
      message: "supporto called (no cache)",
      level: "info",
      metadata: {
        function: "supporto",
        slug,
        useCache: false
      }
    });    
    return executeQuery(SupportoDocument, {
      ...getOptions(`fn_name:supporto|slug:${slug}`),
      variables: {
        slug: slug,
        index: "2",
      } as PageQueryVariables,
    });
  }
}

export async function getAllFaqsWithOption(useCache: boolean = true) {
  if (useCache) {
    return getAllFaqs();
  } else {
    await sendPostToBetterStack({
      message: "getAllFaqs called (no cache)",
      level: "info",
      metadata: {
        function: "getAllFaqs",
        useCache: false
      }
    });
    return executeQueryWithAutoPagination(
      AllFaqsDocument,
      getOptions(`fn_name:getAllFaqs`)
    );
  }
}

export async function faqWithOption(slug: string, useCache: boolean = true) {
  if (useCache) {
    return faq(slug);
  } else {
    await sendPostToBetterStack({
      message: "faq called (no cache)",
      level: "info",
      metadata: {
        function: "faq",
        slug,
        useCache: false
      }
    });    
    return executeQuery(FaqDocument, {
      ...getOptions(`fn_name:faq|slug:${slug}`),
      variables: {
        slug: slug,
        index: "2",
      } as PageQueryVariables,
    });
  }
}

export async function getAllNewsWithOption(useCache: boolean = true) {
  if (useCache) {
    return getAllNews();
  } else {
    await sendPostToBetterStack({
      message: "getAllNews called (no cache)",
      level: "info",
      metadata: {
        function: "getAllNews",
        useCache: false
      }
    });
    return executeQueryWithAutoPagination(
      AllNewsDocument,
      getOptions(`fn_name:getAllNews`)
    );
  }
}

export async function newsWithOption(slug: string, useCache: boolean = true) {
  if (useCache) {
    return news(slug);
  } else {
    await sendPostToBetterStack({
      message: "news called (no cache)",
      level: "info",
      metadata: {
        function: "news",
        slug,
        useCache: false
      }
    });    
    return executeQuery(NewsDocument, {
      ...getOptions(`fn_name:news|slug:${slug}`),
      variables: {
        slug: slug,
        index: "2",
      } as PageQueryVariables,
    });
  }
}

export async function getAllDatisWithOption(useCache: boolean = true) {
  if (useCache) {
    return getAllDatis();
  } else {
    await sendPostToBetterStack({
      message: "getAllDatis called (no cache)",
      level: "info",
      metadata: {
        function: "getAllDatis",
        useCache: false
      }
    });
    return executeQueryWithAutoPagination(
      AllDatisDocument,
      getOptions(`fn_name:getAllDatis`)
    );
  }
}

export async function datiWithOption(slug: string, useCache: boolean = true) {
  if (useCache) {
    return dati(slug);
  } else {
    await sendPostToBetterStack({
      message: "dati called (no cache)",
      level: "info",
      metadata: {
        function: "dati",
        slug,
        useCache: false
      }
    });
    return executeQuery(DatiDocument, {
      ...getOptions(`fn_name:dati|slug:${slug}`),
      variables: {
        slug: slug,
        index: "2",
      } as PageQueryVariables,
    });
  }
}

export async function getAllResourcesWithOption(useCache: boolean = true) {
  if (useCache) {
    return getAllResources();
  } else {
    await sendPostToBetterStack({
      message: "getAllResources called (no cache)",
      level: "info",
      metadata: {
        function: "getAllResources",
        useCache: false
      }
    });
    return executeQueryWithAutoPagination(
      AllResourcesDocument,
      getOptions(`fn_name:getAllResources`)
    );
  }
}

export async function resourceWithOption(slug: string, useCache: boolean = true) {
  if (useCache) {
    return resource(slug);
  } else {
    await sendPostToBetterStack({
      message: "resource called (no cache)",
      level: "info",
      metadata: {
        function: "resource",
        slug,
        useCache: false
      }
    });
    return executeQuery(ResourceDocument, {
      ...getOptions(`fn_name:resource|slug:${slug}`),
      variables: {
        slug: slug,
        index: "2",
      } as PageQueryVariables,
    });
  }
}

export async function getFooterWithOption(useCache: boolean = true) {
  if (useCache) {
    return getFooter();
  } else {
    await sendPostToBetterStack({
      message: "getFooter called (no cache)",
      level: "info",
      metadata: {
        function: "getFooter",
        useCache: false
      }
    });
    return executeQuery(FooterDocument, getOptions(`fn_name:getFooter`));
  }
}

export async function getHeaderWithOption(useCache: boolean = true) {
  if (useCache) {
    return getHeader();
  } else {
    await sendPostToBetterStack({
      message: "getHeader called (no cache)",
      level: "info",
      metadata: {
        function: "getHeader",
        useCache: false
      }
    });
    return executeQuery(HeaderDocument, getOptions(`fn_name:getHeader`));
  }
}

export async function getSitemapPagesWithOption(useCache: boolean = true) {
  if (useCache) {
    return getSitemapPages();
  } else {
    await sendPostToBetterStack({
      message: "getSitemapPages called (no cache)",
      level: "info",
      metadata: {
        function: "getSitemapPages",
        useCache: false
      }
    });
    return executeQueryWithAutoPagination(
      SitemapPagesDocument,
      getOptions(`fn_name:getSitemapPages`)
    );
  }
}

export async function getAllEnteBeneficiariosWithOption(useCache: boolean = true) {
  if (useCache) {
    return getAllEnteBeneficiarios();
  } else {
    await sendPostToBetterStack({
      message: "getAllEnteBeneficiarios called (no cache)",
      level: "info",
      metadata: {
        function: "getAllEnteBeneficiarios",
        useCache: false
      }
    });
    return executeQueryWithAutoPagination(
      AllEnteBeneficiariosDocument,
      getOptions(`fn_name:getAllEnteBeneficiarios`)
    );
  }
}

export async function getAllFilteredEnteBeneficiariosWithOption(idBeneficiari: Array<string>, useCache: boolean = true) {
  if (useCache) {
    return getAllFilteredEnteBeneficiarios(idBeneficiari);
  } else {
    await sendPostToBetterStack({
      message: "getAllFilteredEnteBeneficiarios called (no cache)",
      level: "info",
      metadata: {
        function: "getAllFilteredEnteBeneficiarios",
        idBeneficiari,
        useCache: false
      }
    });
    return executeQuery(AllFilteredEnteBeneficiariosDocument, {
      ...getOptions(
        `fn_name:allFilteredEnteBeneficiarios|idBeneficiari:${idBeneficiari.toString()}`
      ),
      variables: {
        idBeneficiari: idBeneficiari,
      } as AllFilteredEnteBeneficiariosQueryVariables,
    });
  }
}

export async function getAllEntePromotoresWithOption(useCache: boolean = true) {
  if (useCache) {
    return getAllEntePromotores();
  } else {
    await sendPostToBetterStack({
      message: "getAllEntePromotores called (no cache)",
      level: "info",
      metadata: {
        function: "getAllEntePromotores",
        useCache: false
      }
    });
    return executeQueryWithAutoPagination(
      AllEntePromotoresDocument,
      getOptions(`fn_name:getAllEntePromotores`)
    );
  }
}

export async function getAllMisurasWithOption(useCache: boolean = true) {
  if (useCache) {
    return getAllMisuras();
  } else {
    await sendPostToBetterStack({
      message: "getAllMisuras called (no cache)",
      level: "info",
      metadata: {
        function: "getAllMisuras",
        useCache: false
      }
    });
    return executeQueryWithAutoPagination(
      AllMisurasDocument,
      getOptions(`fn_name:getAllMisuras`)
    );
  }
}

export async function misuraWithOption(id: string, useCache: boolean = true) {
  if (useCache) {
    return misura(id);
  } else {
    await sendPostToBetterStack({
      message: "misura called (no cache)",
      level: "info",
      metadata: {
        function: "misura",
        id,
        useCache: false
      }
    });
    return executeQuery(MisuraDocument, {
      ...getOptions(`fn_name:misura|id:${id}`),
      variables: {
        id: id,
        index: "2",
      } as MisuraQueryVariables,
    });
  }
}

export async function getAllFilteredMisurasWithOption(idMisure: Array<string>, useCache: boolean = true) {
  if (useCache) {
    return getAllFilteredMisuras(idMisure);
  } else {
    await sendPostToBetterStack({
      message: "getAllFilteredMisuras called (no cache)",
      level: "info",
      metadata: {
        function: "getAllFilteredMisuras",
        idMisure,
        useCache: false
      }
    });
    return executeQuery(AllFilteredMisurasDocument, {
      ...getOptions(
        `fn_name:allFilteredMisuras|idMisure:${idMisure.toString()}`
      ),
      variables: {
        idMisure: idMisure,
      } as AllFilteredMisurasQueryVariables,
    });
  }
}

export async function updateWithOption(id: string, useCache: boolean = true) {
  if (useCache) {
    return update(id);
  } else {
    await sendPostToBetterStack({
      message: "update called (no cache)",
      level: "info",
      metadata: {
        function: "update",
        id,
        useCache: false
      }
    });
    return executeQuery(UpdateDocument, {
      ...getOptions(`fn_name:update|id:${id}`),
      variables: {
        id: id,
        index: "2",
      } as UpdateQueryVariables,
    });
  }
}

export async function getAllUpdatesWithOption(useCache: boolean = true) {
  if (useCache) {
    return getAllUpdates();
  } else {
    await sendPostToBetterStack({
      message: "getAllUpdates called (no cache)",
      level: "info",
      metadata: {
        function: "getAllUpdates",
        useCache: false
      }
    });
    return executeQueryWithAutoPagination(
      AllUpdatesDocument,
      getOptions(`fn_name:getAllUpdates`)
    );
  }
}

export async function guidelineWithOption(id: string, useCache: boolean = true) {
  if (useCache) {
    return guideline(id);
  } else {
    await sendPostToBetterStack({
      message: "guideline called (no cache)",
      level: "info",
      metadata: {
        function: "guideline",
        id,
        useCache: false
      }
    });
    return executeQuery(GuidelineDocument, {
      ...getOptions(`fn_name:guideline|id:${id}`),
      variables: {
        id: id,
        index: "2",
      } as UpdateQueryVariables,
    });
  }
}

export async function getAllGuidelinesWithOption(useCache: boolean = true) {
  if (useCache) {
    return getAllGuidelines();
  } else {
    await sendPostToBetterStack({
      message: "getAllGuidelines called (no cache)",
      level: "info",
      metadata: {
        function: "getAllGuidelines",
        useCache: false
      }
    });
    return executeQueryWithAutoPagination(
      AllGuidelinesDocument,
      getOptions(`fn_name:getAllGuidelines`)
    );
  }
}

export async function argomentoWithOption(id: string, useCache: boolean = true) {
  if (useCache) {
    return argomento(id);
  } else {
    await sendPostToBetterStack({
      message: "argomento called (no cache)",
      level: "info",
      metadata: {
        function: "argomento",
        id,
        useCache: false
      }
    });
    return executeQuery(ArgomentoDocument, {
      ...getOptions(`fn_name:argomento|id:${id}`),
      variables: {
        id: id,
        index: "2",
      } as ArgomentoQueryVariables,
    });
  }
}

// ------------------------------------- //
// Funzioni di indicizzazione in Algolia //
// ------------------------------------- //

export async function getAlgoliaPage(id: string) {
  return executeQuery(AlgoliaPageDocument, {
    ...getOptions(`https://fn.getAlgoliaPage.org/${id}`),
    includeDrafts: false, // Forzato a false perche' indicizziamo solo record pubblicati.
    variables: {
      id: id,
    } as AlgoliaPageQueryVariables,
  });
}

export async function getAlgoliaResource(id: string) {
  return executeQuery(AlgoliaResourceDocument, {
    ...getOptions(`https://fn.getAlgoliaResource.org/${id}`),
    includeDrafts: false, // Forzato a false perche' indicizziamo solo record pubblicati.
    variables: {
      id: id,
    } as AlgoliaResourceQueryVariables,
  });
}

export async function getAlgoliaNews(id: string) {
  return executeQuery(AlgoliaNewsDocument, {
    ...getOptions(`https://fn.getAlgoliaNews.org/${id}`),
    includeDrafts: false, // Forzato a false perche' indicizziamo solo record pubblicati.
    variables: {
      id: id,
    } as AlgoliaNewsQueryVariables,
  });
}

export async function getAlgoliaFaq(id: string) {
  return executeQuery(AlgoliaFaqDocument, {
    ...getOptions(`https://fn.getAlgoliaFaq.org/${id}`),
    includeDrafts: false, // Forzato a false perche' indicizziamo solo record pubblicati.
    variables: {
      id: id,
    } as AlgoliaFaqQueryVariables,
  });
}

/**
 * Sends a log message to Better Stack with metadata and caller information
 * @param data - The log data object containing:
 *   - message: The main log message
 *   - level: Optional log level ('info', 'warning', 'error')
 *   - metadata: Optional additional metadata to include in the log
 * @returns Promise<boolean> - Returns true if the log was sent successfully, false otherwise
 */
export async function sendPostToBetterStack(data: {
  message: string;
  level?: 'info' | 'warning' | 'error';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  metadata?: Record<string, any>;
}) {
  // Get Better Stack configuration from environment variables
  const enable = process.env.BETTERSTACK_ENABLE === 'true';
  const url = process.env.BETTERSTACK_URL;
  const token = process.env.BETTERSTACK_TOKEN;

  // Return false if configuration is missing
  if (!url || !token || !enable) {
    return false;
  }

  // Format current timestamp in UTC
  const now = new Date();
  const dt = now.toISOString().replace("T", " ").replace(/\.\d+Z$/, " UTC");

  // Get caller information from stack trace
  const stack = new Error().stack;
  
  // Get all stack lines, skipping the first line (Error:)
  const stackLines = stack?.split('\n').slice(1) || [];
  
  // Find the first line that doesn't contain internal Next.js or Node.js paths
  const relevantStack = stackLines
    .map(line => line.trim().replace('at ', ''))
    .filter(line => {
      // Only filter out pure Node.js internals
      const isInternal = 
        line.includes('node:async_hooks') ||
        line.includes('AsyncLocalStorage') ||
        line.includes('unstable-cache.js');
      return !isInternal;
    })
    .slice(0, 6); // Take the first 6 relevant lines

  // Clean up each line in the stack
  const cleanStack = relevantStack.map(line => 
    line
      .replace('webpack-internal:///(rsc)/', '')
      .replace('webpack-internal:///(ssr)/', '')
      .replace('./', '') // Remove leading ./
  );

  // Prepare the log payload
  const body = JSON.stringify({
    message: data.message,
    level: data.level || 'info',
    metadata: {
      ...data.metadata,
      environment: process.env.NODE_ENV,
      timestamp: dt,
      user: process.env.BETTERSTACK_USER,
      callStack: cleanStack
    }
  });

  // Send the log to Better Stack
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body,
  });

  // Return true if the request was successful, false otherwise
  if (!response.ok) {
    return false;
  }
  return true;
}
