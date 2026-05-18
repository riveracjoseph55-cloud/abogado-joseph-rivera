import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import SchemaOrg from "@/components/SchemaOrg";
import { RC_CASES } from "@/lib/data";
import { SITE_URL, SITE_NAME, OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Casos de Alto Perfil",
  description:
    "Casos emblemáticos de femicidio y crimen en Costa Rica: Nadia Peraza (79 años), Carla Stefaniak (internacional), Junieysis Merlo y violencia de género.",
  alternates: { canonical: `${SITE_URL}/casos` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/casos`,
    title: `Casos de Alto Perfil | ${SITE_NAME}`,
    description:
      "Representación legal en femicidios y casos de alto impacto en Costa Rica. Nadia Peraza (79 años), Carla Stefaniak y más.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Casos | ${SITE_NAME}` }],
  },
  twitter: { card: "summary_large_image", title: `Casos de Alto Perfil | ${SITE_NAME}`, images: [OG_IMAGE] },
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

export default function CasosPage() {
  return (
    <>
    <SchemaOrg data={caseListSchema} />
    <div className="rc-page">

      {/* ── HERO ── */}
      <section style={{ background: "var(--paper)", padding: "clamp(60px,8vw,120px) 0" }}>
        <div className="rc-wrap">
          <Reveal>
            <div className="rc-eyebrow" style={{ marginBottom: 20 }}>Casos destacados · 02 / 04</div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="rc-h1">Defensa en <em className="rc-em">Femicidios</em></h1>
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
      <section aria-label="El trabajo en tribunal" style={{
        position: "relative",
        width: "100%",
        aspectRatio: "16/9",
        background: "#0d0d0d",
        overflow: "hidden",
      }}>
        <Image
          src="/images/joseph/tribunal.jpg"
          alt="Lic. Joseph Rivera Cheves en audiencia oral junto a colega abogado — tribunal penal de Costa Rica"
          fill
          sizes="100vw"
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div aria-hidden="true" style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(90deg, rgba(0,0,0,.78) 0%, rgba(0,0,0,.4) 55%, transparent 100%)",
        }}/>
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", alignItems: "center",
          padding: "0 var(--pad-x)",
        }}>
          <div className="rc-wrap" style={{ width: "100%" }}>
            <div className="rc-eyebrow on-r" style={{ marginBottom: 16, color: "rgba(255,255,255,.7)" }}>
              Sala de juicio · Tribunal Penal
            </div>
            <h2 style={{
              fontFamily: "var(--font-sans)", fontWeight: 300,
              fontSize: "clamp(28px,4.5vw,64px)", lineHeight: 1.05,
              letterSpacing: "-0.025em", color: "#fff", maxWidth: "22ch", marginBottom: 16,
            }}>
              Litigación <em className="rc-em" style={{ color: "#fff", opacity: .55 }}>oral activa</em>
            </h2>
            <p style={{
              fontSize: "clamp(14px,1.4vw,18px)", lineHeight: 1.6,
              color: "rgba(255,255,255,.78)", maxWidth: "44ch",
            }}>
              Querella privada, acción civil resarcitoria y compliance forense aplicado
              en cada uno de los casos representados.
            </p>
          </div>
        </div>
      </section>

      {/* ── LISTA DE CASOS ── */}
      <section style={{ background: "#fff", padding: "clamp(60px,8vw,100px) 0" }}>
        <div className="rc-wrap">
          <div style={{ display: "flex", flexDirection: "column" }}>
            {RC_CASES.map((c, i) => (
              <Reveal key={c.slug} delay={i * 80}>
                <div id={c.slug} style={{
                  display: "grid",
                  gridTemplateColumns: "160px 1fr 1.6fr 64px",
                  gap: "clamp(20px,3vw,48px)",
                  padding: "clamp(36px,5vw,72px) 0",
                  borderTop: "1px solid var(--hairline-strong)",
                  alignItems: "start",
                }} className="case-row">

                  <div>
                    <div className="rc-meta" style={{ color: "var(--fg-5)", marginBottom: 12 }}>Caso {String(i + 1).padStart(2, "0")}</div>
                    <div style={{
                      fontFamily: "var(--font-sans, system-ui)", fontWeight: 200,
                      fontSize: "clamp(56px,7vw,108px)", lineHeight: 0.9, letterSpacing: "-0.04em",
                      color: "#0d0d0d",
                    }}>
                      {c.year}
                    </div>
                  </div>

                  <div>
                    <span style={{
                      display: "inline-block", padding: "4px 10px",
                      background: c.statusTone === "active" ? R : "#0d0d0d",
                      color: "#fff",
                      fontFamily: "var(--font-mono, monospace)", fontSize: 10,
                      letterSpacing: ".14em", textTransform: "uppercase", marginBottom: 18,
                    }}>{c.status}</span>
                    <h2 className="rc-h2" style={{ marginBottom: 14 }}>{c.name}</h2>
                    <div className="rc-meta" style={{ color: "var(--fg-4)", marginBottom: 16 }}>{c.location}</div>
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                      {c.tags.map(t => (
                        <span key={t} className="rc-tag">{t}</span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="rc-body" style={{ marginBottom: 24, fontSize: 16 }}>{c.short}</p>
                    <div style={{
                      display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14,
                      marginBottom: 28, paddingTop: 18, borderTop: "1px solid var(--hairline)",
                    }}>
                      <div>
                        <div className="rc-meta" style={{ color: "var(--fg-5)", marginBottom: 4 }}>Rol</div>
                        <div style={{ fontSize: 14, fontWeight: 500 }}>{c.role}</div>
                      </div>
                      <div>
                        <div className="rc-meta" style={{ color: "var(--fg-5)", marginBottom: 4 }}>Sentencia</div>
                        <div style={{ fontSize: 14, fontWeight: 600, color: c.statusTone === "active" ? R : "#0d0d0d" }}>{c.sentence}</div>
                      </div>
                    </div>

                    <Link href={`/casos/${c.slug}`} style={{
                      display: "inline-flex", alignItems: "center", gap: 8,
                      fontSize: 13, fontWeight: 600, color: R,
                      borderBottom: `1px solid ${R}`, paddingBottom: 2,
                    }}>
                      Ver caso completo →
                    </Link>
                  </div>

                  <div style={{
                    fontFamily: "var(--font-mono, monospace)", fontSize: 11,
                    letterSpacing: ".14em", color: "var(--fg-5)", textAlign: "right",
                    textTransform: "uppercase", paddingTop: 8,
                  }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
              </Reveal>
            ))}
            <div style={{ borderTop: "1px solid var(--hairline-strong)" }}/>
          </div>
        </div>
        <style>{`
          @media (max-width: 1000px) {
            .case-row { grid-template-columns: 1fr !important; gap: 20px !important; }
            .case-row > div:last-child { display: none !important; }
          }
          @media (max-width: 600px) {
            .case-row > div:first-child div:last-child { font-size: clamp(48px,12vw,80px) !important; }
          }
        `}</style>
      </section>

      <CTABand />
    </div>
    </>
  );
}
