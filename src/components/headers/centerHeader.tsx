"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Header,
  // HeaderBrand,
  HeaderContent,
  HeaderRightZone,
  HeaderSearch,
  // HeaderSocialsZone,
  // Icon,
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
          {/* <HeaderSocialsZone label="Seguici su">
            <ul>
              <li>
                <a aria-label="Facebook" href="#" target="_blank">
                  <Icon icon="it-facebook" />
                </a>
              </li>
              <li>
                <a aria-label="Github" href="#" target="_blank">
                  <Icon icon="it-github" />
                </a>
              </li>
              <li>
                <a aria-label="Twitter" href="#" target="_blank">
                  <Icon icon="it-twitter" />
                </a>
              </li>
            </ul>
          </HeaderSocialsZone> */}
          <HeaderSearch iconName="it-search" label="Cerca" />
        </HeaderRightZone>
      </HeaderContent>
    </Header>
  );
}
