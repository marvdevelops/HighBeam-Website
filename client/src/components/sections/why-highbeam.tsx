import { Section } from "@/components/ui/section";

const reasons = [
  "Custom-crafted, premium-quality builds",
  "Designed for event environments",
  "Beautiful visual direction + reliable development",
  "Interactive experiences designed to engage",
  "A creative technology partner you can rely on",
];

export function WhyHighBeam() {
  return (
    <Section className="bg-primary">
      <div className="grid md:grid-cols-2 gap-12 md:gap-24">
        <div>
          <span className="text-[10px] uppercase tracking-[0.4em] text-black/50 border-l-2 border-black/30 pl-3 mb-6 block">Why HighBeam</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
            Technology That Feels Alive
          </h2>
          <p className="text-xl text-black/70 leading-relaxed">
            We've run live installations in front of a stadium crowd and a national cybersecurity conference. Neither had a second chance if something broke on stage, so nothing we ship does either.
          </p>
        </div>

        <div className="flex flex-col justify-center divide-y divide-black/10">
          {reasons.map((reason, index) => (
            <div key={index} className="flex items-center gap-4 py-5 first:pt-0 last:pb-0 group">
              <div className="flex-shrink-0 w-2 h-2 bg-black rotate-45 group-hover:scale-150 transition-transform" />
              <span className="text-lg text-black font-medium">{reason}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}