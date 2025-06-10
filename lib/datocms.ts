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
  AllEntePromotoresDocument,
  AllMisurasDocument,
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
    referer: referer
  };
}

export async function getAllPages() {
  return executeQueryWithAutoPagination(
    AllPagesDocument,
    getOptions(`fn_name:getAllPages`)
  );
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

export async function getAllFilteredUpdates(idBeneficiari: Array<string>) {
  return executeQuery(AllFilteredUpdatesDocument, {
    ...getOptions(
      `fn_name:allFilteredUpdates|idBeneficiari:${idBeneficiari.toString()}`
    ),
    variables: {
      idBeneficiari: idBeneficiari,
    } as AllFilteredUpdatesQueryVariables,
  });
}

export async function getAllFaqs() {
  return executeQueryWithAutoPagination(
    AllFaqsDocument,
    getOptions(`fn_name:getAllFaqs`)
  );
}

export async function getAllNews() {
  return executeQueryWithAutoPagination(
    AllNewsDocument,
    getOptions(`fn_name:getAllNews`)
  );
}

export async function getAllResources() {
  return executeQueryWithAutoPagination(
    AllResourcesDocument,
    getOptions(`fn_name:getAllResources`)
  );
}

export async function getFooter() {
  return executeQuery(FooterDocument, getOptions(`fn_name:getFooter`));
}

export async function getHeader() {
  return executeQuery(HeaderDocument, getOptions(`fn_name:getHeader`));
}

export async function getSitemapPages() {
  return executeQueryWithAutoPagination(
    SitemapPagesDocument,
    getOptions(`fn_name:getSitemapPages`)
  );
}

export async function getAllEnteBeneficiarios() {
  return executeQueryWithAutoPagination(
    AllEnteBeneficiariosDocument,
    getOptions(`fn_name:getAllEnteBeneficiarios`)
  );
}

export async function getAllEntePromotores() {
  return executeQueryWithAutoPagination(
    AllEntePromotoresDocument,
    getOptions(`fn_name:getAllEntePromotores`)
  );
}

export async function getAllMisuras() {
  return executeQueryWithAutoPagination(
    AllMisurasDocument,
    getOptions(`fn_name:getAllMisuras`)
  );
}

export async function getAllUpdates() {
  return executeQueryWithAutoPagination(
    AllUpdatesDocument,
    getOptions(`fn_name:getAllUpdates`)
  );
}

// ------------------------------------- //
// Funzioni di indicizzazione in Algolia //
// ------------------------------------- //

export async function getAlgoliaPage(id: string) {
  return executeQuery(AlgoliaPageDocument, {
    ...getOptions(`fn_name:getAlgoliaPage|id:${id}`),
    includeDrafts: false, // Forzato a false perche' indicizziamo solo record pubblicati.
    variables: {
      id: id,
    } as AlgoliaPageQueryVariables,
  });
}

export async function getAlgoliaResource(id: string) {
  return executeQuery(AlgoliaResourceDocument, {
    ...getOptions(`fn_name:getAlgoliaResource|id:${id}`),
    includeDrafts: false, // Forzato a false perche' indicizziamo solo record pubblicati.
    variables: {
      id: id,
    } as AlgoliaResourceQueryVariables,
  });
}

export async function getAlgoliaNews(id: string) {
  return executeQuery(AlgoliaNewsDocument, {
    ...getOptions(`fn_name:getAlgoliaNews|id:${id}`),
    includeDrafts: false, // Forzato a false perche' indicizziamo solo record pubblicati.
    variables: {
      id: id,
    } as AlgoliaNewsQueryVariables,
  });
}

export async function getAlgoliaFaq(id: string) {
  return executeQuery(AlgoliaFaqDocument, {
    ...getOptions(`fn_name:getAlgoliaFaq|id:${id}`),
    includeDrafts: false, // Forzato a false perche' indicizziamo solo record pubblicati.
    variables: {
      id: id,
    } as AlgoliaFaqQueryVariables,
  });
}
