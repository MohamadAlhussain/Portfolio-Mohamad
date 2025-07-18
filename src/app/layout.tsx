import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Home as HomeIcon, User, Folder, Mail as MailIcon } from "lucide-react";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohamad Alhussain Portfolio",
  description:
    "A modern, cyber-inspired portfolio showcasing my web development projects, skills, and certifications.",
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
        <main className="max-w-4xl mx-auto px-4 flex-1 w-full flex flex-col">
          {children}
        </main>
        {/* Footer */}
        <footer className="w-full py-2 bg-secondary text-center text-secondary text-sm border-t border-secondary">
          © 2025 Mohamad Alhussain. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
