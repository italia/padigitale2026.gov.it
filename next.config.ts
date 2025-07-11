import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    DATOCMS_API_TOKEN: process.env.DATOCMS_API_TOKEN,
    DATOCMS_ENVIRONMENT: process.env.DATOCMS_ENVIRONMENT,
    DATOCMS_INCLUDE_DRAFTS: process.env.DATOCMS_INCLUDE_DRAFTS,
    NEXT_PUBLIC_DOMAIN: process.env.NEXT_PUBLIC_DOMAIN,
  },

  async redirects() {
    return [
      { source: "/iniziativa", destination: "/progetto", permanent: true },
      { source: "/iniziativa/presentazione-progetti/", destination: "/progetto", permanent: true },
      { source: "/iniziativa/soluzioni-standard/", destination: "/progetto", permanent: true },
      { source: "/come-partecipare", destination: "/supporto/guida-a-pa-digitale-2026", permanent: true },
      { source: "/come-partecipare/crea-profilo", destination: "/supporto/guida-a-pa-digitale-2026/attivare-il-profilo-della-tua-pa", permanent: true },
      { source: "/come-partecipare/gestire-le-utenze", destination: "/supporto/guida-a-pa-digitale-2026/gestire-le-utenze-della-tua-pa", permanent: true },
      { source: "/come-partecipare/ricevi-assistenza", destination: "/supporto/guida-a-pa-digitale-2026/ricevere-assistenza", permanent: true },
      { source: "/come-partecipare/raggiungere-obiettivi", destination: "/guide-e-risorse/verifica-e-rendicontazione/come-avvengono-le-verifiche-di-conformita-tecnica", permanent: true },
      { source: "/come-partecipare/candida-pa", destination: "/supporto/guida-a-pa-digitale-2026/candidare-una-pa-agli-avvisi", permanent: true },
      { source: "/come-partecipare/gestire-progetto", destination: "/supporto/guida-a-pa-digitale-2026/gestire-un-progetto", permanent: true },
      { source: "/come-partecipare/classifica-pa", destination: "/guide-e-risorse/candidatura-e-contrattualizzazione/classificare-dati-e-servizi-della-tua-PA", permanent: true },
      { source: "/come-partecipare/inviare-piano-migrazione", destination: "/guide-e-risorse/candidatura-e-contrattualizzazione/inviare-un-piano-di-migrazione", permanent: true },
      { source: "/come-partecipare/rispondere-ai-controlli-sostanziali", destination: "/guide-e-risorse/verifica-e-rendicontazione/rispondere-ai-controlli-sostanziali", permanent: true },
      { source: "/come-partecipare/rispondere-ai-controlli-sostanziali", destination: "/guide-e-risorse/verifica-e-rendicontazione/rispondere-ai-controlli-sostanziali", permanent: true },
      { source: "/opendata", destination: "/open-data", permanent: true },
      { source: "/supporto/assistenza", destination: "/supporto/richiedi-assistenza", permanent: true },
      { source: "/supporto/materiali-e-risorse", destination: "/guide-e-risorse", permanent: true },
      { source: "/ricevi-aggiornamenti", destination: "/novita/newsletter", permanent: true },
      { source: "/team-territoriali", destination: "/supporto/team-territoriali", permanent: true },
    ]
  }
};

export default nextConfig;
