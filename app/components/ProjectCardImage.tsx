"use client";

import Image from "next/image";

interface ProjectCardImageProps {
  src: string;
  alt: string;
  badgeText?: string;
}

export default function ProjectCardImage({
  src,
  alt,
  badgeText = "CampusMarket App",
}: ProjectCardImageProps) {
  return (
    <div className="relative group w-full overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-950/40 via-[#0b0d19] to-purple-950/30 p-4 md:p-6 border border-white/10 shadow-2xl backdrop-blur-xl">
      {/* Background Accent Glow */}
      <div className="absolute -top-12 -left-12 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl group-hover:bg-indigo-500/35 transition-all duration-500" />
      <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-emerald-500/15 rounded-full blur-3xl group-hover:bg-emerald-500/25 transition-all duration-500" />

      {/* Browser Window Frame Container */}
      <div className="relative z-10 w-full rounded-xl overflow-hidden border border-white/10 bg-[#080911]/90 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] group-hover:-translate-y-1">
        
        {/* macOS Style Browser Header Bar */}
        <div className="h-9 bg-[#121526]/90 border-b border-white/10 px-4 flex items-center justify-between">
          {/* Traffic Light Dots */}
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>

          {/* Fake Address / Badge */}
          <div className="hidden sm:flex items-center justify-center px-3 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-gray-400">
            https://{badgeText.toLowerCase().replace(/\s+/g, "")}.com
          </div>

          <div className="w-12" /> {/* Spacer for symmetry */}
        </div>

        {/* Screenshot Image Frame */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
            priority
          />
        </div>
      </div>
    </div>
  );
}