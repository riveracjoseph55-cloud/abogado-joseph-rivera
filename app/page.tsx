import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import InstagramReel from "@/components/InstagramReel";
import SchemaOrg from "@/components/SchemaOrg";
import PremiumPanel from "@/components/PremiumPanel";
import { WA, RC_CASES, RC_PRESS, RC_ENTREVISTAS } from "@/lib/data";
import AreasExplorer from "@/components/AreasExplorer";
import { SITE_URL, SITE_NAME, OG_IMAGE, schemaLegalService, schemaAttorney, schemaFAQPage } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: "Abogado Penalista Costa Rica | Joseph Rivera Cheves" },
  description:
    "Abogado penalista en Costa Rica — Lic. Joseph Rivera Cheves. +10 años en femicidios, crimen organizado y delitos financieros. Consulta disponible 24/7.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Abogado Penalista Costa Rica | Joseph Rivera Cheves",
    description:
      "Abogado penalista en Costa Rica. Femicidios, crimen organizado, delitos financieros y asesoría internacional. Lic. Joseph Alfonso Rivera Cheves.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `${SITE_NAME} — Abogado Penalista Costa Rica` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abogado Penalista Costa Rica | Joseph Rivera Cheves",
    images: [OG_IMAGE],
  },
  keywords: [
    "abogado joseph rivera",
    "joseph rivera",
    "joseph rivera cheves",
    "abogado penalista costa rica",
    "abogado penal san jose",
    "nadia peraza",
    "nadia peraza caso",
    "bufete penal costa rica",
    "abogado femicidio costa rica",
    "defensa penal costa rica",
  ],
};

const R = "#7e0102";
const GOLD = "#c9a86a";

function PeopleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  );
}
function ShieldCheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2 4 5v6c0 5 3.4 8.7 8 10 4.6-1.3 8-5 8-10V5l-8-3Z"/><path d="m9 12 2 2 4-4"/>
    </svg>
  );
}
function ScaleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3v18"/><path d="M5 8h14"/><path d="M5 8 2 15a3 3 0 0 0 6 0Z"/><path d="M19 8l-3 7a3 3 0 0 0 6 0Z"/>
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2 4 5v6c0 5 3.4 8.7 8 10 4.6-1.3 8-5 8-10V5l-8-3Z"/>
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 11.5a8.5 8.5 0 0 1-12.4 7.55L3 20l1.05-5.4A8.5 8.5 0 1 1 21 11.5Z"/>
    </svg>
  );
}

// Paleta específica del hero principal (spec del usuario) — no toca --gold/--r globales
const HERO_BLACK    = "#070707";
const HERO_WINE     = "#720707";
const HERO_RED      = "#A50707";
const HERO_GOLD     = "#C8A45B";
const HERO_CREAM    = "#F4F1EA";
const HERO_GRAY     = "#B7B7B7";

const HERO_STATS = [
  { num: "50",   label: "Años — máximo legal CR, caso Nadia Peraza", icon: PeopleIcon },
  { num: "10+",  label: "Años de ejercicio como litigante penalista", icon: ShieldCheckIcon },
  { num: "07",   label: "Áreas de especialización jurídica", icon: ScaleIcon },
  { num: "24/7", label: "Disponibilidad para emergencias legales", icon: ShieldIcon },
];

// WhatsApp con mensaje para reservar el libro
const WA_RESERVA =
  "https://api.whatsapp.com/send?phone=50689980112&text=" +
  encodeURIComponent(
    'Hola, quiero reservar el libro «El Caníbal de la Refrigeradora» de Joseph Rivera. ¿Cómo lo adquiero?'
  );

// Casos ordenados cronológicamente — más reciente primero (igual que /casos)
const sortedCases = [...RC_CASES].sort(
  (a, b) => parseInt(b.year) - parseInt(a.year)
);

const faqs = [
  {
    q: "¿Quién es el abogado Joseph Rivera Cheves?",
    a: "El Lic. Joseph Alfonso Rivera Cheves es un abogado penalista costarricense con más de 10 años de trayectoria. Director del bufete Rivera Cheves & Asociados, ubicado en el Oficentro Sabana, San José. Máster en Compliance Penal, Auditor Líder ISO 37001 y docente en 6 universidades costarricenses. Ha representado a familias en los casos de femicidio más emblemáticos del país.",
  },
  {
    q: "¿En qué especialidades se enfoca el bufete de Joseph Rivera en Costa Rica?",
    a: "El bufete Rivera Cheves se especializa en derecho penal, lavado de dinero y crimen organizado, derecho corporativo y compliance, derecho laboral, derecho notarial, investigaciones criminales y asesoría estratégica internacional para empresas y particulares con vínculos en Centroamérica.",
  },
  {
    q: "¿Qué es el caso Nadia Peraza?",
    a: "El caso Nadia Peraza es uno de los femicidios más conmocionantes de Costa Rica: Nadia Peraza Espinoza, una joven madre de 21 años, desapareció en San Pablo de Heredia en 2024 y fue hallada desmembrada dentro de una refrigeradora. El Lic. Joseph Rivera Cheves representó a la familia como querellante y obtuvo una condena de 79 años, readecuada al máximo legal vigente en Costa Rica: 50 años de cárcel efectiva.",
  },
  {
    q: "¿Cómo contactar al abogado penalista Joseph Rivera?",
    a: "Puede contactar al Lic. Joseph Rivera Cheves por WhatsApp al +506 8998-0112 (disponible 24/7), por correo a jriveracheves@gmail.com, o visitando las oficinas en el Edificio 7, Oficentro La Sabana, San José, Costa Rica. El bufete atiende casos en todo el territorio nacional.",
  },
  {
    q: "¿Cuánto cuesta una consulta con un abogado penalista en Costa Rica?",
    a: "Los honorarios de un abogado penalista en Costa Rica varían según la complejidad del caso, el tipo de delito y la etapa procesal. El bufete Rivera Cheves & Asociados ofrece una primera consulta personalizada para evaluar el caso y proporcionar una estimación transparente. Contáctenos para coordinar una cita sin compromiso.",
  },
];

export default function Home() {
  return (
    <>
    <SchemaOrg data={[schemaLegalService, schemaAttorney]} />
    <div className="rc-page">

      {/* ── HERO ── */}
      <section className="hero2" style={{ background: HERO_BLACK }}>
        <Image
          src="/images/hero-judicial-bg.jpg"
          alt=""
          fill
          priority
          aria-hidden="true"
          className="hero2-bg"
          style={{ objectFit: "cover", objectPosition: "center 30%" }}
          sizes="100vw"
        />
        <span className="hero2-overlay" aria-hidden="true" />

        <div className="rc-wrap hero2-wrap">
          <div className="hero2-grid">
            <div className="hero2-copy">
              <Reveal>
                <div className="rc-hero-meta" style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 26 }}>
                  <span className="rc-hero-rule" style={{ display: "inline-block", width: 40, height: 1, background: HERO_WINE }}/>
                  <span style={{
                    fontFamily: "var(--font-mono, monospace)", fontSize: 11,
                    letterSpacing: ".14em", textTransform: "uppercase", color: HERO_GOLD,
                  }}>Defensa penal con compromiso y ética</span>
                </div>
              </Reveal>

              <h1 className="rc-display rc-hero-title hero2-title" style={{ color: HERO_CREAM }}>
                <span className="rc-hero-line"><span>Abogado Penalista</span></span>
                <span className="rc-hero-line"><span>en&nbsp;<em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: HERO_WINE }}>Costa Rica</em>.</span></span>
              </h1>

              <Reveal delay={160}>
                <p className="hero2-lede" style={{ color: HERO_GRAY }}>
                  Representación legal estratégica en los casos más complejos del país
                  — femicidios, crimen organizado, delitos financieros y asesoría
                  estratégica internacional.
                </p>
              </Reveal>

              <Reveal delay={240}>
                <div className="hero2-btns">
                  <a href={WA} target="_blank" rel="noopener" className="hero2-btn-primary">
                    <WhatsAppIcon /> Consulta por WhatsApp →
                  </a>
                  <Link href="/casos" className="hero2-btn-ghost">
                    Ver casos destacados →
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={280}>
                <div className="hero2-confidential">
                  <ShieldIcon /> Atención confidencial 24/7
                </div>
              </Reveal>
            </div>

            <Reveal delay={120}>
              <div className="hero2-photo-col">
                <div className="hero2-photo-wrap rc-hero-media">
                  <Image
                    src="/images/joseph/editorial-cutout.png"
                    alt="Lic. Joseph Alfonso Rivera Cheves, abogado penalista en Costa Rica — femicidios, crimen organizado y delitos financieros — Bufete Rivera Cheves, San José"
                    fill
                    style={{ objectFit: "contain", objectPosition: "bottom" }}
                    priority
                    sizes="(max-width: 900px) 80vw, 40vw"
                  />
                  <div className="hero2-badge">
                    <div className="hero2-badge-name1">Lic. Joseph Alfonso</div>
                    <div className="hero2-badge-name2">Rivera Cheves</div>
                    <div className="hero2-badge-role">Abogado Penalista</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Franja de indicadores */}
          <div className="hero2-stats">
            {HERO_STATS.map((s, i) => {
              const StatIcon = s.icon;
              return (
                <Reveal key={s.num} delay={i * 80}>
                  <div className="hero2-stat">
                    <span className="hero2-stat-icon"><StatIcon /></span>
                    <div>
                      <div className="hero2-stat-num">{s.num}</div>
                      <div className="hero2-stat-label">{s.label}</div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        <style>{`
          .hero2 { position: relative; overflow: hidden; }
          .hero2-bg { z-index: 0; opacity: .8; }
          .hero2-overlay {
            position: absolute; inset: 0; pointer-events: none; z-index: 1;
            background:
              linear-gradient(90deg, rgba(7,7,7,.88) 0%, rgba(7,7,7,.62) 42%, rgba(7,7,7,.25) 70%, rgba(7,7,7,.55) 100%),
              linear-gradient(0deg, ${HERO_BLACK} 0%, transparent 14%, transparent 88%, ${HERO_BLACK} 100%);
          }
          .hero2-wrap { position: relative; z-index: 2; }
          .hero2-grid {
            display: grid; grid-template-columns: 54% 46%;
            align-items: end;
            min-height: clamp(560px, 62vw, 740px);
          }
          .hero2-copy { padding: clamp(56px,8vw,88px) 0 clamp(40px,6vw,64px); max-width: 720px; }
          .hero2-title { margin-bottom: 26px; }
          .hero2-lede { font-size: clamp(15px,1.4vw,17px); line-height: 1.7; max-width: 52ch; margin-bottom: 32px; }
          .hero2-btns { display: flex; gap: 14px; flex-wrap: wrap; align-items: center; margin-bottom: 26px; }
          .hero2-btn-primary {
            display: inline-flex; align-items: center; gap: 10px;
            height: 58px; padding: 0 26px;
            background: ${HERO_WINE}; color: #fff;
            font-family: var(--font-sans, system-ui); font-size: 15px; font-weight: 700;
            border-radius: 8px; text-decoration: none;
            transition: background-color .25s ease, transform .25s ease;
          }
          .hero2-btn-primary:hover { background: ${HERO_RED}; transform: translateY(-2px); }
          .hero2-btn-ghost {
            display: inline-flex; align-items: center; gap: 8px;
            height: 58px; padding: 0 26px;
            background: transparent; color: #fff;
            border: 1px solid ${HERO_GOLD}; border-radius: 8px;
            font-family: var(--font-sans, system-ui); font-size: 15px; font-weight: 600;
            text-decoration: none;
            transition: background-color .25s ease;
          }
          .hero2-btn-ghost:hover { background: rgba(200,164,91,.12); }
          .hero2-confidential {
            display: flex; align-items: center; gap: 10px;
            font-family: var(--font-mono, monospace); font-size: 11px;
            letter-spacing: .1em; text-transform: uppercase; color: ${HERO_GOLD};
          }

          .hero2-photo-col { position: relative; height: 100%; display: flex; align-items: flex-end; justify-content: center; }
          .hero2-photo-wrap {
            position: relative; width: 100%; max-width: 480px;
            aspect-ratio: 857 / 1228; margin-left: auto;
          }
          .hero2-badge {
            position: absolute; left: 6%; right: 6%; bottom: 4%;
            padding: 14px 20px;
            background: rgba(7,7,7,.82);
            border: 1px solid rgba(200,164,91,.45);
            backdrop-filter: blur(6px);
          }
          .hero2-badge-name1 { font-family: var(--font-mono, monospace); font-size: 10px; letter-spacing: .12em; text-transform: uppercase; color: rgba(255,255,255,.6); margin-bottom: 3px; }
          .hero2-badge-name2 { font-family: var(--font-serif); font-size: 18px; font-weight: 700; color: #fff; line-height: 1.15; }
          .hero2-badge-role { font-family: var(--font-mono, monospace); font-size: 10px; letter-spacing: .12em; text-transform: uppercase; color: ${HERO_GOLD}; margin-top: 4px; }

          .hero2-stats {
            display: grid; grid-template-columns: repeat(4,1fr);
            border-top: 1px solid rgba(255,255,255,.1);
            padding: clamp(28px,3.5vw,40px) 0;
          }
          .hero2-stat { display: flex; align-items: center; gap: 14px; padding: 0 clamp(8px,1.5vw,20px); }
          .hero2-stat:not(:first-child) { border-left: 1px solid rgba(255,255,255,.1); }
          .hero2-stat-icon { color: ${HERO_RED}; flex-shrink: 0; }
          .hero2-stat-num { font-family: var(--font-sans, system-ui); font-weight: 700; font-size: 22px; line-height: 1; color: #fff; margin-bottom: 6px; }
          .hero2-stat-label { font-size: 12px; color: rgba(255,255,255,.5); line-height: 1.4; }

          @media (max-width: 900px) {
            .hero2-grid { grid-template-columns: 1fr; min-height: 0; align-items: stretch; }
            .hero2-copy { padding-bottom: 32px; max-width: none; }
            .hero2-photo-col { justify-content: center; margin-top: 8px; }
            .hero2-photo-wrap { max-width: 360px; margin: 0 auto; }
            .hero2-btns { flex-direction: column; align-items: stretch; }
            .hero2-btn-primary, .hero2-btn-ghost { width: 100%; justify-content: center; }
            .hero2-stats { grid-template-columns: 1fr 1fr; gap: 24px 16px; }
            .hero2-stat:nth-child(2n) { border-left: none; }
            .hero2-stat:nth-child(n+3) { border-top: 1px solid rgba(255,255,255,.1); padding-top: 20px; }
          }
        `}</style>
      </section>

      {/* ── REEL DESTACADO ── */}
      <section style={{ background: "var(--paper)", padding: "var(--pad-y) 0", position: "relative" }}>
        <div className="rc-wrap">
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr",
            gap: "clamp(40px,6vw,96px)", alignItems: "center",
          }} className="reel-grid">
            <Reveal>
              <div>
                <div className="rc-eyebrow" style={{ marginBottom: 20 }}>En la voz pública</div>
                <h2 className="rc-h2" style={{ marginBottom: 28, maxWidth: "16ch" }}>
                  Cada caso es <em className="rc-em">también</em> un compromiso público
                </h2>
                <p className="rc-lede" style={{ marginBottom: 24, maxWidth: "44ch" }}>
                  Acompañamos a las familias dentro del tribunal y en los medios.
                  La justicia se construye en ambas arenas — y cada palabra cuenta.
                </p>
                <div style={{
                  paddingTop: 24, borderTop: "1px solid var(--hairline)",
                  fontFamily: "var(--font-mono, monospace)", fontSize: 11,
                  letterSpacing: ".14em", textTransform: "uppercase", color: "var(--fg-5)",
                }}>
                  Reel destacado · @josephriveraabogado
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <InstagramReel url="https://www.instagram.com/reel/DWHZdGMx4C8/" caption />
            </Reveal>
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .reel-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* ── CASOS ── */}
      <section style={{ background: "var(--paper)", padding: "var(--pad-y) 0" }}>
        <div className="rc-wrap">
          <Reveal>
            <div style={{
              display: "flex", alignItems: "flex-end", justifyContent: "space-between",
              gap: 24, flexWrap: "wrap", marginBottom: "clamp(40px,5vw,72px)",
            }}>
              <div>
                <div className="rc-eyebrow" style={{ marginBottom: 16 }}>01 / 04 · Casos destacados</div>
                <h2 className="rc-h2">Defensa en <em className="rc-em">Femicidios</em></h2>
              </div>
              <p className="rc-lede" style={{ maxWidth: "40ch", marginBottom: 4 }}>
                Representación legal a familias de víctimas en los casos más emblemáticos
                de violencia de género en Costa Rica y Centroamérica.
              </p>
            </div>
          </Reveal>

          <div style={{
            display: "grid", gap: "var(--gut)", gridTemplateColumns: "repeat(2,1fr)",
          }} className="cases-grid">
            {sortedCases.map((c, i) => (
              <Reveal key={c.slug} delay={i * 80}>
                <Link href={`/casos/${c.slug}`} className="rc-card" style={{
                  display: "flex", flexDirection: "column", height: "100%", overflow: "hidden",
                }}>
                  <div style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "20px 26px", borderBottom: "1px solid var(--hairline)",
                  }}>
                    <span className="rc-meta">Caso · {String(i + 1).padStart(2, "0")} / {String(sortedCases.length).padStart(2, "0")}</span>
                    <span style={{
                      padding: "4px 10px",
                      background: c.statusTone === "active" ? R : "#0d0d0d",
                      color: "#fff",
                      fontFamily: "var(--font-mono, monospace)", fontSize: 10, letterSpacing: ".12em",
                      textTransform: "uppercase",
                    }}>{c.status}</span>
                  </div>

                  <div style={{
                    padding: "clamp(28px,4vw,48px) clamp(20px,3vw,32px)",
                    display: "flex", flexDirection: "column", gap: 20, flex: 1,
                  }}>
                    <div style={{
                      fontFamily: "var(--font-sans, system-ui)", fontWeight: 200,
                      fontSize: "clamp(56px,8vw,120px)", lineHeight: 0.88, letterSpacing: "-0.04em",
                      color: "#0d0d0d",
                    }}>{c.year}</div>
                    <div>
                      <h3 className="rc-h3" style={{ marginBottom: 6 }}>{c.name}</h3>
                      <div className="rc-meta">{c.location}</div>
                    </div>
                    <p style={{ fontSize: 14, color: "var(--fg-3)", lineHeight: 1.65, flex: 1 }}>{c.short}</p>
                  </div>

                  <div style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "18px 26px", borderTop: "1px solid var(--hairline)",
                    background: "var(--paper-2)",
                  }}>
                    <div style={{ fontSize: 15, fontWeight: 600, color: c.statusTone === "active" ? R : "#0d0d0d" }}>
                      {c.sentence}
                    </div>
                    <span style={{ fontSize: 13, fontWeight: 600, color: R }}>
                      Leer dossier →
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 760px) { .cases-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* ── PROMO LIBRO ── */}
      <section style={{
        position: "relative",
        background:
          "radial-gradient(1100px 520px at 78% 25%, rgba(126,1,2,.24), transparent 60%), linear-gradient(180deg, #0a0707 0%, #120b0b 55%, #0a0707 100%)",
        overflow: "hidden",
        padding: "clamp(56px,8vw,120px) 0",
      }}>
        <div className="rc-wrap">
          <div style={{
            display: "grid", gridTemplateColumns: "0.8fr 1fr",
            gap: "clamp(32px,5vw,80px)", alignItems: "center",
          }} className="home-book-grid">

            {/* Portada del libro */}
            <Reveal variant="scale">
              <Link href="/libro" style={{ display: "block", position: "relative" }}>
                <div className="libro-glow" />
                <div className="libro-cover" style={{
                  position: "relative", zIndex: 1, width: "min(300px, 72%)", margin: "0 auto",
                }}>
                  <Image
                    src="/images/libro/canibal-portada.jpg?v=2"
                    alt="Libro El Caníbal de la Refrigeradora — crónica forense de un femicidio en Costa Rica, nuevo libro del abogado Joseph Rivera Cheves"
                    width={760} height={1140}
                    sizes="300px"
                    style={{ width: "100%", height: "auto", borderRadius: 3 }}
                    loading="lazy"
                  />
                </div>
              </Link>
            </Reveal>

            {/* Texto */}
            <div>
              <Reveal variant="fade">
                <span className="libro-badge" style={{ marginBottom: 24 }}>
                  <span className="dot" /> Próximamente · Libro
                </span>
              </Reveal>

              <Reveal delay={60}>
                <h2 style={{
                  fontFamily: "var(--font-sans)", fontWeight: 300,
                  fontSize: "clamp(30px,4.4vw,58px)", lineHeight: 1.08, letterSpacing: "-0.025em",
                  color: "#f5ede0", marginBottom: 16, marginTop: 8,
                }}>
                  <span className="libro-gold">El Caníbal de la Refrigeradora</span>
                </h2>
              </Reveal>

              <Reveal delay={100} variant="fade">
                <p style={{
                  fontFamily: "Georgia, serif", fontStyle: "italic",
                  fontSize: "clamp(15px,1.6vw,20px)", lineHeight: 1.5,
                  color: "rgba(245,237,224,.8)", maxWidth: "42ch", marginBottom: 22,
                }}>
                  Crónica forense y jurídica de uno de los femicidios más atroces de Costa Rica.
                </p>
              </Reveal>

              <Reveal delay={140} variant="fade">
                <p style={{
                  fontSize: 16, lineHeight: 1.8, color: "rgba(245,237,224,.7)",
                  maxWidth: "54ch", marginBottom: 28,
                }}>
                  El Lic. Rivera Cheves narra este caso desde dentro — el episodio más fuerte de
                  su carrera. <strong style={{ color: "#f5ede0" }}>Parte de las ganancias serán
                  para la hija de la ofendida.</strong>
                </p>
              </Reveal>

              <Reveal delay={200} variant="fade">
                <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
                  <Link href="/libro" className="libro-btn">
                    Conocer el libro <span className="arrow">→</span>
                  </Link>
                  <a href={WA_RESERVA} target="_blank" rel="noopener" className="libro-btn-ghost">
                    Muy pronto · Resérvalo
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 860px) {
            .home-book-grid { grid-template-columns: 1fr !important; gap: 44px !important; }
          }
        `}</style>
      </section>

      {/* ── ENTREVISTAS ── */}
      <section style={{ background: "var(--paper-2)", padding: "var(--pad-y) 0" }}>
        <div className="rc-wrap">
          <div style={{
            display: "flex", alignItems: "flex-end", justifyContent: "space-between",
            gap: 24, flexWrap: "wrap", marginBottom: "clamp(28px,4vw,48px)",
          }}>
            <div>
              <div className="rc-eyebrow" style={{ marginBottom: 14, color: R }}>En video · Entrevistas</div>
              <Reveal><h2 className="rc-h2">En la <em className="rc-em">voz pública</em></h2></Reveal>
            </div>
            <Reveal delay={120}>
              <Link href="/prensa" className="rc-btn ghost">Ver toda la prensa →</Link>
            </Reveal>
          </div>

          <div style={{
            display: "grid", gap: "var(--gut)", gridTemplateColumns: "repeat(3,1fr)",
          }} className="home-int-grid">
            {RC_ENTREVISTAS.map((e, i) => (
              <Reveal key={e.slug} delay={i * 80}>
                <Link href={`/entrevistas/${e.slug}`} style={{
                  display: "flex", flexDirection: "column", height: "100%",
                  textDecoration: "none", overflow: "hidden",
                  border: "1px solid var(--hairline)", background: "#fff",
                }} className="home-int-card">
                  <div style={{ position: "relative", aspectRatio: "16/9", background: "#0d0d0d", overflow: "hidden" }}>
                    <Image
                      src={e.image}
                      alt={`Entrevista al abogado Joseph Rivera Cheves en ${e.medio}${e.program ? ` (${e.program})` : ""} — ${e.title}`}
                      fill sizes="(max-width: 900px) 100vw, 33vw"
                      style={{ objectFit: "cover" }}
                      loading="lazy"
                    />
                    <span aria-hidden="true" style={{
                      position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
                      width: 56, height: 56, borderRadius: "50%", background: R, color: "#fff",
                      display: "grid", placeItems: "center", boxShadow: "0 10px 30px rgba(0,0,0,.45)",
                    }}>
                      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                    </span>
                  </div>
                  <div style={{ padding: "24px 22px", display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
                    <div className="rc-meta" style={{ color: R }}>
                      {e.medio}{e.program ? ` · ${e.program}` : ""}
                    </div>
                    <h3 style={{
                      fontFamily: "var(--font-sans, system-ui)", fontWeight: 500,
                      fontSize: "clamp(17px,1.5vw,20px)", lineHeight: 1.25,
                      letterSpacing: "-0.01em", color: "#0d0d0d",
                    }}>{e.title}</h3>
                    <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--fg-3)", flex: 1 }}>{e.desc}</p>
                    <span style={{ fontSize: 13, fontWeight: 700, color: R }}>Ver la entrevista →</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 1000px){ .home-int-grid{ grid-template-columns:repeat(2,1fr) !important; } }
          @media (max-width: 680px) { .home-int-grid{ grid-template-columns:1fr !important; } }
        `}</style>
      </section>

      {/* ── QUOTE ── */}
      <section>
        <PremiumPanel>
          <Reveal>
            <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 26 }}>
              <span style={{ fontFamily: "var(--font-serif)", fontSize: 44, lineHeight: 1, color: "var(--premium-gold)" }}>&ldquo;</span>
              <span style={{ width: 64, height: 1, background: "rgba(201,168,106,.5)" }} />
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 style={{
              fontFamily: "var(--font-sans, system-ui)", fontWeight: 300,
              fontSize: "clamp(24px,3.5vw,48px)", lineHeight: 1.2, letterSpacing: "-0.02em",
              color: "#fff", maxWidth: "28ch",
            }}>
              En nuestro bufete, trabajamos con compromiso, ética y dedicación,
              garantizando una defensa{" "}
              <em className="rc-em" style={{ color: "var(--premium-gold)", opacity: 1 }}>eficiente, confiable y adaptada a cada caso</em>.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <div style={{
              marginTop: 40, fontFamily: "var(--font-mono, monospace)", fontSize: 11,
              letterSpacing: ".12em", textTransform: "uppercase", color: "rgba(255,255,255,.6)",
            }}>
              — Lic. Joseph Alfonso Rivera Cheves
            </div>
          </Reveal>
        </PremiumPanel>
      </section>

      {/* ── ÁREAS ── */}
      <section style={{ background: "#fff", padding: "var(--pad-y) 0" }}>
        <div className="rc-wrap">
          {/* Header */}
          <div style={{
            display: "flex", alignItems: "flex-end", justifyContent: "space-between",
            gap: 24, flexWrap: "wrap",
            marginBottom: "clamp(40px,5vw,72px)",
          }}>
            <div>
              <div className="rc-eyebrow" style={{ marginBottom: 16 }}>02 / 04 · Práctica legal</div>
              <Reveal>
                <h2 className="rc-h2">Áreas de <em className="rc-em">Especialización</em></h2>
              </Reveal>
              <Reveal delay={100}>
                <p className="rc-lede" style={{ marginTop: 20, maxWidth: "46ch" }}>
                  Vasta experiencia en múltiples ramas del derecho costarricense e internacional.
                </p>
              </Reveal>
            </div>
            <Reveal delay={160}>
              <Link href="/especialidades" className="rc-btn ghost">
                Ver todas las áreas →
              </Link>
            </Reveal>
          </div>

          <AreasExplorer />
        </div>
      </section>

      {/* ── PRENSA ── */}
      <section style={{ background: "var(--paper-2)", padding: "var(--pad-y) 0" }}>
        <div className="rc-wrap">
          <div style={{
            display: "flex", alignItems: "flex-end", justifyContent: "space-between",
            gap: 24, flexWrap: "wrap", marginBottom: "clamp(40px,5vw,72px)",
          }}>
            <div>
              <div className="rc-eyebrow" style={{ marginBottom: 16 }}>03 / 04 · Prensa &amp; opinión</div>
              <Reveal><h2 className="rc-h2">Contenido <em className="rc-em">Jurídico</em></h2></Reveal>
            </div>
            <Reveal delay={120}>
              <Link href="/prensa" className="rc-btn ghost">Ver todos →</Link>
            </Reveal>
          </div>

          <div style={{
            display: "grid", gap: "var(--gut)", gridTemplateColumns: "repeat(3,1fr)",
          }} className="press-grid">
            {RC_PRESS.slice(0, 3).map((p, i) => (
              <Reveal key={p.t} delay={i * 80}>
                <a href={p.u} target="_blank" rel="noopener" className="rc-card" style={{
                  display: "flex", flexDirection: "column", padding: 28, height: "100%",
                }}>
                  <div style={{
                    display: "flex", justifyContent: "space-between",
                    marginBottom: 24,
                    fontFamily: "var(--font-mono, monospace)", fontSize: 11,
                    letterSpacing: ".12em", textTransform: "uppercase",
                  }}>
                    <span style={{ color: R }}>{p.medio}</span>
                    <span style={{ color: "var(--fg-5)" }}>{p.year}</span>
                  </div>
                  <h3 className="rc-h3" style={{ flex: 1, marginBottom: 24 }}>{p.t}</h3>
                  <span style={{ fontSize: 13, fontWeight: 600, color: R }}>Leer artículo →</span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 1100px) { .press-grid { grid-template-columns: repeat(2,1fr) !important; } }
          @media (max-width: 640px)  { .press-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: "var(--paper-2)", padding: "var(--pad-y) 0" }}>
        <SchemaOrg data={schemaFAQPage(faqs)} />
        <div className="rc-wrap">
          <Reveal>
            <div className="rc-eyebrow" style={{ marginBottom: 16 }}>Preguntas frecuentes</div>
            <h2 className="rc-h2" style={{ marginBottom: "clamp(32px,4vw,64px)", maxWidth: "22ch" }}>
              Todo sobre el <em className="rc-em">Abogado Joseph Rivera</em>
            </h2>
          </Reveal>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {faqs.map((f, i) => (
              <Reveal key={i} delay={i * 60}>
                <div style={{
                  borderTop: "1px solid var(--hairline)",
                  padding: "clamp(24px,3vw,40px) 0",
                  display: "grid",
                  gridTemplateColumns: "1fr 1.4fr",
                  gap: "clamp(24px,4vw,64px)",
                }} className="faq-row">
                  <h3 style={{
                    fontFamily: "var(--font-sans, system-ui)",
                    fontWeight: 600,
                    fontSize: "clamp(15px,1.6vw,18px)",
                    lineHeight: 1.4,
                    color: "#0d0d0d",
                  }}>{f.q}</h3>
                  <p className="rc-body">{f.a}</p>
                </div>
              </Reveal>
            ))}
            <div style={{ borderTop: "1px solid var(--hairline)" }}/>
          </div>
        </div>
        <style>{`
          @media (max-width: 760px) { .faq-row { grid-template-columns: 1fr !important; gap: 12px !important; } }
        `}</style>
      </section>

      {/* ── CTA FINAL ── */}
      <section>
        <PremiumPanel bottomRule paddingY="clamp(80px,11vw,160px)">
          <div style={{
            display: "grid", gridTemplateColumns: "1.2fr 1fr",
            gap: "clamp(40px,6vw,96px)", alignItems: "end",
          }} className="cta-grid">
            <Reveal>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <span style={{ width: 28, height: 2, background: "var(--premium-gold)" }} />
                <span className="rc-eyebrow on-r">04 / 04 · Hablemos</span>
              </div>
              <h2 className="rc-h1" style={{ color: "#fff", marginBottom: 24 }}>
                ¿Necesita representación <em className="rc-em" style={{ color: R, opacity: 1 }}>legal</em>?
              </h2>
              <p className="rc-lede" style={{ color: "rgba(255,255,255,.6)" }}>
                Disponibles 24/7 para atender su consulta con discreción y profesionalismo.
                Cada caso merece atención especializada.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <a href={WA} target="_blank" rel="noopener" className="rc-btn brand full">Consulta por WhatsApp →</a>
                <a href="tel:+50689980112" className="rc-btn ghost-on-r full">Llamar · 8998-0112</a>
                <Link href="/contacto" className="rc-btn ghost-on-r full">Formulario de contacto</Link>
              </div>
            </Reveal>
          </div>
        </PremiumPanel>
        <style>{`
          @media (max-width: 900px) { .cta-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>
    </div>
    </>
  );
}
