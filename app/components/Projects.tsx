"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Student P2P Campus Marketplace",
    category: "Full-Stack Web App",
    description:
      "A full-stack marketplace platform allowing university students in Cameroon to safely buy and sell used textbooks and furniture. Features document-upload verification preventing fake account signups by 95% in testing.",
    tech: ["Next.js", "Go", "Tailwind CSS", "PostgreSQL"],
    image: "/project-marketplace.jpg", // Place image in public folder
    github: "https://github.com/rosesharonanchi",
    demo: "#",
  },
  {
    title: "Personal Finance Tracker",
    category: "Data Visualization",
    description:
      "An intuitive dashboard for tracking expenses and budgeting. Features interactive charts and predictive spending analysis using historical data, backed by a Go service handling 500+ entries with zero calculation errors.",
    tech: ["TypeScript", "Next.js", "Go", "SQL"],
    image: "/project-finance.jpg", // Place image in public folder
    github: "https://github.com/rosesharonanchi",
    demo: "#",
  },
  {
    title: "Brand E-Commerce Website & SEO",
    category: "E-Commerce & Optimization",
    description:
      "A high-performance web platform built for a local brand with an emphasis on responsive design and fast navigation. Implemented technical SEO, metadata, and image optimization to increase organic traffic by 45%.",
    tech: ["React.js", "Tailwind CSS", "Vercel"],
    image: "/project-ecommerce.jpg", // Place image in public folder
    github: "https://github.com/rosesharonanchi",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-mono text-indigo-400 font-semibold">
            03.
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            Featured Projects
          </h2>
          <div className="h-[1px] bg-white/10 flex-grow max-w-xs" />
        </div>

        {/* Projects Stack */}
        <div className="flex flex-col gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card-glass rounded-2xl border border-white/10 overflow-hidden hover:border-indigo-500/30 transition-all p-6 md:p-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Project Mockup / Image */}
                <div className="lg:col-span-7 relative aspect-video rounded-xl overflow-hidden border border-white/5 bg-[#0a0c16]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </div>

                {/* Project Info */}
                <div className="lg:col-span-5 flex flex-col justify-between h-full">
                  <div>
                    <span className="text-xs font-mono text-indigo-400 font-semibold block mb-2 uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-mono px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors p-2 bg-white/5 rounded-lg"
                        aria-label="View Github Repository"
                      >
                       <svg
  className="w-4 h-4 fill-current text-gray-400 hover:text-white transition-colors"
  viewBox="0 0 24 24"
  aria-hidden="true"
>
  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
</svg>
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors p-2 bg-white/5 rounded-lg"
                        aria-label="View Live Project"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}