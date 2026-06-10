"use client";

import { motion } from "framer-motion";
import BounceCards from "@/components/BounceCards";

const images = [
  "/1.jpeg",
  "/2.jpeg",
  "/3.jpeg",
  "/4.jpeg",
  "/5.jpeg",
  "/6.png",
  "/7.jpeg"
];

const transformStyles = [
  "rotate(15deg) translate(-250px)",
  "rotate(10deg) translate(-170px)",
  "rotate(5deg) translate(-85px)",
  "rotate(0deg)",
  "rotate(-5deg) translate(85px)",
  "rotate(-10deg) translate(170px)",
  "rotate(-15deg) translate(250px)"
];

export default function CompletedProjects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#020412]">
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
              Our Legacy
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
            Completed <span className="text-brand-gold">Projects</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto"
          >
            A glimpse into the stunning work we&apos;ve already delivered. Hover over the cards to explore our craftsmanship.
          </motion.p>
        </div>

        <div className="flex justify-center items-center mt-12 md:mt-40 mb-12 w-full max-w-7xl mx-auto h-[500px] md:h-[800px]">
          <BounceCards
            className="custom-bounceCards scale-110 md:scale-[1.8] lg:scale-[2.2]"
            images={images}
            containerWidth={600}
            containerHeight={400}
            animationDelay={0.5}
            animationStagger={0.08}
            easeType="elastic.out(1, 0.5)"
            transformStyles={transformStyles}
            enableHover={true}
          />
        </div>
      </div>
    </section>
  );
}
