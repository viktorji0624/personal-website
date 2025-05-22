import type { Metadata } from "next";
import "./globals.css";
import { Resume, ChineseResume } from "./components/resume";

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
        <div className="flex min-h-screen ">
          {/* Sidebar */}
          <aside className="sticky top-0 h-screen p-4 w-52 bg-blackhidden md:block  ">
            <nav className="flex flex-col space-y-4 p-4">
              <a href="#about" className="hover:underline hover:text-blue-500">
                About
              </a>
              <a
                href="#education"
                className="hover:underline  hover:text-blue-500"
              >
                Education
              </a>
              <a href="#work" className="hover:underline  hover:text-blue-500">
                Work Experience
              </a>
              <a
                href="#projects"
                className="hover:underline  hover:text-blue-500"
              >
                Projects
              </a>
              <a
                href="#skills"
                className="hover:underline  hover:text-blue-500"
              >
                Skills
              </a>
              <a
                href="#academics"
                className="hover:underline  hover:text-blue-500"
              >
                Academics
              </a>
              <a
                href="#contact"
                className="hover:underline  hover:text-blue-500"
              >
                Contact
              </a>
              <Resume />
              <ChineseResume />
            </nav>
          </aside>

          {/* Vertical Divider */}
          <div className="w-px bg-gray-700  md:block" />

          {/* Main Content */}
          <main className="flex-1 px-6 md:px-12 py-5">{children}</main>
        </div>
      </body>
    </html>
  );
}
