"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

export default function Education() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const educationData = [
    {
      school: "Carnegie Mellon University",
      department: "School of Computer Science",
      degree: "M.S. Software Engineering",
      graduation: "Dec 2026",
      location: "Pittsburgh, PA",
      logo: "/CMU.png",
    },
    {
      school: "University of Michigan",
      location: "Ann Arbor, MI",
      degree: "B.S. Computer Science",
      graduation: "May 2022",
      logo: "/UMICH.jpg",
    },
  ];

  return (
    <motion.section
      className="mb-12"
      id="education"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div>
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Education
          </h2>
        </div>

        <motion.div
          className="space-y-3"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="p-4 rounded-lg transition-all duration-300 group"
              variants={fadeInUp}
              whileHover={{ y: -1, scale: 1.005 }}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Image
                    src={edu.logo}
                    className="w-10 h-10 rounded-lg border border-white dark:border-gray-700 bg-white shadow-sm group-hover:scale-105 transition-transform duration-300"
                    alt={`${edu.school} LOGO`}
                    width={40}
                    height={40}
                  />
                  <div className="flex flex-col gap-1">
                    <h3 className="text-l font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {edu.school}
                    </h3>
                    {edu.department && (
                      <p className="text-sm text-blue-600 dark:text-blue-300 font-medium">
                        {edu.department}
                      </p>
                    )}
                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                      {edu.degree}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-end space-y-1">
                  <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.graduation}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                    <MapPin className="w-4 h-4" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
