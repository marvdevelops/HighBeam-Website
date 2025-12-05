import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "We explore your goals, your brand, and the emotions you want to create.",
  },
  {
    number: "02",
    title: "Design",
    description: "We craft the concept, interactions, visual direction, and flow of the experience.",
  },
  {
    number: "03",
    title: "Build",
    description: "We develop a polished, event-ready experience engineered to perform.",
  },
  {
    number: "04",
    title: "Launch",
    description: "We support your activation end-to-end, ensuring everything works perfectly on the day it matters.",
  },
];

export function ProcessTeaser() {
  return (
    <Section>
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Your Vision, Built With Precision</h2>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <div key={index} className="relative group">
            {/* Connecting line for desktop */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-[1px] bg-zinc-800 z-0" />
            )}
            
            <div className="relative z-10 bg-black p-6 border border-zinc-800 hover:border-primary transition-colors h-full rounded-none">
              <div className="w-12 h-12 bg-zinc-900 text-zinc-500 font-mono text-lg flex items-center justify-center rounded-full mb-6 group-hover:bg-primary group-hover:text-black transition-colors mx-auto md:mx-0">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 text-center md:text-left">{step.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed text-center md:text-left">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
