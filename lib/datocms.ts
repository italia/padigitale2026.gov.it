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

export async function getAllPages(includeDrafts: boolean = false) {
  options.includeDrafts = includeDrafts;
  return executeQueryWithAutoPagination(AllPagesDocument, options);
}

export async function page(slug: string, includeDrafts: boolean = false) {
  return executeQuery(PageDocument, {
    ...options,
    includeDrafts: includeDrafts,
    referer: `function:page|slug:${slug}|includeDrafts:${includeDrafts}`,
    variables: {
      slug: slug,
      index: "2",
    } as PageQueryVariables,
  });
}

export async function getAllFaqs(includeDrafts: boolean = false) {
  return executeQueryWithAutoPagination(AllFaqsDocument, {
    ...options,
    includeDrafts: includeDrafts,
    referer: `function:getAllFaqs|includeDrafts:${includeDrafts}`,
  });
}

export async function getAllNews(includeDrafts: boolean = false) {
  return executeQueryWithAutoPagination(AllNewsDocument, {
    ...options,
    includeDrafts: includeDrafts,
    referer: `function:getAllNews|includeDrafts:${includeDrafts}`,
  });
}

export async function getAllResources(includeDrafts: boolean = false) {
  return executeQueryWithAutoPagination(AllResourcesDocument, {
    ...options,
    includeDrafts: includeDrafts,
    referer: `function:getAllResources|includeDrafts:${includeDrafts}`,
  });
}

export async function getFooter(includeDrafts: boolean = false) {
  return executeQuery(FooterDocument, {
    ...options,
    includeDrafts: includeDrafts,
    referer: `function:getFooter|includeDrafts:${includeDrafts}`,
  });
}

export async function getHeader(includeDrafts: boolean = false) {
  return executeQuery(HeaderDocument, {
    ...options,
    includeDrafts: includeDrafts,
    referer: `function:getHeader|includeDrafts:${includeDrafts}`,
  });
}

export async function getSitemapPages(includeDrafts: boolean = false) {
  return executeQueryWithAutoPagination(SitemapPagesDocument, {
    ...options,
    includeDrafts: includeDrafts,
    referer: `function:getSitemapPages|includeDrafts:${includeDrafts}`,
  });
}
