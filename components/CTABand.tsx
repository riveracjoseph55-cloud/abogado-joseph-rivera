import Link from "next/link";
import { WA, TEL } from "@/lib/data";

export default function CTABand() {
  return (
    <section style={{ background: "#0d0d0d", padding: "clamp(64px,9vw,120px) 0" }}>
      <div className="rc-wrap">
        <div style={{
          display: "grid", gridTemplateColumns: "1.2fr 1fr",
          gap: "clamp(40px,6vw,96px)", alignItems: "end",
        }} className="cta-band-grid">

          <div>
            <div className="rc-eyebrow on-r" style={{ marginBottom: 20 }}>Próximo paso</div>
            <h2 className="rc-h1" style={{ color: "#fff", marginBottom: 0 }}>
              ¿Necesita representación <em className="rc-em" style={{ color: "#7e0102", opacity: 1 }}>legal</em>?
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <a href={WA} target="_blank" rel="noopener" className="rc-btn brand full">
              WhatsApp · 8998-0112 →
            </a>
            <a href={`tel:${TEL}`} className="rc-btn ghost-on-r full">
              Llamar directamente
            </a>
            <Link href="/contacto" className="rc-btn ghost-on-r full">
              Formulario de contacto
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .cta-band-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
