"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Globe,
  Database,
  Terminal,
  Layers,
  Server,
  Workflow,
  Cpu,
} from "lucide-react";

const categories = ["ALL", "Languages", "Frontend", "Backend", "Databases", "Tools"];

const skills = [
  { name: "JavaScript", category: "Languages", icon: Code },
  { name: "TypeScript", category: "Languages", icon: Code },
  { name: "Go (Golang)", category: "Languages", icon: Cpu },
  { name: "HTML5 / CSS3", category: "Frontend", icon: Globe },
  { name: "React.js", category: "Frontend", icon: Layers },
  { name: "Next.js", category: "Frontend", icon: Globe },
  { name: "Tailwind CSS", category: "Frontend", icon: Layers },
  { name: "Node.js", category: "Backend", icon: Server },
  { name: "REST APIs", category: "Backend", icon: Server },
  { name: "PostgreSQL", category: "Databases", icon: Database },
  { name: "SQL", category: "Databases", icon: Database },
  { name: "Git / GitHub", category: "Tools", icon: Workflow },
  { name: "Vercel", category: "Tools", icon: Terminal },
  { name: "Postman", category: "Tools", icon: Terminal },
  { name: "Technical SEO", category: "Tools", icon: Globe },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredSkills =
    activeCategory === "ALL"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-xs font-mono text-indigo-400 font-semibold">
            04.
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            Technical Arsenal
          </h2>
          <div className="h-[1px] bg-white/10 flex-grow max-w-xs" />
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-mono uppercase px-4 py-2 rounded-full border transition-all ${
                activeCategory === cat
                  ? "bg-indigo-500 text-white border-indigo-500 shadow-lg shadow-indigo-500/25"
                  : "card-glass text-gray-400 border-white/10 hover:border-indigo-500/30 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {filteredSkills.map((skill) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={skill.name}
                className="card-glass p-6 rounded-2xl border border-white/10 flex flex-col items-center justify-center text-center gap-3 hover:border-indigo-500/40 hover:-translate-y-1 transition-all group"
              >
                <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:scale-110 transition-transform">
                  <IconComponent size={22} />
                </div>
                <span className="text-sm font-semibold text-gray-200 group-hover:text-white transition-colors">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}