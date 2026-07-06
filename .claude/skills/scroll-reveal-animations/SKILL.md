---
name: scroll-reveal-animations
description: Animaciones de scroll suaves y profesionales para abogadojosephrivera.com. Úsala al animar la aparición de secciones. Reutiliza el componente Reveal (IntersectionObserver, ligero) y CSS; nada de librerías pesadas ni efectos exagerados que resten seriedad.
---

# Scroll Reveal Animations

El proyecto ya tiene un sistema **ligero** de reveal: `@/components/Reveal` (IntersectionObserver + CSS, sin dependencias). **Reutilízalo. No instales framer-motion** salvo que se pida algo que el sistema actual no pueda hacer.

## Uso de `Reveal`
```tsx
import Reveal from "@/components/Reveal";
<Reveal><h2 className="rc-h2">Título</h2></Reveal>
<Reveal delay={80} variant="slide-up">…</Reveal>
```
- Props: `delay` (ms, escalona con `i*60`…`i*80`), `variant`: `slide-up` (default) | `slide-left` | `slide-right` | `fade` | `scale`, `className`.
- Aplica la clase `pre` mientras está fuera de viewport y la retira al entrar (transición definida en `globals.css`, clases `.rc-reveal`).

## Principios
- **Sutil y profesional**: fade + desplazamiento corto (≤24px), duración 400–600ms, easing suave. Nada de rebotes, giros ni parallax llamativo.
- **Escalonado** de elementos hermanos con `delay` creciente (máx ~240ms) para ritmo, sin demorar la lectura.
- **Una vez**: revelar y desconectar el observer (el componente ya lo hace); no re-animar en cada scroll.
- **No animar contenido crítico del hero** de forma que retrase el LCP (el `Reveal` ya evita animar lo que está sobre el pliegue).

## `prefers-reduced-motion`
- Respetarlo: si el usuario reduce movimiento, las animaciones deben desactivarse (transiciones a `none`). Verificar/añadir la media query en `globals.css` para `.rc-reveal`.

## Microinteracciones
- Hover en tarjetas/botones: transición corta de color/`transform: translateY(-2px)`. Coherente con `rc-btn`/`rc-card`. Foco visible siempre.

## Si se pidiera Framer Motion (React/Next)
- Solo si aporta algo imposible con `Reveal`/CSS. Preferir `whileInView` con `viewport={{ once: true }}` y `transition` suave. Igualmente respetar `prefers-reduced-motion`.
