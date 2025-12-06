import { Link, useLocation } from "wouter";
import project1 from "@assets/generated_images/abstract_immersive_digital_art_installation_with_neon_lights.png";
import project2 from "@assets/generated_images/interactive_digital_engagement_zone_with_touchscreens.png";
import project3 from "@assets/generated_images/architectural_light_installation_in_a_dark_space.png";
import dfiImage from "@assets/golden_voice_app_1764994852180.png";
import detail1 from "@assets/generated_images/detail_of_immersive_light_installation.png";
import detail2 from "@assets/generated_images/hands_on_interactive_surface.png";
import detail3 from "@assets/generated_images/wide_architectural_light_beam.png";
import detail4 from "@assets/generated_images/holographic_texture_detail.png";

export const projects = [
  {
    slug: "feedback-wall-ncsa",
    title: "Feedback Wall: Real-Time Strategic Visualization",
    shortDescription: "A high-level, real-time visualization tool designed for strategic forums.",
    description: "We partnered with the National Cybersecurity Agency (NCSA) in Qatar to develop and deploy the Feedback Wall installation—a high-level, real-time visualization tool designed for strategic forums.",
    image: project1,
    images: [project1, detail1, detail3],
    details: {
        challenge: "Transform authenticated participant input into actionable, visual data.",
        vision: "Generate a dynamic, real-time mosaic that mapped the collective intelligence of the forum.",
        built: "Dedicated 21-inch touchscreen kiosk instantly aggregated and broadcast onto a monumental LED Feedback Wall.",
        result: "Elevated the perceived sophistication of the NCSA event, fostering a culture of active contribution and collaborative security strategy."
    }
  },
  {
    slug: "fifa-arab-cup-fan-wall",
    title: "FIFA Arab Cup Fan Wall",
    shortDescription: "Personalized experiential marketing for the FIFA Arab Cup Fan Zone.",
    description: "Highbeam conceptualized and executed the FIFA Arab Cup Fan Wall, an immersive, large-scale installation designed to maximize fan excitement and social sharing within the Fan Zone.",
    image: project2,
    images: [project2, detail2, detail1],
    details: {
        challenge: "Maximize fan excitement and social sharing within the Fan Zone.",
        vision: "Using a mobile web app, visitors submitted their name, team, and number, which was instantly rendered as the back of a football jersey.",
        built: "Responsive mobile web platform with a robust admin approval flow, displaying custom jerseys on a massive Fan Wall in real-time.",
        result: "Created a highly shareable, branded experience that amplified the event's reach across social media."
    }
  },
  {
    slug: "dfi-golden-voice-studio",
    title: "DFI Golden Voice Studio",
    shortDescription: "Immersive voiceover kiosk celebrating the art of dubbing.",
    description: "Highbeam partnered with the Doha Film Institute (DFI) to create the 'Golden Voice' Kiosk Installation, a highly engaging experiential piece celebrating the art of dubbing and voice acting.",
    image: dfiImage,
    images: [dfiImage, detail4, detail2],
    details: {
        challenge: "Create a highly engaging experiential piece celebrating the art of dubbing and voice acting.",
        vision: "A creative journey where users select a clip, record their own voiceover in a soundproofed environment, and instantly receive a processed video.",
        built: "Large-format touchscreen kiosk with simultaneous video playback and high-quality audio recording, featuring a seamless bilingual (English/Arabic) UX/UI.",
        result: "Created a personalized, high-value digital takeaway that drove user participation and organic social media sharing."
    }
  }
];
