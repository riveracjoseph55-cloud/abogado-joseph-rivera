export default function Loading() {
  return (
    <div style={{
      minHeight: "70vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "var(--pad-y) var(--pad-x)",
    }}>
      <div style={{
        fontFamily: "var(--font-mono, monospace)",
        fontSize: 11,
        letterSpacing: ".12em",
        textTransform: "uppercase",
        color: "var(--fg-5)",
      }}>
        Cargando…
      </div>
    </div>
  );
}
