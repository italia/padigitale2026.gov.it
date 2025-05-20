import { executeQuery, executeQueryWithAutoPagination } from '@datocms/cda-client';
import { AllPagesDocument, AllFaqsDocument, PageDocument, SitemapPagesDocument, PageQueryVariables, FooterDocument, HeaderDocument, AllNewsDocument, AllResourcesDocument } from '@/graphql/generated';

if (!process.env.DATOCMS_API_TOKEN) {
  throw new Error("DatoCMS API Token is not defined. Please check your .env file and next.config.js");
}

const options = {
  token: process.env.DATOCMS_API_TOKEN,
  includeDrafts: process.env.DATOCMS_INCLUDE_DRAFTS === "true",
  environment: process.env.DATOCMS_ENVIRONMENT || "main",
};

export async function getAllPages(includeDrafts: boolean = false) {
  options.includeDrafts = includeDrafts;
  return executeQueryWithAutoPagination(AllPagesDocument, options);
}

export async function page(slug: string) {
  return executeQuery(PageDocument, {
    ...options,
    variables: {
      slug: slug,
      index: "2"
    } as PageQueryVariables
  })
}

export async function getAllFaqs(includeDrafts: boolean = false) {
  options.includeDrafts = includeDrafts;
  return executeQueryWithAutoPagination(AllFaqsDocument, options);
}

export async function getAllNews(includeDrafts: boolean = false) {
  options.includeDrafts = includeDrafts;
  return executeQueryWithAutoPagination(AllNewsDocument, options);
}

export async function getAllResources(includeDrafts: boolean = false) {
  options.includeDrafts = includeDrafts;
  return executeQueryWithAutoPagination(AllResourcesDocument, options);
}

export async function getFooter(includeDrafts: boolean = false) {
  options.includeDrafts = includeDrafts;
  return executeQuery(FooterDocument, options);
}

export async function getHeader(includeDrafts: boolean = false) {
  options.includeDrafts = includeDrafts;
  return executeQuery(HeaderDocument, options);
}

export async function getSitemapPages(includeDrafts: boolean = false) {
  options.includeDrafts = includeDrafts;
  return executeQueryWithAutoPagination(SitemapPagesDocument, options);
}
