"use client";

import { VideoPlayerRecord } from "@/graphql/generated";
import { Col, Container, Row, Section } from "design-react-kit";
import { useEffect, useState, useRef } from "react";

// Interfaccia per il tipo bootstrap
interface BootstrapVideoPlayer {
  setYouTubeVideo: (url: string) => void;
}

interface Bootstrap {
  VideoPlayer: {
    getOrCreateInstance: (element: HTMLVideoElement) => BootstrapVideoPlayer;
  };
}

declare global {
  interface Window {
    bootstrap?: Bootstrap;
  }
}

export function VideoPlayer({ props }: { props: VideoPlayerRecord }) {
  const { id, videoSources, poster, transcription, transcriptionLabel } = props;
  const [isClient, setIsClient] = useState(false);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const accordionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleAccordionClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setIsAccordionOpen(!isAccordionOpen);
  };

  // Funzione per rilevare se le sorgenti video contengono link YouTube
  const hasYouTubeSource = () => {
    return videoSources?.some(
      (source) =>
        source.sourceSrc?.includes("youtube.com") ||
        source.sourceSrc?.includes("youtu.be") ||
        source.sourceSrc?.includes("youtube-nocookie.com")
    );
  };

  // Funzione per ottenere il primo link YouTube dalle sorgenti
  const getYouTubeUrl = () => {
    return (
      videoSources?.find(
        (source) =>
          source.sourceSrc?.includes("youtube.com") ||
          source.sourceSrc?.includes("youtu.be") ||
          source.sourceSrc?.includes("youtube-nocookie.com")
      )?.sourceSrc || ""
    );
  };

  // Funzione per caricare il video YouTube
  const loadYouTubeVideo = (videoUrl: string) => {
    if (videoRef.current && window.bootstrap) {
      const video = window.bootstrap.VideoPlayer.getOrCreateInstance(
        videoRef.current
      );
      if (video && video.setYouTubeVideo) {
        video.setYouTubeVideo(videoUrl);
      }
    }
  };

  // Renderizza il player YouTube con overlay di consenso
  const renderYouTubePlayer = () => {
    const youtubeUrl = getYouTubeUrl();

    return (
      <div className="acceptoverlayable">
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
                data-bs-accept-from="youtube.com"
                onClick={() => loadYouTubeVideo(youtubeUrl)}
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
          <video
            controls
            data-bs-video
            ref={videoRef}
            id={`vid-${id}`}
            className="video-js"
            width="640"
            height="264"
          ></video>
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
              hasYouTubeSource() ? (
                renderYouTubePlayer()
              ) : (
                renderStandardPlayer()
              )
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
