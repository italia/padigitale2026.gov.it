"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "design-react-kit";
import Link from "next/link";

type Status = "loading" | "success" | "error";

function AnnullaIscrizioneContent() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<Status>("loading");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const address = searchParams.get("address");
    const uuid = searchParams.get("uuid");

    if (!address || !uuid) {
      setStatus("error");
      setMessage("Parametri mancanti per l'annullamento dell'iscrizione.");
      return;
    }

    const unsubscribe = async () => {
      try {
        const response = await fetch(
          `/api/newsletter/unsubscribe?address=${encodeURIComponent(
            address
          )}&uuid=${encodeURIComponent(uuid)}`
        );
        const data = await response.json();

        if (response.ok) {
          setStatus("success");
          setMessage(data.message || "Disiscrizione completata con successo!");
        } else {
          setStatus("error");
          setMessage(data.message || "Errore durante la disiscrizione.");
        }
      } catch {
        setStatus("error");
        setMessage("Errore di connessione. Riprova più tardi.");
      }
    };

    unsubscribe();
  }, [searchParams]);

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

  return (
    <div className="container-xxl py-5 my-5 mx-auto">
      <div className="row justify-content-center">
        <div className="col-md-8">
          {status === "success" ? (
            <div className="alert alert-success" role="alert">
              <h4 className="alert-heading">Disiscrizione completata!</h4>
              <p>{message}</p>
              <hr />
              <p className="mb-0">
                Non riceverai più le nostre newsletter. Se cambi idea, puoi
                sempre iscriverti di nuovo.
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
