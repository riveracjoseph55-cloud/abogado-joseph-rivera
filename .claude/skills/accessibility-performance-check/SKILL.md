---
name: accessibility-performance-check
description: Checklist de accesibilidad y rendimiento para páginas de abogadojosephrivera.com. Úsala antes de dar por terminada cualquier página nueva. Cubre móvil, contraste, lazy loading, Core Web Vitals, HTML semántico y verificación real con build + curl.
---

# Accessibility & Performance Check

Aplicar antes de commitear una página nueva. Priorizar **Core Web Vitals** y HTML limpio.

## Accesibilidad (a11y)
- **Semántica**: un solo `<h1>`; jerarquía `h2`→`h3` sin saltos; landmarks (`<main>`, `<section aria-label>`, `<nav aria-label>`); listas reales para listas.
- **Imágenes**: `alt` descriptivo y útil (no "imagen"); decorativas con `alt=""`.
- **Controles**: enlaces/botones reales; foco visible (`:focus-visible`); `aria-label` en íconos/embed.
- **Contraste** ≥ AA (4.5:1 texto normal). Verificar acentos rojos sobre fondos.
- **Video**: facade con `<button>` accesible y `title` en el iframe (ver `youtube-embed-ux`).
- `prefers-reduced-motion` respetado (ver `scroll-reveal-animations`).

## Rendimiento / CWV
- **Imágenes**: `next/image` con `sizes` correctos; `priority` SOLO en la imagen LCP (hero); resto `loading="lazy"`. Formatos avif/webp (ya configurado en `next.config.ts`).
- **YouTube**: nunca iframe en el load; facade lite (evita ~1MB de terceros → protege LCP/INP).
- **JS**: mínimo cliente; el resto server components. Sin librerías pesadas innecesarias (no framer-motion si `Reveal` basta).
- **CLS**: dimensiones/`aspect-ratio` en media (evitar saltos). Fuentes con `display:swap` (ya configurado).
- **Fetch**: `preconnect` a dominios de terceros solo si se usan.

## Móvil
- Probar a 375px: sin scroll horizontal, tap targets ≥44px, tipografías fluidas (`clamp`), grids que colapsan a 1 columna.

## Verificación real (obligatoria)
1. `npx tsc --noEmit` y `npx next build` (0 errores).
2. `npx next start -p <port>` + `curl`:
   - `-o /dev/null -w "%{http_code}"` → 200.
   - `grep` del `<title>`, del iframe/facade del video, del JSON-LD y del `alt` de la imagen.
   - `/_next/image?...` de la imagen destacada → 200 (optimización activa).
3. Revisar que la ruta esté en `sitemap.xml`.
