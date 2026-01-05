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
    shortDescription: "A real-time visualization tool transforming attendee insights into a dynamic digital mosaic.",
    ogImage: "/og-images/feedback-wall.png"
  },
  {
    slug: "fifa-arab-cup-fan-wall",
    title: "FIFA ARAB CUP FAN WALL: Your Name, Your Jersey, Your Moment",
    shortDescription: "An immersive fan activation turning personal data into large-scale, shareable digital content.",
    ogImage: "/og-images/fifa-fan-wall.png"
  },
  {
    slug: "dfi-golden-voice-studio",
    title: "DFI GOLDEN VOICE STUDIO: Step In, Speak Up, Star in Your Own Scene",
    shortDescription: "An interactive recording studio experience celebrating the art of voice acting and dubbing.",
    ogImage: "/og-images/golden-voice.png"
  },
  {
    slug: "qcert-vr-training",
    title: "QCERT VR TRAINING: Learning to Respond, One Real Scenario at a Time",
    shortDescription: "A VR training experience that teaches cyber security response through immersive, realistic scenarios.",
    ogImage: "/og-images/qcert-vr.jpg"
  }
];

export function getProjectMetaBySlug(slug: string): ProjectMeta | undefined {
  return projectsMeta.find(p => p.slug === slug);
}
