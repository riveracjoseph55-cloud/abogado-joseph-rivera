"use client";
import { useState, useMemo } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import { RC_PRESS, OUTLET_COLORS, type PressType, type PressEntry } from "@/lib/data";

const R = "#7e0102";

const TYPE_LABELS: Record<PressType | "all", string> = {
  all:        "Todos",
  reportaje:  "Reportajes",
  opinion:    "Opinión",
  entrevista: "Entrevistas",
  doctrina:   "Doctrina",
  podcast:    "Podcasts",
};

function outletInitials(medio: string) {
  return medio.split(/\s+/).map(w => w[0]).join("").slice(0, 2).toUpperCase();
}

export default function PrensaClient() {
  const [typeFilter, setTypeFilter] = useState<PressType | "all">("all");
  const [yearFilter, setYearFilter] = useState<string>("all");

  const years = useMemo(
    () => ["all", ...Array.from(new Set(RC_PRESS.map(p => p.year))).sort((a, b) => Number(b) - Number(a))],
    []
  );

  const shown: PressEntry[] = useMemo(() => {
    return RC_PRESS.filter(p => {
      const t = typeFilter === "all" || p.type === typeFilter;
      const y = yearFilter === "all" || p.year === yearFilter;
      return t && y;
    });
  }, [typeFilter, yearFilter]);

  // Conteos por tipo para mostrar en filtros
  const typeCounts = useMemo(() => {
    const c: Record<string, number> = { all: RC_PRESS.length };
    for (const p of RC_PRESS) c[p.type] = (c[p.type] || 0) + 1;
    return c;
  }, []);

  return (
    <div className="rc-page">

      {/* ── HERO ── */}
      <section style={{ background: "var(--paper)", padding: "clamp(60px,8vw,120px) 0" }}>
        <div className="rc-wrap">
          <Reveal>
            <div className="rc-eyebrow" style={{ marginBottom: 20 }}>04 · Prensa y publicaciones</div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="rc-h1">Prensa y <em className="rc-em">Publicaciones</em></h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="rc-lede" style={{ marginTop: 32, maxWidth: "60ch" }}>
              {RC_PRESS.length} apariciones documentadas en medios nacionales e
              internacionales — desde La Nación, La Prensa de Nicaragua e Infobae hasta
              análisis doctrinales en Delfino.cr y Masterlex. Reportajes sobre los casos
              del bufete, opinión jurídica firmada por el Lic. Rivera y publicaciones
              técnicas sobre casación penal.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── FILTROS + ARTÍCULOS ── */}
      <section style={{ background: "#fff", padding: "var(--pad-y) 0" }}>
        <div className="rc-wrap">

          {/* Filtro por tipo */}
          <div style={{ marginBottom: 24 }}>
            <div className="rc-meta" style={{ color: "var(--fg-5)", marginBottom: 12 }}>Filtrar por tipo</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {(Object.keys(TYPE_LABELS) as Array<PressType | "all">).map(t => (
                <button
                  key={t}
                  onClick={() => setTypeFilter(t)}
                  className={`rc-tag ${typeFilter === t ? "active" : ""}`}
                  style={{ cursor: "pointer" }}
                >
                  {TYPE_LABELS[t]} <span style={{ opacity: 0.55, marginLeft: 4, fontSize: 9 }}>({typeCounts[t] || 0})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Filtro por año */}
          <div style={{ marginBottom: "clamp(32px,4vw,56px)" }}>
            <div className="rc-meta" style={{ color: "var(--fg-5)", marginBottom: 12 }}>Filtrar por año</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {years.map(y => (
                <button
                  key={y}
                  onClick={() => setYearFilter(y)}
                  className={`rc-tag ${yearFilter === y ? "active" : ""}`}
                  style={{ cursor: "pointer" }}
                >
                  {y === "all" ? "Todos" : y}
                </button>
              ))}
            </div>
          </div>

          {/* Conteo */}
          <div className="rc-meta" style={{ color: "var(--fg-5)", marginBottom: 24 }}>
            Mostrando {shown.length} de {RC_PRESS.length} publicaciones
          </div>

          {/* Grid */}
          <div style={{
            display: "grid", gap: "var(--gut)",
            gridTemplateColumns: "repeat(2,1fr)",
          }} className="press-grid">
            {shown.map((p, i) => {
              const outletColor = OUTLET_COLORS[p.medio] || R;
              return (
                <Reveal key={`${p.medio}-${p.t}`} delay={(i % 2) * 80}>
                  <a href={p.u} target="_blank" rel="noopener noreferrer" className="rc-card press-card" style={{
                    display: "flex", flexDirection: "column", height: "100%",
                    overflow: "hidden",
                  }}>
                    {/* Insignia del medio (banner superior con color del outlet) */}
                    <div style={{
                      background: outletColor, color: "#fff",
                      padding: "14px 24px",
                      display: "flex", alignItems: "center", gap: 14,
                    }}>
                      <span style={{
                        width: 36, height: 36, borderRadius: 2,
                        background: "rgba(255,255,255,.18)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 14,
                        letterSpacing: "-0.02em",
                      }}>{outletInitials(p.medio)}</span>
                      <div style={{ flex: 1, lineHeight: 1.15 }}>
                        <div style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 14, letterSpacing: "-0.01em" }}>
                          {p.medio}
                        </div>
                        <div style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 9, letterSpacing: ".12em", textTransform: "uppercase", color: "rgba(255,255,255,.75)", marginTop: 1 }}>
                          {p.lang === "en" ? "Costa Rica · EN" : p.medio === "La Prensa" ? "Nicaragua · ES" : p.medio === "Infobae" ? "Internacional · ES" : "Costa Rica · ES"}
                        </div>
                      </div>
                      <span style={{
                        padding: "5px 10px", borderRadius: 999,
                        fontFamily: "var(--font-mono, monospace)", fontSize: 9,
                        letterSpacing: ".12em", textTransform: "uppercase",
                        background: "rgba(255,255,255,.18)",
                        color: "#fff",
                      }}>{TYPE_LABELS[p.type]}</span>
                    </div>

                    {/* Thumbnail opcional si existe imagen local */}
                    {p.image && (
                      <div style={{
                        aspectRatio: "1200/630", background: "#f3eee5",
                        overflow: "hidden", position: "relative",
                      }}>
                        <Image
                          src={p.image}
                          alt={`Captura: ${p.t}`}
                          fill
                          sizes="(max-width: 900px) 100vw, 50vw"
                          style={{ objectFit: "cover" }}
                          loading="lazy"
                        />
                      </div>
                    )}

                    {/* Cuerpo */}
                    <div style={{
                      flex: 1, display: "flex", flexDirection: "column",
                      padding: "28px 24px",
                    }}>
                      <h3 style={{
                        fontFamily: "var(--font-sans)", fontWeight: 500,
                        fontSize: "clamp(18px,1.6vw,22px)", lineHeight: 1.25,
                        letterSpacing: "-0.015em", color: "#0d0d0d",
                        marginBottom: 14, flex: 1,
                      }}>{p.t}</h3>

                      <p style={{
                        fontSize: 14, lineHeight: 1.6, color: "var(--fg-3)",
                        marginBottom: 20,
                      }}>{p.desc}</p>

                      <div style={{
                        paddingTop: 18, borderTop: "1px solid var(--hairline)",
                        display: "flex", justifyContent: "space-between", alignItems: "center",
                      }}>
                        <span className="rc-meta" style={{ color: "var(--fg-5)" }}>
                          {p.date ? formatDate(p.date) : p.year}
                        </span>
                        <span style={{ fontSize: 12, fontWeight: 600, color: outletColor, display: "inline-flex", alignItems: "center", gap: 6 }}>
                          {p.type === "podcast" ? "Escuchar" : p.type === "doctrina" ? "Descargar" : "Leer"} →
                        </span>
                      </div>
                    </div>
                  </a>
                </Reveal>
              );
            })}
          </div>

          {shown.length === 0 && (
            <div style={{
              padding: "60px 40px", textAlign: "center",
              border: "1px dashed var(--hairline-strong)",
              color: "var(--fg-5)",
            }}>
              <p className="rc-body">No hay publicaciones con esos filtros.</p>
              <button
                onClick={() => { setTypeFilter("all"); setYearFilter("all"); }}
                style={{
                  marginTop: 16, color: R, fontWeight: 600, fontSize: 14,
                  paddingBottom: 2, cursor: "pointer",
                  background: "none",
                  border: "none",
                  borderBottom: `1px solid ${R}`,
                }}
              >Limpiar filtros</button>
            </div>
          )}
        </div>
        <style>{`
          @media (max-width: 900px) { .press-grid { grid-template-columns: 1fr !important; } }
          .press-card { transition: transform .25s ease, box-shadow .25s ease; }
          .press-card:hover { transform: translateY(-2px); box-shadow: 0 16px 48px rgba(0,0,0,.12); }
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
              Análisis legal y opinión jurídica en formato corto. Síganos para estar al día
              con el derecho penal costarricense.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <a
              href="https://www.tiktok.com/@josephriveraabogado"
              target="_blank" rel="noopener noreferrer"
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

function formatDate(date: string) {
  // Formato "2026-04-27" o "2026-04"
  const parts = date.split("-");
  const months = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","setiembre","octubre","noviembre","diciembre"];
  if (parts.length >= 2) {
    const m = months[Number(parts[1]) - 1] || parts[1];
    if (parts.length === 3) return `${parts[2]} ${m} ${parts[0]}`;
    return `${m} ${parts[0]}`;
  }
  return date;
}
