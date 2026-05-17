import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import { RC_AREAS, WA } from "@/lib/data";

export const metadata: Metadata = {
  title: "Especialidades",
  description: "7 áreas de especialización jurídica: derecho penal, lavado de dinero, corporativo, laboral, notarial, asesoría internacional e investigaciones criminales.",
};

const R = "#7e0102";

export default function EspecialidadesPage() {
  return (
    <div className="rc-page">

      {/* ── HERO ── */}
      <section style={{ background: "var(--paper)", padding: "clamp(60px,8vw,120px) 0" }}>
        <div className="rc-wrap">
          <Reveal>
            <div className="rc-eyebrow" style={{ marginBottom: 20 }}>Práctica legal · 03 / 04</div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="rc-h1">Áreas de <em className="rc-em">Especialización</em></h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="rc-lede" style={{ marginTop: 32, maxWidth: "56ch" }}>
              Vasta experiencia en múltiples ramas del derecho. Representación sólida,
              profesional y adaptada a cada situación legal — desde defensa penal compleja
              hasta asesoría estratégica internacional.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── LISTA DE ÁREAS ── */}
      <section style={{ background: "#fff", padding: "clamp(48px,6vw,96px) 0" }}>
        <div className="rc-wrap">
          <div style={{ display: "flex", flexDirection: "column" }}>
            {RC_AREAS.map((a, i) => (
              <Reveal key={a.n} delay={i * 50}>
                <div style={{
                  display: "grid", gridTemplateColumns: "96px 1fr 1.4fr",
                  gap: "clamp(24px,3vw,56px)",
                  padding: "clamp(32px,4vw,56px) 0",
                  borderTop: "1px solid var(--hairline)",
                }} className="area-row">

                  <div className="rc-meta" style={{ color: R, paddingTop: 4 }}>{a.n}</div>

                  <h2 className="rc-h2" style={{ fontSize: "clamp(22px,3vw,40px)" }}>{a.t}</h2>

                  <div>
                    <p className="rc-body" style={{ marginBottom: 24 }}>{a.d}</p>
                    <div style={{
                      display: "grid", gap: "8px 20px", gridTemplateColumns: "repeat(2,1fr)",
                      marginBottom: 28,
                    }} className="items-grid">
                      {a.items.map(it => (
                        <div key={it} style={{ display: "flex", gap: 10, alignItems: "center" }}>
                          <span style={{
                            display: "block", width: 5, height: 5, borderRadius: "50%",
                            background: R, flexShrink: 0,
                          }}/>
                          <span style={{ fontSize: 14, color: "var(--fg-2)" }}>{it}</span>
                        </div>
                      ))}
                    </div>
                    <a href={WA} target="_blank" rel="noopener" className="rc-link">
                      Consultar sobre este servicio →
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
            <div style={{ borderTop: "1px solid var(--hairline)" }}/>
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) {
            .area-row { grid-template-columns: 1fr !important; gap: 16px !important; }
            .items-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      <CTABand />
    </div>
  );
}
