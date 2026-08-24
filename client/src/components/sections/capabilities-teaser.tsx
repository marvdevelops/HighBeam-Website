import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

const features = [
  { title: "Interactive Digital Experiences", description: "Touchscreens, motion sensors, and gesture-based kiosks that turn a passerby into a participant in under five seconds." },
  { title: "Immersive Technologies", description: "AR and VR builds like the Q-CERT cybersecurity trainer: put someone inside the scenario instead of walking them through a slide." },
  { title: "Engagement Systems", description: "Fan walls, feedback walls, and live data displays that turn a crowd's input into something they can see happen in real time, like the FIFA jersey wall or the NCSA feedback mosaic." },
  { title: "Branded Installations", description: "Large-scale digital environments that transform physical spaces into living, interactive canvases that elevate any event." },
];

export function CapabilitiesTeaser() {
  return (
    <Section className="bg-zinc-950">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-2xl">
          <span className="text-[10px] uppercase tracking-[0.4em] text-primary border-l-2 border-primary pl-3 mb-4 block">What We Build</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Experiences Designed to Stand Out</h2>
        </div>
        <Link href="/capabilities">
          <a className="text-primary hover:text-white transition-colors flex items-center gap-2 border-b border-primary pb-1 shrink-0">
            All Capabilities <ArrowUpRight className="w-4 h-4" />
          </a>
        </Link>
      </div>

      <div className="divide-y divide-zinc-800 border-t border-zinc-800">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="group grid md:grid-cols-[64px_1fr_2fr] gap-6 md:gap-12 py-10 items-start cursor-default"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.06 }}
            viewport={{ once: true }}
          >
            <span className="text-5xl font-bold text-zinc-800 group-hover:text-primary transition-colors duration-300 font-mono leading-none tabular-nums">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300 pt-1">
              {feature.title}
            </h3>
            <p className="text-zinc-400 leading-relaxed pt-1">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}