"use client";
import { useEffect } from "react";
import Link from "next/link";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="rc-page" style={{ minHeight: "70vh", display: "flex", alignItems: "center" }}>
      <section style={{ padding: "var(--pad-y) 0", width: "100%" }}>
        <div className="rc-wrap" style={{ textAlign: "center" }}>
          <div className="rc-eyebrow" style={{ marginBottom: 24, color: "#7e0102" }}>Error inesperado</div>
          <h1 className="rc-h1" style={{ marginBottom: 24 }}>
            Algo no salió como <em className="rc-em">esperábamos</em>
          </h1>
          <p className="rc-lede" style={{ maxWidth: "52ch", margin: "0 auto 40px" }}>
            Ocurrió un error procesando su solicitud. Puede intentar de nuevo o
            volver al inicio.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
            <button onClick={reset} className="rc-btn brand">Reintentar →</button>
            <Link href="/" className="rc-btn ghost">Volver al inicio →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
