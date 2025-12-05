import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import heroVideo from "@assets/generated_videos/abstract_dark_space_background_with_subtle_stars_and_nebula.mp4";
import vrImage from "@assets/virtual-reality_1764951052102.png";
import { useRef } from "react";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen flex items-center overflow-hidden">
      {/* Background */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
        <video 
          src={heroVideo} 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-60"
        />
      </motion.div>

      <div className="w-full px-6 md:px-12 lg:px-24 relative z-20 grid md:grid-cols-12 items-center h-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 md:col-span-9 lg:col-span-8 z-30 pt-20 md:pt-0"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tighter text-white uppercase">
            Turn Your <br />
            <span className="text-stroke">Vision</span> Into <br />
            an <span className="text-primary">Experience</span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-400 max-w-xl leading-relaxed">
            HighBeam builds interactive and immersive digital experiences that bring brands to life — transforming events, activations, and installations into moments people remember.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Link href="/contact">
              <Button 
                className="bg-primary text-primary-foreground hover:bg-white hover:text-black font-bold rounded-none px-8 py-6 text-lg transition-all hover:scale-105 active:scale-95"
              >
                Start a Project
              </Button>
            </Link>
            <Link href="/work">
              <Button 
                variant="outline" 
                className="border-white/20 text-white hover:bg-white/10 hover:border-white font-medium rounded-none px-8 py-6 text-lg transition-all"
              >
                See Our Work
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Visual element - Absolute Positioned to ensure it's next to text */}
        <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden md:block absolute right-0 top-0 bottom-0 w-[55%] z-20 pointer-events-none"
        >
            <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent z-0" />
            
            {/* Image Container with floating effect */}
            <motion.div
              animate={{ 
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative z-10 w-full h-full flex items-center justify-center lg:justify-start"
            >
                <img 
                  src={vrImage} 
                  alt="Virtual Reality Experience" 
                  className="h-[80%] w-auto object-contain drop-shadow-[0_0_50px_rgba(255,211,0,0.15)] -ml-24 lg:-ml-32" 
                />
            </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-zinc-500">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}
