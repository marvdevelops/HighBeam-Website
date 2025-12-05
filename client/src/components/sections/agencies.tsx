import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Handshake } from "lucide-react";
import bgImage from "@assets/generated_images/dark_fluid_abstract_shapes.png";

const benefits = [
  "White-label or co-branded builds",
  "Fast, flexible collaboration",
  "Reliable engineering for high-pressure events",
  "Pitch support & concept visualization",
  "Premium-quality custom development",
];

export function Agencies() {
  return (
    <Section id="agencies" className="bg-zinc-950 relative overflow-hidden">
       {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute inset-0 bg-zinc-950/90" />
        <img src={bgImage} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="order-2 md:order-1">
            <div className="grid gap-4">
                {benefits.map((benefit, index) => (
                    <Card key={index} className="bg-black border-zinc-800 rounded-none">
                        <CardContent className="p-4 flex items-center gap-4">
                            <div className="w-2 h-2 bg-zinc-700 rounded-full" />
                            <span className="text-zinc-300 font-medium">{benefit}</span>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
        
        <div className="order-1 md:order-2">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-zinc-900 rounded-full mb-6 text-primary">
                <Handshake className="w-8 h-8" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">For Agencies</h2>
            <p className="text-lg text-zinc-400 leading-relaxed mb-6">
                HighBeam partners with event, creative, and marketing agencies to power unforgettable experiences behind the scenes. We act as your creative technology team — elevating your concepts with premium digital execution.
            </p>
            <p className="text-xl font-medium text-white italic">
                "If your client wants something interactive, immersive, or bold, we’ll help you bring it to life."
            </p>
        </div>
      </div>
    </Section>
  );
}
