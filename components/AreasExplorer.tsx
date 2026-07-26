"use client";
import { useState, useEffect, useRef, ReactNode } from "react";
import Link from "next/link";
import { RC_AREAS } from "@/lib/data";

// ── Paleta editorial ──────────────────────────────────────────────
const WINE = "#7A0808";
const RED = "#A20A0A";
const GOLD = "#C7A45C";

// ── Íconos por área ───────────────────────────────────────────────
const ICONS: Record<string, ReactNode> = {
  scale: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
      <path d="M12 3v16M5 21h14M6 8h12M6 8 3.5 13.5a3.2 3.2 0 0 0 6.5 0L7.5 8M17.5 8 15 13.5a3.2 3.2 0 0 0 6.5 0L18.5 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
      <path d="M12 3 5 6v5c0 4.4 3 7.6 7 9 4-1.4 7-4.6 7-9V6l-7-3Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
      <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  building: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
      <path d="M4 21V6l8-3 8 3v15" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
      <path d="M4 21h16M9 9h.01M12 9h.01M15 9h.01M9 13h.01M12 13h.01M15 13h.01M10 21v-4h4v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  ),
  people: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
      <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M3.5 20c.5-3.3 2.8-5 5.5-5s5 1.7 5.5 5M16 6.2a3 3 0 0 1 0 5.6M20.5 20c-.3-2-1.3-3.4-2.9-4.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  ),
  pen: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
      <path d="M14 4 4 14l-1 5 5-1L18 8M14 4l4 4M14 4l2.5-2.5a1.8 1.8 0 0 1 2.5 2.5L16.5 6.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  globe: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M3 12h18M12 3c2.6 2.4 4 5.6 4 9s-1.4 6.6-4 9c-2.6-2.4-4-5.6-4-9s1.4-6.6 4-9Z" stroke="currentColor" strokeWidth="1.4"/>
    </svg>
  ),
  temple: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
      <path d="M12 3 3 8h18l-9-5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
      <path d="M5 11v7M9.5 11v7M14.5 11v7M19 11v7M3 21h18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  ),
};

// **negrita** → <strong>
function rich(text: string): ReactNode[] {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part
  );
}

type Props = { variant?: "homepage" | "full" };

export default function AreasExplorer({ variant = "full" }: Props) {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState<number | null>(0);
  const [isMobile, setIsMobile] = useState(false);
  const [reduce, setReduce] = useState(false);
  const btnRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 900);
    check();
    window.addEventListener("resize", check);
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduce(mq.matches);
    const onMq = () => setReduce(mq.matches);
    mq.addEventListener?.("change", onMq);
    return () => {
      window.removeEventListener("resize", check);
      mq.removeEventListener?.("change", onMq);
    };
  }, []);

  const a = RC_AREAS[active] ?? RC_AREAS[0];
  const N = RC_AREAS.length;
  const anim = reduce ? "none" : "aex-in .32s ease-out";

  const onKey = (e: React.KeyboardEvent, i: number) => {
    let next = -1;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") next = (i + 1) % N;
    else if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = (i - 1 + N) % N;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = N - 1;
    if (next >= 0) {
      e.preventDefault();
      setActive(next);
      btnRefs.current[next]?.focus();
    }
  };

  // ── Móvil: acordeón ──────────────────────────────────────────────
  if (isMobile) {
    return (
      <div className={`aex aex--${variant}`}>
        <div className="aex-macc-wrap">
          {RC_AREAS.map((area, i) => {
            const isOpen = open === i;
            return (
              <div key={area.slug} className="aex-macc">
                <button
                  className={`aex-mrow${isOpen ? " is-on" : ""}`}
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="aex-mrow-num">{area.n}</span>
                  <span className="aex-mrow-title">{area.t}</span>
                  <span className="aex-mrow-icon" aria-hidden="true">{ICONS[area.icon]}</span>
                  <span className="aex-mrow-plus" aria-hidden="true">{isOpen ? "–" : "+"}</span>
                </button>
                <div className={`aex-mpanel${isOpen ? " is-open" : ""}`}>
                  <div className="aex-mpanel-in">
                    <div className="aex-mmedia">
                      <img src={area.image} alt={`Ilustración de ${area.t}`} loading="lazy" decoding="async" />
                      <span className="aex-mmedia-scrim" aria-hidden="true" />
                      <span className="aex-mmedia-num" aria-hidden="true">{area.n}</span>
                    </div>
                    <p className="aex-desc">{rich(area.d)}</p>
                    <div className="aex-tags">
                      {area.items.slice(0, 4).map((it) => <span key={it} className="aex-tag">{it}</span>)}
                    </div>
                    <Link href={`/especialidades/${area.slug}`} className="aex-cta">
                      Ver servicio completo <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {variant === "homepage" && (
          <Link href="/especialidades" className="aex-allbtn">Ver todas las áreas <span aria-hidden="true">→</span></Link>
        )}
        <ExplorerStyle />
      </div>
    );
  }

  // ── Escritorio: lista + panel ────────────────────────────────────
  return (
    <div className={`aex aex--${variant}`}>
      <div className="aex-grid">
        {/* Lista */}
        <div className="aex-list" role="tablist" aria-label="Áreas de especialización" aria-orientation="vertical">
          {RC_AREAS.map((area, i) => {
            const on = active === i;
            return (
              <button
                key={area.slug}
                ref={(el) => { btnRefs.current[i] = el; }}
                role="tab"
                aria-selected={on}
                tabIndex={on ? 0 : -1}
                className={`aex-item${on ? " is-on" : ""}`}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onKeyDown={(e) => onKey(e, i)}
              >
                <span className="aex-item-num">{area.n}</span>
                <span className="aex-item-title">{area.t}</span>
                <span className="aex-item-icon" aria-hidden="true">{ICONS[area.icon]}</span>
                <span className="aex-item-arrow" aria-hidden="true">→</span>
              </button>
            );
          })}
        </div>

        {/* Panel */}
        <div className="aex-panel" role="tabpanel" aria-label={a.t}>
          <div className="aex-media">
            {RC_AREAS.map((area, i) => (
              <img
                key={area.slug}
                src={area.image}
                alt={active === i ? `Ilustración de ${area.t}` : ""}
                aria-hidden={active === i ? undefined : true}
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
                className={`aex-media-img${active === i ? " is-on" : ""}`}
                style={{ transition: reduce ? "none" : "opacity .34s ease" }}
              />
            ))}
            <span className="aex-media-scrim" aria-hidden="true" />
          </div>
          <span className="aex-panel-num" aria-hidden="true" key={`num-${active}`} style={{ animation: anim }}>{a.n}</span>

          <div className="aex-panel-in" key={`in-${active}`} style={{ animation: anim }}>
            <div className="aex-eyebrow">Área {a.n} / {String(N).padStart(2, "0")}</div>
            <h3 className="aex-title">
              {a.pre}<em className="aex-title-em">{a.em}</em>{a.post}
            </h3>
            <span className="aex-rule" aria-hidden="true" />
            <p className="aex-desc">{rich(a.d)}</p>
            <div className="aex-tags">
              {a.items.slice(0, variant === "homepage" ? 4 : 5).map((it) => (
                <span key={it} className="aex-tag">{it}</span>
              ))}
            </div>
            <div className="aex-actions">
              <Link href={`/especialidades/${a.slug}`} className="aex-cta">
                Ver servicio completo <span aria-hidden="true">→</span>
              </Link>
              {variant === "full" && (
                <a href="#area-detalle" className="aex-more">
                  <span className="aex-more-ic" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="15" height="15" fill="none"><path d="M12 4v11m0 0 4-4m-4 4-4-4M5 19h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  Más información
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {variant === "homepage" && (
        <div className="aex-foot" aria-hidden="true">
          <span className="aex-foot-line" />
          <svg width="22" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 3v16M5 21h14M6 8h12M6 8 3.5 13.5a3.2 3.2 0 0 0 6.5 0L7.5 8M17.5 8 15 13.5a3.2 3.2 0 0 0 6.5 0L18.5 8" stroke={GOLD} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <span className="aex-foot-line" />
        </div>
      )}

      <ExplorerStyle />
    </div>
  );
}

function ExplorerStyle() {
  return (
    <style>{`
      @keyframes aex-in { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
      .aex-grid { display: grid; grid-template-columns: 34% 66%; gap: clamp(18px,1.6vw,28px); align-items: stretch; }

      /* Lista */
      .aex-list { display: flex; flex-direction: column; border: 1px solid ${'rgba(20,20,20,0.12)'}; border-radius: 4px; overflow: hidden; background: #FBFAF7; }
      .aex-item {
        display: grid; grid-template-columns: 42px 1fr 26px 18px; align-items: center; gap: 12px;
        width: 100%; text-align: left; cursor: pointer; border: none; background: transparent;
        padding: clamp(14px,1.5vw,20px) clamp(14px,1.4vw,22px);
        border-bottom: 1px solid rgba(20,20,20,0.09); position: relative;
        transition: background .28s ease, color .28s ease;
        font-family: inherit;
      }
      .aex-item:last-child { border-bottom: none; }
      .aex-item::before { content: ""; position: absolute; left: 0; top: 0; bottom: 0; width: 3px; background: ${RED}; transform: scaleY(0); transition: transform .28s ease; }
      .aex-item-num { font-family: var(--font-mono, monospace); font-size: 12px; letter-spacing: .06em; color: ${GOLD}; }
      .aex-item-title { font-family: var(--font-serif); font-size: clamp(15px,1.15vw,18px); line-height: 1.2; color: #0A0A0A; }
      .aex-item-icon { color: ${GOLD}; display: grid; place-items: center; }
      .aex-item-arrow { color: rgba(20,20,20,.25); text-align: right; font-size: 15px; transition: transform .28s ease, color .28s ease; }
      .aex-item:hover { background: #F4F1EB; }
      .aex-item:focus-visible { outline: 2px solid ${WINE}; outline-offset: -2px; }
      .aex-item.is-on { background: ${WINE}; }
      .aex-item.is-on::before { transform: scaleY(1); }
      .aex-item.is-on .aex-item-num { color: rgba(255,255,255,.65); }
      .aex-item.is-on .aex-item-title { color: #fff; }
      .aex-item.is-on .aex-item-icon { color: ${GOLD}; }
      .aex-item.is-on .aex-item-arrow { color: #fff; transform: translateX(3px); }

      /* Panel */
      .aex-panel {
        position: relative; overflow: hidden; border: 1px solid rgba(199,164,92,.4); border-radius: 4px;
        background: linear-gradient(120deg, #0A0A0A 0%, #111 100%);
        min-height: 480px; display: flex; box-shadow: 0 24px 60px rgba(0,0,0,.18);
      }
      .aex--homepage .aex-panel { min-height: 420px; }
      .aex-media { position: absolute; inset: 0 0 0 34%; z-index: 0; }
      .aex-media-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0; }
      .aex-media-img.is-on { opacity: 1; }
      .aex-media-scrim { position: absolute; inset: 0; background: linear-gradient(90deg, #0A0A0A 8%, rgba(10,10,10,.72) 38%, rgba(10,10,10,.15) 72%, rgba(10,10,10,.4) 100%); }
      .aex-panel-num {
        position: absolute; right: 3%; bottom: -6%; z-index: 1; pointer-events: none;
        font-family: var(--font-serif); font-weight: 400; font-size: clamp(180px,17vw,300px); line-height: .8;
        color: rgba(255,255,255,.05);
      }
      .aex-panel-in {
        position: relative; z-index: 2; align-self: center;
        padding: clamp(28px,3vw,52px); max-width: 60%;
      }
      .aex--homepage .aex-panel-in { padding: clamp(26px,2.6vw,44px); }
      .aex-eyebrow { font-family: var(--font-mono, monospace); font-size: 11px; letter-spacing: .18em; text-transform: uppercase; color: ${GOLD}; margin-bottom: 18px; }
      .aex-title {
        font-family: var(--font-serif); font-weight: 400; color: #FBF9F4; line-height: 1.06; letter-spacing: -0.01em;
        font-size: clamp(28px,2.9vw,48px); margin-bottom: 20px;
      }
      .aex--homepage .aex-title { font-size: clamp(26px,2.5vw,40px); }
      .aex-title-em { font-family: var(--font-serif); font-style: italic; color: ${RED}; }
      .aex-rule { display: block; width: 64px; height: 2px; background: ${GOLD}; margin-bottom: 20px; }
      .aex-desc { font-family: var(--font-sans, system-ui); font-size: clamp(14px,1.05vw,16px); line-height: 1.62; color: rgba(255,255,255,.68); max-width: 42ch; margin-bottom: 24px; }
      .aex-desc strong { color: #fff; font-weight: 600; }
      .aex-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 26px; }
      .aex-tag {
        font-family: var(--font-sans, system-ui); font-size: 11.5px; letter-spacing: .01em; color: rgba(255,255,255,.85);
        padding: 6px 12px; border: 1px solid rgba(199,164,92,.42); border-radius: 3px; background: rgba(199,164,92,.05);
      }
      .aex-actions { display: flex; flex-wrap: wrap; align-items: center; gap: 14px 22px; }
      .aex-cta {
        display: inline-flex; align-items: center; gap: 9px; min-height: 48px; padding: 12px 24px;
        background: ${WINE}; color: #fff; text-decoration: none; border-radius: 3px;
        font-family: var(--font-sans, system-ui); font-size: 13px; font-weight: 600; letter-spacing: .01em;
        transition: background .25s ease, gap .25s ease;
      }
      .aex-cta:hover { background: ${RED}; gap: 13px; }
      .aex-cta:focus-visible { outline: 2px solid ${GOLD}; outline-offset: 3px; }
      .aex-more { display: inline-flex; align-items: center; gap: 8px; color: rgba(255,255,255,.7); text-decoration: none; font-family: var(--font-sans, system-ui); font-size: 13px; font-weight: 500; transition: color .2s ease; }
      .aex-more-ic { width: 30px; height: 30px; border-radius: 50%; display: grid; place-items: center; border: 1px solid rgba(199,164,92,.4); color: ${GOLD}; }
      .aex-more:hover { color: #fff; }
      .aex-more:focus-visible { outline: 2px solid ${GOLD}; outline-offset: 3px; }

      .aex-foot { display: flex; align-items: center; justify-content: center; gap: 16px; margin-top: clamp(28px,3vw,44px); }
      .aex-foot-line { height: 1px; width: clamp(80px,22vw,320px); background: linear-gradient(90deg, rgba(199,164,92,0), ${GOLD}); }
      .aex-foot-line:last-child { background: linear-gradient(90deg, ${GOLD}, rgba(199,164,92,0)); }
      .aex-allbtn { display: none; }

      /* Móvil */
      .aex-macc-wrap { border: 1px solid rgba(20,20,20,0.12); border-radius: 4px; overflow: hidden; background: #FBFAF7; }
      .aex-macc { border-bottom: 1px solid rgba(20,20,20,0.09); }
      .aex-macc:last-child { border-bottom: none; }
      .aex-mrow {
        display: grid; grid-template-columns: 38px 1fr 24px 22px; align-items: center; gap: 12px;
        width: 100%; text-align: left; cursor: pointer; border: none; background: transparent;
        padding: 18px 18px; position: relative; font-family: inherit;
      }
      .aex-mrow-num { font-family: var(--font-mono, monospace); font-size: 12px; color: ${GOLD}; }
      .aex-mrow-title { font-family: var(--font-serif); font-size: 17px; line-height: 1.2; color: #0A0A0A; }
      .aex-mrow-icon { color: ${GOLD}; display: grid; place-items: center; }
      .aex-mrow-plus { font-size: 22px; color: ${WINE}; text-align: right; line-height: 1; }
      .aex-mrow.is-on { background: ${WINE}; }
      .aex-mrow.is-on .aex-mrow-num { color: rgba(255,255,255,.6); }
      .aex-mrow.is-on .aex-mrow-title { color: #fff; }
      .aex-mrow.is-on .aex-mrow-plus { color: #fff; }
      .aex-mrow:focus-visible { outline: 2px solid ${GOLD}; outline-offset: -2px; }
      .aex-mpanel { max-height: 0; overflow: hidden; transition: max-height .4s ease; background: #0A0A0A; }
      .aex-mpanel.is-open { max-height: 760px; }
      .aex-mpanel-in { padding: 18px; }
      .aex-mmedia { position: relative; width: 100%; aspect-ratio: 16/9; border-radius: 3px; overflow: hidden; margin-bottom: 18px; }
      .aex-mmedia img { width: 100%; height: 100%; object-fit: cover; display: block; }
      .aex-mmedia-scrim { position: absolute; inset: 0; background: linear-gradient(180deg, transparent 40%, rgba(10,10,10,.5)); }
      .aex-mmedia-num { position: absolute; right: 10px; bottom: 2px; font-family: var(--font-serif); font-size: 64px; line-height: 1; color: rgba(255,255,255,.14); }
      .aex-mpanel .aex-desc { color: rgba(255,255,255,.72); max-width: none; }
      .aex-allbtn {
        display: inline-flex; align-items: center; gap: 9px; margin-top: 20px; min-height: 48px;
        padding: 13px 24px; background: transparent; border: 1px solid ${GOLD}; border-radius: 3px;
        color: #161616; text-decoration: none; font-family: var(--font-sans, system-ui); font-size: 13px; font-weight: 600;
      }

      @media (prefers-reduced-motion: reduce) {
        .aex-item, .aex-item::before, .aex-item-arrow, .aex-cta, .aex-media-img, .aex-mpanel { transition: none !important; }
      }
    `}</style>
  );
}
