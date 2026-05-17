import dfiImage from "@assets/golden_voice_app_1764994852180.png";
import fifaImage1 from "@assets/Gemini_Generated_Image_oidr42oidr42oidr_(1)_1764995151473.png";
import fifaImage2 from "@assets/Gemini_Generated_Image_vo6u3qvo6u3qvo6u_1764995151474.png";
import ncsaImage1 from "@assets/Gemini_Generated_Image_6693mj6693mj6693_1764995345872.png";
import ncsaImage2 from "@assets/Gemini_Generated_Image_eg3m1qeg3m1qeg3m_1764995345873.png";
import ncsaImage3 from "@assets/Gemini_Generated_Image_oqm6a0oqm6a0oqm6_1764995345873.png";
import qcertImage from "@assets/cover_1_1765200427526.jpg";
import detail2 from "@assets/generated_images/hands_on_interactive_surface.png";
import detail4 from "@assets/generated_images/holographic_texture_detail.png";
import kokoHome from "@assets/koko-screenshot-home.png";
import kokoThinking from "@assets/koko-screenshot-thinking.png";
import kokoAnswer from "@assets/koko-screenshot-answer.png";
import kokoSafety from "@assets/koko-screenshot-safety.png";
import survivalIcon from "@assets/survivalkit-icon.png";
import survival1 from "@assets/survivalkit-screenshot-1.webp";
import survival2 from "@assets/survivalkit-screenshot-2.webp";
import survival3 from "@assets/survivalkit-screenshot-3.webp";

export interface Deliverable {
  title: string;
  description: string;
}

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  theExperience?: string;
  image: string;
  images?: string[];
  externalUrl?: string;
  category: string;
  tags?: string[];
  deliverables?: Deliverable[];
}

export const projects: Project[] = [
  {
    slug: "feedback-wall-ncsa",
    category: "Interactive Installation",
    title: "FEEDBACK WALL: Where Every Insight Becomes Part of the Big Picture",
    shortDescription: "A real-time visualization tool transforming attendee insights into a dynamic digital mosaic.",
    description: "HighBeam developed an interactive Feedback Wall for a major cybersecurity forum. The goal was simple. Help people feel like their ideas mattered and show the conversations of the room coming to life in real time.",
    theExperience: "We built a two screen setup. A 21 inch touchscreen kiosk where attendees could draw or write their thoughts, and a large LED wall that instantly turned every submission into a living digital mosaic. People could see their input appear right in front of them and become part of something bigger.\n\nThe installation made the forum feel more connected. You could feel the crowd pause, look up at the wall, and recognize that their individual voice contributed to a shared picture of the event.",
    image: ncsaImage3,
    images: [ncsaImage1, ncsaImage2, ncsaImage3],
    deliverables: [
      { title: "An inviting input experience", description: "A guided, secure flow that encouraged attendees to take part without hesitation." },
      { title: "A live visual mosaic", description: "A responsive display that transformed every insight into motion and color in real time." },
      { title: "A stronger sense of community", description: "A centerpiece that made participants feel heard and helped the event feel more collaborative and human." }
    ]
  },
  {
    slug: "fifa-arab-cup-fan-wall",
    category: "Fan Activation",
    title: "FIFA ARAB CUP FAN WALL: Your Name, Your Jersey, Your Moment",
    shortDescription: "An immersive fan activation turning personal data into large-scale, shareable digital content.",
    description: "HighBeam developed the FIFA Arab Cup Fan Wall to capture the pride and excitement of being part of a global football moment. Fans love seeing themselves in the story, so we created a way for them to do exactly that.",
    theExperience: "Through a mobile web app, visitors typed in their name, team, and jersey number. Within seconds, their custom jersey appeared on a huge Fan Wall, ready for their photo. You could see people smile as their jersey lit up the screen and friends gathered around for pictures.\n\nThe experience felt personal and joyful and it turned simple inputs into memories that fans shared long after they left the venue.",
    image: fifaImage1,
    images: [fifaImage1, fifaImage2],
    deliverables: [
      { title: "Simple and fast personalization", description: "A smooth mobile flow that made custom jerseys appear almost instantly." },
      { title: "Designed for real excitement", description: "Bold visuals that looked great in photos and encouraged fans to share their moment." },
      { title: "Built for large crowds", description: "A reliable approval system that handled heavy foot traffic without breaking the rhythm of the event." }
    ]
  },
  {
    slug: "dfi-golden-voice-studio",
    category: "Experiential Activation",
    title: "DFI GOLDEN VOICE STUDIO: Step In, Speak Up, Star in Your Own Scene",
    shortDescription: "An interactive recording studio experience celebrating the art of voice acting and dubbing.",
    description: "HighBeam developed the Golden Voice Studio to give visitors a chance to experience the fun of dubbing their own movie scene. It was designed to be playful, expressive, and memorable.",
    theExperience: "Guests stepped up to the kiosk, chose a movie clip, then entered a small recording booth where they performed their voiceover. The system processed everything instantly and played back their newly dubbed scene. You could hear people laugh, redo their lines, and call their friends over to watch.\n\nIt became one of those installations people talk about. Not because of the technology alone, but because it made them feel creative and confident enough to try something new.",
    image: dfiImage,
    images: [dfiImage, detail4, detail2],
    deliverables: [
      { title: "Friendly bilingual interface", description: "An easy to use design that made both Arabic and English speaking visitors feel comfortable." },
      { title: "Smooth real time processing", description: "Audio and video handling that stayed responsive during constant use." },
      { title: "A takeaway people were proud of", description: "Personalized dubbed clips that participants saved, shared, and remembered." }
    ]
  },
  {
    slug: "qcert-vr-training",
    category: "VR Training",
    title: "QCERT VR TRAINING: Learning to Respond, One Real Scenario at a Time",
    shortDescription: "A VR training experience that teaches cyber security response through immersive, realistic scenarios.",
    description: "HighBeam developed a Virtual Reality training experience for QCert Qatar that helps people understand what it really feels like to face a cyber security attack. Instead of reading instructions or watching videos, users step inside a realistic scenario where they must make decisions, follow proper steps, and respond under pressure.\n\nThe goal was simple. Teach people how to stay calm, think clearly, and apply the right actions when something goes wrong. The VR environment guides them through each phase of the incident, showing the impact of their choices in real time.",
    theExperience: "You can see users become more focused as the simulation unfolds. They start connecting the dots, understanding why each step matters, and gaining confidence that they can handle situations that normally feel intimidating.\n\nIt is training that feels real and meaningful, and it turns complex cyber security concepts into something anyone can grasp.",
    image: qcertImage,
    images: [qcertImage],
    deliverables: [
      { title: "Immersive, high fidelity simulation", description: "A VR environment designed to mirror real cyber attack scenarios without overwhelming the learner." },
      { title: "Step by step guided learning", description: "A clear flow that walks users through each phase of incident response, helping them understand what to do and why it matters." },
      { title: "A safe space to practice under pressure", description: "Users experience the urgency of a real incident while knowing they can learn, try again, and grow their confidence." }
    ]
  },
  {
    slug: "koko-safe-ai-for-kids",
    category: "Mobile App",
    tags: ["iOS", "Android", "AI", "EdTech"],
    title: "KOKO: Safe AI Companion for Kids",
    shortDescription: "An AI companion built for children ages 5–10 with multi-layer safety, parental oversight, and on-device privacy.",
    description: "HighBeam built KoKo — a safe AI companion designed for children aged 5 to 10. In a world where AI is everywhere, parents needed something they could actually trust. KoKo answers questions, tells stories, and encourages curiosity — all within a carefully designed safety layer that redirects sensitive topics and keeps parents in control.",
    theExperience: "KoKo features a friendly octopus mascot that children immediately connect with. Voice and text chat feel natural, while a multi-layer safety filter works silently in the background. Parents get a PIN-protected dashboard with full conversation history, flagged content alerts, and daily session limits — without the app ever needing to sync data to the cloud.\n\nThe result is an AI experience that children love and parents trust.",
    image: kokoHome,
    images: [kokoHome, kokoThinking, kokoAnswer, kokoSafety],
    externalUrl: "https://heykoko.app",
    deliverables: [
      { title: "Multi-layer safety system", description: "Sensitive topics are gently redirected to trusted adults without disrupting the child's experience." },
      { title: "Parent dashboard", description: "PIN-protected access with full conversation history, flagged content alerts, and daily time limits." },
      { title: "On-device privacy", description: "No cloud sync, no account required — all data stays on the family's device." },
      { title: "Age-adaptive responses", description: "KoKo adjusts language and tone for children aged 5–10 across up to 3 child profiles." }
    ]
  },
  {
    slug: "survivalkit-emergency-guide",
    category: "Mobile App",
    tags: ["iOS", "Utilities", "Offline"],
    title: "SURVIVALKIT: Offline Emergency Guide",
    shortDescription: "A fully offline iOS app with 484+ POIs, family go-bag tracking, first aid guides, and one-tap SOS.",
    description: "HighBeam developed SurvivalKit — an emergency preparedness app designed to work entirely without internet. When disaster strikes, cell networks fail first. SurvivalKit ensures families have everything they need: offline maps with hospitals, police, and evacuation points; step-by-step first aid; go-bag checklists per family member; and one-tap access to emergency contacts.",
    theExperience: "The app covers the moments that matter most. A CPR timer beats at 100 BPM with age-specific guidance. A tourniquet timer alerts at the 2-hour critical mark. Twenty-eight offline survival guides walk users through earthquakes, fire safety, and first aid without needing a single bar of signal.\n\nSurvivalKit launched on the App Store and is available for iOS 15.1 and above.",
    image: survival1,
    images: [survival1, survival2, survival3],
    externalUrl: "https://apps.apple.com/us/app/survivalkit-emergency-guide/id6766275190",
    deliverables: [
      { title: "Fully offline maps", description: "484+ points of interest within 10km — hospitals, police, evacuation routes — no data needed." },
      { title: "CPR & tourniquet timers", description: "100 BPM metronome with age-specific guidance; tourniquet alerts at the 2-hour critical mark." },
      { title: "Family go-bag tracker", description: "Per-member checklist covering adults, children, babies, and pets." },
      { title: "28 offline survival guides", description: "Covers earthquakes, fire safety, first aid, and more — completely offline." }
    ]
  }
];