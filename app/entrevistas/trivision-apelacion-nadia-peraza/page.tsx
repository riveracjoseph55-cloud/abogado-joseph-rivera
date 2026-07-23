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
} from "@/lib/seo";

const R = "#7e0102";

// ── Datos de la entrevista ─────────────────────────────────────
const INT = {
  slug:      "trivision-apelacion-nadia-peraza",
  outlet:    "Trivisión",
  host:      "Alejandro Urbina",
  dateISO:   "2026-07-08",
  dateLabel: "Julio de 2026",
  image:     "/images/entrevistas/trivision-apelacion-nadia-peraza.png",
  ogImage:   "/images/entrevistas/trivision-nadia-peraza-og.jpg",
  // Permalink canónico (el enlace corto /share/v/… no lo resuelve el plugin de Facebook)
  videoUrl:  "https://www.facebook.com/trivisioncostarica/videos/1379875277396525/",
};

const SEO_TITLE = "Apelación Caso Nadia Peraza — Entrevista en Trivisión";
const SEO_DESC  =
  "Joseph Rivera responde en Trivisión a la solicitud de la defensa de Jeremy Buzano, a una semana de la Vista Oral de apelación del caso Nadia Peraza.";

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
      alt: `El abogado Joseph Rivera Cheves entrevistado por Alejandro Urbina en Trivisión sobre la apelación del caso Nadia Peraza`,
    }],
  },
  twitter: { card: "summary_large_image", title: SEO_TITLE, description: SEO_DESC, images: [`${SITE_URL}${INT.ogImage}`] },
  keywords: [
    "apelación caso nadia peraza",
    "vista oral nadia peraza",
    "entrevista joseph rivera trivisión",
    "joseph rivera cheves",
    "alejandro urbina trivisión",
    "trivisión costa rica",
    "jeremy buzano paisano apelación",
    "tribunal de apelación san ramón",
    "caso nadia peraza 2026",
    "femicidio nadia peraza",
    "querellante nadia peraza",
    "abogado femicidio costa rica",
    "valoración psiquiátrica imputado",
    "recurso de apelación penal costa rica",
  ],
};

// ── Resumen editorial (sobrio, atribuido) ──────────────────────
const RESUMEN = [
  "A una semana de la **Vista Oral de apelación** —fijada para el **15 de julio de 2026** ante el Tribunal de Apelación de Sentencia Penal de San Ramón—, el **Lic. Joseph Rivera Cheves**, abogado de la familia de **Nadia Peraza Espinoza**, conversó con **Alejandro Urbina** en **Trivisión** sobre el estado del proceso.",
  "Días antes, la defensa de **Jeremy Buzano Paisano** —condenado en primera instancia, con sentencia **aún no firme** por estar en apelación— presentó ante el tribunal una **solicitud urgente de valoración psiquiátrica** y atención médica para su representado, alegando un deterioro de su salud. El defensor pidió además que se ordenaran las pericias correspondientes.",
  "Consultado por Trivisión, Rivera Cheves señaló que **no es la primera vez** que se plantea una gestión de este tipo y recordó que, a lo largo del proceso, **ya se practicaron las pericias psicológicas y psiquiátricas forenses** —tanto en la Medicatura Forense como en la Caja Costarricense de Seguro Social— **sin que se determinara afectación mental**. En el juicio, agregó, quedó acreditado que el imputado **comprendía el carácter ilícito de sus actos**.",
  "El abogado sostuvo que el **Tribunal de Apelación no sería el órgano competente** para ordenar ese traslado y expresó que espera que la gestión se rechace **sin afectar la fecha de la audiencia**. Aclaró, no obstante, que **el derecho a la salud es irrenunciable** e inherente a toda persona, incluidas las privadas de libertad.",
  "Rivera Cheves confirmó además que la **querella presentó su propio recurso de apelación**: a su juicio, la sentencia no ponderó la **sustracción patrimonial** sufrida por la víctima, lo que debería incidir en la dosificación de la pena. Planteó también que el recurso de la defensa **habría sido presentado fuera del plazo legal**, por lo que espera que se declare inadmisible.",
  "Finalmente, se refirió a la **denuncia presentada ante la Inspección Judicial** contra los jueces que dictaron la sentencia. Rivera la calificó de **infundada** y defendió la trayectoria, la imparcialidad y el respeto al debido proceso del tribunal sentenciador.",
];

const QUOTES = [
  {
    t: "A Jeremy Buzano se le han hecho todas las pericias, desde el punto de vista psicológico y psiquiátrico, y no tiene ninguna afectación mental. Se probó en el juicio que él conocía el carácter ilícito de sus actos.",
    c: "Sobre la solicitud de valoración psiquiátrica",
  },
  {
    t: "El derecho a la salud es un derecho irrenunciable, inherente a toda persona, también para los privados de libertad.",
    c: "Sobre los derechos del condenado",
  },
  {
    t: "Esperaríamos que se haga justicia por Nadia Peraza y por su familia, y que esta sentencia quede en firme.",
    c: "Sobre la Vista Oral del 15 de julio",
  },
];

const CLAVES: [string, string][] = [
  ["Audiencia", "Miércoles 15 de julio de 2026 · 9:00 a.m."],
  ["Tribunal", "Apelación de Sentencia Penal · San Ramón, Alajuela"],
  ["Qué se resuelve", "Los recursos de apelación de las partes"],
  ["Rol del bufete", "Querella y acción civil (familia de la víctima)"],
];

export default function EntrevistaTrivisionPage() {
  const articleSchema = schemaInterviewArticle({
    slug: INT.slug,
    title: "Joseph Rivera Cheves en Trivisión: la apelación del caso Nadia Peraza y la solicitud de la defensa",
    description: SEO_DESC,
    date: INT.dateISO,
    image: INT.ogImage,
    sourceUrl: INT.videoUrl,
  });
  const videoSchema = schemaVideoObjectExternal({
    name: "Entrevista a Joseph Rivera Cheves en Trivisión — apelación del caso Nadia Peraza",
    description: SEO_DESC,
    thumbnailUrl: `${SITE_URL}${INT.ogImage}`,
    date: INT.dateISO,
    contentUrl: INT.videoUrl,
    publisherName: "Trivisión",
  });

  return (
    <>
      <SchemaOrg data={articleSchema} />
      <SchemaOrg data={videoSchema} />
      <div className="rc-page">

        {/* ── HERO ─────────────────────────────────────────────── */}
        <section style={{ background: "var(--paper)", padding: "clamp(40px,5vw,72px) 0 clamp(32px,4vw,56px)" }}>
          <div className="rc-wrap" style={{ maxWidth: 1080 }}>
            <Breadcrumbs trail={[{ name: "Prensa", href: "/prensa" }, { name: "Entrevista · Trivisión", href: `/entrevistas/${INT.slug}` }]} />

            <Reveal>
              <div className="rc-eyebrow" style={{ color: R, marginBottom: 18 }}>
                Entrevista · {INT.outlet}
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="rc-h1" style={{ marginBottom: 22, maxWidth: "22ch" }}>
                La apelación del caso <em className="rc-em">Nadia Peraza</em>
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className="rc-lede" style={{ maxWidth: "62ch", marginBottom: 16 }}>
                A una semana de la Vista Oral, el Lic. Joseph Rivera Cheves —abogado de la familia de{" "}
                <Link href="/casos/nadia-peraza" style={{ color: R, borderBottom: `1px solid ${R}` }}>
                  Nadia Peraza
                </Link>{" "}
                — responde en Trivisión a la solicitud de la defensa de trasladar al condenado a una
                valoración psiquiátrica.
              </p>
            </Reveal>
            <Reveal delay={170}>
              <Link href="/casos/nadia-peraza" style={{
                display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 24,
                fontFamily: "var(--font-sans, system-ui)", fontSize: 14, fontWeight: 700, color: R,
              }}>
                Ver el dossier completo del caso <span aria-hidden="true">→</span>
              </Link>
            </Reveal>
            <Reveal delay={200}>
              <div style={{
                display: "flex", gap: 18, flexWrap: "wrap", alignItems: "center",
                fontFamily: "var(--font-mono, ui-monospace)", fontSize: 11,
                letterSpacing: ".1em", textTransform: "uppercase", color: "var(--fg-4)",
              }}>
                <span>Entrevista: {INT.host}</span>
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
                title="Entrevista a Joseph Rivera Cheves en Trivisión — apelación del caso Nadia Peraza"
                poster={INT.ogImage}
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
                Este contenido aborda un caso de violencia contra una mujer y menciona aspectos de salud
                mental dentro de un proceso judicial. Se trata con respeto, con fines informativos y sin
                detalles sensibles.
              </p>
            </div>
          </div>
        </div>

        {/* ── RESUMEN + CITAS ──────────────────────────────────── */}
        <section style={{ background: "#fff", padding: "var(--pad-y) 0" }}>
          <div className="rc-wrap" style={{ maxWidth: 820 }}>
            <Reveal>
              <div className="rc-eyebrow" style={{ marginBottom: 14 }}>Resumen de la entrevista</div>
              <h2 className="rc-h2" style={{ marginBottom: 32 }}>De qué <em className="rc-em">se habló</em></h2>
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

        {/* ── CLAVES DE LA AUDIENCIA ───────────────────────────── */}
        <section style={{ background: "var(--ink)", color: "#fff", padding: "var(--pad-y) 0" }}>
          <div className="rc-wrap" style={{ maxWidth: 1080 }}>
            <Reveal>
              <div className="rc-eyebrow on-r" style={{ marginBottom: 14 }}>Claves</div>
              <h2 className="rc-h2" style={{ color: "#fff", marginBottom: 36 }}>
                La <em className="rc-em" style={{ color: "#fff", opacity: .55 }}>Vista Oral</em>
              </h2>
            </Reveal>
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(2,1fr)",
              borderTop: "1px solid rgba(255,255,255,.18)",
            }} className="tri-claves">
              {CLAVES.map(([k, v], i) => (
                <Reveal key={i} delay={i * 50}>
                  <div style={{
                    padding: "20px 0", borderBottom: "1px solid rgba(255,255,255,.18)",
                    display: "flex", flexDirection: "column", gap: 6,
                  }}>
                    <span className="rc-meta" style={{ color: "rgba(255,255,255,.45)" }}>{k}</span>
                    <span style={{ fontSize: 16, fontWeight: 500, color: "#fff", lineHeight: 1.35 }}>{v}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── EL CASO + ENLACES INTERNOS ───────────────────────── */}
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
                La condena de 79 años (readecuada al máximo legal de 50) se encuentra <strong>en apelación</strong>.
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
          .tri-claves { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
