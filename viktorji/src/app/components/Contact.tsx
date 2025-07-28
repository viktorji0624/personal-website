"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <motion.section
      className="mb-12"
      id="contact"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div>
        <h2 className="text-2xl font-semibold mb-4">Email Me</h2>
        <a
          href="mailto:viktorj@andrew.cmu.edu"
          className="hover:text-red-500 transition flex items-center gap-2 mb-6 text-gray-700 dark:text-gray-200"
          title="Email"
        >
          <Mail size={28} /> viktorj@andrew.cmu.edu
        </a>

        {/* Contact form */}
        <h2 className="text-2xl font-semibold mb-4">Leave a Message</h2>
        <form
          action="https://formsubmit.co/viktorj@andrew.cmu.edu"
          method="POST"
          className="flex flex-col space-y-4 justify-center"
        >
          {/* Protect against spam */}
          <input type="hidden" name="_captcha" value="false" />

          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            type="text"
            name="contact"
            placeholder="Contact Information (email or phone)"
            required
            className="p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <textarea
            name="message"
            placeholder="Message"
            required
            rows={4}
            className="p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
          />
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
          >
            Send Message
          </button>
        </form>
      </div>
    </motion.section>
  );
}
