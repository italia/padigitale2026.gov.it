"use server";

import {
  getAllFilteredUpdates
} from "@/lib/datocms";
import type {
  AllFilteredUpdatesQuery
} from "@/graphql/generated";

export default async function filterUpdates({idBeneficiari}: {
  idBeneficiari: string[];
}) {
  return (await getAllFilteredUpdates(idBeneficiari)) as AllFilteredUpdatesQuery;
}
