"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/5 py-8 bg-[#06070d]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-sm font-bold text-white tracking-tight">
            Rose Sharon Anchi Tanga
          </span>
          <p className="text-xs text-gray-500 mt-1">
            © {new Date().getFullYear()} Rose Sharon Anchi Tanga. Built with precision.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/rosesharonanchi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-400 hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/rose-sharon-anchi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-400 hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:tanchitech@gmail.com"
            className="text-xs text-gray-400 hover:text-white transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}