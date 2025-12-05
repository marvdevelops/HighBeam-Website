import { Section } from "@/components/ui/section";
import { Check } from "lucide-react";

const reasons = [
  "Custom-crafted, premium-quality builds",
  "Designed for event environments",
  "Beautiful visual direction + reliable development",
  "Interactive experiences designed to engage",
  "A creative technology partner you can rely on",
];

export function WhyHighBeam() {
  return (
    <Section className="bg-black border-y border-zinc-900">
      <div className="grid md:grid-cols-2 gap-12 md:gap-24">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Technology That Feels Alive</h2>
          <p className="text-xl text-zinc-400 leading-relaxed">
            We combine imagination, engineering, and storytelling to deliver experiences that run flawlessly when it matters most.
          </p>
        </div>

        <div className="flex flex-col justify-center space-y-6">
          {reasons.map((reason, index) => (
            <div key={index} className="flex items-center gap-4 group">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-primary transition-colors">
                <Check className="w-3 h-3 text-white group-hover:text-black" />
              </div>
              <span className="text-lg text-zinc-300 group-hover:text-white transition-colors font-medium">
                {reason}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
