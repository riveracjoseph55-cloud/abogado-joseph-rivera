import type { MetadataRoute } from "next";
import { RC_PRESS } from "@/lib/data";

const BASE = "https://abogadojosephrivera.com";
const now  = new Date().toISOString();

export default function sitemap(): MetadataRoute.Sitemap {
  const static_routes: MetadataRoute.Sitemap = [
    { url: BASE,                     lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/quien`,          lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/casos`,          lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/especialidades`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/prensa`,         lastModified: now, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${BASE}/atestados`,      lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/contacto`,       lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];

  // Prensa articles as canonical external reference entries
  const press_routes: MetadataRoute.Sitemap = RC_PRESS
    .filter(p => p.u && !p.u.startsWith("#"))
    .map(p => ({
      url: `${BASE}/prensa`,
      lastModified: `${p.year}-01-01`,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    }));

  // Deduplicate press entries (all point to /prensa)
  return [...static_routes, ...press_routes.slice(0, 1)];
}
