import { Connection } from "jsforce";

export async function getSalesforceToken() {
  try {

    // Prepara i dati per la richiesta di autenticazione
    const params = new URLSearchParams();
    params.append('grant_type', 'password');
    params.append('client_id', process.env.SF_WEBHOOK_CLIENT_ID || '');
    params.append('client_secret', process.env.SF_WEBHOOK_CLIENT_SECRET || '');
    params.append('username', process.env.SF_WEBHOOK_USERNAME || '');
    params.append('password', process.env.SF_WEBHOOK_PASSWORD || '');  

    const response = await fetch(`${process.env.SF_WEBHOOK_URL}/services/oauth2/token`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: params.toString()
    });

      // Verifica se la richiesta è andata a buon fine
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Errore di autenticazione Salesforce: ${response.status} ${response.statusText}. Dettagli: ${errorText}`);
    }

    // Estrai i dati dalla risposta
    const data = await response.json();

    return {
      accessToken: data.access_token,
      instanceUrl: data.instance_url,
      id: data.id,
      tokenType: data.token_type,
      issuedAt: data.issued_at
    };
  } catch (error) {
    console.error('Errore durante l\'autenticazione con Salesforce:', error);
    const errorMessage = error instanceof Error ? error.message : 'Errore sconosciuto';
    throw new Error(`Errore di autenticazione Salesforce: ${errorMessage}`);
  }
}

export const salesforceClient = new Connection({
  loginUrl: process.env.SF_WEBHOOK_URL,
  oauth2 : {
    clientId : process.env.SF_WEBHOOK_CLIENT_ID ?? '',
    clientSecret : process.env.SF_WEBHOOK_CLIENT_SECRET ?? ''
  }
});
