import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import SchemaOrg from "@/components/SchemaOrg";
import Breadcrumbs from "@/components/Breadcrumbs";
import FinalCTA from "@/components/FinalCTA";
import Reveal from "@/components/Reveal";
import InstagramReel from "@/components/InstagramReel";
import TikTokVideo from "@/components/TikTokVideo";
import LiteYouTube from "@/components/LiteYouTube";
import RichText from "@/components/RichText";
import { RC_CASES, RC_CASES_SEO } from "@/lib/data";
import { SITE_URL, SITE_NAME, OG_IMAGE, AUTHOR } from "@/lib/seo";

// ── Paleta editorial ──────────────────────────────────────────────
const CS_CREAM    = "#F4F1EB";
const CS_BLACK    = "#0A0A0A";
const CS_CHARCOAL = "#161616";
const CS_WINE     = "#7A0808";
const CS_RED      = "#A20A0A";
const CS_GOLD     = "#C7A45C";
const CS_GRAY     = "#6C6C6C";
const CS_BORDER   = "rgba(20,20,20,0.12)";

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
    c.name, `caso ${c.name}`, `${c.name} abogado`,
    "joseph rivera", "abogado joseph rivera",
    "abogado penalista costa rica", "femicidio costa rica",
    ...c.tags,
  ];

  return {
    title, description,
    alternates: { canonical: url },
    keywords,
    openGraph: {
      type: "article", url, title, description,
      images: [{ url: image, width: 1200, height: 900, alt: `Caso ${c.name} — abogado penalista Joseph Rivera Cheves — ${c.location}` }],
      publishedTime: `${c.year}-01-01`,
      authors: [`${SITE_URL}/quien`],
      section: "Casos de Alto Perfil",
      tags: keywords.slice(0, 10),
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

// ── Íconos ────────────────────────────────────────────────────────
function PeopleIcon({ c = CS_GOLD }: { c?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
      <circle cx="9" cy="8" r="3" stroke={c} strokeWidth="1.4"/>
      <path d="M3.5 20c.5-3.3 2.8-5 5.5-5s5 1.7 5.5 5M16 6.2a3 3 0 0 1 0 5.6M20.5 20c-.3-2-1.3-3.4-2.9-4.2" stroke={c} strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  );
}
function ScaleIcon({ c = CS_GOLD, size = 20 }: { c?: string; size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true">
      <path d="M12 3v16M5 21h14M6 8h12M6 8 3.5 13.5a3.2 3.2 0 0 0 6.5 0L7.5 8M17.5 8 15 13.5a3.2 3.2 0 0 0 6.5 0L18.5 8" stroke={c} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
// Ícono de cronología según la etiqueta del evento
function tlPath(label: string): string {
  const l = label.toLowerCase();
  if (/desaparici/.test(l))            return "M8 7V5m8 2V5M4 9h16M5 5h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"; // calendario
  if (/hallazgo|apertura|celular/.test(l)) return "M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14ZM20 20l-3.5-3.5"; // lupa
  if (/asunci|asume|custodia/.test(l)) return "M9 8a3 3 0 1 0 0-1M3.5 20c.5-3.3 2.8-5 5.5-5s5 1.7 5.5 5M16 6.2a3 3 0 0 1 0 5.6"; // personas
  if (/investigaci|compliance|reconstrucci/.test(l)) return "M4 6h6l2 2h8v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6Z"; // expediente
  if (/detenci|captura|veto|migrator/.test(l)) return "M7 11V8a5 5 0 0 1 10 0v3M6 11h12v9H6z"; // candado
  if (/sentencia|condena/.test(l))     return "M14 6l4 4M3 21l7-7M13 5l6 6-3 3-6-6 3-3ZM16 14l4 4"; // mazo
  if (/vista|apelaci|casaci|resoluci/.test(l)) return "M12 3v16M5 21h14M6 8h12M6 8 4 13a3 3 0 0 0 6 0L8 8M18 8l-2 5a3 3 0 0 0 6 0l-2-5"; // balanza
  return "M12 6v12M6 12h12"; // por defecto: cruz sobria
}

export default async function CasoDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = RC_CASES.find(x => x.slug === slug);
  if (!c) notFound();

  const active = c.statusTone === "active";
  const url = `${SITE_URL}/casos/${c.slug}`;
  const gallery = (c as { gallery?: { src: string; alt: string; caption: string; sub: string }[] }).gallery ?? [];
  const tiktoks = (c as { tiktokVideos?: string[] }).tiktokVideos ?? [];
  const youtubeVideo = (c as { youtubeVideo?: { youtubeId: string; title: string; poster?: string; outlet?: string } }).youtubeVideo;
  const subjectType = (c as { subjectType?: "Person" | "Organization" }).subjectType ?? "Person";

  // Navegación entre casos (orden cronológico como en /casos)
  const ordered = [...RC_CASES].sort((a, b) => parseInt(b.year) - parseInt(a.year));
  const pos  = ordered.findIndex(x => x.slug === slug);
  const prev = pos > 0 ? ordered[pos - 1] : null;
  const next = pos < ordered.length - 1 ? ordered[pos + 1] : null;

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
    image: { "@type": "ImageObject", url: `${SITE_URL}/images/${c.media}`, width: 1200, height: 900 },
    datePublished: `${c.year}-01-01`,
    dateModified: new Date().toISOString().split("T")[0],
    author: { "@type": "Person", name: AUTHOR, url: `${SITE_URL}/quien`, jobTitle: "Abogado Penalista", worksFor: { "@type": "LegalService", name: SITE_NAME, url: SITE_URL } },
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL, logo: { "@type": "ImageObject", url: `${SITE_URL}/images/logo.png`, width: 200, height: 200 } },
    keywords: allKeywords,
    locationCreated: { "@type": "Place", name: c.location, address: { "@type": "PostalAddress", addressCountry: "CR" } },
    about: { "@type": subjectType, name: c.name },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    inLanguage: "es-CR",
    isAccessibleForFree: true,
  };

  const analysisBlocks = [
    { n: "01", kicker: "Marco fáctico",        pre: "Los ", em: "Hechos",     text: c.hechos || c.summary || "" },
    { n: "02", kicker: "Obstáculos procesales", pre: "El ",  em: "Desafío",    text: c.desafio || "" },
    { n: "03", kicker: "Metodología",           pre: "La ",  em: "Estrategia", text: c.estrategia || "" },
  ].filter(b => b.text);

  return (
    <>
      <SchemaOrg data={caseSchema} />
      <div className="rc-page caso-detail">

        {/* ── 1 · HERO ── */}
        <section className="cd-hero">
          <img src="/images/casos/casos-arch-light.webp" alt="" aria-hidden="true" className="cd-hero-arch" />
          <div className="rc-wrap" style={{ position: "relative", zIndex: 1 }}>
            <Breadcrumbs trail={[{ name: "Casos", href: "/casos" }, { name: c.name, href: `/casos/${c.slug}` }]} />
            <div className="cd-hero-grid">
              <div className="cd-hero-left">
                <div className="cd-year">{c.year}</div>
                {c.yearRange && <div className="cd-period">Periodo procesal · {c.yearRange}</div>}
                <span className={`cd-badge${active ? " is-active" : ""}`}>{c.status}</span>
              </div>
              <div className="cd-hero-right">
                <div className="cd-loc">{c.location}</div>
                <h1 className="cd-name">{c.name}</h1>
                {c.headline && <p className="cd-subtitle">{c.headline}</p>}
                <div className="cd-tags">
                  {c.tags.map(t => <span key={t} className="cd-tag">{t}</span>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2 · MÉTRICAS ── */}
        {c.facts.length > 0 && (
          <section className="cd-metrics">
            <div className="rc-wrap">
              <div className="cd-metrics-grid" style={{ gridTemplateColumns: `repeat(${c.facts.length}, minmax(0,1fr))` }}>
                {c.facts.map((f, i) => (
                  <Reveal key={f.k} delay={i * 40}>
                    <div className="cd-metric">
                      <span className="cd-metric-line" aria-hidden="true" />
                      <div className="cd-metric-label">{f.k}</div>
                      <div className="cd-metric-val">{f.v}</div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── 3 · ROL + RESULTADO ── */}
        <section className="cd-role">
          <img src="/images/casos/casos-arch-dark.webp" alt="" aria-hidden="true" className="cd-role-arch" />
          <div className="rc-wrap" style={{ position: "relative", zIndex: 1 }}>
            <div className="cd-role-grid">
              <div className="cd-role-block">
                <span className="cd-role-icon" aria-hidden="true"><PeopleIcon /></span>
                <div>
                  <div className="cd-role-label">Rol del bufete</div>
                  <div className="cd-role-val">{c.role}</div>
                </div>
              </div>
              <div className="cd-role-block">
                <span className="cd-role-icon" aria-hidden="true"><ScaleIcon /></span>
                <div>
                  <div className="cd-role-label">{active ? "Estado procesal" : "Resultado"}</div>
                  <div className={`cd-role-val${active ? " is-active" : ""}`}>{c.sentence}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4 · ANÁLISIS TÉCNICO ── */}
        {analysisBlocks.length > 0 && (
          <section className="cd-analysis" id="analisis">
            <div className="rc-wrap">
              <div className="cd-analysis-grid">
                <aside className="cd-analysis-index">
                  <div className="cd-eyebrow">Dossier procesal</div>
                  <h2 className="cd-analysis-title">Análisis <em className="cd-em">técnico</em> del caso</h2>
                  <ol className="cd-index-list">
                    {analysisBlocks.map((b, i) => (
                      <li key={b.n}>
                        <a href={`#dossier-${b.n}`} className={`cd-index-item${i === 0 ? " is-on" : ""}`}>
                          <span className="cd-index-num">{b.n}</span>
                          <span className="cd-index-label">{b.pre}{b.em}</span>
                        </a>
                      </li>
                    ))}
                  </ol>
                </aside>
                <div className="cd-analysis-body">
                  {analysisBlocks.map((b, i) => (
                    <Reveal key={b.n} delay={i * 60}>
                      <article id={`dossier-${b.n}`} className="cd-dossier">
                        <div className="cd-dossier-kicker">{b.n} — {b.kicker}</div>
                        <h3 className="cd-dossier-title">{b.pre}<em className="cd-em">{b.em}</em></h3>
                        <RichText text={b.text} className="cd-dossier-text" />
                      </article>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── 5 · CRONOLOGÍA ── */}
        {c.timeline.length > 0 && (
          <section className="cd-timeline">
            <div className="rc-wrap">
              <div className="cd-eyebrow">Cronología procesal</div>
              <h2 className="cd-timeline-h">Línea de <em className="cd-em">tiempo</em></h2>
              <div className="cd-tl-track">
                {c.timeline.map((t, i) => (
                  <div key={i} className="cd-tl-item">
                    <span className="cd-tl-node" aria-hidden="true">
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="none"><path d={tlPath(t.label)} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                    <div className="cd-tl-date">{t.date}</div>
                    <div className="cd-tl-label">{t.label}</div>
                    <div className="cd-tl-text">{t.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── VIDEO (autoreproductor YouTube) ── */}
        {youtubeVideo && (
          <section className="cd-video">
            <div className="rc-wrap">
              <div className="cd-eyebrow" style={{ color: CS_GOLD }}>Cobertura · Video</div>
              <h2 className="cd-timeline-h" style={{ color: "#f5ede0" }}>El caso en <em className="cd-em" style={{ color: CS_GOLD }}>video</em></h2>
              <Reveal>
                <LiteYouTube id={youtubeVideo.youtubeId} title={youtubeVideo.title} poster={youtubeVideo.poster} />
              </Reveal>
              <div className="cd-video-meta">
                {youtubeVideo.outlet && <span className="cd-video-outlet">Video · {youtubeVideo.outlet}</span>}
                <a href={`https://www.youtube.com/watch?v=${youtubeVideo.youtubeId}`} target="_blank" rel="noopener noreferrer" className="cd-video-link">
                  Ver en YouTube <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </section>
        )}

        {/* ── 6 · GALERÍA o MÓDULO DE EVIDENCIA ── */}
        {gallery.length > 0 ? (
          <section className="cd-gallery">
            <div className="rc-wrap">
              <div className="cd-eyebrow">Galería del caso</div>
              <h2 className="cd-timeline-h" style={{ marginBottom: "clamp(28px,3.5vw,48px)" }}>En <em className="cd-em">tribunal</em>, junto a la familia</h2>
              <div className={`cd-gallery-grid cols-${Math.min(gallery.length, 4)}`}>
                {gallery.map((g, i) => (
                  <figure key={i} className="cd-fig">
                    <div className="cd-fig-media">
                      <Image src={g.src} alt={g.alt} width={1200} height={900} sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw" style={{ width: "100%", height: "auto", objectFit: "cover", display: "block" }} loading={i < 3 ? "eager" : "lazy"} />
                    </div>
                    <figcaption className="cd-fig-cap">
                      <div className="cd-fig-caption">{g.caption}</div>
                      <p className="cd-fig-sub">{g.sub}</p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        ) : (
          <section className="cd-evidence">
            <img src="/images/casos/casos-arch-dark.webp" alt="" aria-hidden="true" className="cd-evidence-arch" />
            <span className="cd-evidence-scrim" aria-hidden="true" />
            <div className="rc-wrap" style={{ position: "relative", zIndex: 2 }}>
              <div className="cd-evidence-grid">
                <div>
                  <div className="cd-eyebrow" style={{ color: CS_GOLD }}>Expediente del caso</div>
                  <h2 className="cd-evidence-h">El <em className="cd-em-gold">caso</em> en su expediente</h2>
                  <p className="cd-evidence-p">{c.summary}</p>
                  <Link href="/contacto" className="cd-evidence-cta">Consultar sobre este caso <span aria-hidden="true">→</span></Link>
                </div>
                <div className="cd-evidence-sheet">
                  <div className="cd-evidence-sheet-label">Datos del expediente</div>
                  {c.facts.map(f => (
                    <div key={f.k} className="cd-evidence-row">
                      <span className="cd-evidence-k">{f.k}</span>
                      <span className="cd-evidence-v">{f.v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── LIBRO · solo caso Nadia Peraza (contenido existente conservado) ── */}
        {c.slug === "nadia-peraza" && (
          <section style={{ position: "relative", background: "radial-gradient(1100px 500px at 80% 30%, rgba(122,8,8,.22), transparent 60%), linear-gradient(180deg, #0a0707 0%, #120b0b 100%)", overflow: "hidden", padding: "clamp(48px,7vw,96px) 0" }}>
            <div className="rc-wrap">
              <div className="case-book-grid" style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "clamp(28px,4vw,64px)", alignItems: "center" }}>
                <Reveal variant="scale">
                  <Link href="/libro" style={{ display: "block", position: "relative", justifySelf: "center" }}>
                    <div className="libro-glow" />
                    <div className="libro-cover" style={{ position: "relative", zIndex: 1, width: "min(190px, 60vw)" }}>
                      <Image src="/images/libro/canibal-portada.jpg?v=2" alt="Libro El Caníbal de la Refrigeradora — crónica forense de un femicidio en Costa Rica, por el abogado Joseph Rivera Cheves" width={760} height={1140} sizes="190px" style={{ width: "100%", height: "auto", borderRadius: 3 }} loading="lazy" />
                    </div>
                  </Link>
                </Reveal>
                <div>
                  <Reveal variant="fade"><span className="libro-badge" style={{ marginBottom: 22 }}><span className="dot" /> Próximamente · Libro</span></Reveal>
                  <Reveal delay={60}>
                    <h2 style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "clamp(26px,3.8vw,48px)", lineHeight: 1.1, letterSpacing: "-0.02em", color: "#f5ede0", marginBottom: 18, marginTop: 8 }}>
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
                  <Reveal delay={180} variant="fade"><Link href="/libro" className="libro-btn">Conocer el libro <span className="arrow">→</span></Link></Reveal>
                </div>
              </div>
            </div>
            <style>{`@media (max-width: 700px) { .case-book-grid { grid-template-columns: 1fr !important; } }`}</style>
          </section>
        )}

        {/* ── 7 · MEMORIA (instagramReel) o CITA de cierre ── */}
        {c.instagramReel ? (
          <section className="cd-memory">
            <img src="/images/casos/casos-arch-dark.webp" alt="" aria-hidden="true" className="cd-memory-arch" />
            <span className="cd-memory-scrim" aria-hidden="true" />
            <div className="rc-wrap" style={{ position: "relative", zIndex: 2 }}>
              <div className="cd-memory-grid">
                <div>
                  <div className="cd-eyebrow" style={{ color: CS_GOLD }}>{c.instagramReel.eyebrow}</div>
                  <h2 className="cd-memory-h">{c.instagramReel.title}</h2>
                  <p className="cd-memory-p">{c.instagramReel.msg}</p>
                  <div className="cd-memory-meta"><span className="cd-memory-ig" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none"><rect x="3" y="3" width="18" height="18" rx="5" stroke={CS_GOLD} strokeWidth="1.4"/><circle cx="12" cy="12" r="4" stroke={CS_GOLD} strokeWidth="1.4"/><circle cx="17.5" cy="6.5" r="1" fill={CS_GOLD}/></svg>
                  </span>Instagram · @josephriveraabogado</div>
                </div>
                <Reveal delay={120}><InstagramReel url={c.instagramReel.url} caption /></Reveal>
              </div>
            </div>
          </section>
        ) : c.quote ? (
          <section className="cd-quote">
            <div className="rc-wrap">
              <span className="cd-quote-mark" aria-hidden="true">“</span>
              <Reveal>
                <blockquote className="cd-quote-text">{c.quote}</blockquote>
              </Reveal>
              {c.quoteContext && <cite className="cd-quote-cite">— {c.quoteContext}</cite>}
            </div>
          </section>
        ) : null}

        {/* ── TIKTOK (contenido existente) ── */}
        {tiktoks.length > 0 && (
          <section className="cd-tiktok">
            <div className="rc-wrap">
              <div className="cd-eyebrow">Cobertura · TikTok</div>
              <h2 className="cd-timeline-h" style={{ marginBottom: "clamp(28px,3.5vw,44px)" }}>El caso en <em className="cd-em">video</em></h2>
              <Reveal>
                <div className="cd-tiktok-grid" style={{ gridTemplateColumns: `repeat(${Math.min(tiktoks.length, 2)}, 325px)` }}>
                  {tiktoks.map((u, i) => <TikTokVideo key={i} url={u} />)}
                </div>
              </Reveal>
            </div>
          </section>
        )}

        {/* ── PRENSA (contenido existente) ── */}
        {c.press && c.press.length > 0 && (
          <section className="cd-press">
            <div className="rc-wrap">
              <div className="cd-eyebrow">Cobertura mediática</div>
              <h2 className="cd-timeline-h" style={{ marginBottom: "clamp(28px,3.5vw,44px)" }}>En la <em className="cd-em">prensa</em></h2>
              <div className="cd-press-grid">
                {c.press.map((p, i) => (
                  <Reveal key={i} delay={i * 60}>
                    <a href={p.u} target={p.u.startsWith("http") ? "_blank" : undefined} rel="noopener" className="cd-press-card">
                      <div className="cd-press-medio">{p.medio}</div>
                      <h3 className="cd-press-title">{p.t}</h3>
                      <span className="cd-press-link">{p.u.startsWith("http") ? "Leer artículo" : "Ver"} <span aria-hidden="true">→</span></span>
                    </a>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── 8 · NAVEGACIÓN ENTRE CASOS ── */}
        <section className="cd-nav">
          <div className="rc-wrap">
            <div className="cd-nav-grid">
              {prev ? (
                <Link href={`/casos/${prev.slug}`} className="cd-nav-link cd-nav-prev">
                  <span className="cd-nav-dir"><span aria-hidden="true">←</span> Caso anterior</span>
                  <span className="cd-nav-name">{prev.name}</span>
                </Link>
              ) : <span />}
              <Link href="/casos" className="cd-nav-all">Volver a todos los casos</Link>
              {next ? (
                <Link href={`/casos/${next.slug}`} className="cd-nav-link cd-nav-next">
                  <span className="cd-nav-dir">Caso siguiente <span aria-hidden="true">→</span></span>
                  <span className="cd-nav-name">{next.name}</span>
                </Link>
              ) : <span />}
            </div>
          </div>
        </section>

        {/* ── 9 · CTA (reutilizado desde la portada) ── */}
        <FinalCTA eyebrow="Próximo paso" lead="Estamos para defender sus derechos con estrategia, rigor y compromiso humano. Hablemos de su caso." />
      </div>

      <style>{`
        /* ── Hero ── */
        .cd-hero { position: relative; overflow: hidden; background: ${CS_CREAM}; padding: clamp(32px,4vw,56px) 0 clamp(40px,5vw,72px); }
        .cd-hero-arch { position: absolute; right: 0; top: 0; height: 100%; width: 46%; object-fit: cover; object-position: right center; opacity: .5; pointer-events: none; -webkit-mask-image: linear-gradient(90deg, transparent, rgba(0,0,0,.4) 44%, #000 100%); mask-image: linear-gradient(90deg, transparent, rgba(0,0,0,.4) 44%, #000 100%); }
        .cd-hero-grid { display: grid; grid-template-columns: 1fr 1.35fr; gap: clamp(28px,5vw,80px); align-items: end; margin-top: clamp(18px,2vw,28px); }
        .cd-year { font-family: var(--font-serif); font-weight: 400; font-size: clamp(88px,14vw,190px); line-height: .84; letter-spacing: -0.03em; color: ${CS_BLACK}; }
        .cd-period { font-family: var(--font-mono, monospace); font-size: 11px; letter-spacing: .16em; text-transform: uppercase; color: ${CS_GRAY}; margin: 18px 0 16px; }
        .cd-badge { display: inline-block; padding: 6px 14px; background: ${CS_CHARCOAL}; color: #fff; font-family: var(--font-mono, monospace); font-size: 10px; letter-spacing: .14em; text-transform: uppercase; }
        .cd-badge.is-active { background: ${CS_WINE}; }
        .cd-loc { font-family: var(--font-mono, monospace); font-size: 12px; letter-spacing: .16em; text-transform: uppercase; color: ${CS_WINE}; margin-bottom: 16px; }
        .cd-name { font-family: var(--font-serif); font-weight: 400; font-size: clamp(40px,6vw,80px); line-height: 1.0; letter-spacing: -0.02em; color: ${CS_BLACK}; margin-bottom: 14px; }
        .cd-subtitle { font-family: var(--font-serif); font-style: italic; font-size: clamp(19px,2.2vw,30px); line-height: 1.25; color: ${CS_WINE}; margin-bottom: 24px; }
        .cd-tags { display: flex; flex-wrap: wrap; gap: 8px; }
        .cd-tag { font-family: var(--font-sans, system-ui); font-size: 11.5px; color: ${CS_CHARCOAL}; padding: 5px 12px; border: 1px solid ${CS_BORDER}; border-radius: 3px; background: ${CS_CREAM}; }

        /* ── Métricas ── */
        .cd-metrics { background: #FBFAF7; padding: clamp(36px,4.5vw,64px) 0; border-top: 1px solid ${CS_BORDER}; }
        .cd-metrics-grid { display: grid; gap: clamp(20px,2.4vw,40px); }
        .cd-metric-line { display: block; height: 2px; width: 100%; background: ${CS_WINE}; margin-bottom: 16px; }
        .cd-metric-label { font-family: var(--font-mono, monospace); font-size: 10.5px; letter-spacing: .1em; text-transform: uppercase; color: ${CS_GRAY}; margin-bottom: 8px; }
        .cd-metric-val { font-family: var(--font-serif); font-size: clamp(17px,1.5vw,21px); line-height: 1.25; color: ${CS_BLACK}; }

        /* ── Rol + Resultado (oscuro) ── */
        .cd-role { position: relative; overflow: hidden; background: radial-gradient(900px 500px at 80% 0%, rgba(122,8,8,.24), transparent 60%), linear-gradient(180deg,#141010,#0a0808); padding: clamp(36px,4.5vw,60px) 0; }
        .cd-role-arch { position: absolute; right: 0; top: 0; height: 100%; width: 40%; object-fit: cover; object-position: right center; opacity: .12; pointer-events: none; -webkit-mask-image: linear-gradient(90deg, transparent, #000 90%); mask-image: linear-gradient(90deg, transparent, #000 90%); }
        .cd-role-grid { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(24px,4vw,64px); }
        .cd-role-block { display: flex; gap: 16px; align-items: flex-start; padding-left: 20px; border-left: 2px solid rgba(199,164,92,.4); }
        .cd-role-icon { width: 40px; height: 40px; flex-shrink: 0; border-radius: 50%; display: grid; place-items: center; border: 1px solid rgba(199,164,92,.4); background: rgba(199,164,92,.06); }
        .cd-role-label { font-family: var(--font-mono, monospace); font-size: 10.5px; letter-spacing: .14em; text-transform: uppercase; color: ${CS_GOLD}; margin-bottom: 8px; }
        .cd-role-val { font-family: var(--font-serif); font-size: clamp(18px,1.9vw,24px); line-height: 1.3; color: #f5ede0; }
        .cd-role-val.is-active { color: #f0b8b8; }

        /* ── Análisis técnico ── */
        .cd-analysis { background: ${CS_CREAM}; padding: clamp(48px,7vw,100px) 0; }
        .cd-analysis-grid { display: grid; grid-template-columns: 0.72fr 1.28fr; gap: clamp(28px,5vw,80px); align-items: start; }
        .cd-eyebrow { font-family: var(--font-mono, monospace); font-size: 11px; letter-spacing: .16em; text-transform: uppercase; color: ${CS_WINE}; margin-bottom: 16px; }
        .cd-em { font-family: var(--font-serif); font-style: italic; color: ${CS_WINE}; }
        .cd-em-gold { font-family: var(--font-serif); font-style: italic; color: ${CS_GOLD}; }
        .cd-analysis-index { position: sticky; top: 110px; }
        .cd-analysis-title { font-family: var(--font-serif); font-weight: 400; font-size: clamp(28px,3.2vw,44px); line-height: 1.08; color: ${CS_BLACK}; margin-bottom: 28px; }
        .cd-index-list { list-style: none; margin: 0; padding: 0; border-top: 1px solid ${CS_BORDER}; }
        .cd-index-item { display: flex; align-items: center; gap: 14px; padding: 14px 12px; text-decoration: none; border-bottom: 1px solid ${CS_BORDER}; border-left: 3px solid transparent; transition: background .2s, border-color .2s; }
        .cd-index-item:hover { background: #FBFAF7; }
        .cd-index-item.is-on { border-left-color: ${CS_WINE}; background: #FBFAF7; }
        .cd-index-num { font-family: var(--font-mono, monospace); font-size: 12px; color: ${CS_WINE}; }
        .cd-index-label { font-family: var(--font-serif); font-size: clamp(16px,1.3vw,19px); color: ${CS_BLACK}; }
        .cd-analysis-body { display: flex; flex-direction: column; gap: clamp(36px,4vw,56px); }
        .cd-dossier-kicker { font-family: var(--font-mono, monospace); font-size: 11px; letter-spacing: .14em; text-transform: uppercase; color: ${CS_GOLD}; margin-bottom: 12px; }
        .cd-dossier-title { font-family: var(--font-serif); font-weight: 400; font-size: clamp(26px,3vw,40px); color: ${CS_BLACK}; margin-bottom: 18px; }
        .cd-dossier-text { font-family: var(--font-sans, system-ui); font-size: 16px; line-height: 1.78; color: #3a3a3a; margin: 0; padding-top: 18px; border-top: 1px solid ${CS_BORDER}; }
        .cd-dossier-text strong { color: ${CS_WINE}; font-weight: 600; }

        /* ── Cronología ── */
        .cd-timeline { background: #FBFAF7; padding: clamp(48px,7vw,100px) 0; border-top: 1px solid ${CS_BORDER}; }
        .cd-timeline-h { font-family: var(--font-serif); font-weight: 400; font-size: clamp(28px,3.4vw,48px); line-height: 1.05; color: ${CS_BLACK}; margin-bottom: clamp(36px,4vw,56px); }
        .cd-tl-track { position: relative; display: grid; grid-auto-flow: column; grid-auto-columns: minmax(190px, 1fr); gap: 4px; overflow-x: auto; padding: 4px 2px 8px; scrollbar-width: thin; }
        .cd-tl-track::before { content: ""; position: absolute; left: 24px; right: 24px; top: 22px; height: 1px; background: linear-gradient(90deg, ${CS_GOLD}, rgba(199,164,92,.35)); z-index: 0; }
        .cd-tl-item { display: flex; flex-direction: column; align-items: center; text-align: center; padding: 0 12px; position: relative; z-index: 1; }
        .cd-tl-node { width: 44px; height: 44px; border-radius: 50%; background: #FBFAF7; border: 1px solid ${CS_WINE}; color: ${CS_WINE}; display: grid; place-items: center; margin-bottom: 18px; box-shadow: 0 0 0 5px #FBFAF7; }
        .cd-tl-date { font-family: var(--font-mono, monospace); font-size: 10.5px; letter-spacing: .06em; text-transform: uppercase; color: ${CS_WINE}; margin-bottom: 8px; }
        .cd-tl-label { font-family: var(--font-serif); font-size: clamp(15px,1.2vw,18px); color: ${CS_BLACK}; margin-bottom: 8px; }
        .cd-tl-text { font-family: var(--font-sans, system-ui); font-size: 13px; line-height: 1.55; color: ${CS_GRAY}; }

        /* ── Video (autoreproductor) ── */
        .cd-video { position: relative; overflow: hidden; background: radial-gradient(900px 500px at 20% 0%, rgba(122,8,8,.22), transparent 60%), linear-gradient(180deg,#141010,#0a0808); padding: clamp(48px,7vw,96px) 0; }
        .cd-video-meta { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 14px; margin-top: 20px; }
        .cd-video-outlet { font-family: var(--font-mono, monospace); font-size: 11px; letter-spacing: .12em; text-transform: uppercase; color: rgba(245,237,224,.55); }
        .cd-video-link { font-family: var(--font-sans, system-ui); font-size: 13px; font-weight: 600; color: ${CS_GOLD}; text-decoration: none; }
        .cd-video-link:hover { color: #fff; }

        /* ── Galería ── */
        .cd-gallery { background: ${CS_CREAM}; padding: clamp(48px,7vw,100px) 0; }
        .cd-gallery-grid { display: grid; gap: clamp(20px,2.6vw,36px); }
        .cd-gallery-grid.cols-2 { grid-template-columns: repeat(2,1fr); }
        .cd-gallery-grid.cols-3 { grid-template-columns: repeat(3,1fr); }
        .cd-gallery-grid.cols-4 { grid-template-columns: repeat(4,1fr); }
        .cd-fig { margin: 0; }
        .cd-fig-media { background: #0d0d0d; overflow: hidden; border: 1px solid ${CS_BORDER}; border-radius: 4px; }
        .cd-fig-caption { font-family: var(--font-mono, monospace); font-size: 10.5px; letter-spacing: .08em; text-transform: uppercase; color: ${CS_WINE}; margin: 16px 0 8px; padding-top: 14px; border-top: 1px solid ${CS_GOLD}; }
        .cd-fig-sub { font-family: var(--font-sans, system-ui); font-size: 13.5px; line-height: 1.6; color: ${CS_GRAY}; }

        /* ── Módulo de evidencia (sin galería) ── */
        .cd-evidence { position: relative; overflow: hidden; background: linear-gradient(120deg,#0a0808,#141010); padding: clamp(48px,7vw,96px) 0; }
        .cd-evidence-arch { position: absolute; inset: 0 0 0 40%; width: 60%; height: 100%; object-fit: cover; object-position: right center; opacity: .16; pointer-events: none; }
        .cd-evidence-scrim { position: absolute; inset: 0; background: linear-gradient(90deg, #0a0808 20%, rgba(10,8,8,.5) 55%, rgba(10,8,8,.3) 100%); }
        .cd-evidence-grid { display: grid; grid-template-columns: 1fr 0.9fr; gap: clamp(28px,4vw,64px); align-items: center; }
        .cd-evidence-h { font-family: var(--font-serif); font-weight: 400; font-size: clamp(28px,3.2vw,46px); line-height: 1.06; color: #f5ede0; margin-bottom: 20px; }
        .cd-evidence-p { font-family: var(--font-sans, system-ui); font-size: 15.5px; line-height: 1.72; color: rgba(245,237,224,.72); max-width: 52ch; margin-bottom: 26px; }
        .cd-evidence-cta { display: inline-flex; align-items: center; gap: 9px; min-height: 48px; padding: 12px 24px; background: ${CS_WINE}; color: #fff; text-decoration: none; border-radius: 3px; font-family: var(--font-sans, system-ui); font-size: 13px; font-weight: 600; transition: background .25s ease, gap .25s ease; }
        .cd-evidence-cta:hover { background: ${CS_RED}; gap: 13px; }
        .cd-evidence-sheet { background: rgba(255,255,255,.03); border: 1px solid rgba(199,164,92,.3); border-radius: 4px; padding: clamp(20px,2vw,28px); }
        .cd-evidence-sheet-label { font-family: var(--font-mono, monospace); font-size: 10.5px; letter-spacing: .14em; text-transform: uppercase; color: ${CS_GOLD}; margin-bottom: 16px; }
        .cd-evidence-row { display: grid; grid-template-columns: 0.9fr 1.1fr; gap: 16px; padding: 12px 0; border-top: 1px solid rgba(255,255,255,.1); }
        .cd-evidence-k { font-family: var(--font-mono, monospace); font-size: 11px; letter-spacing: .04em; text-transform: uppercase; color: rgba(245,237,224,.55); }
        .cd-evidence-v { font-family: var(--font-sans, system-ui); font-size: 14px; line-height: 1.4; color: #f5ede0; }

        /* ── Memoria (oscuro) ── */
        .cd-memory { position: relative; overflow: hidden; background: radial-gradient(900px 600px at 12% 100%, rgba(122,8,8,.24), transparent 60%), linear-gradient(180deg,#0a0808,#120b0b); padding: clamp(48px,7vw,100px) 0; }
        .cd-memory-arch { position: absolute; right: 0; bottom: 0; height: 120%; width: 40%; object-fit: cover; object-position: right center; opacity: .12; pointer-events: none; -webkit-mask-image: linear-gradient(90deg, transparent, #000 92%); mask-image: linear-gradient(90deg, transparent, #000 92%); }
        .cd-memory-scrim { position: absolute; inset: 0; pointer-events: none; }
        .cd-memory-grid { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(36px,5vw,80px); align-items: center; }
        .cd-memory-h { font-family: var(--font-serif); font-weight: 400; font-size: clamp(28px,3.4vw,48px); line-height: 1.1; color: #f5ede0; margin-bottom: 22px; }
        .cd-memory-h em, .cd-memory-h { font-style: normal; }
        .cd-memory-p { font-family: var(--font-sans, system-ui); font-size: 16px; line-height: 1.7; color: rgba(245,237,224,.72); max-width: 48ch; margin-bottom: 26px; }
        .cd-memory-meta { display: flex; align-items: center; gap: 10px; font-family: var(--font-mono, monospace); font-size: 11px; letter-spacing: .12em; text-transform: uppercase; color: ${CS_GOLD}; padding-top: 22px; border-top: 1px solid rgba(199,164,92,.3); }

        /* ── Cita de cierre ── */
        .cd-quote { background: ${CS_CREAM}; padding: clamp(48px,7vw,100px) 0; }
        .cd-quote .rc-wrap { max-width: 900px; text-align: center; }
        .cd-quote-mark { display: block; font-family: var(--font-serif); font-size: clamp(72px,10vw,120px); line-height: .6; color: ${CS_GOLD}; margin-bottom: 12px; }
        .cd-quote-text { font-family: var(--font-serif); font-style: italic; font-size: clamp(22px,3vw,38px); line-height: 1.35; color: ${CS_BLACK}; margin: 0 0 24px; }
        .cd-quote-cite { font-family: var(--font-mono, monospace); font-style: normal; font-size: 11px; letter-spacing: .12em; text-transform: uppercase; color: ${CS_GRAY}; }

        /* ── TikTok ── */
        .cd-tiktok { background: #FBFAF7; padding: clamp(48px,7vw,100px) 0; border-top: 1px solid ${CS_BORDER}; }
        .cd-tiktok-grid { display: grid; gap: 24px; justify-content: center; }

        /* ── Prensa ── */
        .cd-press { background: ${CS_CREAM}; padding: clamp(48px,7vw,100px) 0; }
        .cd-press-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: clamp(18px,2vw,28px); }
        .cd-press-card { display: block; padding: clamp(22px,2.4vw,32px); background: #FBFAF7; border: 1px solid ${CS_BORDER}; border-radius: 4px; text-decoration: none; transition: transform .3s ease, border-color .3s ease, box-shadow .3s ease; }
        .cd-press-card:hover { transform: translateY(-3px); border-color: ${CS_GOLD}; box-shadow: 0 14px 36px rgba(20,20,20,.08); }
        .cd-press-medio { font-family: var(--font-mono, monospace); font-size: 11px; letter-spacing: .12em; text-transform: uppercase; color: ${CS_WINE}; margin-bottom: 16px; }
        .cd-press-title { font-family: var(--font-serif); font-weight: 400; font-size: clamp(18px,1.5vw,22px); line-height: 1.22; color: ${CS_BLACK}; margin-bottom: 18px; }
        .cd-press-link { font-family: var(--font-sans, system-ui); font-size: 13px; font-weight: 600; color: ${CS_RED}; }

        /* ── Navegación entre casos ── */
        .cd-nav { background: #FBFAF7; padding: clamp(32px,4vw,56px) 0; border-top: 1px solid ${CS_BORDER}; }
        .cd-nav-grid { display: grid; grid-template-columns: 1fr auto 1fr; gap: clamp(16px,3vw,40px); align-items: center; }
        .cd-nav-link { display: flex; flex-direction: column; gap: 6px; text-decoration: none; }
        .cd-nav-next { text-align: right; align-items: flex-end; }
        .cd-nav-dir { font-family: var(--font-mono, monospace); font-size: 11px; letter-spacing: .1em; text-transform: uppercase; color: ${CS_WINE}; }
        .cd-nav-name { font-family: var(--font-serif); font-size: clamp(15px,1.3vw,18px); color: ${CS_BLACK}; transition: color .2s ease; }
        .cd-nav-link:hover .cd-nav-name { color: ${CS_WINE}; }
        .cd-nav-all { justify-self: center; font-family: var(--font-sans, system-ui); font-size: 13px; font-weight: 600; color: ${CS_CHARCOAL}; text-decoration: none; padding: 12px 22px; border: 1px solid ${CS_GOLD}; border-radius: 3px; transition: background .2s ease, color .2s ease; white-space: nowrap; }
        .cd-nav-all:hover { background: ${CS_CHARCOAL}; color: #fff; }

        /* ── Responsive ── */
        @media (max-width: 1000px) {
          .cd-metrics-grid { grid-template-columns: repeat(3, minmax(0,1fr)) !important; }
          .cd-gallery-grid.cols-3, .cd-gallery-grid.cols-4 { grid-template-columns: repeat(2,1fr); }
          .cd-analysis-index { position: static; }
          .cd-analysis-grid { grid-template-columns: 1fr; gap: 32px; }
        }
        @media (max-width: 760px) {
          .cd-hero-grid { grid-template-columns: 1fr; gap: 24px; }
          .cd-hero-arch { width: 68%; opacity: .3; }
          .cd-role-grid { grid-template-columns: 1fr; }
          .cd-evidence-grid, .cd-memory-grid, .cd-press-grid { grid-template-columns: 1fr; }
          /* Cronología vertical */
          .cd-tl-track { grid-auto-flow: row; grid-auto-columns: auto; gap: 0; overflow: visible; }
          .cd-tl-track::before { left: 22px; right: auto; top: 8px; bottom: 8px; width: 1px; height: auto; }
          .cd-tl-item { flex-direction: row; align-items: flex-start; text-align: left; gap: 16px; padding: 0 0 26px; }
          .cd-tl-node { margin-bottom: 0; box-shadow: 0 0 0 5px #FBFAF7; flex-shrink: 0; width: 44px; }
        }
        @media (max-width: 520px) {
          .cd-metrics-grid { grid-template-columns: 1fr 1fr !important; }
          .cd-gallery-grid.cols-2, .cd-gallery-grid.cols-3, .cd-gallery-grid.cols-4 { grid-template-columns: 1fr; }
          .cd-nav-grid { grid-template-columns: 1fr; text-align: center; }
          .cd-nav-next { text-align: center; align-items: center; }
          .cd-hero-arch { opacity: .2; }
          .cd-evidence-arch { width: 90%; inset: 0; opacity: .1; }
        }
      `}</style>
    </>
  );
}
