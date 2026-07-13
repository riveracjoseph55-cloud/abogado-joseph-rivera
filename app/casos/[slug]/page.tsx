import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import SchemaOrg from "@/components/SchemaOrg";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABand from "@/components/CTABand";
import Reveal from "@/components/Reveal";
import InstagramReel from "@/components/InstagramReel";
import TikTokVideo from "@/components/TikTokVideo";
import RichText from "@/components/RichText";
import { RC_CASES, RC_CASES_SEO, WA } from "@/lib/data";
import { SITE_URL, SITE_NAME, OG_IMAGE, AUTHOR } from "@/lib/seo";

const R = "#7e0102";

export async function generateStaticParams() {
  return RC_CASES.map(c => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = RC_CASES.find(x => x.slug === slug);
  if (!c) return { title: "Caso no encontrado" };

  const seo   = RC_CASES_SEO[slug];
  const title = seo?.title ?? `Caso ${c.name} | Abogado Joseph Rivera Costa Rica`;
  const description = seo?.desc ??
    `Caso ${c.name} — ${c.location}. ${c.short.slice(0, 120)}... Lic. Joseph Rivera Cheves, abogado penalista Costa Rica.`;
  const image = `${SITE_URL}/images/${c.media}`;
  const url   = `${SITE_URL}/casos/${c.slug}`;

  const keywords = [
    ...(seo?.keywords ?? []),
    c.name,
    `caso ${c.name}`,
    `${c.name} abogado`,
    "joseph rivera",
    "abogado joseph rivera",
    "abogado penalista costa rica",
    "femicidio costa rica",
    ...c.tags,
  ];

  return {
    title,
    description,
    alternates: { canonical: url },
    keywords,
    openGraph: {
      type: "article",
      url,
      title,
      description,
      images: [{
        url: image,
        width: 1200,
        height: 900,
        alt: `Caso ${c.name} — abogado penalista Joseph Rivera Cheves — ${c.location}`,
      }],
      publishedTime: `${c.year}-01-01`,
      authors: [`${SITE_URL}/quien`],
      section: "Casos de Alto Perfil",
      tags: keywords.slice(0, 10),
    },
    twitter: {
      card: "summary_large_image",
      title,
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
  const seo = RC_CASES_SEO[c.slug];
  const allKeywords = [
    ...(seo?.keywords ?? []),
    c.name, `caso ${c.name}`,
    "joseph rivera", "abogado joseph rivera",
    "abogado penalista costa rica", "femicidio costa rica",
    ...c.tags,
  ].join(", ");

  const caseSchema = {
    "@context": "https://schema.org",
    "@type": ["NewsArticle", "LegalCase"],
    "@id": url,
    headline: seo?.title ?? c.name,
    alternativeHeadline: c.headline,
    description: seo?.desc ?? c.short,
    url,
    image: {
      "@type": "ImageObject",
      url: `${SITE_URL}/images/${c.media}`,
      width: 1200,
      height: 900,
    },
    datePublished: `${c.year}-01-01`,
    dateModified: new Date().toISOString().split("T")[0],
    author: {
      "@type": "Person",
      name: AUTHOR,
      url: `${SITE_URL}/quien`,
      jobTitle: "Abogado Penalista",
      worksFor: { "@type": "LegalService", name: SITE_NAME, url: SITE_URL },
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logo.png`,
        width: 200,
        height: 200,
      },
    },
    keywords: allKeywords,
    locationCreated: {
      "@type": "Place",
      name: c.location,
      address: { "@type": "PostalAddress", addressCountry: "CR" },
    },
    about: { "@type": "Person", name: c.name },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    inLanguage: "es-CR",
    isAccessibleForFree: true,
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
                {c.yearRange && (
                  <div style={{
                    fontFamily: "var(--font-mono, monospace)", fontSize: 12,
                    letterSpacing: ".12em", color: "var(--fg-5)",
                    textTransform: "uppercase", marginBottom: 14,
                  }}>
                    Periodo procesal · {c.yearRange}
                  </div>
                )}
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

        {/* ── ROL + RESULTADO ── */}
        <section style={{ background: "var(--paper)", padding: "clamp(48px,7vw,80px) 0" }}>
          <div className="rc-wrap">
            <div style={{
              display: "grid", gridTemplateColumns: "1fr 1fr",
              gap: "clamp(32px,4vw,64px)",
            }} className="case-role-grid">
              <div style={{ paddingTop: 18, borderTop: `2px solid ${R}` }}>
                <div className="rc-meta" style={{ color: "var(--fg-5)", marginBottom: 8 }}>Rol del bufete</div>
                <div style={{ fontSize: "clamp(18px,2vw,22px)", fontWeight: 500, color: "#0d0d0d", letterSpacing: "-0.01em" }}>{c.role}</div>
              </div>
              <div style={{ paddingTop: 18, borderTop: `2px solid ${R}` }}>
                <div className="rc-meta" style={{ color: "var(--fg-5)", marginBottom: 8 }}>Resultado</div>
                <div style={{ fontSize: "clamp(18px,2vw,22px)", fontWeight: 600, color: c.statusTone === "active" ? R : "#0d0d0d", letterSpacing: "-0.01em" }}>{c.sentence}</div>
              </div>
            </div>
          </div>
          <style>{`
            @media (max-width: 700px) { .case-role-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>

        {/* ── DOSSIER: HECHOS / DESAFÍO / ESTRATEGIA ── */}
        <section style={{ background: "#fff", padding: "clamp(48px,7vw,100px) 0" }}>
          <div className="rc-wrap">
            <Reveal>
              <div className="rc-eyebrow" style={{ marginBottom: 16 }}>01 · Dossier procesal</div>
              <h2 className="rc-h2" style={{ marginBottom: 56 }}>
                Análisis <em className="rc-em">técnico</em> del caso
              </h2>
            </Reveal>

            <div style={{ display: "grid", gap: "clamp(40px,6vw,80px)" }}>
              {/* Los Hechos */}
              <Reveal>
                <article style={{
                  display: "grid", gridTemplateColumns: "200px 1fr",
                  gap: "clamp(20px,3vw,48px)",
                }} className="case-dossier-row">
                  <header>
                    <div style={{
                      fontFamily: "var(--font-mono, monospace)", fontSize: 11,
                      color: R, letterSpacing: ".14em", textTransform: "uppercase", marginBottom: 8,
                    }}>01 — Marco fáctico</div>
                    <h3 style={{
                      fontFamily: "var(--font-sans)", fontWeight: 400,
                      fontSize: "clamp(24px,3vw,32px)", letterSpacing: "-0.015em",
                      color: "#0d0d0d", lineHeight: 1.1,
                    }}>Los <em className="rc-em">Hechos</em></h3>
                  </header>
                  <RichText text={c.hechos || c.summary || ""} style={{
                    fontSize: 16, lineHeight: 1.8, color: "var(--fg-2)",
                    paddingTop: 12, borderTop: "1px solid var(--hairline)",
                  }} />
                </article>
              </Reveal>

              {/* El Desafío */}
              {c.desafio && (
                <Reveal delay={80}>
                  <article style={{
                    display: "grid", gridTemplateColumns: "200px 1fr",
                    gap: "clamp(20px,3vw,48px)",
                  }} className="case-dossier-row">
                    <header>
                      <div style={{
                        fontFamily: "var(--font-mono, monospace)", fontSize: 11,
                        color: R, letterSpacing: ".14em", textTransform: "uppercase", marginBottom: 8,
                      }}>02 — Obstáculos procesales</div>
                      <h3 style={{
                        fontFamily: "var(--font-sans)", fontWeight: 400,
                        fontSize: "clamp(24px,3vw,32px)", letterSpacing: "-0.015em",
                        color: "#0d0d0d", lineHeight: 1.1,
                      }}>El <em className="rc-em">Desafío</em></h3>
                    </header>
                    <RichText text={c.desafio || ""} style={{
                      fontSize: 16, lineHeight: 1.8, color: "var(--fg-2)",
                      paddingTop: 12, borderTop: "1px solid var(--hairline)",
                    }} />
                  </article>
                </Reveal>
              )}

              {/* La Estrategia */}
              {c.estrategia && (
                <Reveal delay={160}>
                  <article style={{
                    display: "grid", gridTemplateColumns: "200px 1fr",
                    gap: "clamp(20px,3vw,48px)",
                  }} className="case-dossier-row">
                    <header>
                      <div style={{
                        fontFamily: "var(--font-mono, monospace)", fontSize: 11,
                        color: R, letterSpacing: ".14em", textTransform: "uppercase", marginBottom: 8,
                      }}>03 — Metodología</div>
                      <h3 style={{
                        fontFamily: "var(--font-sans)", fontWeight: 400,
                        fontSize: "clamp(24px,3vw,32px)", letterSpacing: "-0.015em",
                        color: "#0d0d0d", lineHeight: 1.1,
                      }}>La <em className="rc-em">Estrategia</em></h3>
                    </header>
                    <RichText text={c.estrategia || ""} style={{
                      fontSize: 16, lineHeight: 1.8, color: "var(--fg-2)",
                      paddingTop: 12, borderTop: `1px solid ${R}`,
                    }} />
                  </article>
                </Reveal>
              )}
            </div>
          </div>
          <style>{`
            @media (max-width: 700px) {
              .case-dossier-row { grid-template-columns: 1fr !important; gap: 12px !important; }
            }
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

        {/* ── GALERÍA DEL CASO ── */}
        {c.gallery && c.gallery.length > 0 && (
          <section style={{ background: "var(--paper-2, #f3eee5)", padding: "clamp(48px,7vw,100px) 0" }}>
            <div className="rc-wrap">
              <div className="rc-eyebrow" style={{ marginBottom: 16 }}>Galería del caso</div>
              <Reveal>
                <h2 className="rc-h2" style={{ marginBottom: 48, maxWidth: "22ch" }}>
                  En <em className="rc-em">tribunal</em>, junto a la familia
                </h2>
              </Reveal>

              <div style={{
                display: "grid", gap: "clamp(20px,3vw,40px)",
                gridTemplateColumns: `repeat(${Math.min(c.gallery.length, 2)}, 1fr)`,
              }} className="case-gallery">
                {c.gallery.map((g, i) => (
                  <figure key={i} style={{ margin: 0 }}>
                    <div style={{
                      background: "#0d0d0d",
                      overflow: "hidden", position: "relative",
                      border: "1px solid var(--hairline-strong)",
                      width: "100%",
                    }}>
                      <Image
                        src={g.src}
                        alt={g.alt}
                        width={1200} height={900}
                        sizes="(max-width: 900px) 100vw, 50vw"
                        style={{
                          width: "100%", height: "auto",
                          objectFit: "cover", objectPosition: "center",
                          display: "block",
                        }}
                        loading={i < 2 ? "eager" : "lazy"}
                      />
                    </div>
                    <figcaption style={{
                      marginTop: 18,
                      paddingTop: 14,
                      borderTop: `1px solid ${R}`,
                    }}>
                      <div className="rc-meta" style={{ color: R, marginBottom: 8 }}>
                        {g.caption}
                      </div>
                      <p style={{ fontSize: 14, lineHeight: 1.65, color: "var(--fg-3)", maxWidth: "48ch" }}>
                        {g.sub}
                      </p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
            <style>{`
              @media (max-width: 800px) {
                .case-gallery { grid-template-columns: 1fr !important; }
              }
            `}</style>
          </section>
        )}

        {/* ── LIBRO · solo caso Nadia Peraza ── */}
        {c.slug === "nadia-peraza" && (
          <section style={{
            position: "relative",
            background:
              "radial-gradient(1100px 500px at 80% 30%, rgba(126,1,2,.22), transparent 60%), linear-gradient(180deg, #0a0707 0%, #120b0b 100%)",
            overflow: "hidden",
            padding: "clamp(48px,7vw,96px) 0",
          }}>
            <div className="rc-wrap">
              <div style={{
                display: "grid", gridTemplateColumns: "auto 1fr",
                gap: "clamp(28px,4vw,64px)", alignItems: "center",
              }} className="case-book-grid">
                <Reveal variant="scale">
                  <Link href="/libro" style={{ display: "block", position: "relative", justifySelf: "center" }}>
                    <div className="libro-glow" />
                    <div className="libro-cover" style={{ position: "relative", zIndex: 1, width: "min(190px, 60vw)" }}>
                      <Image
                        src="/images/libro/canibal-portada.jpg"
                        alt="Libro El Caníbal de la Refrigeradora — crónica forense de un femicidio en Costa Rica, por el abogado Joseph Rivera Cheves"
                        width={760} height={1140}
                        sizes="190px"
                        style={{ width: "100%", height: "auto", borderRadius: 3 }}
                        loading="lazy"
                      />
                    </div>
                  </Link>
                </Reveal>

                <div>
                  <Reveal variant="fade">
                    <span className="libro-badge" style={{ marginBottom: 22 }}>
                      <span className="dot" /> Próximamente · Libro
                    </span>
                  </Reveal>
                  <Reveal delay={60}>
                    <h2 style={{
                      fontFamily: "var(--font-sans)", fontWeight: 300,
                      fontSize: "clamp(26px,3.8vw,48px)", lineHeight: 1.1, letterSpacing: "-0.02em",
                      color: "#f5ede0", marginBottom: 18, marginTop: 8,
                    }}>
                      <span className="libro-gold">El Caníbal de la Refrigeradora</span>
                    </h2>
                  </Reveal>
                  <Reveal delay={120} variant="fade">
                    <p style={{ fontSize: 16, lineHeight: 1.75, color: "rgba(245,237,224,.72)", maxWidth: "54ch", marginBottom: 28 }}>
                      El Lic. Rivera Cheves narra este caso desde dentro en su nuevo libro — el episodio
                      más fuerte de su carrera. <strong style={{ color: "#f5ede0" }}>Parte de las ganancias
                      serán para la hija de la ofendida.</strong>
                    </p>
                  </Reveal>
                  <Reveal delay={180} variant="fade">
                    <Link href="/libro" className="libro-btn">
                      Conocer el libro <span className="arrow">→</span>
                    </Link>
                  </Reveal>
                </div>
              </div>
            </div>
            <style>{`
              @media (max-width: 700px) { .case-book-grid { grid-template-columns: 1fr !important; text-align: left; } }
            `}</style>
          </section>
        )}

        {/* ── INSTAGRAM REEL · MEMORIA Y ESPERANZA ── */}
        {c.instagramReel && (
          <section style={{ background: "#fff", padding: "var(--pad-y) 0" }}>
            <div className="rc-wrap">
              <div style={{
                display: "grid", gridTemplateColumns: "1fr 1fr",
                gap: "clamp(40px,6vw,96px)", alignItems: "center",
              }} className="case-reel-grid">
                <Reveal>
                  <div>
                    <div className="rc-eyebrow" style={{ marginBottom: 20, color: R }}>
                      {c.instagramReel.eyebrow}
                    </div>
                    <h2 className="rc-h2" style={{ marginBottom: 28, maxWidth: "18ch" }}>
                      {c.instagramReel.title}
                    </h2>
                    <p className="rc-lede" style={{ marginBottom: 24, maxWidth: "48ch" }}>
                      {c.instagramReel.msg}
                    </p>
                    <div style={{
                      paddingTop: 24, borderTop: `2px solid ${R}`,
                      fontFamily: "var(--font-mono, monospace)", fontSize: 11,
                      letterSpacing: ".14em", textTransform: "uppercase", color: "var(--fg-5)",
                    }}>
                      Instagram · @josephriveraabogado
                    </div>
                  </div>
                </Reveal>
                <Reveal delay={120}>
                  <InstagramReel url={c.instagramReel.url} caption />
                </Reveal>
              </div>
            </div>
            <style>{`
              @media (max-width: 900px) { .case-reel-grid { grid-template-columns: 1fr !important; } }
            `}</style>
          </section>
        )}

        {/* ── TIKTOK VIDEOS ── */}
        {"tiktokVideos" in c && Array.isArray((c as any).tiktokVideos) && (c as any).tiktokVideos.length > 0 && (
          <section style={{ background: "#f9f7f5", padding: "clamp(48px,7vw,100px) 0" }}>
            <div className="rc-wrap">
              <div className="rc-eyebrow" style={{ marginBottom: 16, color: R }}>Cobertura · TikTok</div>
              <h2 className="rc-h2" style={{ marginBottom: 40 }}>
                El caso en <em className="rc-em">video</em>
              </h2>
              <Reveal>
                <div
                  style={{
                    display: "grid",
                    gap: 24,
                    gridTemplateColumns: `repeat(${Math.min((c as any).tiktokVideos.length, 2)}, 325px)`,
                    justifyContent: "center",
                  }}
                  className="case-tiktok-grid"
                >
                  {((c as any).tiktokVideos as string[]).map((url: string, i: number) => (
                    <TikTokVideo key={i} url={url} />
                  ))}
                </div>
              </Reveal>
            </div>
            <style>{`
              @media (max-width: 720px) {
                .case-tiktok-grid { grid-template-columns: min(325px, 100%) !important; }
              }
            `}</style>
          </section>
        )}

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
                      <RichText as="p" text={rc.short} style={{ fontSize: 14, color: "var(--fg-4)", lineHeight: 1.6, marginBottom: 18 }} />
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
