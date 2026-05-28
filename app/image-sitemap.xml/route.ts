import { RC_CASES } from "@/lib/data";

const BASE = "https://abogadojosephrivera.com";

// ── Helpers ────────────────────────────────────────────────────────────────

function esc(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

interface Img {
  loc: string;
  title: string;
  caption?: string;
}

interface PageEntry {
  url: string;
  images: Img[];
}

function buildXml(pages: PageEntry[]): string {
  const items = pages
    .filter(p => p.images.length > 0)
    .map(p => {
      const imgs = p.images
        .map(img =>
          `    <image:image>\n` +
          `      <image:loc>${esc(img.loc)}</image:loc>\n` +
          `      <image:title>${esc(img.title)}</image:title>\n` +
          (img.caption ? `      <image:caption>${esc(img.caption)}</image:caption>\n` : "") +
          `    </image:image>`
        )
        .join("\n");
      return `  <url>\n    <loc>${esc(p.url)}</loc>\n${imgs}\n  </url>`;
    })
    .join("\n");

  return (
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n` +
    `        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n` +
    items +
    `\n</urlset>`
  );
}

// ── Galería de casos con imágenes adicionales ──────────────────────────────

const GALLERY: Record<string, Img[]> = {
  "junieysis-merlo": [
    {
      loc: `${BASE}/images/casos/junieysis-merlo-prensa-joseph-rivera.jpg`,
      title: "Abogado penalista Joseph Rivera Cheves con familiares de Junieysis Merlo Espinoza durante conferencia de prensa — caso femicidio Salitral de Santa Ana Costa Rica 2026",
      caption: "Conferencia de prensa · caso Junieysis Merlo Espinoza — representación pro-bono Rivera Cheves & Asociados",
    },
    {
      loc: `${BASE}/images/casos/junieysis-merlo-familiar-declaracion.jpg`,
      title: "Familiar de Junieysis Merlo Espinoza durante declaración pública — caso femicidio Salitral de Santa Ana Costa Rica 2026 — bufete Rivera Cheves & Asociados",
      caption: "Declaración pública de familiar de Junieysis Merlo Espinoza — proceso judicial Costa Rica 2026",
    },
  ],
  "nadia-peraza": [
    {
      loc: `${BASE}/images/casos/nadia-peraza-tribunal.jpg`,
      title: "Abogado penalista Joseph Rivera Cheves con Marilyn Espinoza, madre de Nadia Peraza, en audiencia — Tribunal Penal de Heredia — condena 50 años femicidio Costa Rica 2026",
      caption: "Audiencia oral en el Tribunal Penal de Heredia — condena histórica 50 años — caso Nadia Peraza",
    },
    {
      loc: `${BASE}/images/casos/nadia-peraza-familia.jpg`,
      title: "Abogado Joseph Rivera Cheves con los padres de Nadia Peraza durante la preparación del caso de femicidio — bufete penalista Costa Rica",
      caption: "Acompañamiento integral a la familia Peraza Espinoza durante todo el proceso judicial",
    },
    {
      loc: `${BASE}/images/casos/nadia-peraza-tv-trivision.jpg`,
      title: "Abogado penalista Joseph Rivera Cheves identificado en Noticias Trivisión como defensor de la familia de Nadia Peraza — femicidio Costa Rica",
      caption: "Cobertura televisiva en Noticias Trivisión — caso Nadia Peraza — Costa Rica",
    },
    {
      loc: `${BASE}/images/casos/nadia-peraza-tribunal-prensa.jpg`,
      title: "Abogado Joseph Rivera Cheves a la salida de audiencia con familiares de Nadia Peraza — Tribunal Penal Heredia — condena histórica 50 años femicidio",
      caption: "Salida del Tribunal Penal de Heredia con la familia de Nadia Peraza",
    },
  ],
  "finca-lajas": [
    {
      loc: `${BASE}/images/casos/finca-lajas-vista-panoramica.jpg`,
      title: "Vista panorámica desde Finca Lajas Donde Toño en Alajuelita — reconstrucción de hechos caso doble homicidio Toño Badilla y Maureen Molina — fotografía Carlos Valencia periodista",
      caption: "Vista panorámica desde Finca Lajas · Alajuelita · Costa Rica — reconstrucción de hechos mayo 2026",
    },
    {
      loc: `${BASE}/images/casos/finca-lajas-cartel-restaurante-donde-tono.jpg`,
      title: "Cartel del restaurante Finca Las Lajas Donde Toño en Alajuelita — escena fotografiada durante reconstrucción judicial del caso doble homicidio adultos mayores Costa Rica 2025",
      caption: "Cartel del restaurante Finca Las Lajas «Donde Toño» — Alajuelita — fotografía Carlos Valencia",
    },
    {
      loc: `${BASE}/images/casos/finca-lajas-puerta-mensajes-visitantes.jpg`,
      title: "Puerta roja del restaurante Finca Lajas con mensajes de visitantes — «Esperar Nada Agradecer Todo» — reconstrucción de hechos caso doble homicidio Toño y Maureen — Alajuelita Costa Rica mayo 2026",
      caption: "Puerta roja del restaurante Finca Lajas — mensajes de visitantes — fotografía Carlos Valencia periodista",
    },
    {
      loc: `${BASE}/images/casos/finca-lajas-reconstruccion-medicion-interior.jpg`,
      title: "Investigador tomando medidas en el interior del restaurante Finca Lajas durante reconstrucción oficial de hechos — caso doble homicidio Toño Badilla Maureen Molina — Alajuelita San José Costa Rica",
      caption: "Reconstrucción oficial de hechos — interior de Finca Lajas — fotografía Carlos Valencia",
    },
    {
      loc: `${BASE}/images/casos/finca-lajas-mirador-reconstruccion-1.jpg`,
      title: "Mirador del restaurante Finca Lajas Donde Toño durante reconstrucción judicial de hechos — caso doble homicidio adultos mayores Alajuelita Costa Rica mayo 2026 — fotografía Carlos Valencia",
      caption: "Mirador de Finca Lajas durante reconstrucción de hechos — Alajuelita — fotografía Carlos Valencia",
    },
    {
      loc: `${BASE}/images/casos/finca-lajas-mirador-reconstruccion-2.jpg`,
      title: "Segunda perspectiva del mirador de Finca Lajas Donde Toño — reconstrucción caso doble homicidio adultos mayores Alajuelita San José Costa Rica — fotografía Carlos Valencia periodista",
      caption: "Mirador de Finca Lajas — segunda perspectiva — reconstrucción de hechos 2026",
    },
    {
      loc: `${BASE}/images/casos/finca-lajas-joseph-rivera-declaraciones-prensa.jpg`,
      title: "Abogado penalista Joseph Rivera Cheves dando declaraciones en Finca Lajas Alajuelita durante reconstrucción caso doble homicidio Toño y Maureen — Costa Rica mayo 2026 — fotografía Carlos Valencia",
      caption: "Lic. Joseph Rivera Cheves en Finca Lajas — declaraciones a la prensa — reconstrucción de hechos",
    },
    {
      loc: `${BASE}/images/casos/finca-lajas-letrero-metalico.jpg`,
      title: "Letrero metálico dorado del restaurante Finca Lajas Donde Toño en Santa Marta de Alajuelita Costa Rica — caso doble homicidio adultos mayores noviembre 2025 — fotografía Carlos Valencia periodista",
      caption: "Letrero dorado «Finca Lajas Donde Toño» — Alajuelita — fotografía Carlos Valencia",
    },
    {
      loc: `${BASE}/images/casos/finca-lajas-taza-recuerdo-tono-maureen.jpg`,
      title: "Taza personalizada del restaurante Finca Lajas con fotografía de Antonio Toño Badilla y Maureen Molina — objetos personales hallados durante reconstrucción de hechos caso doble homicidio Alajuelita 2025",
      caption: "Taza del restaurante con fotografía de Toño y Maureen — Finca Lajas Alajuelita",
    },
  ],
};

// ── Route handler ─────────────────────────────────────────────────────────

export function GET() {
  const pages: PageEntry[] = [

    // ── Homepage ──────────────────────────────────────────────────────────
    {
      url: BASE,
      images: [
        {
          loc: `${BASE}/images/joseph/editorial.jpg`,
          title: "Lic. Joseph Alfonso Rivera Cheves, abogado penalista en Costa Rica — femicidios, crimen organizado y delitos financieros — Bufete Rivera Cheves, San José",
        },
        {
          loc: `${BASE}/images/og-image.png`,
          title: "Rivera Cheves & Asociados — Bufete Penalista Costa Rica — Abogado Joseph Rivera Cheves",
        },
        {
          loc: `${BASE}/images/logo.png`,
          title: "Logotipo Rivera Cheves & Asociados — Abogado Penalista San José, Costa Rica",
        },
      ],
    },

    // ── Quién es Joseph Rivera ────────────────────────────────────────────
    {
      url: `${BASE}/quien`,
      images: [
        {
          loc: `${BASE}/images/joseph-hero.png`,
          title: "Lic. Joseph Alfonso Rivera Cheves — abogado penalista en Costa Rica, especialista en femicidios, crimen organizado y lavado de dinero — San José",
        },
      ],
    },

    // ── Casos (listado) ───────────────────────────────────────────────────
    {
      url: `${BASE}/casos`,
      images: [
        {
          loc: `${BASE}/images/joseph/tribunal.jpg`,
          title: "Abogado penalista Joseph Rivera Cheves en audiencia oral activa — Tribunal Penal de Costa Rica — defensa en femicidios y crimen organizado",
          caption: "Litigación oral activa en el Tribunal Penal de Costa Rica",
        },
      ],
    },

    // ── Páginas de cada caso (imagen principal + galería si existe) ───────
    ...RC_CASES.map(c => ({
      url: `${BASE}/casos/${c.slug}`,
      images: [
        {
          loc: `${BASE}/images/${c.media}`,
          title: `Caso ${c.name} — abogado penalista Joseph Rivera Cheves — Costa Rica ${c.year}`,
          caption: `${c.name} — ${c.location} — representación del Lic. Joseph Rivera Cheves`,
        },
        ...(GALLERY[c.slug] ?? []),
      ],
    })),

    // ── Formación y atestados ─────────────────────────────────────────────
    {
      url: `${BASE}/atestados`,
      images: [
        {
          loc: `${BASE}/images/curriculo.jpg`,
          title: "Currículo del abogado penalista Joseph Rivera Cheves — Máster en Compliance Penal, Maestría Derecho Penal, Auditor ISO 37001 — formación académica Costa Rica",
          caption: "Currículo vitae oficial — Lic. Joseph Alfonso Rivera Cheves",
        },
      ],
    },

    // ── Prensa y publicaciones ────────────────────────────────────────────
    {
      url: `${BASE}/prensa`,
      images: [
        {
          loc: `${BASE}/images/joseph/prensa.jpg`,
          title: "Abogado penalista Joseph Rivera Cheves en cobertura mediática nacional — caso Nadia Peraza, Multimedios, Trivisión, Canal 7, Central de Noticias — Costa Rica",
          caption: "Cobertura mediática nacional — abogado Joseph Rivera Cheves",
        },
      ],
    },
  ];

  return new Response(buildXml(pages), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
