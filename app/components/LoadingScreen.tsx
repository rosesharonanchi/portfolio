"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DevPreloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [statusText, setStatusText] = useState("> initializing environment...");

  useEffect(() => {
    const totalDuration = 3000; // Exactly 3 seconds
    const intervalTime = 30; // Smooth 30ms ticks
    const increment = 100 / (totalDuration / intervalTime);

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;

        // Dynamic terminal status messages based on completion
        if (next >= 75) {
          setStatusText("> rendering portfolio layout...");
        } else if (next >= 45) {
          setStatusText("> compiling react components...");
        } else if (next >= 20) {
          setStatusText("> fetching assets & scripts...");
        }

        if (next >= 100) {
          clearInterval(interval);
          setStatusText("> system ready.");
          setTimeout(() => setIsLoading(false), 300); // Brief pause at 100% before exit
          return 100;
        }

        return next;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-[#05060f] flex flex-col items-center justify-center font-mono p-6 select-none"
        >
          {/* Subtle Background Glow */}
          <div className="absolute w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 w-full max-w-md space-y-4">
            {/* Header info */}
            <div className="flex items-center justify-between text-xs text-indigo-400 font-semibold">
              <span className="tracking-wider">SYSTEM_INIT // ROSE_SHARON_ANCHI</span>
              <span>{Math.round(progress)}%</span>
            </div>

            {/* Terminal Progress Bar */}
            <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/10 shadow-[0_0_15px_rgba(99,102,241,0.15)]">
              <motion.div
                className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-400 rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ ease: "linear" }}
              />
            </div>

            {/* Dynamic Status Text */}
            <div className="text-[11px] text-gray-400 flex justify-between items-center">
              <span className="text-gray-400">{statusText}</span>
              <span className="animate-pulse text-indigo-400 font-bold">
                {progress === 100 ? "READY" : "LOADING"}
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}