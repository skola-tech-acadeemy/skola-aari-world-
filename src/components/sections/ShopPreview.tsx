"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const products = [
  { id: 1, name: "Premium Zari Threads", price: "₹450", category: "Materials" },
  { id: 2, name: "Pro Aari Needles Set", price: "₹850", category: "Tools" },
  { id: 3, name: "Bridal Tracing Papers", price: "₹299", category: "Kits" },
  { id: 4, name: "Luxury Beads & Stones", price: "₹1,200", category: "Materials" },
];

export default function ShopPreview() {
  return (
    <section id="shop" className="py-24 relative overflow-hidden bg-[#020412]">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-pink/5 via-[#020412] to-[#020412]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-px w-8 bg-brand-gold/50"></div>
              <span className="uppercase tracking-[0.3em] text-brand-gold text-xs font-bold font-heading">
                Boutique Shop
              </span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold font-heading"
            >
              Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-gold">Aari Materials</span>
            </motion.h2>
          </div>
          
          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 px-6 py-3 border border-white/10 rounded-full hover:border-brand-gold/50 transition-colors group"
          >
            <span className="text-white/80 group-hover:text-brand-gold transition-colors font-medium">Browse All Products</span>
            <ShoppingBag className="w-4 h-4 text-white/50 group-hover:text-brand-gold transition-colors" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-4 border border-white/5 hover:border-brand-gold/30 transition-all duration-300 group"
            >
              <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-white/5 mb-4">
                <Image 
                  src="/shop_art.png" 
                  alt={product.name} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100 mix-blend-luminosity hover:mix-blend-normal"
                />
                
                {/* Add to Cart Overlay Button */}
                <div className="absolute inset-0 bg-[#020412]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                  <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 bg-brand-gold text-brand-navy px-6 py-2 rounded-full font-bold shadow-[0_0_15px_rgba(212,175,55,0.5)] hover:scale-105 active:scale-95 flex items-center gap-2 inline-block">
                    Buy Now
                  </a>
                </div>
              </div>
              
              <div className="px-2 pb-2">
                <p className="text-brand-gold text-xs uppercase tracking-wider mb-1 opacity-80">{product.category}</p>
                <h4 className="text-white font-semibold mb-2">{product.name}</h4>
                <div className="flex justify-between items-center">
                  <span className="text-white/60 font-light text-sm">Starting at</span>
                  <span className="text-lg font-bold font-heading text-brand-pink">{product.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
