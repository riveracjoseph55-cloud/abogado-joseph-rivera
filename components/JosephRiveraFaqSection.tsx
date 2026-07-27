"use client";
import { useId, useState } from "react";
import Image from "next/image";
import SchemaOrg from "@/components/SchemaOrg";
import { WA } from "@/lib/data";
import { schemaFAQPage } from "@/lib/seo";

const CS_CREAM  = "#F4F1EB";
const CS_BLACK  = "#0A0A0A";
const CS_WINE   = "#7A0808";
const CS_WINE_DK = "#5A0001";
const CS_GOLD   = "#C7A45C";
const CS_GRAY   = "#6C6C6C";
const CS_BORDER = "rgba(20,20,20,0.12)";

// Única fuente de verdad: alimenta el acordeón visible Y el JSON-LD FAQPage.
// No inventar preguntas, no resumir respuestas — texto verbatim del contenido real.
const faqItems = [
  {
    question: "¿Quién es el abogado Joseph Rivera Cheves?",
    answer: "El Lic. Joseph Alfonso Rivera Cheves es un abogado penalista costarricense con más de 10 años de trayectoria. Director del bufete Rivera Cheves & Asociados, ubicado en el Oficentro Sabana, San José. Máster en Compliance Penal, Auditor Líder ISO 37001 y docente en 6 universidades costarricenses. Ha representado a familias en los casos de femicidio más emblemáticos del país.",
  },
  {
    question: "¿En qué especialidades se enfoca el bufete de Joseph Rivera en Costa Rica?",
    answer: "El bufete Rivera Cheves se especializa en derecho penal, lavado de dinero y crimen organizado, derecho corporativo y compliance, derecho laboral, derecho notarial, investigaciones criminales y asesoría estratégica internacional para empresas y particulares con vínculos en Centroamérica.",
  },
  {
    question: "¿Qué es el caso Nadia Peraza?",
    answer: "El caso Nadia Peraza es uno de los femicidios más conmocionantes de Costa Rica: Nadia Peraza Espinoza, una joven madre de 21 años, desapareció en San Pablo de Heredia en 2024 y fue hallada desmembrada dentro de una refrigeradora. El Lic. Joseph Rivera Cheves representó a la familia como querellante y obtuvo una condena de 79 años, readecuada al máximo legal vigente en Costa Rica: 50 años de cárcel efectiva.",
  },
  {
    question: "¿Cómo contactar al abogado penalista Joseph Rivera?",
    answer: "Puede contactar al Lic. Joseph Rivera Cheves por WhatsApp al +506 8998-0112 (disponible 24/7), por correo a jriveracheves@gmail.com, o visitando las oficinas en el Edificio 7, Oficentro La Sabana, San José, Costa Rica. El bufete atiende casos en todo el territorio nacional.",
  },
  {
    question: "¿Cuánto cuesta una consulta con un abogado penalista en Costa Rica?",
    answer: "Los honorarios de un abogado penalista en Costa Rica varían según la complejidad del caso, el tipo de delito y la etapa procesal. El bufete Rivera Cheves & Asociados ofrece una primera consulta personalizada para evaluar el caso y proporcionar una estimación transparente. Contáctenos para coordinar una cita sin compromiso.",
  },
];

function ScaleIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
      <path d="M12 3v18M5 8h14M5 8 2 15a3 3 0 0 0 6 0Z M19 8l-3 7a3 3 0 0 0 6 0Z" stroke={CS_WINE} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function PlusMinus({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
      <path d="M5 12h14" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 5v14" stroke="#fff" strokeWidth="2" strokeLinecap="round"
        style={{ transformOrigin: "center", transform: open ? "scaleY(0)" : "scaleY(1)", transition: "transform 220ms ease" }} />
    </svg>
  );
}

export default function JosephRiveraFaqSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const baseId = useId();
  const headingId = `${baseId}-jrfaq-heading`;

  return (
    <section className="jrfaq" aria-labelledby={headingId}>
      <SchemaOrg data={schemaFAQPage(faqItems.map(i => ({ q: i.question, a: i.answer })))} />
      <div className="rc-wrap">
        <div className="jrfaq-grid">
          <div className="jrfaq-left">
            <img
              src="/images/casos/casos-arch-light.webp"
              alt=""
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              className="jrfaq-arch"
            />
            <div className="jrfaq-content">
              <div className="jrfaq-eyebrow">
                <span className="jrfaq-eyebrow-line" aria-hidden="true" />
                RIVERA
              </div>
              <h2 id={headingId} className="jrfaq-title">
                ¿Quién es el <em className="jrfaq-em">abogado</em>{" "}
                <em className="jrfaq-em">Joseph Rivera</em> Cheves?
              </h2>
              <p className="jrfaq-lede">
                El Lic. Joseph Alfonso Rivera Cheves es un abogado penalista costarricense con más de 10 años de trayectoria. Director del bufete Rivera Cheves &amp; Asociados, ubicado en el Oficentro Sabana, San José. Máster en Compliance Penal, Auditor Líder ISO 37001 y docente en 6 universidades costarricenses. Ha representado a familias en los casos de femicidio más emblemáticos del país.
              </p>

              <div className="jrfaq-logo-wrap">
                <Image
                  src="/images/logo2.png"
                  alt="Rivera Cheves & Asociados — Derecho Penal"
                  width={200}
                  height={200}
                  className="jrfaq-logo"
                />
              </div>

              <div className="jrfaq-cta">
                <div className="jrfaq-cta-icon" aria-hidden="true"><ScaleIcon /></div>
                <div className="jrfaq-cta-body">
                  <div className="jrfaq-cta-title">¿Necesita orientación legal?</div>
                  <p className="jrfaq-cta-text">Estamos disponibles para asesorarle con confidencialidad, experiencia y compromiso.</p>
                </div>
                <a href={WA} target="_blank" rel="noopener noreferrer" className="jrfaq-cta-btn">
                  Contactar por WhatsApp <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>

          <div className="jrfaq-right">
            {faqItems.map((item, i) => {
              const isOpen = openIndex === i;
              const panelId = `${baseId}-panel-${i}`;
              const buttonId = `${baseId}-button-${i}`;
              return (
                <div key={i} className={`jrfaq-item${isOpen ? " is-open" : ""}`}>
                  <h3 className="jrfaq-item-head">
                    <span className="jrfaq-num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                    <button
                      type="button"
                      id={buttonId}
                      className="jrfaq-q"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    >
                      <span className="jrfaq-q-text">{item.question}</span>
                      <span className="jrfaq-toggle" aria-hidden="true">
                        <PlusMinus open={isOpen} />
                      </span>
                      <span className="rc-sr-only">{isOpen ? "Cerrar respuesta" : "Abrir respuesta"}</span>
                    </button>
                  </h3>
                  <div className="jrfaq-panel-wrap">
                    <div className="jrfaq-panel-inner">
                      <div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        className="jrfaq-a"
                      >
                        {item.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .rc-sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0; }

        .jrfaq { background: ${CS_CREAM}; padding: clamp(56px,8vw,120px) 0; }
        .jrfaq-grid { display: grid; grid-template-columns: 42% 58%; gap: clamp(40px,5vw,80px); align-items: start; }

        .jrfaq-left { position: relative; }
        .jrfaq-arch {
          position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center;
          opacity: .07; pointer-events: none; z-index: 0;
          -webkit-mask-image: linear-gradient(90deg, rgba(0,0,0,.8), transparent 75%);
          mask-image: linear-gradient(90deg, rgba(0,0,0,.8), transparent 75%);
        }
        .jrfaq-content { position: relative; z-index: 1; }

        .jrfaq-eyebrow { display: flex; align-items: center; gap: 12px; font-family: var(--font-mono, monospace); font-size: 12px; font-weight: 600; letter-spacing: .22em; text-transform: uppercase; color: ${CS_WINE}; margin-bottom: 18px; }
        .jrfaq-eyebrow-line { width: 32px; height: 2px; background: ${CS_GOLD}; }

        .jrfaq-title { font-family: var(--font-serif); font-weight: 400; font-size: clamp(28px,3.4vw,44px); line-height: 1.16; letter-spacing: -0.01em; color: ${CS_BLACK}; margin-bottom: 22px; }
        .jrfaq-em { font-family: var(--font-serif); font-style: italic; color: ${CS_WINE}; }

        .jrfaq-lede { font-family: var(--font-sans, system-ui); font-size: clamp(15px,1.15vw,16.5px); line-height: 1.7; color: ${CS_GRAY}; max-width: 46ch; margin-bottom: clamp(28px,3vw,40px); }

        .jrfaq-logo-wrap { margin-bottom: clamp(28px,3vw,40px); }
        .jrfaq-logo { width: clamp(96px,10vw,128px); height: auto; object-fit: contain; border-radius: 18px; display: block; }

        .jrfaq-cta {
          background: #fff; border: 1px solid ${CS_BORDER}; border-left: 3px solid ${CS_WINE};
          border-radius: 6px; padding: clamp(20px,2.4vw,28px); display: flex; flex-direction: column; gap: 14px;
        }
        .jrfaq-cta-icon { width: 40px; height: 40px; border-radius: 50%; border: 1px solid ${CS_BORDER}; display: grid; place-items: center; flex-shrink: 0; }
        .jrfaq-cta-title { font-family: var(--font-serif); font-weight: 400; font-size: 17px; color: ${CS_BLACK}; margin-bottom: 6px; }
        .jrfaq-cta-text { font-family: var(--font-sans, system-ui); font-size: 13.5px; line-height: 1.55; color: ${CS_GRAY}; }
        .jrfaq-cta-btn {
          display: inline-flex; align-items: center; justify-content: center; gap: 8px;
          min-height: 44px; padding: 0 20px; background: ${CS_WINE}; color: #fff; text-decoration: none;
          border-radius: 4px; font-family: var(--font-sans, system-ui); font-size: 14px; font-weight: 600;
          transition: background .2s ease; align-self: flex-start;
        }
        .jrfaq-cta-btn:hover { background: ${CS_WINE_DK}; }
        .jrfaq-cta-btn:focus-visible { outline: 2px solid ${CS_GOLD}; outline-offset: 2px; }

        .jrfaq-right { display: flex; flex-direction: column; }
        .jrfaq-item {
          background: #FBFAF7; border: 1px solid ${CS_BORDER}; border-left: 3px solid transparent;
          border-radius: 6px; padding: clamp(18px,2vw,24px) clamp(20px,2.2vw,28px);
          margin-bottom: 14px; box-shadow: 0 2px 10px rgba(20,20,20,.03);
          transition: border-color .2s ease;
        }
        .jrfaq-item.is-open { border-left-color: ${CS_WINE}; }

        .jrfaq-item-head { margin: 0; }
        .jrfaq-q {
          width: 100%; display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: clamp(16px,2vw,24px);
          background: none; border: none; padding: 0; margin: 0; cursor: pointer; text-align: left; font: inherit;
        }
        .jrfaq-q:focus-visible { outline: 2px solid ${CS_GOLD}; outline-offset: 4px; border-radius: 4px; }
        .jrfaq-num { font-family: var(--font-serif); font-weight: 400; font-size: clamp(22px,2.4vw,30px); color: ${CS_WINE}; line-height: 1; }
        .jrfaq-q-text { font-family: var(--font-serif); font-weight: 400; font-size: clamp(16px,1.5vw,19px); line-height: 1.4; color: ${CS_BLACK}; }
        .jrfaq-toggle {
          width: 42px; height: 42px; min-width: 42px; border-radius: 50%; background: ${CS_WINE};
          display: grid; place-items: center; transition: background .2s ease;
        }
        .jrfaq-item.is-open .jrfaq-toggle { background: ${CS_WINE_DK}; }

        .jrfaq-panel-wrap { display: grid; grid-template-rows: 0fr; opacity: 0; transition: grid-template-rows 260ms ease, opacity 220ms ease; }
        .jrfaq-item.is-open .jrfaq-panel-wrap { grid-template-rows: 1fr; opacity: 1; }
        .jrfaq-panel-inner { overflow: hidden; min-height: 0; }
        .jrfaq-a {
          font-family: var(--font-sans, system-ui); font-size: clamp(14.5px,1.05vw,16px); line-height: 1.72; color: ${CS_GRAY};
          max-width: 62ch; padding-top: clamp(14px,1.6vw,20px); margin-left: calc(clamp(22px,2.4vw,30px) + clamp(16px,2vw,24px));
        }

        @media (max-width: 980px) {
          .jrfaq-grid { grid-template-columns: 1fr; gap: 48px; }
          .jrfaq-arch { opacity: .05; }
        }
        @media (max-width: 640px) {
          .jrfaq { padding: 48px 0; }
          .jrfaq-title { font-size: clamp(26px,7vw,32px); }
          .jrfaq-a { margin-left: 0; }
          .jrfaq-q { grid-template-columns: auto 1fr auto; gap: 12px; }
          .jrfaq-num { font-size: 20px; }
          .jrfaq-toggle { width: 44px; height: 44px; min-width: 44px; }
          .jrfaq-cta-btn { width: 100%; }
        }

        @media (prefers-reduced-motion: reduce) {
          .jrfaq-panel-wrap, .jrfaq-toggle, .jrfaq-cta-btn, .jrfaq-item { transition: none; }
        }
      `}</style>
    </section>
  );
}
