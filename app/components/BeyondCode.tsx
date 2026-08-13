"use client";

import { motion } from "framer-motion";

export default function BeyondCode() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-xs font-mono text-indigo-400 font-semibold">
            05.
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            Beyond Code
          </h2>
          <div className="h-[1px] bg-white/10 flex-grow max-w-xs" />
        </div>

        {/* Content Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card-glass p-8 md:p-10 rounded-2xl border border-white/10 max-w-4xl"
        >
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Along with software development, I also do graphic design,
            photography, and photo editing. Beyond my technical skills, I am
            deeply passionate about growth, learning, and constantly updating
            myself, holding close to the words of B.B. King who said, &quot;The
            beautiful thing about learning is that nobody can take it away from
            you.&quot; Outside of work, I really enjoy cooking, listening to
            music, and watching podcasts, especially Oprah Winfrey.
          </p>
        </motion.div>
      </div>
    </section>
  );
}