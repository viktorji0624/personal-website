"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="mb-12"
      id="about"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-white/20 dark:border-gray-700/20">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-1 border-gray-200 dark:border-neutral-700">
          About
        </h2>
        <ul className="flex flex-col gap-3 text-gray-700 dark:text-gray-200 text-base leading-relaxed">
          <li>
            Hi! I&apos;m Viktor, an experienced software engineer passionate
            about building impactful, real-world solutions.
          </li>
          <li>
            This website is my digital playground to showcase projects and
            experiment with new technologies. Outside of coding, I enjoy
            competitive volleyball, traveling, reading history, going to the
            gym, and gaming.
          </li>
          <li className="italic">
            Currently pursuing my Master&apos;s at{" "}
            <span className="font-bold text-blue-700 dark:text-blue-300">
              Carnegie Mellon University
            </span>
            , focusing on distributed systems, software engineering, and AI.
          </li>
          <li>
            Previously, I worked in the Bay Area at a healthcare tech company
            and interned at a major FinTech firm, gaining hands-on experience in
            building production software and collaborating with cross-functional
            teams.
          </li>
        </ul>
      </div>
    </motion.section>
  );
}
