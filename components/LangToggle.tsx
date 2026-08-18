"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

/**
 * Toggle de idioma ES | EN, visible en todo el sitio (Navbar).
 * La mayoría de rutas solo tienen traducción automática vía el proxy de
 * Google Translate (*.translate.goog, con rel="nofollow" -- no es contenido
 * indexable). Las pocas rutas con página EN nativa real (ver NATIVE_EN_ROUTES)
 * enlazan directo a esa página, sin proxy ni nofollow.
 */
const PROXY  = "https://abogadojosephrivera-com.translate.goog";
const ORIGIN = "https://abogadojosephrivera.com";

const NATIVE_EN_ROUTES: Record<string, string> = {
  "/": "/en",
  "/casos/carla-stefaniak": "/en/casos/carla-stefaniak",
};
const NATIVE_ES_ROUTES: Record<string, string> = {
  "/en": "/",
  "/en/casos/carla-stefaniak": "/casos/carla-stefaniak",
};

export default function LangToggle({ compact = false }: { compact?: boolean }) {
  const pathname = usePathname() || "/";
  const [translatedProxy, setTranslatedProxy] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setTranslatedProxy(window.location.hostname.includes("translate.goog"));
    }
  }, []);

  const nativeEsTarget = NATIVE_ES_ROUTES[pathname];
  const nativeEnTarget = NATIVE_EN_ROUTES[pathname];
  const onNativeEn = nativeEsTarget !== undefined;
  const enIsNative = onNativeEn || nativeEnTarget !== undefined;
  const translated = onNativeEn || translatedProxy;

  const esHref = onNativeEn ? nativeEsTarget : `${ORIGIN}${pathname}`;
  const enHref = onNativeEn
    ? pathname
    : nativeEnTarget ?? `${PROXY}${pathname}?_x_tr_sl=es&_x_tr_tl=en&_x_tr_hl=en`;

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
        hrefLang="en" lang="en"
        rel={enIsNative ? undefined : "nofollow"}
        title="View this site in English"
      >EN</a>
    </div>
  );
}
