"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function CounterItem({ end, label, suffix = "" }: { end: number, label: string, suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [end, isInView]);

  return (
    <div ref={ref} className="text-center">
      <h3 className="text-4xl md:text-5xl font-bold text-brand-gold font-heading mb-2">
        {count}{suffix}
      </h3>
      <p className="text-white/80 uppercase tracking-widest text-xs md:text-sm">{label}</p>
    </div>
  );
}

export default function Counter() {
  return (
    <section className="py-20 relative bg-[#03061A] border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
          <CounterItem end={5000} label="Students Trained" suffix="+" />
          <CounterItem end={1200} label="Bridal Orders" suffix="+" />
          <CounterItem end={10} label="Years Experience" suffix="+" />
          <CounterItem end={100} label="Happy Customers" suffix="%" />
        </div>
      </div>
    </section>
  );
}
