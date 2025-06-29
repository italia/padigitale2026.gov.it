import { ImmagineRecord } from "@/graphql/generated";
import { ResponsiveImageType, SRCImage } from "react-datocms";

export function Immagine({ props }: { props: ImmagineRecord }) {
  const { immagine } = props;

  // Verifica che l'immagine e responsiveImage esistano
  if (!immagine?.responsiveImage) {
    return null; // Non renderizzare nulla se l'immagine non è disponibile
  }

  return <SRCImage data={immagine.responsiveImage as ResponsiveImageType} />;
}
