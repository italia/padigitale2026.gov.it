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

const baseOptions = {
  token: process.env.DATOCMS_API_TOKEN,
  includeDrafts: process.env.DATOCMS_INCLUDE_DRAFTS === "true",
  environment: process.env.DATOCMS_ENVIRONMENT || "main",
};

function getOptions(referer: string) {
  return {
    ...baseOptions,
    requestInitOptions: {
      headers: {
        "Authorization": `Bearer ${process.env.DATOCMS_API_TOKEN}`,
        "Referer": referer,
      },
    },
  };
}

export async function getAllPages() {
  return executeQueryWithAutoPagination(AllPagesDocument, getOptions(`fn_name:getAllPages`));
}

export async function page(slug: string) {
  return executeQuery(PageDocument, {
    ...getOptions(`fn_name:page|slug:${slug}`),
    variables: {
      slug: slug,
      index: "2",
    } as PageQueryVariables,
  });
}

export async function getAllFaqs() {
  return executeQueryWithAutoPagination(AllFaqsDocument, getOptions(`fn_name:getAllFaqs`));
}

export async function getAllNews() {
  return executeQueryWithAutoPagination(AllNewsDocument, getOptions(`fn_name:getAllNews`));
}

export async function getAllResources() {
  return executeQueryWithAutoPagination(AllResourcesDocument, getOptions(`fn_name:getAllResources`));
}

export async function getFooter() {
  return executeQuery(FooterDocument, getOptions(`fn_name:getFooter`));
}

export async function getHeader() {
  return executeQuery(HeaderDocument, getOptions(`fn_name:getHeader`));
}

export async function getSitemapPages() {
  return executeQueryWithAutoPagination(SitemapPagesDocument, getOptions(`fn_name:getSitemapPages`));
}

export async function getAllEnteBeneficiarios() {
  return executeQueryWithAutoPagination(AllEnteBeneficiariosDocument, getOptions(`fn_name:getAllEnteBeneficiarios`));
}
