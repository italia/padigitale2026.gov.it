import { NextRequest, NextResponse } from "next/server";
import { makeApiRequest, ApiResponse, ApiError, isSuccessStatus, validateJwt, createErrorResponse } from "../lib";

// GET /api/newsletter/unsubscribe?jwt=...

export async function GET(request: NextRequest): Promise<NextResponse<ApiResponse>> {
    try {
        const jwtToken = request.nextUrl.searchParams.get("jwt");
        const { payload: { address, uuid }, token } = validateJwt(jwtToken);

        const response = await makeApiRequest("PATCH", address, "unsubscribe", uuid, token);
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
