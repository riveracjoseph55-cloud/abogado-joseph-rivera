import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import SchemaOrg from "@/components/SchemaOrg";
import { RC_FORMACION, RC_DOCENCIA } from "@/lib/data";
import RichText from "@/components/RichText";
import { SITE_URL, SITE_NAME, OG_IMAGE, schemaAttorney } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: "Formación y Atestados | Abogado Joseph Rivera Cheves" },
  description:
    "Formación académica del Lic. Joseph Rivera Cheves, abogado penalista en Costa Rica: Máster en Compliance, Maestría Derecho Penal, Temple University. Docente en 6 universidades.",
  alternates: { canonical: `${SITE_URL}/atestados` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/atestados`,
    title: `Formación y Atestados | ${SITE_NAME}`,
    description:
      "Perfil académico completo: Máster en Compliance, Maestría en Derecho Penal, Temple University y docencia en 6 universidades costarricenses.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Atestados | ${SITE_NAME}` }],
  },
  twitter: { card: "summary_large_image", title: `Formación y Atestados | ${SITE_NAME}`, images: [OG_IMAGE] },
  keywords: [
    "joseph rivera cheves curriculum vitae",
    "abogado penalista titulado costa rica",
    "master compliance penal costa rica",
    "docente derecho penal universidades costa rica",
    "joseph rivera formacion academica",
    "auditor lider ISO 37001 costa rica",
    "temple university abogado costa rica",
    "abogado ealde business school",
  ],
};

const R = "#7e0102";

export default function AtestadosPage() {
  return (
    <>
    <SchemaOrg data={schemaAttorney} />
    <div className="rc-page">

      {/* ── HERO ── */}
      <section style={{ background: "var(--paper)", padding: "clamp(60px,8vw,120px) 0" }}>
        <div className="rc-wrap">
          <Reveal>
            <div className="rc-eyebrow" style={{ marginBottom: 20 }}>Currículo</div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="rc-h1">Perfil <em className="rc-em">Profesional</em></h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="rc-lede" style={{ marginTop: 32, maxWidth: "56ch" }}>
              Trayectoria académica, profesional y docente completa del Lic. Joseph Alfonso
              Rivera Cheves — abogado penalista costarricense con más de 17 años de ejercicio.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background: "#fff", padding: "clamp(48px,6vw,88px) 0" }}>
        <div className="rc-wrap">
          <div style={{
            display: "grid", gap: "var(--gut)", gridTemplateColumns: "repeat(4,1fr)",
          }} className="stats-row">
            {[
              { num: "06", label: "Maestrías y especializaciones internacionales" },
              { num: "08", label: "Cargos profesionales 2008 → presente" },
              { num: "06", label: "Universidades como docente 2011 — 2023" },
              { num: "17+", label: "Años de ejercicio profesional" },
            ].map((s, i) => (
              <Reveal key={s.num} delay={i * 80}>
                <div>
                  <div style={{
                    fontFamily: "var(--font-sans, system-ui)", fontWeight: 300,
                    fontSize: "clamp(40px,5vw,64px)", lineHeight: 1,
                    letterSpacing: "-0.03em", color: R, marginBottom: 12,
                  }}>{s.num}</div>
                  <div style={{ fontSize: 13, color: "var(--fg-4)", lineHeight: 1.5 }}>{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .stats-row { grid-template-columns: 1fr 1fr !important; } }
        `}</style>
      </section>

      {/* ── CURRÍCULO ── */}
      <section style={{ background: "var(--paper)", padding: "var(--pad-y) 0" }}>
        <div className="rc-wrap" style={{ maxWidth: 900 }}>
          <div className="rc-eyebrow" style={{ marginBottom: 16 }}>01 · Currículo en una página</div>
          <Reveal>
            <h2 className="rc-h2">Resumen <em className="rc-em">visual</em></h2>
          </Reveal>
          <Reveal delay={120}>
            <div style={{
              marginTop: 40,
              boxShadow: "0 12px 48px rgba(0,0,0,.10)",
              overflow: "hidden",
            }}>
              <Image
                src="/images/curriculo.jpg"
                alt="Currículo del abogado penalista Joseph Rivera Cheves — Máster en Compliance Penal, Maestría Derecho Penal, Auditor ISO 37001 — formación académica Costa Rica"
                width={900} height={1200}
                style={{ width: "100%", height: "auto" }}
                sizes="(max-width: 900px) 100vw, 900px"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FORMACIÓN ── */}
      <section style={{ background: "#fff", padding: "var(--pad-y) 0" }}>
        <div className="rc-wrap">
          <div style={{ marginBottom: "clamp(32px,4vw,56px)" }}>
            <div className="rc-eyebrow" style={{ marginBottom: 16 }}>02 · Formación académica</div>
            <Reveal><h2 className="rc-h2">Doble titulación <em className="rc-em">internacional</em></h2></Reveal>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {RC_FORMACION.map((f, i) => (
              <Reveal key={f.t} delay={i * 50}>
                <div style={{
                  display: "grid", gridTemplateColumns: "56px 1fr 1.4fr",
                  gap: "clamp(20px,2.6vw,40px)",
                  padding: "clamp(24px,3vw,36px) 0",
                  borderTop: "1px solid var(--hairline)",
                }} className="form-row">
                  <div className="rc-meta" style={{ color: R }}>{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="rc-h3">{f.t}</h3>
                  <div>
                    <div style={{
                      fontFamily: "var(--font-mono, monospace)", fontSize: 11,
                      letterSpacing: ".06em", color: "var(--fg-5)", marginBottom: 10,
                    }}>{f.s}</div>
                    <RichText text={f.d} style={{ fontSize: 14, color: "var(--fg-3)", lineHeight: 1.7 }} />
                  </div>
                </div>
              </Reveal>
            ))}
            <div style={{ borderTop: "1px solid var(--hairline)" }}/>
          </div>
        </div>
        <style>{`
          @media (max-width: 700px) { .form-row { grid-template-columns: 1fr !important; gap: 8px !important; } }
        `}</style>
      </section>

      {/* ── DOCENCIA MARQUEE ── */}
      <section style={{ background: "var(--paper-2)", padding: "clamp(48px,6vw,88px) 0" }}>
        <div className="rc-wrap">
          <div className="rc-eyebrow" style={{ marginBottom: 20 }}>03 · Docencia universitaria · 2011 — 2023</div>
        </div>
        <div style={{
          marginTop: 24, overflow: "hidden",
          maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
          WebkitMaskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
        }}>
          <div className="rc-marquee" style={{
            fontFamily: "var(--font-sans, system-ui)", fontWeight: 300,
            fontSize: "clamp(24px,3.5vw,48px)", letterSpacing: "-0.015em",
            color: "#0d0d0d",
          }}>
            {[...RC_DOCENCIA, ...RC_DOCENCIA].map((u, i) => (
              <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 48 }}>
                <span>{u}</span>
                <span style={{ color: R }}>✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </div>
    </>
  );
}
