import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";

const steps = [
  { number: "01", title: "Discover", description: "What's this for, who shows up, and what do you want them to do when they get there. That's the whole first conversation." },
  { number: "02", title: "Design", description: "Interactions, user flow, visual direction, and the story that ties them together get mapped out before a line of code gets written." },
];

export function ProcessTeaser() {
  return (
    <Section className="bg-black">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
        <div>
          <span className="text-[10px] uppercase tracking-[0.4em] text-primary border-l-2 border-primary pl-3 mb-4 block">How We Work</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Your Vision, Built With Precision</h2>
        </div>
      </div>

      <div className="grid md:grid-cols-2 max-w-4xl border border-zinc-800 divide-y md:divide-y-0 md:divide-x divide-zinc-800">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="group relative p-8 hover:bg-zinc-950 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            viewport={{ once: true }}
          >
            <div className="text-8xl font-bold text-zinc-900 group-hover:text-primary/20 transition-colors duration-300 font-mono leading-none mb-6 select-none">
              {step.number}
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{step.title}</h3>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">{step.description}</p>
            <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-500" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}