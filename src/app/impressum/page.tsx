export const metadata = {
  title: "Impressum - Mohamad Alhussain | Web Developer",
  description: "Impressum und rechtliche Angaben zu dieser Website",
  alternates: {
    canonical: "https://alhussain.netlify.app/impressum/",
  },
};

export default function Impressum() {
  return (
    <section className="py-8 flex flex-col items-center justify-center min-h-[70vh] gap-8 animate-fade-in">
      <article className="w-full max-w-4xl">
        <h1 className="text-4xl font-extrabold gradient-text mb-6 text-center">
          Impressum
        </h1>

        <div className="text-secondary leading-relaxed space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-tertiary mb-3">Angaben gemäß § 5 TMG</h2>
            <p>
              Mohamad Alhussain
              <br />
              Web Developer
              <br />
              Voltastr. 7
              <br />
              14482 Potsdam
              <br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-tertiary mb-3">Kontakt</h2>
            <p>
              E-Mail: herr.alhussain@gmail.com
              <br />
              WhatsApp: +49 176 20442944
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-tertiary mb-3">Hosting & Domain</h2>
            <p>
              Diese Website wird gehostet bei:
              <br />
              <strong>Vercel Inc.</strong>
              <br />
              340 S Lemon Ave #4133
              <br />
              Walnut, CA 91789
              <br />
              USA
              <br />
              Website: <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-tertiary hover:text-muted transition-colors duration-200 font-medium">https://vercel.com</a>
            </p>
            <p className="mt-4">
              Domain-Registrierung:
              <br />
              <strong>Hostinger International Ltd.</strong>
              <br />
              Website: <a href="https://www.hostinger.com" target="_blank" rel="noopener noreferrer" className="text-tertiary hover:text-muted transition-colors duration-200 font-medium">https://www.hostinger.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-tertiary mb-3">Haftungsausschluss</h2>

            <h3 className="text-xl font-semibold text-tertiary mb-2 mt-4">Haftung für Inhalte</h3>
            <p className="mb-4">
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
              Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
              nach den allgemeinen Gesetzen verantwortlich.
            </p>

            <h3 className="text-xl font-semibold text-tertiary mb-2 mt-4">Haftung für Links</h3>
            <p className="mb-4">
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen
              Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich.
            </p>

            <h3 className="text-xl font-semibold text-tertiary mb-2 mt-4">Urheberrecht</h3>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
              dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
              der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung
              des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>
        </div>
      </article>
    </section>
  );
}
