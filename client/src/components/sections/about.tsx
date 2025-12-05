import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";

const values = [
  "Craft over shortcuts",
  "Story over static visuals",
  "Emotion over complexity",
  "Quality over quantity",
];

export function About() {
  return (
    <Section id="about" className="bg-black border-y border-zinc-900">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div>
            <Badge variant="outline" className="text-primary border-primary mb-6 rounded-full px-4 py-1">About HighBeam</Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                A tech studio with a <span className="text-zinc-600">creative soul</span>.
            </h2>
            <p className="text-xl text-zinc-300 leading-relaxed mb-8">
                We build interactive and immersive digital experiences that spark curiosity and bring stories to life.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8 mt-12">
                <div>
                    <h3 className="text-lg font-bold text-white mb-2">Our Belief</h3>
                    <p className="text-zinc-400">Experiences are how modern brands speak. Interaction is the new attraction.</p>
                </div>
                <div>
                    <h3 className="text-lg font-bold text-white mb-2">Our Promise</h3>
                    <p className="text-zinc-400">If you want an experience that stands out, we’ll help you build something unforgettable.</p>
                </div>
            </div>
        </div>
        
        <div className="bg-zinc-900 p-8 md:p-12 border-l-4 border-primary h-full">
            <h3 className="text-2xl font-bold text-white mb-8">Our Approach</h3>
            <p className="text-lg text-zinc-400 mb-8">
                We blend imagination and engineering to create experiential moments that elevate brand presence.
            </p>
            
            <div className="space-y-4">
                {values.map((value, index) => (
                    <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rotate-45" />
                        <span className="text-white font-medium text-lg">{value}</span>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </Section>
  );
}
