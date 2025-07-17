"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";

export function CopyLinkButton() {
  const pathname = usePathname();
  const [isCopied, setIsCopied] = useState(false);
  const [isCopiedText, setIsCopiedText] = useState("Copia link");

  const copyLink = (url: string) => {
    navigator.clipboard.writeText(url);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  useEffect(() => {
    if (isCopied) {
      setIsCopiedText("Link Copiato");
      setTimeout(() => {
        setIsCopied(false);
        setIsCopiedText("Copia link");
      }, 3000);
    }
  }, [isCopied]);

  return (
    <Link
      prefetch={false}
      className="btn btn-sm btn-outline-primary btn-mini"
      href={pathname}
      onClick={() => copyLink(`${window.location.origin}${pathname}`)}
      title={isCopiedText}
      role="button"
      aria-label="Copia link della pagina corrente"
      aria-pressed={isCopied}
      aria-live="polite"
    >
      {isCopiedText}
    </Link>
  );
}
