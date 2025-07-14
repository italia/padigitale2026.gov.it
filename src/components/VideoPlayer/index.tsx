"use client";

import { VideoPlayerRecord } from "@/graphql/generated";
import { Col, Container, Row, Section } from "design-react-kit";
import { useEffect, useState, useRef } from "react";

export function VideoPlayer({ props }: { props: VideoPlayerRecord }) {
  const { id, videoSources, poster, transcription, transcriptionLabel } = props;
  const [isClient, setIsClient] = useState(false);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const accordionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleAccordionClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setIsAccordionOpen(!isAccordionOpen);
  };

  return (
    <Section wrapperClassName={"p-0"}>
      <Container>
        <Row>
          <Col>
            {isClient ? (
              <>
                <video
                  data-bs-video
                  poster={poster?.url || ""}
                  data-setup='{
              "controls": true,
              "fluid": true
            }'
                >
                  {videoSources?.map((source) => (
                    <source
                      key={source.sourceSrc}
                      src={source.sourceSrc || ""}
                      type={source.sourceType || ""}
                    />
                  )) || []}
                </video>
                {transcriptionLabel && transcription && (
                  <div
                    className="vjs-transcription accordion"
                    ref={accordionRef}
                  >
                    <div className="accordion-item">
                      {transcriptionLabel && (
                        <h2
                          className="accordion-header"
                          id={`transcription-head-${id}`}
                        >
                          <button
                            className={`accordion-button ${
                              !isAccordionOpen ? "collapsed" : ""
                            }`}
                            type="button"
                            onClick={handleAccordionClick}
                            aria-expanded={isAccordionOpen}
                            aria-controls={`transcription-${id}`}
                          >
                            {transcriptionLabel || ""}
                          </button>
                        </h2>
                      )}
                      {transcription && (
                        <div
                          id={`transcription-${id}`}
                          className={`accordion-collapse collapse ${
                            isAccordionOpen ? "show" : ""
                          }`}
                          aria-labelledby={`transcription-head-${id}`}
                        >
                          <div className="accordion-body">
                            {transcription || ""}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </>
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
          </Col>
        </Row>
      </Container>
    </Section>
  );
}
