import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Annulla Iscrizione - PA digitale 2026",
  description: "Annulla la tua iscrizione alla newsletter di PA digitale 2026",
  robots: "noindex, nofollow", // Questa pagina non deve essere indicizzata
  openGraph: {
    title: "Annulla Iscrizione - PA digitale 2026",
    description:
      "Annulla la tua iscrizione alla newsletter di PA digitale 2026",
    type: "website",
    url: "https://padigitale2026.gov.it/annulla-iscrizione",
  },
  twitter: {
    card: "summary",
    title: "Annulla Iscrizione - PA digitale 2026",
    description:
      "Annulla la tua iscrizione alla newsletter di PA digitale 2026",
  },
};

export default function AnnullaIscrizioneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
