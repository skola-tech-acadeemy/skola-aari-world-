"use client";

import { motion } from "framer-motion";
import { Clock, BookOpen, Sparkles } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const courses = [
  {
    title: "Basic Aari",
    duration: "1 Month",
    level: "Beginner",
    description: "Start your journey. Learn the foundational stitches, thread work, and basic bead embroidery.",
    icon: <BookOpen className="w-5 h-5 text-brand-gold" />
  },
  {
    title: "Advanced Aari",
    duration: "2 Months",
    level: "Intermediate",
    description: "Elevate your skills with intricate cutwork, mirror work, and complex motif designs.",
    icon: <Sparkles className="w-5 h-5 text-brand-gold" />
  },
  {
    title: "Bridal Aari",
    duration: "3 Months",
    level: "Expert",
    description: "Master the art of heavy bridal blouses, incorporating stones, zardosi, and 3D floral work.",
    icon: <Sparkles className="w-5 h-5 text-brand-pink" />
  },
  {
    title: "Zardosi Work",
    duration: "1 Month",
    level: "Specialized",
    description: "A specialized course focusing purely on traditional Zardosi and Maggam metallic embroidery.",
    icon: <Sparkles className="w-5 h-5 text-brand-gold" />
  }
];

export default function Courses() {
  return (
    <section id="courses" className="py-24 relative overflow-hidden bg-brand-navy">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-4 font-heading"
            >
              Master The <span className="text-brand-gold text-glow">Art</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/70 max-w-xl"
            >
              Explore our meticulously designed courses, tailored for everyone from complete beginners to aspiring boutique owners.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="glass-card flex flex-col h-full overflow-hidden group border border-brand-gold/10 hover:border-brand-gold/40 transition-colors"
            >
              <div className="p-6 flex-grow">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-full bg-brand-navy border border-brand-gold/20 flex items-center justify-center">
                    {course.icon}
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 bg-white/5 rounded-full text-brand-gold border border-white/10">
                    {course.level}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-white font-heading">{course.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  {course.description}
                </p>
                <div className="flex items-center gap-2 text-white/50 text-sm">
                  <Clock className="w-4 h-4" />
                  <span>Duration: {course.duration}</span>
                </div>
              </div>
              <div className="p-6 pt-0 mt-auto">
                <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="block text-center w-full py-3 bg-white/5 hover:bg-brand-gold hover:text-brand-navy rounded-lg transition-colors font-semibold text-sm border border-white/10 hover:border-transparent">
                  View Curriculum
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
