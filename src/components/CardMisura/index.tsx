import { CardMisuraRecord } from "@/graphql/generated";
import { Icon } from "design-react-kit";
import Link from "next/link";

import styles from "./index.module.scss";
import classNames from "classnames/bind";
const cn = classNames.bind(styles);

// const getButtonHref = (button: CardMisuraRecord["button"]) => {
//   // href link > cms page
//   if (button?.href) {
//     return `${button.href}`;
//   }
//   if (button?.cmsPage?.slug) {
//     return `/${button.cmsPage.slug}`;
//   }
//   return "";
// };

// const getButtonTitle = (button: CardMisuraRecord["button"]) => {
//   // href link > cms page
//   if (button?.href) {
//     return button.text || "";
//   }
//   if (button?.cmsPage?.title) {
//     return `Vai alla pagina ${button.cmsPage.title}`;
//   }
//   return "";
// };

export function CardMisura({ props }: { props: CardMisuraRecord }) {
  const {
    misura,
    entiBeneficiari,
    entePromotore,
    risorseInEuro,
    descrizione,
    plateaPotenziale,
    aggiornamenti,
    link,
    button,
  } = props;
  return (
    <div className={cn("border rounded-2 mb-4")}>
      <div className="p-4">
        <div className="row">
          {/* Colonna principale sinistra */}
          <div className="col-lg-8 border-end-lg">
            {/* Header con titolo */}
            <div className="mb-4">
              {misura?.label && <h2 className="h3 mb-3">{misura?.label}</h2>}

              {/* Sezione risorse */}
              {risorseInEuro && (
                <div>
                  <small
                    className="text-muted text-uppercase fw-bold"
                    style={{ fontSize: "12px" }}
                  >
                    RISORSE A DISPOSIZIONE
                  </small>
                  <div className="h4 mb-0">{risorseInEuro}</div>
                  {link && (
                    <Link
                      prefetch={false}
                      href={link.href || ""}
                      target={link.target || "_self"}
                      title={link.text || ""}
                      className="text-primary text-decoration-none d-inline-flex align-items-center fw-semibold"
                      style={{ fontSize: "0.875rem" }}
                    >
                      {link.text || ""}
                      {link.icon && (
                        <Icon
                          icon={link.icon || ""}
                          size="sm"
                          color="primary"
                          className="ms-2"
                        />
                      )}
                    </Link>
                  )}
                </div>
              )}
            </div>

            {/* Descrizione */}
            {descrizione && (
              <div className="mb-4">
                <p
                  className="text-muted mb-0 pe-4"
                  style={{ fontSize: "1rem" }}
                >
                  {descrizione}
                </p>
              </div>
            )}

            {/* Informazioni strutturate */}
            <div className="row">
              {plateaPotenziale && (
                <div className="col-md-6 mb-4">
                  <small
                    className="text-muted text-uppercase fw-bold d-block"
                    style={{ fontSize: "12px" }}
                  >
                    PLATEA POTENZIALE
                  </small>
                  <div className="h6 mb-0" style={{ fontSize: "1rem" }}>
                    {plateaPotenziale}
                  </div>
                </div>
              )}

              {entePromotore?.label && (
                <div className="col-md-6 mb-4">
                  <small
                    className="text-muted text-uppercase fw-bold d-block"
                    style={{ fontSize: "12px" }}
                  >
                    ENTE PROMOTORE
                  </small>
                  <div className="h6 mb-0" style={{ fontSize: "1rem" }}>
                    <span>{entePromotore?.label}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Sezione aggiornamenti */}
            {aggiornamenti && (
              <div className="mb-4 mb-lg-0">
                <small
                  className="text-muted text-uppercase fw-bold d-block"
                  style={{ fontSize: "12px" }}
                >
                  AGGIORNAMENTI
                </small>
                <p
                  className="text-muted mb-0 pe-4"
                  style={{ fontSize: "1rem" }}
                >
                  {aggiornamenti}
                </p>
              </div>
            )}
          </div>

          {/* Colonna destra con beneficiari */}
          <div className="col-lg-4">
            <div className="p-lg-4 d-flex flex-column gap-5">
              {entiBeneficiari && entiBeneficiari.length > 0 && (
                <div>
                  <small
                    className="text-muted text-uppercase fw-bold d-block"
                    style={{ fontSize: "12px" }}
                  >
                    BENEFICIARI
                  </small>
                  <p className="fw-semibold h6 mb-0">
                    {entiBeneficiari.map((ente, idx) => (
                      <span key={idx}>
                        {ente.label}
                        {idx < entiBeneficiari.length - 1 && ", "}
                      </span>
                    ))}
                  </p>
                </div>
              )}

              {button && (
                <div>
                  <Link
                    prefetch={false}
                    className="btn btn-sm btn-outline-primary"
                    href={button.href || ""}
                    target={button.target || "_self"}
                    title={button.text || ""}
                  >
                    {button.text || ""}
                    {button.icon && (
                      <Icon
                        icon={button.icon || ""}
                        size="sm"
                        color="primary"
                        className="ms-2"
                      />
                    )}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
