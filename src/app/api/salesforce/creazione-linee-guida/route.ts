import { WebhookPayload, ContentType } from "../../algolia/types";
import { creazioneLineeGuida, upsertFaqAggiornamenti } from "../api";
import { FaqQuery, GuidelineQuery, UpdateQuery } from "@/graphql/generated";
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
    let entity;
    let entity_content;
    let record = {};
    const data: WebhookPayload = await request.json();

    entity = (await guideline(data.entity.attributes.id!)) as GuidelineQuery;
    entity_content = entity.guideline;

    if (entity_content) {
      const fileData = await getFileBase64(entity_content.allegato?.url || '');

      record = {
        Title: data.entity.attributes.title,
        PathOnClient: entity_content.allegato?.filename || '',
        ContentLocation: 'S',
        Avviso__c: data.entity.attributes.id_avviso_salesforce,
        External_ID__c: data.entity.attributes.id,
        Ente_Destinazione__c: entity_content.beneficiari?.map(b => b.labelSalesforce || b.label).join(',') || '',
        Description: data.entity.attributes.descrizione,
        VersionData: fileData?.base64 || '',
      }
    }

    // Aggiorna il record su Salesforce
    const result = await creazioneLineeGuida(record);

    console.log(record)
    console.log(result)
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