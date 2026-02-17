import { TimelineRecord } from "@/graphql/generated";
import {
  Section,
  Row,
  Col,
  Container,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Timeline as TimelineKit,
  TimelinePin,
} from "design-react-kit";

import styles from "./index.module.scss";
import classNames from "classnames/bind";
const cn = classNames.bind(styles);

export function Timeline({ props }: { props: TimelineRecord }) {
  const { id } = props;
  return (
    <Section className={cn("")}>
      <Container>
        <Row className="mb-5">
          <Col>
            <h2 id={id} className="mb-3">
              Le evoluzioni di PA digitale
            </h2>
          </Col>
        </Row>
        <Row>
          <div>
            <TimelineKit>
              <Row>
                <Col xs="12">
                  <TimelinePin
                    iconTitle="Segnaposto"
                    label="novembre 2021"
                    past
                  >
                    <Card>
                      <CardBody>
                        <CardTitle className="h5" tag="h4">
                          LANCIO DI PA DIGITALE 2026
                        </CardTitle>
                        <CardText>
                          Inizia il percorso di accompagnamento per aiutare le
                          PA a conoscere le grandi opportunità del digitale
                          previste dal PNRR.
                        </CardText>
                      </CardBody>
                    </Card>
                  </TimelinePin>
                </Col>
                <Col xs="12">
                  <TimelinePin iconTitle="Segnaposto" label="aprile 2022" past>
                    <Card>
                      <CardBody>
                        <CardTitle className="h5" tag="h4">
                          PUBBLICATI I PRIMI AVVISI
                        </CardTitle>
                        <CardText>
                          Su PA digitale 2026, le PA possono candidarsi per
                          accedere ai finanziamenti del PNRR gestiti dal
                          Dipartimento per la trasformazione digitale.
                        </CardText>
                      </CardBody>
                    </Card>
                  </TimelinePin>
                </Col>
                <Col xs="12">
                  <TimelinePin iconTitle="Segnaposto" label="luglio 2024" past>
                    <Card>
                      <CardBody>
                        <CardTitle className="h5" tag="h4">
                          PUBBLICATI I PRIMI AVVISI DEL DIPARTIMENTO DELLA
                          FUNZIONE PUBBLICA
                        </CardTitle>
                        <CardText>
                          Le PA possono candidarsi anche agli avvisi di
                          finanziamento per la transizione digitale gestiti dal
                          Dipartimento della funzione pubblica.
                        </CardText>
                      </CardBody>
                    </Card>
                  </TimelinePin>
                </Col>
                <Col xs="12">
                  <TimelinePin
                    iconTitle="Segnaposto"
                    label="luglio 2025"
                    now
                    nowText="Oggi"
                  >
                    <Card>
                      <CardBody>
                        <CardTitle className="h5" tag="h4">
                          RIPROGETTATO IL SITO DI PA DIGITALE 2026
                        </CardTitle>
                        <CardText>
                          Dopo un percorso di progettazione partecipata, il sito
                          di PA digitale 2026 è stato riprogettato per essere
                          più utile, facile da usare e accessibile per tutte le
                          persone.
                        </CardText>
                      </CardBody>
                    </Card>
                  </TimelinePin>
                </Col>
              </Row>
            </TimelineKit>
          </div>
        </Row>
      </Container>
    </Section>
  );
}
