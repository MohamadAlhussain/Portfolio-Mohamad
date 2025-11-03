export const metadata = {
  title: "Datenschutzerklärung - Mohamad Alhussain | Web Developer",
  description: "Datenschutzerklärung und Informationen zur Datenverarbeitung auf dieser Website",
  alternates: {
    canonical: "https://alhussain.tech/datenschutz/",
  },
};

export default function Datenschutz() {
  return (
    <section className="py-8 flex flex-col items-center justify-center min-h-[70vh] gap-8 animate-fade-in">
      <article className="w-full max-w-4xl">
        <h1 className="text-4xl font-extrabold gradient-text mb-6 text-center">
          Datenschutzerklärung
        </h1>
        
        <div className="text-secondary leading-relaxed space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-tertiary mb-3">1. Datenschutz auf einen Blick</h2>
            
            <h3 className="text-xl font-semibold text-tertiary mb-2 mt-4">Allgemeine Hinweise</h3>
            <p className="mb-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen 
              Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen 
              Sie persönlich identifiziert werden können.
            </p>

            <h3 className="text-xl font-semibold text-tertiary mb-2 mt-4">Datenerfassung auf dieser Website</h3>
            <p className="mb-4">
              <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong>
              <br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
              können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
            </p>

            <p className="mb-4">
              <strong>Wie erfassen wir Ihre Daten?</strong>
              <br />
              Diese Website erfasst keine personenbezogenen Daten automatisch. Daten werden nur dann erfasst, 
              wenn Sie uns aktiv kontaktieren (z.B. per E-Mail oder WhatsApp). Die Website verwendet keine 
              Tracking-Tools wie Google Analytics und keine Cookies für Tracking-Zwecke.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-tertiary mb-3">2. Allgemeine Hinweise und Pflichtinformationen</h2>
            
            <h3 className="text-xl font-semibold text-tertiary mb-2 mt-4">Datenschutz</h3>
            <p className="mb-4">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln 
              Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzbestimmungen 
              sowie dieser Datenschutzerklärung.
            </p>

            <h3 className="text-xl font-semibold text-tertiary mb-2 mt-4">Hinweis zur verantwortlichen Stelle</h3>
            <p className="mb-4">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
              <br />
              <br />
              Mohamad Alhussain
              <br />
              E-Mail: contact@alhussain.tech
              <br />
              WhatsApp: +49 176 20442944
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-tertiary mb-3">3. Kontaktaufnahme</h2>
            <p className="mb-4">
              Wenn Sie uns per E-Mail oder WhatsApp kontaktieren, werden Ihre Angaben aus der Kontaktanfrage 
              inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall 
              von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-tertiary mb-3">4. Google Fonts</h2>
            <p className="mb-4">
              Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google Fonts, die von 
              Google bereitgestellt werden. Beim Aufruf einer Seite lädt Ihr Browser die benötigten Fonts in ihren 
              Browsercache, um Texte und Schriftarten korrekt anzuzeigen.
              <br />
              <br />
              Weitere Informationen zu Google Fonts finden Sie unter{" "}
              <a href="https://developers.google.com/fonts/faq" target="_blank" rel="noopener noreferrer" className="text-tertiary hover:text-muted transition-colors duration-200 font-medium">
                https://developers.google.com/fonts/faq
              </a>{" "}
              und in der Datenschutzerklärung von Google:{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-tertiary hover:text-muted transition-colors duration-200 font-medium">
                https://policies.google.com/privacy
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-tertiary mb-3">5. SSL- bzw. TLS-Verschlüsselung</h2>
            <p className="mb-4">
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, 
              wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- 
              bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile 
              des Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-tertiary mb-3">6. Ihre Rechte</h2>
            <p className="mb-4">
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer 
              gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung 
              oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt 
              haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen.
            </p>
          </section>
        </div>
      </article>
    </section>
  );
}
