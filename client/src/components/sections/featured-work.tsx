import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import project1 from "@assets/generated_images/abstract_immersive_digital_art_installation_with_neon_lights.png";
import project2 from "@assets/generated_images/interactive_digital_engagement_zone_with_touchscreens.png";
import project3 from "@assets/generated_images/architectural_light_installation_in_a_dark_space.png";

const projects = [
  {
    title: "Immersive Brand Showcase",
    description: "A digital environment designed to spark exploration.",
    image: project1,
  },
  {
    title: "Interactive Engagement Zone",
    description: "A playful experience that drew visitors deeper into the brand story.",
    image: project2,
  },
  {
    title: "Experiential Installation",
    description: "A space transformed into a living digital canvas.",
    image: project3,
  },
];

export function FeaturedWork() {
  return (
    <Section className="bg-zinc-950">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white">A Collection of <br/>Interactive Moments</h2>
        <a href="#work" className="text-primary hover:text-white transition-colors flex items-center gap-2 border-b border-primary pb-1">
          View All Work <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.a 
            key={index}
            href="#work"
            className="group block space-y-4"
            whileHover={{ y: -10 }}
          >
            <div className="aspect-[4/3] overflow-hidden relative bg-zinc-900">
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-zinc-500 mt-2">{project.description}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
