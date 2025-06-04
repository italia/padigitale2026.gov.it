"use client";

import { HeroSearchRecord, SearchSuggestionRecord } from "@/graphql/generated";
import {
  Button,
  Hero as HeroComponent,
  HeroTitle,
  Icon,
  Input,
} from "design-react-kit";
import { Breadcrumbs } from "@/src/components/Breadcrumbs";
import { SearchSuggestion } from "@/src/components/SearchSuggestion";
import { useEffect, useRef, useState } from "react";
import { useInstantSearch, useSearchBox } from "react-instantsearch";
import { useRouter } from "next/navigation";

import { liteClient as algoliasearch } from "algoliasearch/lite";
import { InstantSearch } from "react-instantsearch";

// Retrieve Algolia params
const algoliaAppId = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID;
const algoliaApiKey = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY;
const algoliaIndexName = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME;

console.log("algoliaAppId", algoliaAppId);
console.log("algoliaApiKey", algoliaApiKey);
console.log("algoliaIndexName", algoliaIndexName);

if (!algoliaAppId || !algoliaApiKey || !algoliaIndexName) {
  throw new Error("Algolia environment variables are not set");
}

const searchClient = algoliasearch(algoliaAppId, algoliaApiKey);

import styles from "./index.module.scss";
import classNames from "classnames/bind";
const cn = classNames.bind(styles);

function SearchInput({
  suggestion,
  onSearch,
  initialQuery,
}: {
  suggestion: SearchSuggestionRecord;
  onSearch: (query: string) => void;
  initialQuery?: string;
}) {
  const { query, refine } = useSearchBox();
  const { status } = useInstantSearch();
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
      setIsFocused(true);
      const focusEvent = new Event("focus", { bubbles: true });
      inputRef.current.dispatchEvent(focusEvent);
    }
  }, []);

  useEffect(() => {
    if (initialQuery) {
      refine(initialQuery);
    }
  }, [initialQuery, refine]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const showSuggestions = isFocused && !query;

  const handleSearch = () => {
    if (query) {
      onSearch(query);
    }
  };

  const handleSuggestionClick = (term: string) => {
    refine(term);
    onSearch(term);
  };

  return (
    <div ref={containerRef} className={cn("search-container")}>
      <Input
        buttonRight={
          <Button color="primary" onClick={handleSearch}>
            Cerca
          </Button>
        }
        hasButtonRight
        hasIconLeft
        iconLeft={
          <Icon aria-hidden color="primary" icon="it-search" size="sm" />
        }
        id="search"
        label="Scrivi una parola per iniziare la ricerca"
        type="text"
        wrapperClassName={cn("mb-0")}
        innerRef={inputRef}
        onFocus={() => setIsFocused(true)}
        value={query}
        onChange={(e) => refine(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />
      {status === "loading" && <div>Caricamento...</div>}
      {suggestion && showSuggestions && (
        <div className={cn("position-relative w-100")}>
          <div className={cn("position-absolute top-0 start-0 w-100 bg-white")}>
            <SearchSuggestion
              props={suggestion}
              onSuggestionClick={handleSuggestionClick}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export function HeroSearch({ props }: { props: HeroSearchRecord }) {
  const { title, description, hideBreadcrumbs = false, suggestion } = props;
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [initialQuery, setInitialQuery] = useState<string>();

  useEffect(() => {
    setMounted(true);
    // Leggi il parametro q dall'URL
    const searchParams = new URLSearchParams(window.location.search);
    const query = searchParams.get("q");
    if (query) {
      setInitialQuery(query);
    }
  }, []);

  const handleSearch = (query: string) => {
    if (mounted) {
      const searchParams = new URLSearchParams(window.location.search);
      searchParams.set("q", query);
      router.push(`${window.location.pathname}?${searchParams.toString()}`);
    }
  };

  return (
    <HeroComponent className={cn("wrapper")}>
      <div className={"container-xxl position-relative"}>
        <div className={"row"}>
          {/* Breadcrumbs */}
          {!hideBreadcrumbs && (
            <section className={cn("pt-2 col-12")}>
              <Breadcrumbs lightTheme />
            </section>
          )}
          {/* Body */}
          <div className={"pb-4 col-12 text-center"}>
            {title && <HeroTitle className={cn("fs-1")}>{title}</HeroTitle>}
            {description && <p className={cn("fs-6")}>{description}</p>}
            <div className={cn("col-12 col-md-7 mx-auto my-5")}>
              <InstantSearch
                searchClient={searchClient}
                indexName={algoliaIndexName}
              >
                <SearchInput
                  suggestion={suggestion || ({} as SearchSuggestionRecord)}
                  onSearch={handleSearch}
                  initialQuery={initialQuery}
                />
              </InstantSearch>
            </div>
          </div>
        </div>
      </div>
    </HeroComponent>
  );
}
