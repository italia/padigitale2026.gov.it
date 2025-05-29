import { getAvvisi } from "@/lib/salesforce";

if (!process.env.SF_USERNAME || !process.env.SF_PASSWORD) {
  throw Error("SF_USERNAME and SF_PASSWORD, must be defined.");
}

export async function POST(request: Request) {
  return Response.json(await getAvvisi(3, "DESC"));
}
