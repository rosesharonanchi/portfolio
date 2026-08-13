"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-xs font-mono text-indigo-400 font-semibold">
            01.
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            About Me
          </h2>
          <div className="h-[1px] bg-white/10 flex-grow max-w-xs" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Block: Bio & Key Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 card-glass p-8 rounded-2xl border border-white/10"
          >
            <p className="text-gray-300 text-base leading-relaxed mb-8">
              As a Software Developer with a B.Tech from the University of Buea,
              I bring a strong academic foundation to practical engineering
              challenges. My approach focuses on writing clean, maintainable code
              that directly impacts performance metrics and user satisfaction.
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#0c0e1a] p-6 rounded-xl border border-white/5">
                <span className="block text-3xl font-bold text-indigo-400 mb-1">
                  28%
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-gray-400">
                  Page Load Reduction
                </span>
              </div>
              <div className="bg-[#0c0e1a] p-6 rounded-xl border border-white/5">
                <span className="block text-3xl font-bold text-indigo-400 mb-1">
                  35%
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-gray-400">
                  Fewer Network Requests
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Block: Education Journey */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="card-glass p-6 rounded-2xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500" />
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-bold text-white">
                    B.Tech in Software Engineering
                  </h3>
                  <p className="text-sm text-gray-400">University of Buea</p>
                </div>
                <span className="text-xs font-mono text-indigo-300 bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-500/20">
                  GPA: 3.37 / 4.0
                </span>
              </div>
            </div>

            <div className="card-glass p-6 rounded-2xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500/50" />
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-base font-bold text-white">
                    Advanced Level
                  </h3>
                  <p className="text-sm text-gray-400">GCE Advanced Level</p>
                </div>
                <span className="text-xs font-mono text-indigo-300 bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-500/20">
                  Score: 23 / 25
                </span>
              </div>
            </div>

            <div className="card-glass p-6 rounded-2xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500/30" />
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-base font-bold text-white">
                    Ordinary Level
                  </h3>
                  <p className="text-sm text-gray-400">GCE Ordinary Level</p>
                </div>
                <span className="text-xs font-mono text-indigo-300 bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-500/20">
                  Score: 29 / 33
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}