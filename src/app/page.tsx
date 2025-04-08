import { page } from "@/lib/datocms";
import { ModularContent } from "../components/ModularContent";
import { PageQuery } from "@/graphql/generated";
export default async function Page() {
  const content = (await page("homepage")) as PageQuery;

  return (
    <main>
      <div className="container">
        <h1>{content.page?.title}</h1>
        <ModularContent content={content} />
      </div>
    </main>
  );
}
