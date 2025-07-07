// components/Skills.tsx
import {
  Code,
  Database,
  Brain,
  Wrench,
  Zap,
  Server,
  Cloud,
  Palette,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code size={20} />,
      color: "blue",
      skills: ["Python", "JavaScript/TypeScript", "Golang", "Java", "C++"],
    },
    {
      title: "Frontend & UI",
      icon: <Palette size={20} />,
      color: "green",
      skills: ["React", "Next.js", "Redux", "Tailwind CSS", "GraphQL"],
    },
    {
      title: "Backend & APIs",
      icon: <Server size={20} />,
      color: "purple",
      skills: ["Node.js", "Flask", "REST APIs", "GraphQL", "Express.js"],
    },
    {
      title: "Databases",
      icon: <Database size={20} />,
      color: "indigo",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "SQLite", "Firebase"],
    },
    {
      title: "DevOps & Tools",
      icon: <Cloud size={20} />,
      color: "yellow",
      skills: ["Git", "Docker", "AWS", "Vercel", "Github Actions"],
    },
    {
      title: "Testing & Quality",
      icon: <Zap size={20} />,
      color: "red",
      skills: ["Jest", "Postman", "Figma", "Unit Testing", "CI/CD"],
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-500/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800",
      green:
        "bg-green-500/20 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800",
      purple:
        "bg-purple-500/20 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800",
      indigo:
        "bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800",
      yellow:
        "bg-yellow-500/20 text-yellow-700 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800",
      red: "bg-red-500/20 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800",
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
      indigo:
        "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200 border-indigo-200 dark:border-indigo-700",
      yellow:
        "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 border-yellow-200 dark:border-yellow-700",
      red: "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 border-red-200 dark:border-red-700",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

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
      id="skills"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-white/20 dark:border-gray-700/20">
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2 border-gray-200 dark:border-neutral-700">
          Technical Skills
        </h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-200 border border-white/20 dark:border-gray-700/20 group"
              variants={fadeInUp}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`p-2 rounded-lg ${getColorClasses(
                    category.color
                  )} group-hover:scale-110 transition-transform`}
                >
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-3 py-1 rounded-full text-xs font-medium border ${getBadgeColorClasses(
                      category.color
                    )} hover:scale-105 transition-transform cursor-default`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
