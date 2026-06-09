import type { Metadata } from "next";
import SchemaOrg from "@/components/SchemaOrg";
import { SITE_URL, SITE_NAME, OG_IMAGE, schemaLegalService } from "@/lib/seo";
import ContactoClient from "./ContactoClient";

export const metadata: Metadata = {
  title: { absolute: "Contacto | Abogado Penalista Joseph Rivera · Costa Rica" },
  description:
    "Contacte al Lic. Joseph Rivera Cheves, abogado penalista en Costa Rica. Edificio 7, Oficentro Sabana, San José. WhatsApp 8998-0112 disponible 24/7.",
  alternates: { canonical: `${SITE_URL}/contacto` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/contacto`,
    title: `Contacto | ${SITE_NAME}`,
    description:
      "Consulte con el Lic. Joseph Rivera Cheves. WhatsApp 24/7, correo y formulario disponibles. Edificio 7, Oficentro Sabana, San José.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Contacto | ${SITE_NAME}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Contacto | ${SITE_NAME}`,
    images: [OG_IMAGE],
  },
  keywords: [
    "contacto abogado joseph rivera",
    "abogado penalista costa rica contacto",
    "bufete penal san jose telefono",
    "abogado whatsapp costa rica",
    "oficentro sabana abogado penal",
    "abogado penal 24 horas costa rica",
    "consulta abogado penal costa rica",
    "joseph rivera cheves contacto",
  ],
};

export default function ContactoPage() {
  return (
    <>
      <SchemaOrg data={schemaLegalService} />
      <ContactoClient />
    </>
  );
}
