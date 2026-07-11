"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

/**
 * Toggle de idioma ES | EN, visible en todo el sitio (Navbar).
 * Usa el proxy moderno de Google Translate (*.translate.goog), que traduce
 * el sitio completo y mantiene la navegación dentro de la versión traducida.
 * Detecta si ya estamos en el proxy para ofrecer "volver a español".
 */
const PROXY  = "https://abogadojosephrivera-com.translate.goog";
const ORIGIN = "https://abogadojosephrivera.com";

export default function LangToggle({ compact = false }: { compact?: boolean }) {
  const pathname = usePathname() || "/";
  const [translated, setTranslated] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setTranslated(window.location.hostname.includes("translate.goog"));
    }
  }, []);

  const enHref = `${PROXY}${pathname}?_x_tr_sl=es&_x_tr_tl=en&_x_tr_hl=en`;
  const esHref = `${ORIGIN}${pathname}`;

  return (
    <div
      className={`lang-toggle${compact ? " lang-toggle--compact" : ""}`}
      role="group"
      aria-label="Idioma / Language"
    >
      <svg className="lang-toggle__globe" viewBox="0 0 24 24" width="15" height="15"
        fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3c2.6 2.7 2.6 15.3 0 18M12 3c-2.6 2.7-2.6 15.3 0 18" />
      </svg>
      <a
        href={esHref}
        className={`lang-opt${!translated ? " is-active" : ""}`}
        aria-current={!translated ? "true" : undefined}
        hrefLang="es" lang="es"
        title="Ver el sitio en español"
      >ES</a>
      <span className="lang-toggle__sep" aria-hidden="true">|</span>
      <a
        href={enHref}
        className={`lang-opt${translated ? " is-active" : ""}`}
        aria-current={translated ? "true" : undefined}
        hrefLang="en" lang="en" rel="nofollow"
        title="View this site in English"
      >EN</a>
    </div>
  );
}
