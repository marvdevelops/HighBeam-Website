import { Section } from "@/components/ui/section";
import { Layout } from "@/components/layout/layout";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { projects } from "@/lib/data";

export default function WorkPage() {
  const [hero, second, third, ...rest] = projects;

  return (
    <Layout>
      <div className="pt-12">
        <Section id="work" className="bg-black">
          <div className="max-w-3xl mb-16">
            <span className="text-[10px] uppercase tracking-[0.4em] text-primary border-l-2 border-primary pl-3 mb-4 block">Our Work</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Work That Speaks for Itself</h2>
            <p className="text-xl text-zinc-400 leading-relaxed">
              Eight projects below. Each one had a real deadline, a real crowd, and no room to fail on launch day. Click into any of them for how it actually got built.
            </p>
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

          {/* 2-col row */}
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            {[second, third].map((project, index) => (
              <Link key={index} href={`/work/${project.slug}`}>
                <motion.a
                  className="group block cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  viewport={{ once: true }}
                >
                  <div className="relative overflow-hidden aspect-video bg-zinc-900 mb-4">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors z-10" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute top-4 right-4 z-20 w-10 h-10 bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight className="w-5 h-5 text-black" />
                    </div>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-primary mb-1 block">{project.category}</span>
                  <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-zinc-400 mt-2">{project.shortDescription}</p>
                </motion.a>
              </Link>
            ))}
          </div>

          {/* Remaining projects — 3-col */}
          {rest.length > 0 && (
            <div className="grid md:grid-cols-3 gap-4">
              {rest.map((project, index) => (
                <Link key={index} href={project.externalUrl ? project.externalUrl : `/work/${project.slug}`}>
                  <motion.a
                    className="group block cursor-pointer"
                    href={project.externalUrl ?? undefined}
                    target={project.externalUrl ? "_blank" : undefined}
                    rel={project.externalUrl ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative overflow-hidden aspect-[4/3] bg-zinc-900 mb-4">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors z-10" />
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                      />
                      <div className="absolute top-4 right-4 z-20 w-10 h-10 bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowUpRight className="w-5 h-5 text-black" />
                      </div>
                      {project.tags && (
                        <div className="absolute bottom-4 left-4 z-20 flex flex-wrap gap-1">
                          {project.tags.map((tag, i) => (
                            <span key={i} className="text-[9px] uppercase tracking-widest bg-black/70 text-zinc-300 px-2 py-1 backdrop-blur-sm">{tag}</span>
                          ))}
                        </div>
                      )}
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-primary mb-1 block">{project.category}</span>
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-zinc-400 mt-2 text-sm">{project.shortDescription}</p>
                  </motion.a>
                </Link>
              ))}
            </div>
          )}
        </Section>
      </div>
    </Layout>
  );
}