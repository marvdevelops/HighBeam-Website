import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { projects } from "@/lib/data";

export function FeaturedWork() {
  const featured = projects.slice(0, 4);
  const [hero, ...rest] = featured;

  return (
    <Section className="bg-zinc-950">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <span className="text-[10px] uppercase tracking-[0.4em] text-primary border-l-2 border-primary pl-3 mb-4 block">Selected Work</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">A Collection of<br />Interactive Moments</h2>
        </div>
        <Link href="/work">
          <a className="text-primary hover:text-white transition-colors flex items-center gap-2 border-b border-primary pb-1 shrink-0">
            View All Work <ArrowUpRight className="w-4 h-4" />
          </a>
        </Link>
      </div>

      {/* Hero project */}
      <Link href={`/work/${hero.slug}`}>
        <motion.a
          className="group block mb-4 cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="relative overflow-hidden aspect-[16/7] bg-zinc-900">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500 z-10" />
            <img
              src={hero.image}
              alt={hero.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
            />
            <div className="absolute bottom-0 left-0 right-0 z-20 p-8">
              <span className="text-[10px] uppercase tracking-[0.3em] text-primary mb-3 block">{hero.category}</span>
              <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-primary transition-colors">{hero.title}</h3>
              <p className="text-zinc-300 mt-2 max-w-2xl">{hero.shortDescription}</p>
            </div>
            <div className="absolute top-6 right-6 z-20 w-12 h-12 bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight className="w-6 h-6 text-black" />
            </div>
          </div>
        </motion.a>
      </Link>

      {/* Remaining projects */}
      <div className="grid md:grid-cols-3 gap-4">
        {rest.map((project, index) => (
          <Link key={index} href={`/work/${project.slug}`}>
            <motion.a
              className="group block cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden aspect-[4/3] bg-zinc-900 mb-4">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500 z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute top-4 right-4 z-20 w-10 h-10 bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-5 h-5 text-black" />
                </div>
              </div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-primary mb-1 block">{project.category}</span>
              <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors leading-tight">{project.title}</h3>
              <p className="text-zinc-500 mt-2 text-sm">{project.shortDescription}</p>
            </motion.a>
          </Link>
        ))}
      </div>
    </Section>
  );
}