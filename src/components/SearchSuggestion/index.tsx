import { SearchSuggestionRecord } from "@/graphql/generated";
import { Icon } from "design-react-kit";

import styles from "./index.module.scss";
import classNames from "classnames/bind";
const cn = classNames.bind(styles);

export function SearchSuggestion({
  props,
  onSuggestionClick,
}: {
  props: SearchSuggestionRecord;
  onSuggestionClick: (term: string) => void;
}) {
  const { title, items, id } = props;

  const handleClick = (e: React.MouseEvent, term: string) => {
    e.preventDefault();
    onSuggestionClick(term);
  };

  const handleKeyDown = (e: React.KeyboardEvent, term: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onSuggestionClick(term);
    }
  };

  return (
    <div
      className={cn("wrapper", "container-xxl py-4 px-3")}
      role="region"
      // aria-labelledby={title ? `${id}-title` : undefined}
    >
      {title && (
        <p id={`${id}-title`} className={cn("fw-bold")}>
          {title}
        </p>
      )}

      <ul
        role="listbox"
        aria-label={
          title
            ? `Suggerimenti di ricerca: ${title}`
            : "Suggerimenti di ricerca"
        }
        className={cn("list-unstyled p-0 m-0")}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            role="option"
            aria-selected="false"
            className={cn(
              "d-flex align-items-center gap-3 px-2 py-3 border-bottom cursor-pointer",
              "focus-within:bg-light focus-within:outline-none"
            )}
            tabIndex={0}
            onClick={(e) => handleClick(e, item.keyword || "")}
            onKeyDown={(e) => handleKeyDown(e, item.keyword || "")}
            onFocus={(e) => {
              e.currentTarget.setAttribute("aria-selected", "true");
            }}
            onBlur={(e) => {
              e.currentTarget.setAttribute("aria-selected", "false");
            }}
          >
            <Icon
              icon="it-search"
              color="primary"
              size="sm"
              aria-hidden="true"
            />
            <span
              className={cn(
                "fw-semibold text-primary text-decoration-underline"
              )}
            >
              {item.keyword}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
