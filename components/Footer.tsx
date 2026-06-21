import Image from "next/image";
import Link from "next/link";
import { WA, EMAIL, TEL } from "@/lib/data";

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

export default function Footer() {
  const R = "#7e0102";
  return (
    <footer style={{ background: R, color: "#fff", padding: "var(--pad-y) 0" }}>
      <div className="rc-wrap">
        <div style={{
          display: "grid", gap: "var(--gut)",
          gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
        }} className="footer-grid">

          {/* Brand col */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
              <Image src="/images/logo.png" alt="Rivera Cheves & Asociados — Bufete Penalista Costa Rica" width={200} height={88}
                style={{ height: 72, width: "auto", filter: "brightness(0) invert(1)", objectFit: "contain" }}
              />
              <div style={{ lineHeight: 1.1 }}>
                <div style={{ fontSize: 20, fontWeight: 600, letterSpacing: "-0.01em" }}>Rivera Cheves</div>
                <div style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(255,255,255,.6)", marginTop: 4 }}>
                  &amp; Asociados
                </div>
              </div>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.75, color: "rgba(255,255,255,.65)", maxWidth: "32ch" }}>
              Defensa penal con compromiso, ética y resultados — Costa Rica e internacional.
            </p>
            <div style={{ marginTop: 24 }}>
              <a href={WA} target="_blank" rel="noopener" className="rc-btn on-r" style={{ fontSize: 13 }}>
                Hablemos de su caso →
              </a>
            </div>
          </div>

          {/* Nav col */}
          <div>
            <div className="rc-meta" style={{ color: "rgba(255,255,255,.4)", marginBottom: 16 }}>Navegar</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {LINKS.map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="rc-foot-link" style={{ fontSize: 14 }}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact col */}
          <div>
            <div className="rc-meta" style={{ color: "rgba(255,255,255,.4)", marginBottom: 16 }}>Contacto</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, fontSize: 14, color: "rgba(255,255,255,.85)" }}>
              <li>Edificio 7, Oficentro Sabana</li>
              <li>San José, Costa Rica</li>
              <li><a href={`tel:${TEL}`} className="rc-foot-link subtle">8998-0112</a></li>
              <li><a href={`mailto:${EMAIL}`} className="rc-foot-link subtle">{EMAIL}</a></li>
            </ul>
          </div>

          {/* Social col */}
          <div>
            <div className="rc-meta" style={{ color: "rgba(255,255,255,.4)", marginBottom: 16 }}>Redes</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, fontSize: 14, color: "rgba(255,255,255,.85)" }}>
              <li><a href="https://www.tiktok.com/@josephriveraabogado" target="_blank" rel="noopener" className="rc-foot-link subtle">TikTok →</a></li>
              <li><a href={WA} target="_blank" rel="noopener" className="rc-foot-link subtle">WhatsApp →</a></li>
              <li><a href={`mailto:${EMAIL}`} className="rc-foot-link subtle">Correo →</a></li>
            </ul>
          </div>
        </div>

        <hr className="rc-hr on-r" style={{ margin: "clamp(40px,6vw,80px) 0 28px" }}/>

        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: 16,
          fontFamily: "var(--font-mono, monospace)", fontSize: 11,
          letterSpacing: ".06em", textTransform: "uppercase",
          color: "rgba(255,255,255,.4)",
        }}>
          <span>© 2026 Rivera Cheves &amp; Asociados</span>
          <div style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
            <Link href="/privacidad" className="rc-foot-link subtle" style={{ color: "rgba(255,255,255,.55)" }}>Privacidad</Link>
            <Link href="/terminos"   className="rc-foot-link subtle" style={{ color: "rgba(255,255,255,.55)" }}>Términos</Link>
            <Link href="/cookies"    className="rc-foot-link subtle" style={{ color: "rgba(255,255,255,.55)" }}>Cookies</Link>
          </div>
          <span>
            Creado por{" "}
            <a
              href="https://acontecer.co.cr"
              target="_blank"
              rel="noopener external"
              title="Acontecer — Agencia digital · marketing y desarrollo web en Costa Rica"
              style={{
                color: "#fff",
                borderBottom: "1px solid rgba(255,255,255,.4)",
                paddingBottom: 1,
              }}
            >
              Acontecer.co.cr
            </a>
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 560px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}
