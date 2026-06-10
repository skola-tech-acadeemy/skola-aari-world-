"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, Search } from "lucide-react";
import Lanyard from "@/components/Lanyard";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Courses", href: "#courses" },
    { name: "Works", href: "#works" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? "py-4" : "py-6"
        }`}
      >
        {/* Scrolled Background */}
        <div 
          className={`absolute inset-0 transition-opacity duration-500 ${
            isScrolled ? "opacity-100 bg-[#020412]/90 backdrop-blur-xl" : "opacity-0 bg-transparent"
          }`}
        ></div>
        

        <div className="container relative mx-auto z-10 px-4 md:px-0">
          <div className="relative rounded-full p-[2px] w-full group shadow-[0_0_20px_rgba(0,240,255,0.2)]">
            {/* Outer Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-brand-pink via-brand-gold to-cyan-400 bg-[length:300%_100%] animate-disco-border blur-[6px] opacity-70"></div>
            {/* Crisp Border */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-brand-pink via-brand-gold to-cyan-400 bg-[length:300%_100%] animate-disco-border"></div>
            
            {/* Inner Content */}
            <div className="relative bg-[#020412]/95 backdrop-blur-xl rounded-full w-full px-6 py-2 flex items-center justify-between">
          
          {/* Left Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 flex-1">
            <Search onClick={() => alert('Search functionality coming soon!')} className="w-[18px] h-[18px] text-white/70 hover:text-brand-gold cursor-pointer transition-colors" strokeWidth={1.5} />
            <Link href="#courses" className="text-sm font-medium text-white/80 hover:text-brand-gold transition-colors">Courses</Link>
            <Link href="#works" className="text-sm font-medium text-white/80 hover:text-brand-gold transition-colors">Works</Link>
            <Link href="#testimonials" className="text-sm font-medium text-white/80 hover:text-brand-gold transition-colors">Testimonials</Link>
          </div>

          {/* Center Logo */}
          <div className="flex-1 flex justify-start md:justify-center relative">
            <Link href="#home" className="relative z-50">
              <div className="flex items-center justify-center cursor-pointer group relative w-48 h-12 md:w-72 md:h-20">
                <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-[20%] md:-translate-y-[30%] w-[180px] h-[300px] md:w-[220px] md:h-[400px]">
                  <Lanyard 
                    position={[0, 0, 15]} 
                    gravity={[0, -40, 0]} 
                    frontImage="/logo.png" 
                    backImage="/logo.png" 
                    imageFit="contain"
                  />
                </div>
              </div>
            </Link>
          </div>

          {/* Right Links */}
          <div className="hidden md:flex items-center justify-end gap-6 lg:gap-8 flex-1">
            <Link href="#about" className="text-sm font-medium text-white/80 hover:text-brand-gold transition-colors">About</Link>
          </div>

          {/* Mobile Menu Button (Right on mobile) */}
          <div className="md:hidden flex justify-end">
            <button
              className="text-white hover:text-brand-gold transition-colors relative z-10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isMobileMenuOpen ? "auto" : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          className="md:hidden overflow-hidden bg-[#020412]/95 backdrop-blur-xl border-b border-brand-gold/20 relative"
        >
          {/* Animated border for mobile menu bottom */}
          <div className="absolute inset-x-0 bottom-0 h-[2px] w-full overflow-hidden">
            <div className="w-[200%] h-full bg-gradient-to-r from-transparent via-brand-gold via-brand-pink to-transparent animate-disco-slide opacity-50"></div>
          </div>
          
          <div className="flex flex-col items-center py-6 gap-4 relative z-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white/80 hover:text-brand-gold text-lg font-medium"
              >
                {link.name}
              </Link>
            ))}
            <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)}>
              <div className="mt-4 relative p-[2px] rounded-full overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-gold via-brand-pink to-cyan-400 animate-spin-slow"></div>
                <div className="px-8 py-3 bg-[#020412] text-white rounded-full transition-all relative z-10 font-semibold text-center">
                  Contact Us
                </div>
              </div>
            </a>
          </div>
        </motion.div>
      </nav>

      {/* Styles for the disco animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes disco-slide {
          0% { transform: translateX(-50%); }
          50% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-disco-slide {
          animation: disco-slide 3s linear infinite;
        }
        @keyframes disco-border {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-disco-border {
          animation: disco-border 4s linear infinite;
        }
        @keyframes spin-slow {
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
      `}} />
    </>
  );
}
