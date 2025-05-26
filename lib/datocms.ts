import {
  executeQuery,
  executeQueryWithAutoPagination,
} from "@datocms/cda-client";
import {
  AllPagesDocument,
  AllFaqsDocument,
  PageDocument,
  SitemapPagesDocument,
  PageQueryVariables,
  FooterDocument,
  HeaderDocument,
  AllNewsDocument,
  AllResourcesDocument,
  AllEnteBeneficiariosDocument,
} from "@/graphql/generated";

if (!process.env.DATOCMS_API_TOKEN) {
  throw new Error(
    "DatoCMS API Token is not defined. Please check your .env file and next.config.js"
  );
}

const options = {
  token: process.env.DATOCMS_API_TOKEN,
  includeDrafts: process.env.DATOCMS_INCLUDE_DRAFTS === "true",
  environment: process.env.DATOCMS_ENVIRONMENT || "main",
};

export async function getAllPages() {
  return executeQueryWithAutoPagination(AllPagesDocument, {
    ...options,
    requestInitOptions: {
      headers: {
        "Referer": `fn_name:getAllPages`,
      },
    },
  });
}

export async function page(slug: string) {
  return executeQuery(PageDocument, {
    ...options,
    requestInitOptions: {
      headers: {
        "Referer": `fn_name:page|slug:${slug}`,
      },
    },
    variables: {
      slug: slug,
      index: "2",
    } as PageQueryVariables,
  });
}

export async function getAllFaqs() {
  return executeQueryWithAutoPagination(AllFaqsDocument, {
    ...options,
    requestInitOptions: {
      headers: {
        "Referer": `fn_name:getAllFaqs`,
      },
    },
  });
}

export async function getAllNews() {
  return executeQueryWithAutoPagination(AllNewsDocument, {
    ...options,
    requestInitOptions: {
      headers: {
        "Referer": `fn_name:getAllNews`,
      },
    },
  });
}

export async function getAllResources() {
  return executeQueryWithAutoPagination(AllResourcesDocument, {
    ...options,
    requestInitOptions: {
      headers: {
        "Referer": `fn_name:getAllResources`,
      },
    },
  });
}

export async function getFooter() {
  return executeQuery(FooterDocument, {
    ...options,
    requestInitOptions: {
      headers: {
        "Referer": `fn_name:getFooter`,
      },
    },
  });
}

export async function getHeader() {
  return executeQuery(HeaderDocument, {
    ...options,
    requestInitOptions: {
      headers: {
        "Referer": `fn_name:getHeader`,
      },
    },
  });
}

export async function getSitemapPages() {
  return executeQueryWithAutoPagination(SitemapPagesDocument, {
    ...options,
    requestInitOptions: {
      headers: {
        "Referer": `fn_name:getSitemapPages`,
      },
    },
  });
}

export async function getAllEnteBeneficiarios() {
  return executeQueryWithAutoPagination(AllEnteBeneficiariosDocument, {
    ...options,
    requestInitOptions: {
      headers: {
        "Referer": `fn_name:getAllEnteBeneficiarios`,
      },
    },
  });
}
