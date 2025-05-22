"use client";
import { FileText } from "lucide-react";

export function Resume() {
  return (
    <div className="z-50 float-left">
      <a
        href="https://docs.google.com/document/d/1nOtcYWxUjB4XX4vnf_1SwHIFQk7sqKU1n4tnKG5xxbM/preview?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center  bg-blue-600 text-white px-2 py-2 w-31 h-11 rounded-lg shadow hover:bg-blue-700 transition"
      >
        <FileText size={28} />
        <span className="text-base ml-3"> Resume</span>
      </a>
    </div>
  );
}

export const ChineseResume = () => {
  return (
    <div className="z-50 float-left">
      <a
        href="RESUME-CN.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center  bg-red-600 text-white px-2 py-2  w-31 h-11 rounded-lg shadow hover:bg-red-800 transition"
      >
        <FileText size={28} />
        <span className="text-base ml-3">中文简历</span>
      </a>
    </div>
  );
};
