import type { Metadata } from "next";
import Script from "next/script";
import { Titillium_Web, Roboto_Mono, Lora } from "next/font/google";

import "bootstrap-italia/dist/css/bootstrap-italia.min.css";
import "./globals.scss";

// Configurazione font ottimizzata
const titilliumWeb = Titillium_Web({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
  preload: true,
  variable: "--font-titillium-web",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-roboto-mono",
});

const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-lora",
});

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
  getAllSupportos,
  getAllDatis,
  getAllGuidelines,
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
  AllSupportosQuery,
  AllDatisQuery,
  AllGuidelinesQuery,
} from "@/graphql/generated";
import Header from "@/src/components/header";
import Footer from "@/src/components/footer";
import BootstrapInit from "@/src/components/BootstrapInit";
import BootstrapScript from "@/src/components/BootstrapScript";
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
  const supportos = (await getAllSupportos()) as AllSupportosQuery;
  const news = (await getAllNews()) as AllNewsQuery;
  const resources = (await getAllResources()) as AllResourcesQuery;
  const misuras = (await getAllMisuras()) as AllMisurasQuery;
  const enteBeneficiarios =
    (await getAllEnteBeneficiarios()) as AllEnteBeneficiariosQuery;
  const entePromotores =
    (await getAllEntePromotores()) as AllEntePromotoresQuery;
  const updates = (await getAllUpdates()) as AllUpdatesQuery;
  const datis = (await getAllDatis()) as AllDatisQuery;
  const guidelines = (await getAllGuidelines()) as AllGuidelinesQuery;

  return (
    <html lang="it">
      <body
        className={`${titilliumWeb.variable} ${robotoMono.variable} ${lora.variable}`}
      >
        <PagesProvider
          pages={pages}
          faqs={faqs}
          supportos={supportos}
          news={news}
          resources={resources}
          enteBeneficiarios={enteBeneficiarios}
          entePromotores={entePromotores}
          misuras={misuras}
          updates={updates}
          datis={datis}
          guidelines={guidelines}
        >
          <Header props={headerProps} />
          <main id={"main"}>{children}</main>
          <Footer props={footerProps} />
        </PagesProvider>
        <BootstrapInit />
        <BootstrapScript />

        {/* Script Matomo */}
        <Script
          id="matomo-tracking"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var _paq = window._paq = window._paq || [];
              _paq.push(['trackPageView']);
              _paq.push(['enableLinkTracking']);
              (function() {
                var u = 'https://ingestion.webanalytics.italia.it/';
                _paq.push(['setTrackerUrl', u+'matomo.php']);
                _paq.push(['setSiteId', ${process.env.NEXT_PUBLIC_MATOMO_SITE_ID || "2020"}]);
                var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
                g.type='text/javascript'; g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
              })();
            `,
          }}
        />

        {/* Noscript fallback */}
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://ingestion.webanalytics.italia.it//matomo.php?idsite=${process.env.NEXT_PUBLIC_MATOMO_SITE_ID || 'R9pxNNv0Xm'}&rec=1&url=https://padigitale2026.gov.it/"
            style={{ border: 0 }}
            alt="tracker"
          />
        </noscript>
      </body>
    </html>
  );
}
