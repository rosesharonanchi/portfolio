"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";

// Border-only glowing card component with hover pop
function GlowBorderCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative rounded-2xl card-glass p-8 border border-white/10 transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(99,102,241,0.25)] ${className}`}
    >
      {/* Strict Border-Only Glow Mask */}
      <div
        className="pointer-events-none absolute -inset-[1px] rounded-2xl transition-opacity duration-300 z-30"
        style={{
          opacity,
          background: `radial-gradient(250px circle at ${mousePos.x}px ${mousePos.y}px, rgba(129, 140, 248, 0.9), transparent 80%)`,
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "1.5px",
        }}
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-mono text-indigo-400 font-semibold">
            01.
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            About Me
          </h2>
          <div className="h-[1px] bg-white/10 flex-grow max-w-xs" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Bio & Metrics */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{
              type: "spring",
              bounce: 0.4,
              duration: 0.8,
            }}
            className="lg:col-span-7"
          >
            <GlowBorderCard>
              <p className="text-gray-300 text-base leading-relaxed mb-8">
                As a Software Developer with a B.Tech from the University of Buea,
                I bring a strong academic foundation to practical engineering
                challenges. My approach focuses on writing clean, maintainable code
                that directly impacts performance metrics and user satisfaction.
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#0c0e1a] p-6 rounded-xl border border-white/5 hover:border-indigo-500/40 transition-colors">
                  <span className="block text-3xl font-bold text-indigo-400 mb-1 drop-shadow-[0_0_10px_rgba(129,140,248,0.5)]">
                    28%
                  </span>
                  <span className="text-xs font-mono uppercase tracking-wider text-gray-400">
                    Page Load Reduction
                  </span>
                </div>
                <div className="bg-[#0c0e1a] p-6 rounded-xl border border-white/5 hover:border-indigo-500/40 transition-colors">
                  <span className="block text-3xl font-bold text-indigo-400 mb-1 drop-shadow-[0_0_10px_rgba(129,140,248,0.5)]">
                    35%
                  </span>
                  <span className="text-xs font-mono uppercase tracking-wider text-gray-400">
                    Fewer Network Requests
                  </span>
                </div>
              </div>
            </GlowBorderCard>
          </motion.div>

          {/* Education Journey Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* University */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{
                type: "spring",
                bounce: 0.4,
                duration: 0.8,
                delay: 0.1,
              }}
            >
              <GlowBorderCard className="!p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      B.Tech in Software Engineering
                    </h3>
                    <p className="text-sm text-gray-400">University of Buea</p>
                  </div>
                  <span className="text-xs font-mono text-indigo-300 bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-500/30 shadow-[0_0_10px_rgba(99,102,241,0.2)]">
                    GPA: 3.51 / 4.0
                  </span>
                </div>
              </GlowBorderCard>
            </motion.div>

            {/* A-Level */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{
                type: "spring",
                bounce: 0.4,
                duration: 0.8,
                delay: 0.2,
              }}
            >
              <GlowBorderCard className="!p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-base font-bold text-white">
                      Advanced Level
                    </h3>
                    <p className="text-sm text-gray-400">
                      B.G.S Molyko Buea (GCE A-Level)
                    </p>
                  </div>
                  <span className="text-xs font-mono text-indigo-300 bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-500/30 shadow-[0_0_10px_rgba(99,102,241,0.2)]">
                    Score: 23 / 25
                  </span>
                </div>
              </GlowBorderCard>
            </motion.div>

            {/* O-Level */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{
                type: "spring",
                bounce: 0.4,
                duration: 0.8,
                delay: 0.3,
              }}
            >
              <GlowBorderCard className="!p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-base font-bold text-white">
                      Ordinary Level
                    </h3>
                    <p className="text-sm text-gray-400">
                      B.G.S Molyko Buea (GCE O-Level)
                    </p>
                  </div>
                  <span className="text-xs font-mono text-indigo-300 bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-500/30 shadow-[0_0_10px_rgba(99,102,241,0.2)]">
                    Score: 29 / 33
                  </span>
                </div>
              </GlowBorderCard>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}