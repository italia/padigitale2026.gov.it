"use client";

import Image from "next/image";
import Link from "next/link";

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
  BackToTop,
} from "design-react-kit";
import type { FooterQuery } from "@/graphql/generated";

export default function Footer({ props }: { props: FooterQuery }) {
  const footerData = props.footer;
  const title = footerData?.title || "";
  const titleColonna1 = footerData?.titleColonna1 || "";
  const titleColonna2 = footerData?.titleColonna2 || "";
  const titleColonna3 = footerData?.titleColonna3 || "";
  const linkUtili = footerData?.linkUtili || [];
  const linkColonna1 = footerData?.linkColonna1 || [];
  const linkColonna2 = footerData?.linkColonna2 || [];
  const linkColonna3 = footerData?.linkColonna3 || [];
  const linkNewsletter = footerData?.linkNewsletter || null;

  return (
    <footer className="it-footer mt-auto">
      <div className="it-footer-top">
        <Container>
          <section>
            <Row className="clearfix">
              <Col sm={12} className="px-0">
                <div className="px-3 py-2 py-lg-4 d-lg-flex align-items-center gap-4">
                  <div className="d-flex align-items-center mt-4 mb-4 mt-lg-2 mb-lg-2 me-4">
                    <Link
                      href="https://commission.europa.eu/index_it"
                      title="Vai al sito della Commissione Europea"
                      className="d-flex align-items-center"
                    >
                      <Image
                        src="/images/logo-eu.svg"
                        alt="Logo Commissione Europea"
                        width={153}
                        height={49}
                      />
                    </Link>
                  </div>

                  <div className="d-flex align-items-center mt-4 mb-4 mt-lg-2 mb-lg-2 me-4">
                    <Link
                      href="https://www.governo.it/"
                      title="Vai al sito del Governo Italiano"
                      className="d-flex align-items-center text-decoration-none"
                    >
                      <Image
                        src="/images/logo-ri.svg"
                        alt="Logo Repubblica Italiana"
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
                    </Link>
                  </div>

                  <div className="d-flex align-items-center mt-4 mb-4 mt-lg-2 mb-lg-2">
                    <Image
                      src="/images/logo-dipartimento.svg"
                      alt="Logo Dipartimento per la trasformazione digitale"
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
                    alt="Logo PA digitale 2026"
                    width={49}
                    height={48}
                    className="me-1"
                  />
                  <div className="it-brand-text ms-2 pt-1">
                    <div
                      className="m-0 h-5 fw-semibold"
                      aria-label={`Logo del footer: ${title}`}
                    >
                      {title}
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </section>
          <section className="px-0 py-4 border-white border-top">
            <Row>
              {linkColonna1.length > 0 && (
                <Col className="pb-2" lg={3} md={6}>
                  <div className="h4">{titleColonna1}</div>
                  <LinkList className="footer-list clearfix">
                    <LinkListItem
                      tag={Link}
                      href="https://padigitale2026--collaudo.sandbox.my.site.com/Pa_digitale2026_avvisi"
                      title={"Vai alla pagina: Avvisi"}
                    >
                      Avvisi
                    </LinkListItem>
                    {linkColonna1.map((link) => (
                      <LinkListItem
                        key={link.id}
                        tag={Link}
                        href={`/${link.slug}` || "#"}
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
                  <div className="h4">{titleColonna2}</div>
                  <LinkList className="footer-list clearfix">
                    {linkColonna2.map((link) => (
                      <LinkListItem
                        key={link.id}
                        tag={Link}
                        href={`/${link.slug}` || "#"}
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
                  <div className="h4">{titleColonna3}</div>
                  <LinkList className="footer-list clearfix">
                    {linkColonna3.map((link) => (
                      <LinkListItem
                        key={link.id}
                        tag={Link}
                        href={`/${link.slug}` || "#"}
                        title={`Vai alla pagina: ${link.title || ""}`}
                      >
                        {link.title}
                      </LinkListItem>
                    ))}
                  </LinkList>
                </Col>
              )}
              {linkNewsletter && (
                <Col className="pb-2 bg-dark bg-transparent" lg={3} md={6}>
                  <div className="d-flex align-items-center gap-2 h4">
                    <Icon color="white" icon="it-mail" />
                    Newsletter
                  </div>
                  <p>Ricevi via email le novità di PA digitale 2026.</p>
                  <Button
                    className="btn-icon"
                    color="primary"
                    outline
                    href={`/${linkNewsletter.slug}` || "#"}
                    title={`Vai alla pagina: ${linkNewsletter.title || ""}`}
                  >
                    <span>Iscriviti</span>
                  </Button>
                </Col>
              )}
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
                <Link href={`/${link.slug}` || "#"} title={link.title || ""}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
          <BackToTop
            ariaLabel={"Clicca qui per tornare in alto"}
            shadow={true}
          />
        </div>
      </div>
    </footer>
  );
}
