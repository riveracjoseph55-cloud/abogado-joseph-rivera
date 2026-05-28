"use client";
import { useEffect } from "react";

declare global {
  interface Window {
    tiktok?: { embeds?: { loadAll?: () => void } };
  }
}

/**
 * TikTokVideo — embed oficial de TikTok usando blockquote + embed.js.
 * Acepta la URL completa: https://www.tiktok.com/@user/video/ID
 */
export default function TikTokVideo({ url }: { url: string }) {
  const id = url.match(/video\/(\d+)/)?.[1] ?? "";

  useEffect(() => {
    if (!id) return;

    const SCRIPT_ID = "tiktok-embed-js";

    if (!document.getElementById(SCRIPT_ID)) {
      // Primera carga: insertar el script
      const s = document.createElement("script");
      s.id  = SCRIPT_ID;
      s.src = "https://www.tiktok.com/embed.js";
      s.async = true;
      document.body.appendChild(s);
    } else {
      // Script ya existe: pedir que re-procese el DOM
      window.tiktok?.embeds?.loadAll?.();
    }
  }, [id]);

  if (!id) return null;

  return (
    /* El wrapper limita el ancho máximo al estándar de TikTok */
    <div style={{ maxWidth: 325, width: "100%" }}>
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <blockquote
        className="tiktok-embed"
        cite={url}
        data-video-id={id}
        style={{ maxWidth: 325, minWidth: 280 }}
      >
        {/* Fallback visible mientras carga el script */}
        <section>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              height: 80,
              fontFamily: "var(--font-sans, system-ui)",
              fontSize: 14,
              color: "#111",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.28 6.28 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.23 8.23 0 004.81 1.54V6.79a4.85 4.85 0 01-1.04-.1z"/>
            </svg>
            Ver en TikTok →
          </a>
        </section>
      </blockquote>
    </div>
  );
}
