import { getSalesforceToken } from './auth';
import { records } from './types';

const version = 'v57.0';

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
      method: 'patch',
      headers: {
        'Authorization': `${authData.tokenType} ${authData.accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    // Verifica se la richiesta è andata a buon fine
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Errore nella richiesta a Salesforce: ${response.status} ${response.statusText}. Dettagli: ${errorText}`);
    }    

    // Estrai i dati dalla risposta
    const data = await response.json();

    return data;
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
      method: 'patch',
      headers: {
        'Authorization': `${authData.tokenType} ${authData.accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    // Verifica se la richiesta è andata a buon fine
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Errore nella richiesta a Salesforce: ${response.status} ${response.statusText}. Dettagli: ${errorText}`);
    }    

    // Estrai i dati dalla risposta
    const data = await response.json();

    return data;
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
      method: 'post',
      headers: {
        'Authorization': `${authData.tokenType} ${authData.accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(record)
    });

    // Verifica se la richiesta è andata a buon fine
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Errore nella richiesta a Salesforce: ${response.status} ${response.statusText}. Dettagli: ${errorText}`);
    }

    // Estrai i dati dalla risposta
    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Errore durante la creazione dei record in Salesforce:', error);
    throw new Error(`Errore la creazioe dei record in Salesforce: ${error}`);
  }
}