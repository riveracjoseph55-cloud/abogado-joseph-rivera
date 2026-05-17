import type { Metadata } from "next";
import SchemaOrg from "@/components/SchemaOrg";
import { SITE_URL, SITE_NAME, OG_IMAGE, schemaBlogPosting } from "@/lib/seo";
import { RC_PRESS } from "@/lib/data";
import PrensaClient from "./PrensaClient";

export const metadata: Metadata = {
  title: "Prensa y Opinión Jurídica",
  description:
    "Análisis legal del Lic. Rivera Cheves en Diario Extra, Delfino.cr, ElMundo.cr y CRHoy. Opinión jurídica sobre derecho penal costarricense.",
  alternates: { canonical: `${SITE_URL}/prensa` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/prensa`,
    title: `Prensa y Opinión Jurídica | ${SITE_NAME}`,
    description:
      "Análisis legal del Lic. Rivera Cheves en los principales medios de Costa Rica. Derecho penal, femicidios y justicia.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Prensa | ${SITE_NAME}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Prensa y Opinión Jurídica | ${SITE_NAME}`,
    images: [OG_IMAGE],
  },
};

const articleSchemas = RC_PRESS
  .filter(p => p.u && !p.u.startsWith("#"))
  .map(p =>
    schemaBlogPosting({
      title: p.t,
      description: `Artículo publicado en ${p.medio}: ${p.t}`,
      url: p.u,
      datePublished: `${p.year}-01-01`,
      image: OG_IMAGE,
    })
  );

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Prensa y Opinión Jurídica — Rivera Cheves & Asociados",
  url: `${SITE_URL}/prensa`,
  numberOfItems: RC_PRESS.length,
  itemListElement: RC_PRESS.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: p.t,
    url: p.u.startsWith("#") ? `${SITE_URL}/prensa` : p.u,
  })),
};

export default function PrensaPage() {
  return (
    <>
      <SchemaOrg data={[itemListSchema, ...articleSchemas]} />
      <PrensaClient />
    </>
  );
}
