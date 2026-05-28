/**
 * TikTokVideo — embed de TikTok usando iframe oficial de TikTok embed v2.
 * Acepta la URL completa del video: https://www.tiktok.com/@user/video/ID
 */
export default function TikTokVideo({ url }: { url: string }) {
  const id = url.match(/video\/(\d+)/)?.[1] ?? "";

  if (!id) return null;

  return (
    <iframe
      src={`https://www.tiktok.com/embed/v2/${id}`}
      style={{
        width: 325,
        maxWidth: "100%",
        height: 575,
        border: "none",
        borderRadius: 12,
        display: "block",
      }}
      allow="fullscreen; web-share; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title={`TikTok @josephriveraabogado — video ${id}`}
      loading="lazy"
    />
  );
}
