import { page } from "@/lib/datocms";
import { ModularContent } from "@/src/components/ModularContent";
import { PageQuery } from "@/graphql/generated";

export default async function Page() {
  const content = (await page("homepage")) as PageQuery;

  return (
    <div className="container">
      <h1>{content.page?.title}</h1>
      <ModularContent content={content} />
    </div>
  );
}
