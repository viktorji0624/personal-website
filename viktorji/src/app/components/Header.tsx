"use client";

import Image from "next/image";
import SocialLinks from "./socials";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-10 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm shadow-lg rounded-2xl p-8 border border-white/20 dark:border-gray-700/20"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      id="home"
    >
      <Image
        src="/me.jpeg"
        alt="Viktor Ji"
        width={300}
        height={300}
        className="object-cover rounded-4xl border-4 shadow-md"
      />
      <div className="flex flex-col items-center lg:items-start gap-4">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Viktor Ji
        </h1>
        <p className="text-lg md:text-xl text-blue-700 dark:text-blue-300 font-medium">
          Software Engineer
        </p>
        <p className="text-base text-gray-500 dark:text-gray-300 max-w-md text-center lg:text-left">
          Building elegant, scalable solutions and exploring the intersection of
          software engineering and AI.
        </p>
        <div className="mt-2">{SocialLinks()}</div>
      </div>
    </motion.header>
  );
}
