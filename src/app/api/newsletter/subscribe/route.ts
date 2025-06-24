import { NextRequest, NextResponse } from "next/server";

const API_BASE_URL = "https://api.padigitale2026.gov.it/api";

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

    // Preparazione del payload per l'API esterna
    const apiPayload = {
      address: body.email,
      representative: body.rappresento,
      ente: body.nomeStruttura,
    };

    // Chiamata all'API esterna
    const response = await fetch(`${API_BASE_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiPayload),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { message: data.message || "Errore durante l'iscrizione" },
        { status: response.status }
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