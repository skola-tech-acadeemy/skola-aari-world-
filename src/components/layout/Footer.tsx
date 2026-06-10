"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import Lanyard from "@/components/Lanyard";
import GradientBlinds from "@/components/GradientBlinds";

export default function Footer() {
  return (
    <footer className="relative bg-[#03061A] border-t border-white/5 pt-20 pb-10 mt-20 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-40">
        <GradientBlinds
          dpr={1}
          gradientColors={['#03061A', '#FF1493', '#d4af37', '#03061A']}
          angle={45}
          noise={0.3}
          blindCount={12}
          blindMinWidth={50}
          spotlightRadius={0.5}
          spotlightSoftness={1}
          spotlightOpacity={1}
          mouseDampening={0.15}
          distortAmount={0.5}
          shineDirection="left"
          mixBlendMode="screen"
        />
      </div>
      <div className="container relative z-10 mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Brand Info */}
          <div>
            <div className="flex items-center cursor-pointer group relative w-72 h-20 md:w-80 md:h-24 hover:scale-105 transition-transform duration-300 mb-8">
              <Image 
                src="/logo.png" 
                alt="Skola Aari World Logo" 
                fill 
                className="object-contain drop-shadow-[0_0_10px_rgba(212,175,55,0.3)]"
              />
            </div>
            <div className="relative w-full h-[450px] mb-6 -ml-4 scale-125 origin-left">
              <Lanyard 
                position={[0, 0, 12]} 
                gravity={[0, -40, 0]} 
                frontImage="/logo.png" 
                backImage="/logo.png" 
                imageFit="contain"
              />
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Experience the pinnacle of luxury bridal fashion and traditional Aari embroidery. We craft dreams into reality with every stitch.
            </p>
            <div className="relative p-5 rounded-xl bg-white/5 border border-brand-gold/20 mb-8 italic text-brand-gold/90 text-sm font-serif shadow-[0_0_15px_rgba(212,175,55,0.05)]">
              &quot;Elegance is the only beauty that never fades. Every stitch is a step towards timeless perfection.&quot; <br/>
              <span className="text-white/50 text-xs mt-2 block not-italic font-sans tracking-widest uppercase">— Skola Aari World</span>
            </div>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/skola_aari_world_?igsh=MTdwNms5cnd1bmJpNw==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-navy transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.98-10.169a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-xl text-white font-semibold mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {['About Us', 'Courses', 'Aari Works', 'Gallery', 'Blog'].map((link) => (
                <li key={link}>
                  <Link href={`/${link.toLowerCase().replace(' ', '-')}`} className="text-white/60 hover:text-brand-gold transition-colors text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/50"></span>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-xl text-white font-semibold mb-6 flex items-center gap-2 uppercase">
              Get In Touch
            </h4>
            <ul className="flex flex-col gap-6 text-sm text-white/70">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Skola Tech Academy & IT Services 8th<br/>
                  Stop, Gandhiji Main Street,<br/>
                  Thirumurugan Colony, Thiru Nagar,<br/>
                  Tamil Nadu 625006
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-[#2563EB] shrink-0" />
                <span>+91 82201 69470</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-[#2563EB] shrink-0" />
                <span>skolatechacademy@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Skola Aari World. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-brand-gold transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-brand-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
