import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import SchemaOrg from "@/components/SchemaOrg";
import RichText from "@/components/RichText";
import { RC_AREAS, RC_AREAS_SEO, RC_CASES, WA } from "@/lib/data";
import { SITE_URL, SITE_NAME, OG_IMAGE, schemaFAQPage } from "@/lib/seo";
import FaqItem from "./FaqItem";

// ── Static generation ──────────────────────────────────────────
export function generateStaticParams() {
  return RC_AREAS.map(a => ({ slug: a.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a   = RC_AREAS.find(x => x.slug === slug);
  if (!a) return {};
  const seo   = RC_AREAS_SEO[slug];
  const title = seo?.title ?? `${a.t} en Costa Rica | Abogado Joseph Rivera`;
  const desc  = seo?.desc  ?? a.d.replace(/\*\*/g, "");
  const keys  = seo?.keys  ?? [a.t.toLowerCase(), "abogado joseph rivera", "abogado penalista costa rica"];
  return {
    title,
    description: desc,
    alternates: { canonical: `${SITE_URL}/especialidades/${a.slug}` },
    openGraph: {
      type: "website",
      url: `${SITE_URL}/especialidades/${a.slug}`,
      title,
      description: desc,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `${a.t} | ${SITE_NAME}` }],
    },
    twitter: { card: "summary_large_image", title, images: [OG_IMAGE] },
    keywords: keys,
  };
}

// ── Proceso de trabajo (fijo para todas las áreas) ─────────────
const PROCESO = [
  { n: "01", t: "Primera consulta",       d: "Conversación inicial por WhatsApp o presencial. Honorarios transparentes y sin compromisos." },
  { n: "02", t: "Estudio del expediente", d: "Análisis técnico completo del caso, identificación de la teoría jurídica y plan de litigación." },
  { n: "03", t: "Ejecución",              d: "Representación en sede ministerial, judicial o notarial según el área. Comunicación constante con el cliente." },
  { n: "04", t: "Cierre",                 d: "Resolución del proceso, archivo del expediente y entrega de documentación. Acompañamiento post-cierre cuando aplica." },
];

type CaseEntry = (typeof RC_CASES)[number];

// ── Kicker helper ──────────────────────────────────────────────
function Kicker({ num, onR, label }: { num: string; onR?: boolean; label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 22 }}>
      <div style={{ width: 36, height: 1, background: onR ? "rgba(255,255,255,.6)" : "var(--r)" }} />
      <span style={{
        fontFamily: "var(--font-mono, ui-monospace)",
        fontSize: 11, letterSpacing: ".12em",
        color: onR ? "rgba(255,255,255,.6)" : "var(--fg-5)",
      }}>{num}</span>
      <div className={`rc-eyebrow${onR ? " on-r" : ""}`}>{label}</div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────
export default async function AreaPage({ params }: Props) {
  const { slug } = await params;
  const a = RC_AREAS.find(x => x.slug === slug);
  if (!a) notFound();

  const SEO       = RC_AREAS_SEO[a.slug];
  const idx       = RC_AREAS.indexOf(a);
  const others    = RC_AREAS.filter(x => x.slug !== slug).slice(0, 4);
  const related   = (a.relatedCases ?? [])
    .map(s => RC_CASES.find(c => c.slug === s))
    .filter((c): c is CaseEntry => c !== undefined);

  const hasFaqs    = Boolean(a.faqs?.length);
  const hasRelated = related.length > 0;

  const schemaMain = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${SITE_URL}/especialidades/${a.slug}`,
    name: `${a.t} — Rivera Cheves & Asociados`,
    description: a.d.replace(/\*\*/g, ""),
    url: `${SITE_URL}/especialidades/${a.slug}`,
    provider: {
      "@type": "LegalService",
      name: "Rivera Cheves & Asociados",
      url: SITE_URL,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: a.t,
      itemListElement: a.items.map((it, i) => ({
        "@type": "Offer",
        position: i + 1,
        itemOffered: { "@type": "Service", name: it },
      })),
    },
  };

  return (
    <>
      <SchemaOrg data={schemaMain} />
      {hasFaqs && <SchemaOrg data={schemaFAQPage(a.faqs!)} />}

      <div className="rc-page">

        {/* ─── HERO ─────────────────────────────────────────── */}
        <section style={{
          position: "relative",
          background: "var(--paper)",
          padding: "clamp(36px,5vw,72px) 0 clamp(60px,8vw,120px)",
          overflow: "hidden",
        }}>
          <div className="rc-wrap">
            {/* Breadcrumb */}
            <Reveal>
              <div style={{
                display: "flex", alignItems: "center", gap: 10,
                marginBottom: 40,
                fontFamily: "var(--font-mono, ui-monospace)",
                fontSize: 11, letterSpacing: ".12em",
                textTransform: "uppercase", color: "var(--fg-5)",
              }}>
                <Link href="/especialidades" style={{ color: "var(--fg-3)" }}>
                  Especialidades
                </Link>
                <span>/</span>
                <span style={{ color: "var(--r)" }}>
                  {a.n} — {a.t.split(" ").slice(0, 3).join(" ")}…
                </span>
              </div>
            </Reveal>

            <div style={{
              display: "grid",
              gridTemplateColumns: "1.4fr 1fr",
              gap: "clamp(32px,5vw,80px)",
              alignItems: "end",
            }} className="rc-area-hero">

              {/* Left column */}
              <div>
                <Reveal>
                  <div className="rc-meta" style={{ color: "var(--r)", marginBottom: 28 }}>
                    Servicio {a.n} · Bufete Rivera Cheves
                  </div>
                </Reveal>
                <Reveal delay={80}>
                  <h1 className="rc-h1" style={{
                    marginBottom: 28,
                    fontSize: "clamp(36px,5.5vw,84px)",
                  }}>
                    {a.pre}<em className="rc-em">{a.em}</em>{a.post}
                  </h1>
                </Reveal>
                <Reveal delay={160}>
                  <RichText
                    text={a.d}
                    className="rc-lede"
                    style={{ fontSize: "clamp(17px,1.4vw,21px)", marginBottom: 36 }}
                  />
                </Reveal>
                <Reveal delay={240}>
                  <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
                    <a className="rc-btn primary" href={WA} target="_blank" rel="noopener noreferrer">
                      Consulta por WhatsApp <span className="arrow">→</span>
                    </a>
                    <Link href="/contacto" className="rc-btn ghost">
                      Formulario de contacto
                    </Link>
                  </div>
                </Reveal>
              </div>

              {/* Right — dark info panel */}
              <Reveal delay={120}>
                <div style={{
                  aspectRatio: "4/5",
                  background: "var(--ink)", color: "#fff",
                  padding: "clamp(24px,3vw,40px)",
                  display: "flex", flexDirection: "column",
                  justifyContent: "space-between",
                  position: "relative", overflow: "hidden",
                }}>
                  <div>
                    <div className="rc-meta" style={{ color: "rgba(255,255,255,.45)", marginBottom: 14 }}>
                      Área de práctica
                    </div>
                    <div style={{
                      fontFamily: "var(--font-mono, ui-monospace)",
                      fontSize: "clamp(13px,1.2vw,16px)",
                      color: "#fff", letterSpacing: ".05em", lineHeight: 1.6,
                    }}>
                      RC · {a.slug.toUpperCase()} <br />
                      <span style={{ color: "rgba(255,255,255,.45)" }}>
                        {String(idx + 1).padStart(2, "0")} / {String(RC_AREAS.length).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                  <div style={{
                    fontFamily: "var(--font-sans, system-ui)",
                    fontWeight: 200,
                    fontSize: "clamp(120px,18vw,240px)",
                    lineHeight: 0.86,
                    letterSpacing: "-0.04em",
                    color: "#fff",
                    alignSelf: "flex-start",
                  }}>
                    {a.n}
                  </div>
                  <div style={{
                    display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16,
                    paddingTop: 20, borderTop: "1px solid rgba(255,255,255,.18)",
                  }}>
                    <div>
                      <div className="rc-meta" style={{ color: "rgba(255,255,255,.45)", marginBottom: 4 }}>Sub-servicios</div>
                      <div style={{ fontSize: 13, color: "#fff" }}>{a.items.length}</div>
                    </div>
                    <div>
                      <div className="rc-meta" style={{ color: "rgba(255,255,255,.45)", marginBottom: 4 }}>Casos</div>
                      <div style={{ fontSize: 13, color: "var(--r)", fontWeight: 500 }}>
                        {hasRelated ? `${related.length} relacionados` : "Confidenciales"}
                      </div>
                    </div>
                  </div>
                  <div aria-hidden="true" style={{
                    position: "absolute", right: 24, top: 80,
                    width: 1, height: 60, background: "var(--r)",
                  }} />
                </div>
              </Reveal>
            </div>
          </div>

          {/* Ghost number */}
          <div aria-hidden="true" style={{
            position: "absolute", left: 0, bottom: "-0.05em",
            fontFamily: "var(--font-mono, ui-monospace)",
            fontSize: "clamp(160px,22vw,300px)",
            fontWeight: 400, lineHeight: 1, letterSpacing: "-0.02em",
            color: "rgba(126,1,2,.05)",
            pointerEvents: "none", userSelect: "none",
          }}>
            {a.n}
          </div>
          <style>{`@media (max-width:900px){ .rc-area-hero{ grid-template-columns:1fr !important; } }`}</style>
        </section>

        {/* ─── SUB-SERVICIOS ────────────────────────────────── */}
        <section style={{ background: "#fff", padding: "clamp(48px,7vw,96px) 0" }}>
          <div className="rc-wrap" style={{ maxWidth: 1200 }}>
            <div style={{
              display: "grid", gridTemplateColumns: "1fr 2fr",
              gap: "clamp(32px,5vw,80px)",
            }} className="rc-area-body">
              <div>
                <Kicker num="01" label="Sub-servicios" />
                <Reveal>
                  <h2 className="rc-h2">¿Qué <em className="rc-em">cubrimos</em></h2>
                </Reveal>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 0 }} className="rc-subs">
                {a.items.map((it, i) => (
                  <Reveal key={it} delay={i * 40}>
                    <div style={{
                      display: "flex", alignItems: "flex-start", gap: 16,
                      padding: "clamp(18px,2.2vw,26px) 0",
                      borderTop: "1px solid var(--hairline)",
                    }}>
                      <span className="rc-meta" style={{ color: "var(--r)", flexShrink: 0, paddingTop: 4 }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span style={{
                        fontFamily: "var(--font-sans, system-ui)",
                        fontSize: "clamp(15px,1.3vw,18px)",
                        fontWeight: 500, color: "var(--ink)",
                        letterSpacing: "-0.005em", lineHeight: 1.4,
                      }}>
                        {it}
                      </span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <style>{`
              @media (max-width:900px){ .rc-area-body{ grid-template-columns:1fr !important; } .rc-subs{ grid-template-columns:1fr !important; } }
            `}</style>
          </div>
        </section>

        {/* ─── SOBRE EL SERVICIO ────────────────────────────── */}
        <section style={{ background: "var(--paper)", padding: "var(--pad-y) 0" }}>
          <div className="rc-wrap" style={{ maxWidth: 1100 }}>
            <div style={{
              display: "grid", gridTemplateColumns: "1fr 2fr",
              gap: "clamp(32px,5vw,80px)",
            }} className="rc-area-body">
              <div>
                <Kicker num="02" label="Sobre el servicio" />
                <Reveal>
                  <h2 className="rc-h2">Nuestro <em className="rc-em">enfoque</em></h2>
                </Reveal>
              </div>
              <div>
                {a.long.map((para, i) => (
                  <Reveal key={i} delay={i * 80}>
                    <RichText
                      text={para}
                      style={{
                        fontFamily: "var(--font-sans, system-ui)",
                        fontSize: i === 0 ? "clamp(18px,1.5vw,22px)" : "16px",
                        lineHeight: i === 0 ? 1.55 : 1.7,
                        color: i === 0 ? "var(--ink)" : "var(--fg-3)",
                        marginBottom: 24,
                        letterSpacing: i === 0 ? "-0.005em" : "0",
                      }}
                    />
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── EL ABOGADO ──────────────────────────────────── */}
        <section style={{ background: "var(--ink)", color: "#fff", padding: "var(--pad-y) 0" }}>
          <div className="rc-wrap" style={{ maxWidth: 1200 }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "0.9fr 1.1fr",
              gap: "clamp(40px,6vw,96px)",
              alignItems: "end",
            }} className="rc-attorney-grid">

              {/* Foto */}
              <Reveal>
                <div style={{
                  aspectRatio: "4/5",
                  overflow: "hidden",
                  position: "relative",
                  background: "var(--r-deep, #5a0001)",
                }}>
                  <img
                    src={SEO?.photo ?? "/images/joseph/retrato.jpg"}
                    alt={`Abogado penalista Joseph Rivera Cheves — ${a.t} Costa Rica`}
                    style={{
                      width: "100%", height: "100%",
                      objectFit: "cover", objectPosition: "top center",
                    }}
                  />
                  <div aria-hidden="true" style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to top, rgba(126,1,2,.55) 0%, transparent 55%)",
                    pointerEvents: "none",
                  }} />
                </div>
              </Reveal>

              {/* Info */}
              <div>
                <Kicker num="03" onR label="El abogado" />
                <Reveal delay={80}>
                  <h2 className="rc-h2" style={{ color: "#fff", marginBottom: 28 }}>
                    Lic. Joseph{" "}
                    <em className="rc-em" style={{ color: "#fff", opacity: 0.5 }}>Rivera Cheves</em>
                  </h2>
                </Reveal>
                <Reveal delay={140}>
                  <p style={{
                    fontSize: "clamp(15px,1.3vw,18px)",
                    color: "rgba(255,255,255,.72)",
                    lineHeight: 1.65, marginBottom: 36,
                  }}>
                    {SEO?.credential ?? "Abogado y notario público en ejercicio en Costa Rica"}
                  </p>
                </Reveal>
                <Reveal delay={200}>
                  <div style={{
                    borderTop: "1px solid rgba(255,255,255,.15)",
                    paddingTop: 28, marginBottom: 40,
                    display: "flex", flexDirection: "column", gap: 16,
                  }}>
                    {[
                      "Licenciado y Máster en Derecho — Universidad de Costa Rica",
                      "Máster en Compliance, Fraude y Blanqueo — EALDE Business School, España",
                      "Ex abogado del Banco Nacional · Ex notario, Corporación Grupo Q",
                    ].map((c, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                        <span aria-hidden="true" style={{
                          width: 6, height: 6, borderRadius: "50%",
                          background: "var(--r)", flexShrink: 0, marginTop: 9,
                        }} />
                        <span style={{ fontSize: 14, color: "rgba(255,255,255,.65)", lineHeight: 1.65 }}>{c}</span>
                      </div>
                    ))}
                  </div>
                </Reveal>
                <Reveal delay={260}>
                  <Link href="/quien" className="rc-btn on-r">
                    Ver perfil completo <span className="arrow">→</span>
                  </Link>
                </Reveal>
              </div>
            </div>
          </div>
          <style>{`
            @media (max-width:900px){
              .rc-attorney-grid{ grid-template-columns:1fr !important; }
              .rc-attorney-grid > :first-child{ aspect-ratio:16/9 !important; }
            }
          `}</style>
        </section>

        {/* ─── CASOS RELACIONADOS ──────────────────────────── */}
        {hasRelated && (
          <section style={{ background: "#fff", padding: "var(--pad-y) 0" }}>
            <div className="rc-wrap" style={{ maxWidth: 1200 }}>
              <div style={{ marginBottom: "clamp(40px,5vw,72px)" }}>
                <Kicker num="04" label="Casos relacionados" />
                <Reveal>
                  <h2 className="rc-h2">Aplicación <em className="rc-em">real</em></h2>
                </Reveal>
                <Reveal delay={80}>
                  <p className="rc-lede" style={{ marginTop: 28 }}>
                    Dossiers donde este servicio ha sido determinante para el resultado del proceso.
                  </p>
                </Reveal>
              </div>
              <div style={{
                display: "grid",
                gap: "var(--gut)",
                gridTemplateColumns: `repeat(${Math.min(related.length, 3)},1fr)`,
              }} className="rc-related">
                {related.map((c, i) => (
                  <Reveal key={c.slug} delay={i * 80}>
                    <Link href={`/casos/${c.slug}`} className="rc-card" style={{
                      display: "flex", flexDirection: "column",
                      padding: 0, height: "100%", overflow: "hidden",
                    }}>
                      <div style={{
                        padding: "22px 24px",
                        borderBottom: "1px solid var(--hairline)",
                        display: "flex", justifyContent: "space-between", alignItems: "center",
                      }}>
                        <span className="rc-meta" style={{ color: "var(--fg-5)" }}>{c.location}</span>
                        <span style={{
                          padding: "3px 8px",
                          background: c.statusTone === "active" ? "var(--r)" : "var(--ink)",
                          color: "#fff",
                          fontFamily: "var(--font-mono, ui-monospace)",
                          fontSize: 9, letterSpacing: ".12em", textTransform: "uppercase",
                        }}>
                          {c.status}
                        </span>
                      </div>
                      <div style={{
                        padding: "clamp(28px,3vw,40px) 24px",
                        flex: 1, display: "flex", flexDirection: "column", gap: 16,
                      }}>
                        <div style={{
                          fontFamily: "var(--font-sans, system-ui)", fontWeight: 200,
                          fontSize: "clamp(56px,7vw,96px)", lineHeight: 0.88,
                          letterSpacing: "-0.04em", color: "var(--ink)",
                        }}>
                          {c.year.replace(" →", "")}
                        </div>
                        <h3 className="rc-h4">{c.name}</h3>
                        <RichText
                          text={c.short}
                          style={{ fontSize: 14, color: "var(--fg-3)", lineHeight: 1.6 }}
                        />
                      </div>
                      <div style={{
                        padding: "18px 24px",
                        borderTop: "1px solid var(--hairline)",
                        background: "var(--paper)",
                        display: "flex", justifyContent: "space-between", alignItems: "center",
                        fontFamily: "var(--font-sans, system-ui)", fontSize: 13, fontWeight: 600, color: "var(--r)",
                      }}>
                        <span>Leer dossier</span>
                        <span>→</span>
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
              <style>{`
                @media (max-width:1000px){ .rc-related{ grid-template-columns:repeat(2,1fr) !important; } }
                @media (max-width:640px) { .rc-related{ grid-template-columns:1fr !important; } }
              `}</style>
            </div>
          </section>
        )}

        {/* ─── PROCESO ─────────────────────────────────────── */}
        <section style={{ background: "var(--r)", color: "#fff", padding: "var(--pad-y) 0" }}>
          <div className="rc-wrap" style={{ maxWidth: 1200 }}>
            <div style={{ marginBottom: "clamp(40px,5vw,72px)" }}>
              <Kicker num={hasRelated ? "05" : "04"} onR label="Proceso de trabajo" />
              <Reveal>
                <h2 className="rc-h2" style={{ color: "#fff" }}>
                  Cómo <em className="rc-em" style={{ color: "#fff", opacity: 0.55 }}>trabajamos</em>
                </h2>
              </Reveal>
            </div>
            <div style={{
              display: "grid", gap: "var(--gut)",
              gridTemplateColumns: "repeat(4,1fr)",
            }} className="rc-process">
              {PROCESO.map((s, i) => (
                <Reveal key={s.n} delay={i * 80}>
                  <div style={{
                    paddingTop: 24,
                    borderTop: "1px solid rgba(255,255,255,.25)",
                    height: "100%",
                  }}>
                    <div className="rc-meta" style={{ color: "rgba(255,255,255,.55)", marginBottom: 16 }}>{s.n}</div>
                    <h3 style={{
                      fontFamily: "var(--font-sans, system-ui)",
                      fontSize: 22, fontWeight: 500, color: "#fff",
                      marginBottom: 14, letterSpacing: "-0.01em",
                    }}>
                      {s.t}
                    </h3>
                    <p style={{ fontSize: 14, color: "rgba(255,255,255,.72)", lineHeight: 1.65 }}>{s.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <style>{`
              @media (max-width:900px){ .rc-process{ grid-template-columns:1fr 1fr !important; } }
              @media (max-width:560px){ .rc-process{ grid-template-columns:1fr !important; } }
            `}</style>
          </div>
        </section>

        {/* ─── FAQ ─────────────────────────────────────────── */}
        {hasFaqs && (
          <section style={{ background: "#fff", padding: "var(--pad-y) 0" }}>
            <div className="rc-wrap" style={{ maxWidth: 1100 }}>
              <div style={{
                display: "grid", gridTemplateColumns: "1fr 2fr",
                gap: "clamp(32px,5vw,80px)",
              }} className="rc-area-body">
                <div>
                  <Kicker num={hasRelated ? "06" : "05"} label="Preguntas frecuentes" />
                  <Reveal>
                    <h2 className="rc-h2">Lo que más <em className="rc-em">nos consultan</em></h2>
                  </Reveal>
                </div>
                <div>
                  {a.faqs!.map((f, i) => (
                    <FaqItem key={i} q={f.q} a={f.a} idx={i} first={i === 0} />
                  ))}
                  <div style={{ borderTop: "1px solid var(--hairline)" }} />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ─── OTRAS ÁREAS ─────────────────────────────────── */}
        <section style={{ background: "var(--paper-2, #f3eee5)", padding: "var(--pad-y) 0" }}>
          <div className="rc-wrap">
            <div style={{
              display: "flex", alignItems: "flex-end",
              justifyContent: "space-between",
              gap: 24, flexWrap: "wrap",
              marginBottom: "clamp(40px,5vw,72px)",
            }}>
              <div>
                <Kicker num="—" label="Otras áreas" />
                <Reveal>
                  <h2 className="rc-h2">Servicios <em className="rc-em">relacionados</em></h2>
                </Reveal>
              </div>
              <Reveal delay={120}>
                <Link href="/especialidades" className="rc-btn ghost">
                  Ver las 7 áreas →
                </Link>
              </Reveal>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {others.map((o, i) => (
                <Reveal key={o.slug} delay={i * 50}>
                  <Link href={`/especialidades/${o.slug}`} style={{
                    display: "grid",
                    gridTemplateColumns: "80px 1fr 1.4fr 32px",
                    gap: "clamp(20px,3vw,40px)",
                    alignItems: "center",
                    padding: "clamp(22px,2.8vw,32px) 0",
                    borderTop: "1px solid var(--hairline)",
                    textDecoration: "none",
                    transition: "padding-left .3s var(--ease)",
                  }} className="rc-other-row">
                    <span className="rc-meta" style={{ color: "var(--fg-5)" }}>{o.n}</span>
                    <h3 className="rc-h3">{o.t}</h3>
                    <RichText text={o.d} style={{ fontSize: 14, color: "var(--fg-4)", lineHeight: 1.6 }} />
                    <span style={{ color: "var(--r)", fontSize: 22, textAlign: "right" }}>→</span>
                  </Link>
                </Reveal>
              ))}
              <div style={{ borderTop: "1px solid var(--hairline)" }} />
            </div>
            <style>{`
              @media (max-width:900px){
                .rc-other-row{ grid-template-columns:1fr !important; gap:8px !important; }
                .rc-other-row > :last-child{ display:none !important; }
              }
            `}</style>
          </div>
        </section>

        <CTABand />
      </div>
    </>
  );
}
