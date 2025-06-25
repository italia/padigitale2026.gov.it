"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "design-react-kit";
import Link from "next/link";

type Status = "confirm" | "loading" | "success" | "error";

function AnnullaIscrizioneContent() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<Status>("confirm");
  const [message, setMessage] = useState("");

  const address = searchParams.get("address");
  const uuid = searchParams.get("uuid");

  useEffect(() => {
    if (!address || !uuid) {
      setStatus("error");
      setMessage("Parametri mancanti per l'annullamento dell'iscrizione.");
    }
  }, [address, uuid]);

  const handleUnsubscribe = async () => {
    if (!address || !uuid) return;

    setStatus("loading");

    try {
      const response = await fetch(
        `/api/newsletter/unsubscribe?address=${encodeURIComponent(
          address
        )}&uuid=${encodeURIComponent(uuid)}`
      );
      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage(
          "Hai annullato l'iscrizione: non riceverai ulteriori comuniazioni o aggiornamenti da PA Digitale 2026."
        );
      } else {
        setStatus("error");
        setMessage(data.message || "Errore durante la disiscrizione.");
      }
    } catch {
      setStatus("error");
      setMessage("Errore di connessione. Riprova più tardi.");
    }
  };

  // Pagina di conferma
  if (status === "confirm") {
    return (
      <div className="container-xxl py-5 my-5 mx-auto">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="alert alert-warning" role="alert">
              <h4 className="alert-heading">
                Annullare l&apos;iscrizione agli aggiornamenti?
              </h4>
              <p>
                Annullando l&apos;iscrizione non riceverai ulteriori
                comunicazioni o aggiornamenti da PA Digitale 2026.
              </p>
              <p className="mb-0">
                Oppure torna alla home e continua a ricevere le nostre
                newsletter.
              </p>
              <hr />
              <div className="d-flex gap-3">
                <Button color="danger" onClick={handleUnsubscribe}>
                  Annulla iscrizione
                </Button>
                <Link href="/">
                  <Button color="secondary" outline>
                    Torna alla home
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Loading state
  if (status === "loading") {
    return (
      <div className="container-xxl py-5 my-5 mx-auto">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Caricamento...</span>
            </div>
            <p className="mt-3">Annullamento in corso...</p>
          </div>
        </div>
      </div>
    );
  }

  // Success/Error state
  return (
    <div className="container-xxl py-5 my-5 mx-auto">
      <div className="row justify-content-center">
        <div className="col-md-8">
          {status === "success" ? (
            <div className="alert alert-success" role="alert">
              <h4 className="alert-heading">
                Iscrizione aggiornamenti annullata
              </h4>
              <p>{message}</p>
              <hr />
              <p className="mb-0">
                Se cambi idea, puoi sempre iscriverti di nuovo.
              </p>
              <div className="mt-3">
                <Link href="/">
                  <Button color="primary">Torna alla home</Button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="alert alert-danger" role="alert">
              <h4 className="alert-heading">Errore durante la disiscrizione</h4>
              <p>{message}</p>
              <hr />
              <p className="mb-0">
                Se il problema persiste, contatta il supporto tecnico.
              </p>
              <div className="mt-3">
                <Link href="/">
                  <Button color="primary">Torna alla home</Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function LoadingFallback() {
  return (
    <div className="container-xxl py-5 my-5 mx-auto">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Caricamento...</span>
          </div>
          <p className="mt-3">Caricamento...</p>
        </div>
      </div>
    </div>
  );
}

export default function AnnullaIscrizionePage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <AnnullaIscrizioneContent />
    </Suspense>
  );
}
