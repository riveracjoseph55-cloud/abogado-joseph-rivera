import Link from "next/link";
import SchemaOrg from "@/components/SchemaOrg";
import { SITE_URL } from "@/lib/seo";

type Crumb = { name: string; href: string };

export default function Breadcrumbs({ trail }: { trail: Crumb[] }) {
  const items = [{ name: "Inicio", href: "/" }, ...trail];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.href}`,
    })),
  };

  return (
    <>
      <SchemaOrg data={schema} />
      <nav aria-label="Breadcrumb" style={{
        fontFamily: "var(--font-mono, monospace)",
        fontSize: 11,
        letterSpacing: ".12em",
        textTransform: "uppercase",
        color: "var(--fg-5)",
        marginBottom: 24,
        display: "flex",
        flexWrap: "wrap",
        gap: 8,
      }}>
        {items.map((c, i) => (
          <span key={c.href} style={{ display: "inline-flex", gap: 8 }}>
            {i < items.length - 1 ? (
              <>
                <Link href={c.href} style={{ color: "var(--fg-5)", borderBottom: "1px solid transparent", transition: "border-color .2s ease" }}>
                  {c.name}
                </Link>
                <span aria-hidden="true">/</span>
              </>
            ) : (
              <span aria-current="page" style={{ color: "#7e0102" }}>{c.name}</span>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}
