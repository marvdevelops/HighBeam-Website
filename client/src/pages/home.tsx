import { Hero } from "@/components/sections/hero";
import { CapabilitiesTeaser } from "@/components/sections/capabilities-teaser";
import { WhyHighBeam } from "@/components/sections/why-highbeam";
import { ClientLogos } from "@/components/sections/client-logos";
import { ProcessTeaser } from "@/components/sections/process-teaser";
import { FeaturedWork } from "@/components/sections/featured-work";
import { CtaStrip } from "@/components/sections/cta-strip";
import { Layout } from "@/components/layout/layout";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <CapabilitiesTeaser />
      <WhyHighBeam />
      <ClientLogos />
      <ProcessTeaser />
      <FeaturedWork />
      <CtaStrip />
    </Layout>
  );
}
