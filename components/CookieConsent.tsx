"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "rc-cookie-consent";

type Consent = "accepted" | "rejected" | null;

function readConsent(): Consent {
  if (typeof window === "undefined") return null;
  const v = localStorage.getItem(STORAGE_KEY);
  return v === "accepted" || v === "rejected" ? v : null;
}

function applyConsent(consent: Consent) {
  // Google Analytics consent mode v2
  if (typeof window === "undefined") return;
  // @ts-expect-error gtag puede no existir si GA no está cargado
  if (typeof window.gtag === "function") {
    // @ts-expect-error - gtag global injected by GoogleAnalytics
    window.gtag("consent", "update", {
      ad_storage:         consent === "accepted" ? "granted" : "denied",
      analytics_storage:  consent === "accepted" ? "granted" : "denied",
      ad_user_data:       consent === "accepted" ? "granted" : "denied",
      ad_personalization: consent === "accepted" ? "granted" : "denied",
    });
  }
}

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const c = readConsent();
    if (c === null) {
      setShow(true);
    } else {
      applyConsent(c);
    }
  }, []);

  const choose = (choice: "accepted" | "rejected") => {
    localStorage.setItem(STORAGE_KEY, choice);
    applyConsent(choice);
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      className="cookie-banner"
      role="dialog"
      aria-live="polite"
      aria-label="Consentimiento de cookies"
    >
      <p>
        Utilizamos cookies para mejorar su experiencia y analizar el uso del sitio.
        Las analíticas solo se activan con su consentimiento. Más información en
        nuestra <Link href="/cookies">Política de Cookies</Link>.
      </p>
      <div className="actions">
        <button type="button" className="reject" onClick={() => choose("rejected")}>
          Rechazar
        </button>
        <button type="button" className="accept" onClick={() => choose("accepted")}>
          Aceptar
        </button>
      </div>
    </div>
  );
}
