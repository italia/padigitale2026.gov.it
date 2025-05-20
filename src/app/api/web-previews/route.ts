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
    try {
        const data = await request.json();
        const slug = data['item']['attributes']['slug'];

        if (!slug) {
            return Response.json({
                "message": "invalid JSON payload"
            }, {
                status: 401
            })
        }

        return Response.json({
            "previewLinks": [
                {
                    "label": "Preview 1",
                    "url": `${process.env.NEXT_PUBLIC_DOMAIN}/api/draft?slug=${slug}&secret=${process.env.DRAFT_SECRET}`
                },
                {
                    "label": "Preview 2",
                    "url": `${process.env.NEXT_PUBLIC_DOMAIN}/api/draft?slug=${slug}&secret=${process.env.DRAFT_SECRET}`
                }
            ]
        }, withCORS());
    }
    catch {
        return Response.json({
            "message": "invalid JSON payload"
        }, {
            status: 401
        })
    }
};
