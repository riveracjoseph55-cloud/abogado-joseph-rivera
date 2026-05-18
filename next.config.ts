import type { NextConfig } from "next";
import path from "path";

const securityHeaders = [
  { key: "X-DNS-Prefetch-Control",   value: "on" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Frame-Options",           value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options",    value: "nosniff" },
  { key: "Referrer-Policy",           value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy",        value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
  { key: "X-XSS-Protection",          value: "1; mode=block" },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 480, 640, 750, 828, 1024, 1080, 1200, 1280, 1440, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512, 640, 768, 900],
    minimumCacheTTL: 31536000,
  },
  outputFileTracingRoot: path.join(__dirname),
  async headers() {
    return [
      { source: "/(.*)",            headers: securityHeaders },
      { source: "/images/(.*)",     headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }] },
      { source: "/_next/static/(.*)", headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }] },
      { source: "/sitemap.xml",     headers: [{ key: "Cache-Control", value: "public, max-age=3600, s-maxage=86400" }] },
      { source: "/robots.txt",      headers: [{ key: "Cache-Control", value: "public, max-age=3600, s-maxage=86400" }] },
    ];
  },
  // Redirige www → non-www (301 permanente) para evitar contenido duplicado en Google
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.abogadojosephrivera.com" }],
        destination: "https://abogadojosephrivera.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
