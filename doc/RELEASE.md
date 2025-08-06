# Procedura di rilascio

[↩ README](../README.md)

La procedura di rilascio in produzione è molto semplice e già parzialmente descritta nelle [↪ convenzioni di coding](CODING.md).

## Rilasciare nel sito di sviluppo

URL: [🌐 https://padigitale2026-gov-it-develop.vercel.app](https://padigitale2026-gov-it-develop.vercel.app)

1. Concludere le proprie lavorazioni in un feature branch.
2. Testare sul dominio del feature branch che Vercel ha creato automaticamente (consultarsi con team PA Digitale per sapere la URL).
3. Aprire una pull request verso il ramo `develop` e seguire l'approvazione.
4. Una volta che la PR verrà mergiata, le modifiche saranno visibili nel sito di sviluppo.

## Rilasciare nel sito di produzione

URL: [🌐 https://padigitale2026.gov.it](https://padigitale2026.gov.it)

1. Aprire una PR da `develop` verso il ramo `main`.
2. Seguire il processo di approvazione.
3. Una volta eseguito il merge, le modifiche saranno visibili nell'ambiente di produzione.
