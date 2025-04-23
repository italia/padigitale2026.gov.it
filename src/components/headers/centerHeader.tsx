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
      <HeaderContent>
        <Link
          href="/"
          className="d-flex align-items-center gap-4 text-decoration-none ms-4 ms-lg-0 ps-3 ps-lg-0"
        >
          <Image src="/images/logo-ri.svg" alt="Logo" width={56} height={63} />
          <Image
            src="/images/site-logo.svg"
            alt="Logo"
            width={56}
            height={56}
          />
          <div className="">
            <h3 className="mb-0 d-none d-sm-block">{title}</h3>
            <p className="mb-0 fs-6 d-none d-md-block">{subtitle}</p>
          </div>
        </Link>
        <HeaderRightZone>
          <HeaderSearch iconName="it-search" label="Cerca" />
        </HeaderRightZone>
      </HeaderContent>
    </Header>
  );
}
