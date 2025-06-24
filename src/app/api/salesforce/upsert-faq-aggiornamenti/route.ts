import { WebhookPayload, ContentType } from "../../algolia/types";
import { upsertFaqAggiornamenti } from "../api";
import { FaqQuery, UpdateQuery } from "@/graphql/generated";
import { faq, update } from "@/lib/datocms";

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
    let records = [];
    const data: WebhookPayload = await request.json();
    const content_type: ContentType = data.related_entities.pop()?.attributes.api_key as ContentType;

    switch (content_type) {
      case "update":
        entity = (await update(data.entity.attributes.id!)) as UpdateQuery;
        entity_content = entity.update;

        if (entity_content) {
          records.push({
            attributes: { "type": "Informazione_CMS_Avviso__c" },
            External_ID__c: entity_content.id,
            Type__c: "Ultimi aggiornamenti",
            Description__c: data.entity.attributes.title,
            Date_Latest_Update__c: data.entity.attributes.custom_update_date ? new Date(data.entity.attributes.custom_update_date).toISOString().split('T')[0] : '',
            Ente_Destinazione__c: entity_content.beneficiari?.map(b => b.labelSalesforce || b.label).join(';') || '',
            Avviso__c: data.entity.attributes.id_avviso_salesforce,
          });
        }
        break;      
      case "faq":
        entity = (await faq(data.entity.attributes.slug)) as FaqQuery;
        entity_content = entity.faq;

        if (entity_content) {
          records.push({
            attributes: { "type": "Informazione_CMS_Avviso__c" },
            External_ID__c: entity_content.id,
            Type__c: "Domande frequenti",
            Category__c: entity_content.category?.label,
            URL__c: `${entity_content.slug}`,
            URL_Label__c: entity_content.title,
            Ente_Destinazione__c: entity_content.beneficiari?.map(b => b.labelSalesforce || b.label).join(';') || '',
            Misura__c: entity_content.misura?.idSalesforce,
            Pacchetto__c: entity_content.misura?.pacchetto,
            Avviso__c: data.entity.attributes.id_avviso_salesforce,
          });
        }
        break;
      default:
        throw Error("Tentativo di utilizzare webhook con un tipo di contenuto non riconosciuto");
    }

    // Aggiorna i record su Salesforce
    const result = await upsertFaqAggiornamenti(records);
    
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