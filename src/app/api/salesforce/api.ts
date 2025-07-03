import { sendPostToBetterStack } from '@/lib/datocms';
import { getSalesforceToken } from './auth';
import { records } from './types';

const version = 'v57.0';

// Funzione helper per il logging con BetterStack
async function logToBetterStack(
  functionName: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any,
  response: Response,
  responseText: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  responseData: any
) {
  await sendPostToBetterStack({
    message: `${functionName} called`,
    level: "info",
    metadata: {
      function: functionName,
      payload: JSON.stringify(payload),
      response: {
        status: response.status,
        statusText: response.statusText,
        text: responseText,
        data: responseData
      }
    }
  });
}

export async function upsertFaqAggiornamenti(records: records[]) {
  try {
    // Ottieni il token di autenticazione
    const authData = await getSalesforceToken();

    // Prepara il payload per la richiesta PATCH
    const payload = {
      allOrNone: false,
      records: records
    };

    // Esegui la richiesta PATCH a Salesforce
    const response = await fetch(`${authData.instanceUrl}/services/data/${version}/composite/sobjects/Informazione_CMS_Avviso__c/External_ID__c`, {
      method: 'PATCH',
      headers: {
        'Authorization': `${authData.tokenType} ${authData.accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    // Leggi la risposta una sola volta
    const responseText = await response.text();
    let responseData;
    try {
      responseData = JSON.parse(responseText);
    } catch (e) {
      console.log(e);
      responseData = null;
    }

    await logToBetterStack('upsertFaqAggiornamenti', payload, response, responseText, responseData);

    // Verifica se la richiesta è andata a buon fine
    if (!response.ok || (responseData[0].errors && responseData[0].errors.length > 0)) {
      throw new Error(`Errore nella richiesta a Salesforce: ${response.status} ${response.statusText}. Dettagli: ${responseText}`);
    }    

    return responseData;
  } catch (error) {
    console.error('Errore durante l\'aggiornamento dei record in Salesforce:', error);
    throw new Error(`Errore nell\' aggiornamento dei record in Salesforce: ${error}`);
  }
}

export async function cancellazioneLineeGuidaFaqAggiornamenti(records: records[]) {
  try {
    // Ottieni il token di autenticazione
    const authData = await getSalesforceToken();

    // Prepara il payload per la richiesta PATCH
    const payload = {
      allOrNone: false,
      records: records
    };

    // Esegui la richiesta PATCH a Salesforce
    const response = await fetch(`${authData.instanceUrl}/services/data/${version}/composite/sobjects/Informazione_CMS_Avviso__c/External_ID__c`, {
      method: 'PATCH',
      headers: {
        'Authorization': `${authData.tokenType} ${authData.accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    // Leggi la risposta una sola volta
    const responseText = await response.text();
    let responseData;
    try {
      responseData = JSON.parse(responseText);
    } catch (e) {
      console.log(e);
      responseData = null;
    }

    await logToBetterStack('cancellazioneLineeGuidaFaqAggiornamenti', payload, response, responseText, responseData);

    // Verifica se la richiesta è andata a buon fine
    if (!response.ok || (responseData[0].errors && responseData[0].errors.length > 0)) {
      throw new Error(`Errore nella richiesta a Salesforce: ${response.status} ${response.statusText}. Dettagli: ${responseText}`);
    }    

    return responseData;
  } catch (error) {
    console.error('Errore durante la cancellazione dei record in Salesforce:', error);
    throw new Error(`Errore nella cancellazione dei record in Salesforce: ${error}`);
  }
}

export async function creazioneLineeGuida(record: object) {
  try {
    // Ottieni il token di autenticazione
    const authData = await getSalesforceToken();

    // Esegui la richiesta POST a Salesforce
    const response = await fetch(`${authData.instanceUrl}/services/data/${version}/sobjects/ContentVersion`, {
      method: 'POST',
      headers: {
        'Authorization': `${authData.tokenType} ${authData.accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(record)
    });

    // Leggi la risposta una sola volta
    const responseText = await response.text();
    let responseData;
    try {
      responseData = JSON.parse(responseText);
    } catch (e) {
      console.log(e);
      responseData = null;
    }

    await logToBetterStack('creazioneLineeGuida', record, response, responseText, responseData);

    // Verifica se la richiesta è andata a buon fine
    if (!response.ok || (responseData[0].errors && responseData[0].errors.length > 0)) {
      throw new Error(`Errore nella richiesta a Salesforce: ${response.status} ${response.statusText}. Dettagli: ${responseText}`);
    }

    return responseData;
  } catch (error) {
    console.error('Errore durante la creazione dei record in Salesforce:', error);
    throw new Error(`Errore la creazioe dei record in Salesforce: ${error}`);
  }
}