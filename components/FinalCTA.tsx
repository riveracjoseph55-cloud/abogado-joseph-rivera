import Link from "next/link";
import Reveal from "@/components/Reveal";
import PremiumPanel from "@/components/PremiumPanel";
import { WA } from "@/lib/data";

const R = "#7e0102";

/**
 * CTA final "¿Necesita representación legal?" — el mismo panel premium de la
 * portada (degradado rojo + monograma "R" + acentos dorados). Reutilizable en
 * varias páginas para mantener una sola fuente de verdad del cierre.
 */
export default function FinalCTA({ eyebrow = "Hablemos" }: { eyebrow?: string }) {
  return (
    <section>
      <PremiumPanel bottomRule paddingY="clamp(80px,11vw,160px)">
        <div style={{
          display: "grid", gridTemplateColumns: "1.2fr 1fr",
          gap: "clamp(40px,6vw,96px)", alignItems: "end",
        }} className="cta-grid">
          <Reveal>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <span style={{ width: 28, height: 2, background: "var(--premium-gold)" }} />
              <span className="rc-eyebrow on-r">{eyebrow}</span>
            </div>
            <h2 className="rc-h1" style={{ color: "#fff", marginBottom: 24 }}>
              ¿Necesita representación <em className="rc-em" style={{ color: R, opacity: 1 }}>legal</em>?
            </h2>
            <p className="rc-lede" style={{ color: "rgba(255,255,255,.6)" }}>
              Disponibles 24/7 para atender su consulta con discreción y profesionalismo.
              Cada caso merece atención especializada.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <a href={WA} target="_blank" rel="noopener" className="rc-btn brand full">Consulta por WhatsApp →</a>
              <a href="tel:+50689980112" className="rc-btn ghost-on-r full">Llamar · 8998-0112</a>
              <Link href="/contacto" className="rc-btn ghost-on-r full">Formulario de contacto</Link>
            </div>
          </Reveal>
        </div>
      </PremiumPanel>
      <style>{`
        @media (max-width: 900px) { .cta-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
