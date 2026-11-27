"use client";

import type { VideoPlayerRecord } from "@/graphql/generated";
import {
  AcceptOverlay,
  VideoPlayer as BootstrapVideoPlayer,
} from "bootstrap-italia";
import { Col, Container, Row, Section, Spinner } from "design-react-kit";
import { useEffect, useRef, useState } from "react";

export function VideoPlayer({ props }: { props: VideoPlayerRecord }) {
  const { id, videoSources, poster, transcription, transcriptionLabel } = props;
  const [isClient, setIsClient] = useState(false);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const accordionRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<HTMLDivElement>(null);
  const instanceRef = useRef<BootstrapVideoPlayer>(null);
  const consentRef = useRef<HTMLButtonElement>(null);
  const youtubeUrl = videoSources?.find(
    ({ sourceSrc }) =>
      sourceSrc?.includes("youtube.com") ||
      sourceSrc?.includes("youtu.be") ||
      sourceSrc?.includes("youtube-nocookie.com"),
  )?.sourceSrc;

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const container = playerRef.current;
    if (!isClient || !container) return;

    // Video.js owns the video element and removes it when the player is disposed.
    const video = document.createElement("video");
    video.id = `vid-${id}`;
    video.controls = true;

    if (youtubeUrl) {
      video.width = 640;
      video.height = 264;
    } else {
      video.poster = poster?.url || "";
      for (const source of videoSources || []) {
        const element = document.createElement("source");
        element.src = source.sourceSrc || "";
        element.type = source.sourceType || "";
        video.appendChild(element);
      }
    }

    container.appendChild(video);
    const instance = new BootstrapVideoPlayer(video);
    const player = instance.player;
    instanceRef.current = instance;

    return () => {
      instanceRef.current = null;
      instance.dispose();
      player.dispose();
    };
  }, [id, isClient, poster?.url, videoSources, youtubeUrl]);

  useEffect(() => {
    const button = consentRef.current;
    if (!isClient || !button || !youtubeUrl) return;

    let consent: AcceptOverlay | undefined;
    const loadYouTubeVideo = () =>
      instanceRef.current?.setYouTubeVideo(youtubeUrl);

    // Keep the overlay's native click listener out of React's effect replay.
    const frame = requestAnimationFrame(() => {
      consent = new AcceptOverlay(button, { service: "youtube.com" });
      button.addEventListener("click", loadYouTubeVideo);
    });

    return () => {
      cancelAnimationFrame(frame);
      button.removeEventListener("click", loadYouTubeVideo);
      consent?.dispose();
    };
  }, [isClient, youtubeUrl]);

  const handleAccordionClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setIsAccordionOpen(!isAccordionOpen);
  };

  // Renderizza il player YouTube con overlay di consenso
  const renderYouTubePlayer = () => {
    return (
      <div className="acceptoverlayable" key={youtubeUrl}>
        <div className="acceptoverlay acceptoverlay-primary fade show">
          <div className="acceptoverlay-inner">
            <div className="acceptoverlay-icon">
              <svg className="icon icon-xl">
                <use href="/bootstrap-italia/dist/svg/sprites.svg#it-video"></use>
              </svg>
            </div>
            <p>
              Accetta i cookie di YouTube per vedere il video. Puoi gestire le
              preferenze nella{" "}
              <a href="#" className="text-white">
                cookie policy
              </a>
              .
            </p>
            <div className="acceptoverlay-buttons bg-dark">
              <button
                type="button"
                className="btn btn-primary"
                ref={consentRef}
              >
                Accetta
              </button>
              <div className="form-check">
                <input
                  id={`chk-remember-${id}`}
                  type="checkbox"
                  data-bs-accept-remember
                />
                <label htmlFor={`chk-remember-${id}`}>
                  Ricorda per tutti i video
                </label>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div ref={playerRef} />
          {transcriptionLabel && transcription && (
            <div className="vjs-transcription accordion" ref={accordionRef}>
              <div className="accordion-item">
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
                <div
                  id={`transcription-${id}`}
                  className={`accordion-collapse collapse ${
                    isAccordionOpen ? "show" : ""
                  }`}
                  aria-labelledby={`transcription-head-${id}`}
                >
                  <div className="accordion-body">{transcription || ""}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  // Renderizza il player video standard
  const renderStandardPlayer = () => {
    return (
      <>
        <div ref={playerRef} />
        {transcriptionLabel && transcription && (
          <div className="vjs-transcription accordion" ref={accordionRef}>
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
                  <div className="accordion-body">{transcription || ""}</div>
                </div>
              )}
            </div>
          </div>
        )}
      </>
    );
  };

  return (
    <Section wrapperClassName={"p-0"}>
      <Container>
        <Row>
          <Col>
            {isClient ? (
              youtubeUrl ? (
                renderYouTubePlayer()
              ) : (
                renderStandardPlayer()
              )
            ) : (
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ minHeight: "300px" }}
              >
                <Spinner active small />
                <span className="visually-hidden">Caricamento video...</span>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </Section>
  );
}
