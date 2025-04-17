"use client";

import Image from "next/image";

import {
  Container,
  Button,
  // Form,
  // Input,
  // Label,
  Row,
  Col,
  Icon,
  LinkList,
  LinkListItem,
} from "design-react-kit";
import type { FooterQuery } from "@/graphql/generated";

export default function Footer({ props }: { props: FooterQuery }) {
  const footerData = props.footer;
  const title = footerData?.title || "";
  const linkUtili = footerData?.linkUtili || [];
  const linkColonna1 = footerData?.linkColonna1 || [];
  const linkColonna2 = footerData?.linkColonna2 || [];
  const linkColonna3 = footerData?.linkColonna3 || [];

  return (
    <footer className="it-footer">
      <div className="it-footer-top">
        <Container>
          <section>
            <Row className="clearfix">
              <Col sm={12} className="px-0">
                <div className="px-3 py-2 py-lg-4 d-lg-flex align-items-center gap-4">
                  <div className="d-flex align-items-center mt-4 mb-4 mt-lg-2 mb-lg-2 me-4">
                    <Image
                      src="/images/logo-eu.svg"
                      alt="Logo"
                      width={153}
                      height={49}
                    />
                  </div>

                  <div className="d-flex align-items-center mt-4 mb-4 mt-lg-2 mb-lg-2 me-4">
                    <Image
                      src="/images/logo-ri.svg"
                      alt="Logo"
                      width={36}
                      height={41}
                      className="me-1"
                    />
                    <div className="it-brand-text ms-1 lh-1">
                      <small
                        className="text-primary d-block"
                        style={{ fontSize: "0.75rem", minWidth: "181px" }}
                      >
                        Governo Italiano
                        <br />
                        Presidenza del Consiglio dei Ministri
                      </small>
                    </div>
                  </div>

                  <div className="d-flex align-items-center mt-4 mb-4 mt-lg-2 mb-lg-2">
                    <Image
                      src="/images/logo-dipartimento.svg"
                      alt="Logo"
                      width={217}
                      height={41}
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </section>
        </Container>
      </div>
      <div className="it-footer-main">
        <Container>
          <section>
            <Row className="clearfix">
              <Col sm={12} className="px-0">
                <div className="it-brand-wrapper d-flex align-items-center">
                  {/* <Icon icon="it-pa" /> */}
                  <Image
                    src="/images/site-logo_white.svg"
                    alt="Logo"
                    width={49}
                    height={48}
                    className="me-1"
                  />
                  <div className="it-brand-text ms-2 pt-1">
                    <h4
                      style={{ fontSize: "1.25rem", textTransform: "none" }}
                      className="m-0"
                    >
                      {title}
                    </h4>
                  </div>
                </div>
              </Col>
            </Row>
          </section>
          <section className="px-0 py-4 border-white border-top">
            <Row>
              {linkColonna1.length > 0 && (
                <Col className="pb-2" lg={3} md={6}>
                  <h4>ESPLORA</h4>
                  <LinkList className="footer-list clearfix">
                    {linkColonna1.map((link) => (
                      <LinkListItem
                        key={link.id}
                        href={link.slug || "#"}
                        title={`Vai alla pagina: ${link.title || ""}`}
                      >
                        {link.title}
                      </LinkListItem>
                    ))}
                  </LinkList>
                </Col>
              )}
              {linkColonna2.length > 0 && (
                <Col className="pb-2" lg={3} md={6}>
                  <h4>SUPPORTO</h4>
                  <LinkList className="footer-list clearfix">
                    {linkColonna2.map((link) => (
                      <LinkListItem
                        key={link.id}
                        href={link.slug || "#"}
                        title={`Vai alla pagina: ${link.title || ""}`}
                      >
                        {link.title}
                      </LinkListItem>
                    ))}
                  </LinkList>
                </Col>
              )}
              {linkColonna3.length > 0 && (
                <Col className="pb-2" lg={3} md={6}>
                  <h4>APPROFONDISCI</h4>
                  <LinkList className="footer-list clearfix">
                    {linkColonna3.map((link) => (
                      <LinkListItem
                        key={link.id}
                        href={link.slug || "#"}
                        title={`Vai alla pagina: ${link.title || ""}`}
                      >
                        {link.title}
                      </LinkListItem>
                    ))}
                  </LinkList>
                </Col>
              )}
              <Col className="pb-2 bg-dark bg-transparent" lg={3} md={6}>
                <h4 className="d-flex align-items-center gap-2">
                  <Icon color="white" icon="it-mail" />
                  Newsletter
                </h4>
                <p>Ricevi via email le novità di PA digitale 2026.</p>
                <Button className="btn-icon" color="primary" outline>
                  <span>Iscriviti</span>
                </Button>
              </Col>
            </Row>
          </section>
        </Container>
      </div>
      <div className="it-footer-small-prints clearfix">
        <div className="container">
          <h3 className="visually-hidden">Sezione Link Utili</h3>
          <ul className="it-footer-small-prints-list list-inline px-0 mb-0 d-flex flex-column flex-md-row">
            {linkUtili.map((link) => (
              <li key={link.id} className="list-inline-item">
                <a href={link.slug || "#"} title={link.title || ""}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
