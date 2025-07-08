import { WebhookPayload } from "../../algolia/types";
import { creazioneLineeGuida } from "../api";
import { GuidelineQuery } from "@/graphql/generated";
import { guideline } from "@/lib/datocms";

async function getFileBase64(url: string) {
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Errore nel download del file: ${response.status}`);
    }
    
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const base64String = buffer.toString('base64');
    const contentType = response.headers.get('content-type') || 'application/octet-stream';
    
    return {
      base64: base64String,
      dataUrl: `data:${contentType};base64,${base64String}`,
      contentType
    };
  } catch (error) {
    console.error('Errore nella conversione del file:', error);
    return null;
  }
}

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
    let record = {};
    const data: WebhookPayload = await request.json();

    const entity = (await guideline(data.entity.attributes.id!)) as GuidelineQuery;
    const entity_content = entity.guideline;

    if (entity_content) {
      const fileData = await getFileBase64(entity_content.allegato?.url || '');

      record = {
        Title: data.entity.attributes.title,
        PathOnClient: entity_content.allegato?.filename || '',
        ContentLocation: 'S',
        Avviso__c: data.entity.attributes.id_avviso_salesforce,
        External_ID__c: data.entity.id,
        Ente_Destinazione__c: entity_content.beneficiari?.map(b => b.labelSalesforce || b.label).join(',') || '',
        Description: data.entity.attributes.descrizione,
        VersionData: fileData?.base64 || '',
      }
    }

    // Aggiorna il record su Salesforce
    const result = await creazioneLineeGuida(record);

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