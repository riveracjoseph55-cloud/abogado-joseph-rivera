import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import RichText from "@/components/RichText";
import SchemaOrg from "@/components/SchemaOrg";
import Breadcrumbs from "@/components/Breadcrumbs";
import LiteYouTube from "@/components/LiteYouTube";
import FinalCTA from "@/components/FinalCTA";
import { SITE_URL, SITE_NAME, AUTHOR, schemaVideoObject } from "@/lib/seo";

const R          = "#7e0102";
const CS_CREAM   = "#F4F1EB";
const CS_BLACK   = "#0A0A0A";
const CS_GOLD    = "#C7A45C";
const CS_GRAY    = "#5A5551";
const CS_BORDER  = "rgba(20,20,20,0.12)";

const SLUG      = "/libro/presentacion";
const PAGE_URL  = `${SITE_URL}${SLUG}`;
const VIDEO_ID  = "R5ZLTiiRNmI";
const FECHA_ISO = "2026-09-23";
const HERO_IMG  = "/images/libro/presentacion/presentacion-libro-canibal-asamblea-legislativa.webp";
const OG_IMG    = `${SITE_URL}/images/libro/presentacion/presentacion-canibal-og.jpg`;

const WA_RESERVA =
  "https://api.whatsapp.com/send?phone=50689980112&text=" +
  encodeURIComponent(
    "Hola, acabo de hacer el SINPE para reservar «El Caníbal de la Refrigeradora». Le envío el comprobante."
  );
const WA_ENVIO =
  "https://api.whatsapp.com/send?phone=50689980112&text=" +
  encodeURIComponent(
    "Hola, quiero cotizar el envío de «El Caníbal de la Refrigeradora». Mi dirección completa es:"
  );

export const metadata: Metadata = {
  title: { absolute: "Presentación de «El Caníbal de la Refrigeradora» en la Asamblea Legislativa" },
  description:
    "Más de 170 personas llenaron el Salón de Expresidentes de la Asamblea Legislativa en la presentación del libro «El Caníbal de la Refrigeradora», del abogado penalista Joseph Rivera Cheves, el 23 de septiembre de 2026. Video completo, crónica y cómo reservar un ejemplar.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: "Presentación de «El Caníbal de la Refrigeradora» en la Asamblea Legislativa",
    description:
      "Salón de Expresidentes lleno: más de 170 personas en la presentación del libro de Joseph Rivera Cheves sobre el femicidio de Nadia Peraza Espinoza.",
    publishedTime: FECHA_ISO,
    authors: [AUTHOR],
    images: [{ url: OG_IMG, width: 1200, height: 630, alt: "Presentación de «El Caníbal de la Refrigeradora» en la Asamblea Legislativa de Costa Rica" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Presentación de «El Caníbal de la Refrigeradora» en la Asamblea Legislativa",
    images: [OG_IMG],
  },
  keywords: [
    "el caníbal de la refrigeradora",
    "el caníbal de la refrigeradora libro",
    "presentación libro el caníbal de la refrigeradora",
    "joseph rivera cheves libro",
    "libro nadia peraza",
    "nadia peraza espinoza",
    "libro femicidio costa rica",
    "asamblea legislativa salón de expresidentes",
    "cindy blanco gonzález",
    "comprar el caníbal de la refrigeradora",
    "reservar libro joseph rivera",
  ],
};

// ── Datos del acto ─────────────────────────────────────────────
const FICHA = [
  { k: "Fecha",       v: "23 de septiembre de 2026" },
  { k: "Lugar",       v: "Salón de Expresidentes · Asamblea Legislativa" },
  { k: "Asistencia",  v: "Más de 170 personas" },
  { k: "Anfitriona",  v: "Despacho de la diputada Cindy Blanco González" },
];

const MESA = [
  { n: "Cindy Blanco González", r: "Diputada de la República · anfitriona de la actividad" },
  { n: "Paola Nájera",          r: "Exdiputada y presidenta de la Junta de Protección Social" },
  { n: "Nogui Acosta Jaén",     r: "Diputado y jefe de fracción del Partido Pueblo Soberano" },
  { n: "Lic. Joseph Rivera Cheves", r: "Autor de la obra y abogado querellante en el caso" },
];

// Diputadas y diputados que recibieron el ejemplar especial.
const EJEMPLARES = [
  "Cindy Blanco González",
  "Nogui Acosta Jaén",
  "Nayuribe Guadamuz",
  "Gerald Campos",
  "Eder Hernández",
  "Marta Esquivel",
];

const GALERIA = [
  {
    src: "/images/libro/presentacion/joseph-rivera-firma-ejemplar-canibal-refrigeradora.webp",
    alt: "El abogado Joseph Rivera Cheves firma la dedicatoria de un ejemplar de «El Caníbal de la Refrigeradora» a una asistente, en el Salón de Expresidentes de la Asamblea Legislativa de Costa Rica",
    cap: "Firma de ejemplares al cierre del acto",
  },
  {
    src: "/images/libro/presentacion/joseph-rivera-dedica-libro-presentacion-asamblea.webp",
    alt: "Joseph Rivera Cheves dedica un ejemplar de su libro sobre el femicidio de Nadia Peraza mientras un asistente espera, durante la presentación en la Asamblea Legislativa",
    cap: "Dedicatorias a los asistentes",
  },
  {
    src: "/images/libro/presentacion/joseph-rivera-conversa-invitados-presentacion-libro.webp",
    alt: "El abogado penalista Joseph Rivera Cheves conversa con un invitado, ambos con un ejemplar en la mano, tras la presentación de «El Caníbal de la Refrigeradora»",
    cap: "Conversación con los invitados",
  },
  {
    src: "/images/libro/presentacion/joseph-rivera-entrega-ejemplar-invitado-asamblea.webp",
    alt: "Joseph Rivera Cheves entrega un ejemplar de «El Caníbal de la Refrigeradora» a un invitado en el Salón de Expresidentes de la Asamblea Legislativa",
    cap: "Entrega de ejemplares en el salón",
  },
];

const PASOS = [
  { n: "01", t: "Realice el pago", d: "**₡20.000** por **SINPE Móvil** al **8754-6091**, a nombre de Joseph Rivera." },
  { n: "02", t: "Identifique la reserva", d: "En el **detalle del SINPE** indique el nombre de la persona para quien se reserva el libro." },
  { n: "03", t: "Envíe el comprobante", d: "Remita el comprobante de pago por **WhatsApp al 8998-0112**." },
  { n: "04", t: "Reserva confirmada", d: "Una vez **verificado el pago**, la reserva queda confirmada." },
];

export default function PresentacionLibroPage() {
  const videoSchema = schemaVideoObject({
    name: "Presentación del libro «El Caníbal de la Refrigeradora» — Asamblea Legislativa de Costa Rica",
    description:
      "Transmisión completa de la presentación del libro «El Caníbal de la Refrigeradora», del abogado penalista Joseph Rivera Cheves, realizada en el Salón de Expresidentes de la Asamblea Legislativa de Costa Rica junto al despacho de la diputada Cindy Blanco González.",
    videoId: VIDEO_ID,
    date: FECHA_ISO,
    publisherName: SITE_NAME,
    publisherUrl: SITE_URL,
  });

  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Presentación del libro «El Caníbal de la Refrigeradora»",
    description:
      "Presentación del libro «El Caníbal de la Refrigeradora», crónica forense y jurídica del femicidio de Nadia Peraza Espinoza, escrita por el abogado penalista Joseph Rivera Cheves. Más de 170 personas asistieron al Salón de Expresidentes de la Asamblea Legislativa de Costa Rica.",
    startDate: FECHA_ISO,
    endDate: FECHA_ISO,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
    image: [OG_IMG],
    url: PAGE_URL,
    location: {
      "@type": "Place",
      name: "Salón de Expresidentes, Asamblea Legislativa de Costa Rica",
      address: {
        "@type": "PostalAddress",
        addressLocality: "San José",
        addressRegion: "San José",
        addressCountry: "CR",
      },
    },
    organizer: [
      { "@type": "Person", name: "Cindy Blanco González" },
      { "@type": "Person", name: AUTHOR, url: `${SITE_URL}/quien` },
    ],
    performer: MESA.map(m => ({ "@type": "Person", name: m.n })),
    about: {
      "@type": "Book",
      name: "El Caníbal de la Refrigeradora",
      author: { "@type": "Person", name: AUTHOR, url: `${SITE_URL}/quien` },
      inLanguage: "es",
      url: `${SITE_URL}/libro`,
    },
    workFeatured: { "@type": "Book", name: "El Caníbal de la Refrigeradora", url: `${SITE_URL}/libro` },
  };

  return (
    <>
      <SchemaOrg data={[eventSchema, videoSchema]} />
      <div className="rc-page pres">

        {/* ══ HERO ══ */}
        <section className="pres-hero">
          <div className="rc-wrap">
            <Breadcrumbs trail={[{ name: "Libro", href: "/libro" }, { name: "Presentación", href: SLUG }]} />

            <Reveal>
              <div className="pres-kicker">
                Asamblea Legislativa · 23 de septiembre de 2026
              </div>
            </Reveal>
            <Reveal delay={70}>
              <h1 className="pres-h1">
                Lleno total en el Salón de Expresidentes para la presentación de{" "}
                <em className="pres-em">«El Caníbal de la Refrigeradora»</em>
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className="pres-lede">
                Más de <strong>170 personas</strong> llenaron el Salón de Expresidentes de la
                Asamblea Legislativa de Costa Rica para la presentación del libro del abogado
                penalista <strong>Joseph Rivera Cheves</strong>, la crónica forense y jurídica del
                femicidio de <strong>Nadia Peraza Espinoza</strong>. La actividad se realizó junto
                al despacho de la diputada <strong>Cindy Blanco González</strong>.
              </p>
            </Reveal>

            <Reveal delay={190}>
              <figure className="pres-figure">
                <Image
                  src={HERO_IMG}
                  alt="Fotografía oficial de la presentación del libro «El Caníbal de la Refrigeradora» en el Salón de Expresidentes de la Asamblea Legislativa de Costa Rica, con la mesa principal y diputados sosteniendo ejemplares"
                  width={1292}
                  height={704}
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 900px) 100vw, 1100px"
                  className="pres-figure-img"
                />
                <figcaption className="pres-figcap">
                  Fotografía oficial del acto. El autor entregó un <strong>ejemplar especial</strong> a
                  cada diputada y diputado que acompañó la actividad.
                </figcaption>
              </figure>
            </Reveal>

            <Reveal delay={240}>
              <dl className="pres-ficha">
                {FICHA.map(f => (
                  <div className="pres-ficha-item" key={f.k}>
                    <dt>{f.k}</dt>
                    <dd>{f.v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </section>

        {/* ══ VIDEO ══ */}
        <section className="pres-video-sec">
          <div className="rc-wrap">
            <div className="pres-eyebrow">Transmisión completa</div>
            <h2 className="pres-h2">Vea el acto <em className="pres-em">completo</em></h2>
            <Reveal>
              <div className="pres-video">
                <LiteYouTube
                  id={VIDEO_ID}
                  title="Presentación del libro «El Caníbal de la Refrigeradora» en la Asamblea Legislativa de Costa Rica"
                />
              </div>
            </Reveal>
            <p className="pres-video-note">
              Transmisión íntegra de la actividad, incluidas las intervenciones de la mesa principal
              y la entrega del primer ejemplar a la familia de Nadia Peraza.
            </p>
          </div>
        </section>

        {/* ══ MESA PRINCIPAL ══ */}
        <section className="pres-sec">
          <div className="rc-wrap">
            <div className="pres-eyebrow">Mesa principal</div>
            <h2 className="pres-h2">Quiénes <em className="pres-em">intervinieron</em></h2>
            <ul className="pres-mesa">
              {MESA.map(m => (
                <li key={m.n}>
                  <span className="pres-mesa-n">{m.n}</span>
                  <span className="pres-mesa-r">{m.r}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ══ CRÓNICA ══ */}
        <section className="pres-sec pres-sec-alt">
          <div className="rc-wrap pres-narrow">
            <div className="pres-eyebrow">La crónica del acto</div>
            <h2 className="pres-h2">Una sala llena y un <em className="pres-em">nombre</em> repetido</h2>

            <RichText
              className="pres-p"
              text="La actividad abrió con las palabras de la diputada **Cindy Blanco González**, anfitriona del acto desde su despacho. Antes de hablar del libro, pidió a la sala pensar en la persona detrás de las páginas: «una mujer, que fue una hija, que fue una sobrina y que fue una madre»."
            />
            <blockquote className="pres-quote">
              <p>
                Hoy pienso en una niña, quien algún día conocerá la historia de su madre. Ojalá
                encuentre un entorno distinto, capaz de decirle que la vida de su madre importó.
              </p>
              <cite>Cindy Blanco González · Diputada de la República</cite>
            </blockquote>

            <RichText
              className="pres-p"
              text="Siguió **Paola Nájera**, exdiputada y actual presidenta de la Junta de Protección Social, quien centró su intervención en la responsabilidad de no trasladar la culpa a las víctimas y cerró con una frase que después retomarían otros oradores."
            />
            <blockquote className="pres-quote">
              <p>Si una mujer a usted le dice no, recuerde que no es no.</p>
              <cite>Paola Nájera · Presidenta de la Junta de Protección Social</cite>
            </blockquote>

            <RichText
              className="pres-p"
              text="El diputado **Nogui Acosta Jaén**, jefe de fracción del Partido Pueblo Soberano, habló del valor de la memoria histórica y de lo que un caso así deja en quienes quedan: «una niña que no va a poder ser abrazada por su madre»."
            />
            <blockquote className="pres-quote">
              <p>
                No podemos dejar pasar las cosas como algo que se vio en un periódico y olvidamos.
                Tenemos que convertirlas en una especie de faro.
              </p>
              <cite>Nogui Acosta Jaén · Diputado</cite>
            </blockquote>

            <RichText
              className="pres-p"
              text="Al tomar la palabra, el **Lic. Joseph Rivera Cheves** pidió un **minuto de silencio** por la memoria de Nadia Peraza Espinoza y explicó desde dónde escribió la obra: tres miradas, la forense, la jurídica y la humana. Insistió en que el libro no es un expediente judicial, sino la vida de la ofendida."
            />
            <blockquote className="pres-quote pres-quote-strong">
              <p>
                El centro de estas páginas no es quien causó el daño. El centro de estas páginas es
                Nadia Peraza Espinoza.
              </p>
              <cite>Lic. Joseph Rivera Cheves · Autor</cite>
            </blockquote>

            <RichText
              className="pres-p"
              text="Habló del cuidado con el que escribió cada capítulo: «sin convertir el dolor en espectáculo, sin exponer lo que pertenece a la intimidad de la familia», distinguiendo siempre lo que se probó de lo que se interpreta. Y recordó públicamente que **parte de las ganancias del libro se destinarán a la hija de Nadia**, hoy una niña de cuatro años."
            />
            <blockquote className="pres-quote">
              <p>
                La memoria de la víctima no se honra con morbo, se honra con verdad y con respeto.
              </p>
              <cite>Lic. Joseph Rivera Cheves</cite>
            </blockquote>

            <RichText
              className="pres-p"
              text="Cerró su intervención apelando al lugar donde se estaba celebrando el acto —la casa de la democracia costarricense— y repitiendo la dedicatoria del libro: **las mujeres no son solamente parte de la democracia, son uno de sus pilares fundamentales**. Terminó como empezó, con el nombre de la ofendida y con una pregunta."
            />
            <blockquote className="pres-quote pres-quote-strong">
              <p>¿Qué estamos haciendo para que no haya otra Nadia Peraza Espinoza?</p>
              <cite>Lic. Joseph Rivera Cheves</cite>
            </blockquote>
          </div>
        </section>

        {/* ══ PRIMER EJEMPLAR ══ */}
        <section className="pres-primer">
          <div className="rc-wrap pres-narrow">
            <div className="pres-eyebrow on-dark">El momento del acto</div>
            <h2 className="pres-h2 on-dark">
              El primer ejemplar, para la <em className="pres-em-dark">familia</em>
            </h2>
            <RichText
              className="pres-p on-dark"
              text="Antes de la fotografía oficial, el autor entregó el **primer ejemplar del libro a don Frank Espinoza, tío de Nadia Peraza Espinoza**, quien acompañó la actividad junto a otros familiares, amigos y vecinos de la ofendida."
            />
            <blockquote className="pres-quote on-dark">
              <p>
                Este libro no le devuelve a su sobrina, nada podría hacerlo, pero le prometo que su
                nombre no se va a apagar. Mientras alguien lo diga, mientras alguien lo lea, mientras
                alguien lo recuerde, Nadia sigue aquí.
              </p>
              <cite>Lic. Joseph Rivera Cheves, al entregar el primer ejemplar</cite>
            </blockquote>
          </div>
        </section>

        {/* ══ EJEMPLARES A DIPUTADOS ══ */}
        <section className="pres-sec">
          <div className="rc-wrap">
            <div className="pres-eyebrow">Ejemplares especiales</div>
            <h2 className="pres-h2">
              Un ejemplar para cada <em className="pres-em">diputada y diputado</em>
            </h2>
            <p className="pres-p" style={{ maxWidth: "62ch" }}>
              El autor anunció desde el inicio que tenía una sorpresa para las y los legisladores
              presentes: un <strong>ejemplar especial</strong>, en caja, entregado personalmente al
              cierre de la actividad.
            </p>
            <ul className="pres-dip">
              {EJEMPLARES.map((d, i) => (
                <li key={d}>
                  <span className="pres-dip-n">{String(i + 1).padStart(2, "0")}</span>
                  <span className="pres-dip-t">{d}</span>
                </li>
              ))}
            </ul>
            <p className="pres-note">
              También acompañó la actividad el diputado Gonzalo Ramírez, además de autoridades,
              representantes institucionales y medios de comunicación.
            </p>
          </div>
        </section>

        {/* ══ GALERÍA ══ */}
        <section className="pres-sec pres-sec-alt">
          <div className="rc-wrap">
            <div className="pres-eyebrow">Galería</div>
            <h2 className="pres-h2">Imágenes de la <em className="pres-em">actividad</em></h2>
            <div className="pres-galeria">
              {GALERIA.map((g, i) => (
                <Reveal key={g.src} delay={i * 60}>
                  <figure className="pres-gal-item">
                    <Image
                      src={g.src}
                      alt={g.alt}
                      width={1000}
                      height={1333}
                      loading="lazy"
                      sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw"
                      className="pres-gal-img"
                    />
                    <figcaption>{g.cap}</figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ══ CÓMO RESERVAR ══ */}
        <section className="pres-reserva" id="reservar">
          <div className="rc-wrap">
            <div className="pres-eyebrow">Adquiera el libro</div>
            <h2 className="pres-h2">
              Cómo reservar su <em className="pres-em">ejemplar</em>
            </h2>
            <p className="pres-p" style={{ maxWidth: "58ch" }}>
              Parte de las ganancias de <strong>«El Caníbal de la Refrigeradora»</strong> se
              destinarán a la hija de Nadia Peraza Espinoza.
            </p>

            <ol className="pres-pasos">
              {PASOS.map(p => (
                <Reveal key={p.n} delay={Number(p.n) * 40}>
                  <li className="pres-paso">
                    <span className="pres-paso-n">{p.n}</span>
                    <h3 className="pres-paso-t">{p.t}</h3>
                    <RichText text={p.d} className="pres-paso-d" />
                  </li>
                </Reveal>
              ))}
            </ol>

            <div className="pres-envios">
              <h3 className="pres-envios-t">Entregas y envíos</h3>
              <p className="pres-p">
                A partir del <strong>24 de septiembre</strong> se coordinan entregas mediante{" "}
                <strong>Uber Flash</strong> o se valora el envío por{" "}
                <strong>Correos de Costa Rica</strong>. El costo del traslado es adicional y depende
                de la modalidad y del destino.
              </p>
              <p className="pres-p">
                Para cotizar el envío, remita su <strong>dirección completa</strong> por WhatsApp al{" "}
                <strong>8998-0112</strong>. Dentro de la <strong>GAM</strong>, el envío ronda los{" "}
                <strong>₡4.000</strong> con mensajero o <strong>₡4.500</strong> aproximadamente por
                Correos de Costa Rica.
              </p>
              <div className="pres-btns">
                <a href={WA_RESERVA} target="_blank" rel="noopener" className="pres-btn primary">
                  Enviar comprobante por WhatsApp <span aria-hidden="true">→</span>
                </a>
                <a href={WA_ENVIO} target="_blank" rel="noopener" className="pres-btn ghost">
                  Cotizar envío
                </a>
              </div>
              <p className="pres-note">
                Precio del ejemplar: <strong>₡20.000</strong> · SINPE Móvil al{" "}
                <strong>8754-6091</strong> a nombre de Joseph Rivera.
              </p>
            </div>
          </div>
        </section>

        {/* ══ ENLACES ══ */}
        <section className="pres-sec">
          <div className="rc-wrap">
            <div className="pres-eyebrow">Seguir leyendo</div>
            <div className="pres-links">
              <Link href="/libro" className="pres-link-card">
                <span className="pres-link-k">El libro</span>
                <span className="pres-link-t">«El Caníbal de la Refrigeradora»</span>
                <span className="pres-link-go">Conocer la obra <span aria-hidden="true">→</span></span>
              </Link>
              <Link href="/casos/nadia-peraza" className="pres-link-card">
                <span className="pres-link-k">El caso</span>
                <span className="pres-link-t">Nadia Peraza Espinoza</span>
                <span className="pres-link-go">Leer el dossier <span aria-hidden="true">→</span></span>
              </Link>
              <Link href="/prensa" className="pres-link-card">
                <span className="pres-link-k">Cobertura</span>
                <span className="pres-link-t">Prensa y apariciones</span>
                <span className="pres-link-go">Ver la cobertura <span aria-hidden="true">→</span></span>
              </Link>
            </div>
          </div>
        </section>

        <FinalCTA
          eyebrow="Próximo paso"
          lead="Estamos para defender sus derechos con estrategia, rigor y compromiso humano. Hablemos de su caso."
        />
      </div>

      <style>{`
        .pres { background: ${CS_CREAM}; }
        .pres-hero { background: ${CS_CREAM}; padding: clamp(28px,4vw,52px) 0 clamp(44px,6vw,80px); }
        .pres-sec { padding: clamp(48px,6.5vw,92px) 0; border-top: 1px solid ${CS_BORDER}; }
        .pres-sec-alt { background: #FBFAF7; }
        .pres-narrow { max-width: 820px; }

        .pres-kicker {
          font-family: var(--font-mono, monospace); font-size: 11px; font-weight: 500;
          letter-spacing: .2em; text-transform: uppercase; color: ${R}; margin-bottom: 20px;
        }
        .pres-eyebrow {
          font-family: var(--font-mono, monospace); font-size: 11px; font-weight: 500;
          letter-spacing: .2em; text-transform: uppercase; color: ${R}; margin-bottom: 16px;
        }
        .pres-eyebrow.on-dark { color: ${CS_GOLD}; }

        .pres-h1 {
          font-family: var(--font-sans, system-ui); font-weight: 400;
          font-size: clamp(30px,4.2vw,58px); line-height: 1.08; letter-spacing: -0.022em;
          color: ${CS_BLACK}; margin-bottom: 24px; max-width: 20ch;
        }
        .pres-h2 {
          font-family: var(--font-sans, system-ui); font-weight: 400;
          font-size: clamp(25px,3vw,42px); line-height: 1.1; letter-spacing: -0.02em;
          color: ${CS_BLACK}; margin-bottom: clamp(20px,2.6vw,32px);
        }
        .pres-h2.on-dark { color: #fff; }
        .pres-em { font-family: var(--font-serif); font-style: italic; color: ${R}; }
        .pres-em-dark { font-family: var(--font-serif); font-style: italic; color: ${CS_GOLD}; }

        .pres-lede {
          font-family: var(--font-sans, system-ui); font-size: clamp(15px,1.25vw,18px);
          line-height: 1.72; color: ${CS_GRAY}; max-width: 62ch; margin-bottom: clamp(28px,3.4vw,42px);
        }
        .pres-lede strong { color: ${CS_BLACK}; font-weight: 600; }

        .pres-figure { margin: 0 0 clamp(28px,3.4vw,40px); }
        .pres-figure-img {
          width: 100%; height: auto; display: block;
          border: 1px solid ${CS_BORDER}; border-radius: 3px;
        }
        .pres-figcap {
          font-family: var(--font-sans, system-ui); font-size: 13px; line-height: 1.6;
          color: ${CS_GRAY}; margin-top: 14px; max-width: 70ch;
        }
        .pres-figcap strong { color: ${CS_BLACK}; font-weight: 600; }

        .pres-ficha {
          display: grid; grid-template-columns: repeat(4,1fr); gap: 1px;
          background: ${CS_BORDER}; border: 1px solid ${CS_BORDER}; margin: 0;
        }
        .pres-ficha-item { background: #fff; padding: clamp(16px,1.8vw,22px); }
        .pres-ficha-item dt {
          font-family: var(--font-mono, monospace); font-size: 10px; letter-spacing: .14em;
          text-transform: uppercase; color: ${R}; margin-bottom: 8px;
        }
        .pres-ficha-item dd {
          font-family: var(--font-sans, system-ui); font-size: 14px; font-weight: 600;
          line-height: 1.4; color: ${CS_BLACK}; margin: 0;
        }

        /* Video */
        .pres-video-sec { background: ${CS_BLACK}; padding: clamp(48px,6.5vw,92px) 0; }
        .pres-video-sec .pres-h2 { color: #fff; }
        .pres-video-sec .pres-eyebrow { color: ${CS_GOLD}; }
        .pres-video { max-width: 940px; border: 1px solid rgba(199,164,92,.3); border-radius: 4px; overflow: hidden; }
        .pres-video-note {
          font-family: var(--font-sans, system-ui); font-size: 13.5px; line-height: 1.65;
          color: rgba(245,237,224,.62); margin-top: 18px; max-width: 62ch;
        }

        /* Mesa principal */
        .pres-mesa { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(2,1fr); gap: 1px; background: ${CS_BORDER}; border: 1px solid ${CS_BORDER}; }
        .pres-mesa li { background: #fff; padding: clamp(18px,2vw,26px); display: flex; flex-direction: column; gap: 6px; }
        .pres-mesa-n { font-family: var(--font-sans, system-ui); font-size: 16px; font-weight: 600; color: ${CS_BLACK}; }
        .pres-mesa-r { font-family: var(--font-sans, system-ui); font-size: 13.5px; line-height: 1.55; color: ${CS_GRAY}; }

        /* Crónica */
        .pres-p {
          font-family: var(--font-sans, system-ui); font-size: 15.5px; line-height: 1.8;
          color: ${CS_GRAY}; margin-bottom: 22px; max-width: 68ch;
        }
        .pres-p strong { color: ${CS_BLACK} !important; font-weight: 600; }
        .pres-p.on-dark { color: rgba(245,237,224,.78); }
        .pres-p.on-dark strong { color: #fff !important; }

        .pres-quote { margin: 0 0 30px; padding-left: clamp(18px,2.2vw,28px); border-left: 2px solid ${R}; max-width: 60ch; }
        .pres-quote p {
          font-family: var(--font-serif); font-style: italic;
          font-size: clamp(17px,1.6vw,23px); line-height: 1.5; color: ${CS_BLACK};
        }
        .pres-quote cite {
          display: block; margin-top: 14px; font-style: normal;
          font-family: var(--font-mono, monospace); font-size: 10.5px; letter-spacing: .13em;
          text-transform: uppercase; color: ${CS_GRAY};
        }
        .pres-quote-strong { border-left-width: 3px; }
        .pres-quote.on-dark { border-left-color: ${CS_GOLD}; }
        .pres-quote.on-dark p { color: #fff; }
        .pres-quote.on-dark cite { color: rgba(245,237,224,.6); }

        /* Primer ejemplar */
        .pres-primer {
          background: radial-gradient(900px 500px at 75% 15%, rgba(126,1,2,.28), transparent 60%),
                      linear-gradient(170deg, #121212 0%, #0a0a0a 60%, #060606 100%);
          padding: clamp(52px,7vw,104px) 0;
        }

        /* Diputados */
        .pres-dip { list-style: none; margin: 0 0 20px; padding: 0; display: grid; grid-template-columns: repeat(3,1fr); gap: 12px; }
        .pres-dip li {
          display: flex; align-items: center; gap: 14px;
          background: #fff; border: 1px solid ${CS_BORDER}; border-radius: 3px;
          padding: 16px 20px;
        }
        .pres-dip-n { font-family: var(--font-mono, monospace); font-size: 11px; letter-spacing: .1em; color: ${R}; flex-shrink: 0; }
        .pres-dip-t { font-family: var(--font-sans, system-ui); font-size: 14.5px; font-weight: 600; color: ${CS_BLACK}; line-height: 1.35; }
        .pres-note {
          font-family: var(--font-sans, system-ui); font-size: 13.5px; line-height: 1.65;
          color: ${CS_GRAY}; max-width: 68ch; margin-top: 16px;
        }
        .pres-note strong { color: ${CS_BLACK}; font-weight: 600; }

        /* Galería */
        .pres-galeria { display: grid; grid-template-columns: repeat(4,1fr); gap: clamp(12px,1.4vw,18px); }
        .pres-gal-item { margin: 0; }
        .pres-gal-img {
          width: 100%; height: auto; display: block; border-radius: 3px;
          border: 1px solid ${CS_BORDER};
        }
        .pres-gal-item figcaption {
          font-family: var(--font-mono, monospace); font-size: 10px; letter-spacing: .1em;
          text-transform: uppercase; color: ${CS_GRAY}; margin-top: 10px; line-height: 1.5;
        }

        /* Reserva */
        .pres-reserva { background: #FBFAF7; padding: clamp(48px,6.5vw,92px) 0; border-top: 1px solid ${CS_BORDER}; }
        .pres-pasos { list-style: none; margin: clamp(24px,3vw,34px) 0 0; padding: 0; display: grid; grid-template-columns: repeat(4,1fr); gap: clamp(14px,1.6vw,20px); }
        .pres-pasos > * { display: flex; }
        .pres-paso {
          width: 100%; background: #fff; border: 1px solid ${CS_BORDER}; border-radius: 3px;
          padding: clamp(20px,2.2vw,28px); display: flex; flex-direction: column;
        }
        .pres-paso-n { font-family: var(--font-mono, monospace); font-size: 11px; letter-spacing: .14em; color: ${R}; margin-bottom: 14px; }
        .pres-paso-t { font-family: var(--font-sans, system-ui); font-size: 15px; font-weight: 600; color: ${CS_BLACK}; margin-bottom: 8px; }
        .pres-paso-d { font-family: var(--font-sans, system-ui); font-size: 13.5px; line-height: 1.65; color: ${CS_GRAY}; margin: 0; }
        .pres-paso-d strong { color: ${CS_BLACK} !important; font-weight: 600; }

        .pres-envios { margin-top: clamp(32px,4vw,48px); padding-top: clamp(26px,3vw,36px); border-top: 1px solid ${CS_BORDER}; }
        .pres-envios-t { font-family: var(--font-sans, system-ui); font-size: clamp(18px,1.8vw,24px); font-weight: 600; color: ${CS_BLACK}; margin-bottom: 16px; }
        .pres-btns { display: flex; gap: 14px; flex-wrap: wrap; margin: 24px 0 18px; }
        .pres-btn {
          display: inline-flex; align-items: center; gap: 9px; min-height: 48px; padding: 13px 24px;
          font-family: var(--font-sans, system-ui); font-size: 14px; font-weight: 600;
          border-radius: 3px; text-decoration: none; transition: background-color .25s ease, gap .25s ease, border-color .25s ease;
        }
        .pres-btn.primary { background: ${R}; color: #fff; }
        .pres-btn.primary:hover { background: #a20a0a; gap: 13px; }
        .pres-btn.ghost { background: transparent; color: ${CS_BLACK}; border: 1px solid rgba(20,20,20,.22); }
        .pres-btn.ghost:hover { border-color: ${R}; color: ${R}; }
        .pres-btn:focus-visible { outline: 2px solid ${R}; outline-offset: 3px; }

        /* Enlaces */
        .pres-links { display: grid; grid-template-columns: repeat(3,1fr); gap: clamp(14px,1.6vw,20px); }
        .pres-link-card {
          display: flex; flex-direction: column; gap: 10px;
          background: #fff; border: 1px solid ${CS_BORDER}; border-radius: 3px;
          padding: clamp(20px,2.2vw,28px); text-decoration: none;
          transition: transform .3s ease, border-color .3s ease;
        }
        .pres-link-card:hover { transform: translateY(-3px); border-color: ${R}; }
        .pres-link-k { font-family: var(--font-mono, monospace); font-size: 10.5px; letter-spacing: .13em; text-transform: uppercase; color: ${R}; }
        .pres-link-t { font-family: var(--font-serif); font-size: clamp(17px,1.5vw,21px); line-height: 1.25; color: ${CS_BLACK}; flex: 1; }
        .pres-link-go { font-family: var(--font-sans, system-ui); font-size: 13px; font-weight: 600; color: ${R}; }

        /* Responsive */
        @media (max-width: 1000px) {
          .pres-ficha { grid-template-columns: repeat(2,1fr); }
          .pres-galeria { grid-template-columns: repeat(2,1fr); }
          .pres-pasos  { grid-template-columns: repeat(2,1fr); }
          .pres-dip    { grid-template-columns: repeat(2,1fr); }
          .pres-links  { grid-template-columns: 1fr; }
        }
        @media (max-width: 700px) {
          .pres-mesa { grid-template-columns: 1fr; }
        }
        @media (max-width: 560px) {
          .pres-ficha { grid-template-columns: 1fr; }
          .pres-galeria { grid-template-columns: 1fr; }
          .pres-pasos  { grid-template-columns: 1fr; }
          .pres-dip    { grid-template-columns: 1fr; }
          .pres-btns .pres-btn { width: 100%; justify-content: center; }
        }
      `}</style>
    </>
  );
}
