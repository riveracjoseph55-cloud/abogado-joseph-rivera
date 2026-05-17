"use client";
import { useState, useMemo } from "react";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import { RC_PRESS } from "@/lib/data";

const R = "#7e0102";

export default function PrensaClient() {
  const [filter, setFilter] = useState("all");
  const years = useMemo(() => ["all", ...Array.from(new Set(RC_PRESS.map(p => p.year)))], []);
  const shown = filter === "all" ? RC_PRESS : RC_PRESS.filter(p => p.year === filter);

  return (
    <div className="rc-page">

      {/* ── HERO ── */}
      <section style={{ background: "var(--paper)", padding: "clamp(60px,8vw,120px) 0" }}>
        <div className="rc-wrap">
          <Reveal>
            <div className="rc-eyebrow" style={{ marginBottom: 20 }}>Prensa y opinión · 04 / 04</div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="rc-h1">Contenido <em className="rc-em">Jurídico</em></h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="rc-lede" style={{ marginTop: 32, maxWidth: "56ch" }}>
              Análisis legal y opinión jurídica publicados en los principales medios de
              Costa Rica — Diario Extra, Delfino.cr, ElMundo.cr, CRHoy — y en redes
              sociales (@josephriveraabogado en TikTok).
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── ARTÍCULOS ── */}
      <section style={{ background: "#fff", padding: "var(--pad-y) 0" }}>
        <div className="rc-wrap">

          {/* Filtro por año */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "clamp(32px,4vw,56px)" }}>
            {years.map(y => (
              <button
                key={y}
                onClick={() => setFilter(y)}
                className={`rc-tag ${filter === y ? "active" : ""}`}
              >
                {y === "all" ? "Todos" : y}
              </button>
            ))}
          </div>

          <div style={{
            display: "grid", gap: "var(--gut)", gridTemplateColumns: "repeat(3,1fr)",
          }} className="press-grid">
            {shown.map((p, i) => (
              <Reveal key={p.t} delay={(i % 3) * 80}>
                <a href={p.u} target="_blank" rel="noopener" className="rc-card" style={{
                  display: "flex", flexDirection: "column", padding: 28, height: "100%",
                }}>
                  <div style={{
                    display: "flex", justifyContent: "space-between",
                    marginBottom: 24,
                    fontFamily: "var(--font-mono, monospace)", fontSize: 11,
                    letterSpacing: ".12em", textTransform: "uppercase",
                  }}>
                    <span style={{ color: R }}>{p.medio}</span>
                    <span style={{ color: "var(--fg-5)" }}>{p.year}</span>
                  </div>
                  <h3 className="rc-h3" style={{ flex: 1, marginBottom: 24 }}>{p.t}</h3>
                  <span style={{ fontSize: 13, fontWeight: 600, color: R }}>Leer artículo →</span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 1100px) { .press-grid { grid-template-columns: repeat(2,1fr) !important; } }
          @media (max-width: 640px)  { .press-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* ── TIKTOK ── */}
      <section style={{ background: "#0d0d0d", padding: "var(--pad-y) 0" }}>
        <div className="rc-wrap">
          <div className="rc-eyebrow on-r" style={{ marginBottom: 20 }}>TikTok · @josephriveraabogado</div>
          <Reveal>
            <h2 className="rc-h2" style={{ color: "#fff" }}>
              Contenido <em className="rc-em" style={{ color: R, opacity: 1 }}>en redes</em>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="rc-lede" style={{ color: "rgba(255,255,255,.6)", marginTop: 24, marginBottom: 40 }}>
              Análisis legal y opinión jurídica en formato corto. Seguinos para estar al día
              con el derecho penal costarricense.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <a
              href="https://www.tiktok.com/@josephriveraabogado"
              target="_blank" rel="noopener"
              className="rc-btn brand"
            >
              Ver perfil en TikTok →
            </a>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </div>
  );
}
