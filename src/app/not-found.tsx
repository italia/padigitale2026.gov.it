import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <h1
            className="display-1 fw-bold text-primary"
            style={{ fontSize: "7rem" }}
          >
            404
          </h1>
          <h2 className="h3 mb-4 text-primary">Pagina non trovata</h2>
          <p className="lead mb-4">
            Utilizza il menu per riprendere la navigazione
          </p>
          <Link href="/" className="btn btn-primary">
            Vai alla pagina iniziale
          </Link>
        </div>
      </div>
    </div>
  );
}
