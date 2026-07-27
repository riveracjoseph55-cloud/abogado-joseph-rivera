import Link from "next/link";
import Reveal from "@/components/Reveal";
import { RC_PRESS, type PressEntry } from "@/lib/data";

const CS_CREAM   = "#F4F1EB";
const CS_BLACK   = "#0A0A0A";
const CS_CHARCOAL = "#161616";
const CS_WINE    = "#7A0808";
const CS_GOLD    = "#C7A45C";
const CS_BORDER  = "rgba(199,164,92,0.22)";
const CS_CREAM_TXT = "#F3EFE6";

// Fondos arquitectónicos judiciales reales del proyecto — uno distinto por tarjeta.
// La rotación es puramente decorativa (no editorial); si el número de tarjetas
// visibles cambia, el índice simplemente se repite con % length.
const CARD_BACKGROUNDS = [
  { src: "/images/especialidades/derecho-penal.webp", position: "68% 45%" },
  { src: "/images/casos/casos-arch-dark.webp",          position: "72% 40%" },
  { src: "/images/especialidades/casacion-penal.webp",  position: "75% 35%" },
];

function ScaleArc() {
  return (
    <svg className="lcs-arc" viewBox="0 0 200 200" fill="none" aria-hidden="true">
      <path d="M180 20 A 220 220 0 0 1 20 180" stroke={CS_WINE} strokeWidth="1.2" opacity=".55" />
    </svg>
  );
}

type LegalContentCardProps = {
  article: PressEntry;
  index: number;
};

export function LegalContentCard({ article, index }: LegalContentCardProps) {
  const bg = CARD_BACKGROUNDS[index % CARD_BACKGROUNDS.length];
  const isExternal = /^https?:\/\//.test(article.u);
  return (
    <a
      href={article.u}
      target="_blank"
      rel="noopener noreferrer"
      className="lcs-card"
      aria-label={`${article.t} — ${article.medio}, ${article.year}. Leer artículo${isExternal ? " (se abre en una pestaña nueva)" : ""}.`}
    >
      <img
        src={bg.src}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="lcs-card-bg"
        style={{ objectPosition: bg.position }}
      />
      <div className="lcs-card-scrim" aria-hidden="true" />
      <ScaleArc />
      <div className="lcs-card-body">
        <div className="lcs-card-meta">
          <span className="lcs-card-medio">{article.medio}</span>
          <span className="lcs-card-year">{article.year}</span>
        </div>
        <div className="lcs-card-rule" aria-hidden="true" />
        <h3 className="lcs-card-title">{article.t}</h3>
        <span className="lcs-card-link">
          Leer artículo <span aria-hidden="true">→</span>
        </span>
      </div>
    </a>
  );
}

export default function LegalContentSection() {
  // Los 3 artículos más recientes: RC_PRESS ya se mantiene en orden cronológico
  // descendente (igual que consume /prensa), sin selección manual en el JSX.
  const featured = RC_PRESS.slice(0, 3);

  return (
    <section className="lcs" aria-labelledby="lcs-heading">
      <div className="rc-wrap">
        <div className="lcs-head">
          <div>
            <div className="lcs-eyebrow">03 / 04 · Prensa &amp; opinión</div>
            <Reveal>
              <h2 id="lcs-heading" className="lcs-title">
                Contenido <em className="lcs-em">Jurídico</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <Link href="/prensa" className="lcs-all-btn">
              Ver todos <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>

        <div className="lcs-grid">
          {featured.map((article, i) => (
            <Reveal key={article.u} delay={i * 80}>
              <LegalContentCard article={article} index={i} />
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .lcs { background: ${CS_CREAM}; padding: clamp(56px,8vw,120px) 0; }

        .lcs-head {
          display: flex; align-items: flex-end; justify-content: space-between;
          gap: 24px; flex-wrap: wrap; margin-bottom: clamp(36px,4.5vw,64px);
        }
        .lcs-eyebrow {
          font-family: var(--font-mono, monospace); font-size: 12px; font-weight: 600;
          letter-spacing: .2em; text-transform: uppercase; color: ${CS_WINE}; margin-bottom: 16px;
        }
        .lcs-title {
          font-family: var(--font-serif); font-weight: 400; color: ${CS_BLACK};
          font-size: clamp(32px,4.4vw,56px); line-height: 1.04; letter-spacing: -0.015em;
        }
        .lcs-em { font-family: var(--font-serif); font-style: italic; color: ${CS_WINE}; }

        .lcs-all-btn {
          display: inline-flex; align-items: center; gap: 8px; min-height: 44px;
          padding: 0 22px; border: 1px solid ${CS_WINE}; border-radius: 4px;
          color: ${CS_WINE}; text-decoration: none; background: transparent;
          font-family: var(--font-sans, system-ui); font-size: 13.5px; font-weight: 600;
          transition: background .22s ease, color .22s ease;
        }
        .lcs-all-btn:hover { background: ${CS_BLACK}; color: #fff; border-color: ${CS_BLACK}; }
        .lcs-all-btn:focus-visible { outline: 2px solid ${CS_GOLD}; outline-offset: 3px; }

        .lcs-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: clamp(20px,2.2vw,32px); }

        .lcs-card {
          position: relative; display: flex; flex-direction: column; overflow: hidden;
          border-radius: 8px; border: 1px solid ${CS_BORDER}; background: ${CS_CHARCOAL};
          padding: clamp(24px,2.6vw,32px); min-height: 340px;
          text-decoration: none; box-shadow: 0 10px 30px rgba(10,10,10,.16);
          transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
        }
        .lcs-card:hover {
          transform: translateY(-4px);
          border-color: rgba(199,164,92,0.45);
          box-shadow: 0 20px 44px rgba(10,10,10,.24);
        }
        .lcs-card:hover .lcs-card-bg { transform: scale(1.02); }
        .lcs-card:hover .lcs-card-link .lcs-arrow { transform: translateX(3px); }
        .lcs-card:focus-visible { outline: 2px solid ${CS_GOLD}; outline-offset: 3px; }

        .lcs-card-bg {
          position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;
          pointer-events: none; opacity: .55; transition: transform .5s ease, opacity .25s ease;
        }
        .lcs-card-scrim {
          position: absolute; inset: 0; pointer-events: none;
          background: linear-gradient(115deg, ${CS_BLACK} 0%, rgba(10,10,10,.94) 30%, rgba(10,10,10,.55) 62%, rgba(10,10,10,.28) 100%),
                      linear-gradient(0deg, rgba(0,0,0,.5) 0%, transparent 55%);
        }
        .lcs-arc { position: absolute; right: -10px; bottom: -10px; width: 46%; height: 46%; pointer-events: none; }

        .lcs-card-body { position: relative; z-index: 1; display: flex; flex-direction: column; flex: 1; }
        .lcs-card-meta { display: flex; align-items: baseline; justify-content: space-between; gap: 12px; margin-bottom: 10px; }
        .lcs-card-medio {
          font-family: var(--font-mono, monospace); font-size: 11px; font-weight: 600;
          letter-spacing: .14em; text-transform: uppercase; color: #E2857A;
        }
        .lcs-card-year { font-family: var(--font-mono, monospace); font-size: 11px; letter-spacing: .08em; color: ${CS_GOLD}; opacity: .85; }
        .lcs-card-rule { height: 1px; background: rgba(244,241,235,.16); margin-bottom: 22px; }

        .lcs-card-title {
          font-family: var(--font-serif); font-weight: 400; color: ${CS_CREAM_TXT};
          font-size: clamp(18px,1.5vw,21px); line-height: 1.34; flex-grow: 1; margin-bottom: 22px;
        }
        .lcs-card-link {
          margin-top: auto; display: inline-flex; align-items: center; gap: 6px; align-self: flex-start;
          font-family: var(--font-sans, system-ui); font-size: 13.5px; font-weight: 600;
          color: #E2857A; border-bottom: 1px solid rgba(226,133,122,.4); padding-bottom: 2px;
        }

        @media (max-width: 1100px) {
          .lcs-grid { grid-template-columns: repeat(2,1fr); }
        }
        @media (max-width: 720px) {
          .lcs-head { flex-direction: column; align-items: flex-start; }
          .lcs-all-btn { width: 100%; justify-content: center; }
          .lcs-grid { grid-template-columns: 1fr; }
          .lcs-card { min-height: 300px; }
          .lcs-card-bg { opacity: .4; }
        }

        @media (prefers-reduced-motion: reduce) {
          .lcs-card, .lcs-card-bg, .lcs-all-btn { transition: none; }
        }
      `}</style>
    </section>
  );
}
