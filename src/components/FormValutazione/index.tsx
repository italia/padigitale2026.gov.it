"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { usePages } from "@/src/contexts/PagesContext";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
  Col,
  Section,
  CardBody,
  CardTitle,
  FormGroup,
  Input,
  Label,
  Form,
  TextArea,
} from "design-react-kit";

import classNames from "classnames/bind";
import styles from "./index.module.scss";
const cn = classNames.bind(styles);

type FormStatus = "idle" | "loading" | "success" | "error";

export function FormValutazione({ id }: { id: string }) {
  const pathname = usePathname();
  const { pages, faqs, news, resources, supportos, datis } = usePages();
  const [isOpen, toggleModal] = useState<boolean>(false);
  const [isUseful, setIsUseful] = useState<boolean | null>(null);
  const [commento, setCommento] = useState<string>("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState<string>("");

  // Funzione helper per trovare l'ID della pagina corrente
  const getCurrentPageId = (): string => {
    let currentSlug: string;

    // Gestione speciale per l'homepage
    if (pathname === "/") {
      currentSlug = "homepage";
    } else {
      currentSlug = pathname.slice(1); // Rimuove il primo "/"
    }

    // Cerca nelle pagine normali
    const normalPage = pages.allPages.find((p) => p.slug === currentSlug);
    if (normalPage) return normalPage.id;

    // Cerca nelle FAQ
    const faqPage = faqs.allFaqs.find((p) => p.slug === currentSlug);
    if (faqPage) return faqPage.id;

    // Cerca nelle notizie
    const newsPage = news.allNews.find((p) => p.slug === currentSlug);
    if (newsPage) return newsPage.id;

    // Cerca nelle risorse
    const resourcePage = resources.allResources.find(
      (p) => p.slug === currentSlug
    );
    if (resourcePage) return resourcePage.id;

    // Cerca nel supporto
    const supportoPage = supportos.allSupportos.find(
      (p) => p.slug === currentSlug
    );
    if (supportoPage) return supportoPage.id;

    // Cerca nei dati
    const datiPage = datis.allDatis.find((p) => p.slug === currentSlug);
    if (datiPage) return datiPage.id;

    // Se non trova nulla, usa il pathname come fallback
    return pathname;
  };

  const handleCommentoChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    // Limita a 500 caratteri
    if (value.length <= 500) {
      setCommento(value);
    }
  };

  const handleSubmit = async () => {
    setStatus("loading");
    setMessage("");

    try {
      // 1. Ottieni il token CSRF
      const tokenResponse = await fetch("/api/feedback/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!tokenResponse.ok) {
        throw new Error("Errore nell'ottenimento del token");
      }

      const { csrf_token } = await tokenResponse.json();

      const currentPageId = getCurrentPageId();
      console.log("pathname", pathname);
      console.log("currentPageId", currentPageId);

      // 2. Invia il feedback
      const feedbackResponse = await fetch("/api/feedback/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-TOKEN": csrf_token,
        },
        body: JSON.stringify({
          utile: isUseful,
          commento: commento,
          link: currentPageId,
        }),
      });

      const feedbackData = await feedbackResponse.json();

      if (feedbackResponse.ok) {
        setStatus("success");
        setMessage("Grazie per il tuo feedback!");
        setCommento(""); // Reset del commento
        toggleModal(false); // Chiudi la modale
      } else {
        setStatus("error");
        setMessage(
          feedbackData.message || "Errore durante l'invio del feedback"
        );
      }
    } catch (error) {
      setStatus("error");
      console.error(error);
      setMessage("Errore di connessione. Riprova più tardi.");
    }
  };

  const resetForm = () => {
    setStatus("idle");
    setMessage("");
    setCommento("");
    setIsUseful(null);
    toggleModal(false);
  };

  return (
    <Section
      aria-labelledby={id}
      // color="muted"
      wrapperClassName="feedback primary-bg-a1 py-5 px-3 px-lg-0"
      className={cn("container-xxl", "feedback-section")}
    >
      <Row>
        <Col xs={12} sm={10} md={8} lg={6} className="mx-auto">
          <div className="rounded shadow h-100 bg-white">
            <CardBody className="p-4 p-md-5">
              {status === "success" ? (
                <div className="alert alert-success mb-0" role="alert">
                  <h4 className="alert-heading">Feedback inviato!</h4>
                  <p>{message}</p>
                  <hr />
                  <Button color="primary" onClick={resetForm}>
                    Invia un altro feedback
                  </Button>
                </div>
              ) : (
                <>
                  <CardTitle tag="h2" id={id} className="h4 fw-semibold mb-0">
                    Ciao, questa pagina è stata utile?
                  </CardTitle>

                  <Form>
                    <fieldset className="mt-3 mt-md-3">
                      <legend className="visually-hidden">
                        Scegli la risposta:
                      </legend>
                      <FormGroup check inline>
                        <Input
                          id={`${id}-yes`}
                          name="valutazione"
                          type="radio"
                          onChange={() => setIsUseful(true)}
                        />
                        <Label check htmlFor={`${id}-yes`}>
                          Sì
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Input
                          id={`${id}-no`}
                          name="valutazione"
                          type="radio"
                          onChange={() => setIsUseful(false)}
                        />
                        <Label check htmlFor={`${id}-no`}>
                          No
                        </Label>
                      </FormGroup>
                    </fieldset>
                  </Form>
                  <Button
                    color="primary"
                    className="mt-4"
                    disabled={isUseful === null}
                    onClick={() => toggleModal(!isOpen)}
                  >
                    Invia
                  </Button>
                </>
              )}
            </CardBody>
          </div>
        </Col>
      </Row>

      <Modal
        isOpen={isOpen}
        toggle={() => toggleModal(!isOpen)}
        labelledBy={`${id}-modal`}
      >
        <ModalHeader toggle={() => toggleModal(!isOpen)} id={`${id}-modal`}>
          {isUseful === true
            ? "Cosa hai apprezzato di più e cosa possiamo migliorare? (facoltativo)"
            : "Come possiamo migliorare questa pagina? (facoltativo)"}
        </ModalHeader>
        <ModalBody>
          {status === "error" && (
            <div className="alert alert-danger mb-3" role="alert">
              {message}
            </div>
          )}
          <Form>
            <TextArea
              id={`${id}-commento`}
              name="commento"
              placeholder="Scrivi qui il tuo commento"
              rows={3}
              maxLength={500}
              value={commento}
              onChange={handleCommentoChange}
            ></TextArea>
            <div className="d-flex justify-content-between align-items-center mt-2">
              <p className="text-muted mb-0">500 caratteri a disposizione</p>
              <p
                className={`${
                  commento.length > 400 ? "text-warning" : "text-muted"
                }`}
              >
                {commento.length}/500
              </p>
            </div>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={handleSubmit}
            disabled={status === "loading"}
          >
            {status === "loading" ? "Invio in corso..." : "Invia"}
          </Button>
        </ModalFooter>
      </Modal>
    </Section>
  );
}
