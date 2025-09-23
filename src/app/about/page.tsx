export const metadata = {
  title: "About Me - Mohamad Alhussain | Web Developer",
  description: "Learn about Mohamad Alhussain's journey as a web developer, skills, certifications, and passion for modern web technologies.",
  keywords: "about, web developer, skills, certifications, experience, Mohamad Alhussain",
  alternates: {
    canonical: "https://alhussain.tech/about/",
  },
};

export default function About() {
  // List of skills
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Tailwind",
    "React",
    "Next.js",
    "Express",
    "PHP",
    "Bootstrap",
    "MongoDB",
    "MySQL",
    "WordPress",
    "GitHub",
    "Vercel",
    "Responsive Design",
    "REST APIs",
  ];

  // List of certificates
  const certificates = [
    { title: "Webdesign with HTML, CSS", issuer: "alfatraining GmbH" },
    { title: "JavaScript Developer", issuer: "alfatraining GmbH" },
    { title: "React JavaScript Library", issuer: "alfatraining GmbH" },
    { title: "Certified PHP Developer", issuer: "alfatraining GmbH" },
    { title: "Version Control", issuer: "Meta / Coursera" },
    { title: "HTML and CSS in Depth", issuer: "Meta / Coursera" },
    {
      title: "Introduction to Front-End Development",
      issuer: "Meta / Coursera",
    },
    { title: "Programming with JavaScript", issuer: "Meta / Coursera" },
    { title: "React Basics", issuer: "Meta / Coursera" },
  ];

  // Tailwind utility classes for styling
  const skillCardClass =
    "bg-card border border-primary rounded-lg p-3 text-center";
  const skillTextClass = "text-tertiary font-medium";
  const certificateCardClass = "bg-card border border-primary rounded-lg p-4";
  const certificateTitleClass = "text-tertiary font-semibold mb-1";
  const certificateIssuerClass = "text-secondary text-sm";

  return (
    // Main section
    <section className="py-8 flex flex-col items-center justify-center min-h-[70vh] text-center gap-8 animate-fade-in">
      {/* Page heading and intro */}
      <h1 className="text-4xl font-extrabold gradient-text mb-4 animate-fade-in">
        About Me
      </h1>
      <p className="text-secondary max-w-2xl text-center">
        I’m an aspiring web developer with a growing passion for building
        modern, user-friendly websites. I’ve learned front-end and back-end
        technologies like HTML, CSS, JavaScript, React, Next.js, Tailwind CSS,
        Express, MongoDB, and MySQL through online courses and self-study.
        <br />
        <br />
        While I’m still early in my journey, I enjoy experimenting with new
        tools, improving my skills through personal projects, and turning ideas
        into interactive browser experiences.
        <br />
        <br />
        I’ve earned certifications from platforms like Coursera and alfatraining
        GmbH, which have helped me build a solid foundation and understand
        real-world development practices.
        <br />
        <br />
        I’m comfortable working independently, and I also enjoy collaborating in
        a team to share knowledge and achieve better results.
      </p>

      {/* Skills Section */}
      <div className="w-full max-w-4xl">
        {/* Skills title */}
        <h2 className="gradient-text text-2xl md:text-3xl font-semibold mb-4 text-center">
          Skills
        </h2>
        {/* Skills grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`${skillCardClass} animate-stagger-fade-in`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <span className={skillTextClass}>{skill}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Certificates Section */}
      <div className="w-full max-w-4xl">
        {/* Certificates title and download button */}
        <div className="flex items-center justify-center mb-4 gap-2">
          <h2 className="gradient-text text-2xl md:text-3xl font-semibold text-center mb-0">
            Certificates
          </h2>
          <a
            href="/Certificates.pdf"
            download
            className="ml-2 px-3 py-1 rounded-full text-xs font-semibold gradient-secondary text-white shadow hover:scale-105 transition-transform border border-primary"
            title="Download all certificates as PDF"
            aria-label="Download all certificates as PDF"
          >
            Download
          </a>
        </div>
        {/* Certificates grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className={`${certificateCardClass} animate-stagger-fade-in`}
              style={{ animationDelay: `${(index + skills.length) * 80}ms` }}
            >
              <h3 className={certificateTitleClass}>{cert.title}</h3>
              <p className={certificateIssuerClass}>{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
