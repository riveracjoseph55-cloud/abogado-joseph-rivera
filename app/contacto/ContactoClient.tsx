"use client";
import { useState, useRef, FormEvent } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { WA, TEL, EMAIL, RC_AREAS } from "@/lib/data";

// ── Paleta editorial (misma que casos/especialidades/atestados) ──
const CS_CREAM  = "#F4F1EB";
const CS_WHITE  = "#FBFAF7";
const CS_BLACK  = "#0A0A0A";
const CS_WINE   = "#7A0808";
const CS_RED    = "#A20A0A";
const CS_GOLD   = "#C7A45C";
const CS_GRAY   = "#6C6C6C";
const CS_BORDER = "rgba(20,20,20,0.12)";

const MAPS_URL = "https://maps.google.com/?q=Oficentro+La+Sabana+San+Jose+Costa+Rica";
const MAPS_EMBED = "https://www.google.com/maps?q=Oficentro+La+Sabana+San+Jose+Costa+Rica&output=embed";

function PinIcon() {
  return <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true"><path d="M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11Z" stroke={CS_GOLD} strokeWidth="1.5"/><circle cx="12" cy="10" r="2.6" stroke={CS_GOLD} strokeWidth="1.5"/></svg>;
}
function WhatsAppIcon({ c = "#fff" }: { c?: string }) {
  return <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true"><path d="M4 20l1.3-4.4A8 8 0 1 1 8.5 19L4 20Z" stroke={c} strokeWidth="1.5" strokeLinejoin="round"/><path d="M9 9.3c0 3 2.7 5.7 5.7 5.7.5 0 .9-.4.9-.9v-1l-2.1-.8-.9 1a5 5 0 0 1-2.9-2.9l1-.9-.8-2.1h-1c-.5 0-.9.4-.9.9Z" fill={c}/></svg>;
}
function MailIcon() {
  return <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" stroke={CS_GOLD} strokeWidth="1.5"/><path d="m4 7 8 6 8-6" stroke={CS_GOLD} strokeWidth="1.5"/></svg>;
}
function ClockIcon() {
  return <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9" stroke={CS_GOLD} strokeWidth="1.5"/><path d="M12 7v5l3.5 2" stroke={CS_GOLD} strokeWidth="1.5" strokeLinecap="round"/></svg>;
}
function ScaleIcon({ c = CS_GOLD }: { c?: string }) {
  return <svg viewBox="0 0 24 24" width="17" height="17" fill="none" aria-hidden="true"><path d="M12 3v16M5 21h14M6 8h12M6 8 3.5 13.5a3.2 3.2 0 0 0 6.5 0L7.5 8M17.5 8 15 13.5a3.2 3.2 0 0 0 6.5 0L18.5 8" stroke={c} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}
function ShieldIcon() {
  return <svg viewBox="0 0 24 24" width="15" height="15" fill="none" aria-hidden="true"><path d="M12 3 5 6v5c0 4.4 3 7.6 7 9 4-1.4 7-4.6 7-9V6l-7-3Z" stroke={CS_GOLD} strokeWidth="1.4" strokeLinejoin="round"/></svg>;
}
function CompassIcon() {
  return <svg viewBox="0 0 24 24" width="26" height="26" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9" stroke={CS_GOLD} strokeWidth="1.2"/><path d="M15 9l-2 6-6 2 2-6 6-2Z" stroke={CS_GOLD} strokeWidth="1.1" strokeLinejoin="round"/></svg>;
}

const INFO = [
  { num: "01", label: "Dirección",          value: "Edificio 7, Oficentro Sabana, San José, Costa Rica", href: MAPS_URL, icon: <PinIcon /> },
  { num: "02", label: "WhatsApp / Teléfono", value: "8998-0112",  href: `tel:${TEL}`,    icon: <WhatsAppIcon c={CS_GOLD} /> },
  { num: "03", label: "Correo electrónico",  value: EMAIL,        href: `mailto:${EMAIL}`, icon: <MailIcon /> },
  { num: "04", label: "Disponibilidad",      value: "24/7 para emergencias legales", href: null, icon: <ClockIcon /> },
] as const;

type Errs = Partial<Record<"nombre" | "email" | "tel" | "area" | "msg" | "contacto", string>>;

export default function ContactoClient() {
  const [errors, setErrors] = useState<Errs>({});
  const [mapOpen, setMapOpen] = useState(false);
  const nombreRef = useRef<HTMLInputElement>(null);
  const emailRef  = useRef<HTMLInputElement>(null);
  const telRef    = useRef<HTMLInputElement>(null);
  const areaRef   = useRef<HTMLSelectElement>(null);
  const msgRef    = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nombre = nombreRef.current?.value.trim() || "";
    const email  = emailRef.current?.value.trim() || "";
    const tel    = telRef.current?.value.trim() || "";
    const area   = areaRef.current?.value || "";
    const msg    = msgRef.current?.value.trim() || "";

    const next: Errs = {};
    if (!nombre) next.nombre = "Ingrese su nombre completo.";
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Ingrese un correo válido.";
    if (!email && !tel) next.contacto = "Indique al menos un correo o un teléfono de contacto.";
    if (!area) next.area = "Seleccione un área legal.";
    if (!msg) next.msg = "Describa brevemente su situación legal.";

    setErrors(next);
    if (Object.keys(next).length > 0) {
      const order: (keyof Errs)[] = ["nombre", "contacto", "area", "msg"];
      const firstKey = order.find(k => next[k]);
      const refMap = { nombre: nombreRef, contacto: telRef, area: areaRef, msg: msgRef } as const;
      if (firstKey) refMap[firstKey as keyof typeof refMap]?.current?.focus();
      return;
    }

    const lines = [
      "Hola, deseo solicitar una consulta legal.",
      "",
      `Nombre: ${nombre}`,
      `Correo: ${email || "—"}`,
      `Teléfono: ${tel || "—"}`,
      `Área legal: ${area}`,
      `Mensaje: ${msg}`,
      "",
      "Origen: Página de contacto de abogadojosephrivera.com",
    ].join("\n");
    window.open(`${WA.split("?")[0]}?phone=50689980112&text=${encodeURIComponent(lines)}`, "_blank");
  };

  return (
    <div className="rc-page contacto">

      {/* ── HERO ── */}
      <section className="ct-hero">
        <img src="/images/casos/casos-arch-light.webp" alt="" aria-hidden="true" className="ct-hero-arch-l" />
        <img src="/images/casos/casos-arch-light.webp" alt="" aria-hidden="true" className="ct-hero-arch-r" />
        <div className="rc-wrap" style={{ position: "relative", zIndex: 1 }}>
          <Reveal>
            <h1 className="ct-h1">Hablemos<br />Contáctenos <em className="ct-h1-em">hoy</em></h1>
          </Reveal>
          <span className="ct-rule" aria-hidden="true" />
          <Reveal delay={100}>
            <p className="ct-lede">
              Permita que lo asesoremos en su situación legal. Primera consulta disponible
              por WhatsApp, correo electrónico o formulario.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── INFO + FORMULARIO ── */}
      <section className="ct-main">
        <img src="/images/casos/casos-arch-light.webp" alt="" aria-hidden="true" className="ct-main-arch" />
        <div className="rc-wrap" style={{ position: "relative", zIndex: 1 }}>
          <div className="ct-grid">

            {/* Información */}
            <div>
              <div className="ct-eyebrow">01 · Información</div>
              <Reveal><h2 className="ct-h2">Hablemos de <em className="ct-em">su caso</em></h2></Reveal>
              <Reveal delay={100}>
                <p className="ct-info-lede">
                  Disponibles para atender su consulta con discreción y profesionalismo.
                  Cada caso merece atención especializada y personalizada.
                </p>
              </Reveal>

              <div className="ct-info-list">
                {INFO.map((c, i) => (
                  <Reveal key={c.label} delay={i * 50}>
                    <div className="ct-info-row">
                      <span className="ct-info-num">{c.num}</span>
                      <span className="ct-info-icon" aria-hidden="true">{c.icon}</span>
                      <div>
                        <div className="ct-info-label">{c.label}</div>
                        {c.href
                          ? <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener" className="ct-info-val is-link">{c.value}</a>
                          : <div className="ct-info-val">{c.value}</div>}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={260}>
                <a href={WA} target="_blank" rel="noopener" className="ct-wa-btn">
                  <WhatsAppIcon /> Consulta directa por WhatsApp <span aria-hidden="true">→</span>
                </a>
              </Reveal>
            </div>

            {/* Formulario */}
            <Reveal delay={160}>
              <form onSubmit={handleSubmit} noValidate className="ct-form" aria-labelledby="ct-form-title">
                <div className="ct-form-head">
                  <span className="ct-form-head-eyebrow"><ScaleIcon /> 02 · Enviar consulta</span>
                </div>
                <div className="ct-form-body">
                  <h3 id="ct-form-title" className="ct-form-title">Formulario</h3>
                  <p className="ct-form-sub">Complete los campos y le responderemos a la brevedad.</p>

                  <div className="ct-field">
                    <label htmlFor="nombre">Nombre completo <span aria-hidden="true">*</span></label>
                    <input ref={nombreRef} id="nombre" name="nombre" type="text" autoComplete="name" placeholder="José González"
                      aria-required="true" aria-invalid={!!errors.nombre} aria-describedby={errors.nombre ? "err-nombre" : undefined}
                      className={errors.nombre ? "has-error" : ""} />
                    {errors.nombre && <p id="err-nombre" className="ct-err">{errors.nombre}</p>}
                  </div>

                  <div className="ct-field">
                    <label htmlFor="email">Correo electrónico</label>
                    <input ref={emailRef} id="email" name="email" type="email" autoComplete="email" placeholder="correo@ejemplo.com"
                      aria-invalid={!!errors.email} aria-describedby={errors.email ? "err-email" : undefined}
                      className={errors.email ? "has-error" : ""} />
                    {errors.email && <p id="err-email" className="ct-err">{errors.email}</p>}
                  </div>

                  <div className="ct-field">
                    <label htmlFor="tel">Celular / WhatsApp</label>
                    <input ref={telRef} id="tel" name="tel" type="tel" autoComplete="tel" placeholder="+506 8888-0000"
                      aria-invalid={!!errors.contacto} aria-describedby={errors.contacto ? "err-contacto" : undefined}
                      className={errors.contacto ? "has-error" : ""} />
                    {errors.contacto && <p id="err-contacto" className="ct-err">{errors.contacto}</p>}
                  </div>

                  <div className="ct-field">
                    <label htmlFor="area">Área legal <span aria-hidden="true">*</span></label>
                    <select ref={areaRef} id="area" name="area" defaultValue=""
                      aria-required="true" aria-invalid={!!errors.area} aria-describedby={errors.area ? "err-area" : undefined}
                      className={errors.area ? "has-error" : ""}>
                      <option value="" disabled>Seleccione un área…</option>
                      {RC_AREAS.map(a => <option key={a.slug} value={a.t}>{a.t}</option>)}
                      <option value="Otro / No estoy seguro">Otro / No estoy seguro</option>
                    </select>
                    {errors.area && <p id="err-area" className="ct-err">{errors.area}</p>}
                  </div>

                  <div className="ct-field">
                    <label htmlFor="msg">Mensaje <span aria-hidden="true">*</span></label>
                    <textarea ref={msgRef} id="msg" name="msg" rows={5} placeholder="Describa brevemente su situación legal…"
                      aria-required="true" aria-invalid={!!errors.msg} aria-describedby={errors.msg ? "err-msg" : undefined}
                      className={errors.msg ? "has-error" : ""} />
                    {errors.msg && <p id="err-msg" className="ct-err">{errors.msg}</p>}
                  </div>

                  <button type="submit" className="ct-submit"><WhatsAppIcon /> Enviar por WhatsApp <span aria-hidden="true">→</span></button>

                  <p className="ct-note"><span aria-hidden="true">↩</span> Al enviar será redirigido a WhatsApp con su mensaje listo.</p>
                  <p className="ct-privacy">
                    <ShieldIcon /> Sus datos se utilizarán únicamente para atender su consulta.{" "}
                    <Link href="/privacidad">Política de privacidad</Link>.
                  </p>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── UBICACIÓN ── */}
      <section className="ct-loc">
        <img src="/images/casos/casos-arch-dark.webp" alt="" aria-hidden="true" className="ct-loc-arch" />
        <span className="ct-loc-scrim" aria-hidden="true" />
        <div className="rc-wrap" style={{ position: "relative", zIndex: 1 }}>
          <div className="ct-eyebrow" style={{ color: CS_GOLD }}>03 · Ubicación</div>
          <Reveal><h2 className="ct-h2" style={{ color: CS_WHITE }}>Oficentro <em className="ct-em">Sabana</em></h2></Reveal>

          <div className="ct-loc-grid">
            <Reveal delay={100}>
              <div className="ct-loc-info">
                <div className="ct-loc-addr">
                  <PinIcon />
                  <div>Edificio 7, Oficentro Sabana<br />San José, Costa Rica</div>
                </div>
                <a href={MAPS_URL} target="_blank" rel="noopener" className="ct-loc-link">Ver en Google Maps <span aria-hidden="true">→</span></a>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="ct-map">
                {mapOpen ? (
                  <iframe className="ct-map-iframe" src={MAPS_EMBED} title="Mapa de Oficentro Sabana, San José, Costa Rica" loading="lazy" />
                ) : (
                  <button type="button" className="ct-map-preview" onClick={() => setMapOpen(true)} aria-label="Cargar mapa interactivo de Oficentro Sabana">
                    <svg className="ct-map-svg" viewBox="0 0 600 340" aria-hidden="true">
                      <line x1="0" y1="220" x2="600" y2="140" stroke={CS_GOLD} strokeOpacity=".35" strokeWidth="2"/>
                      <line x1="120" y1="0" x2="260" y2="340" stroke={CS_GOLD} strokeOpacity=".25" strokeWidth="1.5"/>
                      <line x1="0" y1="90" x2="600" y2="260" stroke={CS_GOLD} strokeOpacity=".2" strokeWidth="1.5"/>
                      <line x1="380" y1="0" x2="480" y2="340" stroke={CS_GOLD} strokeOpacity=".2" strokeWidth="1.5"/>
                    </svg>
                    <span className="ct-map-label ct-map-label--tl">Sabana Sur</span>
                    <span className="ct-map-label ct-map-label--tr">San José</span>
                    <span className="ct-map-label ct-map-label--bl">Autopista General Cañas</span>
                    <span className="ct-map-label ct-map-label--br">Circunvalación</span>
                    <span className="ct-map-pin">
                      <span className="ct-map-pin-dot" aria-hidden="true"><PinIcon /></span>
                      <span className="ct-map-pin-tag">Oficentro Sabana</span>
                    </span>
                    <span className="ct-map-compass" aria-hidden="true"><CompassIcon /></span>
                    <span className="ct-map-cta">Ver mapa interactivo <span aria-hidden="true">→</span></span>
                  </button>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <style>{`
        /* ── Hero ── */
        .ct-hero { position: relative; overflow: hidden; background: ${CS_CREAM}; padding: clamp(40px,5.5vw,72px) 0 clamp(32px,4vw,52px); text-align: center; }
        .ct-hero-arch-l { position: absolute; left: 0; top: 0; height: 100%; width: 26%; object-fit: cover; object-position: left center; opacity: .12; pointer-events: none; transform: scaleX(-1); -webkit-mask-image: linear-gradient(90deg, #000, transparent 88%); mask-image: linear-gradient(90deg, #000, transparent 88%); }
        .ct-hero-arch-r { position: absolute; right: 0; top: 0; height: 100%; width: 30%; object-fit: cover; object-position: right center; opacity: .14; pointer-events: none; -webkit-mask-image: linear-gradient(-90deg, #000, transparent 88%); mask-image: linear-gradient(-90deg, #000, transparent 88%); }
        .ct-h1 { font-family: var(--font-serif); font-weight: 400; font-size: clamp(38px,5.6vw,64px); line-height: 1.06; letter-spacing: -0.015em; color: ${CS_BLACK}; margin-bottom: 20px; }
        .ct-h1-em { font-family: var(--font-serif); font-style: italic; color: ${CS_WINE}; }
        .ct-rule { display: inline-block; width: 70px; height: 2px; background: ${CS_GOLD}; margin-bottom: 22px; }
        .ct-lede { font-family: var(--font-sans, system-ui); font-size: clamp(15px,1.2vw,17px); line-height: 1.6; color: ${CS_GRAY}; max-width: 560px; margin: 0 auto; }

        /* ── Info + Form ── */
        .ct-main { position: relative; overflow: hidden; background: #FBFAF7; padding: clamp(40px,5.5vw,80px) 0; }
        .ct-main-arch { position: absolute; right: 0; top: 0; height: 100%; width: 20%; object-fit: cover; object-position: right center; opacity: .1; pointer-events: none; -webkit-mask-image: linear-gradient(-90deg, #000, transparent 88%); mask-image: linear-gradient(-90deg, #000, transparent 88%); }
        .ct-grid { display: grid; grid-template-columns: 40% 60%; gap: clamp(40px,6vw,72px); align-items: start; }
        .ct-eyebrow { font-family: var(--font-mono, monospace); font-size: 11px; font-weight: 500; letter-spacing: .16em; text-transform: uppercase; color: ${CS_WINE}; margin-bottom: 14px; }
        .ct-h2 { font-family: var(--font-serif); font-weight: 400; font-size: clamp(28px,3vw,40px); line-height: 1.1; color: ${CS_BLACK}; margin-bottom: 18px; }
        .ct-em { font-family: var(--font-serif); font-style: italic; color: ${CS_WINE}; }
        .ct-info-lede { font-family: var(--font-sans, system-ui); font-size: 15.5px; line-height: 1.65; color: ${CS_GRAY}; max-width: 46ch; margin-bottom: clamp(28px,3vw,40px); }
        .ct-info-list { border-top: 1px solid ${CS_BORDER}; margin-bottom: 28px; }
        .ct-info-row { display: grid; grid-template-columns: 26px 30px 1fr; gap: 14px; align-items: start; padding: 18px 4px; border-bottom: 1px solid ${CS_BORDER}; background: #fff; transition: background .2s ease; }
        .ct-info-row:hover { background: ${CS_CREAM}; }
        .ct-info-num { font-family: var(--font-mono, monospace); font-size: 11px; color: ${CS_WINE}; padding-top: 3px; }
        .ct-info-icon { display: grid; place-items: center; }
        .ct-info-label { font-family: var(--font-mono, monospace); font-size: 10.5px; letter-spacing: .1em; text-transform: uppercase; color: ${CS_GRAY}; margin-bottom: 5px; }
        .ct-info-val { font-family: var(--font-sans, system-ui); font-size: 16px; font-weight: 500; color: #161616; }
        .ct-info-val.is-link { text-decoration: none; border-bottom: 1px solid transparent; }
        .ct-info-val.is-link:hover { border-color: ${CS_WINE}; color: ${CS_WINE}; }
        .ct-wa-btn { display: flex; align-items: center; justify-content: center; gap: 10px; min-height: 50px; width: 100%; background: ${CS_WINE}; color: #fff; text-decoration: none; border-radius: 4px; font-family: var(--font-sans, system-ui); font-size: 14px; font-weight: 600; transition: background .25s ease, gap .25s ease; }
        .ct-wa-btn:hover { background: ${CS_RED}; gap: 14px; }
        .ct-wa-btn:focus-visible { outline: 2px solid ${CS_GOLD}; outline-offset: 3px; }

        /* Formulario */
        .ct-form { background: #fff; border: 1px solid ${CS_BORDER}; border-radius: 8px; overflow: hidden; box-shadow: 0 20px 50px rgba(20,20,20,.06); }
        .ct-form-head { background: ${CS_BLACK}; padding: 16px 24px; border-bottom: 2px solid ${CS_GOLD}; }
        .ct-form-head-eyebrow { display: inline-flex; align-items: center; gap: 10px; font-family: var(--font-mono, monospace); font-size: 11px; letter-spacing: .14em; text-transform: uppercase; color: ${CS_GOLD}; }
        .ct-form-body { padding: clamp(24px,3vw,40px); }
        .ct-form-title { font-family: var(--font-serif); font-weight: 400; font-size: clamp(24px,2.4vw,30px); color: ${CS_BLACK}; margin-bottom: 6px; }
        .ct-form-sub { font-family: var(--font-sans, system-ui); font-size: 14px; color: ${CS_GRAY}; margin-bottom: 28px; }
        .ct-field { margin-bottom: 20px; }
        .ct-field label { display: block; margin-bottom: 8px; font-family: var(--font-mono, monospace); font-size: 11px; letter-spacing: .1em; text-transform: uppercase; color: ${CS_GRAY}; }
        .ct-field label span { color: ${CS_WINE}; }
        .ct-field input, .ct-field select, .ct-field textarea {
          width: 100%; min-height: 48px; padding: 12px 16px; border: 1px solid rgba(20,20,20,.16); border-radius: 4px;
          background: ${CS_CREAM}; font-family: var(--font-sans, system-ui); font-size: 15px; color: #161616;
          outline: none; transition: border-color .2s ease, box-shadow .2s ease;
        }
        .ct-field textarea { min-height: 120px; resize: vertical; padding-top: 12px; }
        .ct-field input:focus, .ct-field select:focus, .ct-field textarea:focus { border-color: ${CS_WINE}; box-shadow: 0 0 0 3px rgba(122,8,8,.12); background: #fff; }
        .ct-field input.has-error, .ct-field select.has-error, .ct-field textarea.has-error { border-color: ${CS_RED}; }
        .ct-err { margin-top: 6px; font-family: var(--font-sans, system-ui); font-size: 12.5px; color: ${CS_RED}; }
        .ct-submit { width: 100%; min-height: 50px; display: flex; align-items: center; justify-content: center; gap: 10px; background: ${CS_WINE}; color: #fff; border: none; border-radius: 4px; font-family: var(--font-sans, system-ui); font-size: 14px; font-weight: 600; cursor: pointer; transition: background .25s ease, gap .25s ease; margin-top: 6px; }
        .ct-submit:hover { background: ${CS_RED}; gap: 14px; }
        .ct-submit:focus-visible { outline: 2px solid ${CS_GOLD}; outline-offset: 3px; }
        .ct-note { margin-top: 14px; text-align: center; font-family: var(--font-mono, monospace); font-size: 11px; letter-spacing: .04em; color: ${CS_GRAY}; }
        .ct-privacy { margin-top: 10px; display: flex; align-items: flex-start; gap: 8px; justify-content: center; text-align: center; font-family: var(--font-sans, system-ui); font-size: 12px; line-height: 1.5; color: ${CS_GRAY}; }
        .ct-privacy a { color: ${CS_WINE}; }

        /* ── Ubicación ── */
        .ct-loc { position: relative; overflow: hidden; background: linear-gradient(160deg,#111,#0a0808); padding: clamp(40px,6vw,80px) 0; border-radius: 0; }
        .ct-loc-arch { position: absolute; right: 0; top: 0; height: 100%; width: 42%; object-fit: cover; object-position: right center; opacity: .14; pointer-events: none; -webkit-mask-image: linear-gradient(-90deg, #000, transparent 85%); mask-image: linear-gradient(-90deg, #000, transparent 85%); }
        .ct-loc-scrim { position: absolute; inset: 0; background: radial-gradient(900px 500px at 8% 100%, rgba(122,8,8,.2), transparent 60%); pointer-events: none; }
        .ct-loc-grid { display: grid; grid-template-columns: 0.8fr 1.2fr; gap: clamp(28px,4vw,56px); align-items: center; margin-top: clamp(28px,3.5vw,44px); }
        .ct-loc-addr { display: flex; gap: 12px; align-items: flex-start; font-family: var(--font-sans, system-ui); font-size: 16px; line-height: 1.5; color: rgba(245,237,224,.9); margin-bottom: 20px; }
        .ct-loc-link { display: inline-flex; align-items: center; gap: 8px; font-family: var(--font-sans, system-ui); font-size: 14px; font-weight: 600; color: ${CS_GOLD}; text-decoration: none; border-bottom: 1px solid transparent; }
        .ct-loc-link:hover { border-color: ${CS_GOLD}; }
        .ct-loc-link:focus-visible { outline: 2px solid ${CS_GOLD}; outline-offset: 3px; }

        .ct-map { position: relative; aspect-ratio: 16/9; border-radius: 6px; overflow: hidden; border: 1px solid rgba(199,164,92,.3); background: #0f0d0c; }
        .ct-map-iframe { width: 100%; height: 100%; border: 0; }
        .ct-map-preview { position: relative; width: 100%; height: 100%; border: none; cursor: pointer; padding: 0; background: radial-gradient(120% 100% at 70% 30%, #1c1a17, #0a0908); }
        .ct-map-svg { position: absolute; inset: 0; width: 100%; height: 100%; }
        .ct-map-label { position: absolute; font-family: var(--font-mono, monospace); font-size: 10px; letter-spacing: .1em; text-transform: uppercase; color: rgba(199,164,92,.6); }
        .ct-map-label--tl { top: 8%; left: 6%; }
        .ct-map-label--tr { top: 8%; right: 6%; }
        .ct-map-label--bl { bottom: 10%; left: 4%; }
        .ct-map-label--br { bottom: 10%; right: 6%; }
        .ct-map-pin { position: absolute; top: 46%; left: 50%; transform: translate(-50%,-50%); display: flex; flex-direction: column; align-items: center; gap: 6px; }
        .ct-map-pin-dot { width: 34px; height: 34px; border-radius: 50% 50% 50% 0; background: ${CS_WINE}; display: grid; place-items: center; transform: rotate(-45deg); box-shadow: 0 6px 16px rgba(0,0,0,.5); }
        .ct-map-pin-dot svg { transform: rotate(45deg); }
        .ct-map-pin-tag { font-family: var(--font-mono, monospace); font-size: 10px; letter-spacing: .08em; text-transform: uppercase; color: #fff; background: rgba(10,10,10,.6); padding: 3px 8px; border-radius: 2px; }
        .ct-map-compass { position: absolute; right: 16px; bottom: 16px; opacity: .8; }
        .ct-map-cta { position: absolute; left: 50%; bottom: 14px; transform: translateX(-50%); display: inline-flex; align-items: center; gap: 8px; padding: 10px 18px; background: ${CS_WINE}; color: #fff; border-radius: 4px; font-family: var(--font-sans, system-ui); font-size: 12.5px; font-weight: 600; }
        .ct-map-preview:focus-visible { outline: 2px solid ${CS_GOLD}; outline-offset: 3px; }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .ct-grid { grid-template-columns: 1fr; gap: 40px; }
          .ct-loc-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 560px) {
          .ct-hero-arch-l, .ct-hero-arch-r, .ct-main-arch { opacity: .06; }
          .ct-wa-btn, .ct-submit { width: 100%; }
        }
      `}</style>
    </div>
  );
}
