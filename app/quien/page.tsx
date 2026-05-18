import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import SchemaOrg from "@/components/SchemaOrg";
import { RC_FORMACION, RC_EXP, RC_DOCENCIA, RC_DOCTRINA } from "@/lib/data";
import { SITE_URL, SITE_NAME, schemaAttorney, schemaLegalService } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Joseph Rivera Abogado Penalista Costa Rica",
  description:
    "Joseph Rivera Cheves, abogado penalista en Costa Rica con +10 años de trayectoria. Máster en Compliance, Maestría en Derecho Penal. Director del bufete Rivera Cheves & Asociados.",
  alternates: { canonical: `${SITE_URL}/quien` },
  openGraph: {
    type: "profile",
    url: `${SITE_URL}/quien`,
    title: `Abogado Penalista Joseph Rivera Cheves | ${SITE_NAME}`,
    description:
      "Perfil profesional del Lic. Joseph Rivera Cheves: 10+ años en litigación penal, Máster en Compliance, docente universitario y referente mediático en CR.",
    images: [{ url: `${SITE_URL}/images/joseph-hero.png`, width: 1200, height: 630, alt: "Lic. Joseph Alfonso Rivera Cheves" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Abogado Penalista Joseph Rivera Cheves | ${SITE_NAME}`,
    images: [`${SITE_URL}/images/joseph-hero.png`],
  },
};

const R = "#7e0102";

export default function QuienPage() {
  return (
    <>
    <SchemaOrg data={[schemaAttorney, schemaLegalService]} />
    <div className="rc-page">

      {/* ── HERO ── */}
      <section style={{ background: "var(--paper)", padding: "clamp(60px,8vw,120px) 0" }}>
        <div className="rc-wrap">
          <div style={{
            display: "grid", gridTemplateColumns: "1.4fr 1fr",
            gap: "clamp(32px,5vw,80px)", alignItems: "end",
          }} className="hero-grid">
            <div>
              <Reveal>
                <div className="rc-eyebrow" style={{ marginBottom: 20 }}>El abogado · 01 / 04</div>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="rc-h1">Joseph Rivera <em className="rc-em">Abogado Penalista</em></h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="rc-lede" style={{ marginTop: 32 }}>
                  Abogado penalista costarricense con más de 10 años de trayectoria en la
                  defensa de derechos fundamentales y la justicia penal. Director del bufete
                  Rivera Cheves &amp; Asociados.
                </p>
              </Reveal>
            </div>
            <Reveal delay={120}>
              <div style={{ aspectRatio: "4/5", background: "#0d0d0d", overflow: "hidden" }}>
                <Image
                  src="/images/joseph/retrato.jpg"
                  alt="Lic. Joseph Alfonso Rivera Cheves — abogado penalista costarricense"
                  width={800} height={1000}
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
                  sizes="(max-width: 900px) 100vw, 40vw"
                  priority
                  fetchPriority="high"
                />
              </div>
            </Reveal>
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .hero-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* ── BIO + QUOTE ── */}
      <section style={{ background: "#fff", padding: "var(--pad-y) 0" }}>
        <div className="rc-wrap">
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1.4fr",
            gap: "clamp(32px,5vw,80px)",
          }} className="bio-grid">
            <div>
              <div className="rc-eyebrow" style={{ marginBottom: 16 }}>02 · Perfil profesional</div>
              <Reveal>
                <h2 className="rc-h2">Compromiso con la <em className="rc-em">Justicia</em></h2>
              </Reveal>
            </div>
            <div>
              <Reveal>
                <p className="rc-body" style={{ fontSize: 17, marginBottom: 22 }}>
                  El Lic. Joseph Alfonso Rivera Cheves es un abogado penalista costarricense
                  con destacada trayectoria en la defensa de derechos fundamentales y en la
                  lucha contra la aplicación indebida de leyes que vulneran garantías constitucionales.
                </p>
              </Reveal>
              <Reveal delay={80}>
                <p className="rc-body" style={{ marginBottom: 22 }}>
                  Desde diciembre de 2015 ejerce como abogado litigante en materia penal, con
                  representación en casos penales y asesoría en política penal y litigación judicial
                  a nivel nacional. Fue asesor ad honorem en la Asamblea Legislativa de Costa Rica
                  entre mayo de 2020 y mayo de 2022.
                </p>
              </Reveal>
              <Reveal delay={160}>
                <p className="rc-body" style={{ marginBottom: 36 }}>
                  Ha ocupado cargos como asesor legal en la Dirección General de Aviación Civil,
                  abogado de planta del Banco Nacional de Costa Rica, asesor legal de la
                  Municipalidad de Santa Bárbara de Heredia, notario público de planta de la
                  Corporación Grupo Q y asesor legal del Colegio de Ciencias Económicas.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <blockquote style={{ borderLeft: "2px solid var(--r)", paddingLeft: 28 }}>
                  <p style={{
                    fontFamily: "Georgia, serif", fontStyle: "italic",
                    fontSize: "clamp(18px,2.2vw,26px)", fontWeight: 400,
                    lineHeight: 1.45, color: "#0d0d0d",
                  }}>
                    &ldquo;En nuestro bufete, trabajamos con compromiso, ética y dedicación,
                    garantizando una defensa eficiente, confiable y adaptada a cada caso.&rdquo;
                  </p>
                  <cite className="rc-meta" style={{ display: "block", marginTop: 18 }}>
                    — Lic. Joseph Alfonso Rivera Cheves
                  </cite>
                </blockquote>
              </Reveal>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .bio-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* ── FORMACIÓN ── */}
      <section style={{ background: "var(--paper)", padding: "var(--pad-y) 0" }}>
        <div className="rc-wrap">
          <div style={{ marginBottom: "clamp(40px,5vw,72px)" }}>
            <div className="rc-eyebrow" style={{ marginBottom: 16 }}>03 · Formación académica</div>
            <Reveal><h2 className="rc-h2">Excelencia <em className="rc-em">Académica</em></h2></Reveal>
          </div>

          <div style={{
            display: "grid", gap: "var(--gut)", gridTemplateColumns: "repeat(2,1fr)",
          }} className="form-grid">
            {RC_FORMACION.map((f, i) => (
              <Reveal key={f.t} delay={i * 60}>
                <div className="rc-card" style={{ padding: 28, height: "100%" }}>
                  <div className="rc-meta" style={{ color: R, marginBottom: 12 }}>
                    {String(i + 1).padStart(2, "0")} · {f.s.split(" · ").at(-1)}
                  </div>
                  <h3 className="rc-h3" style={{ marginBottom: 10 }}>{f.t}</h3>
                  <div style={{ fontSize: 12, color: "var(--fg-5)", marginBottom: 12, fontFamily: "var(--font-mono, monospace)", letterSpacing: ".06em" }}>{f.s}</div>
                  <p style={{ fontSize: 14, color: "var(--fg-3)", lineHeight: 1.65 }}>{f.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 700px) { .form-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* ── EXPERIENCIA ── */}
      <section style={{ background: "#fff", padding: "var(--pad-y) 0" }}>
        <div className="rc-wrap">
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1.6fr",
            gap: "clamp(32px,5vw,80px)",
          }} className="exp-grid">
            <div>
              <div className="rc-eyebrow" style={{ marginBottom: 16 }}>04 · Trayectoria</div>
              <Reveal><h2 className="rc-h2">Experiencia <em className="rc-em">Profesional</em></h2></Reveal>
            </div>
            <div>
              {RC_EXP.map((e, i) => (
                <Reveal key={e.cargo + i} delay={i * 50}>
                  <div style={{
                    display: "grid", gridTemplateColumns: "160px 1fr", gap: 24,
                    padding: "clamp(20px,2.5vw,32px) 0",
                    borderTop: i === 0 ? "none" : "1px solid var(--hairline)",
                  }} className="exp-row">
                    <div className="rc-meta" style={{ color: R }}>{e.anio}</div>
                    <div>
                      <h3 className="rc-h4" style={{ marginBottom: 4 }}>{e.cargo}</h3>
                      <div style={{ fontSize: 12, color: "var(--fg-5)", marginBottom: 8 }}>{e.lugar}</div>
                      <p style={{ fontSize: 14, color: "var(--fg-3)", lineHeight: 1.65 }}>{e.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .exp-grid { grid-template-columns: 1fr !important; } }
          @media (max-width: 600px) { .exp-row { grid-template-columns: 1fr !important; gap: 8px !important; } }
        `}</style>
      </section>

      {/* ── INTERVENCIONES MEDIÁTICAS ── */}
      <section style={{ background: "#0d0d0d", padding: "var(--pad-y) 0", color: "#fff" }}>
        <div className="rc-wrap">
          <div style={{ marginBottom: "clamp(40px,5vw,64px)", maxWidth: "60ch" }}>
            <div className="rc-eyebrow on-r" style={{ marginBottom: 16 }}>05 · Voz pública</div>
            <Reveal>
              <h2 className="rc-h2" style={{ color: "#fff" }}>
                Intervenciones <em className="rc-em" style={{ color: R, opacity: 1 }}>mediáticas</em>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="rc-lede" style={{ color: "rgba(255,255,255,.7)", marginTop: 24 }}>
                Referente jurídico en prensa nacional e internacional. Cobertura
                permanente en televisión, radio, prensa escrita y podcasts —
                desde casos emblemáticos hasta análisis doctrinales.
              </p>
            </Reveal>
          </div>

          <div style={{
            display: "grid", gap: "clamp(16px,2.4vw,28px)",
            gridTemplateColumns: "1.4fr 1fr",
          }} className="media-grid">
            <Reveal>
              <figure style={{ margin: 0, position: "relative", aspectRatio: "4/3", overflow: "hidden", background: "#1a1a1a" }}>
                <Image
                  src="/images/joseph/prensa.jpg"
                  alt="Lic. Joseph Rivera Cheves declarando ante medios nacionales: Multimedios, Trivisión, Canal 7"
                  fill
                  sizes="(max-width: 900px) 100vw, 60vw"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
                <figcaption style={{
                  position: "absolute", left: 0, right: 0, bottom: 0,
                  padding: "20px 24px",
                  background: "linear-gradient(to top, rgba(0,0,0,.85), transparent)",
                }}>
                  <div className="rc-meta" style={{ color: "rgba(255,255,255,.65)", marginBottom: 6 }}>
                    Declaraciones a prensa
                  </div>
                  <div style={{ fontSize: 16, fontWeight: 500, color: "#fff", lineHeight: 1.3 }}>
                    Multimedios · Trivisión · Canal 7 · Central de Noticias
                  </div>
                </figcaption>
              </figure>
            </Reveal>

            <Reveal delay={120}>
              <figure style={{ margin: 0, position: "relative", aspectRatio: "4/3", overflow: "hidden", background: "#1a1a1a" }}>
                <Image
                  src="/images/joseph/podcast.jpg"
                  alt="Lic. Joseph Rivera Cheves en estudio de podcast — análisis jurídico en formato extendido"
                  fill
                  sizes="(max-width: 900px) 100vw, 40vw"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
                <figcaption style={{
                  position: "absolute", left: 0, right: 0, bottom: 0,
                  padding: "20px 24px",
                  background: "linear-gradient(to top, rgba(0,0,0,.85), transparent)",
                }}>
                  <div className="rc-meta" style={{ color: "rgba(255,255,255,.65)", marginBottom: 6 }}>
                    Podcasts &amp; entrevistas
                  </div>
                  <div style={{ fontSize: 16, fontWeight: 500, color: "#fff", lineHeight: 1.3 }}>
                    Análisis jurídico en formato extendido
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
        <style>{`
          @media (max-width: 800px) { .media-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* ── DOCTRINA E INCIDENCIA ── */}
      <section style={{ background: "var(--paper-2, #f3eee5)", padding: "var(--pad-y) 0" }}>
        <div className="rc-wrap">
          <div style={{ marginBottom: "clamp(40px,5vw,64px)" }}>
            <div className="rc-eyebrow" style={{ marginBottom: 16 }}>06 · Influencia académica y legislativa</div>
            <Reveal>
              <h2 className="rc-h2" style={{ maxWidth: "20ch" }}>
                Doctrina e <em className="rc-em">Incidencia</em>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="rc-lede" style={{ marginTop: 24, maxWidth: "62ch" }}>
                Más allá del litigio: producción doctrinal publicada y propuestas
                legislativas activas que buscan reformar el aparato punitivo costarricense.
              </p>
            </Reveal>
          </div>

          <div style={{
            display: "grid", gap: "clamp(20px,3vw,40px)", gridTemplateColumns: "1fr 1fr",
          }} className="doctrina-grid">
            <Reveal>
              <div style={{
                background: "#fff", padding: "clamp(28px,4vw,48px)",
                border: "1px solid var(--hairline)",
              }}>
                <div className="rc-meta" style={{ color: R, marginBottom: 18 }}>Producción doctrinal</div>
                {RC_DOCTRINA.articulos.map((a, i) => (
                  <div key={i} style={{ marginBottom: i < RC_DOCTRINA.articulos.length - 1 ? 28 : 0 }}>
                    <h3 className="rc-h3" style={{ marginBottom: 8, fontSize: 22 }}>{a.titulo}</h3>
                    <div className="rc-meta" style={{ color: "var(--fg-5)", marginBottom: 10 }}>{a.tipo}</div>
                    <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--fg-3)" }}>{a.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div style={{
                background: "#fff", padding: "clamp(28px,4vw,48px)",
                border: "1px solid var(--hairline)",
              }}>
                <div className="rc-meta" style={{ color: R, marginBottom: 18 }}>Incidencia legislativa</div>
                {RC_DOCTRINA.propuestas.map((p, i) => (
                  <div key={i} style={{ marginBottom: i < RC_DOCTRINA.propuestas.length - 1 ? 28 : 0 }}>
                    <h3 className="rc-h3" style={{ marginBottom: 8, fontSize: 22 }}>{p.titulo}</h3>
                    <div className="rc-meta" style={{ color: "var(--fg-5)", marginBottom: 10 }}>{p.tipo}</div>
                    <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--fg-3)" }}>{p.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div style={{ marginTop: "clamp(40px,5vw,64px)", paddingTop: 32, borderTop: "1px solid var(--hairline)" }}>
              <div className="rc-meta" style={{ color: R, marginBottom: 20 }}>Reconocimientos institucionales</div>
              <ul style={{
                listStyle: "none", display: "grid",
                gap: 14, gridTemplateColumns: "repeat(2,1fr)",
              }} className="recon-list">
                {RC_DOCTRINA.reconocimientos.map((r, i) => (
                  <li key={i} style={{
                    display: "flex", gap: 14,
                    paddingTop: 14, borderTop: "1px solid var(--hairline)",
                  }}>
                    <span style={{
                      fontFamily: "var(--font-mono, monospace)", fontSize: 12, color: R,
                      letterSpacing: ".1em", minWidth: 28,
                    }}>{String(i + 1).padStart(2, "0")}</span>
                    <span style={{ fontSize: 14, lineHeight: 1.6, color: "var(--fg-2)" }}>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
        <style>{`
          @media (max-width: 900px) { .doctrina-grid { grid-template-columns: 1fr !important; } }
          @media (max-width: 700px) { .recon-list { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* ── DOCENCIA ── */}
      <section style={{ background: R, padding: "var(--pad-y) 0" }}>
        <div className="rc-wrap">
          <div style={{ marginBottom: "clamp(40px,5vw,64px)", maxWidth: "60ch" }}>
            <div className="rc-eyebrow on-r" style={{ marginBottom: 16 }}>07 · Labor académica</div>
            <Reveal><h2 className="rc-h2" style={{ color: "#fff" }}>Docencia <em className="rc-em on-r">Universitaria</em></h2></Reveal>
            <Reveal delay={120}>
              <p className="rc-lede" style={{ color: "rgba(255,255,255,.75)", marginTop: 24 }}>
                Entre 2011 y 2023 impartió cursos en derecho penal, procesal penal,
                derechos humanos y derecho laboral en las siguientes instituciones:
              </p>
            </Reveal>
          </div>

          <div style={{
            display: "grid", gap: 12, gridTemplateColumns: "repeat(3,1fr)",
          }} className="doc-grid">
            {RC_DOCENCIA.map((u, i) => (
              <Reveal key={u} delay={i * 60}>
                <div className="rc-card on-r" style={{
                  padding: "22px 24px",
                  display: "flex", alignItems: "center", gap: 14,
                }}>
                  <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 12, color: "rgba(255,255,255,.4)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span style={{ fontSize: 15, color: "#fff", fontWeight: 500 }}>{u}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .doc-grid { grid-template-columns: 1fr 1fr !important; } }
          @media (max-width: 600px) { .doc-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      <CTABand />
    </div>
    </>
  );
}
