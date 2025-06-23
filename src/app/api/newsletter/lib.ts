import { jwtDecode } from "jwt-decode";
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


// Metodi helper

export function isSuccessStatus(status: number): boolean {
    return status >= HTTP_STATUS.OK_RANGE_START && status <= HTTP_STATUS.OK_RANGE_END;
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
        throw new ApiError('Invalid JWT token format');
    }
};

export async function makeApiRequest(method: METHOD, address: string, action: ACTION, uuid: string, jwt: string): Promise<Response> {
    const requestOptions: RequestInit = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ jwt }),
    };

    return fetch(
        `${API_BASE_URL}/users/${address}/${uuid}/${action}`,
        requestOptions
    );
};
