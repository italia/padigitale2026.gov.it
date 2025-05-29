"use client";

import { createContext, useContext } from "react";
import {
  AllPagesQuery,
  AllFaqsQuery,
  AllNewsQuery,
  AllResourcesQuery,
  AllEnteBeneficiariosQuery,
  AllEntePromotoresQuery,
  AllMisurasQuery,
  AllUpdatesQuery,
} from "@/graphql/generated";

interface PagesContextType {
  pages: AllPagesQuery;
  faqs: AllFaqsQuery;
  news: AllNewsQuery;
  resources: AllResourcesQuery;
  enteBeneficiarios: AllEnteBeneficiariosQuery;
  entePromotores: AllEntePromotoresQuery;
  misuras: AllMisurasQuery;
  updates: AllUpdatesQuery;
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
  entePromotores: AllEntePromotoresQuery;
  misuras: AllMisurasQuery;
  updates: AllUpdatesQuery;
}

export function PagesProvider({
  children,
  pages,
  faqs,
  news,
  resources,
  enteBeneficiarios,
  entePromotores,
  misuras,
  updates,
}: PagesProviderProps) {
  return (
    <PagesContext.Provider
      value={{
        pages,
        faqs,
        news,
        resources,
        enteBeneficiarios,
        entePromotores,
        misuras,
        updates,
      }}
    >
      {children}
    </PagesContext.Provider>
  );
}
