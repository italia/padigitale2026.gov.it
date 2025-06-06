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
import type { Algoliasearch } from "algoliasearch";
import type { AlgoliaResponse, ContentType, DeployConfig, DeployStatus } from "./types";

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
 * @returns oggetto con stato dopo l'indicizzazione.
 */
export async function indexAvvisi() {
  if (!process.env.AVVISI_BUILD_TRIGGER_ID) {
    throw Error("AVVISI_BUILD_TRIGGER_ID must be defined.");
  }

  const result = await notifyDatoCMSDeploy("success", { webhookId: process.env.AVVISI_BUILD_TRIGGER_ID });

  return {
    message: "Avvisi indexed.",
    status: result.status
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

/**
 * Usato per build trigger di Algolia.
 * Notifica il risultato di un deploy a DatoCMS
 * @param status - Lo stato del deploy ('success' o 'error')
 * @param config - Configurazione per la notifica
 * @throws {Error} Se la richiesta fallisce
 * @returns Promise che si risolve con la risposta del server
 */
async function notifyDatoCMSDeploy(
  status: DeployStatus,
  config: DeployConfig
): Promise<Response> {
  const baseUrl = 'https://webhooks.datocms.com';
  const url = `${baseUrl}/${config.webhookId}/deploy-results`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ status }),
  });

  if (!response.ok) {
    throw new Error(`Failed to notify DatoCMS: ${response.statusText}`);
  }

  return response;
}