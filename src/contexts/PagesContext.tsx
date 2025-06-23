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
  AllSupportosQuery,
  AllDatisQuery,
} from "@/graphql/generated";

interface PagesContextType {
  pages: AllPagesQuery;
  faqs: AllFaqsQuery;
  supportos: AllSupportosQuery;
  news: AllNewsQuery;
  resources: AllResourcesQuery;
  enteBeneficiarios: AllEnteBeneficiariosQuery;
  entePromotores: AllEntePromotoresQuery;
  misuras: AllMisurasQuery;
  updates: AllUpdatesQuery;
  datis: AllDatisQuery;
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
  supportos: AllSupportosQuery;
  news: AllNewsQuery;
  resources: AllResourcesQuery;
  enteBeneficiarios: AllEnteBeneficiariosQuery;
  entePromotores: AllEntePromotoresQuery;
  misuras: AllMisurasQuery;
  updates: AllUpdatesQuery;
  datis: AllDatisQuery;
}

export function PagesProvider({
  children,
  pages,
  faqs,
  supportos,
  news,
  resources,
  enteBeneficiarios,
  entePromotores,
  misuras,
  updates,
  datis,
}: PagesProviderProps) {
  return (
    <PagesContext.Provider
      value={{
        pages,
        faqs,
        supportos,
        news,
        resources,
        enteBeneficiarios,
        entePromotores,
        misuras,
        updates,
        datis,
      }}
    >
      {children}
    </PagesContext.Provider>
  );
}
