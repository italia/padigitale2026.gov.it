import type { Metadata } from "next";
import Script from "next/script";

import "bootstrap-italia/dist/css/bootstrap-italia.min.css";
import "./globals.scss";

import "typeface-titillium-web";
import "typeface-roboto-mono";
import "typeface-lora";

import {
  getFooter,
  getHeader,
  getAllPages,
  getAllFaqs,
  getAllNews,
  getAllResources,
  getAllEnteBeneficiarios,
  getAllEntePromotores,
  getAllMisuras,
  getAllUpdates,
} from "@/lib/datocms";
import type {
  FooterQuery,
  HeaderQuery,
  AllPagesQuery,
  AllFaqsQuery,
  AllNewsQuery,
  AllResourcesQuery,
  AllEnteBeneficiariosQuery,
  AllEntePromotoresQuery,
  AllMisurasQuery,
  AllUpdatesQuery,
} from "@/graphql/generated";
import Header from "@/src/components/header";
import Footer from "@/src/components/footer";
import BootstrapInit from "@/src/components/BootstrapInit";
import { PagesProvider } from "@/src/contexts/PagesContext";

export const metadata: Metadata = {
  title: "PA digitale 2026",
  description:
    "Trova gli avvisi di finanziamento per la transizione digitale della tua amministrazione, gestisci i progetti e richiedi assistenza in modo semplice e rapido.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const footerProps = (await getFooter()) as FooterQuery;
  const headerProps = (await getHeader()) as HeaderQuery;
  const pages = (await getAllPages()) as AllPagesQuery;
  const faqs = (await getAllFaqs()) as AllFaqsQuery;
  const news = (await getAllNews()) as AllNewsQuery;
  const resources = (await getAllResources()) as AllResourcesQuery;
  const misuras = (await getAllMisuras()) as AllMisurasQuery;
  const enteBeneficiarios =
    (await getAllEnteBeneficiarios()) as AllEnteBeneficiariosQuery;
  const entePromotores =
    (await getAllEntePromotores()) as AllEntePromotoresQuery;
  const updates = (await getAllUpdates()) as AllUpdatesQuery;

  return (
    <html lang="it">
      <head>
        <Script
          src="/bootstrap-italia.bundle.min.js"
          strategy="afterInteractive"
        />
      </head>
      <body>
        <PagesProvider
          pages={pages}
          faqs={faqs}
          news={news}
          resources={resources}
          enteBeneficiarios={enteBeneficiarios}
          entePromotores={entePromotores}
          misuras={misuras}
          updates={updates}
        >
          <Header props={headerProps} />
          <main id={"main"}>{children}</main>
          <Footer props={footerProps} />
        </PagesProvider>
        <BootstrapInit />
      </body>
    </html>
  );
}
