/**
 * RichText — renderiza texto plano con soporte para **negrita**.
 * Uso en data.ts: envolver frases clave con doble asterisco: **texto clave**
 */
export default function RichText({
  text,
  as: Tag = "p",
  style,
  className,
}: {
  text: string;
  as?: "p" | "span" | "div";
  style?: React.CSSProperties;
  className?: string;
}) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return (
    <Tag style={style} className={className}>
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={i} style={{ fontWeight: 700, color: "inherit" }}>
            {part.slice(2, -2)}
          </strong>
        ) : (
          part
        )
      )}
    </Tag>
  );
}
