import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Página no encontrada",
  description: "La página solicitada no existe o ha sido movida.",
  robots: { index: false, follow: true },
  // Sin canonical en 404 — Google no debe indexar URLs inexistentes
};

const R = "#7e0102";

export default function NotFound() {
  return (
    <div className="rc-page" style={{ minHeight: "70vh", display: "flex", alignItems: "center" }}>
      <section style={{ padding: "var(--pad-y) 0", width: "100%" }}>
        <div className="rc-wrap" style={{ textAlign: "center" }}>
          <div className="rc-eyebrow" style={{ marginBottom: 24, color: R }}>Error 404 · Recurso no encontrado</div>
          <h1 className="rc-display" style={{ marginBottom: 32 }}>
            Página <em className="rc-em">no encontrada</em>
          </h1>
          <p className="rc-lede" style={{ maxWidth: "52ch", margin: "0 auto 48px" }}>
            La URL solicitada no existe o ha sido movida. Si llegó aquí desde un enlace,
            por favor avísenos para corregirlo.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
            <Link href="/" className="rc-btn brand">Volver al inicio →</Link>
            <Link href="/contacto" className="rc-btn ghost">Contactar →</Link>
          </div>

          <div style={{
            marginTop: 80, paddingTop: 40,
            borderTop: "1px solid var(--hairline)",
            display: "grid", gap: 16, gridTemplateColumns: "repeat(3,1fr)", maxWidth: 720, margin: "80px auto 0",
          }} className="nf-grid">
            <Link href="/quien"          className="rc-meta" style={{ color: "var(--fg-3)" }}>· Quién es</Link>
            <Link href="/casos"          className="rc-meta" style={{ color: "var(--fg-3)" }}>· Casos</Link>
            <Link href="/especialidades" className="rc-meta" style={{ color: "var(--fg-3)" }}>· Especialidades</Link>
            <Link href="/prensa"         className="rc-meta" style={{ color: "var(--fg-3)" }}>· Prensa</Link>
            <Link href="/atestados"      className="rc-meta" style={{ color: "var(--fg-3)" }}>· Atestados</Link>
            <Link href="/contacto"       className="rc-meta" style={{ color: "var(--fg-3)" }}>· Contacto</Link>
          </div>
        </div>
      </section>
      <style>{`
        @media (max-width: 640px) {
          .nf-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </div>
  );
}
