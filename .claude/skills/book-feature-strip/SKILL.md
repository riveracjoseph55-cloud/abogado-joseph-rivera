---
name: book-feature-strip
description: Bloque visual para destacar el libro "El Caníbal de la Refrigeradora" (de Joseph Rivera) dentro de otras páginas de abogadojosephrivera.com. Úsala cuando se mencione el libro. Mantiene la misma línea visual de la página/comunicado del libro y enlaza hacia ella.
---

# Book Feature Strip — «El Caníbal de la Refrigeradora»

Franja reutilizable que presenta el libro y conecta con su página. Coherente con `legal-brand-design-system` y con el comunicado del libro.

## Fuente de verdad
- Página/comunicado del libro: `/comunicados/libro-el-canibal-de-la-refrigeradora` (en `RC_COMUNICADOS`, `lib/data.ts`).
- Título de la obra: **«El Caníbal de la Refrigeradora»**. Autor: Lic. Joseph Rivera.
- Destino solidario: parte de las ganancias va a un fideicomiso (BCR) para **Najli/Nashly**, hija de Nadia Peraza.

## Estructura del bloque
- Contenedor a ancho de contenido, fondo `--paper-2` o `--ink` (para gravedad), padding `--pad-y`.
- Grid 2 columnas (imagen | texto) que colapsa a 1 en móvil.
  - Izq: portada/imagen si existe (`/images/comunicados/...` o placeholder editorial con el título en itálica `rc-em`).
  - Der: kicker mono "Libro · Próximamente", `rc-h3`/`rc-h2` con el título, mini descripción (1–2 líneas), botón `rc-btn` hacia la página del libro ("Conocer el libro →").
- Conexión con la entrevista: una línea del tipo "El abogado habló de la obra en esta entrevista".

## Reglas
- **Misma línea visual** que el comunicado del libro (tipografía, acento rojo único, sobriedad).
- Mensaje digno: enfatizar el propósito (memoria de Nadia, apoyo a su hija, llamado contra la violencia), no el morbo.
- Siempre incluir el enlace interno a la página del libro (SEO + navegación).
