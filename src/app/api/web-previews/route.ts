function withCORS(responseInit?: ResponseInit): ResponseInit {
    return {
        ...responseInit,
        headers: {
            ...responseInit?.headers,
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization, ngrok-skip-browser-warning',
        },
    };
}

export async function OPTIONS() {
    return new Response('OK', withCORS());
}

export async function POST(request: Request) {
    const data = await request.json();
    const slug = data['item']['attributes']['slug'];

    return Response.json({
        "previewLinks": [
            {
                "label": "Published",
                "url": `https://padigitale2026-gov-it-develop.vercel.app/${slug}`
            },
            {
                "label": "Draft",
                "url": `https://padigitale2026-gov-it-develop.vercel.app/${slug}`
            }
        ]
    }, withCORS());
};
