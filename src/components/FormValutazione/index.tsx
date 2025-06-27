"use client";

// import { FormValutazioneRecord } from "@/graphql/generated";

import classNames from "classnames/bind";
import styles from "./index.module.scss";
const cn = classNames.bind(styles);

export function FormValutazione() {
  return (
    <div className={cn("wrapper", "container-xxl py-5 my-5 mx-auto")}>
      form valutazione
    </div>
  );
}
