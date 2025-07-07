import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Resume, ChineseResume } from "./components/resume";
import {
  User,
  GraduationCap,
  Briefcase,
  Code,
  Wrench,
  BookOpen,
  Mail,
  Home,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Viktor Ji Website",
  description: "Viktor Ji's Personal Website/Portfolio",
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white font-sans">
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <aside className="sticky top-0 h-screen w-64 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-r border-gray-200/50 dark:border-gray-700/50 shadow-xl hidden md:block">
            <div className="flex flex-col h-full">
              {/* Logo/Header */}
              <div className="p-6 border-b border-gray-200/50 dark:border-gray-700/50">
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Viktor Ji
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Personal Website & Portfolio
                </p>
              </div>

              {/* Navigation */}
              <nav className="flex-1 p-6 space-y-2">
                <a
                  href="#home"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-200 group"
                >
                  <Home
                    size={18}
                    className="group-hover:scale-110 transition-transform"
                  />
                  <span className="font-medium">Home</span>
                </a>
                <a
                  href="#about"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-200 group"
                >
                  <User
                    size={18}
                    className="group-hover:scale-110 transition-transform"
                  />
                  <span className="font-medium">About</span>
                </a>
                <a
                  href="#education"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-200 group"
                >
                  <GraduationCap
                    size={18}
                    className="group-hover:scale-110 transition-transform"
                  />
                  <span className="font-medium">Education</span>
                </a>
                <a
                  href="#work"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-200 group"
                >
                  <Briefcase
                    size={18}
                    className="group-hover:scale-110 transition-transform"
                  />
                  <span className="font-medium">Work Experience</span>
                </a>
                <a
                  href="#projects"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-200 group"
                >
                  <Code
                    size={18}
                    className="group-hover:scale-110 transition-transform"
                  />
                  <span className="font-medium">Projects</span>
                </a>
                <a
                  href="#skills"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-200 group"
                >
                  <Wrench
                    size={18}
                    className="group-hover:scale-110 transition-transform"
                  />
                  <span className="font-medium">Skills</span>
                </a>
                <a
                  href="#academics"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-200 group"
                >
                  <BookOpen
                    size={18}
                    className="group-hover:scale-110 transition-transform"
                  />
                  <span className="font-medium">Academics</span>
                </a>
                <a
                  href="#contact"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-200 group"
                >
                  <Mail
                    size={18}
                    className="group-hover:scale-110 transition-transform"
                  />
                  <span className="font-medium">Contact</span>
                </a>
              </nav>

              {/* Resume Downloads */}
              <div className="p-6 border-t border-gray-200/50 dark:border-gray-700/50 space-y-2">
                <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">
                  Resume
                </h3>
                <Resume />
                <ChineseResume />
              </div>
            </div>
          </aside>

          {/* Vertical Divider */}
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-600 to-transparent" />
            <div className="absolute top-1/2 left-0 w-3 h-3 bg-blue-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-lg" />
            <div className="absolute top-1/2 left-0 w-1 h-1 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2" />
          </div>

          {/* Main Content */}
          <main className="flex-1 px-6 md:px-12 py-5">{children}</main>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
