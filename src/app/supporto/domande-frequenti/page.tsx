import { getPageData } from "@/lib/pageHelpers";
import { ModularContent } from "@/src/components/ModularContent";
import { notFound } from "next/navigation";
import FragmentRedirect from "@/src/components/FragmentRedirect";

export default async function SupportoDomandeFrequentiPage() {
  const pageData = await getPageData("supporto/domande-frequenti");

  if (!pageData) return notFound();

  const { page } = pageData;

  return (
    <>
      <FragmentRedirect />
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <ModularContent content={{ page } as any} pageContentType="page" />
    </>
  );
}
