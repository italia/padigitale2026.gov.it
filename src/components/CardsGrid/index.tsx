import {
  CardsGridGenericRecord,
  CardsGridAttachmentRecord,
  CardsGridServiceRecord,
  CardsGridResourceRecord,
  CardsGridNewsRecord,
  CardsGridAnnouncementRecord
} from "@/graphql/generated";

import { CardsGridClient } from "./client";
import { Avviso } from "@/lib/salesforce";
import { getAvvisi } from "@/lib/salesforce";


export async function CardsGrid({
                            props,
                            hasSidebar = false,
                          }: {
  props:
    | CardsGridGenericRecord
    | CardsGridAttachmentRecord
    | CardsGridServiceRecord
    | CardsGridResourceRecord
    | CardsGridNewsRecord
    | CardsGridAnnouncementRecord;
  hasSidebar?: boolean;
}) {
  
  const {__typename} = props;

  let announcements: Avviso[] = [];

  if (__typename === "CardsGridAnnouncementRecord") {
    try {
      announcements = await getAvvisi(Number(props.sectionFields?.columns));
    } catch (error) {
      console.error("Error fetching announcements:", error);
    }
  }

  return <CardsGridClient props={props} hasSidebar={hasSidebar} fetchedAnnouncements={announcements} />;
}
