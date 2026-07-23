import Image from "next/image";
import Link from "next/link";
import { WA, EMAIL, TEL } from "@/lib/data";

const R = "#7e0102";

const LINKS = [
  ["/quien",          "Quién es"],
  ["/casos",          "Casos"],
  ["/libro",          "Libro"],
  ["/especialidades", "Especialidades"],
  ["/prensa",         "Prensa"],
  ["/comunicados",    "Comunicados"],
  ["/atestados",      "Atestados"],
  ["/contacto",       "Contacto"],
] as const;

function IconBadge({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      width: 34, height: 34, borderRadius: "50%",
      border: `1px solid ${R}`, color: R,
      display: "flex", alignItems: "center", justifyContent: "center",
      flexShrink: 0,
    }}>
      {children}
    </span>
  );
}

function PinIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z"/>
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/>
    </svg>
  );
}
function TikTokIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.6 5.82c-.9-.79-1.47-1.9-1.6-3.12h-3.02v13.1a3.1 3.1 0 1 1-2.19-2.97V9.7a6.1 6.1 0 1 0 5.21 6.03V9.4a8.1 8.1 0 0 0 4.6 1.42V7.8c-1.09 0-2.1-.37-2.9-1Z"/>
    </svg>
  );
}
function WhatsAppIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 11.5a8.5 8.5 0 0 1-12.4 7.55L3 20l1.05-5.4A8.5 8.5 0 1 1 21 11.5Z"/>
    </svg>
  );
}
function ChevronIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m9 6 6 6-6 6"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="rc-premium-panel" style={{ color: "#fff", padding: "clamp(48px,7vw,88px) 0 0" }}>
      <span className="rc-premium-wave" aria-hidden="true" />
      <span className="rc-premium-r" aria-hidden="true">R</span>

      <div className="rc-wrap" style={{ position: "relative", zIndex: 2 }}>
        <div style={{
          display: "grid", gap: "var(--gut)",
          gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
        }} className="footer-grid">

          {/* Brand col */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 22 }}>
              <Image src="/images/logo-emblema.png" alt="Rivera Cheves & Asociados — Bufete Penalista Costa Rica" width={56} height={56}
                style={{ height: 52, width: "auto", filter: "brightness(0) invert(1)", objectFit: "contain", flexShrink: 0 }}
              />
              <div style={{ lineHeight: 1.15 }}>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: 17, fontWeight: 700, letterSpacing: "-0.01em" }}>
                  Rivera Cheves &amp; Asociados
                </div>
                <div style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--gold)", marginTop: 4 }}>
                  Derecho Penal
                </div>
              </div>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.75, color: "rgba(255,255,255,.68)", maxWidth: "32ch" }}>
              Defensa penal con compromiso,{" "}
              <em className="rc-em" style={{ color: "var(--gold)", opacity: 1 }}>ética y resultados</em> — Costa Rica e internacional.
            </p>
            <span aria-hidden="true" style={{ display: "block", width: 48, height: 2, background: R, marginTop: 22, marginBottom: 22 }} />
            <a href={WA} target="_blank" rel="noopener" className="rc-btn on-r" style={{ fontSize: 13 }}>
              Hablemos de su caso →
            </a>
          </div>

          {/* Nav col */}
          <div>
            <div className="rc-meta" style={{ color: "var(--gold)", marginBottom: 18 }}>Navegar</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
              {LINKS.map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="rc-foot-link" style={{
                    fontSize: 14, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8,
                  }}>
                    <span>{label}</span>
                    <span style={{ color: "rgba(255,255,255,.35)" }}><ChevronIcon /></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact col */}
          <div>
            <div className="rc-meta" style={{ color: "var(--gold)", marginBottom: 18 }}>Contacto</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 16, fontSize: 14, color: "rgba(255,255,255,.85)" }}>
              <li style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <IconBadge><PinIcon /></IconBadge>
                <span>
                  Edificio 7, Oficentro Sabana<br />
                  <span style={{ color: "rgba(255,255,255,.55)", fontSize: 13 }}>San José, Costa Rica</span>
                </span>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <IconBadge><PhoneIcon /></IconBadge>
                <a href={`tel:${TEL}`} className="rc-foot-link subtle">8998-0112</a>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <IconBadge><MailIcon /></IconBadge>
                <a href={`mailto:${EMAIL}`} className="rc-foot-link subtle" style={{ wordBreak: "break-all" }}>{EMAIL}</a>
              </li>
            </ul>
          </div>

          {/* Social col */}
          <div>
            <div className="rc-meta" style={{ color: "var(--gold)", marginBottom: 18 }}>Redes</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 16, fontSize: 14, color: "rgba(255,255,255,.85)" }}>
              <li style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <IconBadge><TikTokIcon /></IconBadge>
                <a href="https://www.tiktok.com/@josephriveraabogado" target="_blank" rel="noopener" className="rc-foot-link subtle">TikTok →</a>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <IconBadge><WhatsAppIcon /></IconBadge>
                <a href={WA} target="_blank" rel="noopener" className="rc-foot-link subtle">WhatsApp →</a>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <IconBadge><MailIcon /></IconBadge>
                <a href={`mailto:${EMAIL}`} className="rc-foot-link subtle">Correo →</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="rc-premium-rule" style={{ position: "relative", marginTop: "clamp(40px,6vw,72px)", height: 1 }} aria-hidden="true">
          <span className="rc-premium-rule-line l" />
          <span className="rc-premium-rule-dot">⌂</span>
          <span className="rc-premium-rule-line r" />
        </div>

        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: 12,
          padding: "24px 0 28px",
          fontFamily: "var(--font-mono, monospace)", fontSize: 11,
          letterSpacing: ".06em", textTransform: "uppercase",
          color: "rgba(255,255,255,.45)",
        }} className="footer-bottom">
          <span>© 2026 Rivera Cheves &amp; Asociados · Todos los derechos reservados.</span>
          <div style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
            <Link href="/privacidad" className="rc-foot-link subtle" style={{ color: "rgba(255,255,255,.55)" }}>Privacidad</Link>
            <Link href="/terminos"   className="rc-foot-link subtle" style={{ color: "rgba(255,255,255,.55)" }}>Términos</Link>
            <Link href="/cookies"    className="rc-foot-link subtle" style={{ color: "rgba(255,255,255,.55)" }}>Cookies</Link>
          </div>
          <span>
            Sitio web por{" "}
            <a
              href="https://acontecer.co.cr"
              target="_blank"
              rel="noopener external"
              title="Acontecer — Agencia digital · marketing y desarrollo web en Costa Rica"
              style={{ color: "#fff", borderBottom: "1px solid rgba(255,255,255,.4)", paddingBottom: 1 }}
            >
              Acontecer.co.cr
            </a>
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 40px var(--gut) !important; } }
        @media (max-width: 560px) { .footer-grid { grid-template-columns: 1fr !important; gap: 36px !important; } }
        @media (max-width: 640px) { .footer-bottom { justify-content: flex-start !important; flex-direction: column; align-items: flex-start !important; gap: 10px !important; } }
      `}</style>
    </footer>
  );
}
