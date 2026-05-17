"use client";
import Script from "next/script";
import { useEffect } from "react";

type Props = {
  url: string;       // ej: https://www.instagram.com/reel/XXXXXX/
  caption?: boolean;
};

/**
 * Embed oficial de Instagram Reels.
 * - Strategy: afterInteractive (no bloquea LCP pero carga rápido)
 * - useEffect: forzar process() del script si ya estaba cargado
 * - Fallback compacto si IG no carga (no rectángulo gigante)
 */
export default function InstagramReel({ url, caption = false }: Props) {
  useEffect(() => {
    // Reintenta el procesamiento del embed cuando el componente monta
    const id = setInterval(() => {
      // @ts-expect-error - window.instgrm is injected by Instagram embed.js script
      if (typeof window !== "undefined" && window.instgrm?.Embeds?.process) {
        // @ts-expect-error - same as above, instgrm global from embed.js
        window.instgrm.Embeds.process();
        clearInterval(id);
      }
    }, 500);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        {...(caption ? { "data-instgrm-captioned": "" } : {})}
        style={{
          background: "#FFF",
          border: 0,
          borderRadius: 0,
          boxShadow: "0 12px 48px rgba(0,0,0,.12)",
          margin: 0,
          maxWidth: 540,
          minWidth: 280,
          padding: 0,
          width: "100%",
        }}
      >
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px 24px",
            background: "linear-gradient(135deg,#7e0102 0%,#5a0001 100%)",
            color: "#fff",
            textAlign: "center",
            fontFamily: "var(--font-sans, system-ui)",
            textDecoration: "none",
            minHeight: 200,
            gap: 12,
          }}
        >
          <div style={{ fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", opacity: .7 }}>
            Instagram · @josephriveraabogado
          </div>
          <div style={{ fontSize: 18, fontWeight: 500 }}>
            Ver Reel en Instagram →
          </div>
        </a>
      </blockquote>
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="afterInteractive"
      />
    </div>
  );
}
