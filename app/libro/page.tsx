import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Breadcrumbs from "@/components/Breadcrumbs";
import SchemaOrg from "@/components/SchemaOrg";
import { SITE_URL, SITE_NAME, AUTHOR, CONTACT } from "@/lib/seo";

const R = "#7e0102";
const GOLD = "#c9a86a";

const TITLE = "El Caníbal de la Refrigeradora";
const SUBTITLE = "Crónica forense y jurídica del femicidio de la ofendida";
const OG = `${SITE_URL}/images/libro/canibal-og.jpg`;

// WhatsApp con mensaje para reservar el libro
const WA_RESERVA =
  "https://api.whatsapp.com/send?phone=50689980112&text=" +
  encodeURIComponent(
    'Hola, quiero reservar el libro «El Caníbal de la Refrigeradora» de Joseph Rivera. ¿Cómo lo adquiero?'
  );

export const metadata: Metadata = {
  title: { absolute: "El Caníbal de la Refrigeradora | Nuevo libro de Joseph Rivera" },
  description:
    "«El Caníbal de la Refrigeradora» — el nuevo libro del abogado penalista Joseph Rivera Cheves: crónica forense y jurídica del femicidio de la ofendida. Próximamente. Parte de las ganancias serán para la hija de la ofendida.",
  alternates: { canonical: `${SITE_URL}/libro` },
  keywords: [
    "el canibal de la refrigeradora",
    "libro joseph rivera",
    "joseph rivera libro",
    "el canibal de la refrigeradora libro",
    "libro true crime costa rica",
    "libro femicidio costa rica",
    "cronica forense costa rica",
    "joseph rivera cheves libro",
    "abogado joseph rivera libro",
  ],
  openGraph: {
    type: "book",
    url: `${SITE_URL}/libro`,
    title: "El Caníbal de la Refrigeradora | Nuevo libro de Joseph Rivera",
    description:
      "Crónica forense y jurídica del femicidio de la ofendida, por el abogado querellante Joseph Rivera Cheves. Próximamente. Parte de las ganancias serán para la hija de la ofendida.",
    images: [{ url: OG, width: 1200, height: 630, alt: `${TITLE} — nuevo libro de ${AUTHOR}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "El Caníbal de la Refrigeradora | Nuevo libro de Joseph Rivera",
    description: "Crónica forense y jurídica del femicidio de la ofendida. Próximamente.",
    images: [OG],
  },
};

// Schema.org/Book + NewsArticle del anuncio
const bookSchema = {
  "@context": "https://schema.org",
  "@type": "Book",
  "@id": `${SITE_URL}/libro#book`,
  name: TITLE,
  alternateName: "El Caníbal de la Refrigeradora — crónica forense",
  description:
    "Crónica forense y jurídica del femicidio de la ofendida, narrada por el abogado querellante de la familia. Un testimonio honesto del dolor, la indignación y la búsqueda de justicia en uno de los casos más atroces de la historia de Costa Rica.",
  url: `${SITE_URL}/libro`,
  image: `${SITE_URL}/images/libro/canibal-portada.jpg`,
  inLanguage: "es",
  bookFormat: "https://schema.org/Hardcover",
  genre: ["True Crime", "Crónica jurídica", "Ensayo forense"],
  author: {
    "@type": "Person",
    name: AUTHOR,
    url: `${SITE_URL}/quien`,
    jobTitle: "Abogado Penalista",
  },
  publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
  about: [
    { "@type": "Thing", name: "Femicidio en Costa Rica" },
    { "@type": "Thing", name: "Violencia contra las mujeres" },
  ],
  abstract:
    "Más que una crónica judicial, el libro nace desde lo personal: el episodio más fuerte de la carrera del abogado Joseph Rivera. Parte de las ganancias serán destinadas a la hija de la ofendida.",
};

const announceSchema = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "@id": `${SITE_URL}/libro#announcement`,
  headline: "Próximamente: «El Caníbal de la Refrigeradora», nuevo libro de Joseph Rivera",
  description:
    "El abogado penalista Joseph Rivera anuncia la próxima publicación de su libro sobre uno de los casos más atroces de Costa Rica. Parte de las ganancias serán para la hija de la ofendida.",
  url: `${SITE_URL}/libro`,
  image: { "@type": "ImageObject", url: OG, width: 1200, height: 630 },
  datePublished: "2026-06-20",
  dateModified: "2026-06-21",
  inLanguage: "es-CR",
  author: { "@type": "Person", name: AUTHOR, url: `${SITE_URL}/quien` },
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
    logo: { "@type": "ImageObject", url: `${SITE_URL}/images/icon-512.png`, width: 512, height: 512 },
  },
  about: { "@id": `${SITE_URL}/libro#book` },
  mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/libro` },
};

export default function LibroPage() {
  return (
    <>
      <SchemaOrg data={[bookSchema, announceSchema]} />
      <div className="rc-page">

        {/* ══ HERO — noir ══ */}
        <section style={{
          position: "relative",
          background:
            "radial-gradient(1200px 600px at 78% 20%, rgba(126,1,2,.22), transparent 60%), linear-gradient(180deg, #0a0707 0%, #120b0b 60%, #0a0707 100%)",
          overflow: "hidden",
          padding: "clamp(48px,7vw,96px) 0 clamp(56px,8vw,110px)",
        }}>
          {/* Breadcrumb sobre fondo oscuro */}
          <div className="rc-wrap" style={{ position: "relative", zIndex: 2 }}>
            <div className="libro-breadcrumb">
              <Breadcrumbs trail={[{ name: "Libro", href: "/libro" }]} />
            </div>

            <div style={{
              display: "grid", gridTemplateColumns: "1fr 0.82fr",
              gap: "clamp(36px,5vw,80px)", alignItems: "center", marginTop: 8,
            }} className="libro-hero-grid">

              {/* Texto */}
              <div>
                <Reveal variant="fade">
                  <span className="libro-badge" style={{ marginBottom: 28 }}>
                    <span className="dot" /> Próximamente
                  </span>
                </Reveal>

                <h1 className="rc-display rc-hero-title" style={{ color: "#f5ede0", marginBottom: 18, marginTop: 22 }}>
                  <span className="rc-hero-line"><span className="libro-gold">El&nbsp;Caníbal</span></span>
                  <span className="rc-hero-line"><span style={{ color: "#f5ede0", fontStyle: "italic", fontFamily: "Georgia, serif", fontWeight: 400, fontSize: "0.5em" }}>de&nbsp;la</span></span>
                  <span className="rc-hero-line"><span className="libro-gold">Refrigeradora</span></span>
                </h1>

                <Reveal delay={160} variant="fade">
                  <p style={{
                    fontFamily: "Georgia, serif", fontStyle: "italic",
                    fontSize: "clamp(16px,1.7vw,21px)", lineHeight: 1.5,
                    color: "rgba(245,237,224,.78)", maxWidth: "40ch", marginBottom: 14,
                  }}>
                    {SUBTITLE}
                  </p>
                </Reveal>

                <Reveal delay={220} variant="fade">
                  <div style={{
                    fontFamily: "var(--font-mono, monospace)", fontSize: 12,
                    letterSpacing: ".18em", textTransform: "uppercase",
                    color: GOLD, marginBottom: 36,
                  }}>
                    Nuevo libro de {AUTHOR}
                  </div>
                </Reveal>

                <Reveal delay={300} variant="fade">
                  <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
                    <a href={WA_RESERVA} target="_blank" rel="noopener" className="libro-btn">
                      Muy pronto · Resérvalo <span className="arrow">→</span>
                    </a>
                    <Link href="/casos/nadia-peraza" className="libro-btn-ghost">
                      Conocer el caso
                    </Link>
                  </div>
                </Reveal>
              </div>

              {/* Portada del libro */}
              <Reveal delay={120} variant="scale">
                <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
                  <div className="libro-glow" />
                  <div className="libro-cover" style={{ position: "relative", zIndex: 1, width: "min(340px, 78%)" }}>
                    <Image
                      src="/images/libro/canibal-portada.jpg"
                      alt="Portada del libro El Caníbal de la Refrigeradora — crónica forense del femicidio de la ofendida, por el abogado penalista Joseph Rivera Cheves"
                      width={760} height={1140}
                      priority
                      sizes="(max-width: 900px) 78vw, 340px"
                      style={{ width: "100%", height: "auto", borderRadius: 3 }}
                    />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          <style>{`
            .libro-breadcrumb nav a, .libro-breadcrumb nav span { color: rgba(245,237,224,.5) !important; }
            .libro-breadcrumb nav [aria-current] { color: ${GOLD} !important; }
            @media (max-width: 860px) {
              .libro-hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
            }
          `}</style>
        </section>

        {/* ══ FRANJA DE CLAVES ══ */}
        <section style={{ background: "#0a0707", padding: "clamp(28px,4vw,44px) 0", borderTop: "1px solid rgba(201,168,106,.14)" }}>
          <div className="rc-wrap">
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "clamp(20px,3vw,40px)",
            }} className="libro-keys stagger">
              {[
                { k: "Género", v: "Crónica forense y jurídica" },
                { k: "Origen", v: "Testimonio personal del abogado querellante" },
                { k: "Causa", v: "Parte de las ganancias → la hija de la ofendida" },
              ].map((s, i) => (
                <Reveal key={s.k} delay={i * 80} variant="fade">
                  <div>
                    <div style={{
                      fontFamily: "var(--font-mono, monospace)", fontSize: 10,
                      letterSpacing: ".18em", textTransform: "uppercase",
                      color: GOLD, marginBottom: 10,
                    }}>{s.k}</div>
                    <div style={{ fontSize: "clamp(14px,1.4vw,16px)", color: "rgba(245,237,224,.82)", lineHeight: 1.5 }}>
                      {s.v}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <style>{`
            @media (max-width: 760px) { .libro-keys { grid-template-columns: 1fr !important; gap: 22px !important; } }
          `}</style>
        </section>

        {/* ══ SOBRE EL LIBRO ══ */}
        <section style={{ background: "var(--paper)", padding: "var(--pad-y) 0" }}>
          <div className="rc-wrap" style={{ maxWidth: 1080 }}>
            <Reveal>
              <div className="rc-eyebrow" style={{ marginBottom: 16 }}>01 · Sobre la obra</div>
              <h2 className="rc-h2" style={{ marginBottom: 48, maxWidth: "20ch" }}>
                El peso emocional <em className="rc-em">convertido en palabras</em>
              </h2>
            </Reveal>

            <div style={{
              display: "grid", gridTemplateColumns: "1.5fr 1fr",
              gap: "clamp(32px,5vw,72px)", alignItems: "start",
            }} className="libro-about-grid">
              <div className="legal-prose" style={{ fontSize: 17 }}>
                <Reveal>
                  <p>
                    El abogado penalista <strong>Joseph Rivera</strong> anuncia la próxima
                    publicación de su libro <strong>«El Caníbal de la Refrigeradora»</strong>, una
                    obra que documenta uno de los casos más difíciles y atroces en la historia de
                    Costa Rica: el <strong>femicidio de la ofendida</strong>, joven madre
                    cuyo cuerpo fue desmembrado y ocultado durante meses dentro de una refrigeradora.
                  </p>
                </Reveal>
                <Reveal delay={60}>
                  <p>
                    Más que una crónica judicial, el libro <strong>nace desde lo personal</strong>.
                    Joseph Rivera escribió esta obra tras vivir el que ha sido, sin lugar a dudas,
                    <strong> el episodio más fuerte y desgarrador de toda su carrera profesional</strong>.
                    Acompañar a la familia de la ofendida, enfrentarse a la crudeza de la evidencia y luchar
                    por que este crimen no quedara impune dejó una huella imborrable en quien escribe
                    estas páginas.
                  </p>
                </Reveal>
                <Reveal delay={120}>
                  <p>
                    <strong>«El Caníbal de la Refrigeradora»</strong> es el resultado de ese peso
                    emocional convertido en palabras: un <strong>testimonio honesto del dolor, la
                    indignación y, sobre todo, la búsqueda incansable de justicia</strong>. Narra uno
                    de los casos más difíciles y atroces en la historia del país, contado por dentro,
                    desde la silla del abogado querellante de la familia.
                  </p>
                </Reveal>
              </div>

              {/* Mini-ficha del autor */}
              <Reveal delay={120} variant="slide-left">
                <aside style={{
                  background: "#fff", border: "1px solid var(--hairline-strong)",
                  padding: "clamp(24px,3vw,32px)",
                }}>
                  <div className="rc-meta" style={{ color: R, marginBottom: 16 }}>El autor</div>
                  <div style={{ fontSize: 20, fontWeight: 600, color: "#0d0d0d", letterSpacing: "-0.01em", marginBottom: 6 }}>
                    {AUTHOR}
                  </div>
                  <div style={{ fontSize: 13, color: "var(--fg-4)", lineHeight: 1.6, marginBottom: 20 }}>
                    Abogado penalista · Querellante de la familia de la ofendida en el caso que obtuvo
                    una condena de 50 años, máximo legal en Costa Rica.
                  </div>
                  <Link href="/quien" className="rc-link">Ver perfil del abogado →</Link>
                </aside>
              </Reveal>
            </div>
          </div>
          <style>{`
            @media (max-width: 820px) { .libro-about-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>

        {/* ══ CITA ══ */}
        <section style={{ background: R, padding: "clamp(56px,8vw,110px) 0" }}>
          <div className="rc-wrap" style={{ textAlign: "center", maxWidth: 940 }}>
            <div style={{ fontFamily: "Georgia, serif", fontSize: 72, lineHeight: 1, color: "rgba(255,255,255,.22)", marginBottom: 16 }}>
              &ldquo;
            </div>
            <Reveal>
              <blockquote style={{
                fontFamily: "Georgia, serif", fontStyle: "italic",
                fontSize: "clamp(22px,3.2vw,40px)", lineHeight: 1.32, color: "#fff",
                marginBottom: 28,
              }}>
                Esto es por ella, por su hija y por su mamá. Por ella y por todas las que murieron
                a manos de un hombre. <span style={{ color: "rgba(255,255,255,.82)" }}>Seguimos buscando justicia.</span>
              </blockquote>
            </Reveal>
            <cite style={{
              fontFamily: "var(--font-mono, monospace)", fontStyle: "normal",
              fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase",
              color: "rgba(255,255,255,.7)",
            }}>
              — {AUTHOR}
            </cite>
          </div>
        </section>

        {/* ══ NASHLY — causa solidaria ══ */}
        <section style={{ background: "#0a0707", padding: "var(--pad-y) 0", position: "relative", overflow: "hidden" }}>
          <div aria-hidden="true" style={{
            position: "absolute", inset: 0,
            background: "radial-gradient(900px 500px at 20% 50%, rgba(126,1,2,.18), transparent 60%)",
          }} />
          <div className="rc-wrap" style={{ position: "relative", zIndex: 1, maxWidth: 1000 }}>
            <Reveal variant="fade">
              <div className="libro-rule" style={{ marginBottom: 40, maxWidth: 120 }} />
            </Reveal>
            <div style={{
              display: "grid", gridTemplateColumns: "auto 1fr", gap: "clamp(24px,4vw,48px)", alignItems: "start",
            }} className="libro-nashly-grid">
              <Reveal variant="scale">
                <div aria-hidden="true" style={{
                  width: 72, height: 72, flexShrink: 0,
                  border: `1px solid rgba(201,168,106,.4)`, borderRadius: "50%",
                  display: "grid", placeItems: "center",
                }}>
                  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </div>
              </Reveal>
              <div>
                <Reveal>
                  <div style={{
                    fontFamily: "var(--font-mono, monospace)", fontSize: 11,
                    letterSpacing: ".2em", textTransform: "uppercase", color: GOLD, marginBottom: 16,
                  }}>
                    Una causa más allá de las páginas
                  </div>
                  <h2 style={{
                    fontFamily: "var(--font-sans)", fontWeight: 300,
                    fontSize: "clamp(26px,3.6vw,46px)", lineHeight: 1.12, letterSpacing: "-0.02em",
                    color: "#f5ede0", marginBottom: 24, maxWidth: "20ch",
                  }}>
                    Parte de las ganancias serán para <span className="libro-gold">la hija de la ofendida</span>
                  </h2>
                </Reveal>
                <Reveal delay={80} variant="fade">
                  <p style={{ fontSize: 17, lineHeight: 1.8, color: "rgba(245,237,224,.72)", maxWidth: "60ch", marginBottom: 16 }}>
                    El abogado Joseph Rivera anuncia con especial énfasis que una parte de las
                    ganancias generadas por la venta del libro será destinada directamente a{" "}
                    <strong style={{ color: "#f5ede0" }}>la hija de la ofendida</strong>, ante
                    las dificultades económicas que atraviesa su familia. La pequeña, que apenas tenía{" "}
                    <strong style={{ color: "#f5ede0" }}>dos años al momento de los hechos</strong>,
                    quedó al cuidado de su familia tras la pérdida de su madre.
                  </p>
                </Reveal>
                <Reveal delay={140} variant="fade">
                  <p style={{ fontSize: 17, lineHeight: 1.8, color: "rgba(245,237,224,.72)", maxWidth: "60ch" }}>
                    Con esta iniciativa, la obra no solo busca <strong style={{ color: "#f5ede0" }}>preservar
                    la memoria de la ofendida</strong> y visibilizar la violencia contra las mujeres en Costa
                    Rica, sino también brindar un <strong style={{ color: "#f5ede0" }}>apoyo concreto y
                    tangible</strong> a quien más sufrió esta tragedia: su hija.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
          <style>{`
            @media (max-width: 640px) { .libro-nashly-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>

        {/* ══ GALERÍA PROMOCIONAL ══ */}
        <section style={{ background: "var(--paper)", padding: "var(--pad-y) 0" }}>
          <div className="rc-wrap">
            <Reveal>
              <div className="rc-eyebrow" style={{ marginBottom: 16 }}>02 · La campaña</div>
              <h2 className="rc-h2" style={{ marginBottom: 48, maxWidth: "24ch" }}>
                El anuncio que <em className="rc-em">recorre el país</em>
              </h2>
            </Reveal>

            {/* Banner destacado */}
            <Reveal variant="scale">
              <div className="libro-promo" style={{ marginBottom: "clamp(20px,3vw,32px)" }}>
                <Image
                  src="/images/libro/canibal-banner.jpg"
                  alt="Anuncio oficial del libro El Caníbal de la Refrigeradora con el abogado Joseph Rivera Cheves — próximamente, crónica forense de un femicidio en Costa Rica"
                  width={1672} height={941}
                  sizes="(max-width: 1440px) 100vw, 1440px"
                  style={{ width: "100%", height: "auto" }}
                  loading="lazy"
                />
              </div>
            </Reveal>

            {/* Dos promos cuadradas */}
            <div style={{
              display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(20px,3vw,32px)",
            }} className="libro-promo-grid">
              {[
                { src: "/images/libro/canibal-promo-1.jpg", alt: "Pieza promocional del libro El Caníbal de la Refrigeradora — próximamente, nuevo libro del abogado Joseph Rivera sobre un femicidio en Costa Rica" },
                { src: "/images/libro/canibal-promo-2.jpg", alt: "Anuncio del libro El Caníbal de la Refrigeradora — crónica forense y jurídica de un femicidio, parte de los fondos para la familia de la ofendida" },
              ].map((g, i) => (
                <Reveal key={g.src} delay={i * 100} variant="scale">
                  <div className="libro-promo">
                    <Image
                      src={g.src}
                      alt={g.alt}
                      width={1080} height={1080}
                      sizes="(max-width: 720px) 100vw, 50vw"
                      style={{ width: "100%", height: "auto" }}
                      loading="lazy"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <style>{`
            @media (max-width: 720px) { .libro-promo-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>

        {/* ══ ENLACE AL CASO NADIA ══ */}
        <section style={{ background: "#fff", padding: "var(--pad-y) 0" }}>
          <div className="rc-wrap">
            <Reveal>
              <Link href="/casos/nadia-peraza" style={{ display: "block" }} className="rc-card libro-case-link">
                <div style={{
                  display: "grid", gridTemplateColumns: "1fr auto", gap: "clamp(20px,3vw,48px)",
                  alignItems: "center", padding: "clamp(28px,4vw,48px)",
                }} className="libro-case-inner">
                  <div>
                    <div className="rc-eyebrow" style={{ marginBottom: 14 }}>El caso detrás del libro</div>
                    <h2 className="rc-h3" style={{ fontSize: "clamp(22px,3vw,34px)", marginBottom: 12 }}>
                      El <em className="rc-em">caso detrás</em>
                    </h2>
                    <p style={{ fontSize: 15, color: "var(--fg-3)", lineHeight: 1.7, maxWidth: "60ch" }}>
                      Femicidio agravado por desmembramiento. El Lic. Rivera Cheves representó a la
                      familia como querellante privado y obtuvo una <strong>condena de 50 años — máximo
                      legal en Costa Rica</strong> (pena nominal de 79 años). Conozca el dossier procesal
                      completo: hechos, cronología y estrategia.
                    </p>
                  </div>
                  <span className="libro-case-arrow" style={{
                    display: "inline-flex", alignItems: "center", gap: 10,
                    fontSize: 14, fontWeight: 700, color: R, whiteSpace: "nowrap",
                  }}>
                    Ver el caso completo <span className="arrow" style={{ transition: "transform .3s ease" }}>→</span>
                  </span>
                </div>
              </Link>
            </Reveal>
          </div>
          <style>{`
            .libro-case-link:hover .libro-case-arrow .arrow { transform: translateX(5px); }
            @media (max-width: 700px) {
              .libro-case-inner { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </section>

        {/* ══ CTA FINAL — reservar ══ */}
        <section style={{
          background: "linear-gradient(180deg, #120b0b 0%, #0a0707 100%)",
          padding: "clamp(64px,9vw,130px) 0",
        }}>
          <div className="rc-wrap" style={{ textAlign: "center", maxWidth: 760 }}>
            <Reveal variant="fade">
              <span className="libro-badge" style={{ marginBottom: 28 }}>
                <span className="dot" /> Disponible muy pronto
              </span>
            </Reveal>
            <Reveal delay={60}>
              <h2 style={{
                fontFamily: "var(--font-sans)", fontWeight: 300,
                fontSize: "clamp(28px,4.5vw,56px)", lineHeight: 1.1, letterSpacing: "-0.025em",
                color: "#f5ede0", marginBottom: 22,
              }}>
                Sé el primero en <span className="libro-gold">leerlo</span>
              </h2>
            </Reveal>
            <Reveal delay={120} variant="fade">
              <p style={{ fontSize: 16, lineHeight: 1.7, color: "rgba(245,237,224,.65)", marginBottom: 40, maxWidth: "46ch", marginLeft: "auto", marginRight: "auto" }}>
                Aparta tu ejemplar de «El Caníbal de la Refrigeradora». Te avisamos apenas esté
                disponible — y tu compra apoya directamente a la familia de la ofendida.
              </p>
            </Reveal>
            <Reveal delay={180} variant="fade">
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
                <a href={WA_RESERVA} target="_blank" rel="noopener" className="libro-btn">
                  Resérvalo por WhatsApp <span className="arrow">→</span>
                </a>
                <a href={`tel:${CONTACT.tel}`} className="libro-btn-ghost">
                  Llamar · {CONTACT.telFmt}
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </div>
    </>
  );
}
