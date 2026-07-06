---
name: seo-schema-legal-media
description: SEO técnico y datos estructurados para páginas de entrevista/medios en abogadojosephrivera.com. Úsala al crear páginas de entrevista o cobertura. Añade title, meta description, Open Graph, y JSON-LD Article + VideoObject + BreadcrumbList vía los helpers de lib/seo.ts.
---

# SEO Schema — Legal Media / Entrevistas

Usa los helpers y constantes de `@/lib/seo` (`SITE_URL`, `SITE_NAME`, `OG_IMAGE`, `AUTHOR`, y helpers de schema). Mantén los títulos con `title.absolute` para evitar duplicar la marca (la plantilla raíz ya añade "| Rivera Cheves & Asociados").

## generateMetadata
- `title`: `{ absolute: "<título SEO ≤60 chars>" }` con keyword + entidad (ej. "Entrevista Joseph Rivera — Caso Nadia Peraza | Canal Opa").
- `description`: 150–160 chars, con medio, tema y entidad.
- `alternates.canonical`: `${SITE_URL}/entrevistas/<slug>`.
- `openGraph`: `type:"article"`, `url`, `title`, `description`, `publishedTime`, `authors:[AUTHOR]`, `images:[{url: imagen destacada, width, height, alt}]`.
- `twitter`: `summary_large_image`.
- `keywords`: entidad + medio + tema (ej. "entrevista joseph rivera", "caso nadia peraza", "canal opa", "no tan cristiana").

## JSON-LD (via `<SchemaOrg data={...} />`)
1. **Article** (o NewsArticle): `headline`, `description`, `datePublished`, `author` (Person = AUTHOR, `/quien`), `publisher` (Organization con logo `/images/icon-512.png` 512×512), `image`, `mainEntityOfPage`, e `isBasedOn`/`sameAs` → URL de la fuente del medio (backlink mutuo, p. ej. genteopa.com).
2. **VideoObject**: `name`, `description`, `thumbnailUrl` (`https://i.ytimg.com/vi/<id>/hqdefault.jpg`), `uploadDate`, `embedUrl` (`https://www.youtube-nocookie.com/embed/<id>`), `contentUrl`/`url` (`https://www.youtube.com/watch?v=<id>`), `publisher`.
3. **BreadcrumbList**: Inicio → Prensa → <título>. Reutiliza el patrón de `schemaBreadcrumbComunicado` o el componente `Breadcrumbs` (ya emite BreadcrumbList).

## Añadir helpers a `lib/seo.ts` si faltan
- `schemaInterviewArticle({...})` y `schemaVideoObject({...})` siguiendo el estilo de `schemaPressRelease`. Reutilizar `AUTHOR`, `SITE_URL`, `SITE_NAME`.

## Registro
- Añadir la ruta a `app/sitemap.ts` (prioridad ~0.8, `changeFrequency: "monthly"`).
- Enlaces internos entrantes (home/prensa) y salientes (caso, libro) para reparto de autoridad.
