import { ResponsiveImageType, SRCImage } from "react-datocms";
import { ImageTextColumnRecord } from "@/graphql/generated";
import { Section, Row, Col, Container } from "design-react-kit";

import styles from "./index.module.scss";
import classNames from "classnames/bind";
const cn = classNames.bind(styles);

export function ImageTextColumn({ props }: { props: ImageTextColumnRecord }) {
  const { id, title, image } = props;
  return (
    <Section aria-labelledby={id} className={cn("")} color="muted">
      <Container>
        <Row className="mb-3">
          <Col xs="12">
            <h2 id={id}>{title}</h2>
          </Col>
        </Row>
        <Row>
          {image && (
            <Col className="pe-0 pe-md-5 mb-3" lg="6" xs="12">
              <SRCImage data={image.responsiveImage as ResponsiveImageType} />
            </Col>
          )}
          <Col className="pe-0 pe-md-5 mb-3" lg="3" xs="12">
            <h4>Accesso semplificato alle opportunità</h4>
            <p>
              Tutti gli avvisi di finanziamento vengono pubblicati sul sito di
              PA digitale 2026 e via newsletter. Grazie a un processo guidato e
              standardizzato, le PA possono candidarsi facilmente online.
            </p>
            <h4>Monitoraggio di progetti e obiettivi</h4>
            <p>
              La piattaforma effettua automaticamente i controlli di
              ammissibilità, riducendo i tempi di risposta e la pubblicazione
              delle candidature ammesse.
            </p>
          </Col>
          <Col className="pe-0 pe-md-5 mb-3" lg="3" xs="12">
            <h4>Gestione di candidature e finanziamenti</h4>
            <p>
              La piattaforma raccoglie e monitora i dati sull’avanzamento e il
              completamento dei progetti, condividendole con le PA e presentando
              storie di successo.
            </p>
            <h4>Assistenza dedicata</h4>
            <p>
              Risorse online e team dedicati offrono supporto e consulenza alle
              PA in tutte le fasi di un progetto, dalla candidatura
              all’erogazione dei fondi.
            </p>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}
