"use client";
import Reveal from "@/components/Reveal";
import { WA, TEL, EMAIL } from "@/lib/data";

const R = "#7e0102";

const INFO = [
  { num: "01", label: "Dirección",           value: "Edificio 7, Oficentro Sabana, San José, Costa Rica", href: null },
  { num: "02", label: "WhatsApp / Teléfono", value: "8998-0112",                                            href: `tel:${TEL}` },
  { num: "03", label: "Correo electrónico",  value: EMAIL,                                                  href: `mailto:${EMAIL}` },
  { num: "04", label: "Disponibilidad",      value: "24/7 para emergencias legales",                        href: null },
] as const;

export default function ContactoClient() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const nombre = (form.elements.namedItem("nombre") as HTMLInputElement)?.value || "";
    const msg    = (form.elements.namedItem("msg") as HTMLTextAreaElement)?.value || "";
    const text   = encodeURIComponent(`Hola, soy ${nombre}. ${msg}`);
    window.open(`https://api.whatsapp.com/send?phone=50689980112&text=${text}`, "_blank");
  };

  const fieldStyle: React.CSSProperties = {
    width: "100%", padding: "14px 16px",
    border: "1px solid var(--hairline-strong)",
    background: "#fff",
    fontFamily: "var(--font-sans, system-ui)", fontSize: 15,
    color: "#0d0d0d",
    borderRadius: "var(--r-sm)",
    outline: "none",
    transition: "border-color .2s ease",
  };

  return (
    <div className="rc-page">

      {/* ── HERO ── */}
      <section style={{ background: "var(--paper)", padding: "clamp(60px,8vw,120px) 0" }}>
        <div className="rc-wrap">
          <Reveal>
            <div className="rc-eyebrow" style={{ marginBottom: 20 }}>Hablemos</div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="rc-h1">Contáctenos <em className="rc-em">hoy</em></h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="rc-lede" style={{ marginTop: 32, maxWidth: "52ch" }}>
              Permita que lo asesoremos en su situación legal. Primera consulta disponible
              por WhatsApp, correo electrónico o formulario.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── INFO + FORMULARIO ── */}
      <section style={{ background: "#fff", padding: "var(--pad-y) 0" }}>
        <div className="rc-wrap">
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1.2fr",
            gap: "clamp(40px,6vw,96px)", alignItems: "start",
          }} className="contact-grid">

            {/* Info tiles */}
            <div>
              <div className="rc-eyebrow" style={{ marginBottom: 16 }}>01 · Información</div>
              <Reveal>
                <h2 className="rc-h2">Hablemos de <em className="rc-em">su caso</em></h2>
              </Reveal>
              <Reveal delay={120}>
                <p className="rc-lede" style={{ marginTop: 24, marginBottom: 40 }}>
                  Disponibles para atender su consulta con discreción y profesionalismo.
                  Cada caso merece atención especializada y personalizada.
                </p>
              </Reveal>

              {INFO.map((c, i) => (
                <Reveal key={c.label} delay={i * 60}>
                  <div style={{
                    display: "grid", gridTemplateColumns: "40px 1fr", gap: 16,
                    padding: "20px 0", borderTop: "1px solid var(--hairline)",
                  }}>
                    <span className="rc-meta" style={{ color: R }}>{c.num}</span>
                    <div>
                      <div className="rc-meta" style={{ color: "var(--fg-5)", marginBottom: 6 }}>{c.label}</div>
                      {c.href
                        ? <a href={c.href} style={{ fontSize: 17, fontWeight: 500, color: "#0d0d0d", borderBottom: "1px solid var(--hairline-strong)" }}>{c.value}</a>
                        : <div style={{ fontSize: 15, color: "var(--fg-2)", lineHeight: 1.5 }}>{c.value}</div>
                      }
                    </div>
                  </div>
                </Reveal>
              ))}
              <div style={{ borderTop: "1px solid var(--hairline)" }}/>

              <Reveal delay={300}>
                <div style={{ marginTop: 32 }}>
                  <a href={WA} target="_blank" rel="noopener" className="rc-btn brand full">
                    Consulta directa por WhatsApp →
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Formulario */}
            <Reveal delay={200}>
              <form onSubmit={handleSubmit} style={{
                background: "var(--paper)", padding: "clamp(28px,4vw,48px)",
                border: "1px solid var(--hairline)",
              }}>
                <div className="rc-eyebrow" style={{ marginBottom: 12 }}>02 · Enviar consulta</div>
                <h3 className="rc-h3" style={{ marginBottom: 8 }}>Formulario</h3>
                <p style={{ fontSize: 14, color: "var(--fg-4)", marginBottom: 32 }}>
                  Complete los campos y le responderemos a la brevedad.
                </p>

                <div style={{ display: "grid", gap: 22 }}>
                  <div>
                    <label htmlFor="nombre" style={{ display: "block", marginBottom: 8, fontFamily: "var(--font-mono, monospace)", fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--fg-5)" }}>
                      Nombre completo
                    </label>
                    <input id="nombre" name="nombre" type="text" placeholder="José González" style={fieldStyle}
                      onFocus={(e) => { e.currentTarget.style.borderColor = R; }}
                      onBlur={(e)  => { e.currentTarget.style.borderColor = "var(--hairline-strong)"; }}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" style={{ display: "block", marginBottom: 8, fontFamily: "var(--font-mono, monospace)", fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--fg-5)" }}>
                      Correo electrónico
                    </label>
                    <input id="email" name="email" type="email" placeholder="correo@ejemplo.com" style={fieldStyle}
                      onFocus={(e) => { e.currentTarget.style.borderColor = R; }}
                      onBlur={(e)  => { e.currentTarget.style.borderColor = "var(--hairline-strong)"; }}
                    />
                  </div>

                  <div>
                    <label htmlFor="tel" style={{ display: "block", marginBottom: 8, fontFamily: "var(--font-mono, monospace)", fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--fg-5)" }}>
                      Celular / WhatsApp
                    </label>
                    <input id="tel" name="tel" type="tel" placeholder="+506 8888-0000" style={fieldStyle}
                      onFocus={(e) => { e.currentTarget.style.borderColor = R; }}
                      onBlur={(e)  => { e.currentTarget.style.borderColor = "var(--hairline-strong)"; }}
                    />
                  </div>

                  <div>
                    <label htmlFor="area" style={{ display: "block", marginBottom: 8, fontFamily: "var(--font-mono, monospace)", fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--fg-5)" }}>
                      Área legal
                    </label>
                    <select id="area" name="area" style={fieldStyle}
                      onFocus={(e) => { e.currentTarget.style.borderColor = R; }}
                      onBlur={(e)  => { e.currentTarget.style.borderColor = "var(--hairline-strong)"; }}
                    >
                      <option>Seleccione un área…</option>
                      <option>Derecho Penal</option>
                      <option>Lavado de Dinero</option>
                      <option>Derecho Corporativo</option>
                      <option>Derecho Laboral</option>
                      <option>Derecho Notarial</option>
                      <option>Investigaciones Criminales</option>
                      <option>Otro</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="msg" style={{ display: "block", marginBottom: 8, fontFamily: "var(--font-mono, monospace)", fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--fg-5)" }}>
                      Mensaje
                    </label>
                    <textarea id="msg" name="msg" rows={5} placeholder="Describa brevemente su situación legal…"
                      style={{ ...fieldStyle, resize: "vertical" }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = R; }}
                      onBlur={(e)  => { e.currentTarget.style.borderColor = "var(--hairline-strong)"; }}
                    />
                  </div>

                  <button type="submit" className="rc-btn brand full">
                    Enviar por WhatsApp →
                  </button>
                  <p style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 11, letterSpacing: ".06em", color: "var(--fg-5)", textAlign: "center" }}>
                    Al enviar será redirigido a WhatsApp con su mensaje listo.
                  </p>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* ── UBICACIÓN ── */}
      <section style={{ background: "#0d0d0d", padding: "clamp(48px,6vw,88px) 0" }}>
        <div className="rc-wrap">
          <div className="rc-eyebrow on-r" style={{ marginBottom: 16 }}>03 · Ubicación</div>
          <Reveal>
            <h2 className="rc-h2" style={{ color: "#fff" }}>
              Oficentro <em className="rc-em" style={{ color: R, opacity: 1 }}>Sabana</em>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div style={{
              marginTop: 40, aspectRatio: "16/7",
              background: "#1a1a1a",
              display: "flex", alignItems: "center", justifyContent: "center",
              border: "1px solid rgba(255,255,255,.08)",
              position: "relative", overflow: "hidden",
            }}>
              <div style={{ textAlign: "center", color: "rgba(255,255,255,.7)", position: "relative", zIndex: 1 }}>
                <div style={{ fontSize: 40, marginBottom: 16 }}>◉</div>
                <div style={{ fontSize: 18, fontWeight: 500, color: "#fff", marginBottom: 8 }}>
                  Edificio 7, Oficentro Sabana
                </div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,.5)" }}>San José, Costa Rica</div>
                <a href="https://maps.google.com/?q=Oficentro+La+Sabana+San+Jose+Costa+Rica" target="_blank" rel="noopener"
                  style={{ display: "inline-block", marginTop: 20, fontSize: 13, fontWeight: 600, color: "#fff", borderBottom: "1px solid rgba(255,255,255,.4)", paddingBottom: 2 }}>
                  Ver en Google Maps →
                </a>
              </div>
              <div style={{
                position: "absolute", inset: 0,
                backgroundImage: "linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)",
                backgroundSize: "48px 48px", pointerEvents: "none",
              }}/>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
