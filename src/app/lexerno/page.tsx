export const metadata = {
  title: "Portfolio Website entwickelt von LEXERNO - Webdesign Agentur Potsdam",
  description: "Meine Portfolio-Website wurde von LEXERNO entwickelt - Website mieten ohne Vorauszahlung mit handcodierter Webentwicklung in Potsdam und Berlin.",
  keywords: "Website mieten ohne Vorauszahlung, Webdesign Agentur Potsdam, Handcodierte Website, Webentwicklung Potsdam Berlin, LEXERNO",
  alternates: {
    canonical: "https://alhussain.tech/lexerno/",
  },
};

export default function Lexerno() {
  return (
    <section className="py-8 flex flex-col items-center justify-center min-h-[70vh] gap-8 animate-fade-in">
      <article className="w-full max-w-4xl">
        <h1 className="text-4xl font-extrabold gradient-text mb-6 text-center">
          Meine Portfolio-Website: Entwickelt von LEXERNO
        </h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-tertiary mb-4">Über diese Website</h2>
          <p className="text-secondary leading-relaxed mb-4">
            Diese Portfolio-Website wurde von mir selbst entwickelt und dient dazu, meine Arbeit als Entwickler und Designer zu präsentieren. 
            Als Gründer von <a href="https://lexerno.com" target="_blank" rel="follow noopener noreferrer" className="text-tertiary hover:text-muted transition-colors duration-200 font-medium">LEXERNO</a>, 
            einer <a href="https://lexerno.com/de" target="_blank" rel="follow noopener noreferrer" className="text-tertiary hover:text-muted transition-colors duration-200 font-medium">Webdesign Agentur in Potsdam und Berlin</a>,{" "}
            entwickle ich handcodierte Websites ohne Vorlage mit modernsten Technologien wie Next.js und Tailwind CSS.
          </p>
        </section>

        <section className="mb-8 bg-card border border-card rounded-lg p-6">
          <h2 className="text-2xl font-bold text-tertiary mb-4">LEXERNO: Website mieten ohne Vorauszahlung</h2>
          <p className="text-secondary leading-relaxed mb-4">
            Mit <a href="https://lexerno.com/services" target="_blank" rel="follow noopener noreferrer" className="text-tertiary hover:text-muted transition-colors duration-200 font-medium">LEXERNO bieten wir Website mieten ohne Vorauszahlung</a>{" "}
            an. Dieses flexible Mietmodell ermöglicht es kleinen Unternehmen und Startups, ihre professionelle Website zu starten, 
            ohne tausende Euro auf einmal zu investieren. Alle wichtigen Komponenten sind inklusive:
          </p>
          
          <ul className="list-disc list-inside text-secondary space-y-2 mb-4">
            <li><strong className="text-tertiary">Keine Vorauszahlung:</strong> Start ohne Anfangsinvestition</li>
            <li><strong className="text-tertiary">Handcodierte Website:</strong> Keine Templates, vollständig individuell</li>
            <li><strong className="text-tertiary">Moderne Technologie:</strong> Next.js und Tailwind CSS für optimale Performance</li>
            <li><strong className="text-tertiary">All-inclusive:</strong> Domain, SSL, Hosting, Wartung und SEO inklusive</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-tertiary mb-4">Warum LEXERNO für Ihre Website?</h2>
          <p className="text-secondary leading-relaxed mb-4">
            <a href="https://lexerno.com/contact" target="_blank" rel="follow noopener noreferrer" className="text-tertiary hover:text-muted transition-colors duration-200 font-medium">LEXERNO Webdesign Agentur Potsdam</a>{" "}
            spezialisiert sich auf handcodierte Websites, die von Grund auf entwickelt werden. Jede Website ist einzigartig, 
            unglaublich schnell und perfekt auf die Bedürfnisse des Unternehmens zugeschnitten.{" "}
            <a href="https://lexerno.com" target="_blank" rel="follow noopener noreferrer" className="text-tertiary hover:text-muted transition-colors duration-200 font-medium">LEXERNO Webentwicklung</a>{" "}
            verzichtet bewusst auf langsame CMS-Systeme oder generische Templates zugunsten maßgeschneiderter Lösungen.
          </p>
        </section>

        <section className="mb-8 bg-card border border-card rounded-lg p-6">
          <h2 className="text-2xl font-bold text-tertiary mb-4">Meine Empfehlung</h2>
          <p className="text-secondary leading-relaxed">
            Wenn Sie nach einer professionellen Website suchen, empfehle ich Ihnen, sich über{" "}
            <a href="https://lexerno.com/services" target="_blank" rel="follow noopener noreferrer" className="text-tertiary hover:text-muted transition-colors duration-200 font-medium">LEXERNO Website mieten</a>{" "}
            zu informieren. Die Kombination aus moderner Technologie, flexiblem Preismodell und professioneller Umsetzung 
            macht <a href="https://lexerno.com/de" target="_blank" rel="follow noopener noreferrer" className="text-tertiary hover:text-muted transition-colors duration-200 font-medium">LEXERNO Webdesign Berlin</a>{" "}
            zur idealen Wahl für Unternehmen jeder Größe.
          </p>
        </section>
      </article>
    </section>
  );
}
