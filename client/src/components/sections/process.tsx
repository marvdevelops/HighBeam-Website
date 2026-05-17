import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";

const steps = [
  { title: "Discover", description: "We dive into your goals, audience, and the feeling you want people to experience." },
  { title: "Design", description: "We shape the experience — defining interactions, user flow, visual direction, and story." },
  { title: "Build", description: "We develop the experience with premium engineering and meticulous attention to detail." },
  { title: "Test", description: "We refine, optimize, and stress-test every component to ensure flawless performance during live events." },
  { title: "Launch", description: "We assist with setup, deployment, and on-site execution, ensuring everything works exactly as intended." },
];

export function Process() {
  return (
    <Section id="process" className="bg-zinc-950">
      <div className="mb-16">
        <span className="text-[10px] uppercase tracking-[0.4em] text-primary border-l-2 border-primary pl-3 mb-4 block">Our Process</span>
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white max-w-2xl">How We Build Experiences</h2>
          <p className="text-zinc-400 max-w-md text-right hidden md:block">
            Experiences are crafted — not assembled. Our process blends creativity, design, engineering, and precision to turn vision into reality.
          </p>
        </div>
      </div>

      <div className="divide-y divide-zinc-800 border-t border-zinc-800">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="group grid md:grid-cols-[120px_1fr_2fr] gap-6 md:gap-12 py-10 md:py-14 items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.07 }}
            viewport={{ once: true }}
          >
            <div className="text-7xl md:text-9xl font-bold text-zinc-900 group-hover:text-primary/20 transition-colors duration-500 font-mono leading-none select-none tabular-nums">
              {String(index + 1).padStart(2, "0")}
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-primary transition-colors">{step.title}</h3>
            <p className="text-zinc-400 leading-relaxed">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}