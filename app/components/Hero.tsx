"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const techBadges = ["React.js", "Next.js", "TypeScript", "Go", "Cloud"];

export default function Hero() {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      {/* Background Radial Light Effect for Space Vibe */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Text & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 flex flex-col items-start"
        >
          <span className="text-xs uppercase tracking-[0.2em] font-mono text-indigo-400 font-semibold mb-3">
            Hello, World. I am Rose
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Rose Sharon
          </h1>

          <h2 className="text-2xl md:text-4xl font-bold text-gray-300 leading-tight mb-6">
            Frontend & Full-Stack Developer.
          </h2>

          <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-8 max-w-2xl">
            I engineer scalable, high-performance web applications with a focus
            on exceptional user experiences. Specializing in modern JavaScript
            frameworks and robust backend architectures, I transform complex
            requirements into elegant, efficient digital solutions.
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2 mb-8">
            {techBadges.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-3.5 py-1.5 rounded-full card-glass text-gray-300 border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white font-medium text-sm transition-colors shadow-lg shadow-indigo-500/20"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg card-glass text-gray-200 hover:text-white font-medium text-sm border border-white/10 hover:border-indigo-500/40 transition-all"
            >
              Get in Touch
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 rounded-lg card-glass text-gray-200 hover:text-white font-medium text-sm border border-white/10 hover:border-indigo-500/40 transition-all flex items-center gap-2"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* Right Column: Hero Image Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 relative flex justify-center"
        >
          <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-indigo-950/50">
            <Image
              src="/hero-profile.jpg" // Place your profile photo in your public directory
              alt="Rose Sharon Anchi - Frontend and Full-Stack Developer"
              fill
              priority
              className="object-cover object-center hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}