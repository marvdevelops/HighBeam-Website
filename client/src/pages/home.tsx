import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { CapabilitiesTeaser } from "@/components/sections/capabilities-teaser";
import { WhyHighBeam } from "@/components/sections/why-highbeam";
import { ProcessTeaser } from "@/components/sections/process-teaser";
import { FeaturedWork } from "@/components/sections/featured-work";
import { CtaStrip } from "@/components/sections/cta-strip";
import { Capabilities } from "@/components/sections/capabilities";
import { Work } from "@/components/sections/work";
import { Process } from "@/components/sections/process";
import { About } from "@/components/sections/about";
import { Agencies } from "@/components/sections/agencies";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        <CapabilitiesTeaser />
        <WhyHighBeam />
        <ProcessTeaser />
        <FeaturedWork />
        <CtaStrip />
        
        <Capabilities />
        <Work />
        <Process />
        <About />
        <Agencies />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}
