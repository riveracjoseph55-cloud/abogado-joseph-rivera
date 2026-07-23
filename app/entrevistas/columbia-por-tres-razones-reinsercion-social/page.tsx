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
  slug:      "columbia-por-tres-razones-reinsercion-social",
  outlet:    "Noticias Columbia",
  program:   "Por Tres Razones",
  host:      "Evelyn",
  dateISO:   "2026-07-22",
  dateLabel: "Julio de 2026",
  ogImage:   "/images/entrevistas/columbia-por-tres-razones-og.jpg",
  videoUrl:  "https://www.facebook.com/NoticiasColumbia/videos/1351355166924269",
};

const SEO_TITLE = "¿Reinserción Social tras un Homicidio? — Joseph Rivera";
const SEO_DESC  =
  "El abogado Joseph Rivera debate en Por Tres Razones (Noticias Columbia) sobre reinserción social, mano dura y justicia restaurativa tras un homicidio.";

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
      alt: "Joseph Rivera Cheves en el panel Por Tres Razones de Noticias Columbia, debatiendo sobre la reinserción social tras un homicidio",
    }],
  },
  twitter: { card: "summary_large_image", title: SEO_TITLE, description: SEO_DESC, images: [`${SITE_URL}${INT.ogImage}`] },
  keywords: [
    "es posible la reinserción social tras un homicidio",
    "reinserción social costa rica",
    "justicia restaurativa costa rica",
    "mano dura o garantismo costa rica",
    "por tres razones noticias columbia",
    "noticias columbia 98.7 fm",
    "joseph rivera cheves entrevista",
    "rehabilitación reinserción resocialización",
    "punitivismo costa rica",
    "caso nadia peraza",
    "el caníbal de la refrigeradora",
    "abogado penalista costa rica",
  ],
};

// ── Conceptos clave (también alimenta el FAQPage schema) ────────
const CONCEPTOS: { q: string; a: string }[] = [
  {
    q: "¿Qué diferencia hay entre rehabilitación, reinserción y resocialización?",
    a: "Son conceptos distintos, aunque suelen confundirse. La rehabilitación ocurre dentro del sistema penitenciario; la reinserción es preparar a la persona para reintegrarse a un entorno que reduzca el riesgo de reincidencia; y la resocialización presupone que la persona nunca estuvo socializada, lo cual no siempre es cierto — el panel puso como ejemplo a un funcionario corrupto, que ya contaba con todos los recursos y oportunidades.",
  },
  {
    q: "¿Qué es la justicia restaurativa?",
    a: "Un modelo que busca una pena proporcional al daño causado, priorizando la reparación sobre el castigo puro. Para Joseph Rivera, solo es una vía viable para quienes, tras un análisis caso por caso, muestran una posibilidad real de resocializarse.",
  },
  {
    q: "¿La posibilidad de reinserción depende del tipo de homicidio?",
    a: "Sí. Los tres panelistas coincidieron en que no todos los homicidios son iguales: hay femicidios, homicidios por sicariato, casos en legítima defensa y crímenes de extrema crueldad. El pronóstico varía según el perfil de quien lo cometió, sus motivaciones y el entorno al que regresará tras cumplir la pena.",
  },
  {
    q: "¿Qué dice el Código Penal costarricense sobre la función de la pena?",
    a: "El artículo 51 del Código Penal le asigna a la pena una función rehabilitadora. Según los panelistas, sin embargo, el sistema penitenciario costarricense rara vez cuenta con las herramientas necesarias para cumplir ese objetivo en la práctica.",
  },
];

const RESUMEN = [
  "En **Por Tres Razones**, el espacio de análisis de **Noticias Columbia** (98.7 FM), la conductora **Evelyn** reunió a tres especialistas para debatir una pregunta directa: ¿es posible la reinserción social después de un homicidio? En la mesa participaron el abogado penalista **Joseph Rivera Cheves**, el abogado **Rogelio Ramírez** —especializado en crimen organizado, con trayectoria en jefaturas del Organismo de Investigación Judicial— y el criminólogo **Rodrigo Campos**, director de la Escuela de Ciencias Sociales y Humanidades de la UNED.",
  "Los tres coincidieron en que no existe una respuesta única: la posibilidad de reinserción depende del tipo de homicidio, del perfil de quien lo cometió y del entorno al que regresa esa persona tras cumplir la pena. Campos advirtió que, en el extremo opuesto del espectro, hay personas que **la ciencia todavía no sabe cómo reintegrar**; Ramírez insistió en que el entorno y las motivaciones de cada caso determinan buena parte del pronóstico.",
  "Rivera Cheves aportó la mirada del litigante: sostuvo que **hay que analizar cada caso en concreto**, diferenciando a la víctima del victimario y el grado de violencia empleado. Para los casos más extremos —citó, sin entrar en detalles gráficos, el **caso de Nadia Peraza**, que representa como querellante— defendió la **mano dura para sacar a esas personas de circulación**; para el resto, propuso apostar por la **justicia restaurativa**, proporcional al daño causado.",
  "La conversación derivó en un debate sobre punitivismo y garantismo: Campos cuestionó que la mano dura, aplicada como política general, haya dado resultado en América Latina, y recordó que en la administración anterior se aprobaron 39 leyes con incidencia penal —la mayoría orientadas a aumentar penas— sin que eso resolviera el problema de fondo. Los tres coincidieron en que perseguir los capitales del crimen organizado sigue siendo la tarea pendiente del Estado costarricense.",
  "Uno de los aportes más técnicos de la charla fue la distinción, planteada por Ramírez, entre **rehabilitación, reinserción y resocialización** —conceptos que la propia normativa tiende a confundir— y el señalamiento de que el artículo 51 del Código Penal le asigna a la pena una función rehabilitadora que, en la práctica, el sistema penitenciario rara vez cumple.",
  "Al cierre, la audiencia participó con una encuesta en vivo: **54% respondió que no** es posible la reinserción tras un homicidio, frente a un **46% que dijo que sí** — una muestra, según los panelistas, de que Costa Rica sigue dividida entre una visión garantista y una más punitiva.",
];

const QUOTES = [
  { t: "Hay que analizar quién es la víctima y quién es el victimario; no podemos echarlos a todos en un mismo saco.", c: "Sobre el análisis caso por caso" },
  { t: "Hay que poner mano dura para sacarlos de circulación, porque tenemos que restaurar la paz social. Pero eso significa analizar cada caso en concreto: a quienes sí se pueden resocializar, ofrecerles justicia restaurativa.", c: "Sobre mano dura y justicia restaurativa" },
  { t: "Lo de Nadia Peraza no es un caso aislado.", c: "Sobre el aumento de los femicidios en Costa Rica" },
];

const PANEL = [
  { name: "Rogelio Ramírez",       role: "Abogado · crimen organizado",  note: "Trayectoria en jefaturas del Organismo de Investigación Judicial (OIJ)." },
  { name: "Rodrigo Campos",        role: "Criminólogo",                  note: "Director de la Escuela de Ciencias Sociales y Humanidades de la UNED; antes, director de la carrera de Criminología." },
  { name: "Joseph Rivera Cheves",  role: "Abogado penalista",            note: "Querellante en el caso Nadia Peraza; autor de «El Caníbal de la Refrigeradora»." },
];

export default function EntrevistaColumbiaPage() {
  const articleSchema = schemaInterviewArticle({
    slug: INT.slug,
    title: "Por Tres Razones (Noticias Columbia): ¿es posible la reinserción social tras un homicidio?",
    description: SEO_DESC,
    date: INT.dateISO,
    image: INT.ogImage,
    sourceUrl: INT.videoUrl,
  });
  const videoSchema = schemaVideoObjectExternal({
    name: "Por Tres Razones (Noticias Columbia) — ¿es posible la reinserción social tras un homicidio?",
    description: SEO_DESC,
    thumbnailUrl: `${SITE_URL}${INT.ogImage}`,
    date: INT.dateISO,
    contentUrl: INT.videoUrl,
    publisherName: "Noticias Columbia",
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
            <Breadcrumbs trail={[{ name: "Prensa", href: "/prensa" }, { name: "Entrevista · Noticias Columbia", href: `/entrevistas/${INT.slug}` }]} />

            <Reveal>
              <div className="rc-eyebrow" style={{ color: R, marginBottom: 18 }}>
                Entrevista · {INT.outlet} · {INT.program}
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="rc-h1" style={{ marginBottom: 22, maxWidth: "22ch" }}>
                ¿Es posible la <em className="rc-em">reinserción social</em> tras un homicidio?
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className="rc-lede" style={{ maxWidth: "64ch", marginBottom: 24 }}>
                El Lic. Joseph Rivera Cheves debate junto a Rogelio Ramírez y Rodrigo Campos sobre mano dura,
                justicia restaurativa y el caso de{" "}
                <Link href="/casos/nadia-peraza" style={{ color: R, borderBottom: `1px solid ${R}` }}>
                  Nadia Peraza
                </Link>.
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
              <LiteFacebookVideo
                url={INT.videoUrl}
                title="Por Tres Razones (Noticias Columbia) — ¿es posible la reinserción social tras un homicidio?"
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
                Este contenido aborda el homicidio y la violencia contra las mujeres desde una perspectiva
                jurídica y criminológica. Se trata con respeto, con fines informativos y sin detalles gráficos.
              </p>
            </div>
          </div>
        </div>

        {/* ── RESUMEN ──────────────────────────────────────────── */}
        <section style={{ background: "#fff", padding: "var(--pad-y) 0" }}>
          <div className="rc-wrap" style={{ maxWidth: 820 }}>
            <Reveal>
              <div className="rc-eyebrow" style={{ marginBottom: 14 }}>Resumen del debate</div>
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

        {/* ── EL PANEL ─────────────────────────────────────────── */}
        <section style={{ background: "var(--paper-2, #f3eee5)", padding: "var(--pad-y) 0" }}>
          <div className="rc-wrap" style={{ maxWidth: 1080 }}>
            <Reveal>
              <div className="rc-eyebrow" style={{ marginBottom: 14 }}>La mesa</div>
              <h2 className="rc-h2" style={{ marginBottom: 40 }}>Tres <em className="rc-em">miradas</em> sobre el crimen</h2>
            </Reveal>
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "var(--gut)",
            }} className="col-panel-grid">
              {PANEL.map((p, i) => (
                <Reveal key={p.name} delay={i * 60}>
                  <div style={{ padding: "clamp(20px,2.4vw,28px)", background: "#fff", border: "1px solid var(--hairline)", height: "100%" }}>
                    <div style={{
                      fontFamily: "var(--font-sans, system-ui)", fontWeight: 600,
                      fontSize: 17, color: "var(--ink)", marginBottom: 6,
                    }}>{p.name}</div>
                    <div className="rc-meta" style={{ color: R, marginBottom: 14 }}>{p.role}</div>
                    <p style={{ fontSize: 14, lineHeight: 1.65, color: "var(--fg-3)", margin: 0 }}>{p.note}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONCEPTOS CLAVE (FAQ) ─────────────────────────────── */}
        <section style={{ background: "#fff", padding: "var(--pad-y) 0" }}>
          <div className="rc-wrap" style={{ maxWidth: 900 }}>
            <Reveal>
              <div className="rc-eyebrow" style={{ marginBottom: 14 }}>Guía rápida</div>
              <h2 className="rc-h2" style={{ marginBottom: 20 }}>Conceptos <em className="rc-em">clave</em></h2>
              <p className="rc-lede" style={{ maxWidth: "58ch", marginBottom: 40 }}>
                Lo explicado por el panel durante el debate, resumido en cuatro preguntas.
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
              <h2 className="rc-h2" style={{ marginBottom: 20 }}>El ejemplo del <em className="rc-em">extremo</em></h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="rc-lede" style={{ maxWidth: "62ch", marginBottom: 20 }}>
                Nadia Peraza Espinoza, joven madre de 21 años, desapareció en 2024 y fue hallada sin vida en
                San Pablo de Heredia. El bufete representa a su familia como querellante y acción civil.
                La condena de 79 años (readecuada al máximo legal de 50) se encuentra <strong>en apelación</strong>.
                El caso motivó además el <strong>Proyecto de Ley Nadia</strong>, impulsado por el Msc. Rivera
                Cheves ante la Asamblea Legislativa.
              </p>
            </Reveal>
            <Reveal delay={110}>
              <p style={{ maxWidth: "62ch", marginBottom: 32, fontSize: 15, lineHeight: 1.7, color: "var(--fg-3)" }}>
                El libro no se mencionó en esta entrevista, pero Rivera documentó este caso a fondo en{" "}
                <Link href="/libro" style={{ color: R, borderBottom: `1px solid ${R}` }}>
                  «El Caníbal de la Refrigeradora»
                </Link>.
              </p>
            </Reveal>
            <Reveal delay={140}>
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
                <Link href="/entrevistas/la-teja-bolados-legales-femicidio" className="rc-btn ghost">
                  Entrevista en La Teja
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
        @media (max-width: 760px) {
          .col-panel-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
