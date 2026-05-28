/**
 * FacebookVideo — embeds a Facebook video using the official oembed iframe.
 * Usage: <FacebookVideo url="https://www.facebook.com/share/v/..." />
 */
export default function FacebookVideo({ url, label }: { url: string; label?: string }) {
  // Encode the FB video URL for the embed endpoint
  const encoded = encodeURIComponent(url);
  const src = `https://www.facebook.com/plugins/video.php?href=${encoded}&show_text=false&width=734&mute=false`;

  return (
    <section aria-label={label ?? "Video relacionado"} style={{ marginTop: 48 }}>
      {label && (
        <h2
          style={{
            fontSize: "clamp(1.15rem,2.2vw,1.4rem)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            marginBottom: 20,
          }}
        >
          {label}
        </h2>
      )}
      <div
        style={{
          position: "relative",
          paddingBottom: "56.25%",
          height: 0,
          overflow: "hidden",
          borderRadius: 8,
          background: "#000",
        }}
      >
        <iframe
          src={src}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            border: "none",
          }}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen
          title={label ?? "Video Facebook"}
          loading="lazy"
        />
      </div>
    </section>
  );
}
