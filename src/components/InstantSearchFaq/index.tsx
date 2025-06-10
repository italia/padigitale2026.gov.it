"use client";

import Link from "next/link";
import { InstantSearchFaqRecord } from "@/graphql/generated";
import { Configure, useHits, useSearchBox } from "react-instantsearch";

import { liteClient as algoliasearch } from "algoliasearch/lite";
import { InstantSearch } from "react-instantsearch";

// Algolia configuration
const algoliaAppId = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID;
const algoliaApiKey = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY;
const algoliaIndexName = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME;

if (!algoliaAppId || !algoliaApiKey || !algoliaIndexName) {
  throw new Error("Algolia environment variables are not set");
}

const searchClient = algoliasearch(algoliaAppId, algoliaApiKey);

import styles from "./index.module.scss";
import classNames from "classnames/bind";
import { Input, Icon } from "design-react-kit";
const cn = classNames.bind(styles);

// interface HighlightResult {
//   value: string;
//   matchLevel: string;
//   matchedWords: string[];
//   fullyHighlighted?: boolean;
// }

function SearchInput({ inputPlaceholder }: { inputPlaceholder: string }) {
  const { query, refine } = useSearchBox();

  return (
    <div className={cn("search-input-container")}>
      <Input
        hasIconLeft
        iconLeft={
          <Icon aria-hidden color="primary" icon="it-search" size="sm" />
        }
        id="search"
        label={inputPlaceholder}
        type="search"
        wrapperClassName={cn("mb-0")}
        // innerRef={inputRef}
        // onFocus={() => setIsFocused(true)}
        value={query}
        onChange={(e) => refine(e.target.value)}
      />
      {status === "loading" && <div>Caricamento...</div>}
    </div>
  );
}

function SearchResults() {
  const { hits } = useHits();

  return (
    // <div className={cn("hits-container")}>
    //   {hits.map((hit) => (
    //     <div key={hit.objectID} className={cn("hit-item")}>
    //       <h3>{hit.title}</h3>
    //       <p>{hit.content_type}</p>
    //       {/* <p>{hit.description}</p> */}
    //     </div>
    //   ))}
    // </div>

    <div role="list" aria-label="Lista domande frequenti" className={cn("p-4")}>
      {hits.map((item, idx) => {
        if (!item) return null;

        return (
          <div
            role="listitem"
            className={cn("col-12 px-0")}
            key={`faq-item-${item.id || idx}`}
          >
            <div className="row border-bottom m-0 p-0 py-2 w-100">
              <div className="col ps-0">
                <Link
                  className="d-flex justify-content-between align-items-center text-decoration-none"
                  href={`/${item.slug}`}
                  title={item.title || ""}
                  key={`faq-link-${item.id || idx}`}
                  aria-label={`Vai alla domanda: ${item.title}`}
                >
                  <div>
                    <div
                      className="fw-bold text-decoration-underline mb-1"
                      style={{ fontSize: "1.125rem" }}
                    >
                      {item.title}
                    </div>

                    {item.category && (
                      <div className="text-secondary text-decoration-none text-transform-uppercase fw-semibold">
                        <span className="visually-hidden">Categoria: </span>
                        {item.category.label}
                      </div>
                    )}
                  </div>
                  <div className="d-flex align-items-center">
                    <Icon
                      className="my-0"
                      color="primary"
                      icon="it-chevron-right"
                      size="sm"
                      aria-hidden="true"
                      title="Freccia a destra"
                      padding
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function InstantSearchFaq({ props }: { props: InstantSearchFaqRecord }) {
  const { inputPlaceholder } = props;

  return (
    <InstantSearch searchClient={searchClient} indexName={algoliaIndexName}>
      <Configure filters="content_type:faq" />
      <div className={"container-xxl my-5"}>
        <div className={"row"}>
          <div className={cn("col-12 col-md-7")}>
            <SearchInput inputPlaceholder={inputPlaceholder || "Cerca..."} />
          </div>
        </div>
        <div className={cn("col-12 col-md-7 position-relative")}>
          <div
            className={cn(
              "search-results-container",
              "position-absolute top-0 start-0 w-100 bg-white"
            )}
          >
            <SearchResults />
          </div>
        </div>
      </div>
    </InstantSearch>
  );
}
