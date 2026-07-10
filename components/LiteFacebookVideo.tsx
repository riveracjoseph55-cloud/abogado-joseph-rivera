"use client";
import { useState } from "react";

/**
 * LiteFacebookVideo — facade para videos de Facebook (skill: youtube-embed-ux).
 * No carga el iframe de Facebook hasta el clic: protege LCP/INP y privacidad.
 * Reutiliza las clases .lite-yt (contenedor 16:9 + botón accesible).
 *
 * Si el plugin de Facebook no lograra renderizar el video (permisos/URL),
 * el enlace "Ver en Facebook" de la página sigue funcionando como fallback.
 */
export default function LiteFacebookVideo({
  url,
  title,
  poster,
}: {
  url: string;     // permalink público del video de Facebook
  title: string;   // título descriptivo (a11y)
  poster: string;  // imagen propia (miniatura)
}) {
  const [play, setPlay] = useState(false);
  const embed =
    `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}` +
    `&show_text=false&autoplay=true`;

  return (
    <div className="lite-yt">
      {play ? (
        <iframe
          className="lite-yt__frame"
          src={embed}
          title={title}
          loading="lazy"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen
          scrolling="no"
        />
      ) : (
        <button
          type="button"
          className="lite-yt__btn"
          onClick={() => setPlay(true)}
          aria-label={`Reproducir video: ${title}`}
        >
          <img
            className="lite-yt__poster"
            src={poster}
            alt=""
            loading="lazy"
            decoding="async"
          />
          <span className="lite-yt__scrim" aria-hidden="true" />
          <span className="lite-yt__play" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="34" height="34" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
