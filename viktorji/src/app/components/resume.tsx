import { FileText } from "lucide-react";

export default function Resume() {
  return (
    <div className="z-50 float-left">
      <a
        href="https://docs.google.com/document/d/1nOtcYWxUjB4XX4vnf_1SwHIFQk7sqKU1n4tnKG5xxbM/preview?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-blue-600 text-white px-2 py-2 rounded-lg shadow hover:bg-blue-700 transition"
      >
        <FileText size={28} />
        <span className="text-base">View Resume</span>
      </a>
    </div>
  );
}
