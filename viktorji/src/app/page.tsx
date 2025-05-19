// app/page.tsx (for Next.js App Router) or pages/index.tsx (for Pages Router)
import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      {/* Header */}
      <header className="text-center mb-12">
        <div className="flex justify-center">
          <Image
            src="/me.jpeg" // Place this photo in public/your-photo.jpg
            alt="Your Name"
            width={300}
            height={300}
            className="shadow-lg object-cover"
          />
        </div>
        <h1 className="text-4xl font-bold mt-6">Viktor Ji</h1>
        <p className="text-lg text-gray-600 mt-2">Software Engineer</p>

        <div className="flex justify-center gap-6 mt-4 text-blue-600 font-medium">
          <a
            href="https://docs.google.com/document/d/1nOtcYWxUjB4XX4vnf_1SwHIFQk7sqKU1n4tnKG5xxbM/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Resume
          </a>
          <a
            href="https://linkedin.com/in/viktor-ji-cmu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
          <a href="mailto:viktorj@andrew.cmu.edu" className="hover:underline">
            Email
          </a>
          <a href="https://github.com/viktorji0624" className="hover:underline">
            Github
          </a>
        </div>
      </header>

      {/* Education */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-1 border-gray-200">
          Education
        </h2>
        <div>
          <h3 className="text-lg font-medium">
            Carnegie Mellon University - School of Computer Science
          </h3>
          <p className="text-sm text-gray-600">
            M.S. in Software Engineering — Dec 2026 (Expected)
          </p>
        </div>
        <div>
          <h3 className="text-lg font-medium mt-4">
            University of Michigan - Ann Arbor
          </h3>
          <p className="text-sm text-gray-600">
            B.S. in Computer Science — May 2022
          </p>
        </div>
      </section>

      {/* Work Experience */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-1 border-gray-200">
          Work Experience
        </h2>
        <div>
          <h3 className="text-lg font-medium">Software Engineer</h3>
          <p className="text-sm text-gray-600">
            Forward, San Francisco, CA — 2022–2024
          </p>
          <ul className="list-disc list-inside text-sm text-gray-700 mt-2"></ul>
        </div>
        <div>
          <h3 className="text-lg font-medium">Software Engineer Intern</h3>
          <p className="text-sm text-gray-600">
            Wise, Budapest, Hungary — 2021
          </p>
          <ul className="list-disc list-inside text-sm text-gray-700 mt-2"></ul>
        </div>
      </section>

      {/* Optional: Footer */}
      <footer className="text-center text-sm text-gray-400 mt-12">
        © {new Date().getFullYear()} Viktor Ji. All rights reserved.
      </footer>
    </main>
  );
}
