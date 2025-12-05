import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Discover",
    description: "We dive into your goals, audience, and the feeling you want people to experience.",
  },
  {
    title: "Design",
    description: "We shape the experience — defining interactions, user flow, visual direction, and story.",
  },
  {
    title: "Build",
    description: "We develop the experience with premium engineering and meticulous attention to detail.",
  },
  {
    title: "Test",
    description: "We refine, optimize, and stress-test every component to ensure flawless performance during live events.",
  },
  {
    title: "Launch",
    description: "We assist with setup, deployment, and on-site execution, ensuring everything works exactly as intended.",
  },
];

export function Process() {
  return (
    <Section id="process" className="bg-zinc-950">
      <div className="max-w-3xl mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">How We Build Experiences</h2>
        <p className="text-xl text-zinc-400 leading-relaxed">
          Experiences are crafted — not assembled. Our process blends creativity, design, engineering, and precision to turn vision into reality.
        </p>
      </div>

      <div className="relative">
        {/* Vertical Line for Mobile/Tablet */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-zinc-800 md:hidden" />
        
        {/* Horizontal Line for Desktop */}
        <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-zinc-800" />

        <div className="grid md:grid-cols-5 gap-8 md:gap-4">
            {steps.map((step, index) => (
                <motion.div 
                    key={index}
                    className="relative pl-12 md:pl-0 md:pt-16 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                >
                    {/* Dot */}
                    <div className="absolute left-[11px] top-0 md:top-[27px] md:left-0 md:right-0 md:mx-auto w-4 h-4 rounded-full bg-zinc-900 border-2 border-zinc-700 z-10 group-hover:bg-primary group-hover:border-primary transition-colors" />
                    
                    <div className="md:text-center">
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{step.title}</h3>
                        <p className="text-zinc-400 text-sm">{step.description}</p>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </Section>
  );
}
