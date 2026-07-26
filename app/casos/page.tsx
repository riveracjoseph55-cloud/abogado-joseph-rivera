import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import FinalCTA from "@/components/FinalCTA";
import SchemaOrg from "@/components/SchemaOrg";
import RichText from "@/components/RichText";
import { RC_CASES } from "@/lib/data";
import { SITE_URL, SITE_NAME, OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: "Casos de Femicidio Costa Rica | Abogado Joseph Rivera" },
  description:
    "Casos de femicidio y crimen en Costa Rica: Nadia Peraza (condena de 50 años), Carla Stefaniak, Junieysis Merlo. Defensa legal del Lic. Joseph Rivera Cheves — abogado penalista.",
  alternates: { canonical: `${SITE_URL}/casos` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/casos`,
    title: `Casos de Alto Perfil | Abogado Joseph Rivera | ${SITE_NAME}`,
    description:
      "Femicidios y casos de alto impacto en Costa Rica. Nadia Peraza (condena de 50 años), Carla Stefaniak, Junieysis Merlo — representación del Lic. Joseph Rivera Cheves.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Casos | ${SITE_NAME}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Casos Joseph Rivera | Abogado Penalista Costa Rica`,
    images: [OG_IMAGE],
  },
  keywords: [
    "nadia peraza",
    "caso nadia peraza",
    "nadia peraza abogado",
    "joseph rivera nadia peraza",
    "casos femicidio costa rica",
    "abogado femicidio costa rica",
    "caso carla stefaniak",
    "abogado joseph rivera casos",
    "abogado penalista costa rica casos",
    "femicidio abogado san jose",
  ],
};

const caseListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Casos de Alto Perfil — Rivera Cheves & Asociados",
  url: `${SITE_URL}/casos`,
  numberOfItems: RC_CASES.length,
  itemListElement: RC_CASES.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.name,
    description: c.short,
    url: `${SITE_URL}/casos/${c.slug}`,
  })),
};

// ── Paleta editorial (misma que la home) ──────────────────────────
const CS_CREAM    = "#F4F1EB";
const CS_WHITE    = "#FBFAF7";
const CS_BLACK    = "#0A0A0A";
const CS_CHARCOAL = "#161616";
const CS_WINE     = "#7A0808";
const CS_RED      = "#A20A0A";
const CS_GOLD     = "#C7A45C";
const CS_GRAY     = "#6C6C6C";
const CS_BORDER   = "rgba(20,20,20,0.12)";

// Orden cronológico inverso (más reciente primero)
const sortedCases = [...RC_CASES].sort(
  (a, b) => parseInt(b.year) - parseInt(a.year)
);

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11Z" stroke="currentColor" strokeWidth="1.4"/>
      <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.4"/>
    </svg>
  );
}
function ScaleIcon({ size = 26, color = CS_GOLD }: { size?: number; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true">
      <path d="M12 3v16M5 21h14M6 8h12M6 8 3.5 13.5a3.2 3.2 0 0 0 6.5 0L7.5 8M17.5 8 15 13.5a3.2 3.2 0 0 0 6.5 0L18.5 8"
        stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function TempleIcon({ size = 40, color = CS_GOLD }: { size?: number; color?: string }) {
  return (
    <svg viewBox="0 0 48 48" width={size} height={size} fill="none" aria-hidden="true">
      <path d="M24 5 6 14h36L24 5Z" stroke={color} strokeWidth="1.4" strokeLinejoin="round"/>
      <path d="M10 18v16M18 18v16M30 18v16M38 18v16" stroke={color} strokeWidth="1.4"/>
      <path d="M6 34h36M4 40h40" stroke={color} strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  );
}

export default function CasosPage() {
  return (
    <>
      <SchemaOrg data={caseListSchema} />
      <div className="rc-page casos">

        {/* ── 1 · HERO ── */}
        <section className="casos-hero">
          <img src="/images/casos/casos-arch-light.webp" alt="" aria-hidden="true" className="casos-hero-arch" />
          <div className="rc-wrap" style={{ position: "relative", zIndex: 1 }}>
            <Reveal>
              <div className="casos-eyebrow">
                <span className="casos-eyebrow-line" />
                Casos destacados · {RC_CASES.length.toString().padStart(2, "0")}
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="casos-h1">
                Defensa en <em className="casos-h1-em">Femicidios</em>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="casos-lede">
                Representación legal a familias de víctimas en los casos más emblemáticos
                de violencia de género en Costa Rica y Centroamérica. Cada dossier documenta
                los hechos, la cronología procesal y la resolución.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── 2 · LITIGACIÓN ORAL ACTIVA ── */}
        <section className="casos-band" aria-label="Litigación oral activa">
          <div className="rc-wrap">
            <div className="casos-band-grid">
              {/* Texto */}
              <div className="casos-band-text">
                <div className="casos-band-icon"><TempleIcon /></div>
                <h2 className="casos-band-title">Litigación oral activa</h2>
                <span className="casos-band-rule" aria-hidden="true" />
                <p className="casos-band-desc">
                  Querella privada, acción civil resarcitoria y compliance forense aplicado
                  en cada uno de los casos representados.
                </p>
              </div>

              {/* Foto real de Joseph */}
              <div className="casos-band-photo">
                <Image
                  src="/images/joseph/tribunal.jpg"
                  alt="Abogado penalista Joseph Rivera Cheves en audiencia oral activa — Tribunal Penal de Costa Rica — defensa en femicidios y crimen organizado"
                  fill sizes="(max-width: 980px) 100vw, 40vw"
                  style={{ objectFit: "cover", objectPosition: "center 30%" }}
                  loading="lazy"
                />
                <span className="casos-band-photo-scrim" aria-hidden="true" />
              </div>

              {/* Metadatos */}
              <div className="casos-band-meta">
                <div className="casos-band-metarow">
                  <span className="casos-band-metaicon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="15" height="15" fill="none"><circle cx="12" cy="8" r="3.4" stroke={CS_GOLD} strokeWidth="1.4"/><path d="M5 20c.6-3.6 3.4-5.5 7-5.5s6.4 1.9 7 5.5" stroke={CS_GOLD} strokeWidth="1.4" strokeLinecap="round"/></svg>
                  </span>
                  <p>
                    Abogado penalista <strong>Joseph Rivera Cheves</strong> en audiencia oral
                    activa — Tribunal Penal de Costa Rica — defensa en femicidios y crimen organizado
                  </p>
                </div>
                <div className="casos-band-metarow casos-band-metaloc">
                  <span className="casos-band-metaicon" aria-hidden="true"><PinIcon /></span>
                  <p>Sala de juicio · Tribunal Penal</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3 · ENCABEZADO "NUESTROS CASOS" ── */}
        <section className="casos-listhead">
          <img src="/images/casos/casos-arch-light.webp" alt="" aria-hidden="true" className="casos-listhead-arch" />
          <div className="rc-wrap" style={{ position: "relative", zIndex: 1 }}>
            <Reveal>
              <div className="casos-listhead-in">
                <span className="casos-listhead-icon"><ScaleIcon size={30} /></span>
                <div>
                  <h2 className="casos-listhead-title">Nuestros casos</h2>
                  <p className="casos-listhead-desc">
                    Dossiers de los casos más emblemáticos de femicidio y violencia de
                    género representados por el despacho.
                  </p>
                </div>
              </div>
            </Reveal>
            <div className="casos-listhead-rule" aria-hidden="true" />
          </div>
        </section>

        {/* ── 4 · LISTADO DE CASOS ── */}
        <section className="casos-list">
          <img src="/images/casos/casos-arch-light.webp" alt="" aria-hidden="true" className="casos-list-arch" />
          <div className="rc-wrap" style={{ position: "relative", zIndex: 1 }}>
            {sortedCases.map((c, i) => {
              const active = c.statusTone === "active";
              return (
                <Reveal key={c.slug} delay={i * 60}>
                  <article id={c.slug} className={`caso-row${active ? " is-active" : ""}`}>
                    <div className="caso-grid">
                      {/* Info principal */}
                      <div className="caso-info">
                        <div className="caso-tagline">
                          <span className="caso-num">Caso {String(i + 1).padStart(2, "0")} · {c.yearRange}</span>
                          <span className={`caso-badge${active ? " is-active" : ""}`}>{c.status}</span>
                        </div>
                        <h3 className="caso-name">{c.name}</h3>
                        <div className="caso-loc"><PinIcon /> {c.location}</div>
                        <div className="caso-chips">
                          {c.tags.map((t) => <span key={t} className="caso-chip">{t}</span>)}
                        </div>
                      </div>

                      {/* Descripción */}
                      <div className="caso-desc">
                        <RichText text={c.short} className="caso-desc-text" />
                      </div>

                      {/* Rol + resolución */}
                      <div className="caso-meta">
                        <div className="caso-metablock">
                          <div className="caso-metalabel">Rol</div>
                          <div className="caso-metaval">{c.role}</div>
                        </div>
                        <div className="caso-metablock">
                          <div className="caso-metalabel">{active ? "Estado procesal" : "Sentencia"}</div>
                          <div className={`caso-metaval caso-result${active ? " is-active" : ""}`}>{c.sentence}</div>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="caso-cta">
                        <Link href={`/casos/${c.slug}`} className="caso-btn">
                          Ver caso completo <span className="caso-btn-arrow">→</span>
                        </Link>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* ── 5 · CTA FINAL ── */}
        <FinalCTA />
      </div>

      <style>{`
        /* ── Hero ── */
        .casos-hero {
          position: relative; overflow: hidden; background: ${CS_CREAM};
          padding: clamp(56px,7vw,110px) 0 clamp(48px,6vw,88px);
        }
        .casos-hero-arch {
          position: absolute; right: 0; top: 0; height: 100%; width: 52%;
          object-fit: cover; object-position: right center; opacity: .5; pointer-events: none;
          -webkit-mask-image: linear-gradient(90deg, transparent 0%, rgba(0,0,0,.4) 42%, #000 100%);
          mask-image: linear-gradient(90deg, transparent 0%, rgba(0,0,0,.4) 42%, #000 100%);
        }
        .casos-eyebrow {
          display: flex; align-items: center; gap: 16px;
          font-family: var(--font-mono, monospace); font-size: 12px; font-weight: 500;
          letter-spacing: .2em; text-transform: uppercase; color: ${CS_WINE}; margin-bottom: 22px;
        }
        .casos-eyebrow-line { width: 40px; height: 2px; background: ${CS_WINE}; flex-shrink: 0; }
        .casos-h1 {
          font-family: var(--font-serif); font-weight: 400; color: ${CS_BLACK};
          font-size: clamp(42px,7vw,88px); line-height: 1.02; letter-spacing: -0.02em; margin-bottom: 26px;
        }
        .casos-h1-em { font-family: var(--font-serif); font-style: italic; color: ${CS_WINE}; }
        .casos-lede {
          font-family: var(--font-sans, system-ui); font-size: clamp(16px,1.35vw,20px);
          line-height: 1.65; color: ${CS_GRAY}; max-width: 44ch;
        }

        /* ── Franja litigación oral ── */
        .casos-band {
          position: relative; overflow: hidden;
          background: radial-gradient(900px 500px at 62% 0%, rgba(122,8,8,.28), transparent 60%), linear-gradient(180deg,#141010 0%,#0a0808 100%);
          border-top: 1px solid rgba(162,10,10,.5);
          padding: clamp(36px,4.5vw,60px) 0;
        }
        .casos-band-grid {
          display: grid; grid-template-columns: 1.15fr 1fr 0.95fr; gap: clamp(24px,3vw,48px); align-items: center;
        }
        .casos-band-icon { margin-bottom: 18px; }
        .casos-band-title {
          font-family: var(--font-serif); font-style: italic; font-weight: 400;
          font-size: clamp(28px,3vw,42px); line-height: 1.05; color: ${CS_GOLD}; margin-bottom: 20px;
        }
        .casos-band-rule { display: block; width: 90px; height: 1px; background: linear-gradient(90deg, ${CS_GOLD}, transparent); margin-bottom: 20px; }
        .casos-band-desc {
          font-family: var(--font-sans, system-ui); font-size: clamp(14px,1.15vw,17px);
          line-height: 1.65; color: rgba(245,237,224,.72); max-width: 40ch;
        }
        .casos-band-photo {
          position: relative; width: 100%; aspect-ratio: 16/11; overflow: hidden; border-radius: 4px;
          box-shadow: 0 24px 60px rgba(0,0,0,.5);
        }
        .casos-band-photo-scrim {
          position: absolute; inset: 0; pointer-events: none;
          background: linear-gradient(90deg, rgba(10,8,8,.55) 0%, transparent 30%, transparent 70%, rgba(10,8,8,.35) 100%);
          box-shadow: inset 0 0 60px rgba(0,0,0,.5);
        }
        .casos-band-meta { display: flex; flex-direction: column; gap: 22px; }
        .casos-band-metarow { display: flex; gap: 12px; align-items: flex-start; }
        .casos-band-metarow p {
          font-family: var(--font-sans, system-ui); font-size: 13px; line-height: 1.55; color: rgba(245,237,224,.68); margin: 0;
        }
        .casos-band-metarow strong { color: #f5ede0; font-weight: 600; }
        .casos-band-metaicon {
          width: 30px; height: 30px; border-radius: 50%; flex-shrink: 0; display: grid; place-items: center;
          border: 1px solid rgba(199,164,92,.4); background: rgba(199,164,92,.06);
        }
        .casos-band-metaloc { padding-top: 20px; border-top: 1px solid rgba(255,255,255,.1); }
        .casos-band-metaloc p { font-family: var(--font-mono, monospace); font-size: 11px; letter-spacing: .1em; text-transform: uppercase; color: ${CS_GOLD}; }

        /* ── Encabezado "Nuestros casos" ── */
        .casos-listhead { position: relative; overflow: hidden; background: ${CS_CREAM}; padding: clamp(44px,6vw,80px) 0 clamp(10px,1.5vw,20px); }
        .casos-listhead-arch {
          position: absolute; right: 0; bottom: 0; height: 150%; width: 30%; object-fit: cover; object-position: right center;
          opacity: .16; pointer-events: none;
          -webkit-mask-image: linear-gradient(90deg, transparent, #000 90%); mask-image: linear-gradient(90deg, transparent, #000 90%);
        }
        .casos-listhead-in { display: flex; align-items: flex-start; gap: 18px; }
        .casos-listhead-icon {
          width: 54px; height: 54px; flex-shrink: 0; display: grid; place-items: center;
          border: 1px solid ${CS_BORDER}; border-radius: 4px; background: ${CS_WHITE};
        }
        .casos-listhead-title { font-family: var(--font-serif); font-weight: 400; font-size: clamp(26px,3vw,40px); color: ${CS_BLACK}; line-height: 1.1; margin-bottom: 8px; }
        .casos-listhead-desc { font-family: var(--font-sans, system-ui); font-size: clamp(14px,1.1vw,16px); line-height: 1.6; color: ${CS_GRAY}; max-width: 52ch; }
        .casos-listhead-rule { height: 1px; margin-top: clamp(24px,3vw,40px); background: linear-gradient(90deg, ${CS_GOLD}, rgba(199,164,92,.15) 40%, transparent); }

        /* ── Listado ── */
        .casos-list { position: relative; overflow: hidden; background: ${CS_CREAM}; padding: clamp(24px,3vw,40px) 0 clamp(56px,7vw,110px); }
        .casos-list-arch {
          position: absolute; right: 0; top: 10%; height: 80%; width: 26%; object-fit: contain; object-position: right top;
          opacity: .05; pointer-events: none;
          -webkit-mask-image: linear-gradient(90deg, transparent, #000 80%); mask-image: linear-gradient(90deg, transparent, #000 80%);
        }
        .caso-row {
          background: ${CS_WHITE}; border: 1px solid ${CS_BORDER}; border-left: 3px solid ${CS_BLACK};
          border-radius: 5px; padding: clamp(24px,2.8vw,38px) clamp(22px,2.6vw,40px);
          margin-bottom: clamp(16px,1.8vw,22px);
          transition: transform .35s var(--ease), border-color .35s var(--ease), box-shadow .35s var(--ease);
        }
        .caso-row.is-active { border-left-color: ${CS_WINE}; }
        .caso-row:hover { transform: translateY(-3px); border-color: ${CS_GOLD}; border-left-color: ${CS_GOLD}; box-shadow: 0 16px 40px rgba(20,20,20,.09); }

        .caso-grid {
          display: grid; grid-template-columns: 28fr 30fr 24fr 18fr;
          grid-template-areas: "info desc meta cta";
          gap: clamp(20px,2.4vw,44px); align-items: start;
        }
        .caso-info { grid-area: info; }
        .caso-desc { grid-area: desc; }
        .caso-meta { grid-area: meta; }
        .caso-cta  { grid-area: cta; display: flex; justify-content: flex-end; align-items: flex-start; }

        .caso-tagline { display: flex; align-items: center; flex-wrap: wrap; gap: 8px 14px; margin-bottom: 14px; }
        .caso-num { font-family: var(--font-mono, monospace); font-size: 11px; letter-spacing: .1em; text-transform: uppercase; color: ${CS_GRAY}; }
        .caso-badge {
          display: inline-block; padding: 4px 10px; background: ${CS_CHARCOAL}; color: #fff;
          font-family: var(--font-mono, monospace); font-size: 9.5px; letter-spacing: .13em; text-transform: uppercase;
        }
        .caso-badge.is-active { background: ${CS_WINE}; }
        .caso-name { font-family: var(--font-serif); font-weight: 400; font-size: clamp(22px,2vw,29px); line-height: 1.12; color: ${CS_BLACK}; margin-bottom: 10px; }
        .caso-loc { display: flex; align-items: center; gap: 7px; font-family: var(--font-mono, monospace); font-size: 11px; letter-spacing: .05em; text-transform: uppercase; color: ${CS_GRAY}; margin-bottom: 18px; }
        .caso-chips { display: flex; flex-wrap: wrap; gap: 8px; }
        .caso-chip {
          font-family: var(--font-sans, system-ui); font-size: 11px; letter-spacing: .02em; color: ${CS_CHARCOAL};
          padding: 5px 11px; background: ${CS_CREAM}; border: 1px solid ${CS_BORDER}; border-radius: 3px;
        }

        .caso-desc-text { font-family: var(--font-sans, system-ui); font-size: 15px; line-height: 1.66; color: ${CS_GRAY}; margin: 0; }
        .caso-desc-text strong { color: ${CS_CHARCOAL}; font-weight: 600; }

        .caso-meta { display: flex; flex-direction: column; gap: 18px; }
        .caso-metalabel { font-family: var(--font-mono, monospace); font-size: 10px; letter-spacing: .13em; text-transform: uppercase; color: ${CS_WINE}; margin-bottom: 6px; }
        .caso-metaval { font-family: var(--font-sans, system-ui); font-size: 14px; line-height: 1.5; color: ${CS_CHARCOAL}; }
        .caso-result { font-weight: 600; }
        .caso-result.is-active { color: ${CS_WINE}; }

        .caso-btn {
          display: inline-flex; align-items: center; gap: 9px; white-space: nowrap;
          min-height: 48px; padding: 12px 20px; background: ${CS_WINE}; color: #fff;
          font-family: var(--font-sans, system-ui); font-size: 13px; font-weight: 600; letter-spacing: .01em;
          border-radius: 3px; text-decoration: none; border: 1px solid transparent;
          transition: background .25s var(--ease), gap .25s var(--ease);
        }
        .caso-btn:hover { background: ${CS_RED}; gap: 13px; }
        .caso-btn:focus-visible { outline: 2px solid ${CS_GOLD}; outline-offset: 3px; }
        .caso-btn-arrow { transition: transform .25s var(--ease); }
        .caso-btn:hover .caso-btn-arrow { transform: translateX(4px); }

        /* ── Responsive ── */
        @media (max-width: 980px) {
          .casos-band-grid { grid-template-columns: 1fr; gap: 28px; }
          .casos-band-photo { aspect-ratio: 16/9; max-height: 340px; order: 2; }
          .casos-band-text { order: 1; }
          .casos-band-meta { order: 3; }
          .casos-hero-arch { width: 70%; opacity: .32; }
        }
        @media (max-width: 1024px) {
          .caso-grid { grid-template-columns: 1fr 1fr; grid-template-areas: "info info" "desc meta" "cta cta"; }
          .caso-cta { justify-content: flex-start; }
        }
        @media (max-width: 640px) {
          .caso-grid { grid-template-columns: 1fr; grid-template-areas: "info" "desc" "meta" "cta"; gap: 20px; }
          .caso-btn { width: 100%; justify-content: center; }
          .casos-hero-arch { opacity: .22; }
          .casos-list-arch, .casos-listhead-arch { opacity: .04; }
        }
      `}</style>
    </>
  );
}
