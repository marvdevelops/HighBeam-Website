import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CtaStrip() {
  return (
    <section className="relative bg-primary py-20 clip-diagonal-top mt-20">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-black mb-4 tracking-tight">
          Let’s Build Something Unforgettable
        </h2>
        <p className="text-xl md:text-2xl text-black/80 mb-10 max-w-2xl mx-auto">
          Tell us the experience you want to create — we’ll bring it to life.
        </p>
        <Link href="/contact">
          <Button 
            className="bg-black text-white hover:bg-white hover:text-black font-bold rounded-none px-10 py-8 text-lg border-0"
          >
            Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
