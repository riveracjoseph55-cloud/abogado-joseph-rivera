import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import RichText from "@/components/RichText";
import SchemaOrg from "@/components/SchemaOrg";
import CTABand from "@/components/CTABand";
import Breadcrumbs from "@/components/Breadcrumbs";
import LiteYouTube from "@/components/LiteYouTube";
import {
  SITE_URL,
  schemaInterviewArticle,
  schemaVideoObject,
  schemaFAQPage,
} from "@/lib/seo";

const R = "#7e0102";

// ── Datos de la cobertura ───────────────────────────────────────
const INT = {
  slug:      "multimedios-unibe-condena-civil",
  youtubeId: "LQHEOfjWJYs",
  outlet:    "Multimedios Costa Rica",
  dateISO:   "2022-02-25",
  dateLabel: "25 de febrero de 2022",
  image:     "/images/entrevistas/multimedios-unibe-condena.jpg",
  ogImage:   "/images/entrevistas/multimedios-unibe-condena-og.jpg",
  videoUrl:  "https://www.youtube.com/watch?v=LQHEOfjWJYs",
};

const SEO_TITLE = "UNIBE Pagará ₡50 Millones a Estudiantes | J. Rivera";
const SEO_DESC  =
  "El Lic. Joseph Rivera Cheves logra la condena civil de la Universidad Iberoamericana (UNIBE): cerca de ₡50 millones para 27 estudiantes afectados. Reportaje de Multimedios Costa Rica.";

export const metadata: Metadata = {
  title: { absolute: SEO_TITLE },
  description: SEO_DESC,
  alternates: { canonical: `${SITE_URL}/entrevistas/${INT.slug}` },
  openGraph: {
    type: "article",
    url: `${SITE_URL}/entrevistas/${INT.slug}`,
    title: SEO_TITLE,
    description: SEO_DESC,
    publishedTime: INT.dateISO,
    authors: ["Lic. Joseph Alfonso Rivera Cheves"],
    images: [{
      url: `${SITE_URL}${INT.ogImage}`, width: 1200, height: 630,
      alt: "El abogado Joseph Rivera Cheves declara a Multimedios Costa Rica sobre la condena civil contra la Universidad Iberoamericana (UNIBE)",
    }],
  },
  twitter: { card: "summary_large_image", title: SEO_TITLE, description: SEO_DESC, images: [`${SITE_URL}${INT.ogImage}`] },
  keywords: [
    "condena unibe estudiantes",
    "universidad iberoamericana demanda costa rica",
    "caso unibe microbiología",
    "abogado joseph rivera unibe",
    "carreras técnicas no reconocidas costa rica",
    "colegio de microbiólogos y químicos clínicos",
    "daño moral estudiantes universidad costa rica",
    "multimedios costa rica",
    "joseph rivera cheves entrevista",
    "abogado penalista costa rica",
    "caso ganado abogado costa rica",
  ],
};

// ── Conceptos clave (también alimenta el FAQPage schema) ────────
const CONCEPTOS: { q: string; a: string }[] = [
  {
    q: "¿Por qué se absolvió a los representantes de UNIBE en materia penal?",
    a: "El tipo penal de estafa exige que concurra un engaño: que a la persona ofendida se le muestre un hecho falso o se deforme un hecho existente. El juez Andrés Saborío explicó que, en este caso, no encontró configurado ese elemento objetivo del delito, por lo que declaró la absolutoria de los imputados.",
  },
  {
    q: "¿Cómo puede haber absolutoria penal y, al mismo tiempo, condena civil?",
    a: "Son dos vías independientes con estándares distintos. La vía penal exige acreditar todos los elementos del delito —incluido el engaño— más allá de toda duda razonable. La vía civil solo exige demostrar el daño y el nexo con la conducta de la parte demandada, un estándar probatorio menos exigente. Por eso el mismo hecho puede no configurar estafa y, sin embargo, generar responsabilidad civil por daño moral.",
  },
  {
    q: "¿Qué debe verificar un estudiante antes de matricularse en una carrera técnica privada?",
    a: "Que el programa cuente con el aval del CONESUP o del Consejo Superior de Educación, según corresponda, y que el título habilite efectivamente la incorporación al colegio profesional respectivo. La ausencia de ese reconocimiento fue precisamente lo que impidió a los estudiantes de este caso ejercer su carrera técnica.",
  },
];

const RESUMEN = [
  "**Multimedios Costa Rica** reportó que el **Tribunal Penal del Segundo Circuito Judicial de Goicoechea** condenó civilmente a la **Universidad Iberoamericana (UNIBE)** al pago de cerca de **₡50 millones de colones**, luego de que un grupo de estudiantes no pudiera ejercer las carreras técnicas de **asistente en microbiología** y **asistente en laboratorio clínico**.",
  "Los hechos se remontan a **2015**, cuando la universidad impartía estas carreras sin que fueran reconocidas ante el **Colegio de Microbiólogos y Químicos Clínicos de Costa Rica**, un requisito indispensable para que los egresados pudieran incorporarse al colegio profesional y ejercer.",
  "La demanda fue interpuesta originalmente por **29 estudiantes**; dos de ellos desistieron de declarar durante el proceso. El **Lic. Joseph Rivera Cheves** asumió la representación de los querellantes ya en la etapa de juicio, sin haber redactado la querella original, y logró que el tribunal ordenara el pago de **₡1 millón de colones por daño moral** a cada uno de los 27 estudiantes restantes, además del reintegro de los **gastos de matrícula**.",
  "En sede penal, el resultado fue distinto: el tribunal declaró la **absolutoria** de Israel Hernández y Cristian Blanco, representantes de la universidad, sobre el delito de estafa que también se perseguía. El juez Andrés Saborío fundamentó la decisión en la ausencia de uno de los elementos objetivos del tipo penal: el engaño.",
  "El propio Rivera Cheves reconoció, en declaraciones a Multimedios, que el resultado **no fue 100% satisfactorio** —él también aspiraba a la condena penal— pero destacó el logro en la vía civil. Señaló además una dificultad probatoria concreta: los estudiantes no lograron aportar certificaciones de algún laboratorio que acreditaran la pérdida de expectativas laborales durante un plazo determinado, lo que convirtió el litigio en un proceso **«totalmente maratónico»**.",
];

const QUOTES = [
  { t: "Es lamentable que por una falta de técnica jurídica los absolvieran en lo penal, pero gracias a Dios en la parte civil sí se logró esa condena, en una forma muy asertiva de parte del tribunal de juicio aquí en Goicoechea.", c: "Sobre el resultado del juicio" },
  { t: "Cuando yo tomé este juicio, lo tomé ya en la etapa de juicio; yo no redacté la querella.", c: "Sobre su rol en el proceso" },
  { t: "Fue totalmente maratónico llevar este caso.", c: "Sobre el reto probatorio" },
];

export default function EntrevistaMultimediosUnibePage() {
  const articleSchema = schemaInterviewArticle({
    slug: INT.slug,
    title: "UNIBE pagará ₡50 millones a estudiantes: la condena civil obtenida por Joseph Rivera Cheves",
    description: SEO_DESC,
    date: INT.dateISO,
    image: INT.ogImage,
    sourceUrl: INT.videoUrl,
  });
  const videoSchema = schemaVideoObject({
    name: "UNIBE pagará más de ₡50 millones a estudiantes (Multimedios Costa Rica)",
    description: SEO_DESC,
    videoId: INT.youtubeId,
    date: INT.dateISO,
    publisherName: "Multimedios Costa Rica",
  });

  return (
    <>
      <SchemaOrg data={articleSchema} />
      <SchemaOrg data={videoSchema} />
      <SchemaOrg data={schemaFAQPage(CONCEPTOS)} />
      <div className="rc-page">

        {/* ── HERO ─────────────────────────────────────────────── */}
        <section style={{ background: "var(--paper)", padding: "clamp(40px,5vw,72px) 0 clamp(32px,4vw,56px)" }}>
          <div className="rc-wrap" style={{ maxWidth: 1080 }}>
            <Breadcrumbs trail={[{ name: "Prensa", href: "/prensa" }, { name: "Caso UNIBE · Multimedios", href: `/entrevistas/${INT.slug}` }]} />

            <Reveal>
              <div className="rc-eyebrow" style={{ color: R, marginBottom: 18 }}>
                Caso ganado · {INT.outlet}
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="rc-h1" style={{ marginBottom: 22, maxWidth: "24ch" }}>
                UNIBE pagará <em className="rc-em">₡50 millones</em> a estudiantes afectados
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className="rc-lede" style={{ maxWidth: "62ch", marginBottom: 24 }}>
                El Lic. Joseph Rivera Cheves logró la condena civil de la Universidad Iberoamericana (UNIBE)
                a favor de 27 estudiantes cuyas carreras técnicas nunca fueron reconocidas por el colegio
                profesional respectivo.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div style={{
                display: "flex", gap: 18, flexWrap: "wrap", alignItems: "center",
                fontFamily: "var(--font-mono, ui-monospace)", fontSize: 11,
                letterSpacing: ".1em", textTransform: "uppercase", color: "var(--fg-4)",
              }}>
                <span>Reportaje: {INT.outlet}</span>
                <span aria-hidden="true">·</span>
                <span>{INT.dateLabel}</span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── VIDEO ────────────────────────────────────────────── */}
        <section style={{ background: "var(--ink)", padding: "clamp(32px,4vw,64px) 0" }}>
          <div className="rc-wrap" style={{ maxWidth: 1080 }}>
            <Reveal>
              <LiteYouTube
                id={INT.youtubeId}
                title="UNIBE pagará más de ₡50 millones a estudiantes — reportaje de Multimedios Costa Rica"
                poster={INT.image}
              />
            </Reveal>
            <div style={{
              display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center",
              marginTop: 20, justifyContent: "space-between",
            }}>
              <div style={{ fontFamily: "var(--font-mono, ui-monospace)", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(255,255,255,.5)" }}>
                Video · {INT.outlet}
              </div>
              <a href={INT.videoUrl} target="_blank" rel="noopener noreferrer" className="rc-btn on-r">
                Ver en YouTube <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* ── RESUMEN EDITORIAL + CITAS ────────────────────────── */}
        <section style={{ background: "#fff", padding: "var(--pad-y) 0" }}>
          <div className="rc-wrap" style={{ maxWidth: 820 }}>
            <Reveal>
              <div className="rc-eyebrow" style={{ marginBottom: 14 }}>Resumen del caso</div>
              <h2 className="rc-h2" style={{ marginBottom: 32 }}>Qué <em className="rc-em">se resolvió</em></h2>
            </Reveal>

            {RESUMEN.map((p, i) => (
              <Reveal key={i} delay={i * 60}>
                <RichText
                  text={p}
                  style={{
                    fontFamily: "var(--font-sans, system-ui)",
                    fontSize: i === 0 ? "clamp(18px,1.5vw,21px)" : "17px",
                    lineHeight: 1.7,
                    color: i === 0 ? "var(--ink)" : "var(--fg-2)",
                    marginBottom: 24,
                  }}
                />
              </Reveal>
            ))}

            {/* Citas destacadas */}
            <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 28 }}>
              {QUOTES.map((q, i) => (
                <Reveal key={i} delay={i * 80}>
                  <blockquote style={{
                    margin: 0, padding: "8px 0 8px 24px",
                    borderLeft: `3px solid ${R}`,
                  }}>
                    <p style={{
                      fontFamily: "var(--font-sans, system-ui)", fontWeight: 400,
                      fontSize: "clamp(18px,1.9vw,24px)", lineHeight: 1.35,
                      letterSpacing: "-0.01em", color: "var(--ink)", margin: "0 0 10px",
                    }}>
                      «{q.t}»
                    </p>
                    <cite style={{
                      fontFamily: "var(--font-mono, ui-monospace)", fontStyle: "normal",
                      fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--fg-5)",
                    }}>
                      {q.c} — Lic. Joseph Rivera Cheves
                    </cite>
                  </blockquote>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── EL CASO (hechos clave) ───────────────────────────── */}
        <section style={{ background: "var(--paper)", padding: "var(--pad-y) 0" }}>
          <div className="rc-wrap" style={{ maxWidth: 1080 }}>
            <Reveal>
              <div className="rc-eyebrow" style={{ marginBottom: 14 }}>El caso · UNIBE</div>
              <h2 className="rc-h2" style={{ marginBottom: 32 }}>Hechos <em className="rc-em">clave</em></h2>
            </Reveal>
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 0,
              borderTop: "1px solid var(--hairline)", marginBottom: 32,
            }} className="int-facts">
              {[
                ["Institución", "Universidad Iberoamericana (UNIBE)"],
                ["Rol del bufete", "Representación civil de 27 estudiantes"],
                ["Resultado civil", "≈ ₡50 millones · daño moral + matrícula"],
                ["Resultado penal", "Absolutoria por estafa (sin engaño acreditado)"],
              ].map(([k, v], i) => (
                <Reveal key={i} delay={i * 50}>
                  <div style={{
                    padding: "18px 0", borderBottom: "1px solid var(--hairline)",
                    display: "flex", flexDirection: "column", gap: 4,
                  }}>
                    <span className="rc-meta" style={{ color: "var(--fg-5)" }}>{k}</span>
                    <span style={{ fontSize: 16, fontWeight: 500, color: "var(--ink)", lineHeight: 1.35 }}>{v}</span>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={100}>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link href="/comunicados/condena-civil-unibe-estudiantes-microbiologia" className="rc-btn primary">
                  Leer el comunicado oficial <span className="arrow">→</span>
                </Link>
                <Link href="/prensa" className="rc-btn ghost">
                  Toda la cobertura de prensa
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── CONCEPTOS CLAVE (FAQ) ─────────────────────────────── */}
        <section style={{ background: "#fff", padding: "var(--pad-y) 0" }}>
          <div className="rc-wrap" style={{ maxWidth: 900 }}>
            <Reveal>
              <div className="rc-eyebrow" style={{ marginBottom: 14 }}>Guía rápida</div>
              <h2 className="rc-h2" style={{ marginBottom: 20 }}>Conceptos <em className="rc-em">clave</em></h2>
              <p className="rc-lede" style={{ maxWidth: "58ch", marginBottom: 40 }}>
                Por qué es posible una absolutoria penal y una condena civil sobre los mismos hechos.
              </p>
            </Reveal>
            <div style={{ borderTop: "1px solid var(--hairline-strong)" }}>
              {CONCEPTOS.map((f, i) => (
                <Reveal key={i} delay={i * 50}>
                  <div style={{
                    padding: "clamp(22px,2.6vw,32px) 0",
                    borderBottom: "1px solid var(--hairline)",
                    display: "grid", gridTemplateColumns: "1fr 1.5fr",
                    gap: "clamp(16px,3vw,48px)", alignItems: "start",
                  }} className="ley-row">
                    <h3 style={{
                      fontFamily: "var(--font-sans, system-ui)", fontWeight: 600,
                      fontSize: "clamp(16px,1.5vw,19px)", lineHeight: 1.35, color: "var(--ink)",
                    }}>
                      {f.q}
                    </h3>
                    <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--fg-2)", margin: 0 }}>
                      {f.a}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <CTABand />
      </div>

      <style>{`
        @media (max-width: 860px) {
          .int-facts { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 760px) {
          .ley-row { grid-template-columns: 1fr !important; gap: 10px !important; }
        }
      `}</style>
    </>
  );
}
