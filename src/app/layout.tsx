import type { Metadata } from "next";
import { Playfair_Display, Poppins, Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Preloader from "@/components/layout/Preloader";
import WhatsAppButton from "@/components/WhatsAppButton";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Skola Aari World - Luxury Aari Classes & Works",
  description: "Create a world-class luxury website for Skola Aari World - Aari Classes & Works. Stitching Stories. Crafting Dreams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body
        className={`${playfair.variable} ${poppins.variable} antialiased bg-brand-navy text-white min-h-screen font-body selection:bg-brand-gold/30 selection:text-brand-gold flex flex-col`}
      >
        <SmoothScroll>
          <Preloader />
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </SmoothScroll>
      </body>
    </html>
  );
}
