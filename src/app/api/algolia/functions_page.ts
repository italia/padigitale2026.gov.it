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
    let algoiliaDocument: AlgoliaDocument = {};
    let content: string = "";

    algoiliaDocument.id = id;
    algoiliaDocument.title = page.page?.title || "";
    algoiliaDocument.slug = page.page?.slug || "";

    page.page?.body.forEach((el) => {
        if (el.__typename == "RichTextSectionRecord") {
            content += `${render(el.rt_content)} `;
        }
        if (el.__typename == "LayoutSidebarRecord") {
            el.ls_content.forEach((ls) => {
                if (ls.__typename == "RichTextRecord") {
                    content += `${render(ls.content)} `;
                }
            })
        }
        if (el.__typename == "HeroRecord") {
            content += `${el.title} ${el.description} `
        }
        if (el.__typename == "BannerRecord") {
            content += `${el.title} ${el.description} `
        }
    })

    algoiliaDocument.content = compressText(content);

    const response = await algoliaClient.addOrUpdateObject({
        indexName: process.env.ALGOLIA_INDEX_NAME || "",
        objectID: algoiliaDocument.id,
        body: algoiliaDocument
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