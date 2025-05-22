"use client";

import { createContext, useContext } from "react";
import {
  AllPagesQuery,
  AllFaqsQuery,
  AllNewsQuery,
  AllResourcesQuery,
} from "@/graphql/generated";

interface PagesContextType {
  pages: AllPagesQuery;
  faqs: AllFaqsQuery;
  news: AllNewsQuery;
  resources: AllResourcesQuery;
}

export const PagesContext = createContext<PagesContextType | null>(null);

export function usePages() {
  const context = useContext(PagesContext);
  if (!context) {
    throw new Error(
      "usePages deve essere usato all'interno di un PagesProvider"
    );
  }
  return context;
}

interface PagesProviderProps {
  children: React.ReactNode;
  pages: AllPagesQuery;
  faqs: AllFaqsQuery;
  news: AllNewsQuery;
  resources: AllResourcesQuery;
}

export function PagesProvider({
  children,
  pages,
  faqs,
  news,
  resources,
}: PagesProviderProps) {
  return (
    <PagesContext.Provider value={{ pages, faqs, news, resources }}>
      {children}
    </PagesContext.Provider>
  );
}
