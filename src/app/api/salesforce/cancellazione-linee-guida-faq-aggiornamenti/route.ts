import { WebhookPayload, ContentType } from "../../algolia/types";
import { cancellazioneLineeGuidaFaqAggiornamenti } from "../api";

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
    let records = [];
    const data: WebhookPayload = await request.json();

    console.log(data);

    records.push({
      attributes: { "type": "Informazione_CMS_Avviso__c" },
      External_ID__c: data.entity.attributes.id,
      Deleted__c: "true"
    })

    // Elimina i record da Salesforce
    const result = await cancellazioneLineeGuidaFaqAggiornamenti(records);

    console.log(records)
    console.log(result[0].errors);

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