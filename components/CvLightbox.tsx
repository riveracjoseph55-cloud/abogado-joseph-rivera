"use client";
import { useState, useEffect, useRef } from "react";

const GOLD = "#C7A45C";
const WINE = "#7A0808";

type Props = {
  thumb: string;
  full: string;
  download: string;
  alt: string;
};

/**
 * CvLightbox — miniatura del currículo original + modal accesible.
 * La imagen completa (full) solo se carga al abrir el modal.
 * Escape cierra, click en el fondo cierra, foco atrapado entre los controles.
 */
export default function CvLightbox({ thumb, full, download, alt }: Props) {
  const [open, setOpen] = useState(false);
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const dlRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const prevFocus = document.activeElement as HTMLElement | null;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setOpen(false); return; }
      if (e.key === "Tab") {
        const first = closeRef.current, last = dlRef.current;
        if (!first || !last) return;
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      (prevFocus ?? openerRef.current)?.focus?.();
    };
  }, [open]);

  return (
    <>
      <div className="cvlb">
        <button ref={openerRef} type="button" className="cvlb-thumb" onClick={() => setOpen(true)} aria-label="Ver el currículo completo en tamaño grande">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={thumb} alt={alt} width={760} height={760} loading="lazy" decoding="async" />
          <span className="cvlb-hint" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none"><circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.6"/><path d="M11 8v6M8 11h6M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
            Ampliar
          </span>
        </button>
        <div className="cvlb-actions">
          <button type="button" className="cvlb-view" onClick={() => setOpen(true)}>Ver currículo completo <span aria-hidden="true">→</span></button>
          <a className="cvlb-dl" href={download} download>Descargar currículo</a>
        </div>
      </div>

      {open && (
        <div className="cvlb-modal" role="dialog" aria-modal="true" aria-label="Currículo completo del Lic. Joseph Rivera Cheves"
          onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}>
          <div className="cvlb-modal-bar">
            <a ref={dlRef} className="cvlb-modal-dl" href={download} download>Descargar</a>
            <button ref={closeRef} type="button" className="cvlb-close" onClick={() => setOpen(false)} aria-label="Cerrar currículo">✕</button>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="cvlb-full" src={full} alt={alt} onClick={(e) => e.stopPropagation()} />
        </div>
      )}

      <style>{`
        .cvlb { display: flex; flex-direction: column; gap: 14px; }
        .cvlb-thumb { display: block; position: relative; padding: 0; border: 1px solid rgba(199,164,92,.4); border-radius: 4px; overflow: hidden; cursor: pointer; background: #0A0A0A; width: 100%; }
        .cvlb-thumb img { width: 100%; height: auto; display: block; object-fit: contain; }
        .cvlb-thumb:focus-visible { outline: 2px solid ${GOLD}; outline-offset: 3px; }
        .cvlb-hint { position: absolute; right: 10px; bottom: 10px; display: inline-flex; align-items: center; gap: 6px; padding: 6px 12px; background: rgba(10,10,10,.72); color: #fff; font-family: var(--font-sans, system-ui); font-size: 12px; font-weight: 600; border-radius: 3px; border: 1px solid rgba(199,164,92,.4); }
        .cvlb-actions { display: flex; flex-wrap: wrap; gap: 12px; }
        .cvlb-view { min-height: 44px; padding: 11px 20px; background: ${WINE}; color: #fff; border: none; border-radius: 3px; cursor: pointer; font-family: var(--font-sans, system-ui); font-size: 13px; font-weight: 600; display: inline-flex; align-items: center; gap: 8px; transition: background .25s ease, gap .25s ease; }
        .cvlb-view:hover { background: #A20A0A; gap: 12px; }
        .cvlb-view:focus-visible { outline: 2px solid ${GOLD}; outline-offset: 3px; }
        .cvlb-dl { min-height: 44px; padding: 11px 20px; background: transparent; color: #161616; border: 1px solid rgba(20,20,20,.2); border-radius: 3px; text-decoration: none; font-family: var(--font-sans, system-ui); font-size: 13px; font-weight: 600; display: inline-flex; align-items: center; transition: border-color .2s ease, color .2s ease; }
        .cvlb-dl:hover { border-color: ${GOLD}; color: ${WINE}; }
        .cvlb-dl:focus-visible { outline: 2px solid ${GOLD}; outline-offset: 3px; }

        .cvlb-modal { position: fixed; inset: 0; z-index: 200; background: rgba(6,6,6,.92); display: flex; flex-direction: column; align-items: center; justify-content: flex-start; padding: clamp(12px,2vw,28px); overflow: auto; }
        .cvlb-modal-bar { width: 100%; max-width: 1000px; display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; position: sticky; top: 0; }
        .cvlb-modal-dl { color: ${GOLD}; text-decoration: none; font-family: var(--font-sans, system-ui); font-size: 13px; font-weight: 600; padding: 8px 4px; }
        .cvlb-modal-dl:focus-visible { outline: 2px solid ${GOLD}; outline-offset: 3px; }
        .cvlb-close { width: 44px; height: 44px; border-radius: 50%; border: 1px solid rgba(255,255,255,.3); background: rgba(255,255,255,.06); color: #fff; font-size: 18px; cursor: pointer; line-height: 1; }
        .cvlb-close:hover { background: rgba(255,255,255,.14); }
        .cvlb-close:focus-visible { outline: 2px solid ${GOLD}; outline-offset: 3px; }
        .cvlb-full { max-width: min(1000px, 100%); width: 100%; height: auto; object-fit: contain; border-radius: 4px; box-shadow: 0 30px 80px rgba(0,0,0,.6); }
      `}</style>
    </>
  );
}
