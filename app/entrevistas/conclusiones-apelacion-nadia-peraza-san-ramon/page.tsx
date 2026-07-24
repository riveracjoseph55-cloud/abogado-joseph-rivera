import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import RichText from "@/components/RichText";
import SchemaOrg from "@/components/SchemaOrg";
import CTABand from "@/components/CTABand";
import Breadcrumbs from "@/components/Breadcrumbs";
import LiteFacebookVideo from "@/components/LiteFacebookVideo";
import {
  SITE_URL,
  schemaInterviewArticle,
  schemaVideoObjectExternal,
  schemaFAQPage,
} from "@/lib/seo";

const R = "#7e0102";

// ── Datos de la audiencia ────────────────────────────────────
const INT = {
  slug:      "conclusiones-apelacion-nadia-peraza-san-ramon",
  outlet:    "Vista Oral · Tribunal de Apelación de Sentencia Penal, San Ramón",
  dateISO:   "2026-07-15",
  dateLabel: "Julio de 2026",
  ogImage:   "/images/entrevistas/conclusiones-apelacion-og.jpg",
  poster:    "/images/entrevistas/conclusiones-apelacion-poster.jpg",
  videoUrl:  "https://www.facebook.com/reel/1188557176769270",
};

const SEO_TITLE = "Conclusiones: Apelación Caso Nadia Peraza — Joseph Rivera";
const SEO_DESC  =
  "El Lic. Joseph Rivera presenta sus conclusiones en la Vista Oral de apelación del caso Nadia Peraza ante el Tribunal de San Ramón y pide revisar la dosificación de la pena.";

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
      alt: "El abogado Joseph Rivera Cheves presenta sus conclusiones en la Vista Oral de apelación del caso Nadia Peraza, Tribunal de Apelación de San Ramón",
    }],
  },
  twitter: { card: "summary_large_image", title: SEO_TITLE, description: SEO_DESC, images: [`${SITE_URL}${INT.ogImage}`] },
  keywords: [
    "conclusiones apelación nadia peraza",
    "vista oral nadia peraza",
    "tribunal de apelación san ramón",
    "joseph rivera cheves apelación",
    "sustracción patrimonial nadia peraza",
    "dosificación de la pena costa rica",
    "jeremy buzano paisano apelación",
    "caso nadia peraza 2026",
    "querellante nadia peraza",
    "abogado femicidio costa rica",
    "el caníbal de la refrigeradora",
    "reenvío tribunal de juicio costa rica",
  ],
};

// ── Conceptos clave (también alimenta el FAQPage schema) ────────
const CONCEPTOS: { q: string; a: string }[] = [
  {
    q: "¿Qué es la sustracción patrimonial que menciona el recurso?",
    a: "El uso, por parte del condenado, de las tarjetas de débito y crédito de Nadia Peraza tras su muerte para realizar compras — un hecho patrimonial adicional que, según el recurso presentado por la querella, no fue valorado en la sentencia original para efectos de la pena.",
  },
  {
    q: "¿Qué pide exactamente la apelación del querellante?",
    a: "Un reenvío a otro tribunal de juicio para que valore específicamente ese extremo en la dosificación de la pena. No se cuestiona la condena en sí — ya firme en cuanto a la responsabilidad del condenado — sino si la pena impuesta debió ser mayor.",
  },
  {
    q: "¿Qué es la correlación entre acusación y sentencia?",
    a: "Un principio del artículo 142 del Código Procesal Penal costarricense: la sentencia debe resolver sobre los mismos hechos y la misma calificación jurídica que fueron objeto de la acusación, sin introducir elementos ajenos al debate.",
  },
  {
    q: "¿Cuándo resuelve el Tribunal de Apelación?",
    a: "Tras la Vista Oral, el tribunal delibera y notifica su resolución por escrito en un plazo posterior — no se resuelve de forma inmediata en la misma audiencia.",
  },
];

const RESUMEN = [
  "En la Vista Oral de apelación del caso **Nadia Peraza Espinoza**, celebrada ante el **Tribunal de Apelación de Sentencia Penal de San Ramón**, el **Lic. Joseph Rivera Cheves** presentó sus conclusiones como querellante, defendiendo la solidez técnica de la condena dictada en marzo de 2026 por el Tribunal Penal de Heredia: **79 años nominales**, readecuados al máximo legal vigente de **50 años** de cárcel efectiva.",
  "El propio bufete había presentado un recurso de apelación con un motivo único: la sentencia de instancia no valoró, para efectos de la **dosificación de la pena**, la **sustracción patrimonial** cometida tras la muerte de Nadia —el uso de sus tarjetas en el BAC San José, el Banco Nacional y el Banco de Costa Rica—, adicional al femicidio, la estafa informática y la suplantación de identidad ya acreditados.",
  "Rivera Cheves argumentó que, de haberse ponderado ese concurso adicional, la pena nominal habría sido mayor a los 79 años impuestos, y solicitó al tribunal un **reenvío** a otro tribunal de juicio para que se valore específicamente ese extremo.",
  "Buena parte de su alegato se dedicó a defender la sentencia de instancia frente a los cuestionamientos de la defensa del condenado: sostuvo que la resolución cumple con los requisitos del **Código Procesal Penal** —motivación, fundamentación y correlación entre acusación y sentencia (artículo 142)— y que el recurso de la defensa no señaló, de forma concreta, qué prueba habría sido valorada incorrectamente.",
  "El abogado recordó que el proceso incluyó una investigación de más de dos años, con participación de la Unidad de Planes y Operaciones del OIJ y la Medicatura Forense, y que declararon 34 testigos entre familiares, peritos y personal especializado. Según expuso en la audiencia, la investigación contó además con apoyo técnico internacional.",
  "Al cierre, pidió al tribunal rechazar el recurso de la defensa y confirmar la condena. «Las mujeres no se tocan», dijo, subrayando que sentencias como esta buscan sentar un precedente frente a la violencia contra las mujeres en Costa Rica.",
];

const QUOTES = [
  { t: "La sentencia se sostiene por sí sola porque cumple con todos los requisitos que establece el Código Procesal Penal.", c: "Sobre la solidez de la condena" },
  { t: "Esa sustracción tan grave no se valoró en la sentencia para efectos de la dosificación de la pena — eso es lo que venimos a corregir en esta apelación.", c: "Sobre el motivo del recurso" },
  { t: "Las mujeres no se tocan.", c: "Mensaje de cierre al tribunal" },
];

export default function EntrevistaConclusionesApelacionPage() {
  const articleSchema = schemaInterviewArticle({
    slug: INT.slug,
    title: "Conclusiones de la Vista Oral: apelación del caso Nadia Peraza en el Tribunal de San Ramón",
    description: SEO_DESC,
    date: INT.dateISO,
    image: INT.ogImage,
    sourceUrl: INT.videoUrl,
  });
  const videoSchema = schemaVideoObjectExternal({
    name: "Conclusiones de Joseph Rivera Cheves — Vista Oral de apelación, caso Nadia Peraza (San Ramón)",
    description: SEO_DESC,
    thumbnailUrl: `${SITE_URL}${INT.ogImage}`,
    date: INT.dateISO,
    contentUrl: INT.videoUrl,
    publisherName: "Rivera Cheves & Asociados",
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
            <Breadcrumbs trail={[{ name: "Prensa", href: "/prensa" }, { name: "Vista Oral · San Ramón", href: `/entrevistas/${INT.slug}` }]} />

            <Reveal>
              <div className="rc-eyebrow" style={{ color: R, marginBottom: 18 }}>
                Cobertura judicial · {INT.outlet}
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="rc-h1" style={{ marginBottom: 22, maxWidth: "24ch" }}>
                Conclusiones de la apelación del caso <em className="rc-em">Nadia Peraza</em>
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className="rc-lede" style={{ maxWidth: "64ch", marginBottom: 16 }}>
                El Lic. Joseph Rivera Cheves, querellante en representación de la familia de{" "}
                <Link href="/casos/nadia-peraza" style={{ color: R, borderBottom: `1px solid ${R}` }}>
                  Nadia Peraza
                </Link>, expone sus conclusiones ante el Tribunal de Apelación de Sentencia Penal de San Ramón.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div style={{
                display: "flex", gap: 18, flexWrap: "wrap", alignItems: "center",
                fontFamily: "var(--font-mono, ui-monospace)", fontSize: 11,
                letterSpacing: ".1em", textTransform: "uppercase", color: "var(--fg-4)",
              }}>
                <span>Querellante: Lic. Joseph Rivera Cheves</span>
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
              <LiteFacebookVideo
                url={INT.videoUrl}
                title="Conclusiones de Joseph Rivera Cheves — Vista Oral de apelación, caso Nadia Peraza (San Ramón)"
                poster={INT.poster}
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
                Ver en Facebook <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* ── AVISO DE CONTENIDO SENSIBLE ──────────────────────── */}
        <div style={{ background: "var(--paper-2, #f3eee5)" }}>
          <div className="rc-wrap" style={{ maxWidth: 1080 }}>
            <div style={{
              display: "flex", alignItems: "flex-start", gap: 14,
              padding: "16px 0", borderBottom: "1px solid var(--hairline)",
            }}>
              <span aria-hidden="true" style={{ width: 3, alignSelf: "stretch", background: R, flexShrink: 0 }} />
              <p style={{ fontSize: 13, lineHeight: 1.6, color: "var(--fg-3)", margin: 0 }}>
                Este contenido corresponde a una audiencia judicial pública sobre un caso de femicidio.
                Se resume con fines informativos, en tono jurídico y sin detalles gráficos.
              </p>
            </div>
          </div>
        </div>

        {/* ── RESUMEN ──────────────────────────────────────────── */}
        <section style={{ background: "#fff", padding: "var(--pad-y) 0" }}>
          <div className="rc-wrap" style={{ maxWidth: 820 }}>
            <Reveal>
              <div className="rc-eyebrow" style={{ marginBottom: 14 }}>Resumen de la audiencia</div>
              <h2 className="rc-h2" style={{ marginBottom: 32 }}>De qué <em className="rc-em">se trató</em></h2>
            </Reveal>
            {RESUMEN.map((p, i) => (
              <Reveal key={i} delay={i * 50}>
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

            <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 28 }}>
              {QUOTES.map((q, i) => (
                <Reveal key={i} delay={i * 80}>
                  <blockquote style={{ margin: 0, padding: "8px 0 8px 24px", borderLeft: `3px solid ${R}` }}>
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

        {/* ── CONCEPTOS CLAVE (FAQ) ─────────────────────────────── */}
        <section style={{ background: "var(--paper-2, #f3eee5)", padding: "var(--pad-y) 0" }}>
          <div className="rc-wrap" style={{ maxWidth: 900 }}>
            <Reveal>
              <div className="rc-eyebrow" style={{ marginBottom: 14 }}>Guía rápida</div>
              <h2 className="rc-h2" style={{ marginBottom: 20 }}>Conceptos <em className="rc-em">clave</em></h2>
              <p className="rc-lede" style={{ maxWidth: "58ch", marginBottom: 40 }}>
                Lo expuesto en la audiencia, resumido en cuatro preguntas.
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

        {/* ── EL CASO + ENLACES ────────────────────────────────── */}
        <section style={{ background: "var(--paper)", padding: "var(--pad-y) 0" }}>
          <div className="rc-wrap" style={{ maxWidth: 1080 }}>
            <Reveal>
              <div className="rc-eyebrow" style={{ marginBottom: 14 }}>El caso · Nadia Peraza</div>
              <h2 className="rc-h2" style={{ marginBottom: 20 }}>Contexto del <em className="rc-em">caso</em></h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="rc-lede" style={{ maxWidth: "62ch", marginBottom: 32 }}>
                Nadia Peraza Espinoza, joven madre de 21 años, desapareció en 2024 y fue hallada sin vida
                en San Pablo de Heredia. El bufete representa a su familia como querellante y acción civil.
                La condena de 79 años (readecuada al máximo legal de 50) se encuentra <strong>en apelación</strong>;
                el tribunal aún no ha resuelto los recursos planteados por ambas partes.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link href="/casos/nadia-peraza" className="rc-btn primary">
                  Ver el dossier del caso <span className="arrow">→</span>
                </Link>
                <Link href="/comunicados/vista-oral-apelacion-nadia-peraza" className="rc-btn ghost">
                  Comunicado: la Vista Oral
                </Link>
                <Link href="/entrevistas/trivision-apelacion-nadia-peraza" className="rc-btn ghost">
                  Entrevista en Trivisión
                </Link>
                <Link href="/entrevistas/canal-opa-nadia-peraza" className="rc-btn ghost">
                  Entrevista en Canal Opa
                </Link>
                <Link href="/entrevistas/la-teja-bolados-legales-femicidio" className="rc-btn ghost">
                  Entrevista en La Teja
                </Link>
                <Link href="/entrevistas/columbia-por-tres-razones-reinsercion-social" className="rc-btn ghost">
                  Debate en Noticias Columbia
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <CTABand />
      </div>

      <style>{`
        @media (max-width: 860px) {
          .ley-row { grid-template-columns: 1fr !important; gap: 10px !important; }
        }
      `}</style>
    </>
  );
}
