import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import SchemaOrg from "@/components/SchemaOrg";
import { RC_CASES } from "@/lib/data";
import RichText from "@/components/RichText";
import { SITE_URL, SITE_NAME, OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: "Casos de Femicidio Costa Rica | Abogado Joseph Rivera" },
  description:
    "Casos de femicidio y crimen en Costa Rica: Nadia Peraza (condena de 50 años), Carla Stefaniak, Junieysis Merlo. Defensa legal del Lic. Joseph Rivera Cheves — abogado penalista.",
  alternates: { canonical: `${SITE_URL}/casos` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/casos`,
    title: `Casos de Alto Perfil | Abogado Joseph Rivera | ${SITE_NAME}`,
    description:
      "Femicidios y casos de alto impacto en Costa Rica. Nadia Peraza (condena de 50 años), Carla Stefaniak, Junieysis Merlo — representación del Lic. Joseph Rivera Cheves.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Casos | ${SITE_NAME}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Casos Joseph Rivera | Abogado Penalista Costa Rica`,
    images: [OG_IMAGE],
  },
  keywords: [
    "nadia peraza",
    "caso nadia peraza",
    "nadia peraza abogado",
    "joseph rivera nadia peraza",
    "casos femicidio costa rica",
    "abogado femicidio costa rica",
    "caso carla stefaniak",
    "abogado joseph rivera casos",
    "abogado penalista costa rica casos",
    "femicidio abogado san jose",
  ],
};

const caseListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Casos de Alto Perfil — Rivera Cheves & Asociados",
  url: `${SITE_URL}/casos`,
  numberOfItems: RC_CASES.length,
  itemListElement: RC_CASES.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.name,
    description: c.short,
    url: `${SITE_URL}/casos/${c.slug}`,
  })),
};

const R = "#7e0102";

// Orden cronológico inverso (más reciente primero)
const sortedCases = [...RC_CASES].sort(
  (a, b) => parseInt(b.year) - parseInt(a.year)
);

export default function CasosPage() {
  return (
    <>
      <SchemaOrg data={caseListSchema} />
      <div className="rc-page">

        {/* ── HERO ── */}
        <section style={{ background: "var(--paper)", padding: "clamp(60px,8vw,120px) 0" }}>
          <div className="rc-wrap">
            <Reveal>
              <div className="rc-eyebrow rc-eyebrow-anim" style={{ marginBottom: 20 }}>
                Casos destacados · {RC_CASES.length.toString().padStart(2, "0")}
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="rc-h1">
                Defensa en <em className="rc-em">Femicidios</em>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="rc-lede" style={{ marginTop: 32, maxWidth: "56ch" }}>
                Representación legal a familias de víctimas en los casos más emblemáticos
                de violencia de género en Costa Rica y Centroamérica. Cada dossier documenta
                los hechos, la cronología procesal y la resolución.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── BANNER FULL-BLEED TRIBUNAL ── */}
        <section
          aria-label="El trabajo en tribunal"
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "16/9",
            background: "#0d0d0d",
            overflow: "hidden",
          }}
        >
          <Image
            src="/images/joseph/tribunal.jpg"
            alt="Abogado penalista Joseph Rivera Cheves en audiencia oral activa — Tribunal Penal de Costa Rica — defensa en femicidios y crimen organizado"
            fill
            sizes="100vw"
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, rgba(0,0,0,.78) 0%, rgba(0,0,0,.4) 55%, transparent 100%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              padding: "0 var(--pad-x)",
            }}
          >
            <div className="rc-wrap" style={{ width: "100%" }}>
              <Reveal variant="fade">
                <div
                  className="rc-eyebrow on-r"
                  style={{ marginBottom: 16, color: "rgba(255,255,255,.7)" }}
                >
                  Sala de juicio · Tribunal Penal
                </div>
              </Reveal>
              <Reveal delay={80} variant="slide-left">
                <h2
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 300,
                    fontSize: "clamp(28px,4.5vw,64px)",
                    lineHeight: 1.05,
                    letterSpacing: "-0.025em",
                    color: "#fff",
                    maxWidth: "22ch",
                    marginBottom: 16,
                  }}
                >
                  Litigación <em className="rc-em" style={{ color: "#fff", opacity: 0.55 }}>
                    oral activa
                  </em>
                </h2>
              </Reveal>
              <Reveal delay={160} variant="fade">
                <p
                  style={{
                    fontSize: "clamp(14px,1.4vw,18px)",
                    lineHeight: 1.6,
                    color: "rgba(255,255,255,.78)",
                    maxWidth: "44ch",
                  }}
                >
                  Querella privada, acción civil resarcitoria y compliance forense aplicado
                  en cada uno de los casos representados.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── LISTA DE CASOS ── */}
        <section style={{ background: "#fff", padding: "clamp(60px,8vw,100px) 0" }}>
          <div className="rc-wrap">
            <div style={{ display: "flex", flexDirection: "column" }}>
              {sortedCases.map((c, i) => (
                <Reveal key={c.slug} delay={i * 80}>
                  <div
                    id={c.slug}
                    style={{
                      position: "relative",
                      padding: "clamp(44px,5.5vw,72px) 0",
                      borderTop: "1px solid var(--hairline-strong)",
                      overflow: "hidden",
                    }}
                    className="case-row"
                  >
                    {/* Año — marca de agua decorativa, no afecta el layout */}
                    <div
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        right: "-0.02em",
                        top: "50%",
                        transform: "translateY(-55%)",
                        fontSize: "clamp(100px,16vw,240px)",
                        fontWeight: 200,
                        lineHeight: 1,
                        color:
                          c.statusTone === "active"
                            ? "rgba(126,1,2,0.05)"
                            : "rgba(0,0,0,0.04)",
                        userSelect: "none",
                        pointerEvents: "none",
                        letterSpacing: "-0.05em",
                        zIndex: 0,
                        fontFamily: "var(--font-sans, system-ui)",
                      }}
                    >
                      {c.year}
                    </div>

                    {/* Contenido */}
                    <div style={{ position: "relative", zIndex: 1 }}>

                      {/* ── Cabecera de fila ── */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          flexWrap: "wrap",
                          gap: "8px 20px",
                          marginBottom: 28,
                        }}
                      >
                        <span className="rc-meta" style={{ color: "var(--fg-5)" }}>
                          Caso {String(i + 1).padStart(2, "0")} · {c.yearRange}
                        </span>
                        <span
                          style={{
                            display: "inline-block",
                            padding: "4px 10px",
                            background: c.statusTone === "active" ? R : "#0d0d0d",
                            color: "#fff",
                            fontFamily: "var(--font-mono, monospace)",
                            fontSize: 10,
                            letterSpacing: ".14em",
                            textTransform: "uppercase",
                          }}
                        >
                          {c.status}
                        </span>
                      </div>

                      {/* ── Grid: título izquierda / descripción derecha ── */}
                      <div className="case-body">
                        {/* Izquierda */}
                        <div>
                          <h2
                            className="rc-h2"
                            style={{ marginBottom: 16, lineHeight: 1.1 }}
                          >
                            {c.name}
                          </h2>
                          <div
                            className="rc-meta"
                            style={{ color: "var(--fg-4)", marginBottom: 20 }}
                          >
                            {c.location}
                          </div>
                          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                            {c.tags.map((t) => (
                              <span key={t} className="rc-tag">{t}</span>
                            ))}
                          </div>
                        </div>

                        {/* Derecha */}
                        <div>
                          <RichText
                            text={c.short}
                            className="rc-body"
                            style={{ marginBottom: 24, fontSize: 16 }}
                          />
                          <div
                            style={{
                              display: "grid",
                              gridTemplateColumns: "1fr 1fr",
                              gap: 14,
                              marginBottom: 28,
                              paddingTop: 18,
                              borderTop: "1px solid var(--hairline)",
                            }}
                          >
                            <div>
                              <div
                                className="rc-meta"
                                style={{ color: "var(--fg-5)", marginBottom: 4 }}
                              >
                                Rol
                              </div>
                              <div style={{ fontSize: 14, fontWeight: 500 }}>
                                {c.role}
                              </div>
                            </div>
                            <div>
                              <div
                                className="rc-meta"
                                style={{ color: "var(--fg-5)", marginBottom: 4 }}
                              >
                                Sentencia
                              </div>
                              <div
                                style={{
                                  fontSize: 14,
                                  fontWeight: 600,
                                  color:
                                    c.statusTone === "active" ? R : "#0d0d0d",
                                }}
                              >
                                {c.sentence}
                              </div>
                            </div>
                          </div>
                          <Link
                            href={`/casos/${c.slug}`}
                            className="case-link"
                          >
                            Ver caso completo{" "}
                            <span className="arrow">→</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
              <div style={{ borderTop: "1px solid var(--hairline-strong)" }} />
            </div>
          </div>
        </section>

        <CTABand />
      </div>

      <style>{`
        .case-body {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: clamp(24px,4vw,64px);
          align-items: start;
        }
        @media (max-width: 860px) {
          .case-body { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
        @media (max-width: 600px) {
          .case-body { gap: 20px !important; }
        }
      `}</style>
    </>
  );
}
