import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import { RC_FORMACION, RC_EXP, RC_DOCENCIA } from "@/lib/data";

export const metadata: Metadata = {
  title: "Quién es",
  description: "Lic. Joseph Alfonso Rivera Cheves — abogado penalista costarricense con más de 10 años de trayectoria. Director del bufete Rivera Cheves & Asociados.",
};

const R = "#7e0102";

export default function QuienPage() {
  return (
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
                <h1 className="rc-h1">Lic. Joseph Rivera <em className="rc-em">Cheves</em></h1>
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
                  src="/images/joseph3.jpg"
                  alt="Lic. Joseph Rivera Cheves"
                  width={600} height={750}
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }}
                  sizes="(max-width: 900px) 100vw, 40vw"
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

      {/* ── DOCENCIA ── */}
      <section style={{ background: R, padding: "var(--pad-y) 0" }}>
        <div className="rc-wrap">
          <div style={{ marginBottom: "clamp(40px,5vw,64px)", maxWidth: "60ch" }}>
            <div className="rc-eyebrow on-r" style={{ marginBottom: 16 }}>05 · Labor académica</div>
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
  );
}
