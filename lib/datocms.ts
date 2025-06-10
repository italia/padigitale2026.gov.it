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
    referer: referer,
    requestInitOptions: {
      referrer: referer
    }
  };
}

export async function getAllPages() {
  return executeQueryWithAutoPagination(
    AllPagesDocument,
    getOptions(`https://fn.getAllPages.org`)
  );
}

export async function page(slug: string) {
  return executeQuery(PageDocument, {
    ...getOptions(`https://fn.page.org/${slug}`),
    variables: {
      slug: slug,
      index: "2",
    } as PageQueryVariables,
  });
}

export async function getAllFilteredUpdates(idBeneficiari: Array<string>) {
  return executeQuery(AllFilteredUpdatesDocument, {
    ...getOptions(
      `https://fn.allFilteredUpdates.org/${idBeneficiari.toString()}`
    ),
    variables: {
      idBeneficiari: idBeneficiari,
    } as AllFilteredUpdatesQueryVariables,
  });
}

export async function getAllFaqs() {
  return executeQueryWithAutoPagination(
    AllFaqsDocument,
    getOptions(`https://fn.getAllFaqs.org`)
  );
}

export async function getAllNews() {
  return executeQueryWithAutoPagination(
    AllNewsDocument,
    getOptions(`https://fn.getAllNews.org`)
  );
}

export async function getAllResources() {
  return executeQueryWithAutoPagination(
    AllResourcesDocument,
    getOptions(`https://fn.getAllResources.org`)
  );
}

export async function getFooter() {
  return executeQuery(FooterDocument, getOptions(`https://fn.getFooter.org`));
}

export async function getHeader() {
  return executeQuery(HeaderDocument, getOptions(`https://fn.getHeader.org`));
}

export async function getSitemapPages() {
  return executeQueryWithAutoPagination(
    SitemapPagesDocument,
    getOptions(`https://fn.getSitemapPages.org`)
  );
}

export async function getAllEnteBeneficiarios() {
  return executeQueryWithAutoPagination(
    AllEnteBeneficiariosDocument,
    getOptions(`https://fn.getAllEnteBeneficiarios.org`)
  );
}

export async function getAllEntePromotores() {
  return executeQueryWithAutoPagination(
    AllEntePromotoresDocument,
    getOptions(`https://fn.getAllEntePromotores.org`)
  );
}

export async function getAllMisuras() {
  return executeQueryWithAutoPagination(
    AllMisurasDocument,
    getOptions(`https://fn.getAllMisuras.org`)
  );
}

export async function getAllUpdates() {
  return executeQueryWithAutoPagination(
    AllUpdatesDocument,
    getOptions(`https://fn.getAllUpdates.org`)
  );
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
