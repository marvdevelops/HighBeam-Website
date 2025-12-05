import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const features = [
  {
    title: "Interactive Digital Experiences",
    description: "Digital interactions that invite exploration — touch, movement, gesture, creative input, or play.",
  },
  {
    title: "Immersive Technologies",
    description: "Experiences that draw people into new digital or spatial environments.",
  },
  {
    title: "Engagement Systems",
    description: "Creative tools that transform visitors into participants enabling expression.",
  },
  {
    title: "Branded Installations",
    description: "Large-scale digital environments that transform physical spaces into living canvases.",
  },
];

export function CapabilitiesTeaser() {
  return (
    <Section className="bg-zinc-950">
      <div className="mb-16 max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Experiences Designed to Stand Out</h2>
        <p className="text-xl text-zinc-400 leading-relaxed">
          HighBeam creates bespoke digital experiences that spark curiosity, invite exploration, and elevate brand presence.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="bg-zinc-900/50 border-zinc-800 h-full overflow-hidden group hover:border-primary/50 transition-colors rounded-none">
              <div className="h-1 w-12 bg-primary group-hover:w-full transition-all duration-500" />
              <CardContent className="p-6 pt-8 flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
                <div className="mt-8 flex justify-end">
                  <ArrowUpRight className="text-zinc-600 group-hover:text-primary transition-colors" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
