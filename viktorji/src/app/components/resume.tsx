"use client";
import { FileText } from "lucide-react";

export function Resume() {
  return (
    <div className="z-50 float-left">
      <a
        href="https://docs.google.com/document/d/1nOtcYWxUjB4XX4vnf_1SwHIFQk7sqKU1n4tnKG5xxbM/preview?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center  bg-blue-600 text-white px-2 py-2 w-30 h-12 rounded-lg shadow hover:bg-blue-700 transition"
      >
        <FileText size={28} />
        <span className="text-base ml-3"> Resume</span>
      </a>
    </div>
  );
}

export const ChineseResume = () => {
  const handleClick = () => {
    window.open("RESUME-CN.pdf", "_blank");
  };
  return (
    <div className="z-50 float-left">
      <button
        onClick={handleClick}
        // target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center  bg-red-600 text-white px-2 py-2  w-30 h-12 rounded-lg shadow hover:bg-red-800 transition"
      >
        <FileText size={28} />
        <span className="text-base ml-3">中文简历</span>
      </button>
    </div>
  );
};
