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
import { useInstantSearch, useSearchBox, useHits } from "react-instantsearch";
import { useRouter } from "next/navigation";

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

/**
 * SearchInput component that handles the search functionality
 * It integrates with Algolia for search and manages the search suggestions
 */
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
  const [inputValue, setInputValue] = useState(initialQuery || "");

  // Focus the input on component mount
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
      setIsFocused(true);
      const focusEvent = new Event("focus", { bubbles: true });
      inputRef.current.dispatchEvent(focusEvent);
    }
  }, []);

  // Set initial query from URL if present
  useEffect(() => {
    if (initialQuery) {
      refine(initialQuery);
    }
  }, [initialQuery, refine]);

  // Handle clicks outside the search container
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

  const showSuggestions = isFocused && (!query || !inputValue);

  const handleSearch = () => {
    if (inputValue) {
      refine(inputValue);
      onSearch(inputValue);
    }
  };

  const handleSuggestionClick = (term: string) => {
    setInputValue(term);
    refine(term);
    onSearch(term);
  };

  const handleReset = () => {
    setInputValue("");
    refine("");
    onSearch("");
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
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
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
      {query && (
        <Button
          color="secondary"
          size="xs"
          onClick={handleReset}
          className={cn("mt-2")}
        >
          <Icon icon="it-close" size="sm" />
          Annulla ricerca
        </Button>
      )}
    </div>
  );
}

function SearchResults() {
  const { results } = useHits();
  const { query } = useSearchBox();

  if (!query) return null;

  return (
    <div className={cn("container-xxl")}>
      <div className={cn("row")}>
        <div className={cn("col-12")}>
          <p className={cn("fw-bold mt-5 mb-3")}>
            {results?.hits?.length && results?.hits?.length > 0
              ? `${results?.hits?.length} Risultati per "${query}"`
              : `Nessun risultato trovato per "${query}". Prova con altri termini di ricerca.`}
          </p>
          {results?.hits?.map((hit) => (
            <div key={hit.objectID} className={cn("mb-3")}>
              <div>{hit.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * HeroSearch component that provides a search interface in the hero section
 * It integrates with Algolia for search functionality and manages URL updates
 */
export function HeroSearch({ props }: { props: HeroSearchRecord }) {
  const { title, description, hideBreadcrumbs = false, suggestion } = props;
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [initialQuery, setInitialQuery] = useState<string>();

  // Initialize component and read query from URL
  useEffect(() => {
    setMounted(true);
    const searchParams = new URLSearchParams(window.location.search);
    const query = searchParams.get("q");
    if (query) {
      setInitialQuery(query);
    }
  }, []);

  // Update URL with search query
  const handleSearch = (query: string) => {
    if (mounted) {
      const searchParams = new URLSearchParams(window.location.search);
      searchParams.set("q", query);
      router.push(`${window.location.pathname}?${searchParams.toString()}`);
    }
  };

  return (
    <InstantSearch searchClient={searchClient} indexName={algoliaIndexName}>
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
                <SearchInput
                  suggestion={suggestion || ({} as SearchSuggestionRecord)}
                  onSearch={handleSearch}
                  initialQuery={initialQuery}
                />
              </div>
            </div>
          </div>
        </div>
      </HeroComponent>
      <SearchResults />
    </InstantSearch>
  );
}
