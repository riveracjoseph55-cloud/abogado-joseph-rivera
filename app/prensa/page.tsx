import type { Metadata } from "next";
import SchemaOrg from "@/components/SchemaOrg";
import { SITE_URL, SITE_NAME, OG_IMAGE, schemaBlogPosting } from "@/lib/seo";
import { RC_PRESS } from "@/lib/data";
import PrensaClient from "./PrensaClient";

export const metadata: Metadata = {
  title: "Prensa | Abogado Penalista Joseph Rivera Costa Rica",
  description:
    `Cobertura mediática del bufete Rivera Cheves en La Nación, La Prensa (Nicaragua), Infobae, CRHoy, Diario Extra, Delfino.cr, ElMundo.cr y Tico Times. ${RC_PRESS.length} publicaciones documentadas.`,
  alternates: { canonical: `${SITE_URL}/prensa` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/prensa`,
    title: `Prensa y Publicaciones | ${SITE_NAME}`,
    description:
      `Reportajes, opinión jurídica, entrevistas y publicaciones doctrinales del Lic. Rivera Cheves. ${RC_PRESS.length} apariciones en medios nacionales e internacionales.`,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Prensa | ${SITE_NAME}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Prensa | Abogado Joseph Rivera | ${SITE_NAME}`,
    images: [OG_IMAGE],
  },
  keywords: [
    "joseph rivera prensa noticias",
    "abogado joseph rivera entrevista",
    "nadia peraza noticias prensa",
    "abogado penalista costa rica medios",
    "joseph rivera la nacion",
    "joseph rivera infobae",
    "rivera cheves publicaciones juridicas",
    "abogado penalista cr noticias",
  ],
};

// Resuelve rutas internas (/entrevistas/...) a URL absoluta; deja intactas las externas
const absoluteUrl = (u: string) => (u.startsWith("http") ? u : `${SITE_URL}${u}`);

const articleSchemas = RC_PRESS
  .filter(p => p.u && !p.u.startsWith("#"))
  .map(p =>
    schemaBlogPosting({
      title: p.t,
      description: p.desc,
      url: absoluteUrl(p.u),
      datePublished: p.date
        ? (p.date.split("-").length === 3 ? p.date : `${p.date}-01`)
        : `${p.year}-01-01`,
      image: p.image ? `${SITE_URL}${p.image}` : OG_IMAGE,
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
    url: p.u.startsWith("#") ? `${SITE_URL}/prensa` : absoluteUrl(p.u),
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
