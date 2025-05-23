"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const copyLink = (url: string) => {
  navigator.clipboard.writeText(url);
};

export function CopyLinkButton() {
  const pathname = usePathname();

  return (
    <Link
      className="btn btn-sm btn-outline-primary btn-mini"
      href={pathname}
      onClick={() => copyLink(`${window.location.origin}${pathname}`)}
      title="Copia link"
    >
      Copia link
    </Link>
  );
}
