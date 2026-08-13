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
  },
  {
    role: "Software Development Intern",
    company: "Orange Digital Center",
    period: "Jul 2023 – Aug 2023",
    bullets: [
      "Situation & Task: Identified a critical local need for rapid health screening by leading a team of 4 to design an AI-powered symptom analysis web platform.",
      "Action: Engineered responsive frontend interfaces with HTML, CSS, and JavaScript, integrating real-time API endpoints for AI disease prediction and user diagnostic flows.",
      "Result: Successfully pitched and demonstrated the working AI chatbot prototype to an expert panel, earning top technical evaluation marks for UX design and functional accuracy.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-20">
          <span className="text-xs font-mono text-indigo-400 font-semibold">
            02.
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            Work Experience
          </h2>
          <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest hidden sm:inline">
            PROFESSIONAL JOURNEY
          </span>
          <div className="h-[1px] bg-white/10 flex-grow max-w-xs" />
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Glowing Vertical Line for Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-indigo-500 via-purple-500 to-indigo-500/20 -translate-x-1/2 shadow-[0_0_15px_rgba(99,102,241,0.6)]" />

          {/* Glowing Vertical Line for Mobile */}
          <div className="lg:hidden absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-indigo-500 via-purple-500 to-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.6)]" />

          <div className="flex flex-col gap-16">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Glowing Node Marker */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                      delay: 0.1,
                    }}
                    className="absolute left-4 lg:left-1/2 -translate-x-1/2 z-10 w-10 h-10 rounded-full bg-[#080911] border-2 border-indigo-400 shadow-[0_0_20px_rgba(129,140,248,0.8)] flex items-center justify-center text-xs font-mono font-bold text-indigo-300"
                  >
                    0{index + 1}
                  </motion.div>

                  {/* Date Badge */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className={`w-full lg:w-1/2 pl-16 lg:pl-0 ${
                      isEven
                        ? "lg:pr-16 lg:text-right"
                        : "lg:pl-16 lg:text-left"
                    } mb-3 lg:mb-0`}
                  >
                    <span className="inline-block text-xs font-mono text-indigo-300 bg-indigo-500/10 border border-indigo-500/30 px-3 py-1 rounded-full uppercase tracking-wider font-semibold shadow-[0_0_10px_rgba(99,102,241,0.2)]">
                      {exp.period}
                    </span>
                  </motion.div>

                  {/* Card Body - Exaggerated Pop Animation */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.7, y: 50 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{
                      type: "spring",
                      bounce: 0.4,
                      duration: 0.8,
                    }}
                    className={`w-full lg:w-1/2 pl-16 lg:pl-0 ${
                      isEven ? "lg:pl-16" : "lg:pr-16"
                    }`}
                  >
                    <div className="card-glass p-6 md:p-8 rounded-2xl border border-white/10 hover:border-indigo-400 hover:shadow-[0_0_30px_rgba(99,102,241,0.25)] transition-all duration-300 group">
                      <span className="text-xs font-mono text-indigo-400 font-semibold block mb-1 tracking-wider uppercase">
                        {exp.company}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors">
                        {exp.role}
                      </h3>
                      <ul className="space-y-3">
                        {exp.bullets.map((bullet, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-gray-300 flex items-start gap-2 leading-relaxed"
                          >
                            <span className="text-indigo-400 mt-1 font-bold">
                              ›
                            </span>
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