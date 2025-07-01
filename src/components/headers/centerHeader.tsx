"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Header,
  HeaderContent,
  HeaderRightZone,
  HeaderSearch,
} from "design-react-kit";

import type { HeaderQuery } from "@/graphql/generated";

export default function CenterHeader({
  theme,
  props,
}: {
  theme?: "dark" | "light";
  props: HeaderQuery;
}) {
  const header = props.header;
  const title = header?.title || "";
  const subtitle = header?.subtitle || "";

  return (
    <Header theme={theme || ""} type="center">
      <HeaderContent className={"px-0"}>
        <Link
          href="/"
          className="d-flex align-items-center gap-4 text-decoration-none ms-4 ms-lg-0 ps-3 ps-lg-0"
          aria-label={`${title} - ${subtitle} - Torna alla home page`}
        >
          <Image
            src="/images/logo-ri.svg"
            alt=""
            title=""
            width={56}
            height={63}
            aria-hidden="true"
          />
          <Image
            src="/images/site-logo.svg"
            alt=""
            title=""
            width={56}
            height={56}
            aria-hidden="true"
          />
          <div className="">
            <h1 className="mb-0 d-none d-sm-block h3">{title}</h1>
            <p className="mb-0 h-6 d-none d-lg-block">{subtitle}</p>
          </div>
        </Link>
        <HeaderRightZone>
          <HeaderSearch
            role={"search"}
            href={"/cerca"}
            iconName="it-search"
            label="Cerca"
            aria-label="Cerca negli avvisi, notizie, guide e risorse - Apri la pagina di ricerca"
          />
        </HeaderRightZone>
      </HeaderContent>
    </Header>
  );
}
