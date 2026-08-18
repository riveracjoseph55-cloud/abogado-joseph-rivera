import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import FinalCTA from "@/components/FinalCTA";
import SchemaOrg from "@/components/SchemaOrg";
import { RC_FORMACION, RC_EXP, RC_DOCENCIA, RC_DOCTRINA } from "@/lib/data";
import RichText from "@/components/RichText";
import { SITE_URL, SITE_NAME, schemaAttorney, schemaLegalService } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: "Joseph Rivera Cheves | Abogado Penalista Costa Rica" },
  description:
    "Joseph Rivera Cheves, abogado penalista en Costa Rica con +10 años de trayectoria. Máster en Compliance, Maestría en Derecho Penal. Director del bufete Rivera Cheves & Asociados.",
  alternates: { canonical: `${SITE_URL}/quien` },
  openGraph: {
    type: "profile",
    url: `${SITE_URL}/quien`,
    title: `Abogado Penalista Joseph Rivera Cheves | ${SITE_NAME}`,
    description:
      "Perfil profesional del Lic. Joseph Rivera Cheves: 10+ años en litigación penal, Máster en Compliance, docente universitario y referente mediático en CR.",
    images: [{ url: `${SITE_URL}/images/joseph-hero.png`, width: 1200, height: 630, alt: "Lic. Joseph Alfonso Rivera Cheves" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Abogado Penalista Joseph Rivera Cheves | ${SITE_NAME}`,
    images: [`${SITE_URL}/images/joseph-hero.png`],
  },
  keywords: [
    "joseph rivera abogado penalista",
    "joseph rivera cheves",
    "lic joseph rivera",
    "joseph rivera",
    "abogado penalista costa rica",
    "abogado penal san jose curriculum",
    "abogado compliance penal costa rica",
    "master compliance abogado costa rica",
    "docente derecho penal costa rica",
  ],
};

/* ──────────────────────────────────────────────────────────────
   Iconografía lineal — mismo idioma gráfico que el resto del sitio
   (viewBox 24, trazo 1.4, currentColor). No se instala ninguna
   librería nueva: son SVG inline como en /atestados y la portada.
   ────────────────────────────────────────────────────────────── */
function Icon({ kind }: { kind: string }) {
  const p = { fill: "none", stroke: "currentColor", strokeWidth: 1.4, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (kind) {
    case "shield":
      return <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M12 2.6 4.5 5.4v6.1c0 4.8 3.2 8.4 7.5 9.9 4.3-1.5 7.5-5.1 7.5-9.9V5.4L12 2.6Z" {...p} /></svg>;
    case "columns":
      return <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M12 3 3 7.5h18L12 3ZM5.5 10.5v7M10 10.5v7M14 10.5v7M18.5 10.5v7M3 20.5h18" {...p} /></svg>;
    case "quill":
      return <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M4 20.5c6-1 9.5-3.5 12-7.5 2-3.2 2.6-6.4 2.8-9.4-3.4.6-7 1.6-9.8 4-2.6 2.2-3.6 5-3.4 7.6M8 16.5l-4 4" {...p} /></svg>;
    case "cap":
      return <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M2.5 8.5 12 4.2l9.5 4.3L12 12.8 2.5 8.5Z" {...p} /><path d="M6.5 10.6v4.6c0 1.5 2.5 2.7 5.5 2.7s5.5-1.2 5.5-2.7v-4.6M21.5 8.5v5" {...p} /></svg>;
    case "mic":
      return <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><rect x="9" y="2.8" width="6" height="10.4" rx="3" {...p} /><path d="M5.5 11.2a6.5 6.5 0 0 0 13 0M12 17.7v3.5M9 21.2h6" {...p} /></svg>;
    case "tv":
      return <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><rect x="2.8" y="6" width="18.4" height="12" rx="1.6" {...p} /><path d="M8.5 3.2 12 6l3.5-2.8M9.5 21h5" {...p} /></svg>;
    case "wave":
      return <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M4 10v4M8 7v10M12 4.5v15M16 7v10M20 10v4" {...p} /></svg>;
    case "doc":
      return <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M6 3h8l4 4v14H6V3Z" {...p} /><path d="M14 3v4h4M9 12h6M9 15.5h6M9 19h3.5" {...p} /></svg>;
    default:
      return null;
  }
}

/* Indicadores del hero — cada uno respaldado por contenido ya publicado:
   trayectoria (lede), litigación penal y asesoría legislativa (RC_EXP),
   docencia universitaria (RC_DOCENCIA). */
const HERO_METRICS = [
  { icon: "shield",  t: "10+ años",   s: "de trayectoria" },
  { icon: "columns", t: "Litigación", s: "penal" },
  { icon: "quill",   t: "Asesor",     s: "legislativo" },
  { icon: "cap",     t: "Docente",    s: "universitario" },
];

/* Los cuatro rótulos provienen literalmente de los pies de foto que ya
   tenía esta sección (figcaption de prensa.jpg y podcast.jpg). */
const VOZ_BLOCKS = [
  { icon: "mic",  t: "Declaraciones a prensa" },
  { icon: "tv",   t: "Multimedios · Trivisión · Canal 7 · Central de Noticias" },
  { icon: "wave", t: "Podcasts & entrevistas" },
  { icon: "doc",  t: "Análisis jurídico en formato extendido" },
];

export default function QuienPage() {
  return (
    <>
      <SchemaOrg data={[schemaAttorney, schemaLegalService]} />
      <div className="rc-page qn">

        {/* ══ 01 · EL ABOGADO ══ */}
        <section className="qn-sec qn-hero">
          <div className="qn-wrap">
            <div className="qn-hero-grid">
              <div className="qn-hero-copy">
                <Reveal>
                  <div className="qn-kicker">El abogado · 01 / 07</div>
                </Reveal>
                <Reveal delay={70}>
                  <h1 className="qn-h1">
                    <span className="qn-h1-a">Joseph Rivera</span>
                    <em className="qn-h1-b">Abogado Penalista</em>
                  </h1>
                </Reveal>
                <Reveal delay={140}>
                  <p className="qn-hero-lede">
                    Abogado penalista costarricense con más de 10 años de trayectoria en la
                    defensa de derechos fundamentales y la justicia penal. Director del bufete
                    Rivera Cheves &amp; Asociados.
                  </p>
                </Reveal>
              </div>

              <Reveal delay={110} className="qn-hero-media">
                <div className="qn-portrait">
                  <Image
                    src="/images/joseph/retrato.jpg"
                    alt="Lic. Joseph Alfonso Rivera Cheves, abogado penalista en Costa Rica — especialista en femicidios, crimen organizado y lavado de dinero — San José"
                    width={800} height={1000}
                    sizes="(max-width: 900px) 88vw, 34vw"
                    priority
                    fetchPriority="high"
                  />
                </div>
              </Reveal>

              <Reveal delay={200} className="qn-hero-metrics">
                <dl className="qn-metrics">
                  {HERO_METRICS.map(m => (
                    <div className="qn-metric" key={m.t + m.s}>
                      <span className="qn-metric-ic" aria-hidden="true"><Icon kind={m.icon} /></span>
                      <dt className="qn-metric-t">{m.t}</dt>
                      <dd className="qn-metric-s">{m.s}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ══ 02 · PERFIL PROFESIONAL ══ */}
        <section className="qn-sec qn-alt qn-rule">
          <div className="qn-wrap">
            <div className="qn-split">
              <div className="qn-split-head">
                <div className="qn-kicker">02 · Perfil profesional</div>
                <Reveal>
                  <h2 className="qn-h2">
                    <span>Compromiso con la</span>
                    <em>Justicia</em>
                  </h2>
                </Reveal>
              </div>
              <div className="qn-split-body">
                <Reveal>
                  <RichText
                    text="El Lic. **Joseph Alfonso Rivera Cheves** es un abogado penalista costarricense con destacada trayectoria en la defensa de **derechos fundamentales** y en la lucha contra la aplicación indebida de leyes que vulneran **garantías constitucionales**."
                    className="qn-p"
                  />
                </Reveal>
                <Reveal delay={80}>
                  <RichText
                    text="Desde **diciembre de 2015** ejerce como abogado litigante en materia penal, con representación en casos penales y asesoría en política penal y litigación judicial a nivel nacional. Fue **asesor ad honorem en la Asamblea Legislativa de Costa Rica** entre mayo de 2020 y mayo de 2022."
                    className="qn-p"
                  />
                </Reveal>
                <Reveal delay={160}>
                  <RichText
                    text="Ha ocupado cargos como asesor legal en la **Dirección General de Aviación Civil**, abogado de planta del **Banco Nacional de Costa Rica**, asesor legal de la **Municipalidad de Santa Bárbara de Heredia**, notario público de planta de la **Corporación Grupo Q** y asesor legal del **Colegio de Ciencias Económicas**."
                    className="qn-p"
                  />
                </Reveal>
                <Reveal delay={240}>
                  <blockquote className="qn-quote">
                    <p>
                      &ldquo;En nuestro bufete, trabajamos con compromiso, ética y dedicación,
                      garantizando una defensa eficiente, confiable y adaptada a cada caso.&rdquo;
                    </p>
                    <cite>— Lic. Joseph Alfonso Rivera Cheves</cite>
                  </blockquote>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ══ 03 · FORMACIÓN ACADÉMICA ══ */}
        <section className="qn-sec qn-rule">
          <div className="qn-wrap">
            <div className="qn-sec-head">
              <div className="qn-kicker">03 · Formación académica</div>
              <Reveal>
                <h2 className="qn-h2 qn-h2-inline">
                  <span>Excelencia</span> <em>Académica</em>
                </h2>
              </Reveal>
            </div>

            <div className="qn-form-grid">
              {RC_FORMACION.map((f, i) => (
                <Reveal key={f.t} delay={(i % 4) * 50}>
                  <article className="qn-card">
                    <div className="qn-card-tag">
                      {String(i + 1).padStart(2, "0")} · {f.s.split(" · ").at(-1)}
                    </div>
                    <h3 className="qn-card-title">{f.t}</h3>
                    <div className="qn-card-inst">{f.s}</div>
                    <RichText text={f.d} className="qn-card-desc" />
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 04 · TRAYECTORIA ══ */}
        <section className="qn-sec qn-alt qn-rule">
          <div className="qn-wrap">
            <div className="qn-sec-head">
              <div className="qn-kicker">04 · Trayectoria</div>
              <Reveal>
                <h2 className="qn-h2 qn-h2-inline">
                  <span>Experiencia</span> <em>Profesional</em>
                </h2>
              </Reveal>
            </div>

            <div className="qn-tl">
              {RC_EXP.map((e, i) => (
                <Reveal key={e.cargo + e.anio} delay={(i % 2) * 60}>
                  <div className="qn-tl-item">
                    <span className="qn-tl-dot" aria-hidden="true" />
                    <div className="qn-tl-anio">{e.anio}</div>
                    <h3 className="qn-tl-cargo">
                      {e.cargo} <span aria-hidden="true">·</span> <span className="qn-tl-lugar">{e.lugar}</span>
                    </h3>
                    <RichText text={e.desc} className="qn-tl-desc" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 05 · VOZ PÚBLICA  +  06 · DOCTRINA E INCIDENCIA ══ */}
        <section className="qn-sec qn-rule">
          <div className="qn-wrap">
            <div className="qn-duo">

              {/* ── 05 ── */}
              <div className="qn-duo-col">
                <div className="qn-kicker">05 · Voz pública</div>
                <Reveal>
                  <h2 className="qn-h2 qn-h2-inline">
                    <span>Intervenciones</span> <em>mediáticas</em>
                  </h2>
                </Reveal>
                <Reveal delay={100}>
                  <p className="qn-duo-lede">
                    Referente jurídico en prensa nacional e internacional. Cobertura
                    permanente en televisión, radio, prensa escrita y podcasts —
                    desde casos emblemáticos hasta análisis doctrinales.
                  </p>
                </Reveal>
                <Reveal delay={160}>
                  <ul className="qn-voz-grid">
                    {VOZ_BLOCKS.map(b => (
                      <li className="qn-voz" key={b.t}>
                        <span className="qn-voz-ic" aria-hidden="true"><Icon kind={b.icon} /></span>
                        <span className="qn-voz-t">{b.t}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
                <Reveal delay={210}>
                  <Link href="/prensa" className="qn-more">
                    Ver toda la cobertura de prensa <span aria-hidden="true">→</span>
                  </Link>
                </Reveal>
              </div>

              {/* ── 06 ── */}
              <div className="qn-duo-col">
                <div className="qn-kicker">06 · Influencia académica y legislativa</div>
                <Reveal>
                  <h2 className="qn-h2 qn-h2-inline">
                    <span>Doctrina e</span> <em>Incidencia</em>
                  </h2>
                </Reveal>
                <Reveal delay={100}>
                  <p className="qn-duo-lede">
                    Más allá del litigio: producción doctrinal publicada y propuestas
                    legislativas activas que buscan reformar el aparato punitivo costarricense.
                  </p>
                </Reveal>

                <div className="qn-doct-grid">
                  <Reveal delay={140}>
                    <article className="qn-card qn-card-doct">
                      <div className="qn-card-tag">Producción doctrinal</div>
                      {RC_DOCTRINA.articulos.map(a => (
                        <div key={a.titulo}>
                          <h3 className="qn-doct-title">{a.titulo}</h3>
                          <div className="qn-doct-tipo">{a.tipo}</div>
                          <RichText text={a.desc} className="qn-card-desc" />
                        </div>
                      ))}
                    </article>
                  </Reveal>
                  <Reveal delay={190}>
                    <article className="qn-card qn-card-doct">
                      <div className="qn-card-tag">Incidencia legislativa</div>
                      {RC_DOCTRINA.propuestas.map(p => (
                        <div key={p.titulo}>
                          <h3 className="qn-doct-title">{p.titulo}</h3>
                          <div className="qn-doct-tipo">{p.tipo}</div>
                          <RichText text={p.desc} className="qn-card-desc" />
                        </div>
                      ))}
                    </article>
                  </Reveal>
                </div>

                <Reveal delay={230}>
                  <ul className="qn-recon">
                    {RC_DOCTRINA.reconocimientos.map((r, i) => (
                      <li key={r}>
                        <span className="qn-recon-n">{String(i + 1).padStart(2, "0")}</span>
                        <span className="qn-recon-t">{r}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ══ 07 · LABOR ACADÉMICA ══ */}
        <section className="qn-sec qn-teach">
          <div className="qn-wrap">
            <div className="qn-teach-head">
              <div className="qn-kicker on-wine">07 · Labor académica</div>
              <Reveal>
                <h2 className="qn-h2 qn-h2-inline on-wine">
                  <span>Docencia</span> <em>Universitaria</em>
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <p className="qn-teach-lede">
                  Entre 2011 y 2023 impartió cursos en derecho penal, procesal penal,
                  derechos humanos y derecho laboral en las siguientes instituciones:
                </p>
              </Reveal>
            </div>

            <ul className="qn-uni-grid">
              {RC_DOCENCIA.map((u, i) => (
                <li className="qn-uni-cell" key={u}>
                  <Reveal delay={i * 45}>
                    <div className="qn-uni">
                      <span className="qn-uni-n">{String(i + 1).padStart(2, "0")}</span>
                      <span className="qn-uni-t">{u}</span>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <FinalCTA />
      </div>

      <style>{`
/* ═══════════════════════════════════════════════════════════════
   /quien — perfil editorial jurídico.
   Paleta y tipografía tomadas de los tokens del sitio:
   marfil  var(--paper-2)  · crema  var(--paper)  · tinta  --qn-ink
   vino    var(--r)        · borde  --qn-line     · gris   --qn-gray
   Sans = Manrope (--font-sans) · Serif itálica = Georgia (--font-serif)
   Mono  = Geist Mono (--font-mono) para microetiquetas.
   ═══════════════════════════════════════════════════════════════ */
.qn {
  --qn-ink:   #111111;
  --qn-gray:  #3F3B37;              /* variante cálida de --fg-3 */
  --qn-line:  rgba(20,20,20,.12);
  --qn-line-2:rgba(20,20,20,.07);
  --qn-rose:  #E8C9C4;              /* rojo claro editorial sobre burdeos */
  background: var(--paper-2);
}

/* ── Retícula editorial ── */
.qn-wrap {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 clamp(20px, 4vw, 44px);
}
.qn-sec { padding: clamp(56px, 6.5vw, 104px) 0; }
.qn-alt { background: var(--paper); }
.qn-rule { border-top: 1px solid var(--qn-line); }

/* ── Microetiquetas ── */
.qn-kicker {
  font-family: var(--font-mono, ui-monospace, monospace);
  font-size: 10.5px;
  font-weight: 500;
  letter-spacing: .22em;
  text-transform: uppercase;
  color: var(--r);
  margin-bottom: 20px;
}
.qn-kicker.on-wine { color: var(--qn-rose); }

/* ── Titulares ── */
.qn-h1 {
  display: flex;
  flex-direction: column;
  font-size: clamp(36px, 4.4vw, 60px);
  line-height: 1.06;
  letter-spacing: -0.022em;
  margin-bottom: 26px;
}
.qn-h1-a { font-family: var(--font-sans, system-ui, sans-serif); font-weight: 500; color: var(--qn-ink); }
.qn-h1-b { font-family: var(--font-serif); font-style: italic; font-weight: 400; color: var(--r); }

.qn-h2 {
  display: flex;
  flex-direction: column;
  font-size: clamp(27px, 3.1vw, 44px);
  line-height: 1.08;
  letter-spacing: -0.02em;
}
.qn-h2.qn-h2-inline { display: block; }
.qn-h2 > span { font-family: var(--font-sans, system-ui, sans-serif); font-weight: 400; color: var(--qn-ink); }
.qn-h2 > em   { font-family: var(--font-serif); font-style: italic; font-weight: 400; color: var(--r); }
.qn-h2.on-wine > span { color: #fff; }
.qn-h2.on-wine > em   { color: var(--qn-rose); }

.qn-sec-head { margin-bottom: clamp(30px, 4vw, 52px); }

/* ══ 01 · Hero ══ */
.qn-hero { padding-top: clamp(38px, 4.4vw, 66px); }
.qn-hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, .78fr);
  grid-template-rows: auto 1fr;
  column-gap: clamp(28px, 4.5vw, 72px);
  align-items: start;
}
.qn-hero-copy    { grid-column: 1; grid-row: 1; padding-top: clamp(4px, 1.4vw, 20px); }
.qn-hero-media   { grid-column: 2; grid-row: 1 / span 2; }
.qn-hero-metrics { grid-column: 1; grid-row: 2; align-self: end; }
.qn-hero-lede {
  font-family: var(--font-sans, system-ui, sans-serif);
  font-size: clamp(14px, 1.05vw, 15.5px);
  line-height: 1.72;
  color: var(--qn-gray);
  max-width: 46ch;
  margin-bottom: clamp(30px, 4vw, 52px);
}
.qn-portrait {
  position: relative;
  aspect-ratio: 4 / 5;
  height: clamp(360px, 32vw, 500px);
  margin-left: auto;
  overflow: hidden;
  background: var(--paper);
  border: 1px solid var(--qn-line);
}
.qn-portrait img { width: 100%; height: 100%; object-fit: cover; object-position: center 22%; }

/* Indicadores con separadores verticales finos */
.qn-metrics {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-top: 1px solid var(--qn-line);
  padding-top: clamp(20px, 2.4vw, 28px);
  margin: 0;
}
.qn-metric { padding-right: clamp(10px, 1.4vw, 20px); }
.qn-metric + .qn-metric { padding-left: clamp(12px, 1.6vw, 24px); border-left: 1px solid var(--qn-line); }
.qn-metric-ic { display: block; color: var(--r); margin-bottom: 14px; }
.qn-metric-t {
  font-family: var(--font-sans, system-ui, sans-serif);
  font-size: clamp(12.5px, .95vw, 14px); font-weight: 600;
  color: var(--qn-ink); line-height: 1.3;
}
.qn-metric-s {
  font-family: var(--font-sans, system-ui, sans-serif);
  font-size: clamp(12px, .9vw, 13.5px); font-weight: 400;
  color: var(--fg-4); line-height: 1.35; margin: 2px 0 0;
}

/* ══ 02 · Perfil profesional ══ */
.qn-split {
  display: grid;
  grid-template-columns: 35fr 65fr;
  gap: clamp(28px, 4.5vw, 72px);
  align-items: start;
}
.qn-p {
  font-family: var(--font-sans, system-ui, sans-serif);
  font-size: 15.5px;
  line-height: 1.78;
  color: var(--qn-gray);
  margin-bottom: 20px;
  max-width: 66ch;
}
/* RichText marca los <strong> con style inline color:inherit, así que el
   realce editorial en tinta necesita ganar especificidad explícitamente. */
.qn-p strong,
.qn-card-desc strong,
.qn-tl-desc strong { color: var(--qn-ink) !important; font-weight: 600; }
.qn-quote {
  border-left: 1px solid var(--r);
  padding-left: clamp(18px, 2.2vw, 28px);
  margin-top: clamp(26px, 3.2vw, 40px);
  max-width: 58ch;
}
.qn-quote p {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: clamp(17px, 1.55vw, 22px);
  line-height: 1.5;
  color: var(--qn-ink);
}
.qn-quote cite {
  display: block;
  margin-top: 16px;
  font-family: var(--font-mono, ui-monospace, monospace);
  font-style: normal;
  font-size: 10.5px;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: var(--fg-4);
}

/* ══ 03 · Formación académica ══ */
.qn-form-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: clamp(14px, 1.5vw, 22px);
}
.qn-form-grid > * { display: flex; }          /* el wrapper <Reveal> estira */
.qn-card {
  display: flex;
  flex-direction: column;
  width: 100%;
  background: var(--white);
  border: 1px solid var(--qn-line);
  border-radius: 2px;
  padding: clamp(18px, 1.7vw, 24px);
  transition: border-color .3s var(--ease), transform .3s var(--ease), background-color .3s var(--ease);
}
.qn-card:hover { border-color: var(--r); transform: translateY(-2px); background: #fffdfb; }
.qn-card-tag {
  font-family: var(--font-mono, ui-monospace, monospace);
  font-size: 10px; font-weight: 500; letter-spacing: .13em;
  text-transform: uppercase; color: var(--r);
  margin-bottom: 14px;
}
.qn-card-title {
  font-family: var(--font-sans, system-ui, sans-serif);
  font-weight: 600; font-size: 14px; line-height: 1.35;
  color: var(--qn-ink); margin-bottom: 10px;
}
.qn-card-inst {
  font-family: var(--font-sans, system-ui, sans-serif);
  font-size: 12.5px; line-height: 1.5;
  color: var(--fg-4); margin-bottom: 12px;
}
.qn-card-desc {
  font-family: var(--font-sans, system-ui, sans-serif);
  font-size: 12.5px; line-height: 1.62; color: var(--qn-gray); margin: 0;
}

/* ══ 04 · Trayectoria ══ */
.qn-tl {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: clamp(32px, 5vw, 80px);
  row-gap: 0;
}
.qn-tl-item {
  position: relative;
  padding: 0 0 clamp(24px, 2.8vw, 34px) 22px;
}
.qn-tl-item::before {                          /* línea vertical fina */
  content: ""; position: absolute; left: 3px; top: 13px; bottom: 0;
  width: 1px; background: rgba(126,1,2,.20);
}
.qn-tl > *:nth-last-child(-n+2) .qn-tl-item::before { display: none; }
.qn-tl-dot {
  position: absolute; left: 0; top: 5px;
  width: 7px; height: 7px; border-radius: 50%; background: var(--r);
}
.qn-tl-anio {
  font-family: var(--font-mono, ui-monospace, monospace);
  font-size: 11px; letter-spacing: .1em; text-transform: uppercase;
  color: var(--r); margin-bottom: 7px;
}
.qn-tl-cargo {
  font-family: var(--font-sans, system-ui, sans-serif);
  font-weight: 600; font-size: 14.5px; line-height: 1.4;
  color: var(--qn-ink); margin-bottom: 6px;
}
.qn-tl-lugar { color: var(--r); font-weight: 600; }
.qn-tl-desc {
  font-family: var(--font-sans, system-ui, sans-serif);
  font-size: 13px; line-height: 1.62; color: var(--qn-gray); margin: 0; max-width: 52ch;
}

/* ══ 05 + 06 · Bloque doble ══ */
.qn-duo {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(30px, 4vw, 64px);
}
.qn-duo-col + .qn-duo-col {
  padding-left: clamp(30px, 4vw, 64px);
  border-left: 1px solid var(--qn-line);
}
.qn-duo-lede {
  font-family: var(--font-sans, system-ui, sans-serif);
  font-size: 13.5px; line-height: 1.7; color: var(--qn-gray);
  margin: 18px 0 clamp(24px, 3vw, 34px); max-width: 48ch;
}
.qn-voz-grid {
  list-style: none; margin: 0; padding: 0;
  display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 10px;
}
.qn-voz {
  background: var(--white);
  border: 1px solid var(--qn-line);
  border-radius: 2px;
  padding: 16px 13px 15px;
  display: flex; flex-direction: column; gap: 12px;
  transition: border-color .3s var(--ease), transform .3s var(--ease);
}
.qn-voz:hover { border-color: var(--r); transform: translateY(-2px); }
.qn-voz-ic { color: var(--r); }
.qn-voz-t {
  font-family: var(--font-sans, system-ui, sans-serif);
  font-size: 11.5px; line-height: 1.45; color: var(--qn-gray);
}
.qn-more {
  display: inline-flex; align-items: center; gap: 9px;
  margin-top: clamp(22px, 2.6vw, 30px);
  padding-bottom: 5px;
  font-family: var(--font-sans, system-ui, sans-serif);
  font-size: 12.5px; font-weight: 600; color: var(--r);
  border-bottom: 1px solid rgba(126,1,2,.35);
  transition: gap .25s var(--ease), border-color .25s var(--ease);
}
.qn-more:hover { gap: 14px; border-color: var(--r); }

.qn-doct-grid {
  display: grid; grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(12px, 1.4vw, 18px);
}
.qn-doct-grid > * { display: flex; }
.qn-card-doct { padding: clamp(18px, 1.8vw, 26px); }
.qn-doct-title {
  font-family: var(--font-sans, system-ui, sans-serif);
  font-weight: 600; font-size: 15px; line-height: 1.35;
  color: var(--qn-ink); margin-bottom: 10px;
}
.qn-doct-tipo {
  font-family: var(--font-mono, ui-monospace, monospace);
  font-size: 9.5px; letter-spacing: .13em; text-transform: uppercase;
  color: var(--fg-4); margin-bottom: 12px;
}
.qn-recon {
  list-style: none; margin: clamp(22px, 2.6vw, 32px) 0 0; padding: 0;
  display: grid; grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: clamp(18px, 2.2vw, 30px);
}
.qn-recon li {
  display: flex; gap: 12px;
  padding: 13px 0; border-top: 1px solid var(--qn-line);
}
.qn-recon-n {
  font-family: var(--font-mono, ui-monospace, monospace);
  font-size: 10.5px; letter-spacing: .1em; color: var(--r);
  flex-shrink: 0; padding-top: 2px;
}
.qn-recon-t {
  font-family: var(--font-sans, system-ui, sans-serif);
  font-size: 12.5px; line-height: 1.55; color: var(--qn-gray);
}

/* ══ 07 · Docencia universitaria ══ */
.qn-teach {
  background: var(--r);
  padding: clamp(60px, 7vw, 108px) 0;
}
.qn-teach-head { margin-bottom: clamp(30px, 3.6vw, 46px); }
.qn-teach-lede {
  font-family: var(--font-sans, system-ui, sans-serif);
  font-size: clamp(13.5px, 1.05vw, 15.5px); line-height: 1.72;
  color: rgba(255,255,255,.80); max-width: 62ch; margin-top: 20px;
}
.qn-uni-grid {
  list-style: none; margin: 0; padding: 0;
  display: grid; grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(10px, 1.1vw, 14px);
}
.qn-uni-cell { display: flex; }
.qn-uni-cell > .rc-reveal { display: flex; width: 100%; }
.qn-uni {
  width: 100%;
  display: flex; align-items: center; gap: 14px;
  padding: 17px 20px;
  border: 1px solid rgba(255,255,255,.26);
  border-radius: 2px;
  transition: border-color .3s var(--ease), background-color .3s var(--ease), transform .3s var(--ease);
}
.qn-uni:hover { border-color: rgba(255,255,255,.62); background: rgba(255,255,255,.06); transform: translateY(-2px); }
.qn-uni-n {
  font-family: var(--font-mono, ui-monospace, monospace);
  font-size: 10.5px; letter-spacing: .1em; color: rgba(255,255,255,.55); flex-shrink: 0;
}
.qn-uni-t {
  font-family: var(--font-sans, system-ui, sans-serif);
  font-size: 14px; font-weight: 500; color: #fff; line-height: 1.35;
}
/* Si el último elemento queda solo al inicio de una fila, ocupa la fila entera */
.qn-uni-grid > *:last-child:nth-child(3n+1) { grid-column: 1 / -1; }

/* ── Foco visible (accesibilidad) ── */
.qn a:focus-visible { outline: 2px solid var(--r); outline-offset: 3px; }
.qn-teach a:focus-visible { outline-color: #fff; }

/* ═══ Responsive ═══ */
@media (max-width: 1180px) {
  .qn-form-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
}
@media (max-width: 1000px) {
  .qn-form-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .qn-voz-grid  { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .qn-duo       { grid-template-columns: 1fr; gap: clamp(40px, 6vw, 56px); }
  .qn-duo-col + .qn-duo-col {
    padding-left: 0; border-left: 0;
    padding-top: clamp(34px, 5vw, 48px); border-top: 1px solid var(--qn-line);
  }
  .qn-uni-grid  { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .qn-uni-grid > *:last-child:nth-child(3n+1) { grid-column: auto; }
  .qn-uni-grid > *:last-child:nth-child(2n+1) { grid-column: 1 / -1; }
}
@media (max-width: 900px) {
  /* Orden móvil: texto → foto → métricas */
  .qn-hero-grid { grid-template-columns: 1fr; grid-template-rows: auto auto auto; row-gap: clamp(30px, 5vw, 44px); }
  .qn-hero-copy    { grid-column: 1; grid-row: 1; padding-top: 0; }
  .qn-hero-media   { grid-column: 1; grid-row: 2; }
  .qn-hero-metrics { grid-column: 1; grid-row: 3; }
  .qn-portrait { height: auto; width: 100%; max-width: 380px; margin: 0 auto; }
  .qn-split { grid-template-columns: 1fr; gap: clamp(22px, 4vw, 32px); }
  .qn-tl { grid-template-columns: 1fr; }
  .qn-tl > *:nth-last-child(-n+2) .qn-tl-item::before { display: block; }
  .qn-tl > *:last-child .qn-tl-item::before { display: none; }
}
@media (max-width: 620px) {
  .qn-metrics { grid-template-columns: repeat(2, 1fr); row-gap: 24px; }
  .qn-metric  { padding-right: 10px; }
  .qn-metric:nth-child(odd)  { padding-left: 0; border-left: 0; }
  .qn-metric:nth-child(even) { padding-left: 16px; border-left: 1px solid var(--qn-line); }
  .qn-metric:nth-child(n+3)  { padding-top: 22px; border-top: 1px solid var(--qn-line); }
  .qn-form-grid { grid-template-columns: 1fr; }
  .qn-doct-grid { grid-template-columns: 1fr; }
  .qn-recon     { grid-template-columns: 1fr; }
  .qn-uni-grid  { grid-template-columns: 1fr; }
  .qn-uni-grid > *:last-child:nth-child(2n+1) { grid-column: auto; }
}
@media (max-width: 420px) {
  .qn-voz-grid { grid-template-columns: 1fr; }
  .qn-voz { flex-direction: row; align-items: center; gap: 14px; }
}
      `}</style>
    </>
  );
}
