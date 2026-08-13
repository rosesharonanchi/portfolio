"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DevPreloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) {
          clearInterval(interval);
          return 90;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 80);

    const handleLoad = () => {
      setProgress(100);
      setTimeout(() => setIsLoading(false), 400);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      clearInterval(interval);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-[#05060f] flex flex-col items-center justify-center font-mono p-6"
        >
          <div className="w-full max-w-md space-y-4">
            <div className="flex items-center justify-between text-xs text-indigo-400">
              <span>SYSTEM_INIT // ROSE_SHARON_ANCHI</span>
              <span>{progress}%</span>
            </div>

            {/* Terminal Bar */}
            <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="text-[11px] text-gray-500 flex justify-between">
              <span>&gt; fetching assets & scripts...</span>
              <span className="animate-pulse text-indigo-400">LOADING</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}