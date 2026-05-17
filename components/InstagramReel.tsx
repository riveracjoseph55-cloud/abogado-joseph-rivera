"use client";
import Script from "next/script";

type Props = {
  url: string;       // ej: https://www.instagram.com/reel/XXXXXX/
  caption?: boolean; // muestra el caption del reel
};

/**
 * Embed oficial de Instagram Reels.
 * El script de Instagram convierte el <blockquote> en un iframe interactivo.
 * Usamos strategy="lazyOnload" para que no bloquee el LCP.
 */
export default function InstagramReel({ url, caption = false }: Props) {
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
            display: "block",
            padding: "32px 24px",
            background: "linear-gradient(135deg,#7e0102 0%,#5a0001 100%)",
            color: "#fff",
            textAlign: "center",
            fontFamily: "var(--font-sans, system-ui)",
            textDecoration: "none",
            minHeight: 320,
            aspectRatio: "9/16",
          }}
        >
          <div style={{ fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", opacity: .7, marginBottom: 16 }}>
            Instagram · @josephriveraabogado
          </div>
          <div style={{ fontSize: 18, fontWeight: 500, marginBottom: 24 }}>
            Ver Reel en Instagram →
          </div>
          <div style={{ fontSize: 12, opacity: .6 }}>
            Si el reel no carga, haga click aquí para abrirlo
          </div>
        </a>
      </blockquote>
      <Script
        async
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
      />
    </div>
  );
}
