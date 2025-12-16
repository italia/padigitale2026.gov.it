import { SignJWT } from 'jose';
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from 'uuid';

import { fromAddress, mailgunClient, newsletter } from '../lib'
import { salesforceClient } from '../../salesforce/auth';
//import { getSalesforceToken } from '../../salesforce/auth';

interface SubscribeRequest {
  email: string;
  rappresento: string;
  tipoEnte?: string;
  nomeStruttura: string;
  inQuanto?: string;
}

interface SubscribeResponse {
  message: string;
  [key: string]: unknown;
}

export async function POST(request: NextRequest): Promise<NextResponse<SubscribeResponse>> {
  try {
    const body: SubscribeRequest = await request.json();

    // Validazione dei campi obbligatori
    if (!body.email || !body.rappresento || !body.nomeStruttura) {
      return NextResponse.json(
        { message: "Campi obbligatori mancanti" },
        { status: 400 }
      );
    }

    // Validazione email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { message: "Formato email non valido" },
        { status: 400 }
      );
    }

    const uuid = uuidv4()
    console.log(uuid)

    await mailgunClient.lists.members.createMember(newsletter, {
        address: `${body.email}.${uuid}`,
        vars: JSON.stringify({
          representative: body.rappresento,
          ente: body.nomeStruttura,
          enteType: body.tipoEnte,
          enteSelect: body.inQuanto,
          timestamp: new Date()
        }),
        subscribed: 'no',
        upsert: 'no',
      })

    const secret = new TextEncoder().encode(
     process.env.JWT_KEY ?? ""
    )

    const iat = Math.floor(new Date().getTime() / 1000)


    const jwt = await new SignJWT({
      exp: iat + 7 * 24 * 60 * 60,
      iat,
      address: body.email,
      uuid
    }).setProtectedHeader({ alg: 'HS256'}).sign(secret)

    await salesforceClient.login(process.env.SF_WEBHOOK_USERNAME ?? '', process.env.SF_WEBHOOK_PASSWORD ?? '')

    await salesforceClient.sobject('Contact').create({
        Email: body.email,
        Area_Pubblica__c: true,
        isActive__c: false,
        JWT__c: jwt,
        UUID__c: uuid,
        vars_representative_MC__c: body.rappresento,
        vars_enteSelect_MC__c: body.inQuanto,
        vars_enteType_MC__c: body.tipoEnte,
        vars_ente_MC__c: body.nomeStruttura
    });
    
    const res = await mailgunClient.messages.create("padigitale2026.gov.it", {
      from: fromAddress,
      to: body.email,
      subject: "PA digitale 2026 - conferma la registrazione",
      template: "confirmation-email",
      "h:X-Mailgun-Variables": JSON.stringify({jwt}),
    })

    if (res.status !== 200) {
      return NextResponse.json(
        { message: res.message || "Errore durante l'iscrizione" },
        { status: res.status }
      );
    }

    return NextResponse.json({
      message: "Iscrizione effettuata con successo. Controlla la tua email per confermare l'iscrizione.",
    });

  } catch (error) {
    console.error("Errore durante l'iscrizione:", error);
    return NextResponse.json(
      { message: "Errore interno del server" },
      { status: 500 }
    );
  }
}
