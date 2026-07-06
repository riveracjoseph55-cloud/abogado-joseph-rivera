---
name: interview-landing-page
description: Estructura para construir una página dedicada a una entrevista (TV/podcast/prensa) en abogadojosephrivera.com. Úsala cuando haya que publicar una entrevista con video, resumen editorial, citas y secciones temáticas. Define el esqueleto de secciones, el orden y los enlaces internos.
---

# Interview Landing Page

Ruta sugerida: `app/entrevistas/<slug>/page.tsx` (server component, SSG). Aplica `legal-brand-design-system`.

## Esqueleto de secciones (en orden)
1. **Hero** — kicker mono ("Entrevista · <medio>"), h1 con `rc-em`, dato de programa/conductor/fecha, imagen destacada 16:9 (`next/image`, `priority`), breadcrumb (`Breadcrumbs`).
2. **Video incrustado** — YouTube responsive con facade (ver `youtube-embed-ux`). Título descriptivo + enlace "Ver en <medio>" (fuente/backlink).
3. **Aviso de contenido sensible** (si aplica true crime) — banda discreta, tono respetuoso (ver `editorial-true-crime-layout`).
4. **Resumen editorial** — 3–6 párrafos sobrios que contextualizan la entrevista (usa `RichText` con `**negritas**`). No transcribir literal; sintetizar con dignidad.
5. **Citas destacadas** — 2–4 `blockquote` con la voz del entrevistado (comillas «»), atribuidas.
6. **Secciones temáticas** — bloques con subtítulo + cuerpo (p. ej. "El caso", "La violencia que el sistema ignoró", "Por qué el libro"). Alterna fondos.
7. **Franja del libro** (si se menciona una obra) — `book-feature-strip`, enlaza a la página/comunicado del libro.
8. **Sección del caso** — `case-nadia-peraza-section` u otra, con enlace interno al dossier `/casos/<slug>`.
9. **CTA final** — bloque `--ink`, WhatsApp + contacto.
10. **Enlaces relacionados** — a `/casos/...`, `/comunicados/...`, `/prensa`.

## Datos internos por entrevista
Define un objeto (en el propio archivo o en `lib/data.ts`) con: `slug, title, kicker, program, host, outlet, date (YYYY-MM-DD), youtubeId, sourceUrl, image, summary[], quotes[{text,author}], sections[{eyebrow,title,body[]}], relatedCase, relatedBook`.

## SEO y accesibilidad
- Aplica `seo-schema-legal-media` (Article + VideoObject + BreadcrumbList) y `accessibility-performance-check`.
- Enlaza la página desde `/prensa` y/o la home; enlázala hacia el caso y el libro (linking interno bidireccional).

## Reglas
- Server component + SSG (`generateStaticParams` si es dinámica). Cliente solo para el facade del video.
- Reutiliza `Reveal`, `RichText`, `SchemaOrg`, `Breadcrumbs`, `CTABand`.
- Respeta la fuente: cita al medio y enlaza su publicación original (atribución + backlink mutuo).
