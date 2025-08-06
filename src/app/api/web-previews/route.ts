function withCORS(responseInit?: ResponseInit): ResponseInit {
  return {
    ...responseInit,
    headers: {
      ...responseInit?.headers,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  };
}

export async function OPTIONS() {
  return new Response("OK", withCORS());
}

const ERROR_RESPONSE = Response.json(
  {
    message: "invalid JSON payload",
  },
  {
    status: 401,
  }
);

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const slug = data["item"]["attributes"]["slug"];

    if (!slug) {
      return ERROR_RESPONSE;
    }

    return Response.json(
      {
        previewLinks: [
          {
            label: "Preview",
            url: `https://padigitale2026-gov-it-develop.vercel.app/${slug}`,
          },
        ],
      },
      withCORS()
    );
  } catch {
    return ERROR_RESPONSE;
  }
}
