"use client";

import styles from "./index.module.scss";
import classNames from "classnames/bind";
const cn = classNames.bind(styles);

export function CardBadge({ content }: { content: string }) {
  return (
    <span className={cn(
      "badge text-capitalize px-3",
      {
        "lightgrey-bg-a3 text-primary": content.toLowerCase().trim() === "nuovo",
        "neutral-1-bg-a2 text-dark": content.toLowerCase().trim() === "aggiornato"
      }
    )}>{content}</span>
  );
}
