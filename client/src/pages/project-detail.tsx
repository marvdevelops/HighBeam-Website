import { Layout } from "@/components/layout/layout";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRoute, Link } from "wouter";
import { projects } from "@/lib/data";
import NotFound from "./not-found";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ProjectDetailPage() {
  const [match, params] = useRoute("/work/:slug");
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  
  if (!match) return <NotFound />;

  const project = projects.find(p => p.slug === params.slug);
  
  if (!project) return <NotFound />;

  return (
    <Layout>
      <article>
        {/* Hero Image */}
        <div ref={ref} className="w-full h-[80vh] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-10" />
            <motion.img 
                style={{ y }}
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 z-20 p-6 md:p-12 lg:p-24 w-full">
                <Link href="/work">
                    <Button variant="link" className="text-white/70 hover:text-primary p-0 mb-6">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Work
                    </Button>
                </Link>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 uppercase tracking-tighter">{project.title}</h1>
                <p className="text-xl text-zinc-300 max-w-2xl">{project.shortDescription}</p>
            </div>
        </div>

        <Section className="bg-black">
            <div className="grid md:grid-cols-2 gap-12 md:gap-24">
                <div className="space-y-12">
                    <div>
                        <h3 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">The Challenge</h3>
                        <p className="text-zinc-300 text-lg leading-relaxed">{project.details.challenge}</p>
                    </div>
                    <div>
                        <h3 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">The Vision</h3>
                        <p className="text-zinc-300 text-lg leading-relaxed">{project.details.vision}</p>
                    </div>
                </div>
                <div className="space-y-12">
                    <div>
                        <h3 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">What We Built</h3>
                        <p className="text-zinc-300 text-lg leading-relaxed">{project.details.built}</p>
                    </div>
                    <div>
                        <h3 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">The Result</h3>
                        <p className="text-zinc-300 text-lg leading-relaxed">{project.details.result}</p>
                    </div>
                </div>
            </div>
        </Section>
      </article>
    </Layout>
  );
}
