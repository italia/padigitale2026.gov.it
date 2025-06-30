import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    
    // Converti l'oggetto in URL-encoded string
    const formBody = new URLSearchParams();
    for (const key in formData) {
      formBody.append(key, formData[key as keyof typeof formData]);
    }
    
    const response = await fetch('https://webto.salesforce.com/servlet/servlet.WebToCase?encoding=UTF-8', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formBody.toString(),
    });

    // Leggi la risposta come testo (Salesforce restituisce HTML)
    const responseText = await response.text();

    console.log(responseText);
    
    return NextResponse.json({
      success: response.ok,
      status: response.status,
      data: responseText
    });
    
  } catch (error) {
    console.error('Errore durante l\'invio dei dati a Salesforce:', error);
    return NextResponse.json(
      { success: false, error: 'Errore interno del server' },
      { status: 500 }
    );
  }
} 