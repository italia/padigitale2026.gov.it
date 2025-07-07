import { ResponsiveImageType, SRCImage } from "react-datocms";
import { ImageTextColumnRecord } from "@/graphql/generated";
import { Section, Row, Col, Container } from "design-react-kit";

import styles from "./index.module.scss";
import classNames from "classnames/bind";
const cn = classNames.bind(styles);

export function ImageTextColumn({ props }: { props: ImageTextColumnRecord }) {
  const { id, title, image } = props;
  return (
    <Section
      aria-labelledby={id}
      className={cn("")}
      style={{ backgroundColor: "#F2F7FC" }}
    >
      <Container>
        <Row className="mb-5">
          <Col>
            <h2 id={id} className="mb-0">
              {title}
            </h2>
          </Col>
        </Row>
        <Row>
          <Col className="pe-0 pe-md-3 mb-0" lg="6">
            <Row>
              <Col md="6">
                <h4>Accesso semplificato alle opportunità</h4>
                <p>
                  Tutti gli avvisi di finanziamento vengono pubblicati sul sito
                  di PA digitale 2026 e via newsletter. Grazie a un processo
                  guidato e standardizzato, le PA possono candidarsi facilmente
                  online.
                </p>
              </Col>
              <Col md="6">
                <h4>Monitoraggio di progetti e obiettivi</h4>
                <p>
                  La piattaforma effettua automaticamente i controlli di
                  ammissibilità, riducendo i tempi di risposta e la
                  pubblicazione delle candidature ammesse.
                </p>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <h4>Gestione di candidature e finanziamenti</h4>
                <p>
                  La piattaforma raccoglie e monitora i dati sull’avanzamento e
                  il completamento dei progetti, condividendole con le PA e
                  presentando storie di successo.
                </p>
              </Col>
              <Col md="6">
                <h4>Assistenza dedicata</h4>
                <p>
                  Risorse online e team dedicati offrono supporto e consulenza
                  alle PA in tutte le fasi di un progetto, dalla candidatura
                  all’erogazione dei fondi.
                </p>
              </Col>
            </Row>
          </Col>
          {image && (
            <Col className="pe-0 pe-md-3 mb-5 mb-lg-0 text-center" lg="6">
              <SRCImage data={image.responsiveImage as ResponsiveImageType} />
            </Col>
          )}
        </Row>
      </Container>
    </Section>
  );
}
