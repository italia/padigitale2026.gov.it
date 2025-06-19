// import { FormNewsletterRecord } from "@/graphql/generated";

import Link from "next/link";
import { Button, Input, Select } from "design-react-kit";
import { Row } from "design-react-kit";
import { Col } from "design-react-kit";

import classNames from "classnames/bind";
import styles from "./index.module.scss";
const cn = classNames.bind(styles);

export function FormNewsletter() {
  return (
    <div className={cn("wrapper", "container-xxl py-5 my-5 mx-auto")}>
      <div className="row">
        <div className="col-10">
          <p className="text-muted">I campi con asterisco sono obbligatori</p>

          <Row className="mt-5">
            <Col md="6">
              <Input id="inputEmail" label="Email*" type="email" />
            </Col>
            <Col md="6">
              <Select
                id="selectRepresent"
                label="Rappresento*"
                onChange={() => {}}
              >
                <option label="Scegli una voce dall'elenco">
                  Scegli una voce dall&apos;elenco
                </option>
                <option label="Pubblica amministrazione">
                  Pubblica amministrazione
                </option>
                <option label="Fornitore IT">Fornitore IT</option>
                <option label="Altro">Altro</option>
              </Select>
            </Col>
          </Row>
          <Row className="mt-5">
            <Input id="inputEnte" label="Tipo di ente/struttura*" type="text" />
          </Row>
          <Row className="mt-5">
            <Input id="inputName" label="Nome struttura*" type="text" />
          </Row>
          <Row className="mt-5">
            <Select id="selectEnte" label="In quanto*" onChange={() => {}}>
              <option label="Scegli una voce dall'elenco">
                Scegli una voce dall&apos;elenco
              </option>
              <option label="Dirigente dell'amministrazione">
                Dirigente dell&apos;amministrazione
              </option>
              <option label="Dirigente sistemi IT dell'amministrazione">
                Dirigente sistemi IT dell&apos;amministrazione
              </option>
              <option label="Dipendente dell'amministrazione">
                Dipendente dell&apos;amministrazione
              </option>
              <option label="Altro">Altro</option>
            </Select>
          </Row>

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
              <Button color="primary" type="submit" disabled={true}>
                Invia
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
