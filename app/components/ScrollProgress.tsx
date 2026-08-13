"use client";

import { useScroll, useSpring, motion, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      setPercentage(Math.round(latest * 100));
    });
  }, [scrollYProgress]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      {/* Glow Progress Bar */}
      <motion.div
        className="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 origin-left"
        style={{ scaleX }}
      />
      {/* Floating Percentage Indicator */}
      <div className="absolute top-3 right-6 bg-[#080911]/90 border border-white/10 px-2.5 py-1 rounded-md text-[10px] font-mono text-indigo-300 backdrop-blur-md shadow-lg">
        {percentage}%
      </div>
    </div>
  );
}