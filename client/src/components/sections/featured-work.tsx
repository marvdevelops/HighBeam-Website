import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { projects } from "@/lib/data";

export function FeaturedWork() {
  return (
    <Section className="bg-zinc-950">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white">A Collection of <br/>Interactive Moments</h2>
        <Link href="/work">
          <a className="text-primary hover:text-white transition-colors flex items-center gap-2 border-b border-primary pb-1">
            View All Work <ArrowUpRight className="w-4 h-4" />
          </a>
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Link key={index} href={`/work/${project.slug}`}>
            <motion.a 
              className="group block space-y-4 cursor-pointer"
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
                <p className="text-zinc-500 mt-2">{project.shortDescription}</p>
              </div>
            </motion.a>
          </Link>
        ))}
      </div>
    </Section>
  );
}
