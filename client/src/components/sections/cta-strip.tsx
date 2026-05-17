import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CtaStrip() {
  return (
    <section className="bg-primary py-24">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-black/50 border-l-2 border-black/30 pl-3 mb-6 block">Ready to Build?</span>
            <h2 className="text-4xl md:text-6xl font-bold text-black tracking-tight leading-tight">
              Let's Build Something<br />Unforgettable
            </h2>
          </div>
          <div className="flex flex-col gap-4 items-start shrink-0">
            <p className="text-lg text-black/70 max-w-xs">
              Tell us the experience you want to create — we'll bring it to life.
            </p>
            <Link href="/contact">
              <Button className="bg-black text-white hover:bg-white hover:text-black font-bold rounded-none px-10 py-6 text-lg border-0 transition-all hover:scale-105 active:scale-95">
                Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}