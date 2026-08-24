import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowUpRight, Handshake } from "lucide-react";

const capabilities = [
  { title: "Interactive Digital Experiences", description: "Touchscreens, motion sensors, and gesture-based kiosks that turn a passerby into a participant in under five seconds." },
  { title: "Immersive Technologies", description: "AR and VR builds like the Q-CERT cybersecurity trainer: put someone inside the scenario instead of walking them through a slide." },
  { title: "Engagement Systems", description: "Fan walls, feedback walls, and live data displays that turn a crowd's input into something they can see happen in real time, like the FIFA jersey wall or the NCSA feedback mosaic." },
  { title: "Branded Installations", description: "Large-scale digital environments that transform physical spaces into living, interactive canvases that elevate any event." },
  { title: "Creative Technology Development", description: "From first sketch to opening night, we run the whole build for agencies, brands, and event teams who want something nobody else is running that day." },
];

const agencyBenefits = [
  "White-label or co-branded builds",
  "Fast, flexible collaboration",
  "Reliable engineering for high-pressure events",
  "Pitch support & concept visualization",
  "Premium-quality custom development",
];

export function Capabilities() {
  return (
    <Section id="capabilities" className="bg-zinc-950">
      <div className="mb-16">
        <span className="text-[10px] uppercase tracking-[0.4em] text-primary border-l-2 border-primary pl-3 mb-4 block">What We Create</span>
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white max-w-2xl">What We Create</h2>
          <p className="text-zinc-400 max-w-md text-right hidden md:block">
            Five ways we build experiences, from a single touchscreen kiosk to a stadium-scale activation. All of it engineered to work the first time, in front of a live crowd.
          </p>
        </div>
        <p className="text-zinc-400 mt-4 md:hidden">
          Five ways we build experiences, from a single touchscreen kiosk to a stadium-scale activation. All of it engineered to work the first time, in front of a live crowd.
        </p>
      </div>

      {/* Alternating rows */}
      <div className="divide-y divide-zinc-800 border-t border-zinc-800 mb-24">
        {capabilities.map((item, index) => (
          <motion.div
            key={index}
            className="group grid md:grid-cols-[64px_1fr_2fr] gap-6 md:gap-12 py-10 items-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.06 }}
            viewport={{ once: true }}
          >
            <span className="text-5xl font-bold text-zinc-800 group-hover:text-primary transition-colors duration-300 font-mono leading-none tabular-nums">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors pt-1">
              <span className="text-primary mr-2">/</span>{item.title}
            </h3>
            <p className="text-zinc-400 leading-relaxed pt-1">{item.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Agency section */}
      <div className="border-t border-zinc-800 pt-24">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-flex items-center justify-center w-14 h-14 bg-zinc-900 mb-6 text-primary">
              <Handshake className="w-7 h-7" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">For Agencies</h2>
            <p className="text-lg text-zinc-400 leading-relaxed mb-6">
              HighBeam partners with event, creative, and marketing agencies as the technology team behind the scenes. You pitch the concept, we make sure it survives contact with a live crowd.
            </p>
            <p className="text-xl font-medium text-white italic border-l-2 border-primary pl-4">
              "If your client wants something interactive, immersive, or bold, we'll help you build it, on time and on brand."
            </p>
          </div>

          <div className="divide-y divide-zinc-800 border border-zinc-800">
            {agencyBenefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-4 p-5 group hover:bg-zinc-900 transition-colors">
                <div className="w-2 h-2 bg-zinc-700 rotate-45 group-hover:bg-primary transition-colors flex-shrink-0" />
                <span className="text-zinc-300 font-medium group-hover:text-white transition-colors">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-24 border-t border-zinc-900 pt-10">
        <p className="text-2xl font-display font-bold text-zinc-700 uppercase tracking-widest text-center">
          If it's interactive, immersive, or experiential, that's what we build.
        </p>
      </div>
    </Section>
  );
}