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
