"use client";

import { createContext, useContext } from "react";
import {
  AllPagesQuery,
  AllFaqsQuery,
  AllNewsQuery,
  AllResourcesQuery,
  AllEnteBeneficiariosQuery,
  AllMisurasQuery,
} from "@/graphql/generated";

interface PagesContextType {
  pages: AllPagesQuery;
  faqs: AllFaqsQuery;
  news: AllNewsQuery;
  resources: AllResourcesQuery;
  enteBeneficiarios: AllEnteBeneficiariosQuery;
  misuras: AllMisurasQuery;
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
  enteBeneficiarios: AllEnteBeneficiariosQuery;
  misuras: AllMisurasQuery;
}

export function PagesProvider({
  children,
  pages,
  faqs,
  news,
  resources,
  enteBeneficiarios,
  misuras,
}: PagesProviderProps) {
  return (
    <PagesContext.Provider
      value={{ pages, faqs, news, resources, enteBeneficiarios, misuras }}
    >
      {children}
    </PagesContext.Provider>
  );
}
