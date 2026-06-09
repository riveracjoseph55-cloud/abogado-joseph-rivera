import type { Metadata, Viewport } from "next";
import { Manrope, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CookieConsent from "@/components/CookieConsent";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SchemaOrg from "@/components/SchemaOrg";
import {
  SITE_URL,
  SITE_NAME,
  OG_IMAGE,
  schemaOrganization,
  schemaWebSite,
} from "@/lib/seo";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
  preload: false,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#7e0102" },
    { media: "(prefers-color-scheme: dark)",  color: "#5a0001" },
  ],
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Abogado Joseph Rivera Cheves | Derecho Penal Costa Rica",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Bufete penalista en Costa Rica con más de 10 años de experiencia. Femicidios, crimen organizado, delitos financieros y asesoría internacional.",
  applicationName: SITE_NAME,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    "abogado joseph rivera",
    "joseph rivera",
    "joseph rivera abogado",
    "abogado penalista costa rica",
    "nadia peraza",
    "nadia peraza abogado",
    "abogado penal Costa Rica",
    "defensor penal Costa Rica",
    "femicidio Costa Rica",
    "Joseph Rivera Cheves",
    "bufete penalista San José",
    "abogado criminalista Costa Rica",
    "lavado de dinero Costa Rica",
    "abogado Sabana San José",
  ],
  authors: [{ name: "Lic. Joseph Alfonso Rivera Cheves", url: `${SITE_URL}/quien` }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "legal",
  classification: "Servicios Legales",
  formatDetection: { email: true, telephone: true, address: true },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
    languages: { "es-CR": SITE_URL, "x-default": SITE_URL },
  },
  openGraph: {
    type: "website",
    locale: "es_CR",
    alternateLocale: ["es_ES", "es_MX"],
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Abogado Joseph Rivera Cheves | Derecho Penal Costa Rica",
    description:
      "Bufete penalista en Costa Rica con más de 10 años de experiencia. Femicidios, crimen organizado, delitos financieros y asesoría internacional.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `${SITE_NAME} — Bufete Penalista Costa Rica`, type: "image/png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abogado Joseph Rivera Cheves | Derecho Penal Costa Rica",
    description: "Bufete penalista en Costa Rica. Femicidios, crimen organizado y delitos financieros.",
    images: [OG_IMAGE],
    creator: "@josephriveraabogado",
  },
  // Los íconos se generan automáticamente desde app/icon.png, app/favicon.ico
  // y app/apple-icon.png (convención de Next.js App Router) — todos cuadrados.
  appleWebApp: {
    capable: true,
    title: SITE_NAME,
    statusBarStyle: "black-translucent",
  },
  manifest: "/manifest.webmanifest",
  verification: {
    google:
      process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION ??
      "-M-AkRFLBMovw7bpTygapzIG3XknGL_ahBWjubhBGRA",
    other: {
      "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION ?? "",
    },
  },
  other: {
    "geo.region":      "CR-SJ",
    "geo.placename":   "San José",
    "geo.position":    "9.9418;-84.1059",
    "ICBM":            "9.9418, -84.1059",
    "DC.title":        "Abogado Joseph Rivera Cheves | Derecho Penal Costa Rica",
    "DC.creator":      "Lic. Joseph Alfonso Rivera Cheves",
    "DC.subject":      "Servicios Legales · Derecho Penal · Costa Rica",
    "DC.language":     "es-CR",
  },
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-CR" className={`${manrope.variable} ${geistMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {GA_ID && <link rel="preconnect" href="https://www.googletagmanager.com" />}
        <SchemaOrg data={[schemaOrganization, schemaWebSite]} />
      </head>
      <body>
        <a href="#main" className="skip-link">Saltar al contenido principal</a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        {GA_ID && <GoogleAnalytics id={GA_ID} />}
        <WhatsAppFloat />
        <CookieConsent />
      </body>
    </html>
  );
}
