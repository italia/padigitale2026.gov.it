# Documentazione componenti DatoCMS

[↩ README](../README.md)

Questa mappatura mostra quali componenti possono essere usati per tutti i content types, e mostra anche dove questi componenti sono definiti nella codebase.

In linea generale, tutti i componenti sono nella directory `src/components/<CartellaComponente>`. All'interno della cartella del componente si trova:

- `index.tsx`: il controller del componente che ne definisce il markup e le funzionalità.
- `index.module.scss`: il foglio di stile del componente.

&Egrave; utile consultare il file `src/components/ModularContent.tsx` in quanto questo componente è il punto di ingresso principale che il progetto utilizza per renderizzare le pagine (loop componenti). Quest'ultimo poi determina, in base al contenuto restituito dalle API di Dato, quale componente invocare passandogli le props corrette.

## Tabella mappatura

"**✓**" indica che il componente può essere usato nel content type, altrimenti non sarà disponibile.

|                                   | Page | Risorsa | Notizia | Supporto | Domanda frequente | Dati | Path                                           |
| --------------------------------- | :--: | :-----: | :-----: | :------: | :---------------: | :--: | ---------------------------------------------- |
| Accordion con filtri              |  ✓   |    ✓    |    -    |    -     |         -         |  -   | `src/components/AccordionsFilter/index.tsx`    |
| Banner con immagine               |  ✓   |    ✓    |    ✓    |    ✓     |         ✓         |  ✓   | `src/components/SplitBanner/index.tsx`         |
| Banner solo testo                 |  ✓   |    ✓    |    ✓    |    ✓     |         ✓         |  ✓   | `src/components/Banner/index.tsx`              |
| Barra di ricerca                  |  ✓   |    -    |    -    |    -     |         -         |  -   | `src/components/HeroSearch/index.tsx`          |
| Card allegati                     |  ✓   |    ✓    |    ✓    |    ✓     |         ✓         |  ✓   | `src/components/CardsGrid/index.tsx`           |
| Card avvisi                       |  ✓   |    ✓    |    ✓    |    ✓     |         ✓         |  ✓   | `src/components/CardsGrid/index.tsx`           |
| Card categoria risorse            |  ✓   |    ✓    |    ✓    |    ✓     |         ✓         |  ✓   | `src/components/CardsGrid/index.tsx`           |
| Card generiche                    |  ✓   |    ✓    |    ✓    |    ✓     |         ✓         |  ✓   | `src/components/CardsGrid/index.tsx`           |
| Card linee guida                  |  ✓   |    ✓    |    -    |    -     |         -         |  -   | `src/components/CardsGrid/index.tsx`           |
| Card misure con filtri            |  ✓   |    -    |    -    |    -     |         -         |  -   | `src/components/CardsListFilter/index.tsx`     |
| Card notizie                      |  ✓   |    ✓    |    ✓    |    ✓     |         ✓         |  ✓   | `src/components/CardsGrid/index.tsx`           |
| Card risorse                      |  ✓   |    ✓    |    ✓    |    ✓     |         ✓         |  ✓   | `src/components/CardsGrid/index.tsx`           |
| Form Assistenza                   |  ✓   |    -    |    -    |    ✓     |         -         |  -   | `src/components/FormAssistenza/index.tsx`      |
| Form newsletter                   |  ✓   |    -    |    -    |    -     |         -         |  -   | `src/components/FormNewsletter/index.tsx`      |
| Form TO                           |  ✓   |    -    |    -    |    ✓     |         -         |  -   | `src/components/FormTo/index.tsx`              |
| Grafico                           |  ✓   |    ✓    |    ✓    |    ✓     |         ✓         |  ✓   | `src/components/BloccoGrafico/index.tsx`       |
| Hero                              |  ✓   |    ✓    |    ✓    |    ✓     |         ✓         |  ✓   | `src/components/Hero/index.tsx`                |
| Image text column                 |  ✓   |    -    |    -    |    -     |         -         |  -   | `src/components/ImageTextColumn/index.tsx`     |
| Immagine                          |  ✓   |    ✓    |    ✓    |    ✓     |         ✓         |  ✓   | `src/components/Immagine/index.tsx`            |
| Immagini                          |  ✓   |    ✓    |    ✓    |    ✓     |         ✓         |  ✓   | `src/components/CardsGridImages/index.tsx`     |
| Instant Search FAQ                |  ✓   |    -    |    -    |    -     |         -         |  -   | `src/components/InstantSearchFaq/index.tsx`    |
| Lista                             |  ✓   |    ✓    |    ✓    |    ✓     |         ✓         |  ✓   | `src/components/TableList/index.tsx`           |
| Lista aggiornamenti               |  ✓   |    ✓    |    ✓    |    ✓     |         ✓         |  ✓   | `src/components/TableListUpdates/index.tsx`    |
| Lista domande frequenti (manuale) |  ✓   |    -    |    -    |    -     |         ✓         |  -   | `src/components/TableListFaq/index.tsx`        |
| Pagina con indice                 |  ✓   |    ✓    |    ✓    |    ✓     |         ✓         |  ✓   | `src/components/LayoutSidebar/index.tsx`       |
| Pagina con indice e filtri        |  ✓   |    ✓    |    ✓    |    ✓     |         ✓         |  ✓   | `src/components/LayoutSidebarFilter/index.tsx` |
| Select grafico                    |  ✓   |    -    |    -    |    -     |         -         |  ✓   | `src/components/SelectGrafico/index.tsx`       |
| Tabs                              |  ✓   |    -    |    -    |    -     |         -         |  ✓   | `src/components/TabsWrap/index.tsx`            |
| Testo                             |  ✓   |    ✓    |    ✓    |    ✓     |         ✓         |  ✓   | `src/components/RichTextSection/index.tsx`     |
| Text bi-column                    |  ✓   |    -    |    -    |    -     |         -         |  -   | `src/components/TextBicolumn/index.tsx`        |
| Text column                       |  ✓   |    -    |    -    |    -     |         -         |  -   | `src/components/TextColumn/index.tsx`          |
| Timeline                          |  ✓   |    -    |    -    |    -     |         -         |  -   | `src/components/Timeline/index.tsx`            |
| Video                             |  ✓   |    ✓    |    ✓    |    ✓     |         ✓         |  ✓   | `src/components/VideoPlayer/index.tsx`         |
