"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { WA, RC_AREAS } from "@/lib/data";
import SearchModal from "@/components/SearchModal";
import LangToggle from "@/components/LangToggle";

const DESKTOP_LINKS = [
  ["/quien",          "Quién es"],
  ["/casos",          "Casos"],
  ["/libro",          "Libro"],
  ["/especialidades", "Especialidades"],
  ["/prensa",         "Prensa"],
  ["/comunicados",    "Comunicados"],
  ["/atestados",      "Atestados"],
  ["/contacto",       "Contacto"],
] as const;

const R = "#7e0102";

function LupaIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.2"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8"/>
      <path d="m21 21-4.35-4.35"/>
    </svg>
  );
}

function UndoIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 10h9a5 5 0 0 1 0 10H8"/><path d="m7 5-4 5 4 5"/>
    </svg>
  );
}
function HomeIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m3 10 9-7 9 7"/><path d="M5 9v11h14V9"/>
    </svg>
  );
}

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [open,       setOpen]       = useState(false);
  const [mobile,     setMobile]     = useState(false);
  const [search,     setSearch]     = useState(false);
  const [drawerView, setDrawerView] = useState<"main" | "especialidades">("main");
  const pathname                    = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64);
    const onResize = () => setMobile(window.innerWidth < 1060);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    onScroll(); onResize();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
    setDrawerView("main");
  }, [pathname]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const logoH = scrolled ? 54 : 68;
  const utilH = scrolled ? 0 : 40;

  // Header height for drawer top padding (so content appears below header)
  const headerH = scrolled ? 84 : 152;

  return (
    <>
      <header style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "#0a0808",
        borderBottom: `2px solid ${R}`,
        boxShadow: scrolled ? "0 2px 28px rgba(0,0,0,.35)" : "none",
        transition: "box-shadow .4s ease",
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
            </div>
          </div>
        </div>

        {/* ── Main row ──────────────────────────────────────────────────────── */}
        <div className="rc-navrow" style={{
          maxWidth: "var(--max)", margin: "0 auto",
          padding: scrolled ? "14px var(--pad-x)" : "20px var(--pad-x)",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          gap: 40,
          transition: "padding .4s ease",
        }}>

          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 18, minWidth: 0 }}>
            <Image
              src="/images/logo-emblema.png"
              alt="Rivera Cheves & Asociados — Bufete Penalista Costa Rica"
              width={72} height={72}
              style={{
                height: logoH, width: "auto",
                filter: "brightness(0) invert(1)",
                objectFit: "contain", flexShrink: 0,
                transition: "height .4s ease",
              }}
              priority
            />
            <div style={{
              paddingLeft: 18,
              borderLeft: "1px solid rgba(255,255,255,.22)",
              display: "flex", flexDirection: "column", gap: 7,
            }} className="rc-brand-text">
              <div style={{
                fontFamily: "var(--font-sans, system-ui)",
                fontSize: scrolled ? 20 : 26,
                fontWeight: 500, letterSpacing: "-0.02em", color: "#fff",
                lineHeight: 1.12,
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
                lineHeight: 1.2,
                whiteSpace: "nowrap",
              }}>
                <span style={{ color: "rgba(255,255,255,.65)" }}>&amp; Asociados</span>{" "}
                <span style={{ color: "var(--premium-gold)" }}>· Derecho Penal</span>
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
                    className={`rc-nav-link${isActive ? " is-active" : ""}`}
                  >
                    <span className="rc-nav-label">{label}</span>
                  </Link>
                );
              })}

              <LangToggle />

              <button onClick={() => setSearch(true)} aria-label="Buscar en el sitio"
                className="rc-nav-search"
              >
                <LupaIcon size={18}/>
              </button>

              <a href={WA} target="_blank" rel="noopener" className="rc-nav-cta">
                Consulta <span className="rc-nav-cta-arrow">→</span>
              </a>
            </nav>
          )}

          {/* ── Mobile: lupa + hamburger ── */}
          {mobile && (
            <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
              <LangToggle compact />
              <button onClick={() => setSearch(true)} aria-label="Buscar en el sitio"
                style={{
                  width: 44, height: 44,
                  display: "flex", justifyContent: "center", alignItems: "center",
                  color: "rgba(255,255,255,.85)", background: "none", border: "none", cursor: "pointer",
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
                  flexShrink: 0, background: "none", border: "none", cursor: "pointer",
                }}
              >
                <span className="rc-burger-line"/>
                <span className="rc-burger-line"/>
                <span className="rc-burger-line"/>
              </button>
            </div>
          )}
        </div>

        <style>{`
          @media (max-width: 720px) { .rc-util-hide-sm { display: none !important; } }
          @media (max-width: 560px) { .rc-brand-text   { display: none !important; } }
          /* El menú de escritorio aparece desde 1060px; el subtítulo choca con "Quién es"
             en ese rango, así que se oculta mientras el nav esté activo. */
          @media (min-width: 1060px) { .rc-brand-text  { display: none !important; } }
          /* En móvil, menos separación entre el logo y los controles para evitar desbordes */
          @media (max-width: 1060px) { .rc-navrow { gap: 16px !important; } }
          @media (max-width: 380px)  { .rc-navrow { gap: 10px !important; } }

          /* ── Desktop nav links ── */
          .rc-nav-link {
            position: relative;
            padding: 11px 16px;
            border-radius: 7px;
            font-family: var(--font-sans, system-ui);
            font-size: 13px;
            font-weight: 500;
            color: rgba(255,255,255,.82);
            text-decoration: none;
            transition: color .25s ease, background-color .3s cubic-bezier(.22,1,.36,1);
          }
          /* Pastilla de fondo que aparece al hover */
          .rc-nav-link::before {
            content: '';
            position: absolute; inset: 4px 6px;
            background: rgba(255,255,255,.13);
            border-radius: 6px;
            opacity: 0;
            transform: scale(.86);
            transition: opacity .28s cubic-bezier(.22,1,.36,1), transform .28s cubic-bezier(.22,1,.36,1);
            z-index: 0;
          }
          .rc-nav-link:hover::before { opacity: 1; transform: scale(1); }
          /* Subrayado animado que se dibuja desde el centro */
          .rc-nav-link::after {
            content: '';
            position: absolute; left: 16px; right: 16px; bottom: 5px;
            height: 2px; background: ${R};
            transform: scaleX(0);
            transform-origin: center;
            transition: transform .32s cubic-bezier(.22,1,.36,1);
            z-index: 1;
          }
          .rc-nav-link:hover { color: #fff; }
          .rc-nav-link:hover::after { transform: scaleX(1); }
          .rc-nav-label { position: relative; z-index: 1; }
          /* Activo: subrayado permanente + texto pleno */
          .rc-nav-link.is-active { color: #fff; font-weight: 600; }
          .rc-nav-link.is-active::after { transform: scaleX(1); }

          /* Lupa */
          .rc-nav-search {
            padding: 11px 14px; margin-left: 2px;
            color: rgba(255,255,255,.8);
            display: flex; align-items: center;
            background: none; border: none; cursor: pointer;
            border-radius: 7px;
            transition: color .25s ease, background-color .3s ease, transform .25s ease;
          }
          .rc-nav-search:hover { color: #fff; background: rgba(255,255,255,.13); transform: scale(1.05); }

          /* CTA Consulta */
          .rc-nav-cta {
            margin-left: 16px; padding: 11px 22px;
            background: ${R}; color: #fff;
            font-family: var(--font-sans, system-ui); font-size: 13px; font-weight: 700;
            border-radius: 7px; text-decoration: none;
            display: inline-flex; align-items: center; gap: 7px;
            box-shadow: 0 0 0 0 rgba(255,255,255,0);
            transition: background-color .25s ease, color .25s ease, transform .25s cubic-bezier(.22,1,.36,1), box-shadow .3s ease;
          }
          .rc-nav-cta:hover {
            background: #a30102; color: #fff;
            transform: translateY(-2px);
            box-shadow: 0 8px 22px rgba(0,0,0,.4);
          }
          .rc-nav-cta-arrow { display: inline-block; transition: transform .3s cubic-bezier(.22,1,.36,1); }
          .rc-nav-cta:hover .rc-nav-cta-arrow { transform: translateX(4px); }

          @media (prefers-reduced-motion: reduce) {
            .rc-nav-link::before, .rc-nav-link::after, .rc-nav-cta, .rc-nav-cta-arrow, .rc-nav-search {
              transition: none !important;
            }
          }

          .rc-burger-line {
            display: block; width: 26px; height: 2px; background: #fff; border-radius: 2px;
            transition: transform .4s ease, opacity .25s ease, width .4s ease;
          }
          .rc-burger-line:nth-child(1) { margin-bottom: 6px; }
          .rc-burger-line:nth-child(2) { margin-bottom: 6px; width: 18px; }
          .rc-burger--open .rc-burger-line:nth-child(1) { transform: translateY(8px) rotate(45deg); }
          .rc-burger--open .rc-burger-line:nth-child(2) { opacity: 0; transform: translateX(-8px); }
          .rc-burger--open .rc-burger-line:nth-child(3) { transform: translateY(-8px) rotate(-45deg); width: 26px; }
        `}</style>
      </header>

      {/* ── Mobile drawer — panel oscuro, debajo del header sticky ───────────
          zIndex 45 < header zIndex 50 so the header always shows on top  */}
      {mobile && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 45,
          background: "#0a0808",
          pointerEvents: open ? "auto" : "none",
          opacity: open ? 1 : 0,
          transform: open ? "translateY(0)" : "translateY(-8px)",
          transition: "opacity .3s ease, transform .3s ease",
          overflowY: "auto",
          paddingTop: headerH,
        }}>
          <div style={{ padding: "24px var(--pad-x, 24px) 40px" }}>

            {drawerView === "main" && (
              <>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Cerrar el menú y volver al sitio"
                  style={{
                    display: "flex", alignItems: "center", gap: 8,
                    background: "none", border: "none", cursor: "pointer", padding: "2px 0",
                    marginBottom: 18,
                    color: "var(--premium-gold)",
                    fontFamily: "var(--font-sans, system-ui)", fontSize: 14, fontWeight: 600,
                    opacity: 0,
                    animation: open ? `rc-mi .4s ease-out forwards` : "none",
                  }}
                >
                  <span aria-hidden="true">←</span> Volver
                </button>
              <nav>
                {DESKTOP_LINKS.map(([href, label], i) => {
                  const isActive = pathname === href || pathname.startsWith(href + "/");
                  const isEsp = href === "/especialidades";

                  /* ── Especialidades: abre el submenú ── */
                  if (isEsp) return (
                    <div key={href} style={{
                      opacity: 0,
                      animation: open ? `rc-mi .4s ease-out forwards` : "none",
                      animationDelay: open ? `${i * 0.045}s` : "0s",
                    }}>
                      <button
                        onClick={() => setDrawerView("especialidades")}
                        className={`rc-mob-link${isActive ? " is-active" : ""}`}
                        style={{
                          width: "100%",
                          display: "grid", gridTemplateColumns: "44px 1fr 28px", gap: 8,
                          alignItems: "center",
                          padding: "17px 0",
                          borderTop: "1px solid rgba(255,255,255,.08)",
                          border: "none", background: "none", cursor: "pointer", textAlign: "left",
                        }}
                      >
                        <span className="rc-mob-num" style={{
                          fontFamily: "var(--font-mono, monospace)", fontSize: 12,
                        }}>0{i + 1}</span>
                        <span className="rc-mob-label" style={{
                          fontFamily: "var(--font-serif)", fontSize: 19, fontWeight: 500,
                        }}>{label}</span>
                        <span className="rc-mob-arrow" style={{ fontSize: 14, textAlign: "right" as const }}>›</span>
                      </button>
                    </div>
                  );

                  /* ── Enlace regular ── */
                  return (
                    <Link key={href} href={href} onClick={() => setOpen(false)}
                      className={`rc-mob-link${isActive ? " is-active" : ""}`}
                      style={{
                      display: "grid", gridTemplateColumns: "44px 1fr 28px", gap: 8,
                      alignItems: "center", padding: "17px 0",
                      borderTop: "1px solid rgba(255,255,255,.08)",
                      textDecoration: "none",
                      opacity: 0,
                      animation: open ? `rc-mi .4s ease-out forwards` : "none",
                      animationDelay: open ? `${i * 0.045}s` : "0s",
                    }}>
                      <span className="rc-mob-num" style={{
                        fontFamily: "var(--font-mono, monospace)", fontSize: 12,
                      }}>0{i + 1}</span>
                      <span className="rc-mob-label" style={{
                        fontFamily: "var(--font-serif)", fontSize: 19, fontWeight: 500,
                      }}>{label}</span>
                      <span className="rc-mob-arrow" style={{
                        fontSize: 14, textAlign: "right" as const,
                      }}>›</span>
                    </Link>
                  );
                })}
              </nav>
              </>
            )}

            {drawerView === "especialidades" && (
              <div>
                <button
                  onClick={() => setDrawerView("main")}
                  style={{
                    display: "flex", alignItems: "center", gap: 8,
                    background: "none", border: "none", cursor: "pointer", padding: 0,
                    marginBottom: 22,
                    color: "var(--premium-gold)",
                    fontFamily: "var(--font-sans, system-ui)", fontSize: 14, fontWeight: 600,
                  }}
                >
                  <span aria-hidden="true">←</span> Volver
                </button>

                <h2 style={{
                  fontFamily: "var(--font-serif)", fontWeight: 700,
                  fontSize: 26, color: "#fff", marginBottom: 18,
                }}>Especialidades</h2>

                <div style={{
                  display: "flex", alignItems: "center", gap: 8, marginBottom: 22,
                  fontFamily: "var(--font-mono, monospace)", fontSize: 12,
                  color: "rgba(255,255,255,.4)",
                }}>
                  <span style={{ display: "inline-flex", color: "rgba(255,255,255,.4)" }}><HomeIcon /></span>
                  <button onClick={() => setDrawerView("main")} style={{
                    background: "none", border: "none", padding: 0, cursor: "pointer",
                    color: "rgba(255,255,255,.4)", fontFamily: "inherit", fontSize: "inherit",
                  }}>Menú</button>
                  <span>/</span>
                  <span style={{ color: "var(--premium-gold)" }}>Especialidades</span>
                </div>

                <div style={{
                  display: "flex", gap: 14, alignItems: "flex-start",
                  padding: "16px 18px", marginBottom: 26,
                  borderLeft: `2px solid ${R}`, background: "rgba(255,255,255,.03)",
                }}>
                  <span aria-hidden="true" style={{ color: "var(--premium-gold)", flexShrink: 0, marginTop: 1 }}><UndoIcon /></span>
                  <div>
                    <div style={{ color: "var(--premium-gold)", fontSize: 14, fontWeight: 600, marginBottom: 4 }}>
                      Navegación sin salir del menú.
                    </div>
                    <div style={{ color: "rgba(255,255,255,.5)", fontSize: 13, lineHeight: 1.5 }}>
                      Volver al menú anterior.
                    </div>
                  </div>
                </div>

                <div>
                  {RC_AREAS.map((a, i) => (
                    <Link key={a.slug} href={`/especialidades/${a.slug}`} onClick={() => setOpen(false)}
                      style={{
                        display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12,
                        padding: "16px 0",
                        borderTop: "1px solid rgba(255,255,255,.08)",
                        textDecoration: "none",
                        opacity: 0,
                        animation: open ? `rc-mi .4s ease-out forwards` : "none",
                        animationDelay: open ? `${i * 0.045}s` : "0s",
                      }}>
                      <span style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <span aria-hidden="true" style={{ color: R, fontSize: 9 }}>◆</span>
                        <span style={{ fontFamily: "var(--font-serif)", fontSize: 17, color: "#fff" }}>{a.t}</span>
                      </span>
                      <span style={{ color: "rgba(255,255,255,.35)" }}>›</span>
                    </Link>
                  ))}
                  <div style={{ borderTop: "1px solid rgba(255,255,255,.08)" }}/>
                </div>
              </div>
            )}

            {/* Bottom CTA */}
            <div style={{
              marginTop: 32,
              opacity: 0,
              animation: open ? `rc-mi .4s ease-out forwards` : "none",
              animationDelay: open ? `${DESKTOP_LINKS.length * 0.045 + 0.05}s` : "0s",
            }}>
              <a href={WA} target="_blank" rel="noopener" style={{
                display: "flex", justifyContent: "center", alignItems: "center", gap: 10,
                padding: "14px 20px",
                background: R, color: "#fff",
                fontFamily: "var(--font-sans, system-ui)", fontSize: 14, fontWeight: 700,
                borderRadius: "var(--r-sm, 6px)", textDecoration: "none",
              }}>
                Consulta por WhatsApp →
              </a>
            </div>
          </div>

          <style>{`
            @keyframes rc-mi {
              from { opacity: 0; transform: translateX(-10px); }
              to   { opacity: 1; transform: translateX(0); }
            }

            /* ── Items del drawer: acento rojo que se revela al interactuar ── */
            .rc-mob-link {
              position: relative;
              -webkit-tap-highlight-color: transparent;
              transition: background-color .32s cubic-bezier(.22,1,.36,1);
            }
            .rc-mob-link::before {
              content: '';
              position: absolute;
              left: 0; top: 10px; bottom: 10px;
              width: 3px; border-radius: 0 3px 3px 0;
              background: ${R};
              transform: scaleY(0);
              transform-origin: center;
              transition: transform .42s cubic-bezier(.22,1,.36,1);
            }
            .rc-mob-num   { color: ${R};                 transition: transform .32s cubic-bezier(.22,1,.36,1); }
            .rc-mob-label { color: #fff;                 transition: color .3s ease, transform .32s cubic-bezier(.22,1,.36,1); }
            .rc-mob-arrow { color: rgba(255,255,255,.35); transition: color .3s ease, transform .32s cubic-bezier(.22,1,.36,1); }

            .rc-mob-link:hover, .rc-mob-link:active, .rc-mob-link.is-active {
              background: rgba(255,255,255,.04);
            }
            .rc-mob-link:hover::before, .rc-mob-link:active::before, .rc-mob-link.is-active::before {
              transform: scaleY(1);
            }
            .rc-mob-link:hover  .rc-mob-num,   .rc-mob-link:active  .rc-mob-num                                            { transform: translateX(7px); }
            .rc-mob-link:hover  .rc-mob-label, .rc-mob-link:active  .rc-mob-label, .rc-mob-link.is-active .rc-mob-label    { color: var(--premium-gold); transform: translateX(7px); }
            .rc-mob-link:hover  .rc-mob-arrow, .rc-mob-link:active  .rc-mob-arrow, .rc-mob-link.is-active .rc-mob-arrow    { color: ${R}; transform: translateX(5px); }

            @media (prefers-reduced-motion: reduce) {
              .rc-mob-link, .rc-mob-link::before,
              .rc-mob-num, .rc-mob-label, .rc-mob-arrow {
                transition: none !important;
              }
            }
          `}</style>
        </div>
      )}

      {search && <SearchModal onClose={() => setSearch(false)} />}
    </>
  );
}
