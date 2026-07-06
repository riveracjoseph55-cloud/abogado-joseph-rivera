import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import RichText from "@/components/RichText";
import SchemaOrg from "@/components/SchemaOrg";
import CTABand from "@/components/CTABand";
import Breadcrumbs from "@/components/Breadcrumbs";
import LiteYouTube from "@/components/LiteYouTube";
import { WA } from "@/lib/data";
import {
  SITE_URL,
  SITE_NAME,
  schemaInterviewArticle,
  schemaVideoObject,
} from "@/lib/seo";

const R = "#7e0102";

// ── Datos de la entrevista ─────────────────────────────────────
const INT = {
  slug:      "canal-opa-nadia-peraza",
  youtubeId: "eavyxcMT7Ww",
  outlet:    "Canal Opa",
  program:   "#NoTanCristiana",
  host:      "Christiana Nassar",
  dateISO:   "2026-07-06",
  dateLabel: "Julio de 2026",
  image:     "/images/entrevistas/opa-no-tan-cristiana-nadia-peraza.png",
  sourceUrl: "https://genteopa.com/no-tan-cristiana/%F0%9F%8E%99%EF%B8%8F-entrevista-a-joseph-alfonso-rivera-cheves-abogado-caso-de-nadia-peraza/",
  videoUrl:  "https://www.youtube.com/watch?v=eavyxcMT7Ww",
};

const SEO_TITLE = "Entrevista a Joseph Rivera — Caso Nadia Peraza | Canal Opa";
const SEO_DESC  =
  "Christiana Nassar entrevista al abogado Joseph Rivera Cheves en #NoTanCristiana (Canal Opa) sobre el caso de Nadia Peraza y el libro «El Caníbal de la Refrigeradora».";

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
    images: [{ url: `${SITE_URL}${INT.image}`, width: 1640, height: 773, alt: `Entrevista a Joseph Rivera Cheves en ${INT.program} de ${INT.outlet}` }],
  },
  twitter: { card: "summary_large_image", title: SEO_TITLE, description: SEO_DESC, images: [`${SITE_URL}${INT.image}`] },
  keywords: [
    "entrevista joseph rivera",
    "joseph rivera cheves entrevista",
    "caso nadia peraza",
    "canal opa",
    "no tan cristiana",
    "christiana nassar",
    "el caníbal de la refrigeradora",
    "abogado nadia peraza",
    "femicidio nadia peraza entrevista",
    "violencia contra las mujeres costa rica",
  ],
};

// Párrafos del resumen editorial (sobrio, con **negritas**)
const RESUMEN = [
  "En el programa **#NoTanCristiana** de **Canal Opa**, la periodista **Christiana Nassar** conversó con el **Lic. Joseph Rivera Cheves** sobre uno de los casos más difíciles de su carrera: el **femicidio de Nadia Peraza Espinoza**, joven madre de 21 años, y el libro que escribió a partir de esa experiencia.",
  "El abogado —querellante en representación de la familia— relató cómo llegó el caso a su despacho por una llamada, y el acompañamiento a **doña Marilyn Espinoza**, madre de Nadia, desde la denuncia de la desaparición hasta la identificación de los restos en la Medicatura Forense.",
  "Buena parte de la conversación giró en torno a **las fallas institucionales**: según expuso, existían **denuncias previas de violencia doméstica** que no derivaron en medidas eficaces. La entrevista puso el foco en la **violencia contra las mujeres** y en la urgencia de que las instituciones actúen a tiempo.",
  "Rivera explicó que la estrategia legal amplió la acusación **más allá del femicidio** —sumando suplantación de identidad, estafa informática y sustracción patrimonial— hasta un concurso de delitos que elevó la pena. El juicio se extendió por **más de un mes**.",
];

const QUOTES = [
  { t: "Si usted cree en Dios, acompáñeme; yo la voy a acompañar en todo este proceso.", c: "A doña Marilyn, madre de Nadia" },
  { t: "Logramos que lo acusaran por más delitos; si hubiera sido solo por el femicidio, habría salido en pocos años.", c: "Sobre la estrategia de la querella" },
  { t: "Las mujeres no se tocan. Siempre, al final del túnel, hay una esperanza.", c: "Mensaje a las mujeres que viven violencia" },
];

export default function EntrevistaOpaPage() {
  const articleSchema = schemaInterviewArticle({
    slug: INT.slug,
    title: "Entrevista a Joseph Rivera Cheves en #NoTanCristiana: el caso Nadia Peraza y el libro «El Caníbal de la Refrigeradora»",
    description: SEO_DESC,
    date: INT.dateISO,
    image: INT.image,
    sourceUrl: INT.sourceUrl,
  });
  const videoSchema = schemaVideoObject({
    name: "Entrevista a Joseph Rivera Cheves — Caso Nadia Peraza (#NoTanCristiana, Canal Opa)",
    description: SEO_DESC,
    videoId: INT.youtubeId,
    date: INT.dateISO,
    publisherName: "Canal Opa",
    publisherUrl: "https://genteopa.com",
  });

  return (
    <>
      <SchemaOrg data={articleSchema} />
      <SchemaOrg data={videoSchema} />
      <div className="rc-page">

        {/* ── HERO ─────────────────────────────────────────────── */}
        <section style={{ background: "var(--paper)", padding: "clamp(40px,5vw,72px) 0 clamp(32px,4vw,56px)" }}>
          <div className="rc-wrap" style={{ maxWidth: 1080 }}>
            <Breadcrumbs trail={[{ name: "Prensa", href: "/prensa" }, { name: "Entrevista · Canal Opa", href: `/entrevistas/${INT.slug}` }]} />

            <Reveal>
              <div className="rc-eyebrow" style={{ color: R, marginBottom: 18 }}>
                Entrevista · {INT.outlet} · {INT.program}
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="rc-h1" style={{ marginBottom: 22, maxWidth: "20ch" }}>
                El caso de <em className="rc-em">Nadia Peraza</em>, en primera persona
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className="rc-lede" style={{ maxWidth: "60ch", marginBottom: 24 }}>
                Christiana Nassar conversa con el Lic. Joseph Rivera Cheves sobre el femicidio de
                Nadia Peraza, las fallas del sistema que no la protegió y el libro
                {" "}<em>«El Caníbal de la Refrigeradora»</em>, cuyos fondos se destinarán a la hija de la víctima.
              </p>
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
              <LiteYouTube
                id={INT.youtubeId}
                title="Entrevista a Joseph Rivera Cheves en #NoTanCristiana (Canal Opa) — caso Nadia Peraza"
                poster={INT.image}
              />
            </Reveal>
            <div style={{
              display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center",
              marginTop: 20, justifyContent: "space-between",
            }}>
              <div style={{ fontFamily: "var(--font-mono, ui-monospace)", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(255,255,255,.5)" }}>
                Video · {INT.outlet} · {INT.program}
              </div>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href={INT.sourceUrl} target="_blank" rel="noopener noreferrer" className="rc-btn on-r">
                  Ver en Canal Opa <span className="arrow">→</span>
                </a>
                <a href={INT.videoUrl} target="_blank" rel="noopener noreferrer" className="rc-btn ghost-on-r">
                  Ver en YouTube
                </a>
              </div>
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
                Este contenido aborda un caso de violencia contra una mujer. Se trata con respeto,
                con fines informativos y sin detalles gráficos.
              </p>
            </div>
          </div>
        </div>

        {/* ── RESUMEN EDITORIAL + CITAS ────────────────────────── */}
        <section style={{ background: "#fff", padding: "var(--pad-y) 0" }}>
          <div className="rc-wrap" style={{ maxWidth: 820 }}>
            <Reveal>
              <div className="rc-eyebrow" style={{ marginBottom: 14 }}>Resumen de la entrevista</div>
              <h2 className="rc-h2" style={{ marginBottom: 32 }}>De qué <em className="rc-em">se habló</em></h2>
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
                      fontSize: "clamp(19px,2vw,26px)", lineHeight: 1.3,
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

            <Reveal delay={120}>
              <p style={{
                marginTop: 32, fontSize: 17, lineHeight: 1.7, color: "var(--fg-2)",
                fontFamily: "var(--font-sans, system-ui)",
              }}>
                Sobre el cierre, el abogado hizo un llamado a las mujeres que viven violencia para que
                <strong style={{ fontWeight: 700, color: "inherit" }}> rompan el silencio y busquen ayuda</strong>,
                y recordó que Nadia «empezó a buscar una salida». Su historia, dijo, debe servir de ejemplo
                y de advertencia para toda la sociedad costarricense.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── FRANJA DEL LIBRO ─────────────────────────────────── */}
        <section style={{ background: "var(--ink)", color: "#fff", padding: "var(--pad-y) 0" }}>
          <div className="rc-wrap" style={{ maxWidth: 1080 }}>
            <div style={{
              display: "grid", gridTemplateColumns: "1fr 1.1fr",
              gap: "clamp(28px,4vw,64px)", alignItems: "center",
            }} className="int-book-grid">
              <Reveal variant="slide-right">
                <div style={{
                  aspectRatio: "3/4", background: "var(--r-deep, #5a0001)",
                  display: "grid", placeItems: "center", padding: "clamp(28px,4vw,48px)",
                  position: "relative", overflow: "hidden",
                }}>
                  <div style={{
                    fontFamily: "var(--font-sans, system-ui)", fontWeight: 300,
                    fontSize: "clamp(22px,3vw,34px)", lineHeight: 1.15, color: "#fff", textAlign: "center",
                  }}>
                    «El Caníbal<br />de la<br /><em className="rc-em" style={{ color: "#fff", opacity: .6 }}>Refrigeradora</em>»
                  </div>
                  <span aria-hidden="true" style={{ position: "absolute", left: 20, bottom: 18, width: 40, height: 1, background: "rgba(255,255,255,.5)" }} />
                </div>
              </Reveal>
              <div>
                <Reveal>
                  <div className="rc-eyebrow on-r" style={{ marginBottom: 14 }}>Libro · Próximamente</div>
                  <h2 className="rc-h2" style={{ color: "#fff", marginBottom: 18 }}>
                    El libro que nació <em className="rc-em" style={{ color: "#fff", opacity: .55 }}>de este caso</em>
                  </h2>
                </Reveal>
                <Reveal delay={80}>
                  <p style={{ fontSize: 16, lineHeight: 1.7, color: "rgba(255,255,255,.72)", marginBottom: 24, maxWidth: "48ch" }}>
                    En la entrevista, Joseph Rivera presentó <em>«El Caníbal de la Refrigeradora»</em>. Anunció que
                    <strong style={{ color: "#fff", fontWeight: 600 }}> parte de los fondos irán a un fideicomiso</strong> para la
                    educación de la hija de Nadia. Más que una crónica judicial, es un testimonio y un llamado contra la violencia.
                  </p>
                </Reveal>
                <Reveal delay={140}>
                  <Link href="/comunicados/libro-el-canibal-de-la-refrigeradora" className="rc-btn on-r">
                    Conocer el libro <span className="arrow">→</span>
                  </Link>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECCIÓN DEL CASO ─────────────────────────────────── */}
        <section style={{ background: "var(--paper)", padding: "var(--pad-y) 0" }}>
          <div className="rc-wrap" style={{ maxWidth: 1080 }}>
            <Reveal>
              <div className="rc-eyebrow" style={{ marginBottom: 14 }}>El caso · Nadia Peraza</div>
              <h2 className="rc-h2" style={{ marginBottom: 20 }}>Contexto del <em className="rc-em">caso</em></h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="rc-lede" style={{ maxWidth: "62ch", marginBottom: 32 }}>
                Nadia Peraza Espinoza, joven madre de 21 años, desapareció en 2024 y fue hallada sin vida en
                San Pablo de Heredia. El bufete asumió la representación de la familia como querellante y
                acción civil.
              </p>
            </Reveal>
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 0,
              borderTop: "1px solid var(--hairline)", marginBottom: 32,
            }} className="int-facts">
              {[
                ["Víctima", "Nadia Peraza Espinoza · 21 años"],
                ["Rol del bufete", "Querellante y acción civil"],
                ["Sentencia", "79 años nominales → 50 años (máx. legal)"],
                ["Estado", "En apelación · Vista Oral 15 jul 2026"],
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
                <Link href="/casos/nadia-peraza" className="rc-btn primary">
                  Ver el dossier del caso <span className="arrow">→</span>
                </Link>
                <Link href="/comunicados/vista-oral-apelacion-nadia-peraza" className="rc-btn ghost">
                  La apelación (Vista Oral)
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <CTABand />
      </div>

      <style>{`
        @media (max-width: 860px) {
          .int-book-grid { grid-template-columns: 1fr !important; }
          .int-book-grid > :first-child { max-width: 320px; }
          .int-facts { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
