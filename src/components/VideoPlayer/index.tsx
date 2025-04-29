"use client";

import { VideoPlayerRecord } from "@/graphql/generated";
import { Video } from "design-react-kit";
import { useEffect, useState } from "react";

export function VideoPlayer({ props }: { props: VideoPlayerRecord }) {
  const { id, videoSources, poster, transcription, transcriptionLabel } = props;
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div style={{ backgroundColor: "lime" }}>
      {/* Body */}
      <div className="container-xxl">
        {isClient ? (
          <Video
            id={id || ""}
            sources={
              videoSources?.map((source) => ({
                src: source.sourceSrc || "",
                type: source.sourceType || "",
              })) || []
            }
            poster={poster?.url || ""}
            transcriptionLabel={transcriptionLabel || ""}
            transcription={transcription || ""}
            fluid="true"
            controls
          />
        ) : (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "300px" }}
          >
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Caricamento video...</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
