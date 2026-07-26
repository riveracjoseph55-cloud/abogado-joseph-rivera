import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import FinalCTA from "@/components/FinalCTA";
import SchemaOrg from "@/components/SchemaOrg";
import RichText from "@/components/RichText";
import CvLightbox from "@/components/CvLightbox";
import { RC_FORMACION, RC_EXP, RC_DOCENCIA, RC_MEDIOS, TEL, EMAIL } from "@/lib/data";
import { SITE_URL, SITE_NAME, OG_IMAGE, schemaAttorney } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: "Atestados y Currículo | Abogado Joseph Rivera Cheves" },
  description:
    "Currículo del Lic. Joseph Rivera Cheves, abogado penalista en Costa Rica: Máster en Compliance, Maestría Derecho Penal, Auditor Líder ISO 37001/31000, Temple University. Docente en 6 universidades.",
  alternates: { canonical: `${SITE_URL}/atestados` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/atestados`,
    title: `Atestados y Currículo | ${SITE_NAME}`,
    description:
      "Perfil académico completo: Máster en Compliance, Maestría en Derecho Penal, certificaciones ISO, Temple University y docencia en 6 universidades costarricenses.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Atestados | ${SITE_NAME}` }],
  },
  twitter: { card: "summary_large_image", title: `Atestados y Currículo | ${SITE_NAME}`, images: [OG_IMAGE] },
  keywords: [
    "joseph rivera cheves curriculum vitae",
    "abogado penalista titulado costa rica",
    "master compliance penal costa rica",
    "docente derecho penal universidades costa rica",
    "joseph rivera formacion academica",
    "auditor lider ISO 37001 costa rica",
    "auditor ISO 31000 gestion de riesgos",
    "temple university abogado costa rica",
    "abogado ealde business school",
    "intercert latam auditor",
  ],
};

const CS_CREAM = "#F4F1EB";
const CS_BLACK = "#0A0A0A";
const CS_WINE  = "#7A0808";
const CS_GOLD  = "#C7A45C";
const CS_GRAY  = "#6C6C6C";

const STATS = [
  { num: "06", label: "Maestrías y especializaciones internacionales", icon: "cap" },
  { num: "08", label: "Cargos profesionales", sub: "2008 → presente", icon: "briefcase" },
  { num: "06", label: "Universidades como docente", sub: "2011 — 2023", icon: "building" },
  { num: "17+", label: "Años de ejercicio profesional", icon: "scale" },
];

function StatIcon({ kind }: { kind: string }) {
  const c = CS_GOLD;
  if (kind === "cap") return <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true"><path d="M2 8l10-4 10 4-10 4L2 8Z" stroke={c} strokeWidth="1.5" strokeLinejoin="round"/><path d="M6 10v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5M22 8v5" stroke={c} strokeWidth="1.5" strokeLinecap="round"/></svg>;
  if (kind === "briefcase") return <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true"><rect x="3" y="7" width="18" height="13" rx="2" stroke={c} strokeWidth="1.5"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" stroke={c} strokeWidth="1.5"/></svg>;
  if (kind === "building") return <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true"><path d="M12 3 3 8h18l-9-5Z" stroke={c} strokeWidth="1.5" strokeLinejoin="round"/><path d="M5 11v7M9.5 11v7M14.5 11v7M19 11v7M3 21h18" stroke={c} strokeWidth="1.5" strokeLinecap="round"/></svg>;
  return <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true"><path d="M12 3v16M5 21h14M6 8h12M6 8 3.5 13.5a3.2 3.2 0 0 0 6.5 0L7.5 8M17.5 8 15 13.5a3.2 3.2 0 0 0 6.5 0L18.5 8" stroke={c} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

const CV_ALT = "Currículo del abogado penalista Joseph Rivera Cheves — Máster en Compliance Penal, Maestría Derecho Penal, Auditor Líder ISO 31000 INTERCERT LATAM — formación académica Costa Rica";

export default function AtestadosPage() {
  return (
    <>
      <SchemaOrg data={schemaAttorney} />
      <div className="rc-page atestados">

        {/* ── HERO ── */}
        <section className="at-hero">
          <img src="/images/casos/casos-arch-light.webp" alt="" aria-hidden="true" className="at-hero-arch" />
          <div className="rc-wrap" style={{ position: "relative", zIndex: 1 }}>
            <Reveal>
              <div className="at-eyebrow"><span>Atestados</span><span className="at-eyebrow-line" /><span className="at-eyebrow-dot" /></div>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="at-h1">Currículo<br /><em className="at-h1-em">Perfil Profesional</em></h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="at-lede">
                Trayectoria académica, profesional y docente completa del{" "}
                <strong>Lic. Joseph Alfonso Rivera Cheves</strong> — abogado penalista
                costarricense con más de <strong>17</strong> años de ejercicio.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── INDICADORES ── */}
        <section className="at-stats">
          <div className="rc-wrap">
            <div className="at-stats-grid">
              {STATS.map((s, i) => (
                <Reveal key={s.num} delay={i * 70}>
                  <div className="at-stat">
                    <span className="at-stat-icon" aria-hidden="true"><StatIcon kind={s.icon} /></span>
                    <div className="at-stat-num">{s.num}</div>
                    <div className="at-stat-label">{s.label}{s.sub && <><br /><span className="at-stat-sub">{s.sub}</span></>}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── 01 CURRÍCULO EN UNA PÁGINA · 02 FORMACIÓN ── */}
        <section className="at-main">
          <div className="rc-wrap">
            <div className="at-main-grid">

              {/* Columna izquierda · currículo visual */}
              <div className="at-cv">
                <div className="at-sec-head">
                  <span className="at-sec-badge" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none"><path d="M6 4h9l3 3v13H6V4Z" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round"/><path d="M9 9h6M9 12h6M9 15h4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  </span>
                  <div>
                    <div className="at-sec-num">01 · Currículo en una página</div>
                    <div className="at-sec-sub">Resumen visual</div>
                  </div>
                </div>

                <div className="at-cv-portrait">
                  <img src="/images/joseph/atestados-retrato.webp" alt="Retrato del Lic. Joseph Alfonso Rivera Cheves, abogado penalista en Costa Rica" width={857} height={1228} loading="lazy" decoding="async" className="at-cv-photo" />
                  <div className="at-cv-caption">
                    <p>Currículo del abogado penalista <strong>Joseph Rivera Cheves</strong> — Máster en Compliance Penal, Maestría Derecho Penal, Auditor Líder ISO 31000 INTERCERT LATAM — formación académica Costa Rica.</p>
                  </div>
                </div>

                <CvLightbox
                  thumb="/images/atestados/curriculo-thumb.webp"
                  full="/images/atestados/curriculo-full.jpg"
                  download="/images/atestados/curriculo-full.jpg"
                  alt={CV_ALT}
                />

                <div className="at-contact">
                  <a href={`tel:${TEL}`} className="at-contact-row"><span className="at-contact-ic" aria-hidden="true"><svg viewBox="0 0 24 24" width="15" height="15" fill="none"><path d="M4 5c0 9 6 15 15 15l1-4-4-1-1 2c-3-1-6-4-7-7l2-1-1-4-5 0Z" stroke={CS_GOLD} strokeWidth="1.4" strokeLinejoin="round"/></svg></span>+506 8998-0112</a>
                  <a href={`mailto:${EMAIL}`} className="at-contact-row"><span className="at-contact-ic" aria-hidden="true"><svg viewBox="0 0 24 24" width="15" height="15" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" stroke={CS_GOLD} strokeWidth="1.4"/><path d="m4 7 8 6 8-6" stroke={CS_GOLD} strokeWidth="1.4"/></svg></span>{EMAIL}</a>
                  <a href="https://abogadojosephrivera.com" className="at-contact-row"><span className="at-contact-ic" aria-hidden="true"><svg viewBox="0 0 24 24" width="15" height="15" fill="none"><circle cx="12" cy="12" r="9" stroke={CS_GOLD} strokeWidth="1.4"/><path d="M3 12h18M12 3c2.5 2.4 4 5.6 4 9s-1.5 6.6-4 9c-2.5-2.4-4-5.6-4-9s1.5-6.6 4-9Z" stroke={CS_GOLD} strokeWidth="1.4"/></svg></span>abogadojosephrivera.com</a>
                  <div className="at-contact-tags">
                    <span>Abogado Penalista · Costa Rica</span>
                    <span>Ejercicio profesional desde 2008</span>
                  </div>
                </div>
              </div>

              {/* Columna derecha · formación académica */}
              <div className="at-formacion">
                <div className="at-sec-head">
                  <span className="at-sec-badge" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none"><path d="M2 8l10-4 10 4-10 4L2 8Z" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round"/><path d="M6 10v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  </span>
                  <div>
                    <div className="at-sec-num">02 · Formación académica</div>
                    <div className="at-sec-sub">Doble titulación internacional</div>
                  </div>
                </div>

                <ol className="at-form-list">
                  {RC_FORMACION.map((f, i) => (
                    <Reveal key={f.t} delay={i * 30}>
                      <li className="at-form-item">
                        <span className="at-form-num">{String(i + 1).padStart(2, "0")}</span>
                        <div className="at-form-body">
                          <h3 className="at-form-title">{f.t}</h3>
                          <div className="at-form-inst">{f.s}</div>
                          <RichText text={f.d} className="at-form-desc" />
                        </div>
                        <span className="at-form-ic" aria-hidden="true">
                          <svg viewBox="0 0 24 24" width="18" height="18" fill="none"><rect x="5" y="3" width="14" height="18" rx="2" stroke={CS_GOLD} strokeWidth="1.4"/><path d="M9 8h6M9 12h6M9 16h3" stroke={CS_GOLD} strokeWidth="1.4" strokeLinecap="round"/></svg>
                        </span>
                      </li>
                    </Reveal>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* ── 03 EXPERIENCIA PROFESIONAL ── */}
        <section className="at-exp">
          <div className="rc-wrap">
            <div className="at-eyebrow" style={{ color: CS_WINE }}>03 · Experiencia profesional</div>
            <h2 className="at-h2">Trayectoria en el <em className="at-em">ejercicio</em></h2>
            <div className="at-exp-list">
              {RC_EXP.map((e, i) => (
                <Reveal key={e.cargo + e.anio} delay={i * 30}>
                  <div className="at-exp-row">
                    <div className="at-exp-anio">{e.anio}</div>
                    <div className="at-exp-body">
                      <h3 className="at-exp-cargo">{e.cargo}</h3>
                      <div className="at-exp-lugar">{e.lugar}</div>
                      <RichText text={e.desc} className="at-exp-desc" />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="at-exp-note">
              En 2016 participó como expositor en el Colegio de Profesionales en Criminología de Costa Rica.
            </p>
          </div>
        </section>

        {/* ── 04 DOCENCIA Y MEDIOS ── */}
        <section className="at-teach">
          <img src="/images/casos/casos-arch-light.webp" alt="" aria-hidden="true" className="at-teach-arch" />
          <div className="rc-wrap" style={{ position: "relative", zIndex: 1 }}>
            <div className="at-eyebrow" style={{ color: CS_WINE }}>04 · Experiencia docente y participación en medios</div>
            <h2 className="at-h2">Docencia <em className="at-em">universitaria</em> y medios</h2>
            <div className="at-teach-grid">
              <div className="at-teach-col">
                <div className="at-teach-label">Docencia universitaria · 2011 — 2023</div>
                <ul className="at-teach-ul">
                  {RC_DOCENCIA.map(u => (
                    <li key={u}><span className="at-teach-dot" aria-hidden="true" />{u}</li>
                  ))}
                </ul>
                <p className="at-teach-note">
                  Cursos en derecho penal, procesal penal, derechos humanos, delitos económicos y derecho
                  laboral y agrario; tutor de trabajos finales de graduación en ULICORI (2012–2014).
                </p>
              </div>
              <div className="at-teach-col">
                <div className="at-teach-label">Prensa y participación en medios</div>
                <ul className="at-teach-ul">
                  {RC_MEDIOS.map(m => (
                    <li key={m}><span className="at-teach-dot" aria-hidden="true" />{m}</li>
                  ))}
                </ul>
                <p className="at-teach-note">
                  Artículos de opinión en Delfino.cr y participación en entrevistas y apariciones en medios,
                  abordando temas de derecho penal y asuntos de interés público.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA (reutilizado desde la portada) ── */}
        <FinalCTA eyebrow="Próximo paso" lead="Estamos para defender sus derechos con estrategia, rigor y compromiso humano. Hablemos de su caso." />
      </div>

      <style>{`
        /* ── Hero ── */
        .at-hero { position: relative; overflow: hidden; background: ${CS_CREAM}; padding: clamp(48px,7vw,100px) 0 clamp(36px,5vw,64px); }
        .at-hero-arch { position: absolute; right: 0; top: 0; height: 100%; width: 48%; object-fit: cover; object-position: right center; opacity: .5; pointer-events: none; -webkit-mask-image: linear-gradient(90deg, transparent, rgba(0,0,0,.4) 44%, #000 100%); mask-image: linear-gradient(90deg, transparent, rgba(0,0,0,.4) 44%, #000 100%); }
        .at-eyebrow { display: flex; align-items: center; gap: 16px; font-family: var(--font-mono, monospace); font-size: 12px; font-weight: 500; letter-spacing: .2em; text-transform: uppercase; color: ${CS_WINE}; margin-bottom: 24px; }
        .at-eyebrow-line { width: clamp(40px,8vw,120px); height: 1px; background: linear-gradient(90deg, ${CS_GOLD}, rgba(199,164,92,0)); }
        .at-eyebrow-dot { width: 6px; height: 6px; background: ${CS_GOLD}; transform: rotate(45deg); }
        .at-h1 { font-family: var(--font-serif); font-weight: 400; font-size: clamp(48px,8vw,104px); line-height: 1.0; letter-spacing: -0.02em; color: ${CS_BLACK}; margin-bottom: 24px; }
        .at-h1-em { font-family: var(--font-serif); font-style: normal; color: ${CS_WINE}; }
        .at-lede { font-family: var(--font-sans, system-ui); font-size: clamp(16px,1.3vw,20px); line-height: 1.6; color: ${CS_GRAY}; max-width: 52ch; }
        .at-lede strong { color: #161616; font-weight: 600; }

        /* ── Indicadores ── */
        .at-stats { background: ${CS_CREAM}; padding: 0 0 clamp(40px,5vw,72px); }
        .at-stats-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: clamp(16px,1.8vw,24px); }
        .at-stat { background: linear-gradient(160deg,#1a1512,#0c0a08); border: 1px solid rgba(199,164,92,.22); border-radius: 6px; padding: clamp(22px,2.4vw,32px); min-height: 200px; display: flex; flex-direction: column; box-shadow: 0 18px 44px rgba(0,0,0,.14); }
        .at-stat-icon { margin-bottom: 18px; }
        .at-stat-num { font-family: var(--font-serif); font-weight: 400; font-size: clamp(48px,5vw,72px); line-height: 1; color: ${CS_WINE}; margin-bottom: auto; }
        .at-stat-num { color: #b21414; }
        .at-stat-label { font-family: var(--font-sans, system-ui); font-size: 13.5px; line-height: 1.45; color: rgba(245,237,224,.82); margin-top: 16px; }
        .at-stat-sub { color: rgba(245,237,224,.5); font-size: 12.5px; }

        /* ── Encabezados de sección 01/02 ── */
        .at-sec-head { display: flex; align-items: center; gap: 14px; margin-bottom: clamp(24px,3vw,36px); }
        .at-sec-badge { width: 44px; height: 44px; flex-shrink: 0; border-radius: 5px; background: ${CS_WINE}; display: grid; place-items: center; }
        .at-sec-num { font-family: var(--font-serif); font-size: clamp(18px,1.7vw,24px); color: ${CS_BLACK}; line-height: 1.1; }
        .at-sec-sub { font-family: var(--font-sans, system-ui); font-size: 13px; color: ${CS_GOLD}; font-weight: 600; margin-top: 2px; }

        /* ── Layout principal ── */
        .at-main { background: #FBFAF7; padding: clamp(48px,6vw,90px) 0; border-top: 1px solid rgba(20,20,20,.08); }
        .at-main-grid { display: grid; grid-template-columns: 38% 62%; gap: clamp(28px,4vw,64px); align-items: start; }
        .at-cv { position: sticky; top: 100px; }
        .at-cv-portrait { position: relative; background: radial-gradient(120% 90% at 50% 0%, #241a16, #0a0807); border: 1px solid rgba(199,164,92,.28); border-radius: 6px; overflow: hidden; margin-bottom: 18px; }
        .at-cv-photo { width: 100%; height: auto; display: block; object-fit: contain; }
        .at-cv-caption { padding: 18px 20px 22px; background: linear-gradient(180deg, transparent, #0a0807 22%); }
        .at-cv-caption p { font-family: var(--font-sans, system-ui); font-size: 13.5px; line-height: 1.6; color: rgba(245,237,224,.75); margin: 0; }
        .at-cv-caption strong { color: ${CS_GOLD}; font-weight: 600; }
        .at-contact { margin-top: 22px; display: flex; flex-direction: column; gap: 4px; }
        .at-contact-row { display: flex; align-items: center; gap: 12px; padding: 10px 0; font-family: var(--font-sans, system-ui); font-size: 14px; color: #2a2a2a; text-decoration: none; border-bottom: 1px solid rgba(20,20,20,.08); }
        .at-contact-row:hover { color: ${CS_WINE}; }
        .at-contact-ic { width: 32px; height: 32px; border-radius: 50%; flex-shrink: 0; display: grid; place-items: center; border: 1px solid rgba(199,164,92,.4); }
        .at-contact-tags { display: flex; flex-direction: column; gap: 4px; margin-top: 12px; font-family: var(--font-mono, monospace); font-size: 11px; letter-spacing: .06em; text-transform: uppercase; color: ${CS_GRAY}; }

        /* ── Formación ── */
        .at-form-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 12px; }
        .at-form-item { display: grid; grid-template-columns: 44px 1fr 30px; gap: 16px; align-items: start; background: #fff; border: 1px solid rgba(20,20,20,.1); border-radius: 5px; padding: clamp(18px,2vw,24px); transition: border-color .25s ease, box-shadow .25s ease, transform .25s ease; }
        .at-form-item:hover { border-color: ${CS_GOLD}; box-shadow: 0 12px 30px rgba(20,20,20,.06); transform: translateY(-2px); }
        .at-form-num { font-family: var(--font-serif); font-size: clamp(22px,2vw,30px); color: ${CS_WINE}; line-height: 1; }
        .at-form-title { font-family: var(--font-serif); font-weight: 400; font-size: clamp(16px,1.35vw,20px); line-height: 1.25; color: ${CS_BLACK}; margin-bottom: 6px; }
        .at-form-inst { font-family: var(--font-mono, monospace); font-size: 11.5px; letter-spacing: .03em; color: ${CS_WINE}; margin-bottom: 10px; }
        .at-form-desc { font-family: var(--font-sans, system-ui); font-size: 13.5px; line-height: 1.6; color: ${CS_GRAY}; margin: 0; }
        .at-form-desc strong { color: #2a2a2a; font-weight: 600; }
        .at-form-ic { display: grid; place-items: center; padding-top: 2px; }

        /* ── Experiencia profesional ── */
        .at-exp { background: ${CS_CREAM}; padding: clamp(48px,7vw,96px) 0; }
        .at-em { font-family: var(--font-serif); font-style: italic; color: ${CS_WINE}; }
        .at-h2 { font-family: var(--font-serif); font-weight: 400; font-size: clamp(28px,3.4vw,48px); line-height: 1.05; color: ${CS_BLACK}; margin-bottom: clamp(28px,3.5vw,48px); }
        .at-exp-list { display: flex; flex-direction: column; }
        .at-exp-row { display: grid; grid-template-columns: 200px 1fr; gap: clamp(20px,3vw,48px); padding: clamp(22px,2.6vw,32px) 0; border-top: 1px solid rgba(20,20,20,.1); }
        .at-exp-anio { font-family: var(--font-mono, monospace); font-size: 12px; letter-spacing: .06em; text-transform: uppercase; color: ${CS_WINE}; padding-top: 4px; }
        .at-exp-cargo { font-family: var(--font-serif); font-weight: 400; font-size: clamp(18px,1.6vw,24px); color: ${CS_BLACK}; margin-bottom: 4px; }
        .at-exp-lugar { font-family: var(--font-sans, system-ui); font-size: 14px; font-weight: 600; color: ${CS_GOLD}; margin-bottom: 12px; }
        .at-exp-desc { font-family: var(--font-sans, system-ui); font-size: 15px; line-height: 1.7; color: #3a3a3a; margin: 0; }
        .at-exp-desc strong { color: ${CS_WINE}; font-weight: 600; }
        .at-exp-note { font-family: var(--font-sans, system-ui); font-size: 14px; line-height: 1.7; color: ${CS_GRAY}; padding-top: clamp(22px,2.6vw,32px); border-top: 1px solid rgba(20,20,20,.1); margin-top: 0; }

        /* ── Docencia y medios ── */
        .at-teach { position: relative; overflow: hidden; background: #FBFAF7; padding: clamp(48px,7vw,96px) 0; border-top: 1px solid rgba(20,20,20,.08); }
        .at-teach-arch { position: absolute; right: 0; bottom: 0; height: 130%; width: 30%; object-fit: cover; object-position: right center; opacity: .12; pointer-events: none; -webkit-mask-image: linear-gradient(90deg, transparent, #000 90%); mask-image: linear-gradient(90deg, transparent, #000 90%); }
        .at-teach-grid { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(28px,4vw,64px); }
        .at-teach-label { font-family: var(--font-mono, monospace); font-size: 11px; letter-spacing: .12em; text-transform: uppercase; color: ${CS_WINE}; margin-bottom: 18px; padding-bottom: 14px; border-bottom: 1px solid ${CS_GOLD}; }
        .at-teach-ul { list-style: none; margin: 0 0 18px; padding: 0; display: flex; flex-direction: column; gap: 12px; }
        .at-teach-ul li { display: flex; align-items: center; gap: 12px; font-family: var(--font-serif); font-size: clamp(16px,1.4vw,20px); color: ${CS_BLACK}; }
        .at-teach-dot { width: 6px; height: 6px; background: ${CS_GOLD}; transform: rotate(45deg); flex-shrink: 0; }
        .at-teach-note { font-family: var(--font-sans, system-ui); font-size: 14px; line-height: 1.65; color: ${CS_GRAY}; }

        /* ── Responsive ── */
        @media (max-width: 1000px) {
          .at-stats-grid { grid-template-columns: 1fr 1fr; }
          .at-main-grid { grid-template-columns: 1fr; gap: 40px; }
          .at-cv { position: static; }
          .at-teach-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 640px) {
          .at-exp-row { grid-template-columns: 1fr; gap: 8px; }
          .at-teach-arch, .at-hero-arch { opacity: .2; }
        }
        @media (max-width: 460px) {
          .at-stats-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}
