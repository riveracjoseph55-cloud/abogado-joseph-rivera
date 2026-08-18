"use client";
import { useEffect } from "react";

/**
 * The root <html lang="es-CR"> is set once in app/layout.tsx (Next.js App
 * Router only allows one root <html> tag, so per-route overrides aren't
 * possible without splitting the whole app into route-group root layouts).
 * For the few real English pages, this corrects the attribute client-side
 * after mount -- screen readers and browser translate-prompts read the
 * corrected value; the reciprocal hreflang tags (the signal search engines
 * actually use for language targeting) are set properly in each page's own
 * metadata regardless of this.
 */
export default function SetHtmlLang({ lang }: { lang: string }) {
  useEffect(() => {
    const prev = document.documentElement.lang;
    document.documentElement.lang = lang;
    return () => {
      document.documentElement.lang = prev;
    };
  }, [lang]);
  return null;
}
