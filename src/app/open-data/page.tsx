import { getDatiData } from "@/lib/pageHelpers";
import { ModularContent } from "@/src/components/ModularContent";
import { notFound } from "next/navigation";

export const revalidate = 60;

export default async function OpenDataPage() {
  const pageData = await getDatiData("open-data");

  if (!pageData) return notFound();

  const { page } = pageData;

  return (
    <>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <ModularContent content={{ page } as any} pageContentType="dati" />
    </>
  );
}
