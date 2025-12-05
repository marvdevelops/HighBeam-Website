import { Section } from "@/components/ui/section";
import { Check } from "lucide-react";
import bgImage from "@assets/generated_images/abstract_light_gray_technical_pattern.png";

const reasons = [
  "Custom-crafted, premium-quality builds",
  "Designed for event environments",
  "Beautiful visual direction + reliable development",
  "Interactive experiences designed to engage",
  "A creative technology partner you can rely on",
];

export function WhyHighBeam() {
  return (
    <Section className="bg-zinc-100 border-y border-zinc-200 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-60">
        <img src={bgImage} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="grid md:grid-cols-2 gap-12 md:gap-24 relative z-10">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Technology That Feels Alive</h2>
          <p className="text-xl text-zinc-600 leading-relaxed">
            We combine imagination, engineering, and storytelling to deliver experiences that run flawlessly when it matters most.
          </p>
        </div>

        <div className="flex flex-col justify-center space-y-6">
          {reasons.map((reason, index) => (
            <div key={index} className="flex items-center gap-4 group">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-zinc-200 flex items-center justify-center group-hover:bg-primary transition-colors">
                <Check className="w-3 h-3 text-black" />
              </div>
              <span className="text-lg text-zinc-800 group-hover:text-black transition-colors font-medium">
                {reason}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
