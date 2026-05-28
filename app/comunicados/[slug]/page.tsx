import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import SchemaOrg from "@/components/SchemaOrg";
import { RC_COMUNICADOS, RC_CASES, WA, EMAIL } from "@/lib/data";
import { SITE_URL, SITE_NAME, OG_IMAGE, AUTHOR, schemaPressRelease } from "@/lib/seo";

// ── SSG ──────────────────────────────────────────────────────────
export function generateStaticParams() {
  return RC_COMUNICADOS.map(c => ({ slug: c.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = RC_COMUNICADOS.find(x => x.slug === slug);
  if (!c) return {};
  return {
    title: `${c.title} | Comunicados | Rivera Cheves`,
    description: c.summary,
    alternates: { canonical: `${SITE_URL}/comunicados/${c.slug}` },
    openGraph: {
      type: "article",
      url: `${SITE_URL}/comunicados/${c.slug}`,
      title: c.title,
      description: c.summary,
      publishedTime: c.date,
      authors: [AUTHOR],
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `${c.title} | ${SITE_NAME}` }],
    },
    twitter: { card: "summary_large_image", title: c.title, images: [OG_IMAGE] },
    keywords: [
      "comunicado prensa costa rica",
      "rivera cheves comunicado",
      ...(c.tags ?? []),
    ],
  };
}

// ── Helpers ───────────────────────────────────────────────────────
function formatDate(d: string) {
  const months = [
    "enero","febrero","marzo","abril","mayo","junio",
    "julio","agosto","setiembre","octubre","noviembre","diciembre",
  ];
  const [y, m, day] = d.split("-");
  return `${Number(day)} de ${months[Number(m) - 1]} de ${y}`;
}

type CaseEntry = (typeof RC_CASES)[number];

const R = "#7e0102";

// ── Page ──────────────────────────────────────────────────────────
export default async function ComunicadoPage({ params }: Props) {
  const { slug } = await params;
  const c = RC_COMUNICADOS.find(x => x.slug === slug);
  if (!c) notFound();

  const related = c.relatedCase
    ? (RC_CASES.find(ca => ca.slug === c.relatedCase) as CaseEntry | undefined)
    : undefined;

  const others = [...RC_COMUNICADOS]
    .filter(x => x.slug !== slug)
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);

  const schema = schemaPressRelease({
    slug:    c.slug,
    title:   c.title,
    summary: c.summary,
    body:    c.body.join(" "),
    date:    c.date,
    tags:    c.tags,
  });

  return (
    <>
      <SchemaOrg data={schema} />
      <div className="rc-page">

        {/* ── CABECERA DEL COMUNICADO ─────────────────────────── */}
        <section style={{ background: "var(--paper)", padding: "clamp(48px,6vw,96px) 0" }}>
          <div className="rc-wrap" style={{ maxWidth: 860 }}>

            {/* Breadcrumb */}
            <Reveal>
              <div style={{
                display: "flex", alignItems: "center", gap: 10, marginBottom: 36,
                fontFamily: "var(--font-mono, ui-monospace)", fontSize: 11,
                letterSpacing: ".12em", textTransform: "uppercase", color: "var(--fg-5)",
              }}>
                <Link href="/prensa" style={{ color: "var(--fg-4)" }}>Prensa</Link>
                <span>/</span>
                <Link href="/comunicados" style={{ color: "var(--fg-4)" }}>Comunicados</Link>
                <span>/</span>
                <span style={{ color: R }}>{c.slug.slice(0, 28)}…</span>
              </div>
            </Reveal>

            {/* Chip de tipo + fecha */}
            <Reveal delay={60}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 24,
                padding: "6px 14px",
                background: "var(--r-tint, #fff0f0)",
                fontFamily: "var(--font-mono, ui-monospace)", fontSize: 11,
                letterSpacing: ".12em", textTransform: "uppercase", color: R,
              }}>
                <span>Comunicado oficial</span>
                <span style={{ opacity: 0.45 }}>·</span>
                <span>{formatDate(c.date)}</span>
              </div>
            </Reveal>

            {/* Titular */}
            <Reveal delay={120}>
              <h1 style={{
                fontFamily: "var(--font-sans, system-ui)", fontWeight: 400,
                fontSize: "clamp(26px,4vw,52px)", lineHeight: 1.12,
                letterSpacing: "-0.02em", color: "var(--ink)", marginBottom: 28,
              }}>
                {c.title}
              </h1>
            </Reveal>

            {/* Resumen */}
            <Reveal delay={180}>
              <p style={{
                fontFamily: "var(--font-sans, system-ui)", fontSize: "clamp(17px,1.4vw,20px)",
                lineHeight: 1.6, color: "var(--fg-3)",
              }}>
                {c.summary}
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── IMAGEN DESTACADA ─────────────────────────────────── */}
        {c.image && (
          <div style={{ background: "#fff", borderBottom: "1px solid var(--hairline)" }}>
            <div className="rc-wrap" style={{ maxWidth: 860, padding: "0 0 0 0" }}>
              <img
                src={c.image}
                alt={c.title}
                style={{
                  width: "100%",
                  maxHeight: 480,
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          </div>
        )}

        <div style={{ height: 1, background: "var(--hairline)" }} />

        {/* ── CUERPO + SIDEBAR ─────────────────────────────────── */}
        <section style={{ background: "#fff", padding: "var(--pad-y) 0" }}>
          <div className="rc-wrap" style={{ maxWidth: 1080 }}>
            <div style={{
              display: "grid", gridTemplateColumns: "1fr 300px",
              gap: "clamp(40px,6vw,80px)", alignItems: "start",
            }} className="com-body-grid">

              {/* ── Texto completo ── */}
              <article>
                {c.body.map((para, i) => (
                  <Reveal key={i} delay={i * 60}>
                    <p style={{
                      fontFamily: "var(--font-sans, system-ui)",
                      fontSize: i === 0 ? "clamp(17px,1.3vw,19px)" : 16,
                      lineHeight: 1.8,
                      color: i === 0 ? "var(--ink)" : "var(--fg-2)",
                      marginBottom: 28,
                    }}>
                      {para}
                    </p>
                  </Reveal>
                ))}

                {/* Audio */}
                {c.audio && (
                  <Reveal delay={220}>
                    <div style={{
                      marginTop: 36, marginBottom: 36,
                      padding: "20px 24px",
                      background: "var(--paper)",
                      borderLeft: `3px solid ${R}`,
                    }}>
                      <div style={{
                        fontFamily: "var(--font-mono, ui-monospace)", fontSize: 10,
                        letterSpacing: ".12em", textTransform: "uppercase",
                        color: "var(--fg-4)", marginBottom: 12,
                      }}>
                        Declaraciones — Lic. Joseph Rivera Cheves
                      </div>
                      <audio
                        controls
                        style={{ width: "100%", accentColor: R }}
                      >
                        <source src={c.audio} type="audio/ogg" />
                        Tu navegador no soporta reproducción de audio.
                      </audio>
                    </div>
                  </Reveal>
                )}

                {/* Firma del bufete */}
                <Reveal delay={240}>
                  <div style={{
                    marginTop: 40, paddingTop: 28,
                    borderTop: "1px solid var(--hairline)",
                    display: "flex", alignItems: "center", gap: 16,
                  }}>
                    <div style={{ width: 36, height: 1, background: R, flexShrink: 0 }} />
                    <span style={{
                      fontFamily: "var(--font-mono, ui-monospace)", fontSize: 11,
                      letterSpacing: ".12em", textTransform: "uppercase", color: "var(--fg-4)",
                    }}>
                      Rivera Cheves &amp; Asociados · {formatDate(c.date)}
                    </span>
                  </div>
                </Reveal>

                {/* Tags */}
                {c.tags && c.tags.length > 0 && (
                  <Reveal delay={280}>
                    <div style={{
                      marginTop: 28, display: "flex", flexWrap: "wrap",
                      gap: 6, alignItems: "center",
                    }}>
                      <span style={{
                        fontFamily: "var(--font-mono, ui-monospace)", fontSize: 10,
                        letterSpacing: ".12em", textTransform: "uppercase",
                        color: "var(--fg-5)", marginRight: 4,
                      }}>Etiquetas:</span>
                      {c.tags.map(tag => (
                        <span key={tag} style={{
                          padding: "4px 10px",
                          fontFamily: "var(--font-mono, ui-monospace)", fontSize: 9,
                          letterSpacing: ".1em", textTransform: "uppercase",
                          color: "var(--fg-3)", background: "var(--paper-2, #f3eee5)",
                        }}>{tag}</span>
                      ))}
                    </div>
                  </Reveal>
                )}
              </article>

              {/* ── Sidebar ── */}
              <aside>

                {/* Contacto para prensa */}
                <Reveal delay={80}>
                  <div style={{
                    background: "var(--ink)", color: "#fff",
                    padding: "clamp(22px,2.8vw,32px)",
                    marginBottom: 20,
                  }}>
                    <div style={{
                      fontFamily: "var(--font-mono, ui-monospace)", fontSize: 9,
                      letterSpacing: ".14em", textTransform: "uppercase",
                      color: "rgba(255,255,255,.4)", marginBottom: 14,
                    }}>
                      Contacto para medios
                    </div>
                    <div style={{
                      fontFamily: "var(--font-sans, system-ui)", fontWeight: 500,
                      fontSize: 15, color: "#fff", lineHeight: 1.4, marginBottom: 20,
                    }}>
                      Lic. Joseph Rivera Cheves<br />
                      <span style={{ fontSize: 12, color: "rgba(255,255,255,.55)", fontWeight: 400 }}>
                        Disponible 24/7
                      </span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                      <a href={WA} target="_blank" rel="noopener noreferrer" style={{
                        display: "block", padding: "10px 16px", textAlign: "center",
                        background: "#fff", color: R,
                        fontFamily: "var(--font-sans, system-ui)",
                        fontSize: 13, fontWeight: 700, textDecoration: "none",
                      }}>
                        WhatsApp →
                      </a>
                      <a href={`mailto:${EMAIL}`} style={{
                        display: "block", padding: "10px 16px", textAlign: "center",
                        border: "1px solid rgba(255,255,255,.22)", color: "rgba(255,255,255,.75)",
                        fontFamily: "var(--font-mono, ui-monospace)",
                        fontSize: 11, letterSpacing: ".04em", textDecoration: "none",
                      }}>
                        {EMAIL}
                      </a>
                    </div>
                  </div>
                </Reveal>

                {/* Caso relacionado */}
                {related && (
                  <Reveal delay={140}>
                    <Link href={`/casos/${related.slug}`} style={{
                      display: "block", padding: "clamp(20px,2.5vw,28px)",
                      background: "var(--paper-2, #f3eee5)",
                      textDecoration: "none",
                    }}>
                      <div style={{
                        fontFamily: "var(--font-mono, ui-monospace)", fontSize: 9,
                        letterSpacing: ".12em", textTransform: "uppercase",
                        color: "var(--fg-4)", marginBottom: 12,
                      }}>
                        Caso relacionado
                      </div>
                      <h3 style={{
                        fontFamily: "var(--font-sans, system-ui)", fontWeight: 500,
                        fontSize: 16, color: "var(--ink)", lineHeight: 1.3, marginBottom: 8,
                      }}>
                        {related.name}
                      </h3>
                      <p style={{ fontSize: 13, color: "var(--fg-4)", lineHeight: 1.5, marginBottom: 14 }}>
                        {related.sentence}
                      </p>
                      <span style={{ fontSize: 12, fontWeight: 600, color: R }}>
                        Ver dossier →
                      </span>
                    </Link>
                  </Reveal>
                )}

                {/* Link al hub */}
                <Reveal delay={180}>
                  <div style={{ marginTop: 20 }}>
                    <Link href="/comunicados" style={{
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      padding: "14px 18px",
                      border: "1px solid var(--hairline-strong)",
                      fontFamily: "var(--font-sans, system-ui)", fontSize: 13,
                      fontWeight: 600, color: "var(--fg-3)", textDecoration: "none",
                    }}>
                      <span>Todos los comunicados</span>
                      <span>→</span>
                    </Link>
                  </div>
                </Reveal>
              </aside>
            </div>
          </div>

          <style>{`
            @media (max-width: 900px){ .com-body-grid{ grid-template-columns:1fr !important; } }
          `}</style>
        </section>

        {/* ── OTROS COMUNICADOS ──────────────────────────────── */}
        {others.length > 0 && (
          <section style={{ background: "var(--paper-2, #f3eee5)", padding: "var(--pad-y) 0" }}>
            <div className="rc-wrap" style={{ maxWidth: 860 }}>
              <div style={{ marginBottom: "clamp(32px,4vw,56px)" }}>
                <div className="rc-eyebrow" style={{ marginBottom: 14 }}>Más comunicados</div>
                <Reveal>
                  <h2 className="rc-h2">Otros <em className="rc-em">comunicados</em></h2>
                </Reveal>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {others.map((o, i) => (
                  <Reveal key={o.slug} delay={i * 60}>
                    <Link href={`/comunicados/${o.slug}`} style={{
                      display: "grid", gridTemplateColumns: "140px 1fr auto",
                      gap: "clamp(16px,2.5vw,36px)",
                      padding: "clamp(20px,2.5vw,32px) 0",
                      borderTop: "1px solid var(--hairline)",
                      textDecoration: "none", alignItems: "start",
                    }} className="com-other-row">
                      <div style={{
                        fontFamily: "var(--font-mono, ui-monospace)", fontSize: 11,
                        color: "var(--fg-4)", paddingTop: 2,
                      }}>
                        {formatDate(o.date)}
                      </div>
                      <h3 style={{
                        fontFamily: "var(--font-sans, system-ui)", fontWeight: 500,
                        fontSize: "clamp(15px,1.5vw,18px)", lineHeight: 1.35, color: "var(--ink)",
                      }}>
                        {o.title}
                      </h3>
                      <span style={{ color: R, fontSize: 16, paddingTop: 3 }}>→</span>
                    </Link>
                  </Reveal>
                ))}
                <div style={{ borderTop: "1px solid var(--hairline)" }} />
              </div>
              <div style={{ marginTop: 32 }}>
                <Link href="/comunicados" className="rc-btn ghost">
                  Ver todos los comunicados →
                </Link>
              </div>
            </div>
            <style>{`
              @media (max-width:600px){
                .com-other-row{ grid-template-columns:1fr !important; gap:8px !important; }
                .com-other-row > :last-child{ display:none !important; }
              }
              .com-other-row:hover h3{ color:${R}; }
            `}</style>
          </section>
        )}

        <CTABand />
      </div>
    </>
  );
}
