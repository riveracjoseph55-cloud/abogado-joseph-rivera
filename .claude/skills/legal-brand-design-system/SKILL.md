---
name: legal-brand-design-system
description: Sistema de diseño de marca para abogadojosephrivera.com (bufete penalista Rivera Cheves). Úsalo SIEMPRE al crear o editar cualquier página/sección para mantener una estética legal, sobria, elegante y editorial. Define tokens de color, tipografía, jerarquía, espaciado y estilos de CTA, y prohíbe la estética amarillista/sensacionalista.
---

# Legal Brand Design System — Rivera Cheves & Asociados

Estética objetivo: **editorial-legal, sobria, premium**. Nunca sensacionalista, nunca "clickbait", nunca colores estridentes fuera de la marca.

## Tokens (definidos en `app/globals.css`)
- Tinta / texto fuerte: `var(--ink)` (#0d0d0d). Rojo de marca (acento único): `var(--r)` (#7e0102), `var(--r-deep)` (#5a0001), tinte `var(--r-tint)`.
- Fondos: `var(--paper)`, `var(--paper-2)` (#f3eee5), blanco `#fff`.
- Texto: `var(--fg-2)`…`var(--fg-5)` (de más oscuro a más tenue). Líneas: `var(--hairline)`, `var(--hairline-strong)`.
- Tipografías: `var(--font-sans)` (Manrope) para títulos/cuerpo; `var(--font-mono)` (Geist Mono) para etiquetas/meta/kickers; itálica editorial vía `<em className="rc-em">`.
- Ritmo vertical: `var(--pad-y)`, `var(--pad-x)`, `var(--gut)`. El contenedor `.rc-wrap` ya aplica padding horizontal — las secciones usan padding horizontal 0.

## Clases utilitarias (reutilízalas, no reinventes)
- Títulos: `rc-display`, `rc-h1`, `rc-h2`, `rc-h3`, `rc-h4`. Lede: `rc-lede`. Cuerpo: `rc-body`. Kicker/etiqueta: `rc-eyebrow` (+ `on-r` sobre fondos oscuros), `rc-meta`.
- Botones: `rc-btn` + modificador `primary` | `brand` | `ghost` | `ghost-on-r` | `on-r` | `full`. CTA principal = WhatsApp (`WA` de `@/lib/data`).
- Acento itálico serif dentro de títulos: `<em className="rc-em">palabra</em>` (usa opacidad/`color:#fff` sobre oscuro).

## Reglas de composición
1. **Un solo acento**: el rojo `--r` se usa con moderación (línea, número, 1 palabra en itálica, hover). El resto es tinta sobre papel.
2. **Jerarquía por escala y espacio**, no por saturación. Kicker mono en mayúsculas → h2 grande → lede → cuerpo.
3. **Alto contraste y legibilidad**: cuerpo ≥16px, `line-height` 1.6–1.8, medida ≤ ~68ch.
4. **Sin sensacionalismo**: nada de rojos de "alerta", signos de exclamación múltiples, mayúsculas gritadas ni lenguaje morboso. En temas duros, tono digno y respetuoso (ver `editorial-true-crime-layout`).
5. **Secciones alternan fondos** (`--paper` / `#fff` / `--paper-2` / `--ink`) para ritmo. Bloques oscuros (`--ink`) para momentos de gravedad/CTA.
6. **CTAs claros y consistentes**: primario a WhatsApp; secundario ghost a contacto/otra página.

## Componentes de apoyo
- `@/components/Reveal` (animación por scroll — ver `scroll-reveal-animations`).
- `@/components/RichText` (renderiza `**negrita**` a `<strong>`; úsalo para párrafos largos).
- `@/components/SchemaOrg` (inyecta JSON-LD).
- `@/components/Breadcrumbs` (migas + BreadcrumbList schema).

## Checklist antes de dar por buena una página
- [ ] Usa tokens y clases `rc-*` (no colores hardcodeados fuera de marca).
- [ ] Un único acento rojo, resto sobrio.
- [ ] Jerarquía clara, medida de lectura cómoda, contraste AA.
- [ ] CTA a WhatsApp presente y visible.
- [ ] Cero estética amarillista.
