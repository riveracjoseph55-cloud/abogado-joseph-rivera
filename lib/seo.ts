export const SITE_URL  = "https://abogadojosephrivera.com";
export const SITE_NAME = "Rivera Cheves & Asociados";
export const AUTHOR    = "Lic. Joseph Alfonso Rivera Cheves";
export const OG_IMAGE  = `${SITE_URL}/images/og-image.png`;

export const CONTACT = {
  tel:     "+50689980112",
  telFmt:  "8998-0112",
  email:   "jriveracheves@gmail.com",
  address: "Edificio 7, Oficentro Sabana",
  city:    "San José",
  country: "Costa Rica",
};

// ── Schemas JSON-LD ────────────────────────────────────────────

export const schemaLegalService = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "@id": `${SITE_URL}/#legalservice`,
  name: "Rivera Cheves & Asociados",
  alternateName: "Bufete Joseph Rivera Cheves",
  url: SITE_URL,
  logo: { "@type": "ImageObject", url: `${SITE_URL}/images/logo.png`, width: 200, height: 200 },
  image: OG_IMAGE,
  description:
    "Bufete penalista en Costa Rica con más de 10 años de experiencia. Defensa en femicidios, crimen organizado, delitos financieros y asesoría internacional.",
  telephone: CONTACT.tel,
  email: CONTACT.email,
  founder: {
    "@type": "Person",
    name: AUTHOR,
    jobTitle: "Abogado Penalista",
    url: `${SITE_URL}/quien`,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: CONTACT.address,
    addressLocality: CONTACT.city,
    addressRegion: "San José",
    addressCountry: "CR",
  },
  areaServed: { "@type": "Country", name: "Costa Rica" },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
  sameAs: [
    "https://www.tiktok.com/@josephriveraabogado",
    "https://www.instagram.com/josephriveraabogado",
    `https://api.whatsapp.com/send?phone=${CONTACT.tel.replace("+", "")}`,
  ],
  priceRange: "$$",
};

export const schemaAttorney = {
  "@context": "https://schema.org",
  "@type": ["Person", "Attorney"],
  "@id": `${SITE_URL}/quien#attorney`,
  name: AUTHOR,
  givenName: "Joseph Alfonso",
  familyName: "Rivera Cheves",
  jobTitle: "Abogado Penalista",
  description:
    "Abogado penalista costarricense con más de 10 años de trayectoria en casos complejos de femicidio, crimen organizado, lavado de dinero y delitos financieros.",
  url: `${SITE_URL}/quien`,
  image: `${SITE_URL}/images/joseph-hero.png`,
  telephone: CONTACT.tel,
  email: CONTACT.email,
  nationality: { "@type": "Country", name: "Costa Rica" },
  worksFor: { "@type": "LegalService", name: "Rivera Cheves & Asociados", url: SITE_URL },
  alumniOf: [
    { "@type": "EducationalOrganization", name: "Universidad de la Salle" },
    { "@type": "EducationalOrganization", name: "Universidad Latina de Costa Rica" },
    { "@type": "EducationalOrganization", name: "EALDE Business School" },
    { "@type": "EducationalOrganization", name: "Temple University" },
    { "@type": "EducationalOrganization", name: "Universidad de Costa Rica" },
  ],
  knowsAbout: [
    "Derecho Penal",
    "Femicidios",
    "Lavado de Dinero",
    "Crimen Organizado",
    "Derecho Notarial",
    "Litigación Oral",
    "Compras Públicas",
  ],
  sameAs: ["https://www.tiktok.com/@josephriveraabogado"],
};

export function schemaBlogPosting(article: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": article.url,
    headline: article.title,
    description: article.description,
    url: article.url,
    datePublished: article.datePublished,
    image: article.image ?? OG_IMAGE,
    author: {
      "@type": "Person",
      name: AUTHOR,
      url: `${SITE_URL}/quien`,
      jobTitle: "Abogado Penalista",
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/images/logo.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": article.url },
  };
}
