"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { RC_AREAS } from "@/lib/data";

const R = "#7e0102";

export default function AreasExplorer() {
  const [active,   setActive]   = useState(0);
  const [expanded, setExpanded] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 860);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const a = RC_AREAS[active] ?? RC_AREAS[0];

  // ── Mobile: tappable accordion ─────────────────────────────────────────────
  if (isMobile) {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        {RC_AREAS.map((area, i) => {
          const open = expanded === i;
          return (
            <div key={area.slug} style={{ borderTop: "1px solid var(--hairline)" }}>
              <button
                onClick={() => setExpanded(open ? null : i)}
                style={{
                  width: "100%", display: "grid",
                  gridTemplateColumns: "44px 1fr 28px", gap: 14, alignItems: "center",
                  padding: "22px 0", textAlign: "left", cursor: "pointer",
                  background: "none", border: "none",
                }}
              >
                <span style={{
                  fontFamily: "var(--font-mono, monospace)", fontSize: 11,
                  letterSpacing: ".12em", textTransform: "uppercase" as const,
                  color: open ? R : "var(--fg-5)",
                }}>{area.n}</span>
                <span style={{
                  fontFamily: "var(--font-sans, system-ui)", fontSize: 19, fontWeight: 500,
                  letterSpacing: "-0.01em", color: open ? R : "#0d0d0d",
                  lineHeight: 1.25,
                }}>{area.t}</span>
                <span style={{
                  fontSize: 22, color: R, textAlign: "right" as const, lineHeight: 1,
                  transition: "transform .3s ease", display: "block",
                  transform: open ? "rotate(45deg)" : "none",
                }}>+</span>
              </button>
              <div style={{
                maxHeight: open ? 440 : 0, overflow: "hidden",
                transition: "max-height .4s ease",
              }}>
                <div style={{ paddingBottom: 26 }}>
                  <p style={{ fontSize: 15, color: "var(--fg-3)", lineHeight: 1.6, marginBottom: 18 }}>
                    {area.d.replace(/\*\*/g, "")}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 8, marginBottom: 22 }}>
                    {area.items.slice(0, 4).map(it => (
                      <span key={it} style={{
                        fontFamily: "var(--font-mono, monospace)", fontSize: 10,
                        letterSpacing: ".1em", textTransform: "uppercase" as const,
                        padding: "4px 10px",
                        border: "1px solid var(--hairline)",
                        color: "var(--fg-4)",
                      }}>{it}</span>
                    ))}
                  </div>
                  <Link href={`/especialidades/${area.slug}`} style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    padding: "10px 22px",
                    background: R, color: "#fff",
                    fontFamily: "var(--font-sans, system-ui)", fontSize: 13, fontWeight: 700,
                    textDecoration: "none",
                  }}>
                    Ver servicio →
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
        <div style={{ borderTop: "1px solid var(--hairline)" }}/>
      </div>
    );
  }

  // ── Desktop: split panel ───────────────────────────────────────────────────
  return (
    <div style={{
      display: "grid", gridTemplateColumns: "1fr 1.1fr",
      gap: "clamp(32px,4vw,72px)", alignItems: "stretch",
    }}>
      {/* List */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        {RC_AREAS.map((area, i) => {
          const on = active === i;
          return (
            <Link
              key={area.slug}
              href={`/especialidades/${area.slug}`}
              onMouseEnter={() => setActive(i)}
              style={{
                display: "grid", gridTemplateColumns: "56px 1fr 24px",
                gap: 18, alignItems: "center",
                padding: "clamp(16px,1.6vw,22px) 0",
                borderTop: "1px solid var(--hairline)",
                cursor: "pointer", position: "relative",
                textDecoration: "none",
              }}
            >
              {/* active rail */}
              <span style={{
                position: "absolute", left: -12, top: "50%", transform: "translateY(-50%)",
                width: 3, height: on ? "62%" : "0%", background: R,
                transition: "height .3s ease",
              }}/>
              <span style={{
                fontFamily: "var(--font-mono, monospace)", fontSize: 11,
                letterSpacing: ".12em", textTransform: "uppercase" as const,
                color: on ? R : "var(--fg-5)", transition: "color .25s ease",
              }}>{area.n}</span>
              <span style={{
                fontFamily: "var(--font-sans, system-ui)",
                fontSize: "clamp(18px,1.7vw,24px)", fontWeight: on ? 600 : 500,
                letterSpacing: "-0.015em", lineHeight: 1.2,
                color: on ? "#0d0d0d" : "var(--fg-3)",
                transition: "color .25s ease",
              }}>{area.t}</span>
              <span style={{
                color: R, fontSize: 18, textAlign: "right" as const,
                opacity: on ? 1 : 0, transform: on ? "translateX(0)" : "translateX(-6px)",
                transition: "opacity .25s ease, transform .25s ease",
              }}>→</span>
            </Link>
          );
        })}
        <div style={{ borderTop: "1px solid var(--hairline)" }}/>
      </div>

      {/* Preview panel */}
      <div style={{
        background: "#0d0d0d", color: "#fff",
        padding: "clamp(32px,3.2vw,52px)",
        position: "relative", overflow: "hidden",
        display: "flex", flexDirection: "column", justifyContent: "space-between",
        minHeight: 480,
      }}>
        {/* giant number watermark */}
        <div aria-hidden="true" key={`n-${active}`} style={{
          position: "absolute", right: "-2vw", bottom: "-6vw",
          fontFamily: "var(--font-sans, system-ui)", fontWeight: 200,
          fontSize: "clamp(220px,24vw,360px)", lineHeight: 0.8,
          letterSpacing: "-0.04em", color: "rgba(255,255,255,.05)",
          pointerEvents: "none", userSelect: "none" as const,
          animation: "rc-page-in .5s ease-out",
        }}>{a.n}</div>

        <div key={`top-${active}`} style={{ position: "relative", animation: "rc-page-in .45s ease-out" }}>
          <div style={{
            fontFamily: "var(--font-mono, monospace)", fontSize: 11,
            letterSpacing: ".12em", textTransform: "uppercase" as const,
            color: R, marginBottom: 20,
          }}>
            Área {a.n} / 07
          </div>
          <h3 style={{
            fontFamily: "var(--font-sans, system-ui)", fontWeight: 500,
            fontSize: "clamp(28px,2.8vw,42px)", lineHeight: 1.08,
            letterSpacing: "-0.02em", color: "#fff", marginBottom: 22,
          }}>
            {a.pre}
            <em style={{
              fontFamily: "var(--font-serif, Georgia, 'Times New Roman', serif)",
              fontStyle: "italic", fontWeight: 400,
              color: "rgba(255,255,255,.6)",
            }}>{a.em}</em>
            {a.post}
          </h3>
          <p style={{
            fontSize: 15, lineHeight: 1.65, color: "rgba(255,255,255,.7)",
            maxWidth: "46ch",
          }}>{a.d.replace(/\*\*/g, "")}</p>
        </div>

        <div key={`bot-${active}`} style={{ position: "relative", animation: "rc-page-in .55s ease-out" }}>
          <div style={{
            display: "flex", flexWrap: "wrap" as const, gap: 8, marginBottom: 28,
            paddingTop: 24, borderTop: "1px solid rgba(255,255,255,.18)",
          }}>
            {a.items.slice(0, 5).map(it => (
              <span key={it} style={{
                fontFamily: "var(--font-mono, monospace)", fontSize: 10,
                letterSpacing: ".1em", textTransform: "uppercase" as const,
                padding: "4px 10px",
                border: "1px solid rgba(255,255,255,.25)",
                color: "rgba(255,255,255,.72)",
              }}>{it}</span>
            ))}
          </div>
          <Link href={`/especialidades/${a.slug}`} style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "12px 24px",
            background: R, color: "#fff",
            fontFamily: "var(--font-sans, system-ui)", fontSize: 13, fontWeight: 700,
            textDecoration: "none",
          }}>
            Ver servicio completo →
          </Link>
        </div>
      </div>
    </div>
  );
}
