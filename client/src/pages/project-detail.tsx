import { Layout } from "@/components/layout/layout";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useRoute, Link } from "wouter";
import { projects } from "@/lib/data";
import NotFound from "./not-found";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function ProjectDetailPage() {
  const [match, params] = useRoute("/work/:slug");
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const project = match ? projects.find(p => p.slug === params?.slug) : null;

  useEffect(() => {
    if (project) { document.title = `${project.title} | HighBeam`; }
    return () => { document.title = "HighBeam | Experiential Tech Studio"; };
  }, [project]);

  if (!match) return <NotFound />;
  if (!project) return <NotFound />;

  return (
    <Layout>
      <article>
        {/* Hero image slider */}
        <div ref={ref} className="w-full h-[80vh] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-20 pointer-events-none" />

          <Carousel className="w-full h-full">
            <CarouselContent className="h-full ml-0">
              {(project.images ?? [project.image]).map((img, index) => (
                <CarouselItem key={index} className="pl-0 h-full relative">
                  <motion.img
                    style={{ y }}
                    src={img}
                    alt={`${project.title} - Image ${index + 1}`}
                    className="w-full h-full object-cover object-top"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            {(project.images ?? []).length > 1 && (
              <div className="absolute right-12 bottom-32 z-30 flex gap-2">
                <CarouselPrevious className="relative inset-auto translate-y-0 bg-black/50 hover:bg-primary hover:text-black border-white/20 text-white rounded-none" />
                <CarouselNext className="relative inset-auto translate-y-0 bg-black/50 hover:bg-primary hover:text-black border-white/20 text-white rounded-none" />
              </div>
            )}
          </Carousel>

          <div className="absolute bottom-0 left-0 right-0 z-20 p-6 md:p-12 lg:p-24 pointer-events-none">
            <Link href="/work">
              <Button variant="link" className="text-white/70 hover:text-primary p-0 mb-6 pointer-events-auto">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Work
              </Button>
            </Link>
            <span className="text-[10px] uppercase tracking-[0.3em] text-primary mb-3 block">{project.category}</span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 uppercase tracking-tighter">{project.title}</h1>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <p className="text-xl text-zinc-300 max-w-2xl">{project.shortDescription}</p>
              {project.externalUrl && (
                <a
                  href={project.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pointer-events-auto shrink-0"
                >
                  <Button className="bg-primary text-black hover:bg-white hover:text-black font-bold rounded-none px-6 py-3 transition-all hover:scale-105">
                    {project.category === "Mobile App" ? "Visit App" : "View Live"}
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              )}
            </div>
            {project.tags && (
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-[10px] uppercase tracking-widest bg-zinc-900/80 text-zinc-400 px-3 py-1 border border-zinc-700 backdrop-blur-sm">{tag}</span>
                ))}
              </div>
            )}
          </div>
        </div>

        <Section className="bg-black">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 uppercase tracking-tight">Project Overview</h2>
            <p className="text-xl text-zinc-300 leading-relaxed whitespace-pre-wrap mb-16">{project.description}</p>

            {project.theExperience && (
              <>
                <h3 className="text-primary font-bold uppercase tracking-widest text-sm mb-8 border-b border-zinc-800 pb-4">The Experience</h3>
                <p className="text-xl text-zinc-300 leading-relaxed whitespace-pre-wrap mb-16">{project.theExperience}</p>
              </>
            )}

            {project.deliverables && (
              <>
                <h3 className="text-primary font-bold uppercase tracking-widest text-sm mb-8 border-b border-zinc-800 pb-4">What We Delivered</h3>
                <div className="grid gap-12">
                  {project.deliverables.map((item, index) => (
                    <div key={index} className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-12">
                      <h4 className="text-white font-bold text-lg uppercase">{item.title}</h4>
                      <p className="text-zinc-400 text-lg leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </>
            )}

            {project.images && project.images.length > 1 && (
              <div className="mt-16 pt-12 border-t border-zinc-800">
                <h3 className="text-primary font-bold uppercase tracking-widest text-sm mb-8">Gallery</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.images.slice(1).map((img, index) => (
                    <div key={index} className="overflow-hidden bg-zinc-900">
                      <img
                        src={img}
                        alt={`${project.title} - Image ${index + 2}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {project.externalUrl && (
              <div className="mt-16 pt-12 border-t border-zinc-800">
                <a href={project.externalUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-primary text-black hover:bg-white hover:text-black font-bold rounded-none px-10 py-6 text-lg transition-all hover:scale-105 active:scale-95">
                    {project.category === "Mobile App" ? "Download the App" : "View Live"}
                    <ExternalLink className="w-5 h-5 ml-2" />
                  </Button>
                </a>
              </div>
            )}
          </div>
        </Section>
      </article>
    </Layout>
  );
}