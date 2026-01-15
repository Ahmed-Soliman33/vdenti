import { useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import OurWork from "@/components/sections/OurWork";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Partners from "@/components/sections/Partners";
import FAQ from "@/components/sections/FAQ";
import WhatsAppButton from "./components/shared/WhatsAppButton";

function App() {
  useEffect(() => {
    // Set document direction to RTL for Arabic
    document.documentElement.dir = "rtl";
    document.documentElement.lang = "ar";
  }, []);

  return (
    <TooltipProvider>
      <div className="min-h-screen overflow-hidden bg-white">
        <Navigation />
        <main>
          <Hero />
          <Services />
          <OurWork />
          <About />
          <Testimonials />
          <CTA />
          <Partners />
          <FAQ />
        </main>
        <Footer />
        <WhatsAppButton />
        <Toaster />
      </div>
    </TooltipProvider>
  );
}

export default App;
