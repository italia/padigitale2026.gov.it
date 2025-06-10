"use client";

import { InstantSearchFaqRecord } from "@/graphql/generated";
import { Configure, Hits, SearchBox } from "react-instantsearch";

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
const cn = classNames.bind(styles);

// interface HighlightResult {
//   value: string;
//   matchLevel: string;
//   matchedWords: string[];
//   fullyHighlighted?: boolean;
// }

export function InstantSearchFaq({ props }: { props: InstantSearchFaqRecord }) {
  const { inputPlaceholder } = props;

  return (
    <InstantSearch searchClient={searchClient} indexName={algoliaIndexName}>
      <Configure filters="content_type:faq" />
      <div className={"container-xxl position-relative"}>
        {inputPlaceholder}
        <div className={"row"}>
          <div className={cn("col-12 col-md-7 my-5")}>
            <SearchBox />
          </div>
        </div>
        <div className={cn("col-12 col-md-7 my-5")}>
          <Hits />
        </div>
      </div>
    </InstantSearch>
  );
}
