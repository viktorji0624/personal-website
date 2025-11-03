"use client";

import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Resume, ChineseResume } from "./components/resume";
import { useState } from "react";
import {
  User,
  GraduationCap,
  Briefcase,
  Code,
  Wrench,
  BookOpen,
  Mail,
  Home,
  Menu,
  X,
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white font-sans">
        <div className="flex min-h-screen">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="fixed top-4 left-4 z-50 md:hidden p-2 rounded-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg"
          >
            {isMobileMenuOpen ? (
              <X size={24} className="text-gray-700 dark:text-gray-300" />
            ) : (
              <Menu size={24} className="text-gray-700 dark:text-gray-300" />
            )}
          </button>

          {/* Mobile Backdrop */}
          {isMobileMenuOpen && (
            <div
              className="fixed inset-0 bg-black/50 z-30 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          )}

          {/* Sidebar */}
          <aside
            className={`fixed md:relative top-0 left-0 h-screen w-64 md:w-48 lg:w-56 xl:w-64 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-r border-gray-200/50 dark:border-gray-700/50 shadow-xl md:shadow-none z-40 transition-transform duration-300 ease-in-out ${
              isMobileMenuOpen
                ? "translate-x-0"
                : "-translate-x-full md:translate-x-0"
            } overflow-y-auto`}
          >
            <div className="flex flex-col min-h-full">
              {/* Logo/Header */}
              <div className="p-4 lg:p-6">
                <h1 className="text-lg lg:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Viktor Ji
                </h1>
                <p className="text-xs lg:text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Personal Website & Portfolio
                </p>
              </div>

              {/* Navigation */}
              <nav className="flex-1 p-4 lg:p-6 space-y-1 lg:space-y-2">
                <a
                  href="#home"
                  className="flex items-center gap-2 lg:gap-3 px-3 lg:px-4 py-2 lg:py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-200 group"
                >
                  <Home
                    size={16}
                    className="group-hover:scale-110 transition-transform"
                  />
                  <span className="font-medium text-sm lg:text-base">Home</span>
                </a>
                <a
                  href="#about"
                  className="flex items-center gap-2 lg:gap-3 px-3 lg:px-4 py-2 lg:py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-200 group"
                >
                  <User
                    size={16}
                    className="group-hover:scale-110 transition-transform"
                  />
                  <span className="font-medium text-sm lg:text-base">
                    About
                  </span>
                </a>
                <a
                  href="#education"
                  className="flex items-center gap-2 lg:gap-3 px-3 lg:px-4 py-2 lg:py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-200 group"
                >
                  <GraduationCap
                    size={16}
                    className="group-hover:scale-110 transition-transform"
                  />
                  <span className="font-medium text-sm lg:text-base">
                    Education
                  </span>
                </a>
                <a
                  href="#work"
                  className="flex items-center gap-2 lg:gap-3 px-3 lg:px-4 py-2 lg:py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-200 group"
                >
                  <Briefcase
                    size={16}
                    className="group-hover:scale-110 transition-transform"
                  />
                  <span className="font-medium text-sm lg:text-base">
                    Work Experience
                  </span>
                </a>
                <a
                  href="#projects"
                  className="flex items-center gap-2 lg:gap-3 px-3 lg:px-4 py-2 lg:py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-200 group"
                >
                  <Code
                    size={16}
                    className="group-hover:scale-110 transition-transform"
                  />
                  <span className="font-medium text-sm lg:text-base">
                    Projects
                  </span>
                </a>
                <a
                  href="#skills"
                  className="flex items-center gap-2 lg:gap-3 px-3 lg:px-4 py-2 lg:py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-200 group"
                >
                  <Wrench
                    size={16}
                    className="group-hover:scale-110 transition-transform"
                  />
                  <span className="font-medium text-sm lg:text-base">
                    Skills
                  </span>
                </a>
                <a
                  href="#academics"
                  className="flex items-center gap-2 lg:gap-3 px-3 lg:px-4 py-2 lg:py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-200 group"
                >
                  <BookOpen
                    size={16}
                    className="group-hover:scale-110 transition-transform"
                  />
                  <span className="font-medium text-sm lg:text-base">
                    Academics
                  </span>
                </a>
                <a
                  href="#contact"
                  className="flex items-center gap-2 lg:gap-3 px-3 lg:px-4 py-2 lg:py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-200 group"
                >
                  <Mail
                    size={16}
                    className="group-hover:scale-110 transition-transform"
                  />
                  <span className="font-medium text-sm lg:text-base">
                    Contact
                  </span>
                </a>
              </nav>

              {/* Resume Downloads */}
              <div className="p-4 lg:p-6 space-y-2">
                <Resume />
                <ChineseResume />
              </div>
            </div>
          </aside>

          {/* Vertical Divider */}
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-gray-300/30 dark:via-gray-600/30 to-transparent" />
          </div>

          {/* Main Content */}
          <main className="flex-1 px-4 md:px-8 lg:px-12 py-5 md:py-5 pt-16 md:pt-5">
            {children}
          </main>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
