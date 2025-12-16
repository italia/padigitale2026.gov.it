import { jwtDecode } from "jwt-decode";
import Mailgun from "mailgun.js"
import { NextResponse } from "next/server";

// Tipi e costanti

const API_BASE_URL = "https://api.padigitale2026.gov.it/api";

type ACTION = "confirm" | "unsubscribe";
type METHOD = "PUT" | "PATCH";

export const HTTP_STATUS = {
    OK_RANGE_START: 200,
    OK_RANGE_END: 299,
    BAD_REQUEST: 400,
    INTERNAL_SERVER_ERROR: 500,
};

interface JwtPayload {
    readonly address: string;
    readonly uuid: string;
}

export interface ApiResponse {
    message: string;
    [key: string]: unknown;
}

// Classe per la gestione degli errori. Estende una normale eccezione.

export class ApiError extends Error {
    constructor(
        message: string,
        public readonly statusCode: number = HTTP_STATUS.INTERNAL_SERVER_ERROR
    ) {
        super(message);
        this.name = 'ApiError';
    }
}

export function createErrorResponse(error: Error, status: number = HTTP_STATUS.INTERNAL_SERVER_ERROR) {
    return NextResponse.json(
        { message: error.message },
        { status }
    );
};

export function validateJwt(token: string | null): { payload: JwtPayload; token: string } {
    if (!token) {
        throw new ApiError('Missing JWT token', HTTP_STATUS.BAD_REQUEST);
    }

    try {
        const payload = jwtDecode<JwtPayload>(token);
        return { payload, token };
    } catch (error) {
        console.error('Invalid JWT token format', error);
        throw new ApiError('Invalid JWT token format');
    }
};

export async function makeApiRequest(method: METHOD, address: string, action: ACTION, uuid: string, jwt?: string): Promise<Response> {
    const requestOptions: RequestInit = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        }
    };

    if (jwt) {
        requestOptions.body = JSON.stringify({ jwt })
    }

    console.log(`${API_BASE_URL}/users/${address}/${uuid}/${action}`);

    return fetch(
        `${API_BASE_URL}/users/${address}/${uuid}/${action}`,
        requestOptions
    );
};

const mailgun = new Mailgun(FormData);
export const mailgunClient = mailgun.client({ username: 'api', key: process.env.MAILGUN_API_KEY ?? "", url: 'https://api.eu.mailgun.net' })

export const newsletter = 'newsletter@padigitale2026.gov.it'

export const fromAddress = "PA digitale 2026 <no-reply@padigitale2026.gov.it>"
