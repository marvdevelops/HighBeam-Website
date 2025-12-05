import { Section } from "@/components/ui/section";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import project1 from "@assets/generated_images/abstract_immersive_digital_art_installation_with_neon_lights.png";
import project2 from "@assets/generated_images/interactive_digital_engagement_zone_with_touchscreens.png";
import project3 from "@assets/generated_images/architectural_light_installation_in_a_dark_space.png";

const projects = [
  {
    title: "Immersive Brand Showcase",
    description: "A multi-layered experience designed to captivate and inspire.",
    image: project1,
    details: {
        challenge: "The brand needed an experience that stood out, attracted visitors, and created meaningful interaction.",
        vision: "Build a digital environment that sparks curiosity and invites hands-on exploration.",
        built: "A bespoke experience designed with immersive visuals, smooth interactions, and real-time engagement.",
        result: "Increased traffic, deeper engagement, and a memorable brand moment guests remembered long after the event."
    }
  },
  {
    title: "Digital Interaction Zone",
    description: "A playful, exploration-driven engagement environment.",
    image: project2,
    details: {
        challenge: "Create a high-energy zone that encourages participation and social sharing.",
        vision: "Gamify the brand experience to make it fun and accessible for all ages.",
        built: "Touch-responsive interfaces connected to large-scale LED displays with real-time feedback.",
        result: "Over 10,000 interactions in 3 days and massive social media amplification."
    }
  },
  {
    title: "Spatial Storytelling Installation",
    description: "A branded environment that transformed movement into narrative.",
    image: project3,
    details: {
        challenge: "Turn a passive hallway into an active storytelling journey.",
        vision: "Use motion tracking to trigger narrative elements as guests walk through the space.",
        built: "Lidar-based tracking system integrated with projection mapping and spatial audio.",
        result: "A seamless blend of physical and digital that immersed guests completely in the brand story."
    }
  },
];

export function Work() {
  return (
    <Section id="work" className="bg-black">
      <div className="max-w-3xl mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Work That Speaks for Itself</h2>
        <p className="text-xl text-zinc-400 leading-relaxed">
          Each experience we create blends creativity, engineering, and story. Our work turns spaces into interactive environments that move people — visually, emotionally, and digitally.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
                <motion.div 
                    className={`group cursor-pointer relative ${index === 2 ? 'md:col-span-2' : ''}`}
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="aspect-video overflow-hidden relative bg-zinc-900 mb-4">
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 z-20 transition-opacity">
                            <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center backdrop-blur-sm">
                                <Plus className="w-8 h-8 text-black" />
                            </div>
                        </div>
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                        />
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-zinc-400 mt-2">{project.description}</p>
                </motion.div>
            </DialogTrigger>
            <DialogContent className="bg-zinc-950 border-zinc-800 text-white max-w-3xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-3xl md:text-4xl font-bold mb-2">{project.title}</DialogTitle>
                    <DialogDescription className="text-zinc-400 text-lg">{project.description}</DialogDescription>
                </DialogHeader>
                <div className="mt-6 space-y-8">
                    <div className="aspect-video w-full overflow-hidden rounded-none bg-zinc-900">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">The Challenge</h4>
                            <p className="text-zinc-300">{project.details.challenge}</p>
                        </div>
                        <div>
                            <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">The Vision</h4>
                            <p className="text-zinc-300">{project.details.vision}</p>
                        </div>
                        <div>
                            <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">What We Built</h4>
                            <p className="text-zinc-300">{project.details.built}</p>
                        </div>
                        <div>
                            <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">The Result</h4>
                            <p className="text-zinc-300">{project.details.result}</p>
                        </div>
                    </div>
                </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </Section>
  );
}
