import { page } from "@/lib/datocms";
import { ModularContent } from "@/src/components/ModularContent";
import { PageQuery } from "@/graphql/generated";

export const revalidate = 120;

export default async function Page() {
  const content = (await page("homepage")) as PageQuery;

  return <ModularContent content={content} pageContentType="page" />;
}
