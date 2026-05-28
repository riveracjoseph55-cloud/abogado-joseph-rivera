"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { RC_CASES } from "@/lib/data";

const R = "#7e0102";

const STATIC_PAGES = [
  { title: "Quién es Joseph Rivera",  href: "/quien",         desc: "Abogado penalista con más de 20 años de trayectoria" },
  { title: "Casos destacados",        href: "/casos",         desc: "Femicidios, crimen organizado y delitos financieros" },
  { title: "Especialidades",          href: "/especialidades",desc: "Áreas del derecho penal que cubre el bufete" },
  { title: "Prensa y publicaciones",  href: "/prensa",        desc: "Cobertura mediática nacional e internacional" },
  { title: "Atestados y formación",   href: "/atestados",     desc: "Currículo y credenciales académicas" },
  { title: "Contacto",                href: "/contacto",      desc: "Consulta gratuita con el bufete" },
];

const QUICK = ["Nadia Peraza", "Finca Lajas", "Femicidio", "Pro-bono", "Caso activo", "Junieysis"];

export default function SearchModal({ onClose }: { onClose: () => void }) {
  const [q, setQ]    = useState("");
  const inputRef     = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const needle = q.trim().toLowerCase();

  const results = needle.length < 2 ? [] : [
    ...RC_CASES
      .filter(c => {
        const hay = [
          c.name, c.location, c.year, c.status,
          c.summary ?? "", (c as any).hechos ?? "",
          ...((c.tags as string[]) ?? []),
        ].join(" ").toLowerCase();
        return hay.includes(needle);
      })
      .map(c => ({
        title: c.name,
        href:  `/casos/${c.slug}`,
        desc:  `${c.location} · ${c.year} · ${c.status}`,
        badge: "caso",
      })),
    ...STATIC_PAGES
      .filter(p => (p.title + " " + p.desc).toLowerCase().includes(needle))
      .map(p => ({ ...p, badge: "página" })),
  ];

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "fixed", inset: 0, zIndex: 200,
          background: "rgba(0,0,0,.52)",
          backdropFilter: "blur(5px)",
          WebkitBackdropFilter: "blur(5px)",
          animation: "rc-sm-fade .18s ease",
        }}
      />

      {/* Panel */}
      <div style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 201,
        background: "#fff",
        boxShadow: "0 8px 48px rgba(0,0,0,.2)",
        maxHeight: "80vh", display: "flex", flexDirection: "column",
        animation: "rc-sm-slide .22s ease",
      }}>

        {/* ── Input row ── */}
        <div style={{
          display: "flex", alignItems: "center", gap: 16,
          padding: "18px clamp(16px,4vw,48px)",
          borderBottom: "1px solid rgba(0,0,0,.08)",
        }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
            stroke={R} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
            aria-hidden="true">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <input
            ref={inputRef}
            value={q}
            onChange={e => setQ(e.target.value)}
            placeholder="Buscar casos, temas, especialidades…"
            aria-label="Buscar en el sitio"
            style={{
              flex: 1, border: "none", outline: "none",
              fontFamily: "var(--font-sans, system-ui)",
              fontSize: "clamp(16px,2vw,20px)",
              color: "#111", background: "transparent",
            }}
          />
          <button
            onClick={onClose}
            aria-label="Cerrar búsqueda"
            style={{
              padding: "5px 11px", cursor: "pointer",
              fontFamily: "var(--font-mono, monospace)",
              fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase",
              color: "rgba(0,0,0,.45)", border: "1px solid rgba(0,0,0,.15)",
              borderRadius: 4, background: "transparent",
            }}
          >
            Esc
          </button>
        </div>

        {/* ── Body ── */}
        <div style={{ overflowY: "auto", flex: 1 }}>

          {/* No results */}
          {needle.length >= 2 && results.length === 0 && (
            <p style={{
              padding: "32px clamp(16px,4vw,48px)",
              fontFamily: "var(--font-sans, system-ui)", fontSize: 15,
              color: "rgba(0,0,0,.45)",
            }}>
              Sin resultados para «{q}»
            </p>
          )}

          {/* Result list */}
          {results.length > 0 && (
            <ul style={{ listStyle: "none", padding: "8px 0", margin: 0 }}>
              {results.map((r, i) => (
                <li key={i}>
                  <Link
                    href={r.href}
                    onClick={onClose}
                    style={{
                      display: "flex", alignItems: "center", gap: 16,
                      padding: "14px clamp(16px,4vw,48px)",
                      borderBottom: "1px solid rgba(0,0,0,.06)",
                      background: "transparent",
                      transition: "background .15s ease",
                      textDecoration: "none",
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "#faf6f5"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; }}
                  >
                    <span style={{
                      flexShrink: 0, width: 7, height: 7, borderRadius: "50%",
                      background: r.badge === "caso" ? R : "rgba(0,0,0,.25)",
                    }}/>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{
                        fontFamily: "var(--font-sans, system-ui)",
                        fontSize: 15, fontWeight: 600, color: "#111",
                        overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                      }}>
                        {r.title}
                      </div>
                      <div style={{
                        fontFamily: "var(--font-sans, system-ui)",
                        fontSize: 13, color: "rgba(0,0,0,.5)", marginTop: 2,
                        overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                      }}>
                        {r.desc}
                      </div>
                    </div>
                    <span style={{
                      flexShrink: 0,
                      fontFamily: "var(--font-mono, monospace)", fontSize: 10,
                      letterSpacing: ".1em", textTransform: "uppercase",
                      color: "rgba(0,0,0,.35)", padding: "3px 8px",
                      border: "1px solid rgba(0,0,0,.12)", borderRadius: 3,
                    }}>
                      {r.badge}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}

          {/* Quick searches (shown when input is empty or <2 chars) */}
          {needle.length < 2 && (
            <div style={{ padding: "22px clamp(16px,4vw,48px) 32px" }}>
              <div style={{
                fontFamily: "var(--font-mono, monospace)", fontSize: 10,
                letterSpacing: ".14em", textTransform: "uppercase",
                color: "rgba(0,0,0,.35)", marginBottom: 14,
              }}>
                Búsquedas rápidas
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {QUICK.map(t => (
                  <button
                    key={t}
                    onClick={() => setQ(t)}
                    style={{
                      padding: "7px 14px", cursor: "pointer",
                      background: "rgba(0,0,0,.04)",
                      border: "1px solid rgba(0,0,0,.10)",
                      borderRadius: 20,
                      fontFamily: "var(--font-sans, system-ui)", fontSize: 13,
                      color: "rgba(0,0,0,.65)", transition: "background .15s ease",
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(0,0,0,.08)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(0,0,0,.04)"; }}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes rc-sm-fade  { from { opacity:0 }              to { opacity:1 } }
        @keyframes rc-sm-slide { from { transform:translateY(-12px);opacity:0 } to { transform:translateY(0);opacity:1 } }
      `}</style>
    </>
  );
}
