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
        <div className="flex-col space-y-5">
          <p>
            Hi! I&apos;m Viktor Ji, an experienced software engineer who enjoys
            building and solving real world problems. This is my personal
            website where I showcase my work and also acts a a playing ground
            for me to experiment new technologies. I am currently pursuing my
            Master&apos;s degree at Carnegie Mellon University - School of
            Computer Science, where I am honing my skills in developing
            distributed systems and software engineering.
          </p>
          <p>
            In my free time, I enjoy playing competitive volleyball, travelling,
            reading History, going to the gym and playing video games.
          </p>
          <p className="font-bold">
            Currently open to internship opportunities for Summer 2026 and full
            time roles after December 2026!
          </p>
        </div>
      </section>

      {/* Education */}
      <section className="mb-10" id="education">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-1 border-gray-200">
          Education
        </h2>
        <div>
          <h3 className="text-lg font-medium">
            Carnegie Mellon University - School of Computer Science
          </h3>
          <p className="text-sm text-gray-400">
            M.S. in Software Engineering | Dec 2026 (Expected) | Pittsburgh, PA
          </p>
        </div>
        <div>
          <h3 className="text-lg font-medium mt-4">
            University of Michigan - Ann Arbor
          </h3>
          <p className="text-sm text-gray-400">
            B.S. in Computer Science | May 2022 | Ann Arbor, MI
          </p>
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

      {/* Optional: Footer */}
      <footer className="text-center text-sm text-gray-400 mt-12">
        © {new Date().getFullYear()} Viktor Ji. All rights reserved.
      </footer>
    </main>
  );
}
