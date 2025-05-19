import { Linkedin, Mail, Github } from "lucide-react";

export default function SocialLinks() {
  return (
    <div className="flex justify-center gap-6 mt-4 text-blue-600">
      <a
        href="https://linkedin.com/in/viktor-ji-cmu"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#0077B5] transition"
        title="LinkedIn"
      >
        <Linkedin size={28} />
      </a>
      <a
        href="mailto:viktorj@andrew.cmu.edu"
        className="hover:text-red-500 transition"
        title="Email"
      >
        <Mail size={28} />
      </a>
      <a
        href="https://github.com/viktorji0624"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gray-800 transition"
        title="GitHub"
      >
        <Github size={28} />
      </a>
    </div>
  );
}
