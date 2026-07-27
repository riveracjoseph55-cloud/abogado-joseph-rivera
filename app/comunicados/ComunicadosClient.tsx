"use client";
import { useMemo, useState, ReactElement } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import FinalCTA from "@/components/FinalCTA";
import { RC_COMUNICADOS, ComunicadoCategory } from "@/lib/data";

const CS_CREAM  = "#F4F1EB";
const CS_BLACK  = "#0A0A0A";
const CS_CHARCOAL = "#161616";
const CS_WINE   = "#7A0808";
const CS_RED    = "#A20A0A";
const CS_GOLD   = "#C7A45C";
const CS_GRAY   = "#6C6C6C";
const CS_BORDER = "rgba(20,20,20,0.12)";

function formatDate(d: string) {
  const months = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","setiembre","octubre","noviembre","diciembre"];
  const [y, m, day] = d.split("-");
  return `${Number(day)} de ${months[Number(m) - 1]} de ${y}`;
}

const CAT_PLURAL: Record<ComunicadoCategory, string> = {
  "Comunicado oficial": "Comunicados oficiales",
  "Resolución judicial": "Resoluciones judiciales",
  "Pronunciamiento": "Pronunciamientos",
  "Actualización procesal": "Actualizaciones procesales",
};
const CAT_COLOR: Record<ComunicadoCategory, string> = {
  "Comunicado oficial": CS_WINE,
  "Resolución judicial": CS_CHARCOAL,
  "Pronunciamiento": CS_GOLD,
  "Actualización procesal": CS_GRAY,
};

function GridIcon() { return <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true"><rect x="3" y="3" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><rect x="13" y="3" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><rect x="3" y="13" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><rect x="13" y="13" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5"/></svg>; }
function MegaphoneIcon() { return <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true"><path d="M3 10v4a1 1 0 0 0 1 1h2l1 5h2l-1-5h2l9 4V6l-9 4H4a1 1 0 0 0-1 1Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>; }
function ScaleIcon() { return <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true"><path d="M12 3v16M5 21h14M6 8h12M6 8 3.5 13.5a3.2 3.2 0 0 0 6.5 0L7.5 8M17.5 8 15 13.5a3.2 3.2 0 0 0 6.5 0L18.5 8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>; }
function DocIcon() { return <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true"><path d="M6 3h9l3 3v15H6V3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M9 9h6M9 12h6M9 15h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>; }
function ClockIcon() { return <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/><path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>; }
const CAT_ICON: Record<ComunicadoCategory, () => ReactElement> = {
  "Comunicado oficial": MegaphoneIcon,
  "Resolución judicial": ScaleIcon,
  "Pronunciamiento": DocIcon,
  "Actualización procesal": ClockIcon,
};

type FilterKey = "todos" | ComunicadoCategory;

export default function ComunicadosClient() {
  const [active, setActive] = useState<FilterKey>("todos");

  const filters = useMemo(() => {
    const cats = Array.from(new Set(RC_COMUNICADOS.map(c => c.category)));
    const opts: { key: FilterKey; label: string; count: number; icon: () => ReactElement }[] = [
      { key: "todos", label: "Todos", count: RC_COMUNICADOS.length, icon: GridIcon },
    ];
    for (const cat of cats) {
      opts.push({ key: cat, label: CAT_PLURAL[cat], count: RC_COMUNICADOS.filter(c => c.category === cat).length, icon: CAT_ICON[cat] });
    }
    return opts;
  }, []);

  const filtered = useMemo(() => {
    const list = active === "todos" ? RC_COMUNICADOS : RC_COMUNICADOS.filter(c => c.category === active);
    return [...list].sort((a, b) => b.date.localeCompare(a.date));
  }, [active]);

  const [featured, ...rest] = filtered;
  const activeLabel = active === "todos" ? "Todos" : CAT_PLURAL[active];

  return (
    <div className="rc-page comunicados">

      {/* ── HERO ── */}
      <section className="cm-hero">
        <img src="/images/casos/casos-arch-light.webp" alt="" aria-hidden="true" className="cm-hero-arch-l" />
        <img src="/images/casos/casos-arch-light.webp" alt="" aria-hidden="true" className="cm-hero-arch-r" />
        <div className="rc-wrap" style={{ position: "relative", zIndex: 1 }}>
          <Reveal>
            <div className="cm-crumb">
              <Link href="/prensa">Prensa</Link><span aria-hidden="true">/</span><span className="is-here">Comunicados</span>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="cm-h1">Comunicados de <em className="cm-h1-em">Prensa</em></h1>
          </Reveal>
          <span className="cm-rule" aria-hidden="true" />
          <Reveal delay={140}>
            <p className="cm-lede">
              Posiciones oficiales, resoluciones judiciales y novedades emitidas
              directamente por el bufete Rivera Cheves &amp; Asociados para medios
              de comunicación y público en general.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── FILTROS + DESTACADO + LISTA ── */}
      <section className="cm-main">
        <div className="rc-wrap">

          {/* Filtros: escritorio (sidebar) */}
          <nav className="cm-filters" role="group" aria-label="Filtrar comunicados por categoría">
            <img src="/images/casos/casos-arch-light.webp" alt="" aria-hidden="true" className="cm-filters-arch" />
            {filters.map(f => {
              const Icon = f.icon;
              const on = active === f.key;
              return (
                <button key={f.key} type="button" className={`cm-filter${on ? " is-on" : ""}`} aria-pressed={on} onClick={() => setActive(f.key)}>
                  <span className="cm-filter-icon" aria-hidden="true"><Icon /></span>
                  <span className="cm-filter-label">{f.label}</span>
                  <span className="cm-filter-count">{f.count}</span>
                </button>
              );
            })}
          </nav>

          {/* Filtros: móvil (pills desplazables) */}
          <div className="cm-filters-mobile" role="group" aria-label="Filtrar comunicados por categoría">
            {filters.map(f => {
              const on = active === f.key;
              return (
                <button key={f.key} type="button" className={`cm-pill${on ? " is-on" : ""}`} aria-pressed={on} onClick={() => setActive(f.key)}>
                  {f.label} <span className="cm-pill-count">{f.count}</span>
                </button>
              );
            })}
          </div>

          <p className="cm-sr-status" aria-live="polite">{filtered.length} comunicado{filtered.length === 1 ? "" : "s"} en «{activeLabel}».</p>

          <div className="cm-content">
            {/* Destacado */}
            {featured ? (
              <Reveal key={featured.slug}>
                <Link href={`/comunicados/${featured.slug}`} className="cm-featured">
                  <span className="cm-featured-num">01</span>
                  <div className="cm-featured-body">
                    <div className="cm-featured-meta">
                      <span className="cm-cat" style={{ color: CAT_COLOR[featured.category] }}>{featured.category}</span>
                      <span className="cm-dot" aria-hidden="true">·</span>
                      <span className="cm-date">{formatDate(featured.date)}</span>
                    </div>
                    <h2 className="cm-featured-title">{featured.title}</h2>
                    <p className="cm-featured-summary">{featured.summary}</p>
                    {featured.tags && featured.tags.length > 0 && (
                      <div className="cm-tags">
                        {featured.tags.map(t => <span key={t} className="cm-tag">{t}</span>)}
                      </div>
                    )}
                  </div>
                  <span className="cm-featured-cta">
                    <span className="cm-featured-arrow" aria-hidden="true">→</span>
                    <span>Leer comunicado</span>
                  </span>
                </Link>
              </Reveal>
            ) : (
              <p className="cm-empty">No hay comunicados publicados en esta categoría.</p>
            )}

            {/* Lista */}
            {rest.length > 0 && (
              <div className="cm-list">
                {rest.map((c, i) => (
                  <Reveal key={c.slug} delay={i * 40}>
                    <Link href={`/comunicados/${c.slug}`} className="cm-row">
                      <span className="cm-row-num">{String(i + 2).padStart(2, "0")}</span>
                      <span className="cm-row-cat" style={{ color: CAT_COLOR[c.category] }}>{c.category}</span>
                      <span className="cm-row-date">{formatDate(c.date)}</span>
                      <span className="cm-row-title">{c.title}</span>
                      <span className="cm-row-plus" aria-hidden="true">+</span>
                    </Link>
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </div>
        <img src="/images/casos/casos-arch-light.webp" alt="" aria-hidden="true" className="cm-foot-arch" />
      </section>

      <FinalCTA />

      <style>{`
        /* ── Hero ── */
        .cm-hero { position: relative; overflow: hidden; background: ${CS_CREAM}; padding: clamp(48px,6.5vw,92px) 0 clamp(36px,5vw,64px); }
        .cm-hero-arch-l { position: absolute; left: 0; top: 0; height: 100%; width: 22%; object-fit: cover; object-position: left center; opacity: .1; pointer-events: none; transform: scaleX(-1); -webkit-mask-image: linear-gradient(90deg, #000, transparent 85%); mask-image: linear-gradient(90deg, #000, transparent 85%); }
        .cm-hero-arch-r { position: absolute; right: 0; top: 0; height: 100%; width: 34%; object-fit: cover; object-position: right center; opacity: .13; pointer-events: none; -webkit-mask-image: linear-gradient(-90deg, #000, transparent 85%); mask-image: linear-gradient(-90deg, #000, transparent 85%); }
        .cm-crumb { display: flex; align-items: center; gap: 9px; font-family: var(--font-mono, monospace); font-size: 11px; letter-spacing: .12em; text-transform: uppercase; color: ${CS_GRAY}; margin-bottom: 22px; }
        .cm-crumb a { color: ${CS_GRAY}; text-decoration: none; }
        .cm-crumb a:hover { color: ${CS_WINE}; }
        .cm-crumb .is-here { color: ${CS_WINE}; }
        .cm-h1 { font-family: var(--font-serif); font-weight: 400; font-size: clamp(38px,5.6vw,68px); line-height: 1.05; letter-spacing: -0.015em; color: ${CS_BLACK}; max-width: 18ch; margin-bottom: 22px; }
        .cm-h1-em { font-family: var(--font-serif); font-style: italic; color: ${CS_WINE}; }
        .cm-rule { display: block; width: 64px; height: 2px; background: ${CS_GOLD}; margin-bottom: 22px; }
        .cm-lede { font-family: var(--font-sans, system-ui); font-size: clamp(15.5px,1.2vw,17.5px); line-height: 1.65; color: ${CS_GRAY}; max-width: 62ch; }

        /* ── Filtros + contenido ── */
        .cm-main { position: relative; overflow: hidden; background: #FBFAF7; padding: clamp(36px,4.5vw,64px) 0 clamp(48px,6vw,90px); display: grid; grid-template-columns: 250px 1fr; gap: clamp(28px,3.5vw,56px); align-items: start; }
        .cm-main > .rc-wrap { display: contents; }
        .cm-filters { position: relative; overflow: hidden; display: flex; flex-direction: column; gap: 4px; background: ${CS_CREAM}; border: 1px solid ${CS_BORDER}; border-radius: 6px; padding: 10px; position: sticky; top: 100px; }
        .cm-filters-arch { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: .06; pointer-events: none; }
        .cm-filter { position: relative; z-index: 1; display: grid; grid-template-columns: 22px 1fr auto; align-items: center; gap: 10px; width: 100%; padding: 12px 12px; border: none; border-left: 3px solid transparent; background: transparent; border-radius: 4px; cursor: pointer; text-align: left; font-family: var(--font-sans, system-ui); transition: background .2s ease, border-color .2s ease; }
        .cm-filter-icon { color: ${CS_GOLD}; display: grid; place-items: center; }
        .cm-filter-label { font-size: 14.5px; font-weight: 500; color: #1c1c1c; }
        .cm-filter-count { font-family: var(--font-mono, monospace); font-size: 11px; color: ${CS_GRAY}; background: rgba(20,20,20,.06); padding: 2px 7px; border-radius: 10px; }
        .cm-filter:hover { background: #fff; }
        .cm-filter.is-on { background: #fff; border-left-color: ${CS_WINE}; box-shadow: 0 6px 18px rgba(20,20,20,.06); }
        .cm-filter.is-on .cm-filter-label { color: ${CS_WINE}; font-weight: 600; }
        .cm-filter:focus-visible { outline: 2px solid ${CS_GOLD}; outline-offset: 2px; }
        .cm-filters-mobile { display: none; }
        .cm-sr-status { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; }

        .cm-content { grid-column: 2; min-width: 0; }

        /* Destacado */
        .cm-featured { position: relative; display: grid; grid-template-columns: 64px 1fr 150px; gap: clamp(20px,2.6vw,36px); align-items: center; background: #fff; border: 1px solid ${CS_BORDER}; border-left: 3px solid ${CS_WINE}; border-radius: 6px; padding: clamp(24px,2.8vw,36px); text-decoration: none; box-shadow: 0 14px 40px rgba(20,20,20,.05); margin-bottom: clamp(28px,3.2vw,40px); transition: transform .3s ease, box-shadow .3s ease; }
        .cm-featured:hover { transform: translateY(-3px); box-shadow: 0 20px 50px rgba(20,20,20,.08); }
        .cm-featured:focus-visible { outline: 2px solid ${CS_WINE}; outline-offset: 3px; }
        .cm-featured-num { font-family: var(--font-serif); font-size: clamp(38px,4vw,58px); color: ${CS_GOLD}; line-height: 1; }
        .cm-featured-meta { display: flex; align-items: center; gap: 8px; margin-bottom: 14px; font-family: var(--font-mono, monospace); font-size: 11px; letter-spacing: .1em; text-transform: uppercase; }
        .cm-cat { font-weight: 700; }
        .cm-dot { color: ${CS_BORDER}; }
        .cm-date { color: ${CS_GRAY}; }
        .cm-featured-title { font-family: var(--font-serif); font-weight: 400; font-size: clamp(21px,2.2vw,30px); line-height: 1.22; color: ${CS_BLACK}; margin-bottom: 12px; }
        .cm-featured-summary { font-family: var(--font-sans, system-ui); font-size: 14.5px; line-height: 1.6; color: ${CS_GRAY}; max-width: 62ch; margin-bottom: 16px; }
        .cm-tags { display: flex; flex-wrap: wrap; gap: 7px; }
        .cm-tag { font-family: var(--font-mono, monospace); font-size: 10px; letter-spacing: .08em; text-transform: uppercase; color: ${CS_GRAY}; background: ${CS_CREAM}; border: 1px solid ${CS_BORDER}; padding: 4px 9px; border-radius: 2px; }
        .cm-featured-cta { display: flex; flex-direction: column; align-items: center; gap: 10px; text-align: center; }
        .cm-featured-arrow { width: 46px; height: 46px; border-radius: 50%; border: 1px solid ${CS_WINE}; color: ${CS_WINE}; display: grid; place-items: center; font-size: 18px; transition: background .25s ease, color .25s ease, transform .25s ease; }
        .cm-featured:hover .cm-featured-arrow { background: ${CS_WINE}; color: #fff; transform: translateX(3px); }
        .cm-featured-cta span:last-child { font-family: var(--font-sans, system-ui); font-size: 12.5px; font-weight: 600; color: ${CS_WINE}; }

        /* Lista */
        .cm-list { display: flex; flex-direction: column; background: #fff; border: 1px solid ${CS_BORDER}; border-radius: 6px; overflow: hidden; }
        .cm-row { display: grid; grid-template-columns: 34px 150px 110px 1fr 22px; align-items: center; gap: 16px; padding: 18px 20px; text-decoration: none; border-bottom: 1px solid ${CS_BORDER}; transition: background .2s ease, padding-left .2s ease; }
        .cm-row:last-child { border-bottom: none; }
        .cm-row:hover { background: ${CS_CREAM}; padding-left: 24px; }
        .cm-row:focus-visible { outline: 2px solid ${CS_WINE}; outline-offset: -2px; }
        .cm-row-num { font-family: var(--font-mono, monospace); font-size: 12px; color: ${CS_GOLD}; }
        .cm-row-cat { font-family: var(--font-mono, monospace); font-size: 10.5px; letter-spacing: .07em; text-transform: uppercase; font-weight: 700; }
        .cm-row-date { font-family: var(--font-mono, monospace); font-size: 11.5px; color: ${CS_GRAY}; }
        .cm-row-title { font-family: var(--font-sans, system-ui); font-size: 15px; font-weight: 500; color: #1c1c1c; line-height: 1.35; }
        .cm-row-plus { color: ${CS_WINE}; font-size: 18px; text-align: center; transition: transform .2s ease; }
        .cm-row:hover .cm-row-plus { transform: rotate(90deg); }

        .cm-empty { font-family: var(--font-sans, system-ui); font-size: 15px; color: ${CS_GRAY}; padding: 40px 0; }
        .cm-foot-arch { position: absolute; left: 0; bottom: 0; width: 26%; height: 60%; object-fit: cover; object-position: left bottom; opacity: .05; pointer-events: none; -webkit-mask-image: linear-gradient(0deg, #000, transparent 85%); mask-image: linear-gradient(0deg, #000, transparent 85%); }

        /* ── Responsive ── */
        @media (max-width: 1000px) {
          .cm-main { grid-template-columns: 1fr; }
          .cm-content { grid-column: 1; }
          .cm-filters { display: none; }
          .cm-filters-mobile { display: flex; gap: 8px; overflow-x: auto; padding-bottom: 6px; margin-bottom: 24px; -webkit-overflow-scrolling: touch; }
          .cm-pill { flex-shrink: 0; display: inline-flex; align-items: center; gap: 8px; padding: 10px 16px; min-height: 44px; border-radius: 20px; border: 1px solid ${CS_BORDER}; background: #fff; font-family: var(--font-sans, system-ui); font-size: 13px; font-weight: 500; color: #1c1c1c; white-space: nowrap; }
          .cm-pill.is-on { background: ${CS_WINE}; border-color: ${CS_WINE}; color: #fff; }
          .cm-pill-count { font-family: var(--font-mono, monospace); font-size: 10.5px; opacity: .75; }
          .cm-pill:focus-visible { outline: 2px solid ${CS_GOLD}; outline-offset: 2px; }
          .cm-featured { grid-template-columns: 1fr; text-align: left; }
          .cm-featured-num { display: none; }
          .cm-featured-cta { flex-direction: row; justify-content: flex-start; }
          .cm-row { grid-template-columns: 26px 1fr 20px; grid-template-areas: "num cat plus" "num title title" "num date date"; row-gap: 4px; }
          .cm-row-num { grid-area: num; }
          .cm-row-cat { grid-area: cat; }
          .cm-row-date { grid-area: date; }
          .cm-row-title { grid-area: title; }
          .cm-row-plus { grid-area: plus; }
        }
        @media (max-width: 560px) {
          .cm-hero-arch-l, .cm-hero-arch-r { opacity: .05; }
        }
      `}</style>
    </div>
  );
}
