import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Handshake } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const benefits = [
  "White-label or co-branded builds",
  "Fast, flexible collaboration",
  "Reliable engineering for high-pressure events",
  "Pitch support & concept visualization",
  "Premium-quality custom development",
];

export function Agencies() {
  return (
    <Section id="agencies" className="bg-black">
      <div className="mb-20">
        <span className="text-[10px] uppercase tracking-[0.4em] text-primary border-l-2 border-primary pl-3 mb-6 block">For Agencies</span>
        <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight max-w-3xl">
          Your Creative<br />Technology Team.
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-start">
        <div>
          <p className="text-xl text-zinc-300 leading-relaxed mb-8">
            HighBeam partners with event, creative, and marketing agencies to power unforgettable experiences behind the scenes. We act as your creative technology team — elevating your concepts with premium digital execution.
          </p>
          <p className="text-xl font-medium text-white italic border-l-2 border-primary pl-4 mb-12">
            "If your client wants something interactive, immersive, or bold, we'll help you bring it to life."
          </p>
          <Link href="/contact">
            <Button className="bg-primary text-black hover:bg-white hover:text-black font-bold rounded-none px-8 py-6 text-lg transition-all hover:scale-105 active:scale-95">
              Partner With Us <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>

        <div className="divide-y divide-zinc-800 border border-zinc-800">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-4 p-6 group hover:bg-zinc-950 transition-colors"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.07 }}
              viewport={{ once: true }}
            >
              <div className="w-2 h-2 bg-zinc-700 rotate-45 group-hover:bg-primary transition-colors flex-shrink-0" />
              <span className="text-zinc-300 font-medium group-hover:text-white transition-colors text-lg">{benefit}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}