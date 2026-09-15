"use client";

import { createContext, useContext } from "react";

export type PageContentType =
  | "page"
  | "faq"
  | "news"
  | "resource"
  | "supporto"
  | "dati";

const PageContentTypeContext = createContext<PageContentType>("page");

export function PageContentTypeProvider({
  children,
  value,
}: {
  children: React.ReactNode;
  value: PageContentType;
}) {
  return (
    <PageContentTypeContext.Provider value={value}>
      {children}
    </PageContentTypeContext.Provider>
  );
}

export function usePageContentType() {
  return useContext(PageContentTypeContext);
}
