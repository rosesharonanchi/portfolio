"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "Iknite Studio",
    period: "Nov 2025 – May 2026",
    bullets: [
      "Rewrote slow UI components using React.js, TypeScript, and Tailwind CSS, reducing page load times by 28% and raising mobile retention by 15%.",
      "Standardized API integration setups using custom React Hooks, cutting redundant network requests by 35% and fixing cross-browser visual bugs.",
      "Built features alongside developers and designers using Git/GitHub workflows, shipping sprint tasks 20% faster.",
    ],
    alignment: "left",
  },
  {
    role: "Frontend Developer Intern",
    company: "Wandaprep Ltd",
    period: "Jul 2024 – Sept 2024",
    bullets: [
      "Built an interactive student chat feature using Socket.io and Node.js, keeping real-time message delivery latency under 100ms.",
      "Created a modular UI component library using React Hooks and CSS Modules, cutting duplicate code across 12 pages by 30%.",
      "Participated in daily standups and code reviews to improve team code quality and resolve frontend issues quickly.",
    ],
    alignment: "right",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-mono text-indigo-400 font-semibold">
            02.
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            Work Experience
          </h2>
          <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest hidden sm:inline">
            PROFESSIONAL JOURNEY!
          </span>
          <div className="h-[1px] bg-white/10 flex-grow max-w-xs" />
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Vertical Line for Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-indigo-500/20 -translate-x-1/2" />

          {/* Vertical Line for Mobile */}
          <div className="lg:hidden absolute left-4 top-0 bottom-0 w-[2px] bg-indigo-500/20" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Badge/Node */}
                  <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 z-10 w-8 h-8 rounded-full bg-[#080911] border-2 border-indigo-500 flex items-center justify-center text-xs font-mono text-indigo-300">
                    0{index + 1}
                  </div>

                  {/* Date Badge */}
                  <div
                    className={`w-full lg:w-1/2 pl-12 lg:pl-0 ${
                      isEven ? "lg:pr-16 lg:text-right" : "lg:pl-16 lg:text-left"
                    } mb-2 lg:mb-0`}
                  >
                    <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider font-semibold">
                      {exp.period}
                    </span>
                  </div>

                  {/* Card Body */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className={`w-full lg:w-1/2 pl-12 lg:pl-0 ${
                      isEven ? "lg:pl-16" : "lg:pr-16"
                    }`}
                  >
                    <div className="card-glass p-6 md:p-8 rounded-2xl border border-white/10 hover:border-indigo-500/30 transition-all">
                      <span className="text-xs font-mono text-indigo-400 block mb-1">
                        {exp.company}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-4">
                        {exp.role}
                      </h3>
                      <ul className="space-y-3">
                        {exp.bullets.map((bullet, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-gray-300 flex items-start gap-2 leading-relaxed"
                          >
                            <span className="text-indigo-400 mt-1">›</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}