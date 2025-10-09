"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "design-react-kit";
import { Spinner } from "design-react-kit";
import Link from "next/link";

type Status = "loading" | "success" | "error";

function ConfermaContent() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<Status>("loading");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const jwt = searchParams.get("jwt");

    if (!jwt) {
      setStatus("error");
      setMessage("Token di conferma mancante o non valido.");
      return;
    }

    const confirmSubscription = async () => {
      try {
        const response = await fetch(`/api/newsletter/confirm?jwt=${jwt}`);
        const data = await response.json();

        if (response.ok) {
          setStatus("success");
          //   setMessage(data.message || "Iscrizione confermata con successo!");
          setMessage(
            "L'indirizzo email che hai scelto per ricevere comunicazioni da PA Digitale 2026 è stato confermato."
          );
        } else {
          setStatus("error");
          setMessage(
            data.message || "Errore durante la conferma dell'iscrizione."
          );
        }
      } catch {
        setStatus("error");
        setMessage("Errore di connessione. Riprova più tardi.");
      }
    };

    confirmSubscription();
  }, [searchParams]);

  if (status === "loading") {
    return (
      <div className="container-xxl px-md-4 py-5 my-5 mx-auto">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <Spinner active small />
            <span className="visually-hidden">Conferma in corso...</span>
            <p className="mt-3">Conferma in corso...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container-xxl px-md-4 py-5 my-5 mx-auto">
      <div className="row justify-content-center">
        <div className="col-md-8">
          {status === "success" ? (
            <div className="alert alert-success" role="alert">
              <h4 className="alert-heading">Indirizzo confermato</h4>
              <p>{message}</p>
              <hr />
              <p className="mb-0">Grazie per esserti iscritto!</p>
              <div className="mt-3">
                <Link href="/">
                  <Button color="primary">Torna alla home</Button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="alert alert-danger" role="alert">
              <h4 className="alert-heading">Errore durante la conferma</h4>
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
    <div className="container-xxl px-md-4 py-5 my-5 mx-auto">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <Spinner active small />
          <span className="visually-hidden">Caricamento...</span>
          <p className="mt-3">Caricamento...</p>
        </div>
      </div>
    </div>
  );
}

export default function ConfermaPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <ConfermaContent />
    </Suspense>
  );
}
