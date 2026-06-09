import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import SchemaOrg from "@/components/SchemaOrg";
import { RC_COMUNICADOS } from "@/lib/data";
import { SITE_URL, SITE_NAME, OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: "Comunicados de Prensa | Rivera Cheves & Asociados" },
  description: `Comunicados oficiales del bufete Rivera Cheves & Asociados — resoluciones judiciales, posiciones públicas y novedades del bufete. ${RC_COMUNICADOS.length} comunicados publicados.`,
  alternates: { canonical: `${SITE_URL}/comunicados` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/comunicados`,
    title: `Comunicados de Prensa | ${SITE_NAME}`,
    description: "Comunicados oficiales del bufete Rivera Cheves & Asociados — resoluciones, posiciones y noticias.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Comunicados | ${SITE_NAME}` }],
  },
  twitter: { card: "summary_large_image", title: `Comunicados | ${SITE_NAME}`, images: [OG_IMAGE] },
  keywords: [
    "comunicado de prensa costa rica",
    "comunicado abogado joseph rivera",
    "bufete rivera cheves noticias",
    "prensa legal costa rica",
    "comunicado femicidio costa rica",
  ],
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Comunicados de Prensa — Rivera Cheves & Asociados",
  url: `${SITE_URL}/comunicados`,
  numberOfItems: RC_COMUNICADOS.length,
  itemListElement: [...RC_COMUNICADOS]
    .sort((a, b) => b.date.localeCompare(a.date))
    .map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.title,
      url: `${SITE_URL}/comunicados/${c.slug}`,
    })),
};

const R = "#7e0102";

function formatDate(d: string) {
  const months = [
    "enero","febrero","marzo","abril","mayo","junio",
    "julio","agosto","setiembre","octubre","noviembre","diciembre",
  ];
  const [y, m, day] = d.split("-");
  return `${Number(day)} de ${months[Number(m) - 1]} de ${y}`;
}

export default function ComunicadosPage() {
  const sorted = [...RC_COMUNICADOS].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <SchemaOrg data={itemListSchema} />
      <div className="rc-page">

        {/* ── HERO ── */}
        <section style={{ background: "var(--paper)", padding: "clamp(60px,8vw,120px) 0" }}>
          <div className="rc-wrap">
            {/* Breadcrumb */}
            <Reveal>
              <div style={{
                display: "flex", alignItems: "center", gap: 10, marginBottom: 20,
                fontFamily: "var(--font-mono, ui-monospace)", fontSize: 11,
                letterSpacing: ".12em", textTransform: "uppercase", color: "var(--fg-5)",
              }}>
                <Link href="/prensa" style={{ color: "var(--fg-4)" }}>Prensa</Link>
                <span>/</span>
                <span style={{ color: R }}>Comunicados</span>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="rc-h1">Comunicados de <em className="rc-em">Prensa</em></h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="rc-lede" style={{ marginTop: 28, maxWidth: "56ch" }}>
                Posiciones oficiales, resoluciones judiciales y novedades emitidas
                directamente por el bufete Rivera Cheves &amp; Asociados para medios
                de comunicación y público en general.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── LISTADO ── */}
        <section style={{ background: "#fff", padding: "var(--pad-y) 0" }}>
          <div className="rc-wrap" style={{ maxWidth: 900 }}>

            {sorted.length === 0 && (
              <p className="rc-body" style={{ padding: "60px 0", color: "var(--fg-4)" }}>
                No hay comunicados publicados aún.
              </p>
            )}

            <div style={{ display: "flex", flexDirection: "column" }}>
              {sorted.map((c, i) => (
                <Reveal key={c.slug} delay={i * 60}>
                  <Link href={`/comunicados/${c.slug}`} style={{
                    position: "relative",
                    display: "grid",
                    gridTemplateColumns: "180px 1fr 32px",
                    gap: "clamp(20px,3vw,48px)",
                    padding: "clamp(28px,3.5vw,44px) 0",
                    borderTop: "1px solid var(--hairline)",
                    textDecoration: "none",
                    alignItems: "start",
                    transition: "background .2s",
                  }} className="com-row">

                    {/* Fecha */}
                    <div>
                      <div style={{
                        display: "inline-block",
                        padding: "3px 8px",
                        background: "var(--r-tint, #fff0f0)",
                        fontFamily: "var(--font-mono, ui-monospace)", fontSize: 9,
                        letterSpacing: ".12em", textTransform: "uppercase", color: R,
                        marginBottom: 8,
                      }}>
                        Comunicado
                      </div>
                      <div style={{
                        fontFamily: "var(--font-mono, ui-monospace)", fontSize: 11,
                        color: "var(--fg-4)", lineHeight: 1.5,
                      }}>
                        {formatDate(c.date)}
                      </div>
                    </div>

                    {/* Contenido */}
                    <div>
                      <h2 style={{
                        fontFamily: "var(--font-sans, system-ui)", fontWeight: 500,
                        fontSize: "clamp(17px,1.7vw,22px)", lineHeight: 1.3,
                        letterSpacing: "-0.01em", color: "var(--ink)",
                        marginBottom: 12,
                      }}>{c.title}</h2>
                      <p style={{ fontSize: 14, color: "var(--fg-3)", lineHeight: 1.65, marginBottom: 14 }}>
                        {c.summary}
                      </p>
                      {c.tags && c.tags.length > 0 && (
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                          {c.tags.map(tag => (
                            <span key={tag} style={{
                              padding: "3px 8px",
                              fontFamily: "var(--font-mono, ui-monospace)", fontSize: 9,
                              letterSpacing: ".1em", textTransform: "uppercase",
                              color: "var(--fg-4)", background: "var(--paper-2, #f3eee5)",
                            }}>{tag}</span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Arrow */}
                    <span style={{ color: R, fontSize: 18, paddingTop: 4, flexShrink: 0 }}>→</span>
                  </Link>
                </Reveal>
              ))}
              <div style={{ borderTop: "1px solid var(--hairline)" }} />
            </div>
          </div>

          <style>{`
            @media (max-width: 700px){
              .com-row{ grid-template-columns: 1fr !important; }
              .com-row > :last-child{ display: none !important; }
            }
            .com-row:hover h2{ color: ${R}; }
            .com-row:hover{ background: var(--paper-2); }
          `}</style>
        </section>

        <CTABand />
      </div>
    </>
  );
}
