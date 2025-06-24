// import { FormNewsletterRecord } from "@/graphql/generated";

import Link from "next/link";
import { Button, Input, Select } from "design-react-kit";
import { Row } from "design-react-kit";
import { Col } from "design-react-kit";
import { useState } from "react";

import classNames from "classnames/bind";
import styles from "./index.module.scss";
const cn = classNames.bind(styles);

type FormStatus = "idle" | "loading" | "success" | "error";

export function FormNewsletter() {
  const [formState, setFormState] = useState({
    email: "",
    rappresento: "",
    tipoEnte: "",
    nomeStruttura: "",
    inQuanto: "",
    // Campi condizionali
    showTipoEnte: false,
    showNomeStruttura: false,
  });

  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  const shouldShowTipoEnte =
    formState.rappresento === "pubblica-amministrazione";
  const shouldShowNomeStruttura = formState.rappresento === "altro";

  // Logica per abilitare il bottone
  const isFormValid = () => {
    const requiredFields = [
      formState.email,
      formState.rappresento,
      formState.nomeStruttura,
    ];

    // Aggiungi campi condizionali se visibili
    if (shouldShowNomeStruttura) {
      requiredFields.push(formState.tipoEnte);
    }
    if (shouldShowTipoEnte) {
      requiredFields.push(formState.inQuanto);
    }

    return requiredFields.every((field) => field && field.length > 0);
  };

  const handleSubmit = async () => {
    if (!isFormValid()) return;

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formState.email,
          rappresento: formState.rappresento,
          tipoEnte: formState.tipoEnte,
          nomeStruttura: formState.nomeStruttura,
          inQuanto: formState.inQuanto,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage(data.message);
        // Reset del form
        setFormState({
          email: "",
          rappresento: "",
          tipoEnte: "",
          nomeStruttura: "",
          inQuanto: "",
          showTipoEnte: false,
          showNomeStruttura: false,
        });
      } else {
        setStatus("error");
        setMessage(data.message || "Errore durante l'invio del form");
      }
    } catch {
      setStatus("error");
      setMessage("Errore di connessione. Riprova più tardi.");
    }
  };

  const resetForm = () => {
    setStatus("idle");
    setMessage("");
  };

  // Mostra messaggio di successo
  if (status === "success") {
    return (
      <div className={cn("wrapper", "container-xxl py-5 my-5 mx-auto")}>
        <div className="row">
          <div className="col-10">
            <div className="alert alert-success" role="alert">
              <h4 className="alert-heading">Iscrizione completata!</h4>
              <p>{message}</p>
              <hr />
              <Button color="primary" onClick={resetForm}>
                Iscrivere un&apos;altra email
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("wrapper", "container-xxl py-5 my-5 mx-auto")}>
      <div className="row">
        <div className="col-10">
          <p className="text-muted">I campi con asterisco sono obbligatori</p>

          {status === "error" && (
            <div className="alert alert-danger mt-3" role="alert">
              {message}
            </div>
          )}

          <Row className="mt-5">
            <Col md="6">
              <Input
                id="inputEmail"
                label="Email*"
                type="email"
                value={formState.email}
                onChange={(e) => {
                  setFormState({
                    ...formState,
                    email: e.target.value,
                  });
                }}
              />
            </Col>
            <Col md="6">
              <Select
                id="selectRepresent"
                label="Rappresento*"
                value={formState.rappresento}
                onChange={(value) => {
                  setFormState({
                    ...formState,
                    rappresento: value,
                  });
                }}
              >
                <option label="Scegli una voce dall'elenco"></option>
                <option label="Pubblica amministrazione">
                  pubblica-amministrazione
                </option>
                <option label="Fornitore IT">fornitore-it</option>
                <option label="Altro">altro</option>
              </Select>
            </Col>
          </Row>
          {shouldShowNomeStruttura && (
            <Row className="mt-5">
              <Input
                id="inputEnte"
                label="Tipo di ente/struttura*"
                type="text"
                value={formState.tipoEnte}
                onChange={(e) => {
                  setFormState({
                    ...formState,
                    tipoEnte: e.target.value,
                  });
                }}
              />
            </Row>
          )}
          <Row className="mt-5">
            <Input
              id="inputName"
              label="Nome struttura*"
              type="text"
              value={formState.nomeStruttura}
              onChange={(e) => {
                setFormState({
                  ...formState,
                  nomeStruttura: e.target.value,
                });
              }}
            />
          </Row>

          {shouldShowTipoEnte && (
            <Row className="mt-5">
              <Select
                id="selectEnte"
                label="In quanto*"
                value={formState.inQuanto}
                onChange={(value) => {
                  setFormState({
                    ...formState,
                    inQuanto: value,
                    showTipoEnte: true,
                  });
                }}
              >
                <option label="Scegli una voce dall'elenco"></option>
                <option label="Dirigente dell'amministrazione">
                  dirigente-dell-amministrazione
                </option>
                <option label="Dirigente sistemi IT dell'amministrazione">
                  dirigente-sistemi-it-dell-amministrazione
                </option>
                <option label="Dipendente dell'amministrazione">
                  dipendente-dell-amministrazione
                </option>
                <option label="Altro">altro</option>
              </Select>
            </Row>
          )}

          <p className="text-muted mt-5">
            Cliccando su INVIA dichiaro di aver letto e compreso{" "}
            <Link href="/privacy-policy">l&apos;informativa privacy</Link>
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
        </div>
      </div>
    </div>
  );
}
