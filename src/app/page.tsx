import { draftMode } from "next/headers";
import { page } from "@/lib/datocms";
import { ModularContent } from "@/src/components/ModularContent";
import { PageQuery } from "@/graphql/generated";

export const revalidate = 0;

export default async function Page() {
  const { isEnabled } = await draftMode(); // get draft content or not
  const content = (await page("homepage", isEnabled)) as PageQuery;

  return <ModularContent content={content} />;
}
