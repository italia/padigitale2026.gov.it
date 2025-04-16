import { executeQuery, executeQueryWithAutoPagination } from '@datocms/cda-client';
import { AllPagesDocument, PageDocument, SitemapPagesDocument, PageQueryVariables, FooterDocument, HeaderDocument } from '@/graphql/generated';

if (!process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN) {
  throw new Error("DatoCMS API Token is not defined");
}

const options = {
  token: process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN,
  includeDrafts: process.env.NEXT_PUBLIC_DATOCMS_INCLUDE_DRAFTS === "true",
  environment: process.env.NEXT_PUBLIC_DATOCMS_ENV,
};

export async function getAllPages() {
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

export async function getFooter() {
  return executeQuery(FooterDocument, options);
}

export async function getHeader() {
  return executeQuery(HeaderDocument, options);
}

export async function getSitemapPages() {
  return executeQueryWithAutoPagination(SitemapPagesDocument, options);
}
