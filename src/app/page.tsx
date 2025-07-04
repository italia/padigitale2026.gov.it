import { page } from "@/lib/datocms";
import { ModularContent } from "@/src/components/ModularContent";
import { PageQuery } from "@/graphql/generated";
import type { Metadata } from "next";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const content = (await page("homepage")) as PageQuery;
  const seo = content.page?.seo;

  return {
    title: seo?.title || content.page?.title || "PA digitale 2026",
    description:
      seo?.description ||
      "Trova gli avvisi di finanziamento per la transizione digitale della tua amministrazione, gestisci i progetti e richiedi assistenza in modo semplice e rapido.",
    robots: seo?.noIndex ? "noindex, nofollow" : "index, follow",
    openGraph: {
      title: seo?.title || content.page?.title || "PA digitale 2026",
      description:
        seo?.description ||
        "Trova gli avvisi di finanziamento per la transizione digitale della tua amministrazione, gestisci i progetti e richiedi assistenza in modo semplice e rapido.",
      type: "website",
      url: "https://padigitale2026.gov.it",
      images: seo?.image?.responsiveImage
        ? [
            {
              url: seo.image.responsiveImage.src,
              width: seo.image.responsiveImage.width,
              height: seo.image.responsiveImage.height,
              alt:
                seo.image.responsiveImage.alt ||
                content.page?.title ||
                "PA digitale 2026",
            },
          ]
        : undefined,
    },
    twitter: {
      card:
        (seo?.twitterCard as "summary" | "summary_large_image") ||
        "summary_large_image",
      title: seo?.title || content.page?.title || "PA digitale 2026",
      description:
        seo?.description ||
        "Trova gli avvisi di finanziamento per la transizione digitale della tua amministrazione, gestisci i progetti e richiedi assistenza in modo semplice e rapido.",
      images: seo?.image?.responsiveImage
        ? [seo.image.responsiveImage.src]
        : undefined,
    },
  };
}

export default async function Page() {
  const content = (await page("homepage")) as PageQuery;

  return <ModularContent content={content} pageContentType="page" />;
}
