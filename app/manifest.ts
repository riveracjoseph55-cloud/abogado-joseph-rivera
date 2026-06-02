import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Rivera Cheves & Asociados",
    short_name: "Rivera Cheves",
    description:
      "Bufete penalista en Costa Rica — Lic. Joseph Alfonso Rivera Cheves. Derecho penal, lavado de dinero, asesoría internacional.",
    start_url: "/",
    display: "standalone",
    background_color: "#faf7f2",
    theme_color: "#7e0102",
    orientation: "portrait-primary",
    lang: "es-CR",
    categories: ["business", "legal", "professional"],
    icons: [
      { src: "/images/icon-192.png",          sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/images/icon-512.png",          sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/images/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
