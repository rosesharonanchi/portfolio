"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const phrases = [
  "Rose Sharon",
  "Tech Enthusiast",
  "Web Developer",
  "Cloud Practitioner",
];

const techBadges = ["React.js", "Next.js", "TypeScript", "Go", "Cloud"];

export default function Hero() {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    const typingSpeed = isDeleting ? 40 : 80;
    const pauseTime = isDeleting ? 0 : 1800;

    const timeout = setTimeout(() => {
      if (!isDeleting && text === currentPhrase) {
        // Pause at full word before deleting
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && text === "") {
        // Move to the next phrase
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      } else {
        // Type or delete characters
        const nextText = isDeleting
          ? currentPhrase.substring(0, text.length - 1)
          : currentPhrase.substring(0, text.length + 1);
        setText(nextText);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex]);

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 flex flex-col items-start"
        >
          <span className="text-xs uppercase tracking-[0.2em] font-mono text-indigo-400 font-semibold mb-3">
            Hello, World. I am
          </span>

          {/* Typing Title Section */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4 min-h-[1.2em] flex items-center">
            <span className="bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent">
              {text}
            </span>
            {/* Blinking Cursor */}
            <span className="inline-block w-[3px] h-[0.8em] bg-indigo-400 ml-1 animate-pulse" />
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

        {/* Floating Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative flex justify-center animate-float"
        >
          <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden border border-indigo-500/20 shadow-2xl shadow-indigo-950/60">
            <Image
              src="/hero-profile.jpg"
              alt="Rose Sharon Anchi"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}