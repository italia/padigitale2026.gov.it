"use client";

import { FormValutazioneRecord } from "@/graphql/generated";
import { useState } from "react";
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

export function FormValutazione({ props }: { props: FormValutazioneRecord }) {
  const { id } = props;
  const [isOpen, toggleModal] = useState<boolean>(false);
  const [isUseful, setIsUseful] = useState<boolean | null>(null);
  const [commento, setCommento] = useState<string>("");

  const handleCommentoChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    // Limita a 500 caratteri
    if (value.length <= 500) {
      setCommento(value);
    }
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
          <Button color="primary" onClick={() => toggleModal(!isOpen)}>
            Invia
          </Button>
        </ModalFooter>
      </Modal>
    </Section>
  );
}
