import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/"],
      },
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Bingbot",   allow: "/" },
      { userAgent: "Applebot",  allow: "/" },
    ],
    sitemap: [
      "https://abogadojosephrivera.com/sitemap.xml",
      "https://abogadojosephrivera.com/image-sitemap.xml",
    ],
    host:    "https://abogadojosephrivera.com",
  };
}
