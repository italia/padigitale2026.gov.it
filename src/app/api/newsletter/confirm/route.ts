import { NextRequest, NextResponse } from "next/server";
import { ApiResponse, ApiError, validateJwt, createErrorResponse } from "../lib";
import { salesforceClient } from "../../salesforce/auth";

// GET /api/newsletter/confirm?jwt=<...>

// Esempio sito vecchio:
// https://padigitale2026.gov.it/conferma?jwt=<...>

export async function GET(request: NextRequest): Promise<NextResponse<ApiResponse>> {
    try {
        const jwtToken = request.nextUrl.searchParams.get("jwt");
        const { payload: { uuid } } = validateJwt(jwtToken);

        await salesforceClient.login(process.env.SF_WEBHOOK_USERNAME ?? '', process.env.SF_WEBHOOK_PASSWORD ?? '')

        await salesforceClient.sobject('Contact').find({UUID__c: uuid}).update({isActive__c: true})

        return NextResponse.json({message: "ok"});
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
