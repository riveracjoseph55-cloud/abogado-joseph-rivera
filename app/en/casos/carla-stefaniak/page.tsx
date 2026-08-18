import type { Metadata } from "next";
import Link from "next/link";
import RichText from "@/components/RichText";
import Reveal from "@/components/Reveal";
import SchemaOrg from "@/components/SchemaOrg";
import SetHtmlLang from "@/components/SetHtmlLang";
import { WA } from "@/lib/data";
import { SITE_URL, SITE_NAME, OG_IMAGE, schemaLegalService } from "@/lib/seo";

const PAGE_URL = `${SITE_URL}/en/casos/carla-stefaniak`;
const ES_URL = `${SITE_URL}/casos/carla-stefaniak`;

export const metadata: Metadata = {
  title: { absolute: "The Carla Stefaniak Case | Rivera Cheves & Asociados" },
  description:
    "American tourist Carla Stefaniak was murdered in Costa Rica in 2018. Lic. Joseph Rivera Cheves represented her father, coordinating FBI cooperation in the forensic investigation.",
  alternates: {
    canonical: PAGE_URL,
    languages: { "es-CR": ES_URL, en: PAGE_URL, "x-default": ES_URL },
  },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: "The Carla Stefaniak Case",
    description:
      "American tourist Carla Stefaniak was murdered in Costa Rica in 2018. Lic. Joseph Rivera Cheves represented her father, coordinating FBI cooperation in the forensic investigation.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Rivera Cheves & Asociados" }],
  },
  twitter: { card: "summary_large_image", title: "The Carla Stefaniak Case", images: [OG_IMAGE] },
  robots: { index: true, follow: true },
};

const FACTS = [
  { k: "Year of the events", v: "November 2018" },
  { k: "Jurisdiction", v: "Escazú, San José, Costa Rica" },
  { k: "Victim's nationality", v: "U.S. / Venezuela" },
  { k: "Cooperation", v: "FBI · 2018" },
  { k: "Media coverage", v: "Telemundo, CNN, international press" },
  { k: "Theory maintained by the firm", v: "5–7 people involved in the crime" },
];

const TIMELINE = [
  { date: "2018 · November", label: "The events", text: "Carla Stefaniak travels to Costa Rica to celebrate her birthday. Days later she is reported missing after staying at an Airbnb in San Antonio de Escazú." },
  { date: "2018 · December", label: "Discovery", text: "Costa Rican authorities locate her remains buried a short distance from the property. The case gains immediate international media attention." },
  { date: "2018 · December", label: "FBI cooperation", text: "The firm coordinates the involvement of FBI agents in the forensic proceedings carried out in Costa Rica. Advanced biological analysis is performed at the scene." },
  { date: "2019", label: "Taking the case", text: "Lic. Rivera Cheves formally represents Carla Stefaniak's father in the Costa Rican judicial process." },
  { date: "2019 — 2020", label: "Trial and sentencing", text: "The firm's theory is maintained throughout: 5–7 people involved. Full legal support is provided to the family across the entire criminal process." },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/en` },
    { "@type": "ListItem", position: 2, name: "Carla Stefaniak Case", item: PAGE_URL },
  ],
};

export default function CarlaStefaniakEnPage() {
  return (
    <>
      <SetHtmlLang lang="en" />
      <SchemaOrg data={[breadcrumbSchema, schemaLegalService]} />
      <div className="rc-page">
        <section className="rc-section" style={{ background: "var(--paper)", paddingBottom: 0 }}>
          <div className="rc-wrap">
            <nav aria-label="Breadcrumb" style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--fg-5)", marginBottom: 24, display: "flex", gap: 8 }}>
              <Link href="/en" style={{ color: "var(--fg-5)" }}>Home</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page" style={{ color: "var(--r)" }}>Carla Stefaniak Case</span>
            </nav>
            <Reveal>
              <div className="rc-eyebrow">Case Study · International Cooperation</div>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="rc-h1" style={{ margin: "18px 0 20px" }}>
                The <em className="rc-em">Carla Stefaniak</em> Case
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className="rc-lede" style={{ maxWidth: "62ch" }}>
                An American tourist of Venezuelan descent, murdered at a vacation rental in Escazú, Costa Rica.
                Lic. Joseph Rivera Cheves represented her father and coordinated the involvement of FBI agents
                in the forensic investigation carried out in Costa Rica.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="rc-section" style={{ background: "var(--paper)" }}>
          <div className="rc-wrap" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 1, background: "var(--hairline)", border: "1px solid var(--hairline)" }}>
            {FACTS.map((f) => (
              <div key={f.k} style={{ background: "var(--white)", padding: "20px 22px" }}>
                <div className="rc-meta" style={{ marginBottom: 8 }}>{f.k}</div>
                <div className="rc-h4">{f.v}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="rc-section">
          <div className="rc-wrap" style={{ maxWidth: 820 }}>
            <Reveal>
              <h2 className="rc-h2" style={{ marginBottom: 20 }}>The Facts</h2>
            </Reveal>
            <RichText
              text="In late November 2018, **Carla Stefaniak** — an American tourist of Venezuelan descent — traveled to Costa Rica to celebrate her birthday and **stayed at a vacation rental (Airbnb) in San Antonio de Escazú**. She was reported missing a few days later. **Her body was found buried and wrapped in plastic** a short distance from the property, under circumstances suggesting more than one person was involved."
              className="rc-body"
              style={{ marginBottom: 36 }}
            />

            <Reveal>
              <h2 className="rc-h2" style={{ marginBottom: 20 }}>The Challenge</h2>
            </Reveal>
            <RichText
              text="The initial theory from Costa Rica's Public Prosecutor's Office pointed to **a lone robbery carried out by the property's security guard**. The defense for the accused repeatedly argued that **the crime scene had been contaminated**, seeking to exclude the forensic evidence gathered by Costa Rican authorities."
              className="rc-body"
              style={{ marginBottom: 36 }}
            />

            <Reveal>
              <h2 className="rc-h2" style={{ marginBottom: 20 }}>The Strategy</h2>
            </Reveal>
            <RichText
              text="From the early stages, Rivera Cheves maintained a different procedural theory: **that between 5 and 7 people connected to the property were involved** in the attack and the subsequent concealment of the body — not a single perpetrator. Given the victim's U.S. citizenship, the firm **coordinated and facilitated the involvement of FBI agents** from the United States in the forensic proceedings carried out in Costa Rica in 2018. This cross-border cooperation made it possible to run **advanced biological analysis in the room where the attack occurred**, ensuring the scientific evidence would withstand the defense's contamination objections."
              className="rc-body"
              style={{ marginBottom: 8 }}
            />
          </div>
        </section>

        <section className="rc-section" style={{ background: "var(--ink)", color: "#fff" }}>
          <div className="rc-wrap" style={{ maxWidth: 760 }}>
            <Reveal>
              <div className="rc-eyebrow on-r" style={{ marginBottom: 18 }}>Timeline</div>
            </Reveal>
            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              {TIMELINE.map((t, i) => (
                <Reveal key={i} delay={i * 40}>
                  <div style={{ display: "grid", gridTemplateColumns: "140px 1fr", gap: 20, borderTop: "1px solid rgba(255,255,255,0.14)", paddingTop: 18 }}>
                    <div>
                      <div className="rc-meta" style={{ color: "var(--on-r-soft)" }}>{t.date}</div>
                      <div className="rc-h4" style={{ color: "#fff", marginTop: 4 }}>{t.label}</div>
                    </div>
                    <p className="rc-body" style={{ color: "var(--on-r-mute)" }}>{t.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="rc-section">
          <div className="rc-wrap" style={{ maxWidth: 760, textAlign: "center" }}>
            <Reveal>
              <span className="rc-hr brand" style={{ margin: "0 auto 28px" }} />
              <p className="rc-h3" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 400, color: "var(--fg-2)", marginBottom: 16 }}>
                &ldquo;The case was a milestone in the international visibility of Costa Rica&apos;s criminal justice
                system and in the protection of foreign citizens in the country.&rdquo;
              </p>
              <p className="rc-meta">On the international significance of the case</p>
            </Reveal>
          </div>
        </section>

        <section className="rc-section" style={{ background: "var(--paper-2)", textAlign: "center" }}>
          <div className="rc-wrap" style={{ maxWidth: 640 }}>
            <Reveal>
              <h2 className="rc-h2" style={{ marginBottom: 16 }}>Need a criminal defense attorney in Costa Rica?</h2>
              <p className="rc-lede" style={{ margin: "0 auto 32px" }}>
                Rivera Cheves &amp; Asociados represents clients — including foreign nationals and their
                families — in complex criminal matters across Costa Rica.
              </p>
              <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
                <a href={WA} target="_blank" rel="noopener" className="rc-btn brand">
                  Contact via WhatsApp <span className="arrow" aria-hidden="true">→</span>
                </a>
                <Link href="/en" className="rc-btn ghost">Back to English overview</Link>
              </div>
              <p style={{ marginTop: 28 }}>
                <a href={ES_URL} className="rc-link" style={{ color: "var(--fg-4)", fontSize: 13 }}>Ver esta página en español →</a>
              </p>
            </Reveal>
          </div>
        </section>
      </div>
    </>
  );
}
