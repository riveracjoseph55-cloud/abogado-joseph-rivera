import Script from "next/script";

export default function GoogleAnalytics({ id }: { id: string }) {
  if (!id) return null;
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          // Consent Mode v2 — denegado por defecto hasta que el usuario acepte
          gtag('consent', 'default', {
            ad_storage: 'denied',
            analytics_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            wait_for_update: 500,
          });
          gtag('js', new Date());
          gtag('config', '${id}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
