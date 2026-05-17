import type { Metadata } from "next";
import { Manrope, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
  title: {
    default: "Abogado Joseph Rivera Cheves — Derecho Penal Costa Rica",
    template: "%s | Rivera Cheves & Asociados",
  },
  description: "Bufete penalista en Costa Rica con más de 10 años de experiencia. Representación en femicidios, crimen organizado, delitos financieros y asesoría internacional. Lic. Joseph Alfonso Rivera Cheves.",
  keywords: ["abogado penal Costa Rica", "defensor penal", "femicidio Costa Rica", "Joseph Rivera Cheves", "bufete penalista"],
  openGraph: {
    type: "website",
    locale: "es_CR",
    url: "https://abogadojosephrivera.com",
    siteName: "Rivera Cheves & Asociados",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/images/favicon.png" },
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
