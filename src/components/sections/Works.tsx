"use client";

import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { motion } from "framer-motion";
import CircularGallery from "@/components/CircularGallery";

const galleryItems = [
  { image: "/aari_work_custom.png", text: "Custom Aari Orders" },
  { image: "/saree_pleating.png", text: "Saree Pleating" },
  { image: "/embroidery_work.png", text: "Hand Embroidery" },
  { image: "/aari_work_1_1781068728030.png", text: "Bridal Blouse" },
  { image: "/aari_work_2_1781068740121.png", text: "Zardosi Lehenga" },
  { image: "/works_art.png", text: "Classic Design" }
];

export default function Works() {
  return (
    <section id="works" className="py-24 relative overflow-hidden bg-[#03061A]">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 justify-center mb-4"
          >
            <div className="h-px w-8 bg-brand-gold/50"></div>
            <span className="uppercase tracking-[0.3em] text-brand-gold text-xs font-bold font-heading">
              Our Masterpieces
            </span>
            <div className="h-px w-8 bg-brand-gold/50"></div>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-4 font-heading"
          >
            Featured <span className="text-brand-gold">Aari Works</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto"
          >
            Explore our meticulously crafted portfolio of luxury bridal blouses, lehengas, and custom designs. Every piece tells a unique story.
          </motion.p>
        </div>

        <div style={{ height: '600px', position: 'relative' }}>
          <CircularGallery
            items={galleryItems}
            bend={3}
            textColor="#D4AF37"
            borderRadius={0.05}
            scrollEase={0.02}
            font="bold 30px 'Outfit', sans-serif"
          />
        </div>

        <div className="mt-16 flex justify-center">
          <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="relative group px-10 py-4 border border-brand-gold/50 rounded-full text-brand-gold font-semibold uppercase tracking-widest text-sm transition-all duration-300 hover:bg-brand-gold hover:text-[#03061A] inline-block">
            View Full Gallery
          </a>
        </div>

        {/* Professional Services Highlight */}
        <div className="mt-32 relative p-1 rounded-[2rem] overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-gold via-brand-pink to-cyan-400 animate-disco-slide opacity-50 group-hover:opacity-100 transition-opacity duration-1000"></div>
          <div className="relative bg-[#020412]/95 backdrop-blur-3xl rounded-[1.8rem] p-10 md:p-16 text-center border border-white/5 flex flex-col items-center">
            <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 font-heading text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-white">
              Professional Work & Orders
            </h3>
            <p className="text-white/70 max-w-3xl mx-auto mb-10 text-lg md:text-xl font-light leading-relaxed">
              We are not just a premier institute—we are a full-fledged professional design studio. Skola Aari World takes pride in accepting custom <strong className="text-white font-medium">Aari orders</strong>, exquisite <strong className="text-white font-medium">hand embroidery</strong> projects, and premium <strong className="text-white font-medium">saree pleating</strong> services for your most special occasions.
            </p>
            <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-brand-gold text-[#020412] text-sm font-bold uppercase tracking-widest rounded-full hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] inline-block">
              Book Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
