"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import Image from "next/image";
import GridDistortion from "@/components/GridDistortion";
import SplashCursor from "@/components/SplashCursor";

export default function Hero() {
  return (
    <section 
      id="home"
      className="relative w-full h-screen min-h-[800px] flex items-center bg-[#020412] overflow-hidden"
    >
      <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
        <GridDistortion 
          imageSrc="/hero_art.png"
          grid={10}
          mouse={0.1}
          strength={0.15}
          relaxation={0.9}
          className="w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 z-10 pointer-events-none mix-blend-screen opacity-80">
          <SplashCursor 
            COLOR="#D4AF37" 
            RAINBOW_MODE={false} 
            SPLAT_RADIUS={0.4}
            SPLAT_FORCE={4000}
            DENSITY_DISSIPATION={2.5}
          />
        </div>
        
        {/* Gradient overlays to match the reference image's dark left side and vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020412] via-[#020412]/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#020412] via-transparent to-[#020412]/50 z-10 pointer-events-none"></div>
      </div>

      {/* Main Content Area */}
      <div className="container relative z-20 mx-auto px-6 lg:px-12 flex justify-between items-center w-full pt-20">
        
        {/* Left Side: Typography and CTA */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl flex flex-col gap-6"
        >
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-white/90 text-lg md:text-xl font-medium tracking-wide"
          >
            Luxury Embroidery Institute
          </motion.h3>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-5xl md:text-7xl lg:text-[6rem] font-heading font-bold text-white leading-[1.1] uppercase tracking-wide drop-shadow-lg"
          >
            Master <br/>
            The Art Of <br/>
            Aari Work
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-white/80 text-base md:text-lg max-w-md font-light leading-relaxed mt-2"
          >
            Experience hands-on, immersive learning in our premium offline embroidery studio. We blend the rich heritage of Indian embroidery with modern haute couture.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center gap-4 mt-6"
          >
            <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-3.5 bg-white text-black text-sm font-semibold rounded-full flex items-center justify-center gap-2 hover:bg-brand-gold hover:text-white transition-colors duration-300">
              Book Now <ArrowRight className="w-4 h-4" />
            </a>
            <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-3.5 border border-white/50 text-white text-sm font-semibold rounded-full flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-colors duration-300 backdrop-blur-sm bg-white/5">
              View Portfolio <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>

        {/* Middle Right Side: AI Generated Image of Aari Girl */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
          className="hidden lg:block absolute right-32 top-1/2 -translate-y-1/2 z-20 w-[400px] xl:w-[450px] aspect-[3/4]"
        >
          <div className="w-full h-full relative rounded-tl-[120px] rounded-br-[120px] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.6)] border border-brand-gold/20">
            {/* Subtle overlay for blending */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#020412]/40 via-transparent to-brand-gold/10 z-10 pointer-events-none"></div>
            <Image 
              src="/aari_girl.png" 
              alt="Beautiful girl doing Aari embroidery work" 
              fill 
              sizes="(max-width: 1024px) 100vw, 450px"
              className="object-cover hover:scale-105 transition-transform duration-1000 ease-out"
            />
          </div>
        </motion.div>

        {/* Right Side: Social Icons (Hidden on mobile to match desktop reference style) */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="hidden lg:flex flex-col items-center gap-6 absolute right-6 xl:right-12 top-1/2 -translate-y-1/2 z-30"
        >
          {/* Top Line */}
          <div className="w-[1px] h-32 bg-white/30"></div>
          
          {/* Social Links */}
          <div className="flex flex-col gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-brand-gold hover:border-brand-gold transition-colors duration-300 hover:scale-110 transform">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-brand-gold hover:border-brand-gold transition-colors duration-300 hover:scale-110 transform">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.98-10.169a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-brand-gold hover:border-brand-gold transition-colors duration-300 hover:scale-110 transform">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
            </a>
          </div>

          {/* Bottom Line */}
          <div className="w-[1px] h-32 bg-white/30"></div>
        </motion.div>

      </div>
    </section>
  );
}
