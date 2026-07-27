import { CSSProperties, ElementType, ReactNode } from "react";

/**
 * RichText — renders a string that may contain **bold** and ++underline++ markers.
 * Parses **text** into <strong> and ++text++ into <u> (independent, nestable in either order).
 * Editorial-only markup: never applied automatically, only when the content itself
 * marks a fragment as important. Safe: no dangerouslySetInnerHTML.
 *
 * Usage:
 *   <RichText text="Hola **mundo**" className="rc-body" style={{ marginBottom: 20 }} />
 *   <RichText text="Se logró **++esto es clave++**" as="span" />
 */

type Props = {
  text: string;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
};

function parseUnderline(text: string, keyPrefix: string): ReactNode[] {
  const parts = text.split(/\+\+(.+?)\+\+/g);
  return parts.map((part, i) =>
    i % 2 === 1
      ? <u key={`${keyPrefix}-u${i}`} style={{ textDecorationColor: "currentColor", textUnderlineOffset: "3px" }}>{part}</u>
      : part
  );
}

function parseRich(text: string): ReactNode[] {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1
      ? <strong key={`b${i}`} style={{ fontWeight: 700, color: "inherit" }}>{parseUnderline(part, `b${i}`)}</strong>
      : parseUnderline(part, `p${i}`)
  );
}

export default function RichText({ text, as: Tag = "p", className, style }: Props) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const El = Tag as any;
  return <El className={className} style={style}>{parseRich(text)}</El>;
}
