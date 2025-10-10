# Convenzioni coding e branching

[↩ README](../README.md)

Questo progetto adotta poche e semplici regole per la collaborazione.

## Branch principali

I branch principali di progetto sono i seguenti:

`main`

Contiene il codice promosso nell'ambiente di produzione. Questo è il codice che è rilasciato in [🌐 https://padigitale2026.gov.it](https://padigitale2026.gov.it). Ogni merge request su questo ramo aggiorna il sito di produzione.

## Rami feature

Per convenzione, le nuove lavorazioni vengono fatte esclusivamente in feature branch, che possono essere nominati senza seguire particolari convenzioni.

I feature branch devono essere aperti sempre partendo dal ramo `develop`.

Vercel esegue automaticamente il build di tutti i rami. Confrontarsi e chiedere supporto al team PA Digitale per sapere che nome Vercel ha assegnato automaticamente al dominio corrispondente al feature branch sul quale state lavorando.

Una voltra che la lavorazione è conclusa nel feature branch, si procede a creare una merge request verso `develop`, dove il codice verrà revisionato e dove poi verrà effettuato un merge per il test nell'ambiente di sviluppo.

Una volta che la lavorazione è stata testata anche in sviluppo, allora si può procedere a creare una ulteriore merge request da `develop` verso `main`, seguendo un iter simile a quanto già visto per sviluppo.

Concluso il merge in `main`, le modifiche saranno visibili sul sito di produzione.

## Note finali

- &Egrave; **proibito** il commit e push diretto sul ramo `main`.
- &Egrave; fortemente **sconsigliato** il commit e push diretto verso `develop`, a meno che la situazione non lo richieda.
