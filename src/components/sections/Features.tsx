"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { GraduationCap, Scissors, Presentation, Award, Headset, Briefcase } from "lucide-react";
import Folder from "@/components/Folder";

const features = [
  {
    icon: <GraduationCap className="w-8 h-8 text-brand-gold" />,
    title: "Professional Trainers",
    description: "Learn from industry experts with years of experience in traditional Aari embroidery.",
  },
  {
    icon: <Scissors className="w-8 h-8 text-brand-gold" />,
    title: "Bridal Specialists",
    description: "Master the art of creating luxurious, heavy bridal blouses and lehengas.",
  },
  {
    icon: <Presentation className="w-8 h-8 text-brand-gold" />,
    title: "In-Studio Masterclasses",
    description: "Experience hands-on, immersive learning in our premium offline embroidery studio.",
  },
  {
    icon: <Award className="w-8 h-8 text-brand-gold" />,
    title: "Certification",
    description: "Receive a recognized certificate upon successful completion of your course.",
  },
  {
    icon: <Headset className="w-8 h-8 text-brand-gold" />,
    title: "Lifetime Support",
    description: "Get ongoing guidance and support even after you finish your training.",
  },
  {
    icon: <Briefcase className="w-8 h-8 text-brand-gold" />,
    title: "Placement Assistance",
    description: "We help you start your own boutique or find placements in top fashion houses.",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

function FeatureCard({ feature }: { feature: { icon: React.ReactNode; title: string; description: string } }) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div 
      variants={itemVariants}
      style={{ perspective: 1200 }}
      className="h-full"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="glass-card p-8 h-full relative group border border-white/5 transition-all duration-300 hover:border-brand-gold/30 hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)] bg-gradient-to-br from-white/[0.03] to-transparent cursor-pointer"
      >
        <div 
          style={{ transform: "translateZ(60px)" }} 
          className="mb-8 flex items-start"
        >
          <Folder 
            color="#D4AF37" 
            size={0.7} 
            items={[
              <div key="1" className="w-full h-full flex items-center justify-center">
                {feature.icon}
              </div>
            ]} 
          />
        </div>
        <h3 
          style={{ transform: "translateZ(40px)" }} 
          className="text-2xl font-bold mb-4 text-white font-heading tracking-wide"
        >
          {feature.title}
        </h3>
        <p 
          style={{ transform: "translateZ(20px)" }} 
          className="text-white/70 leading-relaxed text-base font-light"
        >
          {feature.description}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section className="py-32 relative overflow-hidden bg-[#020412]">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-gold/10 via-[#020412]/80 to-[#020412] opacity-80 z-0"></div>
      
      {/* Floating Orbs for depth */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-brand-pink/10 rounded-full blur-[100px] animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-gold/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: "2s" }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: -20, rotateX: 45 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            style={{ transformOrigin: "bottom" }}
            className="text-4xl md:text-6xl font-bold mb-6 font-heading"
          >
            Why Choose <span className="text-brand-gold text-glow">Skola</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/70 max-w-2xl mx-auto text-lg font-light"
          >
            We blend the rich heritage of Indian embroidery with modern hands-on teaching methods to offer you a truly world-class, fully offline learning experience.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 perspective-1000"
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
