"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { WA, RC_AREAS } from "@/lib/data";
import SearchModal from "@/components/SearchModal";

// Desktop nav includes Comunicados as a top-level link
const DESKTOP_LINKS = [
  ["/quien",          "Quién es"],
  ["/casos",          "Casos"],
  ["/especialidades", "Especialidades"],
  ["/prensa",         "Prensa"],
  ["/comunicados",    "Comunicados"],
  ["/atestados",      "Atestados"],
  ["/contacto",       "Contacto"],
] as const;

// Mobile drawer: Comunicados lives as sub-link under Prensa
const MOBILE_LINKS = [
  ["/quien",          "Quién es"],
  ["/casos",          "Casos"],
  ["/especialidades", "Especialidades"],
  ["/prensa",         "Prensa"],
  ["/atestados",      "Atestados"],
  ["/contacto",       "Contacto"],
] as const;

const R = "#7e0102";

function LupaIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.2"
      strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="8"/>
      <path d="m21 21-4.35-4.35"/>
    </svg>
  );
}

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [open,       setOpen]       = useState(false);
  const [mobile,     setMobile]     = useState(false);
  const [search,     setSearch]     = useState(false);
  const [expandSpec, setExpandSpec] = useState(false);
  const pathname                    = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64);
    const onResize = () => setMobile(window.innerWidth < 980);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    onScroll(); onResize();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => { setOpen(false); setExpandSpec(false); }, [pathname]);

  const logoH = scrolled ? 64 : 104;
  const utilH = scrolled ? 0 : 40;

  return (
    <>
      <header style={{
        position: "sticky", top: 0, zIndex: 50,
        background: R,
        borderBottom: scrolled ? "1px solid rgba(0,0,0,.18)" : "1px solid transparent",
        boxShadow: scrolled ? "0 2px 28px rgba(0,0,0,.22)" : "none",
        transition: "box-shadow .4s ease, border-color .4s ease",
      }}>

        {/* ── Utility strip ─────────────────────────────────────────────────── */}
        <div style={{
          height: utilH, overflow: "hidden",
          borderBottom: utilH ? "1px solid rgba(255,255,255,.14)" : "none",
          transition: "height .4s ease, border-color .4s ease",
        }}>
          <div style={{
            maxWidth: "var(--max)", margin: "0 auto",
            padding: "0 var(--pad-x)", height: 40,
            display: "flex", alignItems: "center", justifyContent: "space-between",
            gap: 24,
            fontFamily: "var(--font-mono, monospace)", fontSize: 11,
            letterSpacing: ".14em", textTransform: "uppercase",
            color: "rgba(255,255,255,.72)",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                <span style={{ display: "inline-block", width: 5, height: 5, borderRadius: "50%", background: "#fff" }}/>
                San José · CR
              </span>
              <span style={{ opacity: .4 }}>—</span>
              <a href="tel:+50689980112" style={{ color: "rgba(255,255,255,.72)" }}>8998-0112</a>
              <span style={{ opacity: .4 }} className="rc-util-hide-sm">—</span>
              <a href="mailto:jriveracheves@gmail.com" style={{ color: "rgba(255,255,255,.72)" }} className="rc-util-hide-sm">
                jriveracheves@gmail.com
              </a>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }} className="rc-util-hide-sm">
              <a href="https://www.tiktok.com/@josephriveraabogado" target="_blank" rel="noopener" style={{ color: "rgba(255,255,255,.72)" }}>TikTok</a>
              <span style={{ opacity: .35 }}>·</span>
              <a href="https://www.instagram.com/josephriveraabogado" target="_blank" rel="noopener" style={{ color: "rgba(255,255,255,.72)" }}>Instagram</a>
              <span style={{ opacity: .35 }}>·</span>
              <span>ES · CR</span>
            </div>
          </div>
        </div>

        {/* ── Main row ──────────────────────────────────────────────────────── */}
        <div style={{
          maxWidth: "var(--max)", margin: "0 auto",
          padding: scrolled ? "14px var(--pad-x)" : "22px var(--pad-x)",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          gap: 32,
          transition: "padding .4s ease",
        }}>

          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 22, minWidth: 0 }}>
            <Image
              src="/images/logo.png"
              alt="Rivera Cheves & Asociados — Bufete Penalista Costa Rica"
              width={200} height={104}
              style={{
                height: logoH, width: "auto",
                filter: "brightness(0) invert(1)",
                objectFit: "contain", flexShrink: 0,
                transition: "height .4s ease",
              }}
              priority
            />
            <div style={{
              lineHeight: 1, paddingLeft: 22,
              borderLeft: "1px solid rgba(255,255,255,.25)",
              display: "flex", flexDirection: "column", gap: 8,
            }} className="rc-brand-text">
              <div style={{
                fontFamily: "var(--font-sans, system-ui)",
                fontSize: scrolled ? 20 : 26,
                fontWeight: 500, letterSpacing: "-0.02em", color: "#fff",
                transition: "font-size .4s ease",
              }}>
                Rivera{" "}
                <em style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontStyle: "italic", fontWeight: 400,
                  color: "rgba(255,255,255,.78)",
                }}>Cheves</em>
              </div>
              <div style={{
                fontFamily: "var(--font-mono, monospace)", fontSize: 10,
                letterSpacing: ".22em", textTransform: "uppercase",
                color: "rgba(255,255,255,.65)", whiteSpace: "nowrap",
              }}>
                &amp; Asociados · Derecho Penal
              </div>
            </div>
          </Link>

          {/* ── Desktop nav ── */}
          {!mobile && (
            <nav style={{ display: "flex", alignItems: "center", gap: 2 }}>
              {DESKTOP_LINKS.map(([href, label]) => {
                const isActive = pathname === href || pathname.startsWith(href + "/");
                return (
                  <Link
                    key={href}
                    href={href}
                    style={{
                      position: "relative",
                      padding: "12px 16px",
                      fontFamily: "var(--font-sans, system-ui)",
                      fontSize: 13,
                      fontWeight: isActive ? 600 : 500,
                      color: "#fff",
                      opacity: isActive ? 1 : 0.78,
                      transition: "opacity .2s ease",
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = isActive ? "1" : "0.78"; }}
                  >
                    {isActive && (
                      <span style={{
                        position: "absolute", left: 16, right: 16, bottom: 4,
                        height: 1.5, background: "#fff",
                      }}/>
                    )}
                    {label}
                  </Link>
                );
              })}

              <button
                onClick={() => setSearch(true)}
                aria-label="Buscar en el sitio"
                style={{
                  padding: "12px 14px",
                  color: "rgba(255,255,255,.78)",
                  display: "flex", alignItems: "center",
                  transition: "opacity .2s ease",
                  background: "none", border: "none", cursor: "pointer",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.opacity = "1"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.opacity = "0.78"; }}
              >
                <LupaIcon size={18}/>
              </button>

              <a
                href={WA} target="_blank" rel="noopener"
                style={{
                  marginLeft: 16, padding: "10px 20px",
                  background: "#fff", color: R,
                  fontFamily: "var(--font-sans, system-ui)",
                  fontSize: 13, fontWeight: 700,
                  borderRadius: "var(--r-sm, 6px)",
                  transition: "background .2s ease",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "#f0efee"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "#fff"; }}
              >
                Consulta →
              </a>
            </nav>
          )}

          {/* ── Mobile: lupa + hamburger ── */}
          {mobile && (
            <div style={{ display: "flex", alignItems: "center", gap: 4, flexShrink: 0 }}>
              <button
                onClick={() => setSearch(true)}
                aria-label="Buscar en el sitio"
                style={{
                  width: 44, height: 44,
                  display: "flex", justifyContent: "center", alignItems: "center",
                  color: "rgba(255,255,255,.85)",
                  background: "none", border: "none", cursor: "pointer",
                }}
              >
                <LupaIcon size={20}/>
              </button>
              <button
                onClick={() => setOpen(o => !o)}
                aria-label={open ? "Cerrar menú" : "Abrir menú"}
                className={open ? "rc-burger rc-burger--open" : "rc-burger"}
                style={{
                  width: 48, height: 48,
                  display: "flex", flexDirection: "column",
                  justifyContent: "center", alignItems: "center", gap: 0,
                  flexShrink: 0, position: "relative", zIndex: 60,
                  background: "none", border: "none", cursor: "pointer",
                }}
              >
                <span className="rc-burger-line"/>
                <span className="rc-burger-line"/>
                <span className="rc-burger-line"/>
              </button>
            </div>
          )}
        </div>

        {/* ── Mobile drawer — full-screen, staggered ─────────────────────────── */}
        {mobile && (
          <div style={{
            position: "fixed", inset: 0, zIndex: 55,
            background: R,
            display: "flex", flexDirection: "column",
            padding: "calc(80px + var(--pad-x, 24px)) var(--pad-x, 24px) calc(var(--pad-x, 24px) + env(safe-area-inset-bottom))",
            pointerEvents: open ? "auto" : "none",
            opacity: open ? 1 : 0,
            transform: open ? "translateY(0)" : "translateY(-12px)",
            transition: "opacity .4s ease, transform .4s ease",
            overflowY: "auto",
          }}>
            <nav style={{ display: "flex", flexDirection: "column", flex: 1, justifyContent: "center", gap: 2 }}>
              {MOBILE_LINKS.map(([href, label], i) => {
                const isEsp = href === "/especialidades";

                /* ── Especialidades: expandable with sub-pages ── */
                if (isEsp) return (
                  <div key={href} style={{
                    opacity: 0,
                    animation: open ? `rc-drawer-item .5s ease-out forwards` : "none",
                    animationDelay: open ? `${0.12 + i * 0.06}s` : "0s",
                  }}>
                    <div style={{ borderBottom: expandSpec ? "none" : "1px solid rgba(255,255,255,.18)" }}>
                      <button
                        onClick={() => setExpandSpec(e => !e)}
                        style={{
                          width: "100%",
                          display: "flex", alignItems: "baseline", justifyContent: "space-between",
                          padding: "clamp(12px,2.2vw,20px) 0",
                          fontFamily: "var(--font-sans, system-ui)",
                          fontSize: "clamp(30px,9vw,46px)",
                          fontWeight: 500, letterSpacing: "-0.025em", lineHeight: 1.05,
                          color: pathname.startsWith("/especialidades") ? "#fff" : "rgba(255,255,255,.82)",
                          background: "none", border: "none", cursor: "pointer", textAlign: "left",
                        }}
                      >
                        <span>{label}</span>
                        <span style={{
                          fontFamily: "var(--font-mono, monospace)", fontSize: 11,
                          color: "rgba(255,255,255,.45)",
                          display: "flex", alignItems: "center", gap: 10,
                        }}>
                          <span style={{
                            fontSize: 20, lineHeight: 1, display: "inline-block",
                            transform: expandSpec ? "rotate(45deg)" : "none",
                            transition: "transform .25s ease",
                          }}>+</span>
                          0{i + 1}
                        </span>
                      </button>
                    </div>
                    {expandSpec && (
                      <div style={{ borderBottom: "1px solid rgba(255,255,255,.18)", paddingBottom: 10 }}>
                        <Link
                          href="/especialidades"
                          onClick={() => setOpen(false)}
                          style={{
                            display: "block",
                            padding: "8px 0 8px 28px",
                            fontFamily: "var(--font-mono, monospace)", fontSize: 10,
                            letterSpacing: ".14em", textTransform: "uppercase",
                            color: "rgba(255,255,255,.4)", textDecoration: "none",
                          }}
                        >
                          ← Todas las áreas
                        </Link>
                        {RC_AREAS.map(a => (
                          <Link
                            key={a.slug}
                            href={`/especialidades/${a.slug}`}
                            onClick={() => setOpen(false)}
                            style={{
                              display: "flex", justifyContent: "space-between", alignItems: "center",
                              padding: "11px 0 11px 28px",
                              fontFamily: "var(--font-sans, system-ui)", fontSize: 16, fontWeight: 400,
                              color: pathname === `/especialidades/${a.slug}` ? "#fff" : "rgba(255,255,255,.75)",
                              textDecoration: "none",
                              borderTop: "1px solid rgba(255,255,255,.09)",
                            }}
                          >
                            <span>{a.t}</span>
                            <span style={{
                              fontFamily: "var(--font-mono, monospace)", fontSize: 10,
                              color: "rgba(255,255,255,.3)", marginLeft: 12,
                            }}>{a.n}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );

                /* ── Prensa: with Comunicados sub-link ── */
                if (href === "/prensa") return (
                  <div key={href} style={{
                    opacity: 0,
                    animation: open ? `rc-drawer-item .5s ease-out forwards` : "none",
                    animationDelay: open ? `${0.12 + i * 0.06}s` : "0s",
                  }}>
                    <div style={{ borderBottom: "1px solid rgba(255,255,255,.18)" }}>
                      <Link
                        href={href}
                        onClick={() => setOpen(false)}
                        style={{
                          display: "flex", alignItems: "baseline", justifyContent: "space-between",
                          padding: "clamp(12px,2.2vw,20px) 0 12px",
                          fontFamily: "var(--font-sans, system-ui)",
                          fontSize: "clamp(30px,9vw,46px)",
                          fontWeight: 500, letterSpacing: "-0.025em", lineHeight: 1.05,
                          color: pathname === href ? "#fff" : "rgba(255,255,255,.82)",
                          textDecoration: "none",
                        }}
                      >
                        <span>{label}</span>
                        <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 11, color: "rgba(255,255,255,.45)" }}>
                          0{i + 1}
                        </span>
                      </Link>
                      <Link
                        href="/comunicados"
                        onClick={() => setOpen(false)}
                        style={{
                          display: "flex", justifyContent: "space-between", alignItems: "center",
                          padding: "9px 0 14px 28px",
                          borderTop: "1px solid rgba(255,255,255,.09)",
                          fontFamily: "var(--font-sans, system-ui)", fontSize: 15, fontWeight: 400,
                          color: pathname.startsWith("/comunicados") ? "#fff" : "rgba(255,255,255,.65)",
                          textDecoration: "none",
                        }}
                      >
                        <span>Comunicados</span>
                        <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 11, color: "rgba(255,255,255,.3)" }}>→</span>
                      </Link>
                    </div>
                  </div>
                );

                /* ── Regular link ── */
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setOpen(false)}
                    style={{
                      display: "flex", alignItems: "baseline", justifyContent: "space-between",
                      gap: 16,
                      padding: "clamp(12px,2.2vw,20px) 0",
                      borderBottom: "1px solid rgba(255,255,255,.18)",
                      fontFamily: "var(--font-sans, system-ui)",
                      fontSize: "clamp(30px,9vw,46px)",
                      fontWeight: 500, letterSpacing: "-0.025em", lineHeight: 1.05,
                      color: pathname === href ? "#fff" : "rgba(255,255,255,.82)",
                      textDecoration: "none",
                      opacity: 0,
                      animation: open ? `rc-drawer-item .5s ease-out forwards` : "none",
                      animationDelay: open ? `${0.12 + i * 0.06}s` : "0s",
                    }}
                  >
                    <span>{label}</span>
                    <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 11, color: "rgba(255,255,255,.45)" }}>
                      0{i + 1}
                    </span>
                  </Link>
                );
              })}
            </nav>

            {/* Contact strip */}
            <div style={{
              opacity: 0,
              animation: open ? `rc-drawer-item .5s ease-out forwards` : "none",
              animationDelay: open ? `${0.12 + MOBILE_LINKS.length * 0.06}s` : "0s",
            }}>
              <a
                href={WA} target="_blank" rel="noopener"
                style={{
                  display: "flex", justifyContent: "center", alignItems: "center", gap: 10,
                  marginBottom: 20, padding: 16,
                  background: "#fff", color: R,
                  fontFamily: "var(--font-sans, system-ui)",
                  fontSize: 14, fontWeight: 700,
                  borderRadius: "var(--r-sm, 6px)",
                  textDecoration: "none",
                }}
              >
                Consulta por WhatsApp →
              </a>
              <div style={{
                display: "flex", flexWrap: "wrap", gap: "8px 20px",
                fontFamily: "var(--font-mono, monospace)", fontSize: 11,
                letterSpacing: ".12em", textTransform: "uppercase",
                color: "rgba(255,255,255,.7)",
              }}>
                <a href="tel:+50689980112" style={{ color: "rgba(255,255,255,.7)" }}>8998-0112</a>
                <span style={{ opacity: .4 }}>·</span>
                <a href="mailto:jriveracheves@gmail.com" style={{ color: "rgba(255,255,255,.7)" }}>Correo</a>
                <span style={{ opacity: .4 }}>·</span>
                <span>San José, CR</span>
              </div>
            </div>
          </div>
        )}

        <style>{`
          @media (max-width: 720px) { .rc-util-hide-sm { display: none !important; } }
          @media (max-width: 560px) { .rc-brand-text   { display: none !important; } }
          .rc-burger-line {
            display: block; width: 26px; height: 2px; background: #fff; border-radius: 2px;
            transition: transform .4s ease, opacity .25s ease, width .4s ease;
          }
          .rc-burger-line:nth-child(1) { margin-bottom: 6px; }
          .rc-burger-line:nth-child(2) { margin-bottom: 6px; width: 18px; }
          .rc-burger--open .rc-burger-line:nth-child(1) { transform: translateY(8px) rotate(45deg); }
          .rc-burger--open .rc-burger-line:nth-child(2) { opacity: 0; transform: translateX(-8px); }
          .rc-burger--open .rc-burger-line:nth-child(3) { transform: translateY(-8px) rotate(-45deg); width: 26px; }
          @keyframes rc-drawer-item {
            from { opacity: 0; transform: translateY(16px); }
            to   { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </header>

      {search && <SearchModal onClose={() => setSearch(false)} />}
    </>
  );
}
