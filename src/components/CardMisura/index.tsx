import { CardMisuraRecord } from "@/graphql/generated";
// import { Icon } from "design-react-kit";
// import Link from "next/link";

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
  const { title } = props;
  console.log("props", props);
  return (
    <div className={cn("p-0")}>
      <div className={cn("container-xxl")}>
        {/* Body */}
        <div className="row h-100 py-4">
          {title && <h2 className={"col-12 mb-3 fs-2 lh-sm"}>{title}</h2>}
        </div>

        <div className="card border-primary">
          <div className="card-body p-4">
            <div className="row">
              {/* Colonna principale sinistra */}
              <div className="col-lg-8">
                {/* Header con titolo */}
                <div className="mb-4">
                  <h3 className="card-title h4 mb-3">
                    {/* {props.numero} {props.titolo} */}
                    titolo
                  </h3>

                  {/* Sezione risorse */}
                  <div className="mb-3">
                    <small className="text-muted text-uppercase fw-bold">
                      RISORSE A DISPOSIZIONE
                    </small>
                    <div className="h2 text-primary mb-2">
                      {/* {props.risorse} */}
                      asd
                    </div>
                    <a
                      href="#"
                      className="text-primary text-decoration-none d-inline-flex align-items-center"
                    >
                      Scopri come vengono utilizzate le risorse
                      <svg
                        className="ms-2"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                      >
                        <path d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.44 8.5H2.75a.75.75 0 0 1 0-1.5h8.69L8.22 4.03a.75.75 0 0 1 0-1.06z" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Descrizione */}
                <div className="mb-4">
                  <p className="text-muted mb-0">
                    {/* {props.descrizione} */}
                    descrizione
                  </p>
                </div>

                {/* Informazioni strutturate */}
                <div className="row mb-4">
                  <div className="col-md-6">
                    <small className="text-muted text-uppercase fw-bold d-block mb-2">
                      PLATEA POTENZIALE
                    </small>
                    <div className="h5 mb-0">
                      {/* {props.plateaPotenziale} */}
                      platea potenziale
                    </div>
                  </div>
                  <div className="col-md-6">
                    <small className="text-muted text-uppercase fw-bold d-block mb-2">
                      ENTE PROMOTORE
                    </small>
                    <div className="h6 mb-0">
                      {/* {props.entePromotore} */}
                      ente promotore
                    </div>
                  </div>
                </div>

                {/* Sezione aggiornamenti */}
                <div>
                  <small className="text-muted text-uppercase fw-bold d-block mb-2">
                    AGGIORNAMENTI
                  </small>
                  <p
                    className="text-muted mb-0"
                    style={{ fontSize: "0.95rem" }}
                  >
                    {/* {props.aggiornamenti} */}
                    aggiornamenti
                  </p>
                </div>
              </div>

              {/* Colonna destra con beneficiari */}
              <div className="col-lg-4">
                <div className="bg-light p-4 h-100 d-flex flex-column">
                  <div className="mb-auto">
                    <small className="text-muted text-uppercase fw-bold d-block mb-3">
                      BENEFICIARI
                    </small>
                    <p className="mb-4">
                      {/* {props.beneficiari} */}
                      beneficiari
                    </p>
                  </div>

                  {/* Pulsante in fondo */}
                  <div className="mt-auto">
                    <a
                      href="#"
                      className="btn btn-outline-primary d-inline-flex align-items-center"
                    >
                      Vai agli avvisi
                      <svg
                        className="ms-2"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                      >
                        <path d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.44 8.5H2.75a.75.75 0 0 1 0-1.5h8.69L8.22 4.03a.75.75 0 0 1 0-1.06z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* end */}
      </div>
    </div>
  );
}
