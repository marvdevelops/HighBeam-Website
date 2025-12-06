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
    title: "Feedback Wall: Real-Time Strategic Visualization for NCSA Qatar",
    shortDescription: "A high-level, real-time visualization tool designed for strategic forums.",
    description: "We partnered with the National Cybersecurity Agency (NCSA) in Qatar to develop and deploy the Feedback Wall installation—a high-level, real-time visualization tool designed for strategic forums.\n\nThis system transcends traditional event engagement by transforming authenticated participant input into actionable, visual data. Attendees used a dedicated 21-inch touchscreen kiosk to convey their focused insights. The submissions were then instantly aggregated and broadcast onto a monumental LED Feedback Wall, generating a dynamic, real-time mosaic that mapped the collective intelligence of the forum.",
    image: project1,
    images: [project1, detail1, detail3],
    deliverables: [
      {
        title: "Secure Engagement Flow",
        description: "Ensured clear, professional attribution for authorized input within the NCSA environment."
      },
      {
        title: "High-Impact Visualization",
        description: "Created a compelling, large-scale visualization that communicated complex, collective security insights instantly."
      },
      {
        title: "Strategic ROI",
        description: "Elevated the perceived sophistication of the NCSA event, fostering a culture of active contribution and collaborative security strategy."
      }
    ]
  },
  {
    slug: "fifa-arab-cup-fan-wall",
    title: "FIFA Arab Cup Fan Wall: Personalized Experiential Marketing",
    shortDescription: "An immersive, large-scale installation designed to maximize fan excitement and social sharing.",
    description: "Highbeam conceptualized and executed the FIFA Arab Cup Fan Wall, an immersive, large-scale installation designed to maximize fan excitement and social sharing within the Fan Zone.\n\nThe installation’s core feature was personalization: using a mobile web app, visitors submitted their name, team, and number, which was instantly rendered as the back of a football jersey. This custom jersey became the dynamic background for the fan's photo-op against the massive Fan Wall display.",
    image: project2,
    images: [project2, detail2, detail1],
    deliverables: [
      {
        title: "Seamless Personalization",
        description: "Delivered an instant, high-quality visual asset (the custom jersey) via a responsive mobile web platform."
      },
      {
        title: "Viral Content Generation",
        description: "Created a highly shareable, branded experience that amplified the event's reach across social media."
      },
      {
        title: "High-Throughput System",
        description: "Designed a robust admin approval flow to ensure high-quality, branded content was displayed on the main wall in real-time, managing the high volume of a major FIFA event."
      }
    ]
  },
  {
    slug: "dfi-golden-voice-studio",
    title: "DFI Golden Voice Studio: Immersive Voiceover Kiosk",
    shortDescription: "A highly engaging experiential piece celebrating the art of dubbing and voice acting.",
    description: "Highbeam partnered with the Doha Film Institute (DFI) to create the \"Golden Voice\" Kiosk Installation, a highly engaging experiential piece celebrating the art of dubbing and voice acting.\n\nThe installation was designed as a creative journey: users approached the large-format touchscreen kiosk, selected a movie or animation clip (in both English and Arabic), and then stepped into a soundproofed environment to record their own voiceover in real-time. The system instantly processed and overlaid the new audio track onto the original video.",
    image: dfiImage,
    images: [dfiImage, detail4, detail2],
    deliverables: [
      {
        title: "Bilingual UX/UI",
        description: "Seamless integration of Arabic and English content, appealing to DFI's diverse, global, and local audience."
      },
      {
        title: "Technical Precision",
        description: "Engineered a robust system for simultaneous video playback and high-quality audio recording within the demanding live event setting."
      },
      {
        title: "Viral Activation",
        description: "Created a personalized, high-value digital takeaway (the final dubbed video) that drove user participation and organic social media sharing for the DFI brand."
      }
    ]
  }
];
