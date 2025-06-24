'use server'

import { CardsGridAnnouncementRecord } from "@/graphql/generated";
import { getAvvisi } from "@/lib/salesforce";

export async function fetchAnnouncements(props: CardsGridAnnouncementRecord) {
  try {
    if (!process.env.SF_USERNAME || !process.env.SF_PASSWORD || !process.env.SF_URL) {
      console.error("Missing Salesforce credentials");
      return [];
    }

    const beneficiariLabels = props.beneficiari?.map(beneficiario => beneficiario.label).filter((label): label is string => label !== null && label !== undefined) || [];
    const avvisi = await getAvvisi(Number(props.sectionFields?.columns) ?? 3, 'DESC', beneficiariLabels);
    return avvisi;
  } catch (error) {
    console.error("Error fetching announcements:", error);
    if (error instanceof Error) {
      console.error("Error details:", error.message, error.stack);
    }
    return [];
  }
}