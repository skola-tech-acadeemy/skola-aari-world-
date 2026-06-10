"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import MagicRings from "@/components/MagicRings";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide preloader from DOM after animations finish to allow interaction
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[99999] pointer-events-none flex">
      {/* Background panels that slide up one by one */}
      <motion.div 
        initial={{ y: "0%" }}
        animate={{ y: "-100%" }}
        transition={{ duration: 1, delay: 1.2, ease: [0.76, 0, 0.24, 1] }}
        className="w-full h-full bg-black absolute top-0 left-0"
      />
      <motion.div 
        initial={{ y: "0%" }}
        animate={{ y: "-100%" }}
        transition={{ duration: 1, delay: 1.4, ease: [0.76, 0, 0.24, 1] }}
        className="w-full h-full bg-brand-gold absolute top-0 left-0"
      />
      <motion.div 
        initial={{ y: "0%" }}
        animate={{ y: "-100%" }}
        transition={{ duration: 1, delay: 1.6, ease: [0.76, 0, 0.24, 1] }}
        className="w-full h-full bg-black absolute top-0 left-0 flex items-center justify-center overflow-hidden"
      >
        {/* Magic Rings Background Animation */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-60">
           <MagicRings 
             color="#D4AF37" 
             colorTwo="#C5A017" 
             speed={1.5} 
             ringCount={8} 
             opacity={1}
           />
        </div>
        
        <div className="overflow-hidden z-10">
          <motion.h1 
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-4xl md:text-6xl font-heading text-white tracking-widest font-bold uppercase drop-shadow-2xl"
          >
            Skola Aari World
          </motion.h1>
        </div>
      </motion.div>
    </div>
  );
}
