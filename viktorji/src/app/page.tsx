"use client";

import Header from "./components/Header";
import About from "./components/About";
import Education from "./components/Education";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/skills";
import AcademicProjects from "./components/AcademicProjects";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <Header />
      <About />
      <Projects />
      <Skills />
      <Education />
      <WorkExperience />
      <AcademicProjects />
      <Contact />
    </div>
  );
}
