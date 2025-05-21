// app/page.tsx (for Next.js App Router) or pages/index.tsx (for Pages Router)
import Image from "next/image";
import SocialLinks from "./components/socials";
import { Mail, ExternalLink } from "lucide-react";
import Skills from "./components/skills";

export default function Home() {
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
            I'm currently open to internship opportunities for Summer 2026 and
            full-time roles starting January 2027!
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
                href="https://immiglaw-official-git-main-edwardsungnavisxios-projects.vercel.app/"
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
      <section className="mb-10" id="academics">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-1 border-gray-200">
          Sample Academic Projects
        </h2>
        <div className="flex flex-wrap space-x-10 space-y-5">
          <div className="flex flex-col">
            <span className="text-xl font-medium ">Mini-Instagram </span>
            <div className="flex items-center space-x-2">
              <p className="text-sm text-gray-400 ">
                EECS 485, University of Michigan
              </p>{" "}
              <Image
                src="/UMICH.jpg"
                className="w-5 h-5"
                alt="UMICH LOGO"
                width={20}
                height={20}
              />{" "}
            </div>

            <ul className="list-disc list-inside mt-1">
              <li>
                Implemented a local server that handles REST API requests and
                returns the corresponding information in json format, utilizing
                Python’s Flask library as the backend.
              </li>
              <li>
                Enabled information retrieval and storage using the local server
                with sqlite as the database
              </li>
              <li>
                Implemented and designed the frontend of the website as well as
                the interface, using client-side Javascript to handle
                interactions with individual posts such as commenting, liking or
                following.
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <span className="text-xl font-medium">
              Map-Reduce and Mini Search-engine
            </span>
            <div className="flex items-center space-x-2">
              <p className="text-sm text-gray-400 ">
                EECS 485, University of Michigan
              </p>{" "}
              <Image
                src="/UMICH.jpg"
                className="w-5 h-5"
                alt="UMICH LOGO"
                width={20}
                height={20}
              />{" "}
            </div>
            <ul className="list-disc list-inside mt-1">
              <li>
                Implemented a multi-threaded and fault-tolerant mapreduce
                program that takes inputs from python sockets. Uses round-robin
                partitioning to parse inputs with python subprocess
              </li>
              <li>
                Simulated information retrieval of search engines efficiently
                using the mapreduce program. Using PageRank and HITS algorithms
                to display the best matching results based on user input,
                referencing the values of the inverted index constructed
                beforehand.
              </li>
              <li>
                Implemented shell scripts to automate the process of building an
                inverted index.
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-medium">
              LC-2K Assembly Simulator{" "}
            </span>
            <div className="flex items-center space-x-2">
              <p className="text-sm text-gray-400 ">
                EECS 370, University of Michigan
              </p>{" "}
              <Image
                src="/UMICH.jpg"
                className="w-5 h-5"
                alt="UMICH LOGO"
                width={20}
                height={20}
              />{" "}
            </div>
            <ul className="list-disc list-inside mt-1">
              <li>
                Translated assembly instructions into machine code with load,
                store, branch and binary operations.
              </li>
              <li>
                Implemented instruction pipelining which resolves data hazards
                and control hazards
              </li>
              <li>
                {" "}
                Implemented a Cache with a write policy of write-back and
                allocate on write, replacing the least recently used memory in
                case of collision and eviction.
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-medium">
              Quality Assurance and Defect Detector{" "}
            </span>
            <div className="flex items-center space-x-2">
              <p className="text-sm text-gray-400 ">
                EECS 481, University of Michigan
              </p>
              <Image
                src="/UMICH.jpg"
                className="w-5 h-5"
                alt="UMICH LOGO"
                width={20}
                height={20}
              />
            </div>
            <ul className="list-disc list-inside mt-1">
              <li>
                Implemented a mutator that ranks the qualities of test suites by
                instrumenting the input python program’s AST with random first
                or higher order mutations.
              </li>
              <li>
                Implemented Delta-Debugging to find the minimal subset of code
                changes that causes defects.
              </li>
              <li>
                Computed the probability of a line of code being defective using
                Ochiai and Tarantula algorithms.
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-medium">Simulators</span>
            <div className="flex items-center space-x-2">
              <p className="text-sm text-gray-400 ">
                EECS 281, University of Michigan
              </p>
              <Image
                src="/UMICH.jpg"
                className="w-5 h-5"
                alt="UMICH LOGO"
                width={20}
                height={20}
              />
            </div>
            <ul className="list-disc list-inside mt-1">
              <li>
                Maze Runner - Implemented a depth-first search algorithm to
                traverse a 2-D maze containing traps and triggers, determining
                whether or not a solution exists and outputs the entire path if
                it does.
              </li>
              <li>
                Drone Delivery Simulation - Computed the most efficient paths to
                traverse a set of coordinates with given constraints and costs,
                adapting Heuristics (branch and bound), Flyod-Warshall, and
                Kruskal algorithms to produce the desired output depending on
                the request.
              </li>
              <li>
                Stock Market - Implemented a program that automatically makes
                profitable stock trades in real-time given a log of
                transactions, utilizing priority queues and transition states to
                aid its decision making.
              </li>
            </ul>
          </div>
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
