import { AlgoliaPageQuery } from "@/graphql/generated";
import { getAlgoliaPage } from "@/lib/datocms";
import { AlgoliaDocument } from "./types";
import { render } from "datocms-structured-text-to-plain-text";
import { compressText } from "./lib";
import type { Algoliasearch } from "algoliasearch";
import type { AlgoliaResponse } from "./types";

/**
 * Funzione per indicizzare una pagina (content type page) in Algolia.
 * @param id id della pagina DatoCMS da indicizzare.
 * @param algoliaClient client Algolia iniettato dal controller REST.
 * @returns oggetto con stato dopo l'indicizzazione.
 */
export async function indexPage(id: string, algoliaClient: Algoliasearch): Promise<AlgoliaResponse> {
    const page = await getAlgoliaPage(id) as AlgoliaPageQuery;
    const algoliaDocument: AlgoliaDocument = {
        title: undefined,
        slug: undefined,
        content: undefined,
        content_type: "page"
    };
    let content: string = "";

    algoliaDocument["title"] = page.page?.title || "";
    algoliaDocument["slug"] = page.page?.slug || "";

    page.page?.body.forEach((el) => {
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

            case "HeroRecord":
            case "BannerRecord":
            case "SplitBannerRecord":
            case "CardsGridRecord":
                content += `${el.title} ${el.description} `;
                break;

            case "VideoPlayerRecord":
                content += `${el.title} ${el.transcription} `;
                break;
        }
    })

    algoliaDocument["content"] = compressText(content);

    const response = await algoliaClient.addOrUpdateObject({
        indexName: process.env.ALGOLIA_INDEX_NAME || "",
        objectID: id,
        body: algoliaDocument
    })

    if (response.objectID) {
        return {
            "message": `Entity with id ${id} indexed`
        }
    }

    return {
        "message": `Error indexing entity with id ${id}`
    }
}

/**
 * Funzione per rimuovere una pagina (content type page) da Algolia.
 * La rimozione avviene se la pagina viene cancellata o depubblicata.
 * @param id id della pagina DatoCMS da rimuovere.
 * @param algoliaClient client Algolia iniettato dal controller REST.
 * @returns oggetto con stato dopo l'indicizzazione.
 */
export async function removePage(id: string, algoliaClient: Algoliasearch): Promise<AlgoliaResponse> {
    const response = await algoliaClient.deleteObject({
        indexName: process.env.ALGOLIA_INDEX_NAME || "",
        objectID: id
    })

    if (response.deletedAt) {
        return {
            "message": `Entity with id ${id} removed (deletedAt ${response.deletedAt})`
        }
    }

    return {
        "message": `Error indexing entity with id ${id}`
    }
}