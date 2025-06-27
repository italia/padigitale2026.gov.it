"use client";

// import { FormValutazioneRecord } from "@/graphql/generated";

import classNames from "classnames/bind";
import styles from "./index.module.scss";
const cn = classNames.bind(styles);

export function FormValutazione() {
  return (
    <section
      className={cn("feedback bg-medium py-5 px-3 px-lg-0")}
      aria-labelledby="feedbackSectionTitle"
      id="feedbackSection"
    >
      <div className="container-xxl">
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6">
            <div className="card shadow card-wrapper rounded">
              <div>
                <div className="card-body p-4 p-md-5">
                  <div className="step" id="feedbackIntro">
                    <h2
                      className="mb-0 h5 fw-semibold"
                      id="feedbackSectionTitle"
                    >
                      <span className="feedback-title">
                        Ciao, questa pagina è stata utile?
                      </span>
                    </h2>
                    <form className="mt-3 mt-md-3">
                      <fieldset>
                        <legend>
                          <span className="visually-hidden">
                            Scegli la risposta:
                          </span>
                        </legend>
                        <div className="form-check form-check-inline">
                          <input
                            name="feedbackValue"
                            type="radio"
                            id="feedbackValueYes"
                            value="1"
                          />
                          <label className="mb-0" htmlFor="feedbackValueYes">
                            Sì
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            name="feedbackValue"
                            type="radio"
                            id="feedbackValueNo"
                            value="0"
                          />
                          <label className="mb-0" htmlFor="feedbackValueNo">
                            No
                          </label>
                        </div>
                      </fieldset>
                      <button
                        type="submit"
                        className="btn btn-primary mt-4"
                        disabled={true}
                      >
                        Invia
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        tabIndex={-1}
        role="dialog"
        id="feedbackNo"
        aria-labelledby="feedbackNoTitle"
      >
        <div
          className="modal-dialog modal-lg modal-dialog-centered "
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header align-items-start">
              <button
                className="btn-close flex-shrink-0"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Chiudi finestra modale"
              >
                <svg role="img" className="icon icon-lg icon-primary">
                  <use href="/svg/sprites.svg#it-close"></use>
                </svg>
              </button>
            </div>
            <div className="modal-body pt-0 pb-4 pb-md-5 px-md-4">
              <div>
                <form>
                  <img
                    src="/static/47f2136f0de58fb3cb235d813428ebbb/kit-analitics.svg"
                    alt=""
                  />
                  <h2 className="mb-3" id="feedbackNoTitle">
                    Grazie per la tua risposta!
                  </h2>
                  <h3 className="mb-3">
                    Aiutaci a migliorare dandoci qualche dettaglio in più.
                  </h3>
                  <p>
                    Quanto segue è una raccolta di informazioni anonima, che ci
                    aiuta a capire come migliorare la tua esperienza sul sito
                    senza trattare dati personali. Se sei un developer puoi
                    scoprire come funziona questo meccanismo nella{" "}
                    <a
                      href="https://github.com/italia/feedback.designers.italia.it"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="repository GitHub dedicata (si apre in una nuova finestra"
                    >
                      repository GitHub dedicata
                    </a>
                    .
                  </p>
                  <fieldset>
                    <legend className="d-flex mb-3 px-0 align-items-center w-75">
                      <svg
                        role="img"
                        className="icon icon-lg icon-secondary align-middle me-3"
                        aria-hidden="true"
                      >
                        <use href="/svg/sprites.svg#it-user"></use>
                      </svg>
                      <span className="text-secondary">Sei:</span>
                    </legend>
                    <div className="px-3 px-lg-5 py-3 py-lg-5 rounded shadow-lg">
                      <div className="form-check form-check-group">
                        <input
                          name="optsStep1"
                          type="radio"
                          id="optsStep1Opt1"
                          value="Designer"
                        />
                        <label htmlFor="optsStep1Opt1">Designer</label>
                      </div>
                      <div className="form-check form-check-group">
                        <input
                          name="optsStep1"
                          type="radio"
                          id="optsStep1Opt2"
                          value="Developer"
                        />
                        <label htmlFor="optsStep1Opt2">Developer</label>
                      </div>
                      <div className="form-check form-check-group">
                        <input
                          name="optsStep1"
                          type="radio"
                          id="optsStep1Opt3"
                          value="Dirigente"
                        />
                        <label htmlFor="optsStep1Opt3">Dirigente</label>
                      </div>
                      <div className="form-check form-check-group">
                        <input
                          name="optsStep1"
                          type="radio"
                          id="optsStep1Opt4"
                          value="Docente"
                        />
                        <label htmlFor="optsStep1Opt4">Docente</label>
                      </div>
                      <div className="form-check form-check-group">
                        <input
                          name="optsStep1"
                          type="radio"
                          id="optsStep1Opt5"
                          value="Editor"
                        />
                        <label htmlFor="optsStep1Opt5">Editor</label>
                      </div>
                      <div className="form-check form-check-group">
                        <input
                          name="optsStep1"
                          type="radio"
                          id="optsStep1Opt6"
                          value="Legale"
                        />
                        <label htmlFor="optsStep1Opt6">Legale</label>
                      </div>
                      <div className="form-check form-check-group">
                        <input
                          name="optsStep1"
                          type="radio"
                          id="optsStep1Opt7"
                          value="Personale amministrativo"
                        />
                        <label htmlFor="optsStep1Opt7">
                          Personale amministrativo
                        </label>
                      </div>
                      <div className="form-check form-check-group">
                        <input
                          name="optsStep1"
                          type="radio"
                          id="optsStep1Opt8"
                          value="Project manager"
                        />
                        <label htmlFor="optsStep1Opt8">Project manager</label>
                      </div>
                      <div className="form-check form-check-group">
                        <input
                          name="optsStep1"
                          type="radio"
                          id="optsStep1Opt9"
                          value="Specialista comunicazione"
                        />
                        <label htmlFor="optsStep1Opt9">
                          Specialista comunicazione
                        </label>
                      </div>
                      <div className="form-check form-check-group">
                        <input
                          name="optsStep1"
                          type="radio"
                          id="optsStep1Opt10"
                          value="Studente"
                        />
                        <label htmlFor="optsStep1Opt10">Studente</label>
                      </div>
                      <div className="form-check form-check-group">
                        <input
                          name="optsStep1"
                          type="radio"
                          id="optsStep1Opt11"
                          value="Qui per curiosità / interesse"
                        />
                        <label htmlFor="optsStep1Opt11">
                          Qui per curiosità / interesse
                        </label>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset>
                    <legend className="d-flex mb-3 px-0 pt-5 align-items-center w-75">
                      <svg
                        role="img"
                        className="icon icon-lg icon-secondary align-middle me-3"
                        aria-hidden="true"
                      >
                        <use href="/svg/sprites.svg#it-help-circle"></use>
                      </svg>
                      <span className="text-secondary">
                        Hai trovato questa pagina grazie a:
                      </span>
                    </legend>
                    <div className="px-3 px-lg-5 py-3 py-lg-5 rounded shadow-lg">
                      <div className="form-check form-check-group">
                        <input
                          name="optsStep2"
                          type="radio"
                          id="optsStep2Opt1"
                          value="altro sito web"
                        />
                        <label htmlFor="optsStep2Opt1">Altro sito web</label>
                      </div>
                      <div className="form-check form-check-group">
                        <input
                          name="optsStep2"
                          type="radio"
                          id="optsStep2Opt2"
                          value="funzione Cerca del sito"
                        />
                        <label htmlFor="optsStep2Opt2">
                          Funzione Cerca del sito
                        </label>
                      </div>
                      <div className="form-check form-check-group">
                        <input
                          name="optsStep2"
                          type="radio"
                          id="optsStep2Opt3"
                          value="motore di ricerca"
                        />
                        <label htmlFor="optsStep2Opt3">Motore di ricerca</label>
                      </div>
                      <div className="form-check form-check-group">
                        <input
                          name="optsStep2"
                          type="radio"
                          id="optsStep2Opt4"
                          value="messaggio social"
                        />
                        <label htmlFor="optsStep2Opt4">Messaggio social</label>
                      </div>
                      <div className="form-check form-check-group">
                        <input
                          name="optsStep2"
                          type="radio"
                          id="optsStep2Opt5"
                          value="navigazione del sito"
                        />
                        <label htmlFor="optsStep2Opt5">
                          Navigazione del sito
                        </label>
                      </div>
                      <div className="form-check form-check-group">
                        <input
                          name="optsStep2"
                          type="radio"
                          id="optsStep2Opt6"
                          value="posta elettronica"
                        />
                        <label htmlFor="optsStep2Opt6">Posta elettronica</label>
                      </div>
                      <div className="form-check form-check-group">
                        <input
                          name="optsStep2"
                          type="radio"
                          id="optsStep2Opt7"
                          value="altro"
                        />
                        <label htmlFor="optsStep2Opt7">Altro</label>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset>
                    <legend className="d-flex pt-5 pb-4 px-0 align-items-center w-75">
                      <svg
                        role="img"
                        className="icon icon-lg icon-secondary align-middle me-3"
                        aria-hidden="true"
                      >
                        <use href="/svg/sprites.svg#it-info-circle"></use>
                      </svg>
                      <span className="text-secondary">
                        Come possiamo migliorare questa pagina?
                      </span>
                    </legend>
                    <div className="px-3 px-lg-5 pt-5 pb-1 rounded shadow-lg">
                      <div className="form-group">
                        <label htmlFor="feedbackText" className="">
                          Risposta
                        </label>
                        <textarea
                          id="feedbackText"
                          className="form-control"
                          autoComplete="off"
                          aria-describedby="helperText"
                          rows={3}
                          maxLength={200}
                        ></textarea>
                        <small
                          id="helperText"
                          className="form-control form-text"
                        >
                          Hai a disposizione 200 caratteri. Per favore non
                          inserire dati personali in questo campo.
                        </small>
                      </div>
                    </div>
                  </fieldset>
                  <div className="mt-5">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={true}
                    >
                      Invia dettagli
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
