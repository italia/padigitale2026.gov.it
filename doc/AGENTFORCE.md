# Configurazione del chatbot Agentforce

[↩ README](../README.md)

Il componente `src/components/AgentforceMessaging.tsx` usa le seguenti variabili
d'ambiente pubbliche:

| Variabile | Valore passato a Salesforce |
| --- | --- |
| `NEXT_PUBLIC_AGENTFORCE_ORGANIZATION_ID` | Primo argomento di `embeddedservice_bootstrap.init` |
| `NEXT_PUBLIC_AGENTFORCE_DEPLOYMENT_NAME` | Secondo argomento di `embeddedservice_bootstrap.init` |
| `NEXT_PUBLIC_AGENTFORCE_SITE_URL` | Terzo argomento di `init` e URL base dello script bootstrap |
| `NEXT_PUBLIC_AGENTFORCE_SCRT2_URL` | Opzione `scrt2URL` di `init` |
| `NEXT_PUBLIC_AGENTFORCE_LANGUAGE` | `embeddedservice_bootstrap.settings.language`; predefinito `it` |

Lo script viene caricato da `<NEXT_PUBLIC_AGENTFORCE_SITE_URL>/assets/js/bootstrap.min.js`.
L'URL del sito può essere fornito con o senza slash finale.
Se una delle prime quattro variabili è assente o vuota, il chatbot non viene caricato.

## Collaudo

Il file [`.env.dist`](../.env.dist) contiene i valori di collaudo già usati dal
progetto. Per lo sviluppo locale copiarli nel proprio `.env`; per i deployment di
collaudo configurarli nelle variabili dell'ambiente corrispondente su Vercel.

## Produzione

Impostare queste variabili nell'ambiente **Production** di Vercel:

```dotenv
NEXT_PUBLIC_AGENTFORCE_ORGANIZATION_ID=00D7Q000001NvsR
NEXT_PUBLIC_AGENTFORCE_DEPLOYMENT_NAME=UC3_NEW
NEXT_PUBLIC_AGENTFORCE_SITE_URL=https://padigitale2026.my.site.com/ESWUC3NEW1792411877672
NEXT_PUBLIC_AGENTFORCE_SCRT2_URL=https://padigitale2026.my.salesforce-scrt.com
NEXT_PUBLIC_AGENTFORCE_LANGUAGE=it
```

Le variabili `NEXT_PUBLIC_*` vengono incluse nel codice del browser durante la
build: configurarle prima della build ed eseguire una nuova build e un nuovo
deployment dopo ogni modifica. Il solo riavvio del server non aggiorna i valori.
Questi parametri sono pubblici e non devono contenere credenziali.
