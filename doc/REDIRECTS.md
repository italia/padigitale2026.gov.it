# Creare redirects

[↩ README](../README.md)

Questo progetto basato su NextJS supporta due tipi di redirect:

- Redirect lato server
- Redirect lato client.

## Redirect lato server

I redirect lato server sono definiti nel file `next.config.ts` nella funzione `async redirects() {...}`.

Per aggiungerne uno nuovo basta semplicemente aggiungere un nuovo oggetto:

```json
{
    "source": "<source>",
    "destination": "<destination>",
    "permanent": true|false
}
```

L'attributo `source` deve essere un path/slug. La `destination` può essere o un path oppure un indirizzo esterno. Infine la chiave `permanent` determina il response code del redirect. Tendenzialmente andrà sempre messo a `true`.

Link alla [🌐 documentazione ufficiale](https://nextjs.org/docs/app/api-reference/config/next-config-js/redirects).

## Redirect lato client

Questo tipo di redirect è basato sui [🌐 fragments](https://developer.mozilla.org/en-US/docs/Web/URI/Reference/Fragment/Text_fragments) e rende possibile effettuare dei redirect via JavaScript. Questa funzionalità è legata esclusivamente alle FAQ.

I redirect sono definiti nel file `src/components/FragmentRedirect/faq_redirects.json`.

Esempio:

```json
  {
    "source": "03_classification-data-services/006_Cosasiintendeperallegareladocumentazioneasupp",
    "destination": "/supporto/domande-frequenti/classificazione-dati-e-servizi/cosa-intende-allegare-documentazione-supporto-giustifichi"
  },
```

`source` indica il fragment che deve essere presente nella URL per scatenare il redirect (il simbolo `#` è omesso). Mentre `destination` è il path verso il quale va fatto il redirect.

In questo esempio, la URL:

[🌐 https://padigitale2026.gov.it/#03_classification-data-services/006_Cosasiintendeperallegareladocumentazioneasupp](https://padigitale2026.gov.it/#03_classification-data-services/006_Cosasiintendeperallegareladocumentazioneasupp)

effettuerà un redirect via Javascript a:

[🌐 https://padigitale2026.gov.it/supporto/domande-frequenti/classificazione-dati-e-servizi/cosa-intende-allegare-documentazione-supporto-giustifichi](https://padigitale2026.gov.it/supporto/domande-frequenti/classificazione-dati-e-servizi/cosa-intende-allegare-documentazione-supporto-giustifichi).

Notare che non ha rilevanza il path della URL: l'unica cosa che viene considerata è l'hash fragment.

Il tutto è gestito dal componente `FragmentRedirect` in `src/components/FragmentRedirect/index.tsx` che è incluso in ogni pagina.

Sebbene sia pensato esplicitamente per le FAQ, questo concetto può essere esteso per qualsiasi altro tipo di contenuto.
