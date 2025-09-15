import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary">
      <div className="text-center">
        <h1 className="text-6xl font-bold gradient-text mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-tertiary mb-4">Page Not Found</h2>
        <p className="text-secondary mb-8 max-w-md">
          Sorry, the page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/"
            className="inline-block px-6 py-3 rounded-full gradient-primary text-black font-semibold hover:scale-105 transition-transform"
          >
            Go Home
          </Link>
          <Link
            href="/projects"
            className="inline-block px-6 py-3 rounded-full border-2 border-primary text-tertiary font-semibold hover:bg-primary hover:text-white transition-all"
          >
            View Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
