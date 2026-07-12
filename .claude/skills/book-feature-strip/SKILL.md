---
name: book-feature-strip
description: Bloque visual para destacar el libro "El Caníbal de la Refrigeradora" (de Joseph Rivera) dentro de otras páginas de abogadojosephrivera.com. Úsala cuando se mencione el libro. Mantiene la misma línea visual de la página/comunicado del libro y enlaza hacia ella.
---

# Book Feature Strip — «El Caníbal de la Refrigeradora»

Franja reutilizable que presenta el libro y conecta con su página. Coherente con `legal-brand-design-system` y con el comunicado del libro.

## Fuente de verdad
- **Página dedicada del libro: `/libro`** (`app/libro/page.tsx`) — enlazar SIEMPRE aquí como CTA principal. También existe el comunicado `/comunicados/libro-el-canibal-de-la-refrigeradora`.
- Título de la obra: **«El Caníbal de la Refrigeradora»**. Autor: Lic. Joseph Rivera.
- Destino solidario: parte de las ganancias va a un fideicomiso (BCR) para **la hija de la ofendida**.
- ⚠️ DISCRECIÓN (obligatoria): en TODO el contenido del libro NO se nombra a la víctima ni a su hija. Usar **«la ofendida»** y **«la hija de la ofendida»**. Nada de "Nadia" ni "Nashly" en páginas/promos/comunicado del libro. (El dossier del caso sí puede nombrar a la víctima; el libro no.)

## Paleta del libro (usar EXACTA para "misma línea visual")
- Fondo: `#0a0707` (casi negro) + glow rojo sutil `radial-gradient(... rgba(126,1,2,.20) ...)`.
- Acento **dorado**: `#c9a86a` (título del libro, kicker, acentos). Clase global `libro-gold`.
- Texto crema: `#f5ede0`. Bordes dorados tenues `rgba(201,168,106,.28)`.
- CTA: botón relleno dorado (`background:#c9a86a; color:#1a1310; font-weight:700`).
- NADA de rojo `--r`/ink plano en la franja del libro: rompe la coherencia con `/libro`.

## Estructura del bloque
- Contenedor a ancho de contenido, fondo `--paper-2` o `--ink` (para gravedad), padding `--pad-y`.
- Grid 2 columnas (imagen | texto) que colapsa a 1 en móvil.
  - Izq: portada/imagen si existe (`/images/comunicados/...` o placeholder editorial con el título en itálica `rc-em`).
  - Der: kicker mono "Libro · Próximamente", `rc-h3`/`rc-h2` con el título, mini descripción (1–2 líneas), botón `rc-btn` hacia la página del libro ("Conocer el libro →").
- Conexión con la entrevista: una línea del tipo "El abogado habló de la obra en esta entrevista".

## Reglas
- **Misma línea visual** que el comunicado del libro (tipografía, acento rojo único, sobriedad).
- Mensaje digno: enfatizar el propósito (memoria de la ofendida, apoyo a su hija, llamado contra la violencia), no el morbo.
- Siempre incluir el enlace interno a la página del libro (SEO + navegación).
