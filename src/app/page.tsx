import { Navbar } from "@/components/ui/navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/ui/footer";
import { BackgroundPaths } from "@/components/ui/background-paths";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white selection:bg-blue-500/30">
      <Navbar />

      {/* Background Animation Layer */}
      <div className="fixed inset-0 z-0 opacity-30 pointer-events-none">
        <BackgroundPaths title="" />
      </div>

      <div className="relative z-10">
        <HeroSection />
        <PortfolioSection />
        <ProcessSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
