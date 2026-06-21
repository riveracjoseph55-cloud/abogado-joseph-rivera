"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { WA, RC_AREAS } from "@/lib/data";
import SearchModal from "@/components/SearchModal";

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

const MOBILE_LINKS = [
  ["/quien",          "Quién es"],
  ["/casos",          "Casos"],
  ["/libro",          "Libro"],
  ["/especialidades", "Especialidades"],
  ["/prensa",         "Prensa"],
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

  useEffect(() => {
    setOpen(false);
    setExpandSpec(false);
  }, [pathname]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const logoH = scrolled ? 64 : 104;
  const utilH = scrolled ? 0 : 40;

  // Header height for drawer top padding (so content appears below header)
  const headerH = scrolled ? 96 : 200;

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
              <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
                <span style={{ opacity: .55 }}>ES</span>
                <span style={{ opacity: .3 }}>|</span>
                <a
                  href={`https://translate.google.com/translate?sl=es&tl=en&u=https://abogadojosephrivera.com${pathname}`}
                  target="_blank" rel="noopener"
                  style={{ color: "#fff", fontWeight: 600 }}
                  title="View in English"
                >EN</a>
              </span>
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
              paddingLeft: 22,
              borderLeft: "1px solid rgba(255,255,255,.25)",
              display: "flex", flexDirection: "column", gap: 9,
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
                    className={`rc-nav-link${isActive ? " is-active" : ""}`}
                  >
                    <span className="rc-nav-label">{label}</span>
                  </Link>
                );
              })}

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
            <div style={{ display: "flex", alignItems: "center", gap: 4, flexShrink: 0 }}>
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
            height: 2px; background: #fff;
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
            background: #fff; color: ${R};
            font-family: var(--font-sans, system-ui); font-size: 13px; font-weight: 700;
            border-radius: 7px; text-decoration: none;
            display: inline-flex; align-items: center; gap: 7px;
            box-shadow: 0 0 0 0 rgba(255,255,255,0);
            transition: background-color .25s ease, color .25s ease, transform .25s cubic-bezier(.22,1,.36,1), box-shadow .3s ease;
          }
          .rc-nav-cta:hover {
            background: #0d0d0d; color: #fff;
            transform: translateY(-2px);
            box-shadow: 0 8px 22px rgba(0,0,0,.28);
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

      {/* ── Mobile drawer — white panel, below sticky header ─────────────────
          zIndex 45 < header zIndex 50 so the red header always shows on top  */}
      {mobile && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 45,
          background: "#fff",
          pointerEvents: open ? "auto" : "none",
          opacity: open ? 1 : 0,
          transform: open ? "translateY(0)" : "translateY(-8px)",
          transition: "opacity .3s ease, transform .3s ease",
          overflowY: "auto",
          paddingTop: headerH,
        }}>
          <div style={{ padding: "20px var(--pad-x, 24px) 40px" }}>

            {/* Section label */}
            <div style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              marginBottom: 8,
              fontFamily: "var(--font-mono, monospace)", fontSize: 10,
              letterSpacing: ".14em", textTransform: "uppercase",
              color: "rgba(0,0,0,.35)",
            }}>
              <span>Secciones</span>
              <span>{String(MOBILE_LINKS.length).padStart(2, "0")}</span>
            </div>

            {/* Nav list */}
            <nav>
              {MOBILE_LINKS.map(([href, label], i) => {
                const isActive = pathname === href || pathname.startsWith(href + "/");
                const isEsp = href === "/especialidades";
                const isPrensa = href === "/prensa";

                /* ── Especialidades: expandable ── */
                if (isEsp) return (
                  <div key={href} style={{
                    opacity: 0,
                    animation: open ? `rc-mi .4s ease-out forwards` : "none",
                    animationDelay: open ? `${i * 0.045}s` : "0s",
                  }}>
                    <button
                      onClick={() => setExpandSpec(e => !e)}
                      className={`rc-mob-link${isActive || expandSpec ? " is-active" : ""}`}
                      style={{
                        width: "100%",
                        display: "grid", gridTemplateColumns: "44px 1fr 28px", gap: 8,
                        alignItems: "center",
                        padding: "17px 0",
                        borderTop: "1px solid rgba(0,0,0,.07)",
                        border: "none", cursor: "pointer", textAlign: "left",
                      }}
                    >
                      <span className="rc-mob-num" style={{
                        fontFamily: "var(--font-mono, monospace)", fontSize: 12,
                      }}>0{i + 1}</span>
                      <span className="rc-mob-label" style={{
                        fontFamily: "var(--font-sans, system-ui)", fontSize: 19, fontWeight: 500,
                      }}>{label}</span>
                      <span className="rc-mob-plus" style={{
                        fontSize: 18, color: isActive || expandSpec ? R : "rgba(0,0,0,.3)", textAlign: "right" as const,
                        display: "inline-block",
                        transform: expandSpec ? "rotate(45deg)" : "none",
                      }}>+</span>
                    </button>

                    {expandSpec && (
                      <div style={{
                        borderTop: "1px solid rgba(0,0,0,.05)",
                        background: "rgba(0,0,0,.02)",
                        paddingBottom: 6,
                      }}>
                        <Link href="/especialidades" onClick={() => setOpen(false)} style={{
                          display: "block", padding: "9px 0 9px 52px",
                          fontFamily: "var(--font-mono, monospace)", fontSize: 10,
                          letterSpacing: ".12em", textTransform: "uppercase",
                          color: "rgba(0,0,0,.4)", textDecoration: "none",
                        }}>
                          ← Todas las áreas
                        </Link>
                        {RC_AREAS.map(a => (
                          <Link key={a.slug} href={`/especialidades/${a.slug}`} onClick={() => setOpen(false)} style={{
                            display: "grid", gridTemplateColumns: "52px 1fr 28px", gap: 8,
                            alignItems: "center", padding: "10px 0",
                            borderTop: "1px solid rgba(0,0,0,.05)",
                            fontFamily: "var(--font-sans, system-ui)", fontSize: 15, fontWeight: 400,
                            color: pathname === `/especialidades/${a.slug}` ? R : "#444",
                            textDecoration: "none",
                          }}>
                            <span style={{
                              fontFamily: "var(--font-mono, monospace)", fontSize: 10,
                              color: "rgba(0,0,0,.3)", paddingLeft: 52,
                            }}>{a.n}</span>
                            <span>{a.t}</span>
                            <span style={{ color: "rgba(0,0,0,.25)", fontSize: 14 }}>›</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );

                /* ── Prensa + Comunicados sub-link ── */
                if (isPrensa) return (
                  <div key={href} style={{
                    borderTop: "1px solid rgba(0,0,0,.07)",
                    opacity: 0,
                    animation: open ? `rc-mi .4s ease-out forwards` : "none",
                    animationDelay: open ? `${i * 0.045}s` : "0s",
                  }}>
                    <Link href={href} onClick={() => setOpen(false)}
                      className={`rc-mob-link${isActive ? " is-active" : ""}`}
                      style={{
                      display: "grid", gridTemplateColumns: "44px 1fr 28px", gap: 8,
                      alignItems: "center", padding: "17px 0",
                      textDecoration: "none",
                    }}>
                      <span className="rc-mob-num" style={{
                        fontFamily: "var(--font-mono, monospace)", fontSize: 12,
                      }}>0{i + 1}</span>
                      <span className="rc-mob-label" style={{
                        fontFamily: "var(--font-sans, system-ui)", fontSize: 19, fontWeight: 500,
                      }}>{label}</span>
                      <span className="rc-mob-arrow" style={{ fontSize: 14, textAlign: "right" as const }}>›</span>
                    </Link>
                    <Link href="/comunicados" onClick={() => setOpen(false)} style={{
                      display: "grid", gridTemplateColumns: "52px 1fr 28px", gap: 8,
                      alignItems: "center", padding: "10px 0",
                      borderTop: "1px solid rgba(0,0,0,.05)",
                      background: "rgba(0,0,0,.02)",
                      fontFamily: "var(--font-sans, system-ui)", fontSize: 15, fontWeight: 400,
                      color: pathname.startsWith("/comunicados") ? R : "#555",
                      textDecoration: "none",
                    }}>
                      <span style={{
                        fontFamily: "var(--font-mono, monospace)", fontSize: 10,
                        color: "rgba(0,0,0,.3)", textAlign: "center" as const,
                      }}>→</span>
                      <span>Comunicados</span>
                      <span style={{ color: "rgba(0,0,0,.2)", fontSize: 14 }}>›</span>
                    </Link>
                  </div>
                );

                /* ── Regular link ── */
                return (
                  <Link key={href} href={href} onClick={() => setOpen(false)}
                    className={`rc-mob-link${isActive ? " is-active" : ""}`}
                    style={{
                    display: "grid", gridTemplateColumns: "44px 1fr 28px", gap: 8,
                    alignItems: "center", padding: "17px 0",
                    borderTop: "1px solid rgba(0,0,0,.07)",
                    textDecoration: "none",
                    opacity: 0,
                    animation: open ? `rc-mi .4s ease-out forwards` : "none",
                    animationDelay: open ? `${i * 0.045}s` : "0s",
                  }}>
                    <span className="rc-mob-num" style={{
                      fontFamily: "var(--font-mono, monospace)", fontSize: 12,
                    }}>0{i + 1}</span>
                    <span className="rc-mob-label" style={{
                      fontFamily: "var(--font-sans, system-ui)", fontSize: 19, fontWeight: 500,
                    }}>{label}</span>
                    <span className="rc-mob-arrow" style={{
                      fontSize: 14, textAlign: "right" as const,
                    }}>›</span>
                  </Link>
                );
              })}
              <div style={{ borderTop: "1px solid rgba(0,0,0,.07)" }}/>
            </nav>

            {/* Bottom CTA */}
            <div style={{
              marginTop: 28,
              opacity: 0,
              animation: open ? `rc-mi .4s ease-out forwards` : "none",
              animationDelay: open ? `${MOBILE_LINKS.length * 0.045 + 0.05}s` : "0s",
            }}>
              <a href={WA} target="_blank" rel="noopener" style={{
                display: "flex", justifyContent: "center", alignItems: "center", gap: 10,
                marginBottom: 18, padding: "14px 20px",
                background: R, color: "#fff",
                fontFamily: "var(--font-sans, system-ui)", fontSize: 14, fontWeight: 700,
                borderRadius: "var(--r-sm, 6px)", textDecoration: "none",
              }}>
                Consulta por WhatsApp →
              </a>
              <div style={{
                display: "flex", flexWrap: "wrap", gap: "6px 18px",
                fontFamily: "var(--font-mono, monospace)", fontSize: 10,
                letterSpacing: ".12em", textTransform: "uppercase",
                color: "rgba(0,0,0,.4)",
              }}>
                <a href="tel:+50689980112" style={{ color: "rgba(0,0,0,.4)" }}>8998-0112</a>
                <span style={{ opacity: .5 }}>·</span>
                <a href="mailto:jriveracheves@gmail.com" style={{ color: "rgba(0,0,0,.4)" }}>Correo</a>
                <span style={{ opacity: .5 }}>·</span>
                <span>San José, CR</span>
                <span style={{ opacity: .5 }}>·</span>
                <a
                  href={`https://translate.google.com/translate?sl=es&tl=en&u=https://abogadojosephrivera.com${pathname}`}
                  target="_blank" rel="noopener"
                  style={{ color: R, fontWeight: 600 }}
                >EN →</a>
              </div>
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
            .rc-mob-num   { color: rgba(0,0,0,.35); transition: color .3s ease, transform .32s cubic-bezier(.22,1,.36,1); }
            .rc-mob-label { color: #111;            transition: color .3s ease, transform .32s cubic-bezier(.22,1,.36,1); }
            .rc-mob-arrow { color: rgba(0,0,0,.28);  transition: color .3s ease, transform .32s cubic-bezier(.22,1,.36,1); }

            .rc-mob-link:hover, .rc-mob-link:active, .rc-mob-link.is-active {
              background: rgba(126,1,2,.05);
            }
            .rc-mob-link:hover::before, .rc-mob-link:active::before, .rc-mob-link.is-active::before {
              transform: scaleY(1);
            }
            .rc-mob-link:hover  .rc-mob-num,   .rc-mob-link:active  .rc-mob-num,   .rc-mob-link.is-active .rc-mob-num   { color: ${R}; transform: translateX(7px); }
            .rc-mob-link:hover  .rc-mob-label, .rc-mob-link:active  .rc-mob-label, .rc-mob-link.is-active .rc-mob-label { color: ${R}; transform: translateX(7px); }
            .rc-mob-link:hover  .rc-mob-arrow, .rc-mob-link:active  .rc-mob-arrow, .rc-mob-link.is-active .rc-mob-arrow { color: ${R}; transform: translateX(5px); }

            /* El "+" de Especialidades sigue su estado de expansión */
            .rc-mob-plus { transition: color .3s ease, transform .28s ease; }

            @media (prefers-reduced-motion: reduce) {
              .rc-mob-link, .rc-mob-link::before,
              .rc-mob-num, .rc-mob-label, .rc-mob-arrow, .rc-mob-plus {
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
