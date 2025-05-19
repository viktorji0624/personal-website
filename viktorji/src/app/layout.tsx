import type { Metadata } from "next";
import "./globals.css";
import Resume from "./components/resume";

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
          <aside className="sticky top-0 h-screen p-4 w-48 bg-blackhidden md:block  ">
            {Resume()}
            <nav className="flex flex-col space-y-4 p-4">
              <a href="#about" className="hover:underline">
                About
              </a>
              <a href="#education" className="hover:underline">
                Education
              </a>
              <a href="#work" className="hover:underline">
                Work Experience
              </a>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
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
