import { Section } from "@/components/ui/section";
import { Layout } from "@/components/layout/layout";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Link } from "wouter";
import { projects } from "@/lib/data";

export default function WorkPage() {
  return (
    <Layout>
      <div className="pt-12">
        <Section id="work" className="bg-black">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Work That Speaks for Itself</h2>
            <p className="text-xl text-zinc-400 leading-relaxed">
              Each experience we create blends creativity, engineering, and story. Our work turns spaces into interactive environments that move people — visually, emotionally, and digitally.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Link key={index} href={`/work/${project.slug}`}>
                <a className="block group cursor-pointer relative">
                    <motion.div 
                        className={`${index === 2 ? 'md:col-span-2' : ''}`}
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
                        <p className="text-zinc-400 mt-2">{project.shortDescription}</p>
                    </motion.div>
                </a>
              </Link>
            ))}
          </div>
        </Section>
      </div>
    </Layout>
  );
}
