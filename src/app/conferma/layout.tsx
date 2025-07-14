import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conferma Iscrizione - PA digitale 2026",
  description: "Conferma la tua iscrizione alla newsletter di PA digitale 2026",
  robots: "noindex, nofollow", // Questa pagina non deve essere indicizzata
  openGraph: {
    title: "Conferma Iscrizione - PA digitale 2026",
    description:
      "Conferma la tua iscrizione alla newsletter di PA digitale 2026",
    type: "website",
    url: "https://padigitale2026.gov.it/conferma",
  },
  twitter: {
    card: "summary",
    title: "Conferma Iscrizione - PA digitale 2026",
    description:
      "Conferma la tua iscrizione alla newsletter di PA digitale 2026",
  },
};

export default function ConfermaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
