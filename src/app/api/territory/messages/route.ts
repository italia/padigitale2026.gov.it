import { NextRequest, NextResponse } from "next/server";

// const API_BASE_URL = "https://api.padigitale2026.gov.it/api";
const API_BASE_URL = "https://pagiditale2026-api-staging.vercel.app/api";

interface TerritoryMessageRequest {
  contact: string;
  name: string;
  address: string;
  phone: string;
  area: string;
  description: string;
  captcha: string;
}

interface TerritoryMessageResponse {
  message: string;
  [key: string]: unknown;
}

export async function POST(request: NextRequest): Promise<NextResponse<TerritoryMessageResponse>> {
  try {
    const body: TerritoryMessageRequest = await request.json();
    
    // Validazione dei campi obbligatori
    const requiredFields = ['contact', 'name', 'address', 'phone', 'area', 'description', 'captcha'];
    const missingFields = requiredFields.filter(field => !body[field as keyof TerritoryMessageRequest]);
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { message: `Campi obbligatori mancanti: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    // Validazione email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.address)) {
      return NextResponse.json(
        { message: "Formato email non valido" },
        { status: 400 }
      );
    }

    // Validazione telefono (formato base)
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]+$/;
    if (!phoneRegex.test(body.phone)) {
      return NextResponse.json(
        { message: "Formato numero di telefono non valido" },
        { status: 400 }
      );
    }

    // Preparazione del payload per l'API esterna
    const apiPayload = {
      contact: body.contact,
      name: body.name,
      address: body.address,
      phone: body.phone,
      area: body.area,
      description: body.description,
      captcha: body.captcha,
    };

    // Chiamata all'API esterna
    const response = await fetch(`${API_BASE_URL}/territory/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiPayload),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { message: data.message || "Errore durante l'invio del messaggio" },
        { status: response.status }
      );
    }

    return NextResponse.json({
      message: "Messaggio inviato con successo. Ti contatteremo presto!",
    });

  } catch (error) {
    console.error("Errore durante l'invio del messaggio:", error);
    return NextResponse.json(
      { message: "Errore interno del server" },
      { status: 500 }
    );
  }
} 