import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import SchemaOrg from "@/components/SchemaOrg";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABand from "@/components/CTABand";
import Reveal from "@/components/Reveal";
import { RC_CASES, WA } from "@/lib/data";
import { SITE_URL, SITE_NAME, OG_IMAGE, AUTHOR } from "@/lib/seo";

const R = "#7e0102";

export async function generateStaticParams() {
  return RC_CASES.map(c => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = RC_CASES.find(x => x.slug === slug);
  if (!c) return { title: "Caso no encontrado" };

  const title = `${c.name} — Caso ${c.year}`;
  const description = c.short.length > 155 ? c.short.slice(0, 152) + "..." : c.short;
  const image = `${SITE_URL}/images/${c.media}`;
  const url = `${SITE_URL}/casos/${c.slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: c.name }],
      publishedTime: `${c.year}-01-01`,
      authors: [`${SITE_URL}/quien`],
      section: "Casos de Alto Perfil",
      tags: c.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [image],
    },
  };
}

export default async function CasoDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = RC_CASES.find(x => x.slug === slug);
  if (!c) notFound();

  const idx = RC_CASES.findIndex(x => x.slug === slug);
  const related = RC_CASES.filter((_, i) => i !== idx).slice(0, 3);
  const url = `${SITE_URL}/casos/${c.slug}`;

  // Schema NewsArticle + LegalCase combinado
  const caseSchema = {
    "@context": "https://schema.org",
    "@type": ["NewsArticle", "LegalCase"],
    "@id": url,
    headline: c.name,
    alternativeHeadline: c.headline,
    description: c.short,
    url,
    image: `${SITE_URL}/images/${c.media}`,
    datePublished: `${c.year}-01-01`,
    dateModified: `${c.year}-12-31`,
    author: {
      "@type": "Person",
      name: AUTHOR,
      url: `${SITE_URL}/quien`,
      jobTitle: "Abogado Penalista",
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/images/logo.png` },
    },
    keywords: c.tags.join(", "),
    locationCreated: { "@type": "Place", name: c.location },
    about: {
      "@type": "Person",
      name: c.name,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  return (
    <>
      <SchemaOrg data={caseSchema} />
      <div className="rc-page">

        {/* ── HERO ── */}
        <section style={{ background: "var(--paper)", padding: "clamp(48px,7vw,100px) 0 clamp(40px,6vw,80px)" }}>
          <div className="rc-wrap">
            <Breadcrumbs trail={[
              { name: "Casos", href: "/casos" },
              { name: c.name, href: `/casos/${c.slug}` },
            ]}/>

            <div style={{
              display: "grid", gridTemplateColumns: "1fr 1.4fr",
              gap: "clamp(32px,5vw,80px)", alignItems: "end", marginTop: 24,
            }} className="case-hero-grid">
              <div>
                <div style={{
                  fontFamily: "var(--font-sans)", fontWeight: 200,
                  fontSize: "clamp(96px,14vw,200px)", lineHeight: 0.85, letterSpacing: "-0.045em",
                  color: "#0d0d0d", marginBottom: 16,
                }}>
                  {c.year}
                </div>
                <span style={{
                  display: "inline-block", padding: "6px 12px",
                  background: c.statusTone === "active" ? R : "#0d0d0d",
                  color: "#fff",
                  fontFamily: "var(--font-mono, monospace)", fontSize: 10,
                  letterSpacing: ".14em", textTransform: "uppercase",
                }}>{c.status}</span>
              </div>
              <div>
                <div className="rc-eyebrow" style={{ marginBottom: 16 }}>{c.location}</div>
                <h1 className="rc-h1" style={{ marginBottom: 20 }}>{c.name}</h1>
                <p className="rc-lede" style={{ marginBottom: 24 }}>{c.headline}</p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {c.tags.map(t => (
                    <span key={t} className="rc-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <style>{`
            @media (max-width: 900px) { .case-hero-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>

        {/* ── DATOS DEL CASO ── */}
        <section style={{ background: "#fff", padding: "clamp(40px,6vw,80px) 0" }}>
          <div className="rc-wrap">
            <div style={{
              display: "grid", gridTemplateColumns: `repeat(${c.facts.length},1fr)`,
              gap: "clamp(20px,3vw,40px)",
            }} className="case-facts">
              {c.facts.map((f, i) => (
                <Reveal key={f.k} delay={i * 60}>
                  <div style={{
                    paddingTop: 18, borderTop: `1px solid ${R}`,
                  }}>
                    <div className="rc-meta" style={{ color: "var(--fg-5)", marginBottom: 8 }}>{f.k}</div>
                    <div style={{ fontSize: "clamp(18px,2vw,24px)", fontWeight: 500, color: "#0d0d0d", letterSpacing: "-0.01em" }}>{f.v}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <style>{`
            @media (max-width: 700px) { .case-facts { grid-template-columns: 1fr 1fr !important; } }
          `}</style>
        </section>

        {/* ── RESUMEN + ROL ── */}
        <section style={{ background: "var(--paper)", padding: "clamp(48px,7vw,100px) 0" }}>
          <div className="rc-wrap">
            <div style={{
              display: "grid", gridTemplateColumns: "1fr 2fr",
              gap: "clamp(32px,5vw,80px)",
            }} className="case-summary-grid">
              <div>
                <div className="rc-eyebrow" style={{ marginBottom: 16 }}>01 · Resumen del caso</div>
                <div style={{ paddingTop: 16, borderTop: "1px solid var(--hairline)" }}>
                  <div className="rc-meta" style={{ color: "var(--fg-5)", marginBottom: 6 }}>Rol del bufete</div>
                  <div style={{ fontSize: 17, fontWeight: 500, marginBottom: 16, color: "#0d0d0d" }}>{c.role}</div>
                  <div className="rc-meta" style={{ color: "var(--fg-5)", marginBottom: 6 }}>Resultado</div>
                  <div style={{ fontSize: 17, fontWeight: 600, color: c.statusTone === "active" ? R : "#0d0d0d" }}>{c.sentence}</div>
                </div>
              </div>
              <Reveal>
                <p className="rc-body" style={{ fontSize: 17, lineHeight: 1.8, color: "var(--fg-2)" }}>
                  {c.summary}
                </p>
              </Reveal>
            </div>
          </div>
          <style>{`
            @media (max-width: 900px) { .case-summary-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>

        {/* ── TIMELINE ── */}
        <section style={{ background: "#fff", padding: "clamp(48px,7vw,100px) 0" }}>
          <div className="rc-wrap">
            <div className="rc-eyebrow" style={{ marginBottom: 16 }}>02 · Cronología procesal</div>
            <h2 className="rc-h2" style={{ marginBottom: 56 }}>
              Línea de <em className="rc-em">tiempo</em>
            </h2>
            <div style={{ display: "grid", gap: 0 }}>
              {c.timeline.map((t, i) => (
                <Reveal key={i} delay={i * 80}>
                  <div style={{
                    display: "grid", gridTemplateColumns: "200px 1fr",
                    gap: "clamp(20px,3vw,48px)",
                    padding: "clamp(20px,3vw,32px) 0",
                    borderTop: "1px solid var(--hairline)",
                  }} className="case-timeline-row">
                    <div style={{
                      fontFamily: "var(--font-mono, monospace)", fontSize: 13,
                      color: R, letterSpacing: ".06em", textTransform: "uppercase",
                    }}>{t.date}</div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: "#0d0d0d", marginBottom: 6, textTransform: "uppercase", letterSpacing: ".06em" }}>{t.label}</div>
                      <div style={{ fontSize: 16, color: "var(--fg-3)", lineHeight: 1.7 }}>{t.text}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <style>{`
            @media (max-width: 700px) {
              .case-timeline-row { grid-template-columns: 1fr !important; gap: 12px !important; }
            }
          `}</style>
        </section>

        {/* ── QUOTE ── */}
        {c.quote && (
          <section style={{ background: R, padding: "clamp(48px,7vw,100px) 0" }}>
            <div className="rc-wrap" style={{ textAlign: "center", maxWidth: 920 }}>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: 64, lineHeight: 1, color: "rgba(255,255,255,.25)", marginBottom: 24 }}>
                &ldquo;
              </div>
              <Reveal>
                <blockquote style={{
                  fontFamily: "Georgia, serif", fontStyle: "italic",
                  fontSize: "clamp(22px,3vw,36px)", lineHeight: 1.4, color: "#fff",
                  marginBottom: 32,
                }}>
                  {c.quote}
                </blockquote>
              </Reveal>
              {c.quoteContext && (
                <cite style={{
                  fontFamily: "var(--font-mono, monospace)", fontStyle: "normal",
                  fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase",
                  color: "rgba(255,255,255,.7)",
                }}>
                  — {c.quoteContext}
                </cite>
              )}
            </div>
          </section>
        )}

        {/* ── PRENSA RELACIONADA ── */}
        {c.press && c.press.length > 0 && (
          <section style={{ background: "#fff", padding: "clamp(48px,7vw,100px) 0" }}>
            <div className="rc-wrap">
              <div className="rc-eyebrow" style={{ marginBottom: 16 }}>03 · Cobertura mediática</div>
              <h2 className="rc-h2" style={{ marginBottom: 40 }}>
                En la <em className="rc-em">prensa</em>
              </h2>
              <div style={{
                display: "grid", gap: "var(--gut)",
                gridTemplateColumns: "repeat(2,1fr)",
              }} className="case-press-grid">
                {c.press.map((p, i) => (
                  <Reveal key={i} delay={i * 80}>
                    <a href={p.u} target="_blank" rel="noopener" className="rc-card" style={{
                      display: "block", padding: 28, height: "100%",
                    }}>
                      <div style={{
                        fontFamily: "var(--font-mono, monospace)", fontSize: 11,
                        letterSpacing: ".12em", textTransform: "uppercase", color: R, marginBottom: 18,
                      }}>{p.medio}</div>
                      <h3 className="rc-h3" style={{ marginBottom: 20, fontSize: 22 }}>{p.t}</h3>
                      <span style={{ fontSize: 13, fontWeight: 600, color: R }}>Leer artículo →</span>
                    </a>
                  </Reveal>
                ))}
              </div>
            </div>
            <style>{`
              @media (max-width: 700px) { .case-press-grid { grid-template-columns: 1fr !important; } }
            `}</style>
          </section>
        )}

        {/* ── CASOS RELACIONADOS ── */}
        {related.length > 0 && (
          <section style={{ background: "var(--paper)", padding: "clamp(48px,7vw,100px) 0" }}>
            <div className="rc-wrap">
              <div style={{
                display: "flex", justifyContent: "space-between", alignItems: "flex-end",
                marginBottom: 40, flexWrap: "wrap", gap: 16,
              }}>
                <div>
                  <div className="rc-eyebrow" style={{ marginBottom: 16 }}>Otros casos</div>
                  <h2 className="rc-h2">
                    Casos <em className="rc-em">relacionados</em>
                  </h2>
                </div>
                <Link href="/casos" className="rc-btn ghost">Ver todos →</Link>
              </div>

              <div style={{
                display: "grid", gap: "var(--gut)",
                gridTemplateColumns: `repeat(${related.length},1fr)`,
              }} className="related-grid">
                {related.map((rc, i) => (
                  <Reveal key={rc.slug} delay={i * 80}>
                    <Link href={`/casos/${rc.slug}`} className="rc-card" style={{
                      display: "flex", flexDirection: "column", padding: 28, height: "100%",
                    }}>
                      <div style={{
                        display: "flex", justifyContent: "space-between",
                        marginBottom: 24,
                        fontFamily: "var(--font-mono, monospace)", fontSize: 11,
                        letterSpacing: ".12em", textTransform: "uppercase",
                      }}>
                        <span style={{ color: R }}>{rc.year}</span>
                        <span style={{ color: "var(--fg-5)" }}>{rc.location}</span>
                      </div>
                      <h3 className="rc-h3" style={{ flex: 1, marginBottom: 16, fontSize: 22 }}>{rc.name}</h3>
                      <p style={{ fontSize: 14, color: "var(--fg-4)", lineHeight: 1.6, marginBottom: 18 }}>{rc.short}</p>
                      <span style={{ fontSize: 13, fontWeight: 600, color: R }}>Ver caso →</span>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
            <style>{`
              @media (max-width: 900px) { .related-grid { grid-template-columns: 1fr 1fr !important; } }
              @media (max-width: 560px) { .related-grid { grid-template-columns: 1fr !important; } }
            `}</style>
          </section>
        )}

        <CTABand />
      </div>
    </>
  );
}
