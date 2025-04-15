import { page } from "@/lib/datocms";
import Header from "@/src/components/header";
import Footer from "@/src/components/footer";
import { ModularContent } from "@/src/components/ModularContent";
import { PageQuery } from "@/graphql/generated";
export default async function Page() {
  const content = (await page("homepage")) as PageQuery;

  return (
    <main>
      <Header />
      <div className="container">
        <h1>{content.page?.title}</h1>
        <ModularContent content={content} />
      </div>
      <Footer />
    </main>
  );
}
