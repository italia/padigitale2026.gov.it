import { SearchSuggestionRecord } from "@/graphql/generated";
import Link from "next/link";
import { Icon } from "design-react-kit";

import styles from "./index.module.scss";
import classNames from "classnames/bind";
const cn = classNames.bind(styles);

export function SearchSuggestion({ props }: { props: SearchSuggestionRecord }) {
  const { title, items, id } = props;

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
          >
            <Icon icon="it-search" color="primary" size="sm" />
            <Link href={item.slug || ""} className={cn("fw-semibold")}>
              {item.keyword}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
