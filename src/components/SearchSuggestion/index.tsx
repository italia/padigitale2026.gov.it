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

  return (
    <div
      className={cn("wrapper", "container-xxl py-4 px-3")}
      role="region"
      aria-labelledby={title ? `${id}-title` : undefined}
    >
      {title && (
        <p id={`${id}-title`} className={cn("fw-bold")}>
          {title}
        </p>
      )}

      <ul
        role="list"
        aria-label={title ? `Lista ${title}` : "Lista elementi"}
        className={cn("list-unstyled")}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className={cn(
              "d-flex align-items-center gap-3 px-2 py-3 border-bottom"
            )}
            role="button"
          >
            <Icon icon="it-search" color="primary" size="sm" />
            <div
              className={cn(
                "fw-semibold text-primary text-decoration-underline"
              )}
              onClick={(e) => handleClick(e, item.keyword || "")}
            >
              {item.keyword}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
