---
name: editorial-true-crime-layout
description: Layouts editoriales para casos de alto impacto mediático/legal (femicidios, homicidios) en abogadojosephrivera.com. Úsala al presentar hechos delicados. Provee timeline, tarjetas de contexto, citas, bloques informativos y aviso de contenido sensible, siempre con tono respetuoso y sin morbo.
---

# Editorial True-Crime Layout

Para temas duros: **rigor + dignidad**. El foco es la justicia, la víctima y el aprendizaje social — **nunca el morbo**. Complementa `legal-brand-design-system`.

## Reglas de tono (obligatorias)
- Respeto a la víctima y su familia: nombrarla con dignidad, no reducirla al crimen.
- **No detallar** lo gráfico/gore. Aludir con sobriedad ("hechos de extrema violencia") en vez de describir mutilaciones.
- Nada de titulares amarillistas ni adjetivación morbosa. Cuidado legal: "presunto/imputado", "según la investigación", respetar presunción de inocencia donde aplique.
- Enmarcar en el problema social (violencia contra las mujeres, fallas institucionales) y en la labor legal.

## Aviso de contenido sensible
Banda discreta al inicio del cuerpo (fondo `--paper-2`, texto `--fg-3`, ícono/línea `--r`):
> "Este contenido aborda un caso de violencia contra una mujer. Se trata con respeto y sin detalles gráficos."

## Bloques disponibles
- **Timeline**: lista vertical `fecha · etiqueta · texto` (mismo patrón que `RC_CASES[].timeline` renderizado en `/casos/[slug]`). Ideal para cronología procesal.
- **Tarjetas de contexto**: grid de datos clave (`k`/`v`) — fechas, tribunal, expediente, rol del bufete.
- **Citas**: `blockquote` con «» atribuido; una idea potente por cita.
- **Bloques informativos**: subtítulo `rc-h3` + 1–3 párrafos (`RichText`), alternando fondos.
- **Llamado / aprendizaje**: cierre en bloque `--ink` con el mensaje social + CTA de ayuda (WhatsApp).

## Enlazado
- Enlazar al dossier del caso (`/casos/<slug>`) y a comunicados relacionados (`/comunicados/<slug>`). Mantener coherencia de datos con `lib/data.ts` (fechas, edad, penas) — no contradecir el dossier.
