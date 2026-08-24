import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";

const steps = [
  { title: "Discover", description: "What's this for, who shows up, and what do you want them to do when they get there. That's the whole first conversation." },
  { title: "Design", description: "Interactions, user flow, visual direction, and the story that ties them together get mapped out before a line of code gets written." },
  { title: "Build", description: "This is where most of the time goes: real engineering, tested against the actual hardware and space it'll run in, not a simulation of it." },
  { title: "Test", description: "Every component gets stress-tested the way it'll actually be used: by a crowd, under time pressure, with no IT staff standing by to reboot it." },
  { title: "Launch", description: "We're on-site for setup and the first hours of live use. If something needs adjusting in the room, it gets adjusted in the room, not over email the next day." },
];

export function Process() {
  return (
    <Section id="process" className="bg-zinc-950">
      <div className="mb-16">
        <span className="text-[10px] uppercase tracking-[0.4em] text-primary border-l-2 border-primary pl-3 mb-4 block">Our Process</span>
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white max-w-2xl">How We Build Experiences</h2>
          <p className="text-zinc-400 max-w-md text-right hidden md:block">
            Five stages, the same five every time, whether it's a museum kiosk or a stadium-scale activation. Skipping one is usually where a launch-day surprise comes from.
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