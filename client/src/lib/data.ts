import { Link, useLocation } from "wouter";
import project1 from "@assets/generated_images/abstract_immersive_digital_art_installation_with_neon_lights.png";
import project2 from "@assets/generated_images/interactive_digital_engagement_zone_with_touchscreens.png";
import project3 from "@assets/generated_images/architectural_light_installation_in_a_dark_space.png";
import dfiImage from "@assets/golden_voice_app_1764994852180.png";
import fifaImage1 from "@assets/Gemini_Generated_Image_oidr42oidr42oidr_(1)_1764995151473.png";
import fifaImage2 from "@assets/Gemini_Generated_Image_vo6u3qvo6u3qvo6u_1764995151474.png";
import ncsaImage1 from "@assets/Gemini_Generated_Image_6693mj6693mj6693_1764995345872.png";
import ncsaImage2 from "@assets/Gemini_Generated_Image_eg3m1qeg3m1qeg3m_1764995345873.png";
import ncsaImage3 from "@assets/Gemini_Generated_Image_oqm6a0oqm6a0oqm6_1764995345873.png";
import ncsaImage4 from "@assets/Gemini_Generated_Image_v4wx7zv4wx7zv4wx_1764995345873.png";
import detail1 from "@assets/generated_images/detail_of_immersive_light_installation.png";
import detail2 from "@assets/generated_images/hands_on_interactive_surface.png";
import detail3 from "@assets/generated_images/wide_architectural_light_beam.png";
import detail4 from "@assets/generated_images/holographic_texture_detail.png";

export const projects = [
  {
    slug: "feedback-wall-ncsa",
    title: "Feedback Wall: Real-Time Strategic Visualization for NCSA Qatar",
    shortDescription: "A real-time visualization tool transforming attendee insights into a dynamic digital mosaic.",
    description: "We partnered with the National Cybersecurity Agency in Qatar to create a centerpiece for their strategic forums. The goal was to take the silent thoughts of attendees and turn them into a shared visual reality. We wanted to move beyond standard event feedback and create a moment where individual insights could build a collective picture of the room’s intelligence.",
    theExperience: "Participants stepped up to dedicated 21-inch touchscreens to share their perspectives. As they hit submit, their words didn't just disappear into a database. They were instantly visualized on a massive LED wall, joining hundreds of others to form a living, breathing mosaic of ideas. It turned the act of giving feedback into a moment of public contribution.",
    image: ncsaImage3,
    images: [ncsaImage1, ncsaImage2, ncsaImage3],
    deliverables: [
      {
        title: "Secure participation",
        description: "We created a flow that felt professional and trusted for high-level attendees."
      },
      {
        title: "A living visual story",
        description: "Complex ideas were instantly turned into a beautiful, large-scale display."
      },
      {
        title: "Active contribution",
        description: "The installation encouraged everyone to share by making their voice visibly matter."
      }
    ]
  },
  {
    slug: "fifa-arab-cup-fan-wall",
    title: "FIFA Arab Cup Fan Wall: Personalized Experiential Marketing",
    shortDescription: "An immersive fan activation turning personal data into large-scale, shareable digital content.",
    description: "We worked with the FIFA Arab Cup to bring energy and personal connection to the Fan Zone. The challenge was to give thousands of fans a way to see themselves in the game. We built an installation that turned personal fandom into a massive public celebration, giving every visitor a moment of fame on the big screen.",
    theExperience: "Fans used a simple mobile app to enter their name, team, and favorite number. In seconds, that data transformed into a custom football jersey displayed on the giant Fan Wall. It wasn't just a graphic. It became a personalized backdrop for photos, letting fans pose with their \"official\" jersey larger than life, ready to share with the world.",
    image: fifaImage1,
    images: [fifaImage1, fifaImage2],
    deliverables: [
      {
        title: "Instant personalization",
        description: "Fans got a high-quality custom digital asset in seconds."
      },
      {
        title: "Shareable moments",
        description: "The experience created branded content that fans were eager to post online."
      },
      {
        title: "Reliable scale",
        description: "Our system handled thousands of interactions smoothly during the live event."
      }
    ]
  },
  {
    slug: "dfi-golden-voice-studio",
    title: "DFI Golden Voice Studio: Immersive Voiceover Kiosk",
    shortDescription: "An interactive recording studio experience celebrating the art of voice acting and dubbing.",
    description: "We collaborated with the Doha Film Institute to celebrate the magic of cinema through sound. The Golden Voice installation was built to let visitors step into the shoes of a voice actor. We wanted to demystify the art of dubbing and give film lovers a hands-on way to become part of their favorite scenes.",
    theExperience: "Users started at a large touchscreen to pick a clip from a famous movie or animation. They then stepped into a private soundproof booth and recorded their own lines in English or Arabic. The system worked in real time, overlaying their voice onto the original footage so they could instantly watch—and keep—their performance as a new movie star.",
    image: dfiImage,
    images: [dfiImage, detail4, detail2],
    deliverables: [
      {
        title: "Seamless bilingual flow",
        description: "The interface worked perfectly for both Arabic and English speakers."
      },
      {
        title: "Studio quality audio",
        description: "We engineered a system that captured crisp sound in a busy event space."
      },
      {
        title: "A personal takeaway",
        description: "Visitors left with a unique video of their performance to share with friends."
      }
    ]
  }
];
