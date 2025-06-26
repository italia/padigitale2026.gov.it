import { NextRequest, NextResponse } from "next/server";
import { makeApiRequest, ApiResponse, ApiError, isSuccessStatus, createErrorResponse } from "../lib";

// GET /api/newsletter/unsubscribe?jwt=...

// Esempio sito vecchio:
// https://padigitale2026.gov.it/annulla-iscrizione
// ?address=matteo.rosati@akqa.com
// &uuid=<...>

export async function GET(request: NextRequest): Promise<NextResponse<ApiResponse>> {
    try {
        const address = request.nextUrl.searchParams.get("address");
        const uuid = request.nextUrl.searchParams.get("uuid");

        if (!address || !uuid) {
            throw new ApiError("address or uuid not specified", 400);
        }

        const response = await makeApiRequest("PATCH", address, "unsubscribe", uuid);
        const data = await response.json() as ApiResponse;

        if (!isSuccessStatus(response.status)) {
            throw new ApiError(
                `API request failed: ${data.message || 'Unknown error'}`,
                response.status
            );
        }

        return NextResponse.json(data);
    } catch (error) {
        if (error instanceof ApiError) {
            return createErrorResponse(error, error.statusCode);
        }

        console.error('Unexpected error:', error);

        return createErrorResponse(
            new ApiError('An unexpected error occurred')
        );
    }
}
