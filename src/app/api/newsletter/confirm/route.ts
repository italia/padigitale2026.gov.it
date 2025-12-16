import { NextRequest, NextResponse } from "next/server";
import { mailgunClient, ApiResponse, ApiError, validateJwt, createErrorResponse, newsletter, fromAddress } from "../lib";
import { salesforceClient } from "../../salesforce/auth";

// GET /api/newsletter/confirm?jwt=<...>

// Esempio sito vecchio:
// https://padigitale2026.gov.it/conferma?jwt=<...>

export async function GET(request: NextRequest): Promise<NextResponse<ApiResponse>> {
    try {
        const jwtToken = request.nextUrl.searchParams.get("jwt");
        const { payload: { address, uuid } } = validateJwt(jwtToken);

        await salesforceClient.login(process.env.SF_WEBHOOK_USERNAME ?? '', process.env.SF_WEBHOOK_PASSWORD ?? '')

        await salesforceClient.sobject('Contact').find({UUID__c: uuid}).update({isActive__c: true})

        await mailgunClient.lists.members.updateMember(newsletter, `${address}.${uuid}`, {
          address: `${address}.${uuid}`,
          subscribed: true
        })

        const res = await mailgunClient.messages.create("padigitale2026.gov.it", {
          from: fromAddress,
          to: address,
          subject: "PA digitale 2026 - Ti diamo il benvenuto",
          template:  "welcome-email",
          "h:X-Mailgun-Variables": JSON.stringify({address, uuid}),
        })

        if (res.status !== 200) {
            throw new ApiError(
                `API request failed: ${res.message || 'Unknown error'}`,
                res.status
            );
        }

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
