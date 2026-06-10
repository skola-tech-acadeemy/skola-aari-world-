import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Counter from "@/components/sections/Counter";
import Courses from "@/components/sections/Courses";
import About from "@/components/sections/About";
import Works from "@/components/sections/Works";
import CompletedProjects from "@/components/sections/CompletedProjects";
import Testimonials from "@/components/sections/Testimonials";
import Ribbons from "@/components/Ribbons";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative bg-[#020412]">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Ribbons
          baseThickness={30}
          colors={['#D4AF37', '#2A3F5F', '#5227FF']}
          speedMultiplier={0.5}
          maxAge={500}
          enableFade={false}
          enableShaderEffect={true}
        />
      </div>
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Hero />
        <Features />
        <About />
        <Counter />
        <Courses />
        <Works />
        <CompletedProjects />
        <Testimonials />
      </div>
    </div>
  );
}
