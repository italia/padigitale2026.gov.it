import { TextColumnRecord } from "@/graphql/generated";
import { Section, Row, Col, Container } from "design-react-kit";

import styles from "./index.module.scss";
import classNames from "classnames/bind";
const cn = classNames.bind(styles);

export function TextColumn({ props }: { props: TextColumnRecord }) {
  const { id } = props;
  return (
    <Section className={cn("")}>
      <Container>
        <Row className="mb-5">
          <Col>
            <h2 id={id} className="mb-3">
              Nuova modalità di accesso a <i>lump sum</i>
            </h2>
            <p className="mb-0">
              PA digitale 2026 semplifica la richiesta di finanziamenti e riduce
              gli oneri amministrativi.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="pe-0 pe-md-3 mb-md-3 position-relative" md="6" lg="3">
            <h4>Unica registrazione</h4>
            <p>
              Le amministrazioni possono accedere con un’unica registrazione a
              più avvisi e gestire in area riservata le singole iniziative
              finanziate, produrre i dati relativi all’avanzamento dei progetti
              e ricevere comunicazioni personalizzate.
            </p>
            <hr
              style={{ position: "absolute", bottom: "-128px", width: "90%" }}
            />
          </Col>
          <Col className="pe-0 pe-md-3 mb-md-3 position-relative" md="6" lg="3">
            <h4>Selezione dei servizi</h4>
            <p>
              Ogni PA può selezionare i servizi di interesse e comporre il
              proprio progetto, scegliendo da soluzioni standard con valore
              economico predefinito. Non sarà necessario scrivere e presentare
              progetti per ricevere finanziamenti.
            </p>
            <hr
              style={{ position: "absolute", bottom: "-128px", width: "90%" }}
            />
          </Col>
          <Col className="pe-0 pe-md-3 mb-md-3 position-relative" md="6" lg="3">
            <h4>Ingaggio dei fornitori</h4>
            <p>
              Le PA possono scegliere i propri fornitori direttamente in area
              riservata, avvalendosi anche di fornitori certificati Consip.
            </p>
            <hr
              style={{ position: "absolute", bottom: "-128px", width: "90%" }}
            />
          </Col>
          <Col className="pe-0 pe-md-3 mb-md-3 position-relative" md="6" lg="3">
            <h4>Erogazione delle risorse semplificata</h4>
            <p>
              I contributi sono riconosciuti sulla base del raggiungimento di
              specifici obiettivi predefiniti. Non è necessario rendicontare le
              singole spese effettuate per ottenere i fondi.
            </p>
            <hr
              style={{ position: "absolute", bottom: "-128px", width: "90%" }}
            />
          </Col>
        </Row>
      </Container>
    </Section>
  );
}
