"use client";

import { Code, Database, Search, Cpu, Bug, Gamepad2 } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AcademicProjects() {
  const projects = [
    {
      title: "Mini-Blog",
      course: "EECS 485, University of Michigan",
      icon: <Code size={20} />,
      description: "Full-stack web application with REST API",
      highlights: [
        "Flask backend with SQLite",
        "REST API implementation",
        "Interactive frontend with JavaScript",
      ],
    },
    {
      title: "Map-Reduce Search Engine",
      course: "EECS 485, University of Michigan",
      icon: <Search size={20} />,
      description: "Distributed search engine with PageRank",
      highlights: [
        "Multi-threaded MapReduce",
        "PageRank & HITS algorithms",
        "Inverted index construction",
      ],
    },
    {
      title: "LC-2K Assembly Simulator",
      course: "EECS 370, University of Michigan",
      icon: <Cpu size={20} />,
      description: "Computer architecture simulator",
      highlights: [
        "Assembly to machine code",
        "Instruction pipelining",
        "Cache implementation with LRU",
      ],
    },
    {
      title: "Quality Assurance & Defect Detector",
      course: "EECS 481, University of Michigan",
      icon: <Bug size={20} />,
      description: "Software testing and debugging tools",
      highlights: [
        "AST-based mutation testing",
        "Delta debugging",
        "Ochiai & Tarantula algorithms",
      ],
    },
    {
      title: "Algorithm Simulators",
      course: "EECS 281, University of Michigan",
      icon: <Database size={20} />,
      description: "Multiple algorithm implementations",
      highlights: [
        "Maze solver with DFS",
        "Drone delivery optimization",
        "Real-time stock trading",
      ],
    },
    {
      title: "Game Development",
      course: "EECS 183 & 280, University of Michigan",
      icon: <Gamepad2 size={20} />,
      description: "Interactive games and simulations",
      highlights: [
        "Arduino fruit-catcher game",
        "Euchre card simulator",
        "Difficulty scaling algorithms",
      ],
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" },
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
      id="academics"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-white/20 dark:border-gray-700/20">
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2 border-gray-200 dark:border-neutral-700">
          Academic Projects
        </h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-200 border border-white/20 dark:border-gray-700/20 group"
              variants={fadeInUp}
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="text-blue-500 dark:text-blue-300 group-hover:scale-110 transition-transform">
                  {project.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {project.course}
                    </p>
                    <Image
                      src="/UMICH.jpg"
                      className="w-4 h-4 rounded"
                      alt="UMICH LOGO"
                      width={16}
                      height={16}
                    />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                    {project.description}
                  </p>
                </div>
              </div>

              <ul className="space-y-1">
                {project.highlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="text-xs text-gray-500 dark:text-gray-400 flex items-start gap-2"
                  >
                    <span className="text-blue-400 mt-1">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
