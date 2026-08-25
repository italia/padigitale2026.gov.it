"use client";

import { FormToRecord } from "@/graphql/generated";

import Link from "next/link";
import { Button, Input, Select, TextArea, Form } from "design-react-kit";
import { Row } from "design-react-kit";
import { Col } from "design-react-kit";
import { useState } from "react";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";
import { z } from "zod";

import classNames from "classnames/bind";
import styles from "./index.module.scss";
const cn = classNames.bind(styles);

type FormStatus = "idle" | "loading" | "success" | "error";

const EMAIL_SCHEMA = z.string().email();
const PHONE_SCHEMA = z.string().trim().refine((value) => {
  const digits = value.replace(/\D/g, "");

  return /^\+?[\d\s()./-]+$/.test(value) && digits.length >= 6 && digits.length <= 15;
});

function FormToContent({ props }: { props: FormToRecord }) {
  const { id } = props;
  const [formState, setFormState] = useState({
    contact: "",
    name: "",
    address: "",
    phone: "",
    area: "",
    description: "",
  });

  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");
  const { executeRecaptcha } = useGoogleReCaptcha();
  const isEmailValid = EMAIL_SCHEMA.safeParse(formState.address).success;
  const showEmailError = formState.address.length > 0 && !isEmailValid;
  const isPhoneValid = PHONE_SCHEMA.safeParse(formState.phone).success;
  const showPhoneError = formState.phone.length > 0 && !isPhoneValid;

  // Logica per abilitare il bottone
  const isFormValid = () => {
    const requiredFields = [
      formState.contact,
      formState.name,
      formState.address,
      formState.phone,
      formState.area,
      formState.description,
    ];

    // Controlla che tutti i campi obbligatori siano compilati
    const allFieldsFilled = requiredFields.every(
      (field) => field && field.length > 0
    );

    // Controlla che la descrizione non superi i 300 caratteri
    const descriptionValid = formState.description.length <= 300;

    return allFieldsFilled && isEmailValid && isPhoneValid && descriptionValid;
  };

  const handleSubmit = async () => {
    if (!isFormValid() || !executeRecaptcha) return;

    setStatus("loading");
    setMessage("");

    try {
      // Genera token reCAPTCHA
      const captchaToken = await executeRecaptcha("submit");

      const response = await fetch("/api/territory/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contact: formState.contact,
          name: formState.name,
          address: formState.address,
          phone: formState.phone,
          area: formState.area,
          description: formState.description,
          captcha: captchaToken,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage(data.message);
        // Reset del form
        setFormState({
          contact: "",
          name: "",
          address: "",
          phone: "",
          area: "",
          description: "",
        });
      } else {
        setStatus("error");
        setMessage(data.message || "Errore durante l'invio del form");
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
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    // Limita a 300 caratteri
    if (value.length <= 300) {
      setFormState({
        ...formState,
        description: value,
      });
    }
  };

  // Mostra messaggio di successo
  if (status === "success") {
    return (
      <div className={cn("wrapper", "container-xxl px-md-4 py-5 my-5 mx-auto")}>
        <h2 className="mb-5">Lascia i tuoi dati per essere contattato</h2>
        <div className="row">
          <div className="col-12 col-md-10">
            <div className="alert alert-success" role="alert">
              <h4 className="alert-heading">Messaggio inviato!</h4>
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
      className={cn("wrapper", "container-xxl px-md-4 py-5 my-5 mx-auto")}
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
                <Input
                  id="contact"
                  name="contact"
                  label="Nome referente*"
                  type="text"
                  value={formState.contact}
                  required
                  onChange={(e) => {
                    setFormState({
                      ...formState,
                      contact: e.target.value,
                    });
                  }}
                />
              </Col>
              <Col md="6">
                <Input
                  id="name"
                  name="name"
                  label="Nome ente*"
                  type="text"
                  value={formState.name}
                  required
                  onChange={(e) => {
                    setFormState({
                      ...formState,
                      name: e.target.value,
                    });
                  }}
                />
              </Col>
            </Row>

            <Row className="mt-5">
              <Col md="6">
                <Input
                  id="address"
                  name="address"
                  label="Email*"
                  type="email"
                  value={formState.address}
                  required
                  valid={showEmailError ? false : undefined}
                  validationText={
                    showEmailError
                      ? "Formato email non valido"
                      : undefined
                  }
                  wrapperClassName={cn("field-validation")}
                  aria-invalid={showEmailError}
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
                  label="Contatto telefonico*"
                  type="tel"
                  value={formState.phone}
                  required
                  valid={showPhoneError ? false : undefined}
                  validationText={
                    showPhoneError
                      ? "Formato numero di telefono non valido"
                      : undefined
                  }
                  wrapperClassName={cn("field-validation")}
                  aria-invalid={showPhoneError}
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
                  id="territory-select"
                  label="Territorio*"
                  value={formState.area}
                  required
                  onChange={(value) => {
                    setFormState({
                      ...formState,
                      area: value,
                    });
                  }}
                >
                  <option label="Seleziona un'area locale"></option>
                  <option label="Nord est">nord-est</option>
                  <option label="Lombardia">lombardia</option>
                  <option label="Nord ovest">nord-ovest</option>
                  <option label="Centro">centro</option>
                  <option label="Sud est">sud-est</option>
                  <option label="Sud ovest">sud-ovest</option>
                </Select>
              </Col>
            </Row>

            <Row className="mt-5">
              <Col md="12">
                <TextArea
                  id="description"
                  name="description"
                  label="Note per essere contattati*"
                  rows={3}
                  maxLength={300}
                  value={formState.description}
                  onChange={handleDescriptionChange}
                />
                <div className="d-flex justify-content-between align-items-center mt-2">
                  <p className="text-muted mb-0">
                    300 caratteri a disposizione
                  </p>
                  <p
                    className={`${
                      formState.description.length > 250
                        ? "text-warning"
                        : "text-muted"
                    }`}
                  >
                    {formState.description.length}/300
                  </p>
                </div>
              </Col>
            </Row>

            <p className="text-muted mt-5">
              Cliccando su INVIA dichiaro di aver letto e compreso{" "}
              <Link
                prefetch={false}
                href="https://padigitale2026-gov-it-develop.vercel.app/informativa-privacy"
              >
                l&apos;informativa privacy
              </Link>
            </p>

            <Row className="mt-4">
              <Col sm="auto">
                <Button
                  color="primary"
                  type="submit"
                  disabled={!isFormValid() || status === "loading"}
                  onClick={handleSubmit}
                >
                  {status === "loading" ? "Invio in corso..." : "Invia"}
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  );
}

export function FormTo({ props }: { props: FormToRecord }) {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey="6Ldj-g4eAAAAAN0ee9NiyA28zbF6TD8cjjFxaOX0"
      scriptProps={{
        async: true,
        defer: true,
        appendTo: "body",
      }}
    >
      <FormToContent props={props} />
    </GoogleReCaptchaProvider>
  );
}
