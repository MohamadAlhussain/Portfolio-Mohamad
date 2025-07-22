import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-[70vh] flex flex-col items-center justify-center text-center gap-8 overflow-hidden">
      {/* Animated background */}
      <div className="pointer-events-none fixed inset-0 w-full h-full z-0 select-none font-mono whitespace-nowrap">
        {/* Binary and code snippets */}
        <div className="absolute left-1/4 top-0 animate-fall-slow text-muted text-lg">
          10101001 11001010 00110101 10010101
        </div>
        <div className="absolute left-2/3 top-10 animate-fall-medium text-muted text-lg">
          01001100 10101010 11001100 10011001
        </div>
        <div className="absolute left-1/6 top-20 animate-fall-fast text-tertiary text-base">
          const sum = (a, b) =&gt; a + b;
        </div>
        <div className="absolute left-1/2 top-32 animate-fall-medium text-tertiary text-base">
          if (x &gt; 0) &#123; y++;&#125; else &#123; y--;&#125;
        </div>
        <div className="absolute left-1/3 top-48 animate-fall-slow text-muted text-lg">
          11010010 01101001 10101010 01010101
        </div>
        <div className="absolute left-1/5 top-96 animate-fall-slow text-tertiary text-base">
          export default function Home() &#123; ... &#125;
        </div>
      </div>
      {/* Main content */}
      <section className="relative z-10 py-8 flex flex-col items-center justify-center min-h-[70vh] text-center gap-8">
        {/* Heading */}
        <h1
          className="text-3xl sm:text-4xl font-extrabold gradient-text mb-4 flex items-center justify-center gap-2 animate-fade-in"
          style={{ animationDelay: "0ms" }}
        >
          Hi, I&apos;m Mohamad Alhussain
        </h1>
        <div className="text-2xl sm:text-2xl font-bold mx-auto mt-2">
          <span>WEB DEVELOPER</span>
        </div>
        {/* Call to action buttons */}
        <div className="flex flex-row gap-2 sm:gap-4 mt-6 justify-center items-center">
          <Link href="/projects">
            <button
              className="w-40 px-4 py-2 rounded-full gradient-primary text-black font-semibold text-base hover:scale-105 transition-transform animate-pulse-slow glow-green animate-stagger-fade-in cursor-pointer group"
              style={{ animationDelay: "300ms" }}
            >
              View Projects
            </button>
          </Link>
          <a
            href="/CV_Mohamad%20Alhussain.pdf"
            download
            className="w-40 px-4 py-2 rounded-full gradient-primary text-black font-semibold text-base hover:scale-105 transition-transform animate-pulse-slow glow-green animate-stagger-fade-in cursor-pointer group text-center"
            style={{ animationDelay: "400ms" }}
          >
            Download CV
          </a>
        </div>
      </section>
    </div>
  );
}
