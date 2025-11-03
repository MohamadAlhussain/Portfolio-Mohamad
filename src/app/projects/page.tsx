import Image from "next/image";
import { Suspense } from "react";

export const metadata = {
  title: "Projects - Mohamad Alhussain | Web Developer Portfolio",
  description: "View my portfolio of web development projects including React, Next.js, TypeScript applications.",
  keywords: "projects, portfolio, web development, react, nextjs, typescript, mohamad alhussain",
  alternates: {
    canonical: "https://alhussain.tech/projects/",
  },
};

// Loading component for images
const ImageLoader = () => (
  <div className="w-full h-48 md:h-72 bg-gradient-to-br from-cyan-900/20 to-green-900/10 rounded-xl flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const projects = [
  {
    title: "Currency Converter",
    description:
      "A modern, responsive currency converter built with Next.js, TypeScript, and Tailwind CSS. Features real-time currency conversion, light/dark theme toggle, and animated currency backgrounds.",
    image: "/currency.png",
    link: "https://github.com/MohamadAlhussain/Currency-Converter",
    demo: "https://currency-converter-wfzp.vercel.app",
  },
  {
    title: "Todo App",
    description:
      "A Full-stack Todo application built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring a beautiful UI with Tailwind CSS.",
    image: "/todo.png",
    link: "https://github.com/MohamadAlhussain/Todo",
    demo: "https://todo-ten-lemon-71.vercel.app/",
  },
  {
    title: "HSP Potsdam",
    description:
      "A simple, static cleaning service site built with WordPress. Includes responsive layout, service overview, and direct contact information.",
    image: "/hsp.png",
    demo: "https://hsp-potsdam.de/",
  },
];

// Projects page
export default function Projects() {
  return (
    // Main section
    <section className="py-8 flex flex-col items-center justify-center min-h-[70vh] gap-8 animate-fade-in">
      {/* Page heading */}
      <h1 className="text-4xl font-extrabold gradient-text mb-8 text-center animate-fade-in">
        My Projects
      </h1>
      {/* Projects list */}
      <div className="flex flex-col gap-8 w-full max-w-4xl">
        {projects.map((project, idx) => (
          // Project card
          <div
            key={idx}
            className="bg-card border border-card rounded-2xl shadow-xl flex flex-col md:flex-row overflow-hidden group hover:shadow-2xl transition-all duration-300 animate-stagger-fade-in"
            style={{ animationDelay: `${idx * 120}ms` }}
          >
            {/* Project image with gradient background */}
            <div className="md:w-1/2 w-full flex items-center justify-center bg-gradient-to-br from-cyan-900/40 to-green-900/30 p-6">
              <Suspense fallback={<ImageLoader />}>
                <Image
                  src={project.image}
                  alt={`${project.title} project screenshot`}
                  width={400}
                  height={300}
                  className="w-full h-48 md:h-72 object-cover rounded-xl border-2 border-primary shadow-lg group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </Suspense>
            </div>
            {/* Project : title, description, and action buttons */}
            <div className="flex-1 flex flex-col justify-center items-center p-6 text-center">
              <h2 className="text-xl md:text-2xl font-extrabold gradient-text mb-2">
                {project.title}
              </h2>
              <p className="text-secondary text-sm md:text-base mb-4">
                {project.description}
              </p>
              {/*  buttons: GitHub and Live Demo */}
              <div className="flex gap-3 justify-center">
                {project.link && (
                  <a
                    href={project.link}
                    className="inline-block border-2 border-primary gradient-text px-3 py-1.5 rounded-full font-semibold text-xs md:text-sm transition-all hover:bg-gradient-to-r hover:from-cyan-500 hover:to-green-400 hover:text-white hover:shadow-lg hover:shadow-cyan-400/40 hover:border-secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    className="inline-block border-2 border-primary gradient-text px-3 py-1.5 rounded-full font-semibold text-xs md:text-sm transition-all hover:bg-gradient-to-r hover:from-cyan-500 hover:to-green-400 hover:text-white hover:shadow-lg hover:shadow-green-400/40 hover:border-secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View live demo of ${project.title}`}
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
