import type { Metadata } from "next";
import SchemaOrg from "@/components/SchemaOrg";
import { RC_COMUNICADOS } from "@/lib/data";
import { SITE_URL, SITE_NAME, OG_IMAGE } from "@/lib/seo";
import ComunicadosClient from "./ComunicadosClient";

export const metadata: Metadata = {
  title: { absolute: "Comunicados de Prensa | Rivera Cheves & Asociados" },
  description: `Comunicados oficiales del bufete Rivera Cheves & Asociados — resoluciones judiciales, posiciones públicas y novedades del bufete. ${RC_COMUNICADOS.length} comunicados publicados.`,
  alternates: { canonical: `${SITE_URL}/comunicados` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/comunicados`,
    title: `Comunicados de Prensa | ${SITE_NAME}`,
    description: "Comunicados oficiales del bufete Rivera Cheves & Asociados — resoluciones, posiciones y noticias.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Comunicados | ${SITE_NAME}` }],
  },
  twitter: { card: "summary_large_image", title: `Comunicados | ${SITE_NAME}`, images: [OG_IMAGE] },
  keywords: [
    "comunicado de prensa costa rica",
    "comunicado abogado joseph rivera",
    "bufete rivera cheves noticias",
    "prensa legal costa rica",
    "comunicado femicidio costa rica",
  ],
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Comunicados de Prensa — Rivera Cheves & Asociados",
  url: `${SITE_URL}/comunicados`,
  numberOfItems: RC_COMUNICADOS.length,
  itemListElement: [...RC_COMUNICADOS]
    .sort((a, b) => b.date.localeCompare(a.date))
    .map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.title,
      url: `${SITE_URL}/comunicados/${c.slug}`,
    })),
};

export default function ComunicadosPage() {
  return (
    <>
      <SchemaOrg data={itemListSchema} />
      <ComunicadosClient />
    </>
  );
}
