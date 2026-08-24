import { motion } from "framer-motion";
import qnbLogo from "@assets/client-logos/qnb.png";
import qcertLogo from "@assets/client-logos/qcert.png";
import barzanLogo from "@assets/client-logos/barzan.png";
import dfiLogo from "@assets/client-logos/dfi.png";
import fifaLogo from "@assets/client-logos/fifa.png";

const logos = [
  { name: "QNB", src: qnbLogo },
  { name: "Q-CERT", src: qcertLogo },
  { name: "Barzan Holdings", src: barzanLogo },
  { name: "Doha Film Institute", src: dfiLogo },
  { name: "FIFA Arab Cup Qatar 2025", src: fifaLogo },
];

export function ClientLogos() {
  return (
    <section className="bg-black border-t border-b border-zinc-900 py-16 md:py-20">
      <div className="w-full px-8 md:px-16 lg:px-24">
        <span className="text-[10px] uppercase tracking-[0.4em] text-primary border-l-2 border-primary pl-3 mb-12 block">
          We Worked With
        </span>

        <div className="flex flex-wrap items-center justify-between gap-x-12 gap-y-10">
          {logos.map((logo, index) => (
            <motion.img
              key={logo.name}
              src={logo.src}
              alt={logo.name}
              className="h-[38px] md:h-[49px] w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 0.5, y: 0 }}
              transition={{ delay: index * 0.06 }}
              viewport={{ once: true }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
