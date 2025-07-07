import { Linkedin, Mail, Github, FileText } from "lucide-react";
import { motion } from "framer-motion";

const iconSize = 32;

export default function SocialLinks() {
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/viktor-ji-cmu",
      icon: <Linkedin size={iconSize} />,
      color: "hover:text-blue-600 dark:hover:text-blue-400",
      bgColor: "hover:bg-blue-50 dark:hover:bg-blue-900/20",
    },
    {
      name: "Email",
      href: "mailto:viktorj@andrew.cmu.edu",
      icon: <Mail size={iconSize} />,
      color: "hover:text-red-600 dark:hover:text-red-400",
      bgColor: "hover:bg-red-50 dark:hover:bg-red-900/20",
    },
    {
      name: "GitHub",
      href: "https://github.com/viktorji0624",
      icon: <Github size={iconSize} />,
      color: "hover:text-gray-800 dark:hover:text-gray-200",
      bgColor: "hover:bg-gray-50 dark:hover:bg-gray-800/20",
    },
    {
      name: "Resume",
      href: "RESUME-EN.pdf",
      icon: <FileText size={iconSize} />,
      color: "hover:text-purple-600 dark:hover:text-purple-400",
      bgColor: "hover:bg-purple-50 dark:hover:bg-purple-900/20",
    },
  ];

  return (
    <motion.div
      className="flex gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      {socialLinks.map((link, index) => (
        <motion.a
          key={index}
          href={link.href}
          target={
            link.href.startsWith("http") || link.href.endsWith(".pdf")
              ? "_blank"
              : undefined
          }
          rel={
            link.href.startsWith("http") || link.href.endsWith(".pdf")
              ? "noopener noreferrer"
              : undefined
          }
          className={`p-3 rounded-xl bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 text-gray-600 dark:text-gray-400 transition-all duration-200 hover:scale-110 hover:shadow-lg ${link.color} ${link.bgColor}`}
          title={link.name}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {link.icon}
        </motion.a>
      ))}
    </motion.div>
  );
}
