import {
  AlgoliaFaqQuery,
  AlgoliaNewsQuery,
  AlgoliaPageQuery,
  AlgoliaResourceQuery,
} from "@/graphql/generated";
import {
  getAlgoliaPage,
  getAlgoliaResource,
  getAlgoliaNews,
  getAlgoliaFaq,
} from "@/lib/datocms";
import { AlgoliaDocument } from "./types";
import { render } from "datocms-structured-text-to-plain-text";
import { compressText, splitStringToChunks } from "./lib";
import { getAvvisi, type Avviso } from "@/lib/salesforce";
import type { Algoliasearch } from "algoliasearch";
import type { AlgoliaResponse, ContentType } from "./types";

const CHUNK_MAX_LENGTH = 200;

/**
 * Funzione per indicizzare una pagina (content type page) in Algolia.
 * @param id id della pagina DatoCMS da indicizzare.
 * @param content_type il content type della entity da indicizzare.
 * @param algoliaClient client Algolia iniettato dal controller REST.
 * @returns oggetto con stato dopo l'indicizzazione.
 */
export async function indexEntity(
  id: string,
  content_type: ContentType,
  algoliaClient: Algoliasearch
): Promise<AlgoliaResponse> {
  let entity;
  let entity_content;

  switch (content_type) {
    case "page":
      entity = (await getAlgoliaPage(id)) as AlgoliaPageQuery;
      entity_content = entity.page;
      break;
    case "resource":
      entity = (await getAlgoliaResource(id)) as AlgoliaResourceQuery;
      entity_content = entity.resource;
      break;
    case "news":
      entity = (await getAlgoliaNews(id)) as AlgoliaNewsQuery;
      entity_content = entity.news;
      break;
    case "faq":
      entity = (await getAlgoliaFaq(id)) as AlgoliaFaqQuery;
      entity_content = entity.faq;
      break;
    default:
      throw Error("Trying to index an unrecognized content type");
  }

  // Gestione del NOINDEX:
  // Se il noIndex è settato a true, va tentata la cancellazione del record
  // su Algolia. In ogni caso, se il noIndex è true, l'indicizzazione su
  // Algolia viene saltata.
  if (entity_content?.seo?.noIndex) {
    await removeEntity(entity_content.id, algoliaClient)

    return {
      message: `La entity con ID ${entity_content.id} è stata rimossa da Algolia (o non indicizzata).`
    }
  }

  // da qui in poi entity_content ha la stessa struttura
  // indipendentemente dal content type.

  const algoliaDocument: AlgoliaDocument = {
    title: undefined,
    slug: undefined,
    content: undefined,
    content_type: content_type,
  };

  // Accumulatore che conterrà tutto il contenuto testuale da indicizzare
  let content: string = "";

  algoliaDocument["title"] = entity_content?.title || "";
  algoliaDocument["slug"] = entity_content?.slug || "";

  // Loop che scorre tutti i componenti e ne estrae solo le parti da indicizzare
  entity_content?.body.forEach((el) => {
    switch (el.__typename) {
      case "RichTextSectionRecord":
        content += `${render(el.rt_content)} `;
        break;

      case "CardsGridGenericRecord":
      case "CardsGridAttachmentRecord":
      case "CardsGridServiceRecord":
      case "CardsGridResourceRecord":
      case "CardsGridNewsRecord":
      case "CardsGridAnnouncementRecord":
        content += `${el.sectionFields?.title} ${el.sectionFields?.description} `;
        break;

      case "CardsGridImageRecord":
        content += `${el.title} ${el.description} ${el.captions} `;
        break;

      case "TableListRecord":
      case "TableListUpdateRecord":
        content += `${el.title} `;
        break;

      case "LayoutSidebarRecord":
        el.ls_content.forEach((ls) => {
          if (ls.__typename === "RichTextRecord") {
            content += `${render(ls.content)} `;
          }
        });
        break;

      case "LayoutSidebarFilterRecord":
        el.content.forEach((ls) => {
          if (ls.__typename == "RichTextRecord") {
            content += `${render(ls.content)} `;
          }
        });
        break;

      case "HeroRecord":
      case "BannerRecord":
      case "SplitBannerRecord":
      case "CardsGridRecord":
        content += `${el.title} ${el.description} `;
        break;

      case "VideoPlayerRecord":
        content += `${el.title} ${el.transcription} `;
        break;

      case "BloccoGraficoRecord":
        content += `${el.title} ${el.subtitle} `;
        break;
    }
  });

  // Il contenuto testuale viene compresso e spezzettato in chunk.
  algoliaDocument["content"] = splitStringToChunks(compressText(content), CHUNK_MAX_LENGTH);

  const response = await algoliaClient.addOrUpdateObject({
    indexName: process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME || "",
    objectID: id,
    body: algoliaDocument,
  });

  if (response.objectID) {
    return {
      message: `Entity with id ${id} indexed`,
    };
  }

  return {
    message: `Error indexing entity with id ${id}`,
  };
}

/**
 * Funzione che si occupa di indicizzare in Algolia tutti gli Avvisi (SF).
 * Questa funzionalità è esposta tramite un "build trigger in DatoCMS".
 * @param algoliaClient client Algolia iniettato dal controller REST.
 * @returns oggetto con stato dopo l'indicizzazione.
 */
export async function indexAvvisi(algoliaClient: Algoliasearch) {
  if (!process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME) {
    throw Error("process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME must be defined.");
  }

  const avvisi = await getAvvisi();

  algoliaClient.batch({
    indexName: process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME,

    batchWriteParams: {
      requests: avvisi.map((avviso: Avviso) => {
        return {
          action: 'partialUpdateObject',
          body: {
            objectID: avviso.id,
            url: `${process.env.SF_URL}?id=${avviso.id}`,
            title: avviso.name,
            content: avviso.oggettoBando,
            content_type: "avviso",
            beneficiari: avviso.beneficiari,
            misura: avviso.misura,
            status: avviso.status,
            start_date: avviso.startDate,
            end_date: avviso.endDate,
            ente_promotore: avviso.entePromotore,
          }
        }
      })
    }
  })

  return {
    message: `${avvisi.length} Avvisi indexed.`
  }
}

/**
 * Funzione per rimuovere una pagina (content type page) da Algolia.
 * La rimozione avviene se la pagina viene cancellata o depubblicata.
 * @param id id della pagina DatoCMS da rimuovere.
 * @param algoliaClient client Algolia iniettato dal controller REST.
 * @returns oggetto con stato dopo l'indicizzazione.
 */
export async function removeEntity(
  id: string,
  algoliaClient: Algoliasearch
): Promise<AlgoliaResponse> {
  const response = await algoliaClient.deleteObject({
    indexName: process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME || "",
    objectID: id,
  });

  if (response.deletedAt) {
    return {
      message: `Entity with id ${id} removed (deletedAt ${response.deletedAt})`,
    };
  }

  return {
    message: `Error indexing entity with id ${id}`,
  };
}
