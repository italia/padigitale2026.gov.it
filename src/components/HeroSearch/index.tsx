"use client";

import { HeroSearchRecord, SearchSuggestionRecord } from "@/graphql/generated";
import {
  Button,
  Icon,
  Hero as HeroComponent,
  HeroTitle,
  Form,
  FormGroup,
  Input,
  Label,
  Pager,
} from "design-react-kit";
import { Breadcrumbs } from "@/src/components/Breadcrumbs";
import { SearchSuggestion } from "@/src/components/SearchSuggestion";
import { HTMLAttributeAnchorTarget, useEffect, useRef, useState } from "react";
import { useInstantSearch, useSearchBox, useHits } from "react-instantsearch";
import { useRouter } from "next/navigation";
import { PaginationItem, PaginationLink } from "reactstrap";

import { liteClient as algoliasearch } from "algoliasearch/lite";
import { InstantSearch, Configure } from "react-instantsearch";

// Algolia configuration
const algoliaAppId = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID;
const algoliaApiKey = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY;
const algoliaIndexName = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME;
const RESULTS_PER_PAGE = 8;

if (!algoliaAppId || !algoliaApiKey || !algoliaIndexName) {
  throw new Error("Algolia environment variables are not set");
}

const searchClient = algoliasearch(algoliaAppId, algoliaApiKey);

import styles from "./index.module.scss";
import classNames from "classnames/bind";
import Link from "next/link";
const cn = classNames.bind(styles);

interface HighlightResult {
  value: string;
  matchLevel: string;
  matchedWords: string[];
  fullyHighlighted?: boolean;
}

/**
 * SearchInput component that handles the search functionality
 * It integrates with Algolia for search and manages the search suggestions
 */
function SearchInput({
  suggestion,
  onSearch,
  initialQuery,
  onReset,
}: {
  suggestion: SearchSuggestionRecord;
  onSearch: (query: string) => void;
  initialQuery?: string;
  onReset: () => void;
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

  const showSuggestions = isFocused && !inputValue;

  const handleSearch = () => {
    if (inputValue && inputValue.length >= 3) {
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
    onReset();
  };

  return (
    <div ref={containerRef} className={cn("search-container")}>
      <Input
        buttonRight={
          <Button
            color="primary"
            onClick={handleSearch}
            disabled={!inputValue || inputValue.length < 3}
          >
            Cerca
          </Button>
        }
        hasButtonRight
        hasIconLeft
        iconLeft={
          <Icon aria-hidden color="primary" icon="it-search" size="sm" />
        }
        id="search"
        label="Scrivi almeno 3 caratteri per cercare"
        type="text"
        wrapperClassName={cn("mb-0")}
        innerRef={inputRef}
        onFocus={() => setIsFocused(true)}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && inputValue && inputValue.length >= 3) {
            handleSearch();
          }
        }}
      />
      {status === "loading" && <div>Caricamento...</div>}
      {suggestion && showSuggestions && (
        <div className={cn("position-relative w-100")} style={{ zIndex: 1 }}>
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
          outline
        >
          <Icon icon="it-close" />
          Annulla ricerca
        </Button>
      )}
    </div>
  );
}

// Utility function to get the display name for content types
const getContentTypeDisplayName = (contentType: string): string => {
  const contentTypeMap: Record<string, string> = {
    page: "Pagina",
    news: "Notizie",
    faq: "Domande frequenti",
    resource: "Risorse",
    supporto: "Supporto",
    update: "Aggiornamenti",
    dati: "Dati",
    avviso: "Avvisi",
  };

  return contentTypeMap[contentType] || contentType;
};

function Filters({
  selectedFilters,
  onFilterChange,
}: {
  selectedFilters: string[];
  onFilterChange: (contentType: string, checked: boolean) => void;
}) {
  const { results } = useHits();
  const { query } = useSearchBox();

  // Don't show anything if there's no query or no results
  if (!query || !results?.hits?.length) return null;

  // Extract unique content types from results
  const uniqueContentTypes = Array.from(
    new Set(results?.hits?.map((hit) => hit.content_type))
  ).filter(Boolean);

  return (
    <section className="container-xxl">
      <fieldset>
        <legend className="px-0">Filtra per:</legend>
        <Form className="px-0" style={{ marginLeft: "-4px" }}>
          {uniqueContentTypes.map((contentType) => (
            <FormGroup check inline key={contentType}>
              <Input
                id={contentType}
                type="checkbox"
                checked={selectedFilters.includes(contentType)}
                onChange={(e) => onFilterChange(contentType, e.target.checked)}
              />
              <Label check for={contentType}>
                {getContentTypeDisplayName(contentType)}
              </Label>
            </FormGroup>
          ))}
        </Form>
      </fieldset>
    </section>
  );
}

function SearchResults({ selectedFilters }: { selectedFilters: string[] }) {
  const { results } = useHits();
  const { query } = useSearchBox();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Inizializza il componente e leggi la pagina dall'URL
  useEffect(() => {
    setMounted(true);
    const searchParams = new URLSearchParams(window.location.search);
    const page = searchParams.get("page");
    if (page) {
      setCurrentPage(parseInt(page, 10));
    }
  }, []);

  // Resetta la paginazione quando cambiano i filtri
  useEffect(() => {
    if (mounted && currentPage > 1) {
      setCurrentPage(1);
      const searchParams = new URLSearchParams(window.location.search);
      searchParams.delete("page");
      router.push(`${window.location.pathname}?${searchParams.toString()}`);
    }
  }, [selectedFilters, mounted, router]);

  // Aggiorna l'URL quando cambia la pagina
  useEffect(() => {
    if (mounted) {
      const searchParams = new URLSearchParams(window.location.search);
      if (currentPage > 1) {
        searchParams.set("page", currentPage.toString());
      } else {
        searchParams.delete("page");
      }
      router.push(`${window.location.pathname}?${searchParams.toString()}`);
    }
  }, [currentPage, mounted, router]);

  if (!query) return null;

  // Extract unique content types from results
  const uniqueContentTypes = Array.from(
    new Set(results?.hits?.map((hit) => hit.content_type))
  ).filter(Boolean);

  // Filter results based on selected content types
  const filteredHits = results?.hits?.filter((hit) => {
    // Show all results if no filters are selected or if all types are selected
    if (
      selectedFilters.length === 0 ||
      selectedFilters.length === uniqueContentTypes.length
    ) {
      return true;
    }
    // Otherwise show only results matching selected filters
    return selectedFilters.includes(hit.content_type);
  });

  // Calculate pagination
  const totalPages = Math.ceil((filteredHits?.length || 0) / RESULTS_PER_PAGE);
  const startIndex = (currentPage - 1) * RESULTS_PER_PAGE;
  const endIndex = startIndex + RESULTS_PER_PAGE;
  const currentHits = filteredHits?.slice(startIndex, endIndex);

  return (
    <div className={cn("container-xxl")}>
      <div className={cn("row")}>
        <div className={cn("col-12")}>
          <p className={cn("fw-bold mt-5 mb-3")}>
            {filteredHits?.length && filteredHits?.length > 0
              ? // ? `${results?.nbHits} Risultati per "${query}"`
                `${filteredHits?.length} Risultati per "${query}"`
              : `Nessun risultato trovato per "${query}".`}
          </p>
          {!filteredHits?.length && (
            <p className={cn("mb-3")}>
              Prova a usare parole chiave diverse o a cambiare i filtri di
              ricerca.
            </p>
          )}
          {currentHits?.map((hit) => (
            <div
              role="listitem"
              className="row border-bottom m-0 p-0 py-2 w-100"
              key={hit.objectID}
              data-content-type={hit.content_type}
            >
              <div className="col ps-0">
                <Link
                  className="d-flex justify-content-between align-items-center text-decoration-none"
                  href={hit.slug ? hit.slug : hit.url ? hit.url : "#"}
                  title={hit.title}
                  target={(hit?.target as HTMLAttributeAnchorTarget) || "_self"}
                  aria-label={`${hit.title}`}
                >
                  <div>
                    <div
                      className="fw-bold text-decoration-underline mb-1"
                      style={{ fontSize: "1.125rem" }}
                      dangerouslySetInnerHTML={{
                        __html: hit?._highlightResult.title.value
                          ? hit?._highlightResult.title.value
                          : hit.title,
                      }}
                    />

                    <div
                      className="text-muted"
                      dangerouslySetInnerHTML={{
                        __html: hit?._highlightResult.content
                          ? Array.isArray(hit._highlightResult.content)
                            ? hit._highlightResult.content
                                .filter(
                                  (item: HighlightResult) =>
                                    item.matchedWords.length > 0
                                )
                                .map((item: HighlightResult) => item.value)
                                .join(" ")
                            : hit._highlightResult.content.value
                          : hit.content,
                      }}
                    />

                    {hit.content_type && (
                      <div className="text-secondary fw-semibold text-uppercase">
                        <span className="visually-hidden">Content type: </span>
                        {getContentTypeDisplayName(hit.content_type)}
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
          ))}
          {totalPages > 1 && (
            <div className="d-flex justify-content-center mt-4">
              <Pager aria-label="Naviga tra le pagine dei risultati">
                <PaginationItem disabled={currentPage <= 1}>
                  <PaginationLink
                    onClick={() => setCurrentPage(currentPage - 1)}
                  >
                    <span className="visually-hidden">Pagina precedente</span>
                    <Icon aria-hidden icon="it-chevron-left" />
                  </PaginationLink>
                </PaginationItem>
                {Array.from({ length: totalPages }, (_, i) => (
                  <PaginationItem key={i}>
                    <PaginationLink
                      aria-current={currentPage === i + 1 ? "page" : undefined}
                      aria-label={`Vai alla pagina ${i + 1}`}
                      onClick={() => setCurrentPage(i + 1)}
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem disabled={currentPage >= totalPages}>
                  <PaginationLink
                    onClick={() => setCurrentPage(currentPage + 1)}
                  >
                    <span className="visually-hidden">Pagina successiva</span>
                    <Icon aria-hidden icon="it-chevron-right" />
                  </PaginationLink>
                </PaginationItem>
              </Pager>
            </div>
          )}
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
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  // Initialize component and read query and filters from URL
  useEffect(() => {
    setMounted(true);
    const searchParams = new URLSearchParams(window.location.search);
    const query = searchParams.get("q");
    const filters = searchParams.get("filters");

    if (query) {
      setInitialQuery(query);
    }
    if (filters) {
      setSelectedFilters(filters.split(","));
    }
  }, []);

  // Update URL with search query and filters
  const handleSearch = (query: string) => {
    if (mounted) {
      // Reset filters when performing a new search
      setSelectedFilters([]);

      const searchParams = new URLSearchParams(window.location.search);
      searchParams.set("q", query);
      searchParams.delete("filters"); // Remove filters from URL
      router.push(`${window.location.pathname}?${searchParams.toString()}`);
    }
  };

  const handleFilterChange = (contentType: string, checked: boolean) => {
    let newFilters: string[];
    if (checked) {
      newFilters = [...selectedFilters, contentType];
    } else {
      newFilters = selectedFilters.filter((filter) => filter !== contentType);
    }

    setSelectedFilters(newFilters);

    if (mounted) {
      const searchParams = new URLSearchParams(window.location.search);
      if (newFilters.length > 0) {
        searchParams.set("filters", newFilters.join(","));
      } else {
        searchParams.delete("filters");
      }
      router.push(`${window.location.pathname}?${searchParams.toString()}`);
    }
  };

  const handleReset = () => {
    setSelectedFilters([]);
    if (mounted) {
      const searchParams = new URLSearchParams(window.location.search);
      searchParams.delete("q");
      searchParams.delete("filters");
      const newUrl = searchParams.toString()
        ? `${window.location.pathname}?${searchParams.toString()}`
        : window.location.pathname;
      router.push(newUrl);
    }
  };

  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={algoliaIndexName}
      initialUiState={{
        [algoliaIndexName as string]: {
          page: 0,
        },
      }}
    >
      <Configure hitsPerPage={1000} />
      <HeroComponent className={cn("wrapper")}>
        <div className={"container-xxl position-relative"}>
          <div className={"row"}>
            {!hideBreadcrumbs && (
              <section className={cn("pt-2 col-12")}>
                <Breadcrumbs lightTheme />
              </section>
            )}
            <div className={"pb-4 col-12 text-center"}>
              {title && <HeroTitle className={cn("fs-1")}>{title}</HeroTitle>}
              {description && <p className={cn("fs-6")}>{description}</p>}
              <div className={cn("col-12 col-md-7 mx-auto my-5")}>
                <SearchInput
                  suggestion={suggestion || ({} as SearchSuggestionRecord)}
                  onSearch={handleSearch}
                  initialQuery={initialQuery}
                  onReset={handleReset}
                />
              </div>
            </div>
          </div>
        </div>
      </HeroComponent>
      <div className={cn("col-12 col-md-7 mx-auto my-5")}>
        <Filters
          selectedFilters={selectedFilters}
          onFilterChange={handleFilterChange}
        />
        <SearchResults selectedFilters={selectedFilters} />
      </div>
    </InstantSearch>
  );
}
