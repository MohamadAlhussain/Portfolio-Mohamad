import Link from "next/link";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

export const metadata = {
  title: "Contact - Mohamad Alhussain | Web Developer",
  description: "Get in touch with Mohamad Alhussain for web development projects, collaborations, or any inquiries.",
  keywords: "contact, web developer, hire, collaboration, mohamad alhussain",
  alternates: {
    canonical: "https://alhussain.tech/contact/",
  },
};

// Contact methods data
const contactMethods = [
  {
    name: "Email",
    value: "contact@alhussain.tech",
    icon: Mail,
    link: "mailto:contact.alhussain.tech",
  },
  {
    name: "WhatsApp",
    value: "+49 176 20442944",
    icon: Phone,
    link: "https://wa.me/4917620442944",
  },
  {
    name: "LinkedIn",
    value: "Mohamad Alhussain",
    icon: Linkedin,
    link: "https://www.linkedin.com/in/mohamad-alhussain-61a102348/",
  },
  {
    name: "GitHub",
    value: "MohamadAlhussain",
    icon: Github,
    link: "https://github.com/MohamadAlhussain",
  },
];

export default function Contact() {
  return (
    // Main section
    <section className="py-8 flex flex-col items-center justify-center min-h-[70vh] text-center gap-8 animate-fade-in">
      {/* Page heading */}
      <h1 className="text-4xl font-extrabold gradient-text mb-4 animate-fade-in">
        Contact
      </h1>
      {/* Intro text */}
      <p className="text-secondary max-w-xl text-center mb-8">
        Interested in working together or have any questions? Reach out to me
        through any of these channels!
      </p>
      {/* Contact methods grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {contactMethods.map((method, idx) => (
          // Contact method card
          <Link
            key={idx}
            href={method.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
            aria-label={`Contact via ${method.name}`}
          >
            <div
              className="bg-secondary rounded-2xl shadow-xl p-6 text-center border border-card hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-stagger-fade-in"
              style={{ animationDelay: `${idx * 120}ms` }}
            >
              {/* Icon container */}
              <div className="w-20 h-20 rounded-full border-4 border-primary mx-auto flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {/* Lucide icon component */}
                <method.icon
                  size={36}
                  className="icon-primary group-hover:icon-hover transition-colors duration-300"
                />
              </div>
              {/* Contact method name */}
              <h3 className="text-xl font-bold text-tertiary mb-2 group-hover:text-muted transition-colors duration-300">
                {method.name}
              </h3>
              {/* Contact method value */}
              <p className="text-secondary text-sm group-hover:text-tertiary transition-colors duration-300">
                {method.value}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
