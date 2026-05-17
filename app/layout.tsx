import type { Metadata } from "next";
import { Manrope, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_URL, SITE_NAME, OG_IMAGE } from "@/lib/seo";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Abogado Joseph Rivera Cheves | Derecho Penal Costa Rica",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Bufete penalista en Costa Rica con más de 10 años de experiencia. Femicidios, crimen organizado, delitos financieros y asesoría internacional.",
  keywords: [
    "abogado penal Costa Rica",
    "defensor penal Costa Rica",
    "femicidio Costa Rica",
    "Joseph Rivera Cheves",
    "bufete penalista San José",
    "abogado criminalista Costa Rica",
    "lavado de dinero Costa Rica",
  ],
  authors: [{ name: "Lic. Joseph Alfonso Rivera Cheves", url: `${SITE_URL}/quien` }],
  creator: "Rivera Cheves & Asociados",
  publisher: "Rivera Cheves & Asociados",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "es_CR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Abogado Joseph Rivera Cheves | Derecho Penal Costa Rica",
    description:
      "Bufete penalista en Costa Rica con más de 10 años de experiencia. Femicidios, crimen organizado, delitos financieros y asesoría internacional.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Rivera Cheves & Asociados — Bufete Penalista Costa Rica" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abogado Joseph Rivera Cheves | Derecho Penal Costa Rica",
    description: "Bufete penalista en Costa Rica. Femicidios, crimen organizado y delitos financieros.",
    images: [OG_IMAGE],
  },
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${manrope.variable} ${geistMono.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
