import type { Metadata } from "next";
import Link from "next/link";
import SchemaOrg from "@/components/SchemaOrg";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE_URL, SITE_NAME, OG_IMAGE, CONTACT } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description:
    "Política de cookies del sitio web de Rivera Cheves & Asociados. Cookies utilizadas, finalidad, duración y cómo gestionarlas.",
  alternates: { canonical: `${SITE_URL}/cookies` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/cookies`,
    title: `Política de Cookies | ${SITE_NAME}`,
    description: "Información sobre las cookies que utiliza este sitio y cómo gestionarlas.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  robots: { index: false, follow: false },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/cookies`,
  name: "Política de Cookies",
  url: `${SITE_URL}/cookies`,
  inLanguage: "es-CR",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  dateModified: "2026-05-16",
};

export default function CookiesPage() {
  return (
    <>
      <SchemaOrg data={pageSchema} />
      <div className="rc-page">
        <section style={{ background: "var(--paper)", padding: "clamp(48px,7vw,100px) 0" }}>
          <div className="rc-wrap" style={{ maxWidth: 820 }}>
            <Breadcrumbs trail={[{ name: "Cookies", href: "/cookies" }]} />
            <div className="rc-eyebrow" style={{ marginBottom: 20 }}>Información legal</div>
            <h1 className="rc-h1" style={{ marginBottom: 24 }}>
              Política de <em className="rc-em">Cookies</em>
            </h1>
            <p className="rc-meta" style={{ marginBottom: 48 }}>Última actualización: 16 de mayo de 2026</p>

            <div className="legal-prose">
              <h2>1. ¿Qué son las cookies?</h2>
              <p>
                Las cookies son pequeños archivos de texto que los sitios web almacenan en su
                dispositivo (computadora, móvil o tableta) al visitarlos. Permiten reconocer su
                navegador en visitas sucesivas, recordar preferencias y obtener información agregada
                sobre el uso del sitio.
              </p>

              <h2>2. Cookies que utilizamos</h2>

              <h3 style={{ marginTop: 24 }}>2.1 Cookies estrictamente necesarias</h3>
              <p>
                Son imprescindibles para el correcto funcionamiento del Sitio. No requieren su
                consentimiento. Incluyen, entre otras:
              </p>
              <ul>
                <li><strong>Sesión:</strong> mantienen activa su navegación durante la visita.</li>
                <li><strong>Seguridad:</strong> protegen contra ataques CSRF y similares.</li>
                <li><strong>Preferencias de consentimiento:</strong> recuerdan su elección sobre cookies opcionales.</li>
              </ul>

              <h3 style={{ marginTop: 24 }}>2.2 Cookies de rendimiento y analítica</h3>
              <p>
                Recopilan información agregada y anónima sobre cómo los visitantes utilizan el Sitio
                (páginas más visitadas, tiempo de permanencia, navegador, dispositivo). Nos permiten
                mejorar la experiencia. Solo se activan con su consentimiento.
              </p>
              <ul>
                <li>
                  <strong>Google Analytics 4</strong> (_ga, _ga_*): proveedor Google LLC. Finalidad:
                  estadísticas de uso anonimizadas. Duración: hasta 2 años. Más información en{" "}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">la política de privacidad de Google</a>.
                </li>
              </ul>

              <h3 style={{ marginTop: 24 }}>2.3 Cookies de terceros</h3>
              <p>
                Cuando carga contenidos embebidos de plataformas externas (WhatsApp, TikTok,
                Google Maps), dichas plataformas pueden instalar sus propias cookies. Estas se
                rigen por las políticas de los respectivos proveedores.
              </p>

              <h2>3. Base legal del uso de cookies</h2>
              <p>
                Las cookies estrictamente necesarias se basan en el interés legítimo del Bufete en
                prestar un Sitio funcional y seguro. Las cookies analíticas y de terceros se basan
                en su <strong>consentimiento expreso</strong>, otorgado a través del banner de
                consentimiento que aparece al acceder al Sitio por primera vez.
              </p>

              <h2>4. Cómo gestionar o desactivar cookies</h2>
              <p>
                Puede gestionar sus preferencias en cualquier momento de tres maneras:
              </p>
              <ul>
                <li>
                  <strong>Banner del Sitio:</strong> haga click en &ldquo;Cookies&rdquo; en el pie de
                  página para volver a configurar sus preferencias.
                </li>
                <li>
                  <strong>Configuración del navegador:</strong> puede bloquear o eliminar cookies
                  desde la configuración de su navegador. Tenga presente que esto puede afectar la
                  funcionalidad del Sitio.
                </li>
                <li>
                  <strong>Opt-out específico:</strong> Google ofrece un{" "}
                  <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener">complemento de inhabilitación de Google Analytics</a>.
                </li>
              </ul>

              <h2>5. Actualizaciones</h2>
              <p>
                Esta política puede actualizarse cuando incorporemos nuevas herramientas o cambien
                las existentes. La fecha de última actualización aparece al inicio del documento.
              </p>

              <h2>6. Más información</h2>
              <p>
                Para mayor información sobre cómo tratamos sus datos, consulte nuestra{" "}
                <Link href="/privacidad">Política de Privacidad</Link> y los{" "}
                <Link href="/terminos">Términos y Condiciones</Link>.
              </p>
              <p>
                Para dudas: <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
