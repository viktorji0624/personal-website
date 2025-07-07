"use client";

import { motion } from "framer-motion";

export default function Projects() {
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
      id="projects"
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
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-200 border border-white/20 dark:border-gray-700/20"
            variants={fadeInUp}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-blue-600 dark:text-blue-300"
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
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Distributed Systems
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-200 text-sm mb-4">
              Built fault-tolerant distributed systems with consensus
              algorithms, implementing Raft protocol and distributed key-value
              stores.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-xs rounded-full">
                Go
              </span>
              <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-xs rounded-full">
                Raft
              </span>
              <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-xs rounded-full">
                gRPC
              </span>
            </div>
          </motion.div>

          <motion.div
            className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-200 border border-white/20 dark:border-gray-700/20"
            variants={fadeInUp}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-green-600 dark:text-green-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Machine Learning
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-200 text-sm mb-4">
              Developed ML models for computer vision, NLP, and recommendation
              systems using PyTorch and TensorFlow.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 text-xs rounded-full">
                PyTorch
              </span>
              <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 text-xs rounded-full">
                TensorFlow
              </span>
              <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 text-xs rounded-full">
                Python
              </span>
            </div>
          </motion.div>

          <motion.div
            className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-200 border border-white/20 dark:border-gray-700/20"
            variants={fadeInUp}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-purple-600 dark:text-purple-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Mobile Development
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-200 text-sm mb-4">
              Created cross-platform mobile applications with React Native and
              native iOS/Android development.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 text-xs rounded-full">
                React Native
              </span>
              <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 text-xs rounded-full">
                Swift
              </span>
              <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 text-xs rounded-full">
                Kotlin
              </span>
            </div>
          </motion.div>

          <motion.div
            className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-200 border border-white/20 dark:border-gray-700/20"
            variants={fadeInUp}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-orange-600 dark:text-orange-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Web Development
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-200 text-sm mb-4">
              Built full-stack web applications with modern frameworks,
              databases, and cloud deployment.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 text-xs rounded-full">
                React
              </span>
              <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 text-xs rounded-full">
                Node.js
              </span>
              <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 text-xs rounded-full">
                AWS
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
