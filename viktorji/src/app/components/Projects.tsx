"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Play } from "lucide-react";

export default function Projects() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const projects = [
    {
      title: "Experts AI",
      description:
        "AI-driven platform that facilitates legal inquiries and provides intelligent assistance to legal questions using advanced language models.",
      demo: "/Experts AI Demo2.mp4",
      website: "https://experts-ai.vercel.app/",
      tech: [
        "Top 10% Y Combinator Summer 2025",
        "CMU Swartz Startup",
        "Next.js",
        "AI/ML",
        "TypeScript",
        "Tailwind CSS",
      ],
      color: "blue",
      featured: true,
    },
    {
      title: "Hamster",
      description:
        "Personalized Knowledge Management Platform that helps users organize and retrieve information efficiently with AI-powered search.",
      website: "https://hamsters-landing-page.webflow.io/",
      tech: [
        "McGinnis Competition Round 2",
        "React",
        "Node.js",
        "MongoDB",
        "AI/ML",
      ],
      color: "green",
    },
    {
      title: "Personal Website",
      description:
        "Github repository for this personal website showcasing modern web development with Next.js, Tailwind CSS, and Framer Motion animations.",
      github: "https://github.com/viktorji0624/personal-website",
      tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
      color: "purple",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-500/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800",
      green:
        "bg-green-500/20 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800",
      purple:
        "bg-purple-500/20 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800",
      orange:
        "bg-orange-500/20 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getBadgeColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 border-blue-200 dark:border-blue-700",
      green:
        "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 border-green-200 dark:border-green-700",
      purple:
        "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 border-purple-200 dark:border-purple-700",
      orange:
        "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 border-orange-200 dark:border-orange-700",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <motion.section
      className="mb-12"
      id="projects"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-white/20 dark:border-gray-700/20">
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2 border-gray-200 dark:border-neutral-700">
          Featured Projects
        </h2>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-white/20 dark:border-gray-700/20 overflow-hidden group ${
                project.featured ? "lg:col-span-2" : ""
              }`}
              variants={fadeInUp}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {project.featured && project.demo && (
                <div className="relative overflow-hidden rounded-t-xl">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  >
                    <source src={project.demo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <Play
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                      />
                    </div>
                  </div>
                </div>
              )}

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg ${getColorClasses(
                        project.color
                      )} group-hover:scale-110 transition-transform duration-200`}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.website ? (
                        <a
                          href={project.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {project.title}
                        </a>
                      ) : project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {project.title}
                        </a>
                      ) : (
                        project.title
                      )}
                    </h3>
                  </div>

                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-200"
                        title="View on GitHub"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.website && (
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-200"
                        title="Visit Website"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-200 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 rounded-full text-xs font-medium border ${getBadgeColorClasses(
                        project.color
                      )} hover:scale-105 transition-transform cursor-default`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
