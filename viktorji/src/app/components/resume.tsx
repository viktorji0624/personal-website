"use client";
import { FileText, Download } from "lucide-react";
import { motion } from "framer-motion";

export function Resume() {
  return (
    <motion.div
      className="w-full"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <a
        href="RESUME-EN.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border border-blue-500/20"
      >
        <FileText size={20} />
        <span className="text-sm font-medium">Resume (EN)</span>
        <Download size={16} />
      </a>
    </motion.div>
  );
}

export const ChineseResume = () => {
  return (
    <motion.div
      className="w-full"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <a
        href="RESUME-CN.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-4 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border border-red-500/20"
      >
        <FileText size={20} />
        <span className="text-sm font-medium">简历 (CN)</span>
        <Download size={16} />
      </a>
    </motion.div>
  );
};
