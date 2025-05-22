import { Linkedin, Mail, Github, FileText } from "lucide-react";

const iconSize = 38;

export default function SocialLinks() {
  return (
    <div className="flex gap-6 mt-4 pl-5 text-blue-600">
      <a
        href="https://linkedin.com/in/viktor-ji-cmu"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition"
        title="LinkedIn"
      >
        <Linkedin size={iconSize} />
      </a>
      <a
        href="mailto:viktorj@andrew.cmu.edu"
        className="hover:text-red-500 transition"
        title="Email"
      >
        <Mail size={iconSize} />
      </a>
      <a
        href="https://github.com/viktorji0624"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-green-600 transition"
        title="GitHub"
      >
        <Github size={iconSize} />
      </a>
      <a
        href="RESUME-EN.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-200 transition flex-col items-center"
        title="Resume / CV"
      >
        <FileText size={iconSize} /> <span className="text-lg">CV</span>
      </a>
    </div>
  );
}
