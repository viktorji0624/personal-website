"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function WorkExperience() {
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
      id="work"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-white/20 dark:border-gray-700/20">
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2 border-gray-200 dark:border-neutral-700">
          Work Experience
        </h2>
        <motion.div
          className="flex flex-col gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-200 border border-white/20 dark:border-gray-700/20"
            variants={fadeInUp}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <Image
                  src="/forward.png"
                  alt="Forward Logo"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-lg object-contain"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Forward
                  </h3>
                  <p className="text-lg text-blue-600 dark:text-blue-300 font-medium">
                    Software Engineer
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  San Francisco, CA
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Jul 2022 — Mar 2024
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                  Key Achievements:
                </h4>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 text-sm space-y-2 ml-4">
                  <li>
                    <strong>Compliance Platform:</strong> Led end-to-end
                    development, reclaimed 1,900+ users and $200K/month revenue
                    from clinical/legal violations
                  </li>
                  <li>
                    <strong>Onboarding Optimization:</strong> Increased same-day
                    activation by 39%, 7-day activation by 10%, and user growth
                    revenue by &gt;5% in Q4 2022
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/watch?v=yy3WyaaJBPo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-400 underline transition"
                      title="CarePods Launch Video"
                    >
                      <strong>CarePod Launch:</strong> Drove backend development
                      for AI-powered autonomous mini-clinic
                    </a>
                    <span className="text-white">
                      {" "}
                      - Implemented FHIR HL7 integration, diagnostic queries,
                      automated lab orders
                    </span>
                  </li>
                  <li>
                    <strong>Clinical Workflow System:</strong> Reduced triage
                    time by ~10 mins, urgent task completion by 90%,
                    acknowledgement latency by 99%
                  </li>
                  <li>
                    <strong>System Reliability:</strong> Enhanced service uptime
                    through metric-driven fixes, saved 2 hours/week of
                    engineering time
                  </li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-xs rounded-full border border-blue-200 dark:border-blue-700">
                  React/TypeScript
                </span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-xs rounded-full border border-blue-200 dark:border-blue-700">
                  Golang + gRPC
                </span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-xs rounded-full border border-blue-200 dark:border-blue-700">
                  FHIR HL7
                </span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-xs rounded-full border border-blue-200 dark:border-blue-700">
                  Healthcare Tech
                </span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-xs rounded-full border border-blue-200 dark:border-blue-700">
                  Full-Stack
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-200 border border-white/20 dark:border-gray-700/20"
            variants={fadeInUp}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <Image
                  src="/wise.png"
                  alt="Wise Logo"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-lg object-contain"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Wise
                  </h3>
                  <p className="text-lg text-green-600 dark:text-green-300 font-medium">
                    Software Engineer Intern
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Budapest, Hungary
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Jun 2021 — Sep 2021
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                  Key Projects:
                </h4>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 text-sm space-y-2 ml-4">
                  <li>
                    <a
                      href="https://wise.com/help/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-500 hover:text-green-700 dark:text-green-300 dark:hover:text-green-400 underline transition"
                      title="Wise Help Center"
                    >
                      <strong>Article Recommendation Engine:</strong> Developed
                      using ElasticSearch in Help Center
                    </a>
                    <span className="text-gray-500 dark:text-gray-400">
                      {" "}
                      - Conducted A/B testing on ~196,000 users weekly
                    </span>
                  </li>
                  <li>
                    <strong>Performance Impact:</strong> Increased average
                    article viewership by 10%, decreased customer ticket volume
                    by 5%
                  </li>
                  <li>
                    <strong>Cost Savings:</strong> Saved an estimated ~€30,000
                    annually in customer service costs
                  </li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 text-xs rounded-full border border-green-200 dark:border-green-700">
                  ElasticSearch
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 text-xs rounded-full border border-green-200 dark:border-green-700">
                  A/B Testing
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 text-xs rounded-full border border-green-200 dark:border-green-700">
                  Recommendation Systems
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 text-xs rounded-full border border-green-200 dark:border-green-700">
                  FinTech
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
