---
name: wordpress-page-builder-compatible
description: Guía para generar código de página compatible con WordPress/Elementor/Gutenberg SIN romper el tema. Úsala solo si el proyecto destino es WordPress. IMPORTANTE - abogadojosephrivera.com es Next.js (App Router), NO WordPress; en ese caso construir con React/Next y esta skill no aplica al build.
---

# WordPress / Page-Builder Compatible

## Detección de stack primero
- **abogadojosephrivera.com es Next.js (App Router)**. Aquí NO se usa WordPress: construir con React/Server Components y los componentes del repo (`Reveal`, `RichText`, `SchemaOrg`, `Breadcrumbs`). Esta skill queda como referencia por si se porta el contenido a un WordPress externo.
- Señales de WordPress: `wp-content/`, `functions.php`, `style.css` con cabecera de tema, shortcodes.

## Si el destino ES WordPress
Objetivo: una página individual autocontenida que **no rompa el tema**.

### CSS scoped (obligatorio)
- Envolver todo en un contenedor único, p. ej. `<div class="rc-entrevista">…</div>` y **prefijar cada selector** con `.rc-entrevista` para no filtrar estilos al tema.
- Nada de estilos globales (`body`, `h1{}` sueltos). Usar `clamp()` para tipografía fluida y `box-sizing:border-box` local.
- Variables CSS locales dentro del contenedor (`.rc-entrevista{ --ink:#0d0d0d; --r:#7e0102; … }`).

### Integración
- **Gutenberg**: bloque "HTML personalizado" con el markup + un `<style>` scoped, o un bloque de patrón.
- **Elementor**: widget "HTML" para el bloque; o secciones nativas + widget "HTML" para el video/JSON-LD.
- **Shortcode/funciones**: si se requiere lógica, encapsular en un shortcode que imprima el HTML.

### Animación y video en WordPress
- **CSS animations + IntersectionObserver vanilla** (sin React): añadir clase `is-visible` al entrar en viewport; transición en CSS. Respetar `prefers-reduced-motion`.
- YouTube: mismo **facade lite** en JS vanilla (miniatura → iframe al clic), `youtube-nocookie.com`, `loading="lazy"`.

### SEO en WordPress
- JSON-LD (Article + VideoObject + BreadcrumbList) inyectado en el `<head>` vía plugin SEO (Yoast/RankMath) o `wp_head`. Title/meta/OG por el plugin.

### Rendimiento
- No encolar librerías pesadas. CSS/JS mínimos y locales a la página. Imágenes optimizadas (webp) y `loading="lazy"`.
