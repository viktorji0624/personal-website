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
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div>
        <h2 className="text-2xl font-semibold mb-4">About</h2>
        <ul className="flex flex-col gap-3 text-gray-700 dark:text-gray-200 text-base leading-relaxed">
          <li>
            Hi! I&apos;m Viktor, an experienced software engineer passionate
            about building impactful, real-world solutions. This website is my
            digital playground to showcase projects and experiment with new
            technologies. Outside of coding, I enjoy competitive volleyball,
            traveling, reading history, going to the gym, and gaming.
          </li>
          <li className="italic">
            I am currently pursuing my Master&apos;s in{" "}
            <span className="font-bold text-blue-700 dark:text-blue-300">
              Carnegie Mellon University
            </span>
            , focusing on distributed systems, software engineering, and AI. I
            previously worked at a healthcare tech company in the Bay Area and
            interned at a leading FinTech firm, where I gained hands-on
            experience developing production-grade software and collaborating
            with cross-functional teams.
          </li>
        </ul>
      </div>
    </motion.section>
  );
}
