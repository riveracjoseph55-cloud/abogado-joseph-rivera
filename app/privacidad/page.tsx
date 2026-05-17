import type { Metadata } from "next";
import Link from "next/link";
import SchemaOrg from "@/components/SchemaOrg";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE_URL, SITE_NAME, OG_IMAGE, CONTACT } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Política de privacidad de Rivera Cheves & Asociados. Tratamiento de datos personales conforme a la Ley 8968 de Costa Rica (PRODHAB).",
  alternates: { canonical: `${SITE_URL}/privacidad` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/privacidad`,
    title: `Política de Privacidad | ${SITE_NAME}`,
    description: "Tratamiento de datos personales conforme a Ley 8968 de Costa Rica.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
};

const lastUpdate = "16 de mayo de 2026";

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/privacidad`,
  name: "Política de Privacidad",
  url: `${SITE_URL}/privacidad`,
  inLanguage: "es-CR",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#legalservice` },
  dateModified: "2026-05-16",
};

export default function PrivacidadPage() {
  return (
    <>
      <SchemaOrg data={pageSchema} />
      <div className="rc-page">
        <section style={{ background: "var(--paper)", padding: "clamp(48px,7vw,100px) 0" }}>
          <div className="rc-wrap" style={{ maxWidth: 820 }}>
            <Breadcrumbs trail={[{ name: "Privacidad", href: "/privacidad" }]} />
            <div className="rc-eyebrow" style={{ marginBottom: 20 }}>Información legal · Ley 8968</div>
            <h1 className="rc-h1" style={{ marginBottom: 24 }}>
              Política de <em className="rc-em">Privacidad</em>
            </h1>
            <p className="rc-meta" style={{ marginBottom: 48 }}>Última actualización: {lastUpdate}</p>

            <div className="legal-prose">
              <p>
                Rivera Cheves &amp; Asociados (en adelante, &ldquo;el Bufete&rdquo;) respeta su privacidad y se
                compromete a proteger sus datos personales conforme a la <strong>Ley N° 8968 de Protección
                de la Persona frente al Tratamiento de sus Datos Personales</strong> de Costa Rica y su
                reglamento, así como las directrices de la Agencia de Protección de Datos de los Habitantes
                (PRODHAB).
              </p>

              <h2>1. Responsable del tratamiento</h2>
              <p>
                El responsable del tratamiento de sus datos personales es <strong>Rivera Cheves &amp;
                Asociados</strong>, con domicilio en {CONTACT.address}, {CONTACT.city}, {CONTACT.country}.
                Para cualquier consulta sobre el tratamiento de sus datos, puede escribir a{" "}
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
              </p>

              <h2>2. Datos que recopilamos</h2>
              <p>Recabamos los datos que usted nos facilita voluntariamente a través de:</p>
              <ul>
                <li><strong>Formulario de contacto:</strong> nombre, correo electrónico, teléfono, área legal de interés y descripción de su consulta.</li>
                <li><strong>WhatsApp:</strong> número telefónico, nombre y contenido del mensaje.</li>
                <li><strong>Correo electrónico:</strong> cualquier dato que voluntariamente nos comunique.</li>
                <li><strong>Navegación:</strong> dirección IP, tipo de navegador, sistema operativo y páginas visitadas (datos técnicos analíticos).</li>
              </ul>

              <h2>3. Finalidad del tratamiento</h2>
              <p>Sus datos son tratados con las siguientes finalidades:</p>
              <ul>
                <li>Atender su consulta legal y enviarle una respuesta personalizada.</li>
                <li>Evaluar la viabilidad de prestarle servicios de asesoría jurídica.</li>
                <li>Establecer y gestionar la relación abogado-cliente, en caso de contratación.</li>
                <li>Cumplir con obligaciones legales aplicables al ejercicio profesional del derecho en Costa Rica.</li>
                <li>Mejorar la calidad y seguridad de nuestra plataforma web (datos analíticos agregados).</li>
              </ul>

              <h2>4. Base legal del tratamiento</h2>
              <p>
                El tratamiento de sus datos se fundamenta en su <strong>consentimiento expreso</strong>
                {" "}otorgado al remitir el formulario de contacto o al iniciar comunicación con el Bufete
                (artículo 5 de la Ley 8968), así como en la <strong>relación contractual</strong>
                {" "}derivada de la prestación de servicios legales y en el <strong>cumplimiento de
                obligaciones legales</strong> que pesan sobre el ejercicio profesional del derecho.
              </p>

              <h2>5. Confidencialidad y secreto profesional</h2>
              <p>
                Toda la información que comparta con el Bufete está protegida por el{" "}
                <strong>secreto profesional</strong> consagrado en el Código de Deberes Jurídicos,
                Morales y Éticos del Profesional en Derecho del Colegio de Abogados y Abogadas de
                Costa Rica. No revelaremos su información salvo con su autorización expresa o por
                requerimiento judicial debidamente fundamentado.
              </p>

              <h2>6. Compartición con terceros</h2>
              <p>
                <strong>No vendemos, alquilamos ni cedemos sus datos personales a terceros con fines
                comerciales.</strong> Únicamente compartimos datos cuando es imprescindible para:
              </p>
              <ul>
                <li>Proveedores tecnológicos que prestan servicios al Bufete (hosting, correo, mensajería), bajo acuerdos de confidencialidad.</li>
                <li>Autoridades judiciales o administrativas competentes, cuando exista obligación legal.</li>
                <li>Peritos, asesores externos o profesionales asociados, en el marco estricto de su caso y previa autorización suya.</li>
              </ul>

              <h2>7. Conservación de los datos</h2>
              <p>
                Conservamos sus datos durante el tiempo necesario para cumplir con las finalidades
                indicadas. Los datos vinculados a expedientes jurídicos se conservan durante los
                plazos legalmente exigibles para el ejercicio profesional del derecho y la atención
                de eventuales reclamaciones.
              </p>

              <h2>8. Sus derechos (ARCO)</h2>
              <p>Conforme a la Ley 8968, usted tiene derecho a:</p>
              <ul>
                <li><strong>Acceder</strong> a sus datos personales que tratamos.</li>
                <li><strong>Rectificar</strong> datos inexactos o incompletos.</li>
                <li><strong>Cancelar</strong> sus datos cuando ya no sean necesarios.</li>
                <li><strong>Oponerse</strong> al tratamiento en supuestos específicos.</li>
                <li>Revocar su consentimiento en cualquier momento.</li>
              </ul>
              <p>
                Para ejercer cualquiera de estos derechos, envíe su solicitud a{" "}
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> indicando claramente el derecho
                que desea ejercer y adjuntando copia de su documento de identidad. Responderemos en un
                plazo máximo de cinco días hábiles. Si considera que su solicitud no ha sido atendida
                debidamente, puede presentar reclamo ante la <strong>PRODHAB</strong>{" "}
                (<a href="https://www.prodhab.go.cr" target="_blank" rel="noopener">prodhab.go.cr</a>).
              </p>

              <h2>9. Seguridad de los datos</h2>
              <p>
                Aplicamos medidas técnicas y organizativas razonables para proteger sus datos contra
                pérdida, acceso no autorizado, alteración o divulgación, incluyendo cifrado de las
                comunicaciones (HTTPS/TLS), controles de acceso y respaldos periódicos.
              </p>

              <h2>10. Cookies</h2>
              <p>
                Utilizamos cookies y tecnologías similares conforme se describe en nuestra{" "}
                <Link href="/cookies">Política de Cookies</Link>.
              </p>

              <h2>11. Cambios en esta política</h2>
              <p>
                Podemos actualizar esta política en cualquier momento. Cualquier cambio sustancial
                será notificado en esta misma página con la fecha de última actualización al inicio
                del documento.
              </p>

              <h2>12. Contacto</h2>
              <p>
                Para cualquier consulta relacionada con sus datos personales y esta política:<br/>
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
