import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowUpRight, Handshake } from "lucide-react";

const capabilities = [
  { title: "Interactive Experiences", description: "Digital interactions that invite exploration — touch, movement, gesture, creative input, or play. Built to capture attention and encourage engagement." },
  { title: "Immersive Technologies", description: "Experiences that draw people into new digital or spatial environments. Perfect for storytelling, branding, and emotional impact." },
  { title: "Engagement Systems", description: "Creative tools that transform visitors into participants — enabling expression, interaction, and deeper connection." },
  { title: "Branded Installations", description: "Large-scale digital environments that transform physical spaces into living, interactive canvases." },
  { title: "Creative Technology Development", description: "Concept-to-launch development for agencies, brands, and event organizers who want something unique, refined, and fully custom." },
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
            HighBeam designs and develops interactive and immersive digital experiences tailored to brand stories, event goals, and audience engagement.
          </p>
        </div>
        <p className="text-zinc-400 mt-4 md:hidden">
          HighBeam designs and develops interactive and immersive digital experiences tailored to brand stories, event goals, and audience engagement.
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
              HighBeam partners with event, creative, and marketing agencies to power unforgettable experiences behind the scenes. We act as your creative technology team — elevating your concepts with premium digital execution.
            </p>
            <p className="text-xl font-medium text-white italic border-l-2 border-primary pl-4">
              "If your client wants something interactive, immersive, or bold, we'll help you bring it to life."
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
          If it's interactive, immersive, or experiential — we can build it.
        </p>
      </div>
    </Section>
  );
}