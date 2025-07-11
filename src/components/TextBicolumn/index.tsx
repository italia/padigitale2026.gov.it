import { TextBicolumnRecord } from "@/graphql/generated";
import { Section, Row, Col, Container } from "design-react-kit";

import styles from "./index.module.scss";
import classNames from "classnames/bind";
const cn = classNames.bind(styles);

export function TextBicolumn({ props }: { props: TextBicolumnRecord }) {
  const { id } = props;
  return (
    <Section style={{ backgroundColor: "#F2F7FC" }}>
      <Container className={cn("wrapper")}>
        <Row className="mb-5">
          <Col>
            <h2 id={id} className="mb-3">
              I benefici per le PA
            </h2>
          </Col>
        </Row>
        <Row>
          <Col className="pe-0 pe-md-3 mb-md-3" md="6">
            <h4>Finanziamenti pertinenti</h4>
            <p>
              Grazie a un profilo dedicato, le PA possono trovare gli avvisi di
              finanziamento rivolti alla propria tipologia di amministrazione,
              in modo semplice, veloce e chiaro.
            </p>
          </Col>
          <Col className="pe-0 pe-md-3 mb-md-3" md="6">
            <h4>Risorse progettuali a disposizione</h4>
            <p>
              Sul sito di PA digitale 2026, sono disponibili guide,
              presentazioni e registrazioni di webinar per aiutare le PA a
              candidarsi, gestire i progetti e orientarsi nella normativa
              ufficiale.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="pe-0 pe-md-3 mb-md-3" md="6">
            <h4>Tutto in un unico posto</h4>
            <p>
              Tramite area riservata, le PA possono facilmente gestire le
              singole iniziative finanziate, produrre i dati relativi
              all’avanzamento dei progetti e ricevere comunicazioni
              personalizzate.
            </p>
          </Col>
          <Col className="pe-0 pe-md-3 mb-md-3" md="6">
            <h4>Contatto diretto con il supporto</h4>
            <p>
              Oltre al team help desk per supporto su specifiche candidature,
              ogni PA ha un referente diretto sul territorio a cui chiedere
              consulenza per trovare le opportunità più adatte.
            </p>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}
