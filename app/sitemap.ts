import type { MetadataRoute } from "next";

const BASE = "https://abogadojosephrivera.com";
const now  = new Date().toISOString();

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [
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

  return entries;
}
