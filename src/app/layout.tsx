import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Home as HomeIcon, User, Folder, Mail as MailIcon } from "lucide-react";
import React from "react";
import ErrorBoundary from "@/components/ErrorBoundary";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohamad Alhussain - Full Stack Web Developer | Portfolio",
  description:
    "Professional web developer specializing in React, Next.js, TypeScript, and modern web technologies. View my projects, skills, and certifications.",
  keywords: "web developer, react developer, next.js, typescript, portfolio, full stack developer, frontend, backend, javascript, node.js, mongodb, express",
  authors: [{ name: "Mohamad Alhussain" }],
  creator: "Mohamad Alhussain",
  publisher: "Mohamad Alhussain",
  openGraph: {
    title: "Mohamad Alhussain - Web Developer Portfolio",
    description: "Professional web developer showcasing modern web development projects and skills",
    url: "https://alhussain.netlify.app",
    siteName: "Mohamad Alhussain Portfolio",
    images: [
      {
        url: "https://alhussain.netlify.app/M-neon.png",
        width: 1200,
        height: 630,
        alt: "Mohamad Alhussain Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamad Alhussain - Web Developer Portfolio",
    description: "Professional web developer showcasing modern web development projects and skills",
    images: ["https://alhussain.netlify.app/M-neon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://alhussain.netlify.app/",
  },
  category: "technology",
};

// Navigation items for the navbar
const navItems = [
  { href: "/", icon: HomeIcon, label: "Home" },
  { href: "/about", icon: User, label: "About" },
  { href: "/projects", icon: Folder, label: "Projects" },
  { href: "/contact", icon: MailIcon, label: "Contact" },
];

// Root layout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/M-neon.png" type="image/png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-primary min-h-screen flex flex-col`}
        style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded z-50"
        >
          Skip to main content
        </a>
        {/* Navbar with navigation links */}
        <nav className="w-full flex justify-center items-center px-4 sm:px-6 lg:px-8 py-4 bg-secondary border-b border-secondary">
          <div className="flex gap-2 sm:gap-4 lg:gap-8 items-center">
            {navItems.map((item, idx) => (
              <React.Fragment key={item.href}>
                <Link
                  href={item.href}
                  className="font-semibold gradient-text flex items-center gap-1 sm:gap-2 text-sm sm:text-base lg:text-lg transition-all duration-200 group hover:underline hover:scale-105"
                >
                  <item.icon
                    size={18}
                    className="icon-primary group-hover:icon-hover transition-colors duration-200"
                  />
                  {item.label}
                </Link>
                {/* Pipe separator between nav items */}
                {idx < navItems.length - 1 && (
                  <span className="text-muted text-lg sm:text-xl select-none">
                    |
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </nav>
        {/* Main */}
        <main id="main-content" className="max-w-4xl mx-auto px-4 flex-1 w-full flex flex-col">
          <ErrorBoundary>
            {children}
          </ErrorBoundary>
        </main>
        {/* Footer */}
        <footer className="w-full py-2 sm:py-3 bg-secondary text-secondary text-xs sm:text-sm border-t border-secondary">
          <div className="max-w-4xl mx-auto px-4">
            {/* Desktop: Impressum left, Copyright center, Datenschutz right */}
            {/* Mobile: Copyright in center on first line, Impressum left and Datenschutz right on second line */}
            <div className="hidden sm:flex justify-between items-center gap-2">
              <div className="text-xs text-secondary/60">
                <Link href="/impressum" className="hover:text-tertiary transition-colors duration-200">
                  Impressum
                </Link>
              </div>
              <div className="text-center text-xs text-secondary/70">
                © 2025 Mohamad Alhussain. All rights reserved.
                <br />
                <span className="text-secondary/60">
                  Founder of <Link href="/lexerno" className="text-tertiary hover:text-muted transition-colors duration-200 font-medium">LEXERNO</Link>
                </span>
              </div>
              <div className="text-xs text-secondary/60">
                <Link href="/datenschutz" className="hover:text-tertiary transition-colors duration-200">
                  Datenschutz
                </Link>
              </div>
            </div>

            {/* Mobile: Two lines layout */}
            <div className="flex flex-col gap-1.5 sm:hidden">
              {/* First line: Copyright centered */}
              <div className="text-center text-[10px] text-secondary/70">
                © 2025 Mohamad Alhussain
                <span className="text-secondary/60">
                  {" "}· Founder of <Link href="/lexerno" className="text-tertiary hover:text-muted transition-colors duration-200 font-medium">LEXERNO</Link>
                </span>
              </div>
              {/* Second line: Impressum and Datenschutz centered */}
              <div className="flex justify-center items-center gap-4 text-[10px] text-secondary/60">
                <Link href="/impressum" className="hover:text-tertiary transition-colors duration-200">
                  Impressum
                </Link>
                <Link href="/datenschutz" className="hover:text-tertiary transition-colors duration-200">
                  Datenschutz
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
