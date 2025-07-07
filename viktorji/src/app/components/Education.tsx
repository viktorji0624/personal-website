"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Education() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.section
      className="mb-12"
      id="education"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-white/20 dark:border-gray-700/20">
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2 border-gray-200 dark:border-neutral-700">
          Education
        </h2>
        <motion.div
          className="flex flex-col gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div className="flex items-center gap-4" variants={fadeInUp}>
            <Image
              src="/CMU.png"
              className="w-12 h-12 rounded-md border border-gray-200 dark:border-neutral-700 bg-white"
              alt={"CMU LOGO"}
              width={48}
              height={48}
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Carnegie Mellon University - School of Computer Science
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-300">
                M.S. in Software Engineering | Dec 2026 (Expected) | Pittsburgh,
                PA
              </p>
            </div>
          </motion.div>
          <motion.div className="flex items-center gap-4" variants={fadeInUp}>
            <Image
              src="/UMICH.jpg"
              className="w-12 h-12 rounded-md border border-gray-200 dark:border-neutral-700 bg-white"
              alt={"UMICH LOGO"}
              width={48}
              height={48}
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                University of Michigan - Ann Arbor
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-300">
                B.S. in Computer Science | May 2022 | Ann Arbor, MI
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
