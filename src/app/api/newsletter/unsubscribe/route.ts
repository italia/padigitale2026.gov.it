import { NextRequest, NextResponse } from "next/server";
import { mailgunClient, newsletter, ApiResponse, ApiError, createErrorResponse } from "../lib";
import { salesforceClient } from "../../salesforce/auth";

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

        await salesforceClient.login(process.env.SF_WEBHOOK_USERNAME ?? '', process.env.SF_WEBHOOK_PASSWORD ?? '')

        await salesforceClient.sobject('Contact').find({UUID__c: uuid}).update({isActive__c: false})

        await mailgunClient.lists.members.destroyMember(newsletter, `${address}.${uuid}`)

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
