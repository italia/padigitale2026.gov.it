"use client";

import { FormAssistanceRecord } from "@/graphql/generated";
import { mapFormDataToSalesforce } from "./salesforce-field-mapping";

import Link from "next/link";
import { Button, Input, Select, TextArea, Form } from "design-react-kit";
import { Row } from "design-react-kit";
import { Col } from "design-react-kit";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import useRecaptcha from "./utils";

import classNames from "classnames/bind";
import styles from "./index.module.scss";
const cn = classNames.bind(styles);

type FormStatus = "idle" | "loading" | "success" | "error";

const OBJECT_MAX_LENGTH = 150;
const DESCRIPTION_MAX_LENGTH = 32000;

function FormAssistenzaContent({ props }: { props: FormAssistanceRecord }) {
  const { id } = props;
  const { captchaToken, recaptchaRef, handleRecaptcha } = useRecaptcha();
  const [formState, setFormState] = useState({
    applicant: "",
    address: "",
    phone: "",
    subject: "",
    object: "",
    description: "",
    notice: "",
  });

  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  // Logica per abilitare il bottone
  const isFormValid = () => {
    const requiredFields = [
      formState.address,
      formState.applicant,
      formState.subject,
      formState.object,
      formState.description,
      formState.notice,
    ];

    // Controlla che tutti i campi obbligatori siano compilati
    const allFieldsFilled = requiredFields.every(
      (field) => field && field.length > 0
    );

    // Controlla che Oggetto non superi i OBJECT_MAX_LENGTH caratteri
    const objectValid = formState.object.length <= OBJECT_MAX_LENGTH;

    // Controlla che Richiesta non superi i DESCRIPTION_MAX_LENGTH caratteri
    const descriptionValid = formState.description.length <= DESCRIPTION_MAX_LENGTH;

    return allFieldsFilled && descriptionValid && objectValid && captchaToken;
  };

  const handleSubmit = async () => {
    if (!isFormValid() || !captchaToken) return;

    setStatus("loading");
    setMessage("");

    try {
      // Prepara i dati del form per Salesforce usando la mappatura dinamica
      const mappedFields = mapFormDataToSalesforce({
        applicant: formState.applicant,
        address: formState.address,
        phone: formState.phone,
        subject: formState.subject,
        object: formState.object,
        description: formState.description,
        notice: formState.notice,
      });

      const formData = {
        orgid: "00D7Q000001NvsR",
        external: "1",
        origin: "Area pubblica",
        recordType: "0127Q0000001c35",
        priority: "Medium",
        ...mappedFields,
        "g-recaptcha-response": captchaToken,
        captcha_settings: JSON.stringify({
          keyname: "reCAPTCHA_prod",
          fallback: true,
          orgId: "00D7Q000001NvsR",
          ts: Date.now().toString(),
        }),
        debug: "1",
        submit: "INVIA",
      };

      // Chiama Salesforce tramite API route
      const response = await fetch("/api/salesforce/assistenza", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setMessage(
          "Abbiamo ricevuto la tua richiesta di assistenza su PA digitale 2026. Riceverai una risposta al più presto ai contatti indicati."
        );
        // Reset del form
        setFormState({
          applicant: "",
          address: "",
          phone: "",
          subject: "",
          object: "",
          description: "",
          notice: "",
        });

        // Reset captcha after submission
        recaptchaRef.current?.reset();
      } else {
        setStatus("error");
        setMessage("Errore durante l'invio del form");
      }
    } catch (error) {
      setStatus("error");
      console.error(error);
      setMessage("Errore di connessione o reCAPTCHA. Riprova più tardi.");
    }
  };

  const resetForm = () => {
    setStatus("idle");
    setMessage("");
    recaptchaRef.current?.reset();
  };

  const handleObjectChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    // Limita a 300 caratteri
    if (value.length <= 300) {
      setFormState({
        ...formState,
        object: value,
      });
    }
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    // Limita a DESCRIPTION_MAX_LENGTH caratteri
    if (value.length <= DESCRIPTION_MAX_LENGTH) {
      setFormState({
        ...formState,
        description: value,
      });
    }
  };

  // Mostra messaggio di successo
  if (status === "success") {
    return (
      <div className={cn("wrapper", "container-xxl py-5 my-5 mx-auto")}>
        <h2 className="mb-5">Lascia i tuoi dati per essere contattato</h2>
        <div className="row">
          <div className="col-12 col-md-10">
            <div className="alert alert-success" role="alert">
              <h4 className="alert-heading">Richiesta di assistenza inviata</h4>
              <p>{message}</p>
              <hr />
              <Button color="primary" onClick={resetForm}>
                Invia una nuova richiesta
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn("wrapper", "container-xxl py-5 my-5 mx-auto")}
      aria-labelledby={id}
    >
      <h2 className="mb-5" id={id}>
        Lascia i tuoi dati per essere contattato
      </h2>
      <div className="row">
        <div className="col-12 col-md-10">
          <p className="text-muted">I campi con asterisco sono obbligatori</p>

          {status === "error" && (
            <div className="alert alert-danger mt-3" role="alert">
              {message}
            </div>
          )}
          <Form>
            <Row className="mt-5">
              <Col md="6">
                <Select
                  id="applicant-select"
                  label="Richiedente*"
                  value={formState.applicant}
                  required
                  onChange={(value) => {
                    setFormState({
                      ...formState,
                      applicant: value,
                    });
                  }}
                >
                  <option label="Seleziona un richiedente"></option>
                  <option label="Pubblica Amministrazione">
                    Pubblica Amministrazione
                  </option>
                  <option label="Fornitore">Fornitore</option>
                </Select>
              </Col>
            </Row>

            <Row className="mt-5">
              <Col md="6">
                <Input
                  id="address"
                  name="address"
                  label="Email*"
                  placeholder="Inserisci un indirizzo email"
                  type="email"
                  value={formState.address}
                  required
                  onChange={(e) => {
                    setFormState({
                      ...formState,
                      address: e.target.value,
                    });
                  }}
                />
              </Col>
              <Col md="6">
                <Input
                  id="phone"
                  name="phone"
                  label="Telefono"
                  placeholder="Inserisci un numero di telefono"
                  type="text"
                  value={formState.phone}
                  onChange={(e) => {
                    setFormState({
                      ...formState,
                      phone: e.target.value,
                    });
                  }}
                />
              </Col>
            </Row>

            <Row className="mt-5">
              <Col md="6">
                <Select
                  id="subject-select"
                  label="Argomento*"
                  value={formState.subject}
                  required
                  onChange={(value) => {
                    setFormState({
                      ...formState,
                      subject: value,
                    });
                  }}
                >
                  <option label="Seleziona un argomento"></option>
                  <option label="Amministrazione">Amministrazione</option>
                  <option label="Implementazione e sviluppo progetto">
                    Implementazione e sviluppo progetto
                  </option>
                  <option label="Malfunzionamento piattaforma">
                    Malfunzionamento piattaforma
                  </option>
                  <option label="Processo di adesione e monitoraggio">
                    Processo di adesione e monitoraggio
                  </option>
                  <option label="Altro">Altro</option>
                </Select>
              </Col>
              <Col md="6">
                <Select
                  id="notice-select"
                  label="Avviso*"
                  value={formState.notice}
                  required
                  onChange={(value) => {
                    setFormState({
                      ...formState,
                      notice: value,
                    });
                  }}
                >
                  <option label="Seleziona un avviso"></option>
                  <option label="Nessuno">Nessuno</option>
                  <option label="1.1 Infrastrutture digitali">
                    1.1 Infrastrutture digitali (Altre PAC)
                  </option>
                  <option label="1.2 Abilitazione Cloud">
                    1.2 Abilitazione e facilitazione migrazione al Cloud
                  </option>
                  <option label="1.1 e 1.2 Multimisura ASL/AO">
                    1.1 e 1.2 Multimisura (ASL/AO)
                  </option>
                  <option label="1.3.1 ANNCSU">1.3.1 ANNCSU</option>
                  <option label="1.3.1 Piattaforma Digitale Nazionale Dati">
                    1.3.1 Piattaforma Digitale Nazionale Dati
                  </option>
                  <option label="1.4.1 Esperienza dei servizi pubblici">
                    1.4.1 Esperienza dei servizi pubblici
                  </option>
                  <option label="1.4.3 Adozione app IO">
                    1.4.3 Adozione appIO
                  </option>
                  <option label="1.4.3 Adozione pagoPA">
                    1.4.3 Adozione pagoPA
                  </option>
                  <option label="1.4.4 Adozione SPID e CIE">
                    1.4.4 Adozione identità digitale
                  </option>
                  <option label="1.4.4 Adozione ANSC (ANPR)">
                    1.4.4 Adozione ANPR ANSC
                  </option>
                  <option label="1.4.5 Digitalizzazione avvisi pubblici">
                    1.4.5 Digitalizzazione degli avvisi pubblici
                  </option>
                  <option label="2.2.3 Digitalizzazione SUAP e SUE">
                    2.2.3 Digitalizzazione delle procedure SUAP e SUE
                  </option>
                </Select>
              </Col>
            </Row>

            <Row className="mt-5">
              <Col md="12">
                <TextArea
                  id="object"
                  name="object"
                  label="Oggetto*"
                  placeholder="Inserisci l'oggetto della richiesta"
                  rows={2}
                  maxLength={OBJECT_MAX_LENGTH}
                  value={formState.object}
                  onChange={handleObjectChange}
                  wrapperClassName="mb-0"
                />
                <div className="d-flex justify-content-between align-items-center mt-2">
                  <p className="text-muted mb-0">
                    {OBJECT_MAX_LENGTH} caratteri a disposizione
                  </p>
                  <p
                    className={`${
                      formState.object.length > (OBJECT_MAX_LENGTH - 50)
                        ? "text-warning"
                        : "text-muted"
                    }`}
                  >
                    {formState.object.length}/{OBJECT_MAX_LENGTH}
                  </p>
                </div>
              </Col>
            </Row>

            <Row className="mt-5">
              <Col md="12">
                <TextArea
                  id="description"
                  name="description"
                  label="Richiesta*"
                  placeholder="Inserisci i dettagli della richiesta"
                  required
                  rows={5}
                  maxLength={DESCRIPTION_MAX_LENGTH}
                  value={formState.description}
                  onChange={handleDescriptionChange}
                  wrapperClassName="mb-0"
                />
                <div className="d-flex justify-content-between align-items-center mt-2">
                  <p className="text-muted mb-0">
                    {DESCRIPTION_MAX_LENGTH} caratteri a disposizione
                  </p>
                  <p
                    className={`${
                      formState.description.length > (DESCRIPTION_MAX_LENGTH - 50)
                        ? "text-warning"
                        : "text-muted"
                    }`}
                  >
                    {formState.description.length}/{DESCRIPTION_MAX_LENGTH}
                  </p>
                </div>
              </Col>
            </Row>

            <Row className="mt-5">
              <Col md="12">
                <ReCAPTCHA
                  sitekey="6LfW56weAAAAAIWHJnwlQ2lHNRCcd04QLYQyamww"
                  onChange={handleRecaptcha}
                />
              </Col>
            </Row>

            <p className="text-muted mt-5">
              Cliccando su &quot;Invia richiesta&quot; dichiaro di aver letto e
              compreso{" "}
              <Link
                prefetch={false}
                href="https://padigitale2026-gov-it-develop.vercel.app/informativa-privacy"
              >
                l&apos;informativa privacy
              </Link>
              .
            </p>

            <Row className="mt-4">
              <Col sm="auto">
                <Button
                  color="primary"
                  type="submit"
                  disabled={!isFormValid() || status === "loading"}
                  onClick={handleSubmit}
                >
                  {status === "loading"
                    ? "Invio in corso..."
                    : "Invia Richiesta"}
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  );
}

export function FormAssistenza({ props }: { props: FormAssistanceRecord }) {
  return <FormAssistenzaContent props={props} />;
}
