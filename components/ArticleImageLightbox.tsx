"use client";
import { useEffect, useRef, useState } from "react";

const GOLD = "#C7A45C";

type Props = {
  src: string;
  alt: string;
  objectPosition?: string;
};

/**
 * ArticleImageLightbox — imagen principal de un artículo con ampliación accesible.
 * Click/Enter abre un modal a pantalla completa (Escape o backdrop cierran, foco atrapado).
 */
export default function ArticleImageLightbox({ src, alt, objectPosition = "center" }: Props) {
  const [open, setOpen] = useState(false);
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      openerRef.current?.focus();
    };
  }, [open]);

  return (
    <>
      <button ref={openerRef} type="button" className="ail-btn" onClick={() => setOpen(true)} aria-label={`Ampliar imagen: ${alt}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} loading="eager" decoding="async" style={{ objectPosition }} />
        <span className="ail-zoom" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="17" height="17" fill="none"><circle cx="11" cy="11" r="7" stroke="#fff" strokeWidth="1.7"/><path d="M11 8v6M8 11h6M20 20l-3.5-3.5" stroke="#fff" strokeWidth="1.7" strokeLinecap="round"/></svg>
        </span>
      </button>

      {open && (
        <div className="ail-modal" role="dialog" aria-modal="true" aria-label={alt} onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}>
          <button ref={closeRef} type="button" className="ail-close" onClick={() => setOpen(false)} aria-label="Cerrar imagen">✕</button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="ail-full" src={src} alt={alt} />
        </div>
      )}

      <style>{`
        .ail-btn { position: relative; display: block; width: 100%; padding: 0; border: none; cursor: pointer; background: #0d0d0d; }
        .ail-btn img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .ail-btn:focus-visible { outline: 2px solid ${GOLD}; outline-offset: 3px; }
        .ail-zoom { position: absolute; right: 14px; bottom: 14px; width: 40px; height: 40px; border-radius: 50%; background: rgba(10,10,10,.62); display: grid; place-items: center; border: 1px solid rgba(199,164,92,.5); }
        .ail-modal { position: fixed; inset: 0; z-index: 200; background: rgba(6,6,6,.94); display: flex; align-items: center; justify-content: center; padding: clamp(16px,3vw,40px); }
        .ail-full { max-width: 100%; max-height: 100%; object-fit: contain; box-shadow: 0 30px 80px rgba(0,0,0,.6); border-radius: 3px; }
        .ail-close { position: absolute; top: 18px; right: 18px; width: 44px; height: 44px; border-radius: 50%; border: 1px solid rgba(255,255,255,.3); background: rgba(255,255,255,.06); color: #fff; font-size: 18px; cursor: pointer; }
        .ail-close:hover { background: rgba(255,255,255,.14); }
        .ail-close:focus-visible { outline: 2px solid ${GOLD}; outline-offset: 3px; }
      `}</style>
    </>
  );
}
