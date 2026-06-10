"use client";

import Link from "next/link";
import Image from "next/image";
import { Globe, Camera, Video, MessageCircle, MapPin, Phone, Mail } from "lucide-react";
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
              <a href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-navy transition-all">
                <Camera className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-navy transition-all">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-navy transition-all">
                <Video className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-navy transition-all">
                <MessageCircle className="w-5 h-5" />
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
