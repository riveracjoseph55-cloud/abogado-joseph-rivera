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
  image: { "@type": "ImageObject", url: OG_IMAGE, width: 1200, height: 630 },
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
    postalCode: "10108",
    addressCountry: "CR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 9.9418,
    longitude: -84.1059,
  },
  hasMap: "https://maps.google.com/?q=Oficentro+La+Sabana+San+Jose+Costa+Rica",
  areaServed: [
    { "@type": "Country", name: "Costa Rica" },
    { "@type": "AdministrativeArea", name: "Centroamérica" },
  ],
  knowsLanguage: ["es", "en"],
  serviceType: [
    "Derecho Penal",
    "Lavado de Dinero",
    "Derecho Corporativo",
    "Derecho Laboral",
    "Derecho Notarial",
    "Asesoría Estratégica Internacional",
    "Investigaciones Criminales",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
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
  address: {
    "@type": "PostalAddress",
    streetAddress: CONTACT.address,
    addressLocality: CONTACT.city,
    addressRegion: "San José",
    postalCode: "10108",
    addressCountry: "CR",
  },
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

// WebSite con SearchAction → habilita el sitelinks searchbox en Google
export const schemaWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  description:
    "Bufete penalista en Costa Rica — Lic. Joseph Alfonso Rivera Cheves",
  inLanguage: "es-CR",
  publisher: { "@id": `${SITE_URL}/#legalservice` },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/prensa?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

// Organization (par del LegalService) - reforzando E-E-A-T
export const schemaOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    "@id": `${SITE_URL}/#logo`,
    url: `${SITE_URL}/images/logo.png`,
    width: 200,
    height: 200,
    caption: SITE_NAME,
  },
  image: { "@id": `${SITE_URL}/#logo` },
  founder: { "@type": "Person", name: AUTHOR },
  foundingDate: "2015",
  foundingLocation: { "@type": "Place", name: "San José, Costa Rica" },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: CONTACT.tel,
      contactType: "customer service",
      areaServed: "CR",
      availableLanguage: ["Spanish", "English"],
    },
    {
      "@type": "ContactPoint",
      contactType: "emergency",
      telephone: CONTACT.tel,
      areaServed: "CR",
      availableLanguage: "Spanish",
      hoursAvailable: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "00:00", closes: "23:59" },
    },
  ],
  sameAs: schemaLegalService.sameAs,
};

// FAQPage helper - para futuras secciones de preguntas frecuentes
export function schemaFAQPage(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(f => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

// ProfessionalService - alternative typing more specific for legal
export const schemaProfessionalService = {
  ...schemaLegalService,
  "@type": ["ProfessionalService", "LegalService"],
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

// NewsArticle schema para comunicados de prensa
export function schemaPressRelease(pr: {
  slug:       string;
  title:      string;
  summary:    string;
  body:       string;
  date:       string;
  tags?:      string[];
  keywords?:  string[];
  image?:     string;   // ruta relativa en /public
  area?:      string;
}) {
  const url       = `${SITE_URL}/comunicados/${pr.slug}`;
  const imageUrl  = pr.image ? `${SITE_URL}${pr.image}` : OG_IMAGE;
  const allKw     = [...(pr.tags ?? []), ...(pr.keywords ?? [])];
  const wordCount = pr.body.split(/\s+/).filter(Boolean).length;
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "@id": url,
    headline:       pr.title,
    description:    pr.summary,
    articleBody:    pr.body,
    wordCount,
    datePublished:  pr.date,
    dateModified:   pr.date,
    url,
    inLanguage:     "es-CR",
    genre:          "press release",
    articleSection: pr.area ?? "Derecho Penal",
    image: {
      "@type":  "ImageObject",
      url:      imageUrl,
      width:    1200,
      height:   630,
    },
    author: {
      "@type":    "Person",
      name:       AUTHOR,
      url:        `${SITE_URL}/quien`,
      jobTitle:   "Abogado Penalista",
    },
    publisher: {
      "@type": "Organization",
      name:    SITE_NAME,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/images/logo.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    keywords: allKw.length ? allKw.join(", ") : undefined,
    isPartOf: {
      "@type": "WebPage",
      "@id":   `${SITE_URL}/comunicados`,
      name:    "Comunicados de Prensa — Rivera Cheves & Asociados",
    },
  };
}

// BreadcrumbList para páginas individuales de comunicados
export function schemaBreadcrumbComunicado(title: string, slug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio",       item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Prensa",       item: `${SITE_URL}/prensa` },
      { "@type": "ListItem", position: 3, name: "Comunicados",  item: `${SITE_URL}/comunicados` },
      { "@type": "ListItem", position: 4, name: title,          item: `${SITE_URL}/comunicados/${slug}` },
    ],
  };
}
