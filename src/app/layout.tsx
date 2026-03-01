import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chengru Li | Waterloo CS",
  description: "Personal portfolio of Chengru Li - University of Waterloo CS Student",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/photos", label: "Photos" },
    { href: "/fun", label: "Fun" },
  ];

  return (
    <html lang="en">
      <body className="min-h-screen">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-xl font-bold gradient-text">
              CL
            </Link>
            <div className="flex gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="pt-20">{children}</main>

        {/* Footer */}
        <footer className="border-t border-white/10 mt-20 py-8">
          <div className="max-w-6xl mx-auto px-6 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Chengru Li. Built with Next.js</p>
            <p className="mt-2">
              <a
                href="https://github.com/Lawrenc1um"
                target="_blank"
                className="hover:text-white transition-colors"
              >
                GitHub
              </a>
              {" · "}
              <a
                href="https://linkedin.com/in/chengrul1"
                target="_blank"
                className="hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
