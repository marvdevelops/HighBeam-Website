export interface ProjectMeta {
  slug: string;
  title: string;
  shortDescription: string;
  ogImage: string;
}

export const projectsMeta: ProjectMeta[] = [
  {
    slug: "feedback-wall-ncsa",
    title: "FEEDBACK WALL: Where Every Insight Becomes Part of the Big Picture",
    shortDescription: "Attendees sketched on a kiosk. Their drawing showed up on a giant shared wall in under a second, in front of the whole conference floor.",
    ogImage: "/og-images/feedback-wall.png"
  },
  {
    slug: "fifa-arab-cup-fan-wall",
    title: "FIFA ARAB CUP FAN WALL: Your Name, Your Jersey, Your Moment",
    shortDescription: "Fans typed in a name and number on their phone. Their custom jersey lit up a stadium-sized screen seconds later.",
    ogImage: "/og-images/fifa-fan-wall.png"
  },
  {
    slug: "dfi-golden-voice-studio",
    title: "DFI GOLDEN VOICE STUDIO: Step In, Speak Up, Star in Your Own Scene",
    shortDescription: "Festival-goers stepped into a booth, dubbed a real film scene, and walked out with a clip worth sending to their group chat.",
    ogImage: "/og-images/golden-voice.png"
  },
  {
    slug: "qcert-vr-training",
    title: "QCERT VR TRAINING: Learning to Respond, One Real Scenario at a Time",
    shortDescription: "Trainees put on a headset and had to make real incident-response decisions under a simulated attack, not read about them in a slide deck.",
    ogImage: "/og-images/qcert-vr.jpg"
  },
  {
    slug: "koko-safe-ai-for-kids",
    title: "KOKO: Safe AI Companion for Kids",
    shortDescription: "A chat companion for kids 5 to 10, built with parental controls and safety filtering from day one, not bolted on after launch.",
    ogImage: "/opengraph.jpg"
  },
  {
    slug: "survivalkit-emergency-guide",
    title: "SURVIVALKIT: Offline Emergency Guide",
    shortDescription: "484 emergency locations, a go-bag tracker, and first aid guides, all working with zero signal. Built for the moment your phone has no bars.",
    ogImage: "/opengraph.jpg"
  },
  {
    slug: "rootah-route-planning",
    title: "ROOTAH: Route Planning App",
    shortDescription: "Tap your start, tap your stops. Rootah builds the actual route along real streets and trails, live distance and elevation included.",
    ogImage: "/opengraph.jpg"
  },
  {
    slug: "bernardo-carpio-komiks-ar",
    title: "BERNARDO CARPIO KOMIKS: Augmented Reality Comics",
    shortDescription: "A phone camera turns the printed page into a 3D scene. The first AR reading experience built for Filipino comics.",
    ogImage: "/opengraph.jpg"
  }
];

export function getProjectMetaBySlug(slug: string): ProjectMeta | undefined {
  return projectsMeta.find(p => p.slug === slug);
}
