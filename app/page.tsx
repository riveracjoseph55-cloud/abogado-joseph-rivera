import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import InstagramReel from "@/components/InstagramReel";
import SchemaOrg from "@/components/SchemaOrg";
import { WA, RC_CASES, RC_AREAS, RC_PRESS } from "@/lib/data";
import { SITE_URL, SITE_NAME, OG_IMAGE, schemaLegalService, schemaAttorney } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: "Abogado Joseph Rivera Cheves | Derecho Penal Costa Rica" },
  description:
    "Bufete penalista en Costa Rica con +10 años de experiencia. Femicidios, crimen organizado, delitos financieros y asesoría internacional. Defensa experta.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Abogado Joseph Rivera Cheves | Derecho Penal Costa Rica",
    description:
      "Bufete penalista en Costa Rica. Femicidios, crimen organizado, delitos financieros y asesoría internacional. Lic. Joseph Alfonso Rivera Cheves.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `${SITE_NAME} — Bufete Penalista Costa Rica` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abogado Joseph Rivera Cheves | Derecho Penal Costa Rica",
    images: [OG_IMAGE],
  },
};

const R = "#7e0102";

export default function Home() {
  return (
    <>
    <SchemaOrg data={[schemaLegalService, schemaAttorney]} />
    <div className="rc-page">

      {/* ── HERO ── */}
      <section style={{
        position: "relative", background: "var(--paper)",
        padding: "clamp(48px,7vw,96px) 0 clamp(80px,11vw,160px)",
        overflow: "hidden",
      }}>
        <div className="rc-wrap">
          <div style={{
            display: "grid", gridTemplateColumns: "1.4fr .9fr",
            gap: "clamp(32px,5vw,72px)", alignItems: "end",
          }} className="hero-grid">

            <div>
              <Reveal>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 36 }}>
                  <span className="rc-meta">CR · Penal</span>
                  <span style={{ display: "inline-block", width: 40, height: 1, background: R }}/>
                  <span className="rc-meta">10+ años</span>
                </div>
              </Reveal>

              <Reveal delay={80}>
                <h1 className="rc-display" style={{ marginBottom: 32 }}>
                  Compromiso<br/>
                  con la <em className="rc-em">Justicia</em>.
                </h1>
              </Reveal>

              <Reveal delay={160}>
                <p className="rc-lede" style={{ marginBottom: 40 }}>
                  Bufete penalista en Costa Rica con representación en los casos más
                  complejos del país — femicidios, crimen organizado, delitos financieros
                  y asesoría estratégica internacional.
                </p>
              </Reveal>

              <Reveal delay={240}>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
                  <a href={WA} target="_blank" rel="noopener" className="rc-btn brand">
                    Consulta por WhatsApp →
                  </a>
                  <Link href="/casos" className="rc-btn ghost">
                    Ver casos destacados
                  </Link>
                </div>
              </Reveal>
            </div>

            <Reveal delay={120}>
              <div style={{
                position: "relative", aspectRatio: "4/3",
                background: "var(--paper-2, #f3eee5)", overflow: "hidden",
              }}>
                <Image
                  src="/images/joseph/editorial.jpg"
                  alt="Lic. Joseph Alfonso Rivera Cheves — abogado penalista costarricense"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  priority
                  sizes="(max-width: 900px) 100vw, 40vw"
                />
                <div style={{
                  position: "absolute", left: 16, right: 16, bottom: 16,
                  padding: "14px 18px",
                  background: "rgba(13,13,13,0.85)",
                  backdropFilter: "blur(8px)",
                }}>
                  <div style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 9, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(255,255,255,.5)", marginBottom: 6 }}>
                    Bufete · Director
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 500, color: "#fff", lineHeight: 1.3 }}>
                    Lic. Joseph Alfonso Rivera Cheves
                  </div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,.6)", marginTop: 4 }}>
                    Abogado penalista · Máster en Compliance · Auditor Líder ISO 37001
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Watermark */}
        <div aria-hidden="true" style={{
          position: "absolute", right: "-2vw", bottom: "-3vw",
          fontFamily: "var(--font-sans, system-ui)", fontSize: "clamp(160px,26vw,340px)",
          fontWeight: 300, letterSpacing: "-0.03em",
          color: "rgba(126,1,2,.04)", pointerEvents: "none", lineHeight: 1, userSelect: "none",
        }}>
          &apos;26
        </div>

        <style>{`
          @media (max-width: 900px) { .hero-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* ── STATS ── */}
      <section style={{ background: "#0d0d0d", padding: "clamp(48px,7vw,88px) 0" }}>
        <div className="rc-wrap">
          <div style={{
            display: "grid", gap: "var(--gut)", gridTemplateColumns: "repeat(4,1fr)",
          }} className="stats-grid">
            {[
              { num: "50",   label: "Años — máximo legal CR, caso Nadia Peraza (pena nominal 79)" },
              { num: "10+",  label: "Años de ejercicio como litigante penalista" },
              { num: "07",   label: "Áreas de especialización jurídica" },
              { num: "24/7", label: "Disponibilidad para emergencias legales" },
            ].map((s, i) => (
              <Reveal key={s.num} delay={i * 80}>
                <div>
                  <div style={{
                    fontFamily: "var(--font-sans, system-ui)", fontWeight: 300,
                    fontSize: "clamp(40px,5vw,72px)", lineHeight: 1, letterSpacing: "-0.03em",
                    color: "#fff", marginBottom: 12,
                  }}>{s.num}</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,.5)", lineHeight: 1.5 }}>{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .stats-grid { grid-template-columns: 1fr 1fr !important; gap: clamp(32px,5vw,56px) var(--gut) !important; } }
        `}</style>
      </section>

      {/* ── REEL DESTACADO ── */}
      <section style={{ background: "var(--paper)", padding: "var(--pad-y) 0", position: "relative" }}>
        <div className="rc-wrap">
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr",
            gap: "clamp(40px,6vw,96px)", alignItems: "center",
          }} className="reel-grid">
            <Reveal>
              <div>
                <div className="rc-eyebrow" style={{ marginBottom: 20 }}>En la voz pública</div>
                <h2 className="rc-h2" style={{ marginBottom: 28, maxWidth: "16ch" }}>
                  Cada caso es <em className="rc-em">también</em> un compromiso público
                </h2>
                <p className="rc-lede" style={{ marginBottom: 24, maxWidth: "44ch" }}>
                  Acompañamos a las familias dentro del tribunal y en los medios.
                  La justicia se construye en ambas arenas — y cada palabra cuenta.
                </p>
                <div style={{
                  paddingTop: 24, borderTop: "1px solid var(--hairline)",
                  fontFamily: "var(--font-mono, monospace)", fontSize: 11,
                  letterSpacing: ".14em", textTransform: "uppercase", color: "var(--fg-5)",
                }}>
                  Reel destacado · @josephriveraabogado
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <InstagramReel url="https://www.instagram.com/reel/DWHZdGMx4C8/" caption />
            </Reveal>
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .reel-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* ── CASOS ── */}
      <section style={{ background: "var(--paper)", padding: "var(--pad-y) 0" }}>
        <div className="rc-wrap">
          <Reveal>
            <div style={{
              display: "flex", alignItems: "flex-end", justifyContent: "space-between",
              gap: 24, flexWrap: "wrap", marginBottom: "clamp(40px,5vw,72px)",
            }}>
              <div>
                <div className="rc-eyebrow" style={{ marginBottom: 16 }}>01 / 04 · Casos destacados</div>
                <h2 className="rc-h2">Defensa en <em className="rc-em">Femicidios</em></h2>
              </div>
              <p className="rc-lede" style={{ maxWidth: "40ch", marginBottom: 4 }}>
                Representación legal a familias de víctimas en los casos más emblemáticos
                de violencia de género en Costa Rica y Centroamérica.
              </p>
            </div>
          </Reveal>

          <div style={{
            display: "grid", gap: "var(--gut)", gridTemplateColumns: "repeat(2,1fr)",
          }} className="cases-grid">
            {RC_CASES.map((c, i) => (
              <Reveal key={c.slug} delay={i * 80}>
                <Link href={`/casos#${c.slug}`} className="rc-card" style={{
                  display: "flex", flexDirection: "column", height: "100%", overflow: "hidden",
                }}>
                  <div style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "20px 26px", borderBottom: "1px solid var(--hairline)",
                  }}>
                    <span className="rc-meta">Caso · {String(i + 1).padStart(2, "0")} / {String(RC_CASES.length).padStart(2, "0")}</span>
                    <span style={{
                      padding: "4px 10px",
                      background: c.statusTone === "active" ? R : "#0d0d0d",
                      color: "#fff",
                      fontFamily: "var(--font-mono, monospace)", fontSize: 10, letterSpacing: ".12em",
                      textTransform: "uppercase",
                    }}>{c.status}</span>
                  </div>

                  <div style={{
                    padding: "clamp(28px,4vw,48px) clamp(20px,3vw,32px)",
                    display: "flex", flexDirection: "column", gap: 20, flex: 1,
                  }}>
                    <div style={{
                      fontFamily: "var(--font-sans, system-ui)", fontWeight: 200,
                      fontSize: "clamp(56px,8vw,120px)", lineHeight: 0.88, letterSpacing: "-0.04em",
                      color: "#0d0d0d",
                    }}>{c.year}</div>
                    <div>
                      <h3 className="rc-h3" style={{ marginBottom: 6 }}>{c.name}</h3>
                      <div className="rc-meta">{c.location}</div>
                    </div>
                    <p style={{ fontSize: 14, color: "var(--fg-3)", lineHeight: 1.65, flex: 1 }}>{c.short}</p>
                  </div>

                  <div style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "18px 26px", borderTop: "1px solid var(--hairline)",
                    background: "var(--paper-2)",
                  }}>
                    <div style={{ fontSize: 15, fontWeight: 600, color: c.statusTone === "active" ? R : "#0d0d0d" }}>
                      {c.sentence}
                    </div>
                    <span style={{ fontSize: 13, fontWeight: 600, color: R }}>
                      Leer dossier →
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 760px) { .cases-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* ── QUOTE ── */}
      <section style={{ background: R, padding: "clamp(64px,9vw,120px) 0" }}>
        <div className="rc-wrap">
          <Reveal>
            <div style={{ fontFamily: "var(--font-sans, system-ui)", fontSize: 56, lineHeight: 1, color: "rgba(255,255,255,.2)", marginBottom: 20 }}>&ldquo;</div>
          </Reveal>
          <Reveal delay={80}>
            <h2 style={{
              fontFamily: "var(--font-sans, system-ui)", fontWeight: 300,
              fontSize: "clamp(24px,3.5vw,48px)", lineHeight: 1.2, letterSpacing: "-0.02em",
              color: "#fff", maxWidth: "28ch",
            }}>
              En nuestro bufete, trabajamos con compromiso, ética y dedicación,
              garantizando una defensa <em className="rc-em on-r">eficiente, confiable y adaptada a cada caso</em>.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <div style={{
              marginTop: 40, fontFamily: "var(--font-mono, monospace)", fontSize: 11,
              letterSpacing: ".12em", textTransform: "uppercase", color: "rgba(255,255,255,.5)",
            }}>
              — Lic. Joseph Alfonso Rivera Cheves
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── ÁREAS ── */}
      <section style={{ background: "#fff", padding: "var(--pad-y) 0" }}>
        <div className="rc-wrap">
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 2fr", gap: "clamp(40px,6vw,96px)",
          }} className="areas-grid">
            <div>
              <div className="rc-eyebrow" style={{ marginBottom: 16 }}>02 / 04 · Práctica legal</div>
              <Reveal>
                <h2 className="rc-h2">Áreas de <em className="rc-em">Especialización</em></h2>
              </Reveal>
              <Reveal delay={120}>
                <p className="rc-lede" style={{ marginTop: 24, marginBottom: 32 }}>
                  Vasta experiencia en múltiples ramas del derecho costarricense e internacional.
                  Representación sólida, profesional y adaptada a cada situación legal.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <Link href="/especialidades" className="rc-btn ghost">
                  Ver todas las áreas →
                </Link>
              </Reveal>
            </div>

            <div>
              {RC_AREAS.slice(0, 5).map((a, i) => (
                <Reveal key={a.n} delay={i * 60}>
                  <Link href="/especialidades" className="area-row" style={{
                    display: "grid", gridTemplateColumns: "72px 1fr auto",
                    alignItems: "baseline", gap: 24,
                    padding: "clamp(18px,2vw,28px) 0",
                    borderTop: "1px solid var(--hairline)",
                    transition: "border-top-color .25s ease",
                  }}
                  >
                    <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 12, color: "var(--fg-5)", letterSpacing: ".1em" }}>{a.n}</span>
                    <div>
                      <h3 className="rc-h3" style={{ marginBottom: 4 }}>{a.t}</h3>
                      <p style={{ fontSize: 13, color: "var(--fg-4)" }}>{a.d}</p>
                    </div>
                    <span style={{ color: "var(--fg-5)", fontSize: 16 }}>→</span>
                  </Link>
                </Reveal>
              ))}
              <div style={{ borderTop: "1px solid var(--hairline)" }}/>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .areas-grid { grid-template-columns: 1fr !important; } }
          .area-row:hover { border-top-color: #7e0102 !important; }
        `}</style>
      </section>

      {/* ── PRENSA ── */}
      <section style={{ background: "var(--paper-2)", padding: "var(--pad-y) 0" }}>
        <div className="rc-wrap">
          <div style={{
            display: "flex", alignItems: "flex-end", justifyContent: "space-between",
            gap: 24, flexWrap: "wrap", marginBottom: "clamp(40px,5vw,72px)",
          }}>
            <div>
              <div className="rc-eyebrow" style={{ marginBottom: 16 }}>03 / 04 · Prensa &amp; opinión</div>
              <Reveal><h2 className="rc-h2">Contenido <em className="rc-em">Jurídico</em></h2></Reveal>
            </div>
            <Reveal delay={120}>
              <Link href="/prensa" className="rc-btn ghost">Ver todos →</Link>
            </Reveal>
          </div>

          <div style={{
            display: "grid", gap: "var(--gut)", gridTemplateColumns: "repeat(3,1fr)",
          }} className="press-grid">
            {RC_PRESS.slice(0, 3).map((p, i) => (
              <Reveal key={p.t} delay={i * 80}>
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

      {/* ── CTA FINAL ── */}
      <section style={{ background: "#0d0d0d", padding: "clamp(80px,11vw,160px) 0" }}>
        <div className="rc-wrap">
          <div style={{
            display: "grid", gridTemplateColumns: "1.2fr 1fr",
            gap: "clamp(40px,6vw,96px)", alignItems: "end",
          }} className="cta-grid">
            <Reveal>
              <div className="rc-eyebrow on-r" style={{ marginBottom: 20 }}>04 / 04 · Hablemos</div>
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
        </div>
        <style>{`
          @media (max-width: 900px) { .cta-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>
    </div>
    </>
  );
}
