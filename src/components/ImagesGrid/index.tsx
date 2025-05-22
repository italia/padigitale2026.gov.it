import Image from "next/image";
import { ImagesGridRecord } from "@/graphql/generated";

export function ImagesGrid({ props }: { props: ImagesGridRecord }) {
  const { images } = props;

  return (
    <div className={"w-100"}>
      {/* Body */}
      <div className="d-flex justify-content-center flex-wrap gap-2 gap-md-4">
        {images?.map((image) => (
          <div
            key={image.id}
            className="w-100 ratio ratio-16x9 w-100"
            style={{ maxWidth: "212px" }}
          >
            <Image src={image.url || ""} alt={image.alt || ""} fill />
          </div>
        ))}
      </div>
    </div>
  );
}
