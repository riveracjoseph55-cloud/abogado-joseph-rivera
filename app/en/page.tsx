import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SchemaOrg from "@/components/SchemaOrg";
import SetHtmlLang from "@/components/SetHtmlLang";
import { WA } from "@/lib/data";
import { SITE_URL, SITE_NAME, OG_IMAGE, schemaLegalService, schemaAttorney } from "@/lib/seo";

const PAGE_URL = `${SITE_URL}/en`;

export const metadata: Metadata = {
  title: { absolute: "Criminal Defense Attorney in Costa Rica | Rivera Cheves & Asociados" },
  description:
    "Lic. Joseph Rivera Cheves — criminal defense attorney in Costa Rica. Over 10 years handling femicide cases, organized crime, and financial crimes, with international coordination experience.",
  alternates: {
    canonical: PAGE_URL,
    languages: { "es-CR": SITE_URL, en: PAGE_URL, "x-default": SITE_URL },
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Criminal Defense Attorney in Costa Rica | Rivera Cheves & Asociados",
    description:
      "Lic. Joseph Rivera Cheves — criminal defense attorney in Costa Rica. Over 10 years handling femicide cases, organized crime, and financial crimes, with international coordination experience.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `${SITE_NAME} — Criminal Defense Attorney Costa Rica` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Criminal Defense Attorney in Costa Rica | Rivera Cheves & Asociados",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

const AREAS = [
  "Femicide and gender-violence cases",
  "Organized crime",
  "Financial and economic crimes",
  "Forensic compliance",
  "International case coordination",
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: PAGE_URL }],
};

export default function EnglishHomePage() {
  return (
    <>
      <SetHtmlLang lang="en" />
      <SchemaOrg data={[breadcrumbSchema, schemaLegalService, schemaAttorney]} />
      <div className="rc-page">
        <section className="rc-section" style={{ background: "var(--ink)", color: "#fff" }}>
          <div className="rc-wrap">
            <Reveal>
              <div className="rc-eyebrow on-r">Criminal Defense With Commitment and Ethics</div>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="rc-display" style={{ color: "#fff", margin: "18px 0 24px" }}>
                Criminal Defense Attorney <br />in <em className="rc-em">Costa Rica</em>.
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className="rc-lede" style={{ color: "rgba(255,255,255,.68)", maxWidth: "58ch" }}>
                Strategic legal representation in some of the country&apos;s most complex cases —
                femicide, organized crime, financial crimes, and international legal advisory.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 32 }}>
                <a href={WA} target="_blank" rel="noopener" className="rc-btn brand">
                  Contact via WhatsApp <span className="arrow" aria-hidden="true">→</span>
                </a>
                <Link href="/en/casos/carla-stefaniak" className="rc-btn ghost-on-r">
                  Read the Carla Stefaniak Case
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="rc-section">
          <div className="rc-wrap" style={{ maxWidth: 820 }}>
            <Reveal>
              <div className="rc-eyebrow">The Firm</div>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="rc-h2" style={{ margin: "16px 0 22px" }}>
                Rivera Cheves <em className="rc-em">&amp; Asociados</em>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="rc-body" style={{ marginBottom: 20 }}>
                Lic. Joseph Alfonso Rivera Cheves is a criminal defense attorney based in San José,
                Costa Rica, with over 10 years of litigation experience. His practice is best known
                for representing victims&apos; families in high-profile femicide cases, alongside
                work in organized crime, financial crime, and forensic compliance — often
                coordinating with foreign authorities when a case involves victims or parties from
                outside Costa Rica, as in the <Link href="/en/casos/carla-stefaniak" style={{ color: "var(--r)", textDecoration: "underline" }}>Carla Stefaniak case</Link>, where the firm coordinated FBI cooperation
                in the Costa Rican forensic investigation.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {AREAS.map((a) => (
                  <li key={a} style={{ display: "flex", alignItems: "center", gap: 12, fontFamily: "var(--font-sans)", fontSize: 16, color: "var(--fg-2)" }}>
                    <span aria-hidden="true" style={{ width: 6, height: 6, background: "var(--r)", transform: "rotate(45deg)", flexShrink: 0 }} />
                    {a}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <section className="rc-section" style={{ background: "var(--paper-2)" }}>
          <div className="rc-wrap" style={{ maxWidth: 820 }}>
            <Reveal>
              <div className="rc-eyebrow">Featured Case</div>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="rc-h2" style={{ margin: "16px 0 20px" }}>
                The <em className="rc-em">Carla Stefaniak</em> Case
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="rc-body" style={{ marginBottom: 24, maxWidth: "68ch" }}>
                An American tourist of Venezuelan descent, murdered at a vacation rental in Escazú,
                Costa Rica, in 2018. Lic. Rivera Cheves represented her father and coordinated the
                involvement of FBI agents in the forensic investigation carried out in Costa Rica.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <Link href="/en/casos/carla-stefaniak" className="rc-btn primary">
                Read the full case <span className="arrow" aria-hidden="true">→</span>
              </Link>
            </Reveal>
          </div>
        </section>

        <section className="rc-section" style={{ textAlign: "center" }}>
          <div className="rc-wrap" style={{ maxWidth: 640 }}>
            <Reveal>
              <span className="rc-hr brand" style={{ margin: "0 auto 28px" }} />
              <h2 className="rc-h2" style={{ marginBottom: 16 }}>Need a criminal defense attorney in Costa Rica?</h2>
              <p className="rc-lede" style={{ margin: "0 auto 32px" }}>
                Rivera Cheves &amp; Asociados represents clients — including foreign nationals and
                their families — in complex criminal matters across Costa Rica.
              </p>
              <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
                <a href={WA} target="_blank" rel="noopener" className="rc-btn brand">
                  Contact via WhatsApp <span className="arrow" aria-hidden="true">→</span>
                </a>
              </div>
              <p style={{ marginTop: 28 }}>
                <a href={SITE_URL} className="rc-link" style={{ color: "var(--fg-4)", fontSize: 13 }}>Ver este sitio en español →</a>
              </p>
            </Reveal>
          </div>
        </section>
      </div>
    </>
  );
}
