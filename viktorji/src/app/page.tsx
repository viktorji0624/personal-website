"use client";

import Image from "next/image";
import SocialLinks from "./components/socials";
import { Mail, ExternalLink } from "lucide-react";
import Skills from "./components/skills";
import { useState } from "react";
import SampleProjectsSection from "./academics";

export default function Home() {
  const [isAcademicsOpen, setIsAcademicsOpen] = useState(true);

  return (
    <main className="max-w-4xl mx-auto px-4 py-10 w-full md:w-3/4 p-6">
      {/* Header */}
      <header className="flex flex-col lg:flex-row items-center justify-left text-center gap-10 mb-5">
        <Image
          src="/me.jpeg"
          alt="Your Name"
          width={400}
          height={400}
          className="shadow-lg object-cover rounded-2xl"
        />
        <div className="flex-col space-y-10 ">
          <h1 className="text-5xl font-bold ">Viktor Ji</h1>
          <p className="text-xl text-white mt-2">Software Engineer</p>
          {SocialLinks()}
        </div>
      </header>
      {/* About */}
      <section className="mb-10" id="about">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-1 border-gray-200">
          About
        </h2>
        <ul className="flex-col space-y-3">
          <li>
            Hi! I&apos;m Viktor, an experienced software engineer who enjoys
            building and solving real world problems.
          </li>
          <li>
            I built this personal website to showcase my work and as a
            playground to experiment with new technologies. In my free time, I
            enjoy playing competitive volleyball, travelling, reading History,
            going to the gym, and playing games.
          </li>
          <li className="font-style: italic">
            I am currently pursuing my Master&apos;s degree at{" "}
            <span className="font-bold">Carnegie Mellon University</span>, where
            I am honing my skills in distributed systems, software engineering,
            and artificial intelligence.
          </li>
          <li>
            Previously, I spent two years working in the Bay Area for a
            healthcare technology company and interned at a large FinTech firm
            prior. These experiences taught me a great deal about building
            production-level software and collaborating with cross-functional
            teams. (More details in Resume)
          </li>

          <li className="font-bold text-yellow-400">
            I&apos;m currently open to internship opportunities for Summer 2026
            and full-time roles starting January 2027!
          </li>
        </ul>
      </section>

      {/* Education */}

      <section className="mb-10" id="education">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-1 border-gray-200">
          Education
        </h2>
        <div className="flex items-start gap-4 mb-6">
          <Image
            src="/CMU.png"
            className="w-10 h-10 mt-1"
            alt={"CMU LOGO"}
            width={40}
            height={40}
          />
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
            width={40}
            height={40}
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
        <div className="flex space-x-10">
          <div>
            <h3 className="text-xl">Forward - Clinical Software Engineer</h3>
            <p className="text-sm text-gray-400">
              2022–2024, San Francisco, CA
            </p>
            <ul className="list-disc list-inside">
              <li>
                <a
                  href="https://www.youtube.com/watch?v=yy3WyaaJBPo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:text-blue-600 transition"
                  title="Visit Website"
                >
                  Core contributor to the launch of CarePods
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium">
              Wise - Software Engineer Intern
            </h3>
            <p className="text-sm text-gray-400">2021, Budapest, Hungary</p>
            <ul className="list-disc list-inside">
              <li>
                <a
                  href="https://wise.com/help/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:text-blue-600 transition"
                  title="Visit Website"
                >
                  Developed the Article Recommendation Engine in Help Center
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects */}

      <section className="mb-10" id="projects">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-1 border-gray-200">
          Projects
        </h2>
        <div className="flex flex-wrap space-x-10 space-y-5">
          <div>
            <h3 className="text-lg font-medium flex items-center gap-2">
              Hamster
              <a
                href="https://hamsters-landing-page.webflow.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-blue-600 transition"
                title="Visit Website"
              >
                <ExternalLink size={18} />
              </a>
            </h3>
            <p className="text-sm text-gray-400">
              Personalized Knowledge Management Platform
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium flex items-center gap-2">
              LLM Lawyer
              <a
                href="https://www.immiglaw.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-blue-600 transition"
                title="Visit Website"
              >
                <ExternalLink size={18} />
              </a>
            </h3>
            <p className="text-sm text-gray-400">
              AI driven platform that facilitates legal inquiries
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium flex items-center gap-2">
              Personal Website
              <a
                href="https://github.com/viktorji0624/personal-website"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-blue-600 transition"
                title="Visit Website"
              >
                <ExternalLink size={18} />
              </a>
            </h3>
            <p className="text-sm text-gray-400">
              Github repository for this personal website
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      {Skills()}

      {/* Sample Academic Projects */}
      {SampleProjectsSection({
        isOpen: isAcademicsOpen,
        setIsOpen: setIsAcademicsOpen,
      })}

      {/* Contact */}
      <section className="mb-10" id="contact">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-1 border-gray-200">
          Email Me
        </h2>
        <a
          href="mailto:viktorj@andrew.cmu.edu"
          className="hover:text-red-500 transition flex items-center gap-2 mb-10"
          title="Email"
        >
          <Mail size={28} /> viktorj@andrew.cmu.edu
        </a>
        {/* Contact form */}
        <h2 className="text-2xl font-semibold mb-4  pb-1 border-gray-200">
          Leave a Message
        </h2>
        <form
          action="https://formsubmit.co/viktorj@andrew.cmu.edu"
          method="POST"
          className="flex flex-col space-y-4 justify-center"
        >
          {/* Protect against spam */}
          <input type="hidden" name="_captcha" value="false" />

          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="p-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            name="contact"
            placeholder="Contact Information (email or phone)"
            required
            className="p-2 border border-gray-300 rounded-md"
          />
          <textarea
            name="message"
            placeholder="Message"
            required
            rows={4}
            className="p-2 border border-gray-300 rounded-md"
          />
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow transition duration-200"
          >
            Send
          </button>
        </form>
      </section>

      {/* <div className="w-full h-[800px] rounded-lg overflow-hidden shadow-md">
        <iframe
          src="https://docs.google.com/document/d/1nOtcYWxUjB4XX4vnf_1SwHIFQk7sqKU1n4tnKG5xxbM/preview?usp=sharing"
          title="Resume"
          className="w-full h-full"
          allow="autoplay"
        ></iframe>
      </div> */}
      <div className="text-center text-gray-500">
        ~ This site was developed using NextJs, Tailwind CSS, and deployed with
        Vercel.
      </div>
      {/* Optional: Footer */}
      <footer className="text-center text-sm text-gray-400 mt-12">
        © {new Date().getFullYear()} Viktor Ji. All rights reserved.
      </footer>
    </main>
  );
}
