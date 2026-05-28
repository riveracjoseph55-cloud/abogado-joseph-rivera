"use client";
import { useState } from "react";

type Props = { q: string; a: string; idx: number; first: boolean };

export default function FaqItem({ q, a, idx, first }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{
      borderTop: first ? "1px solid var(--hairline)" : "none",
      borderBottom: "1px solid var(--hairline)",
    }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "40px 1fr 32px",
          gap: 16,
          alignItems: "start",
          padding: "clamp(20px,2.6vw,30px) 0",
          textAlign: "left",
        }}
      >
        <span className="rc-meta" style={{ color: "var(--r)", paddingTop: 4 }}>
          {String(idx + 1).padStart(2, "0")}
        </span>
        <span style={{
          fontFamily: "var(--font-sans, system-ui, sans-serif)",
          fontSize: "clamp(17px,1.4vw,21px)",
          fontWeight: 500,
          color: "var(--ink)",
          letterSpacing: "-0.005em",
          lineHeight: 1.4,
        }}>
          {q}
        </span>
        <span style={{
          fontSize: 24,
          color: "var(--r)",
          textAlign: "right",
          transition: "transform .3s var(--ease)",
          transform: open ? "rotate(45deg)" : "rotate(0deg)",
          lineHeight: 1,
          display: "block",
        }}>
          +
        </span>
      </button>
      <div style={{
        display: "grid",
        gridTemplateColumns: "40px 1fr 32px",
        gap: 16,
        maxHeight: open ? 600 : 0,
        overflow: "hidden",
        transition: "max-height .4s var(--ease)",
      }}>
        <div />
        <p style={{ fontSize: 16, color: "var(--fg-3)", lineHeight: 1.7, paddingBottom: 28 }}>
          {a}
        </p>
        <div />
      </div>
    </div>
  );
}
