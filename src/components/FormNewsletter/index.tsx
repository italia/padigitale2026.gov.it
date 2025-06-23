// import { FormNewsletterRecord } from "@/graphql/generated";

import Link from "next/link";
import { Button, Input, Select } from "design-react-kit";
import { Row } from "design-react-kit";
import { Col } from "design-react-kit";
import { useState } from "react";

import classNames from "classnames/bind";
import styles from "./index.module.scss";
const cn = classNames.bind(styles);

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

    console.log("requiredFields", requiredFields);
    return requiredFields.every((field) => field && field.length > 0);
  };

  return (
    <div className={cn("wrapper", "container-xxl py-5 my-5 mx-auto")}>
      <div className="row">
        <div className="col-10">
          <p className="text-muted">I campi con asterisco sono obbligatori</p>

          <Row className="mt-5">
            <Col md="6">
              <Input
                id="inputEmail"
                label="Email*"
                type="email"
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
                onChange={(value) => {
                  console.log("value", value);
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
            {/* <Col sm="auto">
                <Button color="primary" outline>
                  Annulla
                </Button>
              </Col> */}
            <Col sm="auto">
              <Button
                color="primary"
                type="submit"
                disabled={!isFormValid()}
                onClick={() => {
                  console.log("formState", formState);
                }}
              >
                Invia
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
