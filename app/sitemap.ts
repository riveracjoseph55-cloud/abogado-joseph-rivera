import type { MetadataRoute } from "next";
import { RC_CASES, RC_AREAS } from "@/lib/data";

const BASE = "https://abogadojosephrivera.com";
const now  = new Date().toISOString();

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
      images: [`${BASE}/images/og-image.png`, `${BASE}/images/joseph-hero.png`, `${BASE}/images/logo.png`],
      alternates: { languages: { "es-CR": BASE, "x-default": BASE } },
    },
    {
      url: `${BASE}/quien`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
      images: [`${BASE}/images/joseph-hero.png`, `${BASE}/images/joseph3.jpg`],
      alternates: { languages: { "es-CR": `${BASE}/quien` } },
    },
    {
      url: `${BASE}/casos`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
      images: [
        `${BASE}/images/joseph10.jpg`,
        `${BASE}/images/joseph7.jpg`,
        `${BASE}/images/joseph3.jpg`,
        `${BASE}/images/joseph4.jpg`,
      ],
      alternates: { languages: { "es-CR": `${BASE}/casos` } },
    },
    {
      url: `${BASE}/especialidades`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: { languages: { "es-CR": `${BASE}/especialidades` } },
    },
    {
      url: `${BASE}/prensa`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
      images: [`${BASE}/images/joseph-prensa.jpg`],
      alternates: { languages: { "es-CR": `${BASE}/prensa` } },
    },
    {
      url: `${BASE}/atestados`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
      images: [`${BASE}/images/curriculo.jpg`],
      alternates: { languages: { "es-CR": `${BASE}/atestados` } },
    },
    {
      url: `${BASE}/contacto`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: { languages: { "es-CR": `${BASE}/contacto` } },
    },
  ];

  const casePages: MetadataRoute.Sitemap = RC_CASES.map(c => ({
    url: `${BASE}/casos/${c.slug}`,
    lastModified: `${c.year}-12-31`,
    changeFrequency: c.statusTone === "active" ? ("weekly" as const) : ("yearly" as const),
    priority: 0.85,
    images: [`${BASE}/images/${c.media}`],
    alternates: { languages: { "es-CR": `${BASE}/casos/${c.slug}` } },
  }));

  const areaPages: MetadataRoute.Sitemap = RC_AREAS.map(a => ({
    url: `${BASE}/especialidades/${a.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
    alternates: { languages: { "es-CR": `${BASE}/especialidades/${a.slug}` } },
  }));

  // Páginas legales excluidas del sitemap (robots: noindex)

  return [...staticPages, ...casePages, ...areaPages];
}
