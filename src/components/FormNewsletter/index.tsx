// import { FormNewsletterRecord } from "@/graphql/generated";

import styles from "./index.module.scss";
import classNames from "classnames/bind";
import { Button, Input, Select } from "design-react-kit";
import { Row } from "design-react-kit";
import { Col } from "design-react-kit";
const cn = classNames.bind(styles);

export function FormNewsletter() {
  return (
    <div className={cn("wrapper", "p-0")}>
      <div className={cn("container-xxl py-4 my-4 mx-auto border")}>
        <div className="row">
          <div className="col-12">
            <p className="text-muted">I campi con asterisco sono obbligatori</p>
            <Row>
              <Input
                id="inputEmail"
                label="Email"
                placeholder="Inserisci la tua email"
                type="email"
                wrapperClassName="col"
              />
              <Col md="4">
                <Select
                  id="selectExampleClassic"
                  label="Provincia"
                  onChange={() => {}}
                >
                  <option label="Opzione 1">Value 1</option>
                  <option label="Opzione 2">Value 2</option>
                  <option label="Opzione 3">Value 3</option>
                  <option label="Opzione 4">Value 4</option>
                  <option label="Opzione 5">Value 5</option>
                </Select>
              </Col>
            </Row>

            <Row>
              {/* <Col sm="auto">
                <Button color="primary" outline>
                  Annulla
                </Button>
              </Col> */}
              <Col sm="auto">
                <Button color="primary" type="submit">
                  Invia
                </Button>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}
