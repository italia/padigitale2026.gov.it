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
  GuidelineDocument
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
    tags: ['misuras']
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
