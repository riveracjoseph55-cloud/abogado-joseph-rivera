"use client";
import { useState } from "react";

/**
 * LiteYouTube — facade de YouTube para rendimiento (skill: youtube-embed-ux).
 * No carga el iframe (~1MB de terceros) hasta el clic: protege LCP/INP.
 * Contenedor 16:9, miniatura lazy, botón accesible y youtube-nocookie.
 */
export default function LiteYouTube({
  id,
  title,
  poster,
}: {
  id: string;
  title: string;
  poster?: string;
}) {
  const [play, setPlay] = useState(false);

  return (
    <div className="lite-yt">
      {play ? (
        <iframe
          className="lite-yt__frame"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
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
            src={poster ?? `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
            onError={(e) => {
              const img = e.currentTarget;
              if (!img.dataset.fallback) {
                img.dataset.fallback = "1";
                img.src = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
              }
            }}
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
