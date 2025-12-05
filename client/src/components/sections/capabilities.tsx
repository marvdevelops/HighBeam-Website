import { Section } from "@/components/ui/section";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import bgImage from "@assets/generated_images/subtle_dark_hexagonal_mesh_texture.png";
import { Handshake } from "lucide-react";

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

const agencyBenefits = [
  "White-label or co-branded builds",
  "Fast, flexible collaboration",
  "Reliable engineering for high-pressure events",
  "Pitch support & concept visualization",
  "Premium-quality custom development",
];

export function Capabilities() {
  return (
    <Section id="capabilities" className="bg-zinc-950 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-transparent to-zinc-950" />
        <img src={bgImage} alt="" className="w-full h-full object-cover" />
      </div>
      
      <div className="max-w-3xl mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">What We Create</h2>
        <p className="text-xl text-zinc-400 leading-relaxed">
          HighBeam designs and develops interactive and immersive digital experiences tailored to brand stories, event goals, and audience engagement. We build premium, custom-crafted experiences designed to stand out.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24 relative z-10">
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

      {/* Agency Section Integrated */}
      <div className="relative z-10 border-t border-zinc-900 pt-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
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
            
            <div className="grid gap-4">
                {agencyBenefits.map((benefit, index) => (
                    <Card key={index} className="bg-black border-zinc-800 rounded-none">
                        <CardContent className="p-4 flex items-center gap-4">
                            <div className="w-2 h-2 bg-zinc-700 rounded-full" />
                            <span className="text-zinc-300 font-medium">{benefit}</span>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </div>
      
      <div className="mt-24 text-center border-t border-zinc-900 pt-10 relative z-10">
        <p className="text-2xl font-display font-bold text-zinc-500 uppercase tracking-widest">
            If it’s interactive, immersive, or experiential, we can build it.
        </p>
      </div>
    </Section>
  );
}
