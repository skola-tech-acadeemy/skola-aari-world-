"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote, Star } from "lucide-react";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Professional Aari Artist",
    content: "Skola Aari World completely transformed my career. The luxury techniques and intricate details I learned here allowed me to start my own bridal boutique. The masterclass is worth every penny.",
    rating: 5,
  },
  {
    id: 2,
    name: "Meenakshi V.",
    role: "Bride-to-be",
    content: "I got my bridal blouse designed here and it was an absolute masterpiece! The craftsmanship, the gold zardosi work, and the attention to detail made me feel like royalty on my special day.",
    rating: 5,
  },
  {
    id: 3,
    name: "Anjali Desai",
    role: "Studio Student",
    content: "The hands-on instruction in the studio was flawless. The premium learning environment and the way they teach the Maggam stitches step-by-step is unmatched in the industry.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-[#03061A]">
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
              Student Success
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
            Words from our <span className="text-brand-gold">Community</span>
          </motion.h2>
        </div>

        <ScrollStack 
          itemDistance={50} 
          itemStackDistance={30} 
          useWindowScroll={true}
        >
          {testimonials.map((testimonial) => (
            <ScrollStackItem key={testimonial.id} itemClassName="group/card">
              <div className="glass-card p-12 rounded-[2.5rem] relative border transition-all duration-700 h-full group-[.is-active]/card:bg-white bg-[#0a1128] border-white/5 group-[.is-active]/card:border-white shadow-[0_0_30px_rgba(212,175,55,0.1)] flex flex-col justify-between">
                <Quote className="absolute top-10 right-10 w-16 h-16 text-brand-gold/10 transition-colors duration-500 group-[.is-active]/card:text-brand-gold/30" />
                
                <div>
                  <div className="flex gap-1 mb-8">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-brand-gold text-brand-gold" />
                    ))}
                  </div>
                  
                  <p className="text-white/70 group-[.is-active]/card:text-gray-800 leading-relaxed mb-8 relative z-10 font-light text-2xl md:text-3xl transition-colors duration-700">
                    &quot;{testimonial.content}&quot;
                  </p>
                </div>
                
                <div className="flex items-center gap-5 border-t border-white/10 group-[.is-active]/card:border-gray-200 pt-8 transition-colors duration-700">
                  <div className="w-16 h-16 rounded-full bg-brand-gold/20 overflow-hidden relative border border-brand-gold/30">
                    <Image src="/testimonial_art.png" alt={testimonial.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="text-white group-[.is-active]/card:text-black font-semibold font-heading text-xl transition-colors duration-700">{testimonial.name}</h4>
                    <p className="text-brand-gold text-base">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
}
