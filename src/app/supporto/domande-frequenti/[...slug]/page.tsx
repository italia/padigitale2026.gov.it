import {
  faq,
  getAllFaqs
} from "@/lib/datocms";
import {
  AllFaqsQuery,
  FaqQuery,
} from "@/graphql/generated";
import { ModularContent } from "@/src/components/ModularContent";
import { notFound } from "next/navigation";

export const dynamicParams = true;
export const revalidate = 120;

export async function generateStaticParams() {
  const pages = (await getAllFaqs()) as AllFaqsQuery;

  return pages.allFaqs
    .filter((page) => page.slug)
    .map((page) => {
      const slug = page.slug!.replace(/^supporto\//, '');
      return {
        slug: slug.split("/"),
        customUpdateDate: page.customUpdateDate,
      };
    });
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const fullSlug = `supporto/${slug.slice(1).join("/")}`;

  const pages = (await faq(fullSlug)) as FaqQuery;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const page: any = pages.faq;
  const pageContentType = "faq";

  if (!page) return notFound();

  // console.log(page, 'page')

  return (
    <>
      <ModularContent content={{ page }} pageContentType={pageContentType} />
      {page.customUpdateDate && (
        <div className="container-xxl">
          <p className="my-4 fs-6 text-secondary">
            Aggiornato il{" "}
            <time dateTime={page.customUpdateDate}>
              {new Intl.DateTimeFormat("it-IT", {
                timeZone: "Europe/Rome",
                day: "2-digit",
                month: "long",
                year: "numeric",
              }).format(new Date(page.customUpdateDate))}
            </time>
          </p>
        </div>
      )}
    </>
  );
}
