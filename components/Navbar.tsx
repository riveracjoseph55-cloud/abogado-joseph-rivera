"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { WA } from "@/lib/data";

const LINKS = [
  ["/quien",          "Quién es"],
  ["/casos",          "Casos"],
  ["/especialidades", "Especialidades"],
  ["/prensa",         "Prensa"],
  ["/atestados",      "Atestados"],
  ["/contacto",       "Contacto"],
] as const;

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [open, setOpen]           = useState(false);
  const [mobile, setMobile]       = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    const onResize = () => setMobile(window.innerWidth < 980);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    onScroll(); onResize();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const R = "#7e0102";

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      background: R,
      borderBottom: scrolled ? "1px solid rgba(0,0,0,.18)" : "1px solid transparent",
      boxShadow: scrolled ? "0 2px 24px rgba(0,0,0,.2)" : "none",
      transition: "box-shadow .35s ease, border-color .35s ease",
    }}>
      <div style={{
        maxWidth: "var(--max)", margin: "0 auto",
        padding: "14px var(--pad-x)",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        gap: 24,
      }}>
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <Image
            src="/images/logo.png"
            alt="Rivera Cheves & Asociados"
            width={200} height={72}
            style={{ height: 64, width: "auto", filter: "brightness(0) invert(1)", objectFit: "contain", flexShrink: 0 }}
            priority
          />
          <div style={{ lineHeight: 1.1 }}>
            <div style={{ fontFamily: "var(--font-sans, system-ui)", fontSize: 18, fontWeight: 600, letterSpacing: "-0.01em", color: "#fff" }}>
              Rivera Cheves
            </div>
            <div style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 10, letterSpacing: ".15em", textTransform: "uppercase", color: "rgba(255,255,255,.65)", marginTop: 4 }}>
              &amp; Asociados · Derecho Penal
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        {!mobile && (
          <nav style={{ display: "flex", alignItems: "center", gap: 2 }}>
            {LINKS.map(([href, label]) => (
              <Link key={href} href={href} style={{
                padding: "10px 14px",
                fontFamily: "var(--font-sans, system-ui)",
                fontSize: 13, fontWeight: 500,
                color: "rgba(255,255,255,.82)",
                transition: "color .2s ease",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#fff"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,.82)"; }}
              >
                {label}
              </Link>
            ))}
            <a href={WA} target="_blank" rel="noopener" style={{
              marginLeft: 16,
              padding: "10px 20px",
              background: "#fff", color: R,
              fontFamily: "var(--font-sans, system-ui)",
              fontSize: 13, fontWeight: 700,
              borderRadius: "var(--r-sm)",
              transition: "all .2s ease",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#f0f0f0"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#fff"; }}
            >
              Consulta →
            </a>
          </nav>
        )}

        {/* Hamburger */}
        {mobile && (
          <button onClick={() => setOpen(!open)} aria-label="Menú" style={{
            width: 44, height: 44,
            display: "flex", flexDirection: "column",
            justifyContent: "center", alignItems: "center", gap: 6,
          }}>
            <span style={{
              display: "block", width: 22, height: 1.5, background: "#fff",
              transition: "transform .3s ease, opacity .3s ease",
              transform: open ? "translateY(3.75px) rotate(45deg)" : "none",
            }}/>
            <span style={{
              display: "block", width: 22, height: 1.5, background: "#fff",
              transition: "transform .3s ease, opacity .3s ease",
              transform: open ? "translateY(-3.75px) rotate(-45deg)" : "none",
            }}/>
          </button>
        )}
      </div>

      {/* Mobile drawer */}
      {mobile && open && (
        <div style={{
          position: "fixed", top: 92, left: 0, right: 0, bottom: 0,
          background: R, padding: "24px var(--pad-x)", zIndex: 40,
          overflowY: "auto",
        }}>
          {LINKS.map(([href, label], i) => (
            <Link key={href} href={href} onClick={() => setOpen(false)} style={{
              display: "flex", alignItems: "baseline", justifyContent: "space-between",
              padding: "18px 0",
              borderBottom: "1px solid rgba(255,255,255,.15)",
              fontFamily: "var(--font-sans, system-ui)",
              fontSize: 22, fontWeight: 500,
              color: "rgba(255,255,255,.9)",
            }}>
              <span>{label}</span>
              <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 11, color: "rgba(255,255,255,.45)" }}>
                0{i + 1}
              </span>
            </Link>
          ))}
          <a href={WA} target="_blank" rel="noopener" style={{
            display: "flex", justifyContent: "center", alignItems: "center", gap: 10,
            marginTop: 32, padding: 16,
            background: "#fff", color: R,
            fontFamily: "var(--font-sans, system-ui)",
            fontSize: 14, fontWeight: 700,
            borderRadius: "var(--r-sm)",
          }}>
            Consulta por WhatsApp →
          </a>
        </div>
      )}
    </header>
  );
}
