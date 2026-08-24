import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import heroVideo from "@assets/generated_videos/abstract_dark_space_background_with_subtle_stars_and_nebula.mp4";
import vrImage from "@assets/virtual-reality_1764951052102.png";
import { useRef } from "react";

const marqueeItems = [
  "Interactive", "Immersive", "Experiential", "Branded Installations",
  "Creative Technology", "Interactive", "Immersive", "Experiential",
  "Branded Installations", "Creative Technology",
];

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen flex items-center overflow-hidden">
      {/* Background */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
        <video src={heroVideo} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-60" />
      </motion.div>

      <div className="w-full px-6 md:px-12 lg:px-24 relative z-20 grid md:grid-cols-12 items-center h-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 md:col-span-9 lg:col-span-8 z-30 pt-20 md:pt-0"
        >
          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block text-[10px] uppercase tracking-[0.4em] text-primary border-l-2 border-primary pl-3"
          >
            Experiential Tech Studio
          </motion.span>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tighter text-white uppercase">
            Turn Your <br />
            <span className="text-stroke">Vision</span> Into <br />
            an <span className="text-primary">Experience</span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 max-w-xl leading-relaxed">
            We craft digital experiences that tell a story and leave a lasting memory. AR, VR, interactive installations, mobile apps, and web platforms, all built around the same idea: technology that connects with people, not just their screens.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Link href="/contact">
              <Button className="bg-primary text-primary-foreground hover:bg-white hover:text-black font-bold rounded-none px-8 py-6 text-lg transition-all hover:scale-105 active:scale-95">
                Start a Project
              </Button>
            </Link>
            <a href="https://calendly.com/high-beam/30min" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:border-white font-medium rounded-none px-8 py-6 text-lg transition-all">
                Let's Talk
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Floating visual */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden md:block absolute right-0 top-0 bottom-0 w-[50%] z-20 pointer-events-none"
        >
          <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent z-0" />
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 w-full h-full flex items-center justify-end pr-12 lg:pr-24"
          >
            <img src={vrImage} alt="Virtual Reality Experience" className="h-[80%] w-auto object-contain drop-shadow-[0_0_50px_rgba(255,211,0,0.15)]" />
          </motion.div>
        </motion.div>
      </div>

      {/* Marquee strip */}
      <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-zinc-800 bg-black/60 backdrop-blur-sm py-3 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {marqueeItems.map((item, i) => (
            <span key={i} className="text-[10px] uppercase tracking-[0.35em] text-zinc-500 px-8">
              {item} <span className="text-primary">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}