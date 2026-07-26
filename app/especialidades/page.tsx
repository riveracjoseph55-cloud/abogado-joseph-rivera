import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import AreasExplorer from "@/components/AreasExplorer";
import FinalCTA from "@/components/FinalCTA";
import SchemaOrg from "@/components/SchemaOrg";
import RichText from "@/components/RichText";
import { RC_AREAS } from "@/lib/data";
import { SITE_URL, SITE_NAME, OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: "Especialidades del Abogado Penalista Joseph Rivera" },
  description:
    "Abogado penalista Joseph Rivera Cheves — 7 especialidades: derecho penal, lavado de dinero, corporativo, laboral, notarial, asesoría internacional e investigaciones criminales en Costa Rica.",
  alternates: { canonical: `${SITE_URL}/especialidades` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/especialidades`,
    title: `Especialidades del Abogado Penalista Joseph Rivera | ${SITE_NAME}`,
    description:
      "Abogado penalista Joseph Rivera Cheves — derecho penal, lavado de dinero, crimen organizado, corporativo, laboral, notarial e investigaciones criminales en Costa Rica.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Especialidades | ${SITE_NAME}` }],
  },
  twitter: { card: "summary_large_image", title: `Especialidades Abogado Joseph Rivera | ${SITE_NAME}`, images: [OG_IMAGE] },
  keywords: [
    "especialidades abogado penalista costa rica",
    "derecho penal costa rica",
    "lavado de dinero abogado costa rica",
    "abogado crimen organizado costa rica",
    "abogado notarial san jose",
    "abogado corporativo costa rica",
    "abogado laboral costa rica",
    "investigaciones criminales costa rica",
    "asesoría penal internacional costa rica",
    "joseph rivera especialidades",
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Especialidades Jurídicas — Rivera Cheves & Asociados",
  url: `${SITE_URL}/especialidades`,
  numberOfItems: RC_AREAS.length,
  itemListElement: RC_AREAS.map((a, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: a.t,
    description: a.d,
    url: `${SITE_URL}/especialidades/${a.slug}`,
  })),
};

const CS_CREAM = "#F4F1EB";
const CS_BLACK = "#0A0A0A";
const CS_WINE  = "#7A0808";
const CS_GOLD  = "#C7A45C";
const CS_GRAY  = "#6C6C6C";

export default function EspecialidadesPage() {
  return (
    <>
      <SchemaOrg data={serviceSchema} />
      <div className="rc-page especialidades">

        {/* ── HERO ── */}
        <section className="esp-hero">
          <img src="/images/casos/casos-arch-light.webp" alt="" aria-hidden="true" className="esp-hero-arch" />
          <div className="rc-wrap" style={{ position: "relative", zIndex: 1 }}>
            <Reveal>
              <div className="esp-eyebrow"><span className="esp-eyebrow-line" />Nuestras áreas</div>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="esp-h1">Áreas de <em className="esp-h1-em">Especialización</em></h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="esp-lede">
                Vasta experiencia en múltiples ramas del derecho costarricense e internacional.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── EXPLORADOR ── */}
        <section className="esp-explorer">
          <div className="rc-wrap">
            <AreasExplorer variant="full" />
          </div>
        </section>

        {/* ── CONTENIDO AMPLIADO ── */}
        <div id="area-detalle">
          {RC_AREAS.map((area, i) => (
            <section key={area.slug} id={area.slug} className={`esp-detail${i % 2 === 1 ? " is-alt" : ""}`}>
              <div className="rc-wrap">
                <div className="esp-detail-grid">
                  <div className="esp-detail-head">
                    <div className="esp-detail-eyebrow">Área {area.n} / {String(RC_AREAS.length).padStart(2, "0")}</div>
                    <Reveal>
                      <h2 className="esp-detail-title">
                        {area.pre}<em className="esp-detail-em">{area.em}</em>{area.post}
                      </h2>
                    </Reveal>
                    <span className="esp-detail-rule" aria-hidden="true" />
                    <RichText text={area.d} className="esp-detail-lead" />
                  </div>

                  <div className="esp-detail-body">
                    {area.long.map((p, j) => (
                      <Reveal key={j} delay={j * 40}>
                        <RichText text={p} className="esp-detail-p" />
                      </Reveal>
                    ))}
                    <div className="esp-sub">
                      <div className="esp-sub-label">Subáreas de práctica</div>
                      <div className="esp-sub-grid">
                        {area.items.map((it) => (
                          <div key={it} className="esp-sub-item">
                            <span className="esp-sub-dot" aria-hidden="true" />{it}
                          </div>
                        ))}
                      </div>
                    </div>
                    <Link href={`/especialidades/${area.slug}`} className="esp-detail-cta">
                      Ver servicio completo <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* ── CTA FINAL ── */}
        <FinalCTA />
      </div>

      <style>{`
        .esp-hero { position: relative; overflow: hidden; background: ${CS_CREAM}; padding: clamp(56px,7vw,110px) 0 clamp(40px,5vw,72px); }
        .esp-hero-arch {
          position: absolute; right: 0; top: 0; height: 100%; width: 50%; object-fit: cover; object-position: right center;
          opacity: .5; pointer-events: none;
          -webkit-mask-image: linear-gradient(90deg, transparent, rgba(0,0,0,.4) 42%, #000 100%);
          mask-image: linear-gradient(90deg, transparent, rgba(0,0,0,.4) 42%, #000 100%);
        }
        .esp-eyebrow { display: flex; align-items: center; gap: 16px; font-family: var(--font-mono, monospace); font-size: 12px; font-weight: 500; letter-spacing: .2em; text-transform: uppercase; color: ${CS_WINE}; margin-bottom: 22px; }
        .esp-eyebrow-line { width: 40px; height: 2px; background: ${CS_WINE}; }
        .esp-h1 { font-family: var(--font-serif); font-weight: 400; color: ${CS_BLACK}; font-size: clamp(42px,7vw,88px); line-height: 1.02; letter-spacing: -0.02em; margin-bottom: 24px; }
        .esp-h1-em { font-family: var(--font-serif); font-style: italic; color: ${CS_WINE}; }
        .esp-lede { font-family: var(--font-sans, system-ui); font-size: clamp(16px,1.35vw,20px); line-height: 1.6; color: ${CS_GRAY}; max-width: 46ch; }

        .esp-explorer { background: ${CS_CREAM}; padding: clamp(8px,2vw,28px) 0 clamp(48px,6vw,90px); }

        /* Contenido ampliado */
        .esp-detail { background: #FBFAF7; padding: clamp(48px,6vw,96px) 0; border-top: 1px solid rgba(20,20,20,.08); }
        .esp-detail.is-alt { background: ${CS_CREAM}; }
        .esp-detail-grid { display: grid; grid-template-columns: 0.85fr 1.15fr; gap: clamp(28px,5vw,80px); align-items: start; }
        .esp-detail-eyebrow { font-family: var(--font-mono, monospace); font-size: 11px; letter-spacing: .16em; text-transform: uppercase; color: ${CS_GOLD}; margin-bottom: 16px; }
        .esp-detail-title { font-family: var(--font-serif); font-weight: 400; color: ${CS_BLACK}; font-size: clamp(28px,3.4vw,48px); line-height: 1.06; letter-spacing: -0.015em; margin-bottom: 20px; }
        .esp-detail-em { font-family: var(--font-serif); font-style: italic; color: ${CS_WINE}; }
        .esp-detail-rule { display: block; width: 60px; height: 2px; background: ${CS_GOLD}; margin-bottom: 20px; }
        .esp-detail-lead { font-family: var(--font-sans, system-ui); font-size: clamp(15px,1.1vw,17px); line-height: 1.6; color: ${CS_GRAY}; margin: 0; }
        .esp-detail-lead strong { color: #161616; font-weight: 600; }
        .esp-detail-p { font-family: var(--font-sans, system-ui); font-size: 15.5px; line-height: 1.72; color: #3a3a3a; margin: 0 0 18px; }
        .esp-detail-p strong { color: ${CS_WINE}; font-weight: 600; }
        .esp-sub { margin: clamp(20px,2.5vw,32px) 0; padding-top: 24px; border-top: 1px solid rgba(20,20,20,.1); }
        .esp-sub-label { font-family: var(--font-mono, monospace); font-size: 10.5px; letter-spacing: .14em; text-transform: uppercase; color: ${CS_WINE}; margin-bottom: 16px; }
        .esp-sub-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px 24px; }
        .esp-sub-item { display: flex; align-items: center; gap: 10px; font-family: var(--font-sans, system-ui); font-size: 14px; color: #2a2a2a; }
        .esp-sub-dot { width: 5px; height: 5px; border-radius: 50%; background: ${CS_GOLD}; flex-shrink: 0; }
        .esp-detail-cta {
          display: inline-flex; align-items: center; gap: 9px; min-height: 48px; padding: 12px 24px;
          background: ${CS_WINE}; color: #fff; text-decoration: none; border-radius: 3px;
          font-family: var(--font-sans, system-ui); font-size: 13px; font-weight: 600;
          transition: background .25s var(--ease), gap .25s var(--ease);
        }
        .esp-detail-cta:hover { background: #A20A0A; gap: 13px; }
        .esp-detail-cta:focus-visible { outline: 2px solid ${CS_GOLD}; outline-offset: 3px; }

        @media (max-width: 900px) {
          .esp-hero-arch { width: 68%; opacity: .3; }
          .esp-detail-grid { grid-template-columns: 1fr; gap: 24px; }
        }
        @media (max-width: 560px) {
          .esp-hero-arch { opacity: .2; }
          .esp-sub-grid { grid-template-columns: 1fr; }
          .esp-detail-cta { width: 100%; justify-content: center; }
        }
      `}</style>
    </>
  );
}
