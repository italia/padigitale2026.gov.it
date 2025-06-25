// import { FormToRecord } from "@/graphql/generated";

import Link from "next/link";
import { Button, Input, Select, TextArea } from "design-react-kit";
import { Row } from "design-react-kit";
import { Col } from "design-react-kit";

import classNames from "classnames/bind";
import styles from "./index.module.scss";
const cn = classNames.bind(styles);

export function FormTo() {
  const handleSubmit = async () => {};

  return (
    <div className={cn("wrapper", "container-xxl py-5 my-5 mx-auto")}>
      <h2 className="mb-5">Lascia i tuoi dati per essere contattato</h2>
      <div className="row">
        <div className="col-10">
          <p className="text-muted">I campi con asterisco sono obbligatori</p>

          <Row className="mt-5">
            <Col md="6">
              <Input
                id="contact"
                name="contact"
                label="Nome referente*"
                type="text"
                value=""
                required
                // validationText="Inserisci il nome del referente"
                onChange={() => {}}
              />
            </Col>
            <Col md="6">
              <Input
                id="name"
                name="name"
                label="Nome ente*"
                type="text"
                value=""
                required
                // validationText="Inserisci il nome dell'ente"
                onChange={() => {}}
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
                value=""
                required
                // validationText="Inserisci un'email valida"
                onChange={() => {}}
              />
            </Col>
            <Col md="6">
              <Input
                id="phone"
                name="phone"
                label="Contatto telefonico*"
                type="text"
                value=""
                required
                // validationText="Inserisci un numero di telefono valido"
                onChange={() => {}}
              />
            </Col>
          </Row>

          <Row className="mt-5">
            <Col md="6">
              <Select
                id="territory-select"
                label="Territorio*"
                value=""
                required
                onChange={() => {}}
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
              />
            </Col>
          </Row>

          <p className="text-muted mt-5">
            Cliccando su INVIA dichiaro di aver letto e compreso{" "}
            <Link href="/privacy-policy">l&apos;informativa privacy</Link>
          </p>

          <Row className="mt-4">
            <Col sm="auto">
              <Button
                color="primary"
                type="submit"
                disabled={true}
                onClick={handleSubmit}
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
