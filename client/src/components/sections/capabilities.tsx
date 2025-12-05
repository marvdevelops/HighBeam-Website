import { Section } from "@/components/ui/section";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const capabilities = [
  {
    title: "Interactive Experiences",
    description: "Digital interactions that invite exploration — touch, movement, gesture, creative input, or play. Built to capture attention and encourage engagement.",
  },
  {
    title: "Immersive Technologies",
    description: "Experiences that draw people into new digital or spatial environments. Perfect for storytelling, branding, and emotional impact.",
  },
  {
    title: "Engagement Systems",
    description: "Creative tools that transform visitors into participants — enabling expression, interaction, and deeper connection.",
  },
  {
    title: "Branded Installations",
    description: "Large-scale digital environments that transform physical spaces into living, interactive canvases.",
  },
  {
    title: "Creative Technology Development",
    description: "Concept-to-launch development for agencies, brands, and event organizers who want something unique, refined, and fully custom.",
  },
];

export function Capabilities() {
  return (
    <Section id="capabilities" className="bg-zinc-950">
      <div className="max-w-3xl mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">What We Create</h2>
        <p className="text-xl text-zinc-400 leading-relaxed">
          HighBeam designs and develops interactive and immersive digital experiences tailored to brand stories, event goals, and audience engagement. We build premium, custom-crafted experiences designed to stand out.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {capabilities.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="bg-zinc-900 border-zinc-800 h-full hover:border-primary/50 transition-colors rounded-none group">
              <CardHeader>
                <CardTitle className="text-2xl text-white group-hover:text-primary transition-colors">
                    <span className="text-primary mr-2">/</span>{item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-20 text-center border-t border-zinc-900 pt-10">
        <p className="text-2xl font-display font-bold text-zinc-500 uppercase tracking-widest">
            If it’s interactive, immersive, or experiential, we can build it.
        </p>
      </div>
    </Section>
  );
}
