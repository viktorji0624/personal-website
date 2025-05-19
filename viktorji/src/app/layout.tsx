import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Viktor Ji Website",
  description: "Viktor Ji's Personal Website/Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900 font-sans">
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <aside className="w-72 p-8 pr-6 border-r border-gray-200 bg-black hidden md:block">
            <div className="text-2xl font-extrabold tracking-tight mb-12">
              Navigation
            </div>
            <nav className="flex flex-col gap-6 text-lg">
              <Link
                href="/"
                className="text-white hover:text-blue-600 transition"
              >
                Home
              </Link>
              <Link
                href="/projects"
                className="text-white hover:text-blue-600 transition"
              >
                Projects
              </Link>
              <Link
                href="/startups"
                className="text-white hover:text-blue-600 transition"
              >
                Startups
              </Link>
            </nav>
          </aside>

          {/* Vertical Divider */}
          <div className="w-px bg-gray-200  md:block" />

          {/* Main Content */}
          <main className="flex-1 px-6 md:px-12 py-5">{children}</main>
        </div>
      </body>
    </html>
  );
}
