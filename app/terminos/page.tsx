import type { Metadata } from "next";
import Link from "next/link";
import SchemaOrg from "@/components/SchemaOrg";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE_URL, SITE_NAME, OG_IMAGE, CONTACT } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description:
    "Términos y condiciones de uso del sitio web de Rivera Cheves & Asociados. Naturaleza de la información, relación abogado-cliente y propiedad intelectual.",
  alternates: { canonical: `${SITE_URL}/terminos` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/terminos`,
    title: `Términos y Condiciones | ${SITE_NAME}`,
    description: "Términos legales de uso del sitio web del Bufete Rivera Cheves & Asociados.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  robots: { index: false, follow: false },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/terminos`,
  name: "Términos y Condiciones",
  url: `${SITE_URL}/terminos`,
  inLanguage: "es-CR",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#legalservice` },
  dateModified: "2026-05-16",
};

export default function TerminosPage() {
  return (
    <>
      <SchemaOrg data={pageSchema} />
      <div className="rc-page">
        <section style={{ background: "var(--paper)", padding: "clamp(48px,7vw,100px) 0" }}>
          <div className="rc-wrap" style={{ maxWidth: 820 }}>
            <Breadcrumbs trail={[{ name: "Términos", href: "/terminos" }]} />
            <div className="rc-eyebrow" style={{ marginBottom: 20 }}>Información legal</div>
            <h1 className="rc-h1" style={{ marginBottom: 24 }}>
              Términos y <em className="rc-em">Condiciones</em>
            </h1>
            <p className="rc-meta" style={{ marginBottom: 48 }}>Última actualización: 16 de mayo de 2026</p>

            <div className="legal-prose">
              <h2>1. Aceptación</h2>
              <p>
                El acceso y uso del sitio web <a href={SITE_URL}>{SITE_URL.replace("https://","")}</a>{" "}
                (en adelante, &ldquo;el Sitio&rdquo;), titularidad de Rivera Cheves &amp; Asociados
                (en adelante, &ldquo;el Bufete&rdquo;), implica la aceptación plena de los presentes
                términos. Si no está de acuerdo con alguno de ellos, abstenérese de utilizar el Sitio.
              </p>

              <h2>2. Naturaleza de la información publicada</h2>
              <p>
                Los contenidos publicados en el Sitio tienen únicamente carácter <strong>informativo
                y divulgativo</strong>. <strong>No constituyen asesoría legal vinculante</strong>{" "}
                ni dan origen, por sí solos, a una relación abogado-cliente. Cada situación jurídica
                requiere un análisis particular que solo puede brindarse mediante una consulta formal.
              </p>

              <h2>3. Relación abogado-cliente</h2>
              <p>
                La relación abogado-cliente con el Bufete se constituye únicamente mediante la
                celebración expresa de un contrato de servicios profesionales, conforme al Arancel
                de Honorarios del Colegio de Abogados y Abogadas de Costa Rica. El envío de un
                mensaje a través del formulario, correo o WhatsApp <strong>no genera por sí mismo
                vínculo profesional</strong>.
              </p>

              <h2>4. Confidencialidad</h2>
              <p>
                Toda comunicación que el usuario establezca con el Bufete a través de los canales del
                Sitio será tratada con la confidencialidad que ampara el secreto profesional del
                Código de Deberes Jurídicos, Morales y Éticos del Profesional en Derecho. No
                obstante, dado que las comunicaciones electrónicas pueden estar expuestas a riesgos,
                recomendamos no enviar información altamente sensible por medios no cifrados.
              </p>

              <h2>5. Propiedad intelectual</h2>
              <p>
                Todos los contenidos del Sitio (textos, imágenes, gráficos, diseño, código,
                fotografías, logotipos) son propiedad del Bufete o de sus respectivos titulares y
                están protegidos por la Ley de Derechos de Autor y Derechos Conexos (Ley 6683) de
                Costa Rica. Queda prohibida su reproducción total o parcial sin autorización expresa
                y por escrito.
              </p>

              <h2>6. Enlaces a terceros</h2>
              <p>
                El Sitio puede contener enlaces a recursos externos (medios de prensa, redes
                sociales, plataformas de mensajería). El Bufete no se responsabiliza por los
                contenidos, prácticas o políticas de dichos sitios.
              </p>

              <h2>7. Limitación de responsabilidad</h2>
              <p>
                El Bufete se exime de responsabilidad por los daños o perjuicios derivados de:
              </p>
              <ul>
                <li>Decisiones tomadas con base exclusiva en la información divulgativa del Sitio.</li>
                <li>Interrupciones, fallos técnicos o ataques al Sitio ajenos a nuestro control.</li>
                <li>Uso indebido de la información por parte de terceros.</li>
              </ul>

              <h2>8. Disponibilidad</h2>
              <p>
                Hacemos esfuerzos razonables para mantener el Sitio disponible y actualizado, pero
                no garantizamos la ausencia de interrupciones, errores u omisiones. El Bufete se
                reserva el derecho de modificar, suspender o discontinuar cualquier parte del Sitio
                sin previo aviso.
              </p>

              <h2>9. Datos personales</h2>
              <p>
                El tratamiento de los datos personales recabados a través del Sitio se rige por
                nuestra <Link href="/privacidad">Política de Privacidad</Link>, conforme a la Ley
                8968 de Protección de la Persona frente al Tratamiento de sus Datos Personales.
              </p>

              <h2>10. Cookies</h2>
              <p>
                El Sitio emplea cookies según se detalla en la{" "}
                <Link href="/cookies">Política de Cookies</Link>.
              </p>

              <h2>11. Ley aplicable y jurisdicción</h2>
              <p>
                Estos términos se rigen por las leyes de la <strong>República de Costa Rica</strong>.
                Cualquier controversia derivada del uso del Sitio se someterá a la jurisdicción
                exclusiva de los Tribunales de San José, Costa Rica.
              </p>

              <h2>12. Modificaciones</h2>
              <p>
                El Bufete se reserva el derecho de modificar los presentes términos en cualquier
                momento. Las modificaciones surtirán efecto desde su publicación en el Sitio. Se
                recomienda revisar esta página periódicamente.
              </p>

              <h2>13. Contacto</h2>
              <p>
                <strong>{SITE_NAME}</strong><br/>
                {CONTACT.address}, {CONTACT.city}, {CONTACT.country}<br/>
                Correo: <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a><br/>
                Teléfono / WhatsApp: <a href={`tel:${CONTACT.tel}`}>{CONTACT.telFmt}</a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
