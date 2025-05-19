// app/page.tsx (for Next.js App Router) or pages/index.tsx (for Pages Router)
import Image from "next/image";
import SocialLinks from "./components/socials";
import { Mail } from "lucide-react";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10 w-full md:w-3/4 p-6">
      {/* About */}
      <section className="mb-10" id="about">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="flex justify-center">
            <Image
              src="/me.jpeg"
              alt="Your Name"
              width={300}
              height={300}
              className="shadow-lg object-cover"
            />
          </div>
          <h1 className="text-4xl font-bold mt-6">Viktor Ji</h1>
          <p className="text-lg text-white mt-2">Software Engineer</p>
          {SocialLinks()}
        </header>
        <h2 className="text-2xl font-semibold mb-4 border-b pb-1 border-gray-200">
          About
        </h2>
        <ul className="flex-col space-y-3">
          <li>
            Hi! I&apos;m Viktor, an experienced software engineer who enjoys
            building and solving real world problems. This is my personal
            website where I showcase my work and also acts a a playing ground
            for me to experiment with new technologies.
          </li>
          <li>
            I am currently pursuing my Master&apos;s degree at Carnegie Mellon
            University where I am honing my skills in developing distributed
            systems, software engineering, and artificial intelligence.
          </li>
          <li>
            In my free time, I enjoy playing competitive volleyball, travelling,
            reading History, going to the gym and playing video games.
          </li>
          <li className="font-bold">
            Currently open to internship opportunities for Summer 2026 and full
            time roles after December 2026!
          </li>
        </ul>
      </section>

      {/* Education */}
      <section className="mb-10" id="education">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-1 border-gray-200">
          Education
        </h2>
        <div className="flex items-start gap-4 mb-6">
          <Image src="/CMU.png" className="w-10 h-10 mt-1" alt={"CMU LOGO"} />
          <h3 className="text-lg font-medium">
            Carnegie Mellon University - School of Computer Science
            <p className="text-sm text-gray-400">
              M.S. in Software Engineering | Dec 2026 (Expected) | Pittsburgh,
              PA
            </p>
          </h3>
        </div>
        <div className="flex items-start gap-4 mb-6">
          <Image
            src="/UMICH.jpg"
            className="w-10 h-10 mt-1"
            alt={"UMICH LOGO"}
          />
          <h3 className="text-lg font-medium">
            University of Michigan - Ann Arbor
            <p className="text-sm text-gray-400">
              B.S. in Computer Science | May 2022 | Ann Arbor, MI
            </p>
          </h3>
        </div>
      </section>

      {/* Work Experience */}
      <section className="mb-10" id="work">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-1 border-gray-200">
          Work Experience
        </h2>
        <div>
          <h3 className="text-lg font-medium">Forward, Software Engineer</h3>
          <span className="text-sm text-gray-400">
            2022–2024, San Francisco, CA
          </span>
          <ul className="list-disc list-inside text-sm text-gray-700 mt-2"></ul>
        </div>
        <div>
          <h3 className="text-lg font-medium">
            Wise, Software Engineer Intern
          </h3>
          <p className="text-sm text-gray-400">2021, Budapest, Hungary</p>
          <ul className="list-disc list-inside text-sm text-gray-700 mt-2"></ul>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-10" id="projects">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-1 border-gray-200">
          Projects
        </h2>
        <div>
          <h3 className="text-lg font-medium">
            Hamster{" - "}
            <a
              href="https://hamsters-landing-page.webflow.io/"
              className="text-color-blue-600 hover:text-blue-800 transition"
            >
              Website
            </a>
          </h3>
          <p className="text-sm text-gray-400">
            Personalized Knowledge Management Platform
          </p>
        </div>
        <div>
          <a
            href="https://hamsters-landing-page.webflow.io/"
            className="text-lg font-medium"
          >
            LLM Lawyer
          </a>
          <p className="text-sm text-gray-400">
            AI driven platform that facilitates legal inquries
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="mb-10" id="contact">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-1 border-gray-200">
          Feel free to reach out!
        </h2>
        <a
          href="mailto:viktorj@andrew.cmu.edu"
          className="hover:text-red-500 transition flex items-center gap-2"
          title="Email"
        >
          <Mail size={28} /> viktorj@andrew.cmu.edu
        </a>
      </section>

      <div className="w-full h-[800px] rounded-lg overflow-hidden shadow-md">
        <iframe
          src="https://docs.google.com/document/d/1nOtcYWxUjB4XX4vnf_1SwHIFQk7sqKU1n4tnKG5xxbM/edit?usp=sharing"
          title="Resume"
          className="w-full h-full"
          allow="autoplay"
        ></iframe>
      </div>

      {/* Optional: Footer */}
      <footer className="text-center text-sm text-gray-400 mt-12">
        © {new Date().getFullYear()} Viktor Ji. All rights reserved.
      </footer>
    </main>
  );
}
