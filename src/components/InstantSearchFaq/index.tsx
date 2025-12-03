"use client";

import Link from "next/link";
import { Input, Icon, Section, Container, Row, Col } from "design-react-kit";
import { InstantSearchFaqRecord } from "@/graphql/generated";
import {
  Configure,
  useHits,
  useSearchBox,
  useInstantSearch,
} from "react-instantsearch";
import { BaseHit } from "instantsearch.js";

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
import { useState, useRef, useEffect } from "react";
const cn = classNames.bind(styles);

interface HighlightResult {
  value: string;
  matchLevel: string;
  matchedWords: string[];
  fullyHighlighted?: boolean;
}

interface FaqHit extends BaseHit {
  id?: string;
  title: string;
  content?: string;
  slug: string;
  category?: {
    label: string;
  };
  _highlightResult?: {
    title?: {
      value: string;
    };
    content?: HighlightResult | HighlightResult[];
  };
}

function SearchInput({ inputPlaceholder }: { inputPlaceholder: string }) {
  const { query, refine } = useSearchBox();
  const { status } = useInstantSearch();
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={cn("search-input-container", "position-relative")}>
      <Input
        hasIconLeft
        iconLeft={
          <Icon aria-hidden color="primary" icon="it-search" size="sm" />
        }
        id="search"
        label={inputPlaceholder}
        type="search"
        wrapperClassName={cn("mb-0")}
        innerRef={inputRef}
        value={query}
        onChange={(e) => refine(e.target.value)}
      />
      {status === "loading" && (
        <div className={cn("position-absolute", "bottom-0", "end-0")}>
          Ricerca in corso...
        </div>
      )}
    </div>
  );
}

function SearchResults({ isFocused }: { isFocused: boolean }) {
  const results = useHits<FaqHit>();
  const { query } = useSearchBox();

  if (!isFocused || !query || query.length < 3) return null;

  return (
    <div role="list" aria-label="Lista domande frequenti" className={cn("p-4")}>
      {!results.items.length && (
        <p className={cn("mb-3")}>
          <b>{`Nessun risultato trovato per "${query}".`}</b> <br />
          Prova a usare parole chiave diverse per la ricerca.
        </p>
      )}
      {results.items.map((item, idx) => {
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
                  prefetch={false}
                  className="d-flex justify-content-between align-items-center text-decoration-none"
                  href={`/${item.slug}`}
                  title={item.title || ""}
                  key={`faq-link-${item.id || idx}`}
                  aria-label={`Vai alla domanda: ${item.title}`}
                >
                  <div>
                    <h3
                      className="fw-bold text-decoration-underline mb-1 lh-base"
                      style={{ fontSize: "1.125rem" }}
                      dangerouslySetInnerHTML={{
                        __html:
                          item?._highlightResult?.title?.value || item.title,
                      }}
                    />

                    <div
                      className="text-muted"
                      dangerouslySetInnerHTML={{
                        __html: item?._highlightResult?.content
                          ? Array.isArray(item._highlightResult.content)
                            ? item._highlightResult.content
                                .filter(
                                  (item: HighlightResult) =>
                                    item.matchedWords.length > 0
                                )
                                .map((item: HighlightResult) => item.value)
                                .join(" ")
                            : item._highlightResult.content.value
                          : item.content || "",
                      }}
                    />

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
      {results.items.length > 0 && (
        <div className="d-flex align-items-center mt-4">
          <Link
            prefetch={false}
            className="btn btn-sm btn-outline-primary"
            href={`/cerca?q=${query}&filters=faq`}
            target={"_self"}
            title={
              results.items.length > 1 ? "Vai ai risultati" : "Vai al risultato"
            }
          >
            {results.items.length > 1 ? "Vai ai risultati" : "Vai al risultato"}
          </Link>
          <div className="ms-4">
            {results.items.length}{" "}
            {results.items.length > 1 ? "risultati" : "risultato"}
          </div>
        </div>
      )}
    </div>
  );
}

export function InstantSearchFaq({ props }: { props: InstantSearchFaqRecord }) {
  const { id, inputPlaceholder, title } = props;
  const [isFocused, setIsFocused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Chiudi i risultati solo quando si clicca fuori dal componente,
  // evitando di smontare i link prima che ricevano il click.
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

  return (
    <Section>
      <Container>
        <Row>
          <Col>
            {title && (
              <h2 id={id} className={cn("h2")}>
                {title}
              </h2>
            )}
            <InstantSearch
              searchClient={searchClient}
              indexName={algoliaIndexName}
            >
              <Configure filters="content_type:faq" />
              <div
                ref={containerRef}
                className={"container-xxl my-5"}
                onFocus={() => setIsFocused(true)}
              >
                <div className={"row"}>
                  <div className={cn("col-12 col-md-7 p-0")}>
                    <SearchInput
                      inputPlaceholder={inputPlaceholder || "Cerca..."}
                    />
                  </div>
                </div>
                <div
                  className={cn("col-12 col-md-7 position-relative")}
                  style={{ zIndex: 10 }}
                >
                  <div
                    className={cn(
                      "search-results-container",
                      "position-absolute top-0 start-0 w-100 bg-white"
                    )}
                  >
                    <SearchResults isFocused={isFocused} />
                  </div>
                </div>
              </div>
            </InstantSearch>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}
