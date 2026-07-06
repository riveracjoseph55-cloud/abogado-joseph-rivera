---
name: youtube-embed-ux
description: Incrustar videos de YouTube de forma responsive, rápida y accesible en abogadojosephrivera.com. Úsala al añadir cualquier video de YouTube. Implementa un facade (lite-embed) que carga el iframe solo al hacer clic, con contenedor 16:9, lazy loading, título descriptivo y fallback.
---

# YouTube Embed UX (facade / lite-embed)

**No** cargar el `<iframe>` de YouTube en el load inicial (trae ~1MB de JS de terceros y daña LCP/CWV). Usar un **facade**: miniatura + botón play; al hacer clic se inserta el iframe.

## Componente recomendado: `components/LiteYouTube.tsx` (client)
Props: `id` (videoId), `title` (descriptivo, obligatorio para a11y), `poster?` (imagen propia; si no, usar `https://i.ytimg.com/vi/<id>/hqdefault.jpg`).

Comportamiento:
- Contenedor **16:9** con `aspect-ratio: 16 / 9; width:100%`.
- Estado inicial: `<button>` con `background-image` del poster, ícono play centrado, `aria-label="Reproducir: <title>"`.
- Al hacer clic (o Enter/Espacio): renderiza
  `<iframe src="https://www.youtube-nocookie.com/embed/<id>?autoplay=1&rel=0" title="<title>" loading="lazy" allow="accelerator; autoplay; encrypted-media; picture-in-picture" allowfullscreen frameborder="0">`.
- Usar dominio **youtube-nocookie.com** (privacidad, coherente con el banner de cookies del sitio).
- Precargar solo la miniatura (`<img loading="lazy">` o `background-image`); no scripts de terceros hasta el clic.

## Accesibilidad
- El botón es un control real (`<button>`), foco visible, `aria-label` con el título del video.
- `title` del iframe descriptivo y único.
- Contraste del ícono play sobre la miniatura (overlay oscuro `rgba(0,0,0,.35)`).

## Fallback
- Si el video no carga o el usuario prefiere: enlace de texto "Ver en YouTube" hacia `https://www.youtube.com/watch?v=<id>` y/o hacia la fuente del medio.

## Marca
- El botón/overlay usa el rojo de marca `var(--r)` en el ícono play o su aro; nada de rojo YouTube saturado si choca con la estética. Bordes rectos, coherentes con el sitio.

## Video principal de referencia
- Entrevista Canal Opa (#NoTanCristiana): `id = eavyxcMT7Ww` — `https://www.youtube.com/watch?v=eavyxcMT7Ww`.
