import type { Metadata } from "next";
import { projects, type Project } from "../data/projects";
import { GlowProjectCard } from "../components/Projects";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Projects | Rose Sharon Anchi",
  description:
    "Explore all software development projects built by Rose Sharon Anchi.",
};

export default function AllProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-xs font-mono text-indigo-400 font-semibold uppercase tracking-wider block mb-2">
              Archive & Showcase
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
              All Projects
            </h1>
            <p className="text-gray-400 max-w-2xl text-base">
              A comprehensive collection of full-stack platforms, open-source utilities, and responsive web applications I&apos;ve built.
            </p>
          </div>

          <div className="flex flex-col gap-10">
            {projects.map((project: Project) => (
              <GlowProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}