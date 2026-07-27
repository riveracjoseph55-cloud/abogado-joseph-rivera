import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import RichText from "@/components/RichText";
import FinalCTA from "@/components/FinalCTA";
import SchemaOrg from "@/components/SchemaOrg";
import ArticleImageLightbox from "@/components/ArticleImageLightbox";
import { RC_COMUNICADOS, RC_CASES, ComunicadoEntry, ComunicadoCategory, WA, EMAIL } from "@/lib/data";
import { SITE_URL, SITE_NAME, OG_IMAGE, AUTHOR, schemaPressRelease, schemaBreadcrumbComunicado } from "@/lib/seo";

// ── Paleta editorial ──────────────────────────────────────────────
const CS_CREAM  = "#F4F1EB";
const CS_BLACK  = "#0A0A0A";
const CS_CHARCOAL = "#161616";
const CS_WINE   = "#7A0808";
const CS_GOLD   = "#C7A45C";
const CS_GRAY   = "#6C6C6C";
const CS_BORDER = "rgba(20,20,20,0.12)";

const CAT_COLOR: Record<ComunicadoCategory, string> = {
  "Comunicado oficial": CS_WINE,
  "Resolución judicial": CS_CHARCOAL,
  "Pronunciamiento": CS_GOLD,
  "Actualización procesal": CS_GRAY,
};

// ── SSG: una sola ruta dinámica sirve TODOS los comunicados (pasados y futuros) ──
export function generateStaticParams() {
  return RC_COMUNICADOS.map(c => ({ slug: c.slug }));
}

type Props = { params: Promise<{ slug: string }> };

const BASE_KEYWORDS = [
  "abogado joseph rivera cheves",
  "bufete rivera cheves",
  "abogado penalista costa rica",
  "comunicado de prensa bufete",
  "rivera cheves asociados",
];

// SEO generado 100% desde los datos — independiente del diseño visual.
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = RC_COMUNICADOS.find(x => x.slug === slug);
  if (!c) return {};

  const metaTitle = c.seoTitle ?? `${c.title} | ${SITE_NAME}`;
  const metaDesc  = c.metaDesc ?? c.summary;
  const ogImage   = c.image ? `${SITE_URL}${c.image}` : OG_IMAGE;
  const url       = `${SITE_URL}/comunicados/${c.slug}`;

  return {
    title: { absolute: metaTitle },
    description: metaDesc,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      type: "article",
      url,
      title: metaTitle,
      description: metaDesc,
      publishedTime: c.date,
      modifiedTime: c.updatedAt ?? c.date,
      authors: [AUTHOR],
      section: c.category,
      tags: c.tags,
      images: [{ url: ogImage, width: 1200, height: 630, alt: `${c.title} | ${SITE_NAME}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDesc,
      images: [ogImage],
    },
    keywords: [...BASE_KEYWORDS, ...(c.keywords ?? []), ...(c.tags ?? [])],
  };
}

// ── Helpers ───────────────────────────────────────────────────────
function formatDate(d: string) {
  const months = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","setiembre","octubre","noviembre","diciembre"];
  const [y, m, day] = d.split("-");
  return `${Number(day)} de ${months[Number(m) - 1]} de ${y}`;
}

// Selección automática de comunicados relacionados: etiquetas compartidas > caso > categoría > recencia.
function scoreRelated(current: ComunicadoEntry, candidate: ComunicadoEntry): number {
  let score = 0;
  if (current.relatedCase && candidate.relatedCase && current.relatedCase === candidate.relatedCase) score += 5;
  if (current.category === candidate.category) score += 2;
  const shared = (current.tags ?? []).filter(t => (candidate.tags ?? []).includes(t)).length;
  score += shared * 3;
  return score;
}

function MegaphoneIcon({ c = "currentColor" }: { c?: string }) { return <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true"><path d="M3 10v4a1 1 0 0 0 1 1h2l1 5h2l-1-5h2l9 4V6l-9 4H4a1 1 0 0 0-1 1Z" stroke={c} strokeWidth="1.5" strokeLinejoin="round"/></svg>; }
function ScaleIcon({ c = "currentColor" }: { c?: string }) { return <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true"><path d="M12 3v16M5 21h14M6 8h12M6 8 3.5 13.5a3.2 3.2 0 0 0 6.5 0L7.5 8M17.5 8 15 13.5a3.2 3.2 0 0 0 6.5 0L18.5 8" stroke={c} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>; }
function DocIcon({ c = "currentColor" }: { c?: string }) { return <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true"><path d="M6 3h9l3 3v15H6V3Z" stroke={c} strokeWidth="1.5" strokeLinejoin="round"/><path d="M9 9h6M9 12h6M9 15h4" stroke={c} strokeWidth="1.5" strokeLinecap="round"/></svg>; }
function ClockIcon({ c = "currentColor" }: { c?: string }) { return <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9" stroke={c} strokeWidth="1.5"/><path d="M12 7v5l3.5 2" stroke={c} strokeWidth="1.5" strokeLinecap="round"/></svg>; }
const CAT_ICON: Record<ComunicadoCategory, typeof MegaphoneIcon> = {
  "Comunicado oficial": MegaphoneIcon,
  "Resolución judicial": ScaleIcon,
  "Pronunciamiento": DocIcon,
  "Actualización procesal": ClockIcon,
};

// ── Page ──────────────────────────────────────────────────────────
export default async function ComunicadoPage({ params }: Props) {
  const { slug } = await params;
  const c = RC_COMUNICADOS.find(x => x.slug === slug);
  if (!c) notFound();

  const related = c.relatedCase ? RC_CASES.find(ca => ca.slug === c.relatedCase) : undefined;

  const relatedReleases = RC_COMUNICADOS
    .filter(x => x.slug !== slug)
    .map(x => ({ item: x, score: scoreRelated(c, x) }))
    .sort((a, b) => b.score - a.score || b.item.date.localeCompare(a.item.date))
    .slice(0, 3)
    .map(x => x.item);

  const chrono = [...RC_COMUNICADOS].sort((a, b) => a.date.localeCompare(b.date));
  const idx = chrono.findIndex(x => x.slug === slug);
  const prevRelease = idx > 0 ? chrono[idx - 1] : null;
  const nextRelease = idx < chrono.length - 1 ? chrono[idx + 1] : null;

  const schema = schemaPressRelease({
    slug: c.slug, title: c.title, summary: c.summary, body: c.body.join(" "),
    date: c.date, updatedAt: c.updatedAt, category: c.category,
    tags: c.tags, keywords: c.keywords, image: c.image, area: c.area,
  });
  const schemaBreadcrumb = schemaBreadcrumbComunicado(c.title, c.slug);
  const CatIcon = CAT_ICON[c.category];
  const catColor = CAT_COLOR[c.category];
  const contact = c.mediaContact ?? { name: "Lic. Joseph Rivera Cheves" };

  return (
    <>
      <SchemaOrg data={schema} />
      <SchemaOrg data={schemaBreadcrumb} />
      <div className="rc-page pr-article">

        {/* ── CABECERA ─────────────────────────────────────────── */}
        <section className="pr-hero">
          <div className="rc-wrap" style={{ maxWidth: 1160 }}>
            <Reveal>
              <nav className="pr-crumb" aria-label="Ruta de navegación">
                <Link href="/comunicados">Comunicados</Link>
                <span aria-hidden="true">/</span>
                <span className="is-here">{c.category}</span>
              </nav>
            </Reveal>

            <div className="pr-hero-grid">
              <div className="pr-meta-col">
                <Reveal delay={60}>
                  <div className="pr-date">
                    <time dateTime={c.date}>{formatDate(c.date).toUpperCase()}</time>
                    <span className="pr-date-line" aria-hidden="true" />
                  </div>
                </Reveal>
                <Reveal delay={100}>
                  <div className="pr-badge" style={{ borderColor: catColor, color: catColor }}>
                    <CatIcon c={catColor} /> {c.category}
                  </div>
                </Reveal>
                {c.updatedAt && (
                  <p className="pr-updated">Actualizado el <time dateTime={c.updatedAt}>{formatDate(c.updatedAt)}</time></p>
                )}
              </div>

              <div className="pr-title-col">
                <Reveal delay={140}>
                  <h1 className="pr-h1">
                    {c.titleSegments
                      ? c.titleSegments.map((seg, i) => seg.emphasis
                          ? <em key={i} className="pr-h1-em">{seg.text}</em>
                          : <span key={i}>{seg.text}</span>)
                      : c.title}
                  </h1>
                </Reveal>
                <div className="pr-rule">
                  <span className="pr-rule-line" aria-hidden="true" />
                  <span className="pr-rule-icon" aria-hidden="true"><ScaleIcon c={CS_GOLD} /></span>
                </div>
                <Reveal delay={200}>
                  <p className="pr-lede">{c.summary}</p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ── CUERPO + BARRA LATERAL ───────────────────────────── */}
        <section className="pr-body-section">
          <div className="rc-wrap" style={{ maxWidth: 1160 }}>
            <div className="pr-grid">

              {/* Artículo — primero en el DOM (orden móvil correcto) */}
              <article className="pr-article-col">
                {c.image ? (
                  <figure className="pr-figure">
                    <ArticleImageLightbox src={c.image} alt={c.title} objectPosition={c.imagePosition ?? "center"} />
                    {c.imageCaption && <figcaption className="pr-figcaption">{c.imageCaption}</figcaption>}
                  </figure>
                ) : (
                  <div className="pr-noimage" aria-hidden="true">
                    <span className="pr-noimage-icon"><CatIcon c="rgba(199,164,92,.7)" /></span>
                    <span className="pr-noimage-cat">{c.category}</span>
                    <span className="pr-noimage-date">{formatDate(c.date)}</span>
                  </div>
                )}

                <div className="pr-prose">
                  {c.body.map((para, i) => (
                    <Reveal key={i} delay={Math.min(i * 40, 200)}>
                      <RichText text={para} className={i === 0 ? "pr-p pr-p-lead" : "pr-p"} />
                    </Reveal>
                  ))}
                </div>

                {c.highlights && c.highlights.length > 0 && (
                  <div className="pr-highlights">
                    {c.highlights.map((h, i) => (
                      <div key={i} className="pr-highlight">
                        <span className="pr-highlight-icon" aria-hidden="true"><ScaleIcon c={CS_GOLD} /></span>
                        <p>{h}</p>
                      </div>
                    ))}
                  </div>
                )}

                {c.quotes && c.quotes.length > 0 && c.quotes.map((q, i) => (
                  <blockquote key={i} className="pr-quote">
                    <p>{q.text}</p>
                    {(q.author || q.role) && (
                      <cite>{q.author}{q.author && q.role ? " — " : ""}{q.role}</cite>
                    )}
                  </blockquote>
                ))}

                {c.audio && (
                  <div className="pr-audio">
                    <div className="pr-audio-label">Declaraciones — Lic. Joseph Rivera Cheves</div>
                    <audio controls style={{ width: "100%" }}>
                      <source src={c.audio} type="audio/ogg" />
                      Tu navegador no soporta reproducción de audio.
                    </audio>
                  </div>
                )}

                <div className="pr-signature">
                  <span className="pr-signature-line" aria-hidden="true" />
                  <span>Rivera Cheves &amp; Asociados · <time dateTime={c.date}>{formatDate(c.date)}</time></span>
                </div>
              </article>

              {/* Barra lateral — segundo en el DOM, primera visualmente en escritorio */}
              <aside className="pr-aside">
                <Reveal delay={80}>
                  <div className="pr-media-card">
                    <div className="pr-media-label">Contacto para medios</div>
                    <div className="pr-media-name">
                      {contact.name}
                      <span className="pr-media-sub">{contact.role ?? (!c.mediaContact ? "Disponible 24/7" : null)}</span>
                    </div>
                    <div className="pr-media-actions">
                      {c.mediaContact?.phone ? (
                        <a href={`tel:+506${c.mediaContact.phone.replace(/\D/g, "")}`} className="pr-media-wa">
                          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true"><path d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v4a2 2 0 0 1-2 2C10.5 21 3 13.5 3 6a2 2 0 0 1 1-2Z" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round"/></svg>
                          {c.mediaContact.phone}
                        </a>
                      ) : (
                        <a href={WA} target="_blank" rel="noopener noreferrer" className="pr-media-wa">
                          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true"><path d="M4 20l1.3-4.4A8 8 0 1 1 8.5 19L4 20Z" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round"/></svg>
                          WhatsApp →
                        </a>
                      )}
                      {(c.mediaContact?.email ?? (!c.mediaContact ? EMAIL : undefined)) && (
                        <a href={`mailto:${c.mediaContact?.email ?? EMAIL}`} className="pr-media-mail">
                          {c.mediaContact?.email ?? EMAIL}
                        </a>
                      )}
                    </div>
                  </div>
                </Reveal>

                {related && (
                  <Reveal delay={140}>
                    <Link href={`/casos/${related.slug}`} className="pr-case-card">
                      <div className="pr-case-label">Caso relacionado</div>
                      <h3 className="pr-case-name">{related.name}</h3>
                      <p className="pr-case-status">{related.sentence}</p>
                      <span className="pr-case-link">Ver dossier del caso →</span>
                    </Link>
                  </Reveal>
                )}

                <Reveal delay={180}>
                  <nav className="pr-nav" aria-label="Navegación de comunicados">
                    {prevRelease && (
                      <Link href={`/comunicados/${prevRelease.slug}`} className="pr-nav-link">
                        <span aria-hidden="true">←</span> Comunicado anterior
                      </Link>
                    )}
                    {nextRelease && (
                      <Link href={`/comunicados/${nextRelease.slug}`} className="pr-nav-link">
                        Comunicado siguiente <span aria-hidden="true">→</span>
                      </Link>
                    )}
                    <Link href="/comunicados" className="pr-nav-all">
                      <span aria-hidden="true">←</span> Todos los comunicados
                    </Link>
                  </nav>
                </Reveal>
              </aside>
            </div>
          </div>
        </section>

        {/* ── TEMAS RELACIONADOS ────────────────────────────────── */}
        {c.tags && c.tags.length > 0 && (
          <section className="pr-tags-section">
            <div className="rc-wrap" style={{ maxWidth: 1160 }}>
              <h2 className="pr-tags-h">Temas relacionados</h2>
              <div className="pr-tags">
                {c.tags.map(t => <span key={t} className="pr-tag">{t}</span>)}
              </div>
            </div>
          </section>
        )}

        {/* ── OTROS COMUNICADOS ─────────────────────────────────── */}
        {relatedReleases.length > 0 && (
          <section className="pr-related-section">
            <div className="rc-wrap" style={{ maxWidth: 1160 }}>
              <div className="pr-eyebrow">Más comunicados</div>
              <h2 className="pr-related-h">Otros <em className="pr-em">comunicados</em></h2>
              <div className="pr-related-grid">
                {relatedReleases.map((o, i) => (
                  <Reveal key={o.slug} delay={i * 60}>
                    <Link href={`/comunicados/${o.slug}`} className="pr-related-card">
                      <span className="pr-related-cat" style={{ color: CAT_COLOR[o.category] }}>{o.category}</span>
                      <time dateTime={o.date} className="pr-related-date">{formatDate(o.date)}</time>
                      <h3 className="pr-related-title">{o.title}</h3>
                      <span className="pr-related-arrow" aria-hidden="true">→</span>
                    </Link>
                  </Reveal>
                ))}
              </div>
              <Link href="/comunicados" className="pr-related-all">Ver todos los comunicados →</Link>
            </div>
          </section>
        )}

        <FinalCTA />
      </div>

      <style>{`
        .pr-hero { background: ${CS_CREAM}; padding: clamp(36px,5vw,64px) 0 clamp(28px,4vw,44px); }
        .pr-crumb { display: flex; align-items: center; gap: 9px; font-family: var(--font-mono, monospace); font-size: 11px; letter-spacing: .12em; text-transform: uppercase; color: ${CS_GRAY}; margin-bottom: clamp(24px,3vw,36px); }
        .pr-crumb a { color: ${CS_GRAY}; text-decoration: none; }
        .pr-crumb a:hover { color: ${CS_WINE}; }
        .pr-crumb .is-here { color: ${CS_WINE}; }

        .pr-hero-grid { display: grid; grid-template-columns: 30% 70%; gap: clamp(20px,3vw,48px); align-items: start; }
        .pr-date { display: flex; align-items: center; gap: 12px; margin-bottom: 18px; }
        .pr-date time { font-family: var(--font-mono, monospace); font-size: 11px; letter-spacing: .1em; color: ${CS_GRAY}; }
        .pr-date-line { height: 1px; width: 34px; background: ${CS_GOLD}; }
        .pr-badge { display: inline-flex; align-items: center; gap: 9px; padding: 8px 14px; border: 1px solid; border-radius: 3px; background: #fff; font-family: var(--font-mono, monospace); font-size: 11px; letter-spacing: .08em; text-transform: uppercase; font-weight: 700; }
        .pr-updated { margin-top: 12px; font-family: var(--font-sans, system-ui); font-size: 12px; color: ${CS_GRAY}; }

        .pr-h1 { font-family: var(--font-serif); font-weight: 400; font-size: clamp(30px,4vw,50px); line-height: 1.14; letter-spacing: -0.015em; color: ${CS_BLACK}; margin-bottom: 22px; }
        .pr-h1-em { font-family: var(--font-serif); font-style: italic; color: ${CS_WINE}; }
        .pr-rule { display: flex; align-items: center; gap: 10px; margin-bottom: 20px; }
        .pr-rule-line { width: 48px; height: 2px; background: ${CS_GOLD}; }
        .pr-rule-icon { display: grid; place-items: center; }
        .pr-lede { font-family: var(--font-sans, system-ui); font-size: clamp(16px,1.3vw,18.5px); line-height: 1.6; color: #6b3a2a; max-width: 62ch; }

        .pr-body-section { background: #FBFAF7; padding: clamp(36px,5vw,64px) 0; }
        .pr-grid { display: grid; grid-template-columns: 1fr 30%; gap: clamp(28px,4vw,56px); align-items: start; }
        .pr-article-col { grid-column: 2; grid-row: 1; }
        .pr-aside { grid-column: 1; grid-row: 1; position: sticky; top: 100px; }

        .pr-figure { margin: 0 0 clamp(24px,3vw,36px); }
        .pr-figure :global(button) img { width: 100%; aspect-ratio: 16/9; }
        .pr-figcaption { margin-top: 10px; font-family: var(--font-sans, system-ui); font-size: 12.5px; color: ${CS_GRAY}; font-style: italic; }

        .pr-noimage { position: relative; aspect-ratio: 16/9; border-radius: 4px; margin-bottom: clamp(24px,3vw,36px); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px; background: linear-gradient(150deg,#141010,#0a0808); border: 1px solid rgba(199,164,92,.25); }
        .pr-noimage-icon { color: rgba(199,164,92,.7); }
        .pr-noimage-cat { font-family: var(--font-mono, monospace); font-size: 11px; letter-spacing: .12em; text-transform: uppercase; color: ${CS_GOLD}; }
        .pr-noimage-date { font-family: var(--font-mono, monospace); font-size: 11px; color: rgba(245,237,224,.55); }

        .pr-prose { max-width: 70ch; }
        .pr-p { font-family: var(--font-sans, system-ui); font-size: 16.5px; line-height: 1.82; color: #333; margin: 0 0 24px; }
        .pr-p-lead { font-size: 18px; color: ${CS_BLACK}; }
        .pr-p u { text-decoration-color: ${CS_WINE}; text-decoration-thickness: 1.5px; }

        .pr-highlights { margin: 8px 0 28px; display: flex; flex-direction: column; gap: 14px; }
        .pr-highlight { display: flex; gap: 14px; align-items: flex-start; background: ${CS_CREAM}; border: 1px solid ${CS_BORDER}; border-radius: 4px; padding: 18px 20px; }
        .pr-highlight p { font-family: var(--font-sans, system-ui); font-size: 15.5px; line-height: 1.6; color: ${CS_WINE}; font-weight: 600; margin: 0; }

        .pr-quote { margin: 8px 0 28px; padding: 4px 0 4px 24px; border-left: 3px solid ${CS_WINE}; max-width: 70ch; }
        .pr-quote p { font-family: var(--font-serif); font-style: italic; font-size: clamp(18px,1.8vw,22px); line-height: 1.45; color: ${CS_BLACK}; margin: 0 0 10px; }
        .pr-quote cite { font-family: var(--font-mono, monospace); font-style: normal; font-size: 11px; letter-spacing: .08em; text-transform: uppercase; color: ${CS_GRAY}; }

        .pr-audio { margin: 8px 0 28px; padding: 20px 22px; background: ${CS_CREAM}; border-left: 3px solid ${CS_WINE}; }
        .pr-audio-label { font-family: var(--font-mono, monospace); font-size: 10px; letter-spacing: .12em; text-transform: uppercase; color: ${CS_GRAY}; margin-bottom: 12px; }

        .pr-signature { display: flex; align-items: center; gap: 14px; margin-top: 32px; padding-top: 22px; border-top: 1px solid ${CS_BORDER}; font-family: var(--font-mono, monospace); font-size: 11px; letter-spacing: .1em; text-transform: uppercase; color: ${CS_GRAY}; }
        .pr-signature-line { width: 30px; height: 1px; background: ${CS_WINE}; flex-shrink: 0; }

        .pr-media-card { background: ${CS_BLACK}; padding: clamp(20px,2.2vw,26px); border-radius: 5px; margin-bottom: 18px; }
        .pr-media-label { font-family: var(--font-mono, monospace); font-size: 10px; letter-spacing: .12em; text-transform: uppercase; color: rgba(255,255,255,.4); margin-bottom: 14px; }
        .pr-media-name { font-family: var(--font-sans, system-ui); font-weight: 600; font-size: 15px; color: #fff; line-height: 1.4; margin-bottom: 18px; }
        .pr-media-sub { display: block; font-size: 11.5px; color: rgba(255,255,255,.5); font-weight: 400; margin-top: 4px; }
        .pr-media-actions { display: flex; flex-direction: column; gap: 9px; }
        .pr-media-wa { display: flex; align-items: center; justify-content: center; gap: 8px; min-height: 44px; background: ${CS_WINE}; color: #fff; text-decoration: none; border-radius: 3px; font-family: var(--font-sans, system-ui); font-size: 13px; font-weight: 600; }
        .pr-media-wa:hover { background: #A20A0A; }
        .pr-media-mail { display: block; min-height: 44px; display: flex; align-items: center; justify-content: center; border: 1px solid rgba(255,255,255,.22); color: rgba(255,255,255,.78); text-decoration: none; font-family: var(--font-mono, monospace); font-size: 11px; word-break: break-all; text-align: center; padding: 0 8px; border-radius: 3px; }

        .pr-case-card { display: block; background: ${CS_CREAM}; border: 1px solid ${CS_BORDER}; border-radius: 5px; padding: clamp(18px,2vw,24px); text-decoration: none; margin-bottom: 18px; transition: border-color .2s ease; }
        .pr-case-card:hover { border-color: ${CS_GOLD}; }
        .pr-case-label { font-family: var(--font-mono, monospace); font-size: 10px; letter-spacing: .12em; text-transform: uppercase; color: ${CS_GRAY}; margin-bottom: 10px; }
        .pr-case-name { font-family: var(--font-serif); font-weight: 400; font-size: 17px; color: ${CS_BLACK}; margin-bottom: 6px; }
        .pr-case-status { font-family: var(--font-sans, system-ui); font-size: 12.5px; color: ${CS_GRAY}; margin-bottom: 12px; }
        .pr-case-link { font-family: var(--font-sans, system-ui); font-size: 12.5px; font-weight: 600; color: ${CS_WINE}; }

        .pr-nav { display: flex; flex-direction: column; gap: 10px; }
        .pr-nav-link { display: flex; align-items: center; gap: 8px; font-family: var(--font-sans, system-ui); font-size: 13.5px; color: #333; text-decoration: none; padding: 10px 0; border-bottom: 1px solid ${CS_BORDER}; }
        .pr-nav-link:hover { color: ${CS_WINE}; }
        .pr-nav-all { display: flex; align-items: center; justify-content: center; gap: 8px; min-height: 44px; border: 1px solid ${CS_WINE}; color: ${CS_WINE}; border-radius: 3px; text-decoration: none; font-family: var(--font-sans, system-ui); font-size: 13px; font-weight: 600; margin-top: 4px; transition: background .2s ease, color .2s ease; }
        .pr-nav-all:hover { background: ${CS_WINE}; color: #fff; }

        .pr-tags-section { background: #FBFAF7; padding: 0 0 clamp(36px,5vw,60px); border-top: 1px solid ${CS_BORDER}; }
        .pr-tags-section .rc-wrap { padding-top: clamp(28px,3.5vw,44px); }
        .pr-tags-h { font-family: var(--font-mono, monospace); font-size: 11px; letter-spacing: .14em; text-transform: uppercase; color: ${CS_GRAY}; margin-bottom: 16px; }
        .pr-tags { display: flex; flex-wrap: wrap; gap: 9px; }
        .pr-tag { font-family: var(--font-mono, monospace); font-size: 10.5px; letter-spacing: .06em; text-transform: uppercase; color: ${CS_WINE}; border: 1px solid ${CS_BORDER}; padding: 6px 12px; border-radius: 2px; background: transparent; }

        .pr-related-section { background: ${CS_CREAM}; padding: clamp(40px,5.5vw,72px) 0; }
        .pr-eyebrow { font-family: var(--font-mono, monospace); font-size: 11px; letter-spacing: .14em; text-transform: uppercase; color: ${CS_WINE}; margin-bottom: 14px; }
        .pr-related-h { font-family: var(--font-serif); font-weight: 400; font-size: clamp(26px,3vw,38px); color: ${CS_BLACK}; margin-bottom: clamp(24px,3vw,36px); }
        .pr-em { font-family: var(--font-serif); font-style: italic; color: ${CS_WINE}; }
        .pr-related-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: clamp(18px,2vw,26px); margin-bottom: 28px; }
        .pr-related-card { display: flex; flex-direction: column; gap: 10px; background: #fff; border: 1px solid ${CS_BORDER}; border-radius: 5px; padding: clamp(20px,2.2vw,26px); text-decoration: none; transition: transform .25s ease, box-shadow .25s ease; }
        .pr-related-card:hover { transform: translateY(-3px); box-shadow: 0 14px 34px rgba(20,20,20,.07); }
        .pr-related-cat { font-family: var(--font-mono, monospace); font-size: 10px; letter-spacing: .08em; text-transform: uppercase; font-weight: 700; }
        .pr-related-date { font-family: var(--font-mono, monospace); font-size: 11px; color: ${CS_GRAY}; }
        .pr-related-title { font-family: var(--font-serif); font-weight: 400; font-size: 17px; line-height: 1.3; color: ${CS_BLACK}; flex: 1; }
        .pr-related-arrow { color: ${CS_WINE}; font-weight: 700; }
        .pr-related-all { display: inline-flex; font-family: var(--font-sans, system-ui); font-size: 13px; font-weight: 600; color: ${CS_WINE}; text-decoration: none; }

        @media (max-width: 900px) {
          .pr-hero-grid { grid-template-columns: 1fr; }
          .pr-grid { grid-template-columns: 1fr; }
          .pr-article-col, .pr-aside { grid-column: 1; }
          .pr-article-col { grid-row: 1; }
          .pr-aside { grid-row: 2; position: static; margin-top: clamp(28px,3.5vw,40px); }
          .pr-related-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 560px) {
          .pr-related-grid { grid-template-columns: 1fr; }
          .pr-media-mail { word-break: break-all; }
        }
      `}</style>
    </>
  );
}
