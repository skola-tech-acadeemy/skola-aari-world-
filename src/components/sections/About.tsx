"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, History, Award } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import Ballpit from "@/components/Ballpit";
import SplashCursor from "@/components/SplashCursor";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#020412]">
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <Ballpit
          count={100}
          gravity={0.7}
          friction={0.8}
          wallBounce={0.95}
          followCursor={true}
        />
        <div className="absolute inset-0 z-10 mix-blend-screen opacity-50">
          <SplashCursor 
            COLOR="#5227FF" 
            RAINBOW_MODE={false} 
            SPLAT_RADIUS={0.3}
            SPLAT_FORCE={3000}
          />
        </div>
      </div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-pink/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden glass-panel border border-brand-gold/20 p-2">
              <div className="w-full h-full rounded-2xl overflow-hidden relative">
                <Image 
                  src="/about_art.png" 
                  alt="Skola Aari Craftsmanship" 
                  fill 
                  className="object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020412] via-transparent to-transparent opacity-80"></div>
              </div>
            </div>
            
            {/* Floating Experience Badge */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -right-10 md:bottom-10 md:-right-12 glass-card p-6 rounded-2xl border border-brand-gold/30 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center">
                  <Award className="w-6 h-6 text-brand-gold" />
                </div>
                <div>
                  <h4 className="text-3xl font-bold font-heading text-brand-gold">10+</h4>
                  <p className="text-sm text-white/70 uppercase tracking-widest">Years of Excellence</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col gap-8"
          >
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-brand-gold/50"></div>
              <span className="uppercase tracking-[0.3em] text-brand-gold text-xs font-bold font-heading">
                Our Story
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold font-heading leading-tight">
              Preserving <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-[#FFDF80]">Heritage</span>,<br />
              Inspiring the Future.
            </h2>

            <p className="text-white/60 text-lg leading-relaxed font-light">
              Founded on a passion for intricate artistry, Skola Aari World is India's premier luxury Aari embroidery academy and boutique. We don't just teach stitches; we cultivate master artisans.
            </p>
            <p className="text-white/60 text-lg leading-relaxed font-light">
              Whether designing breathtaking bridal trousseaus or empowering women to start their own luxury boutiques, our mission is to elevate the ancient art of Aari to modern haute couture standards.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-gold/10 rounded-lg border border-brand-gold/20">
                  <Sparkles className="w-6 h-6 text-brand-gold" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Master Craftsmanship</h4>
                  <p className="text-sm text-white/50">Learn from highly experienced professionals.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-gold/10 rounded-lg border border-brand-gold/20">
                  <History className="w-6 h-6 text-brand-gold" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Authentic Techniques</h4>
                  <p className="text-sm text-white/50">Traditional Zardosi and Maggam work methods.</p>
                </div>
              </div>
            </div>
            
            <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="w-fit mt-6 relative group px-8 py-4 text-brand-gold font-semibold uppercase tracking-widest text-sm transition-colors duration-300 inline-block">
              <div className="absolute inset-0 bg-brand-gold/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 origin-center"></div>
              <span className="relative z-10 flex items-center gap-2">
                Read Full Story
              </span>
              <span className="absolute bottom-2 left-8 right-8 h-px bg-brand-gold scale-x-100 group-hover:scale-x-0 transition-transform duration-500 origin-center"></span>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
