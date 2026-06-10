import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function ContactBar() {
  return (
    <div className="hidden md:flex bg-brand-navy border-b border-white/5 py-2 px-6 text-xs text-white/70 justify-between items-center z-50 relative">
      <div className="flex gap-6 items-center">
        <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-brand-gold transition-colors">
          <Phone className="w-3 h-3" />
          <span>+91 98765 43210</span>
        </a>
        <a href="mailto:info@skolaaari.com" className="flex items-center gap-2 hover:text-brand-gold transition-colors">
          <Mail className="w-3 h-3" />
          <span>info@skolaaari.com</span>
        </a>
      </div>
      
      <div className="flex gap-6 items-center">
        <div className="flex items-center gap-2">
          <MapPin className="w-3 h-3 text-brand-gold" />
          <span>Chennai, Tamil Nadu</span>
        </div>
        <div className="h-3 w-px bg-white/20"></div>
        <div className="flex gap-4">
          <Link href="/courses" className="hover:text-brand-gold transition-colors font-medium text-brand-gold/80">
            Join Class Now
          </Link>
          <Link href="/works" className="hover:text-brand-gold transition-colors font-medium text-brand-pink/80">
            Book Work Now
          </Link>
        </div>
      </div>
    </div>
  );
}
