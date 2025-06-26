import { WebhookPayload } from "../../algolia/types";
import { cancellazioneLineeGuidaFaqAggiornamenti } from "../api";
import { records } from "../types";

export async function POST(request: Request) {
  const secret = request.headers.get("X-Webhook-Secret");

  if (secret != process.env.WEBHOOK_SECRET) {
    return Response.json(
      {
        message: "Unauthorized",
      },
      {
        status: 401,
      }
    );
  }

  try {

    const data: WebhookPayload = await request.json();
    
    const records: records[] = [
      {
        attributes: { "type": "Informazione_CMS_Avviso__c" },
        External_ID__c: data.entity.id,
        Deleted__c: "true"
      }
    ];

    // Elimina i record da Salesforce
    const result = await cancellazioneLineeGuidaFaqAggiornamenti(records);

    return Response.json({ 
      success: true, 
      message: 'Dati sincronizzati con successo su Salesforce',
      result 
    }, { status: 200 });

  } catch (error) {
    return Response.json(
      {
        message: `${error}`,
      },
      {
        status: 400,
      }
    );
  }
}