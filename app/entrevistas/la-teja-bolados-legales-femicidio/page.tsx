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

// ── Datos de la entrevista ─────────────────────────────────────
const INT = {
  slug:      "la-teja-bolados-legales-femicidio",
  outlet:    "La Teja",
  program:   "Bolados Legales",
  host:      "Ovidio",
  dateISO:   "2026-07-09",
  dateLabel: "Julio de 2026",
  ogImage:   "/images/entrevistas/la-teja-nadia-peraza-og.jpg",
  // Permalink canónico (el enlace /watch/?v= no lo resuelve el plugin)
  videoUrl:  "https://www.facebook.com/latejaoficial/videos/1272365534759557/",
};

const SEO_TITLE = "Qué es un Femicidio en Costa Rica — Joseph Rivera, La Teja";
const SEO_DESC  =
  "El abogado penalista Joseph Rivera explica en Bolados Legales (La Teja) qué es el femicidio según la ley costarricense, sus penas y la reforma de 2022.";

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
      alt: "El abogado Joseph Rivera Cheves en Bolados Legales de La Teja explicando los detalles legales del femicidio",
    }],
  },
  twitter: { card: "summary_large_image", title: SEO_TITLE, description: SEO_DESC, images: [`${SITE_URL}${INT.ogImage}`] },
  keywords: [
    "qué es un femicidio",
    "qué es un femicidio en costa rica",
    "femicidio costa rica ley",
    "ley 8589 costa rica",
    "pena por femicidio costa rica",
    "diferencia entre homicidio y femicidio",
    "femicidio ampliado 2022",
    "ley penalización violencia contra las mujeres",
    "joseph rivera cheves",
    "bolados legales la teja",
    "entrevista joseph rivera la teja",
    "el caníbal de la refrigeradora",
    "caso nadia peraza",
    "abogado femicidio costa rica",
  ],
};

// ── Bloque legal (también alimenta el FAQPage schema) ──────────
const LEY: { q: string; a: string }[] = [
  {
    q: "¿Qué es un femicidio según la ley costarricense?",
    a: "Es la muerte de una mujer por su condición de mujer. La figura se introdujo en Costa Rica con la Ley 8589, Ley de Penalización de la Violencia contra las Mujeres, del año 2007.",
  },
  {
    q: "¿Cuál es la pena por femicidio en Costa Rica?",
    a: "El artículo 21 de la Ley de Penalización de la Violencia contra las Mujeres establece una pena de 20 a 35 años de prisión.",
  },
  {
    q: "¿Se considera femicidio si la pareja ya estaba separada?",
    a: "Sí. Antes la figura se limitaba al matrimonio y a la unión de hecho reconocida. Con la reforma de 2022 el supuesto se amplió a parejas sentimentales, noviazgos, relaciones esporádicas y parejas del mismo sexo. Por eso se habla de femicidio ampliado: no se exige convivencia.",
  },
  {
    q: "¿Cuál es la diferencia entre homicidio y femicidio?",
    a: "El artículo 112 del Código Penal sanciona el homicidio calificado con 20 a 35 años y contempla agravantes como el vínculo familiar, el ensañamiento o la alevosía. La ley especial de femicidio atiende específicamente la condición de mujer y su situación de vulnerabilidad, lo que permite un juzgamiento diferenciado.",
  },
  {
    q: "¿Se necesitan denuncias previas para que un caso sea femicidio?",
    a: "No son un requisito. Sin embargo, los antecedentes de violencia doméstica —agresiones, amenazas o uso de armas— operan como agravantes y refuerzan la prueba en el proceso penal.",
  },
];

const RESUMEN = [
  "En **Bolados Legales**, el espacio jurídico de **La Teja**, el **Lic. Joseph Rivera Cheves** conversó con **Ovidio** sobre la figura del femicidio en la legislación costarricense y anunció la publicación de su libro sobre el caso de Nadia Peraza.",
  "El abogado repasó el marco legal vigente: qué constituye un femicidio, cuál es la pena aplicable, en qué se diferencia del homicidio calificado y cómo la **reforma de 2022** amplió el supuesto a relaciones sentimentales que antes quedaban fuera.",
  "Rivera advirtió sobre el **aumento sostenido de los femicidios** desde la entrada en vigencia de la ley en 2007 y citó, entre los factores asociados, el consumo de alcohol y drogas, la desintegración familiar, los celos patológicos, el machismo y la **violencia vicaria** —cuando el agresor utiliza a los hijos o el control económico para someter a la mujer.",
  "También fue crítico con la respuesta institucional: a su juicio, distintas instituciones del Estado no atendieron a tiempo las alertas en el caso que llevó, y sostuvo que un abordaje oportuno pudo cambiar el desenlace.",
  "Finalmente, adelantó **«El Caníbal de la Refrigeradora»**, una crónica jurídica y forense del caso. Explicó que la obra busca mostrar cómo la medicina legal y las ciencias auxiliares del derecho penal permitieron esclarecer los hechos, y confirmó que **parte de los fondos se destinarán a un fideicomiso** para **la hija de la ofendida**.",
];

const QUOTES = [
  { t: "Un femicidio es cuando se mata a una mujer por su condición de mujer.", c: "Sobre la figura penal" },
  { t: "Las mujeres no se tocan; hay que cuidarlas. Y si hay vulnerabilidad, hay que denunciar.", c: "Sobre el mensaje del libro" },
  { t: "Rompan el silencio. Ustedes valen mucho: busquen ayuda, tienen derecho a volver a creer.", c: "Mensaje a las mujeres que viven violencia" },
];

export default function EntrevistaLaTejaPage() {
  const articleSchema = schemaInterviewArticle({
    slug: INT.slug,
    title: "Joseph Rivera Cheves en Bolados Legales (La Teja): qué es el femicidio en Costa Rica",
    description: SEO_DESC,
    date: INT.dateISO,
    image: INT.ogImage,
    sourceUrl: INT.videoUrl,
  });
  const videoSchema = schemaVideoObjectExternal({
    name: "Bolados Legales (La Teja) — Joseph Rivera Cheves explica el femicidio en Costa Rica",
    description: SEO_DESC,
    thumbnailUrl: `${SITE_URL}${INT.ogImage}`,
    date: INT.dateISO,
    contentUrl: INT.videoUrl,
    publisherName: "La Teja",
  });

  return (
    <>
      <SchemaOrg data={articleSchema} />
      <SchemaOrg data={videoSchema} />
      <SchemaOrg data={schemaFAQPage(LEY)} />
      <div className="rc-page">

        {/* ── HERO ─────────────────────────────────────────────── */}
        <section style={{ background: "var(--paper)", padding: "clamp(40px,5vw,72px) 0 clamp(32px,4vw,56px)" }}>
          <div className="rc-wrap" style={{ maxWidth: 1080 }}>
            <Breadcrumbs trail={[{ name: "Prensa", href: "/prensa" }, { name: "Entrevista · La Teja", href: `/entrevistas/${INT.slug}` }]} />

            <Reveal>
              <div className="rc-eyebrow" style={{ color: R, marginBottom: 18 }}>
                Entrevista · {INT.outlet} · {INT.program}
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="rc-h1" style={{ marginBottom: 22, maxWidth: "20ch" }}>
                Qué es un <em className="rc-em">femicidio</em> en Costa Rica
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className="rc-lede" style={{ maxWidth: "62ch", marginBottom: 16 }}>
                El Lic. Joseph Rivera Cheves explica la figura penal, sus penas y la reforma de 2022;
                y anuncia su libro sobre el caso de{" "}
                <Link href="/casos/nadia-peraza" style={{ color: R, borderBottom: `1px solid ${R}` }}>
                  Nadia Peraza
                </Link>.
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
                <span>Conduce: {INT.host}</span>
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
                title="Bolados Legales (La Teja) — Joseph Rivera Cheves explica el femicidio en Costa Rica"
                poster={INT.ogImage}
              />
            </Reveal>
            <div style={{
              display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center",
              marginTop: 20, justifyContent: "space-between",
            }}>
              <div style={{ fontFamily: "var(--font-mono, ui-monospace)", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(255,255,255,.5)" }}>
                Video · {INT.outlet} · {INT.program}
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
                Este contenido aborda la violencia contra las mujeres. Se trata con respeto, con fines
                informativos y sin detalles gráficos.
              </p>
            </div>
          </div>
        </div>

        {/* ── RESUMEN ──────────────────────────────────────────── */}
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

        {/* ── QUÉ DICE LA LEY (FAQ) ────────────────────────────── */}
        <section style={{ background: "var(--paper-2, #f3eee5)", padding: "var(--pad-y) 0" }}>
          <div className="rc-wrap" style={{ maxWidth: 900 }}>
            <Reveal>
              <div className="rc-eyebrow" style={{ marginBottom: 14 }}>Guía rápida</div>
              <h2 className="rc-h2" style={{ marginBottom: 20 }}>Qué dice la <em className="rc-em">ley</em></h2>
              <p className="rc-lede" style={{ maxWidth: "58ch", marginBottom: 40 }}>
                Lo explicado por el Lic. Rivera Cheves durante la entrevista, resumido en cinco preguntas.
              </p>
            </Reveal>
            <div style={{ borderTop: "1px solid var(--hairline-strong)" }}>
              {LEY.map((f, i) => (
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

        {/* ── FRANJA DEL LIBRO (línea visual de /libro) ────────── */}
        <section style={{ position: "relative", background: "#0a0707", color: "#f5ede0", padding: "var(--pad-y) 0", overflow: "hidden" }}>
          <div aria-hidden="true" style={{
            position: "absolute", inset: 0,
            background: "radial-gradient(900px 500px at 78% 30%, rgba(126,1,2,.20), transparent 60%)",
            pointerEvents: "none",
          }} />
          <div className="rc-wrap" style={{ maxWidth: 1080, position: "relative" }}>
            <div style={{
              display: "grid", gridTemplateColumns: "1fr 1.1fr",
              gap: "clamp(28px,4vw,64px)", alignItems: "center",
            }} className="teja-book-grid">
              <Reveal variant="slide-right">
                <div style={{ display: "grid", placeItems: "center" }}>
                  <img
                    src="/images/libro/canibal-portada.jpg?v=2"
                    alt="Portada del libro «El Caníbal de la Refrigeradora», del abogado Joseph Rivera Cheves"
                    loading="lazy" decoding="async"
                    style={{
                      display: "block", width: "100%", maxWidth: 300, height: "auto",
                      border: "1px solid rgba(201,168,106,.30)",
                      boxShadow: "0 24px 60px rgba(0,0,0,.5)",
                    }}
                  />
                </div>
              </Reveal>
              <div>
                <Reveal>
                  <div className="rc-eyebrow" style={{ color: "#c9a86a", marginBottom: 14 }}>Libro · Próximamente</div>
                  <h2 className="rc-h2" style={{ color: "#f5ede0", marginBottom: 18 }}>
                    La sorpresa que <em className="rc-em" style={{ color: "#c9a86a", opacity: 1 }}>anunció</em>
                  </h2>
                </Reveal>
                <Reveal delay={80}>
                  <p style={{ fontSize: 16, lineHeight: 1.7, color: "rgba(245,237,224,.72)", marginBottom: 26, maxWidth: "48ch" }}>
                    En esta entrevista Joseph Rivera presentó <em>«El Caníbal de la Refrigeradora»</em>, una
                    crónica jurídica y forense del caso.{" "}
                    <strong style={{ color: "#f5ede0", fontWeight: 600 }}>Parte de los fondos irán a un fideicomiso</strong>{" "}
                    para la educación de <strong style={{ color: "#f5ede0", fontWeight: 600 }}>la hija de la ofendida</strong>.
                  </p>
                </Reveal>
                <Reveal delay={140}>
                  <Link href="/libro" style={{
                    display: "inline-flex", alignItems: "center", gap: 10,
                    padding: "13px 26px", background: "#c9a86a", color: "#1a1310",
                    fontFamily: "var(--font-sans, system-ui)", fontSize: 14, fontWeight: 700,
                    textDecoration: "none",
                  }}>
                    Conocer el libro <span aria-hidden="true">→</span>
                  </Link>
                </Reveal>
              </div>
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
                La condena de 79 años (readecuada al máximo legal de 50) se encuentra <strong>en apelación</strong>.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link href="/casos/nadia-peraza" className="rc-btn primary">
                  Ver el dossier del caso <span className="arrow">→</span>
                </Link>
                <Link href="/entrevistas/trivision-apelacion-nadia-peraza" className="rc-btn ghost">
                  Entrevista en Trivisión
                </Link>
                <Link href="/entrevistas/canal-opa-nadia-peraza" className="rc-btn ghost">
                  Entrevista en Canal Opa
                </Link>
                <Link href="/entrevistas/columbia-por-tres-razones-reinsercion-social" className="rc-btn ghost">
                  Debate en Noticias Columbia
                </Link>
                <Link href="/entrevistas/conclusiones-apelacion-nadia-peraza-san-ramon" className="rc-btn ghost">
                  Conclusiones de la apelación
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
          .teja-book-grid { grid-template-columns: 1fr !important; }
          .teja-book-grid > :first-child { max-width: 320px; margin: 0 auto; }
        }
      `}</style>
    </>
  );
}
