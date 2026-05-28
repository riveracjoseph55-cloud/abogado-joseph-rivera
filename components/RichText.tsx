import { CSSProperties, ElementType, ReactNode } from "react";

/**
 * RichText — renders a string that may contain **bold** markers.
 * Parses **text** into <strong> tags. Safe: no dangerouslySetInnerHTML.
 *
 * Usage:
 *   <RichText text="Hola **mundo**" className="rc-body" style={{ marginBottom: 20 }} />
 *   <RichText text={data.d} as="span" />
 */

type Props = {
  text: string;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
};

function parseRich(text: string): ReactNode[] {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1
      ? <strong key={i} style={{ fontWeight: 700, color: "inherit" }}>{part}</strong>
      : part
  );
}

export default function RichText({ text, as: Tag = "p", className, style }: Props) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const El = Tag as any;
  return <El className={className} style={style}>{parseRich(text)}</El>;
}
