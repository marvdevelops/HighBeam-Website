import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";

const values = [
  "Craft over shortcuts",
  "Story over static visuals",
  "Emotion over complexity",
  "Quality over quantity",
];

export function About() {
  return (
    <Section id="about" className="bg-black">
      {/* Pull quote */}
      <motion.div
        className="border-l-4 border-primary pl-8 mb-24"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-4xl md:text-6xl font-bold text-white leading-tight">
          "A tech studio with a{" "}
          <span className="text-zinc-600">creative soul</span>."
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <span className="text-[10px] uppercase tracking-[0.4em] text-primary border-l-2 border-primary pl-3 mb-6 block">About HighBeam</span>
          <p className="text-xl text-zinc-300 leading-relaxed mb-8">
            We build interactive and immersive digital experiences that spark curiosity and bring people into the story instead of just showing it to them.
          </p>
          <div className="grid sm:grid-cols-2 gap-8 mt-12 border-t border-zinc-900 pt-12">
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Our Belief</h3>
              <p className="text-zinc-400">Experiences are how modern brands speak. A logo gets seen once. A booth people line up for gets remembered and photographed.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Our Promise</h3>
              <p className="text-zinc-400">If you want something people talk about after the event ends, that's what we build.</p>
            </div>
          </div>
        </div>

        <div className="border-l border-zinc-800 pl-12">
          <h3 className="text-2xl font-bold text-white mb-8">Our Approach</h3>
          <p className="text-lg text-zinc-400 mb-12">
            We blend imagination and engineering, and we don't treat those as separate jobs. The same year we shipped a VR cybersecurity trainer for Q-CERT, we also built a stadium-scale fan activation for FIFA Arab Cup 2025. Both had to work flawlessly under crowd pressure on launch day, no do-overs. That's the standard every project gets held to, whether it's a museum kiosk or a client's first mobile app.
          </p>
          <div className="space-y-0 divide-y divide-zinc-900">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4 py-5 group"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 bg-primary rotate-45 flex-shrink-0 group-hover:scale-150 transition-transform" />
                <span className="text-white font-medium text-lg">{value}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}