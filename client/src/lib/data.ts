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
    title: "FEEDBACK WALL: Where Every Insight Becomes Part of the Big Picture",
    shortDescription: "A real-time visualization tool transforming attendee insights into a dynamic digital mosaic.",
    description: "HighBeam developed an interactive Feedback Wall for a major cybersecurity forum. The goal was simple. Help people feel like their ideas mattered and show the conversations of the room coming to life in real time.",
    theExperience: "We built a two screen setup. A 21 inch touchscreen kiosk where attendees could draw or write their thoughts, and a large LED wall that instantly turned every submission into a living digital mosaic. People could see their input appear right in front of them and become part of something bigger.\n\nThe installation made the forum feel more connected. You could feel the crowd pause, look up at the wall, and recognize that their individual voice contributed to a shared picture of the event.",
    image: ncsaImage3,
    images: [ncsaImage1, ncsaImage2, ncsaImage3],
    deliverables: [
      {
        title: "An inviting input experience",
        description: "A guided, secure flow that encouraged attendees to take part without hesitation."
      },
      {
        title: "A live visual mosaic",
        description: "A responsive display that transformed every insight into motion and color in real time."
      },
      {
        title: "A stronger sense of community",
        description: "A centerpiece that made participants feel heard and helped the event feel more collaborative and human."
      }
    ]
  },
  {
    slug: "fifa-arab-cup-fan-wall",
    title: "FIFA ARAB CUP FAN WALL: Your Name, Your Jersey, Your Moment",
    shortDescription: "An immersive fan activation turning personal data into large-scale, shareable digital content.",
    description: "HighBeam developed the FIFA Arab Cup Fan Wall to capture the pride and excitement of being part of a global football moment. Fans love seeing themselves in the story, so we created a way for them to do exactly that.",
    theExperience: "Through a mobile web app, visitors typed in their name, team, and jersey number. Within seconds, their custom jersey appeared on a huge Fan Wall, ready for their photo. You could see people smile as their jersey lit up the screen and friends gathered around for pictures.\n\nThe experience felt personal and joyful and it turned simple inputs into memories that fans shared long after they left the venue.",
    image: fifaImage1,
    images: [fifaImage1, fifaImage2],
    deliverables: [
      {
        title: "Simple and fast personalization",
        description: "A smooth mobile flow that made custom jerseys appear almost instantly."
      },
      {
        title: "Designed for real excitement",
        description: "Bold visuals that looked great in photos and encouraged fans to share their moment."
      },
      {
        title: "Built for large crowds",
        description: "A reliable approval system that handled heavy foot traffic without breaking the rhythm of the event."
      }
    ]
  },
  {
    slug: "dfi-golden-voice-studio",
    title: "DFI GOLDEN VOICE STUDIO: Step In, Speak Up, Star in Your Own Scene",
    shortDescription: "An interactive recording studio experience celebrating the art of voice acting and dubbing.",
    description: "HighBeam developed the Golden Voice Studio to give visitors a chance to experience the fun of dubbing their own movie scene. It was designed to be playful, expressive, and memorable.",
    theExperience: "Guests stepped up to the kiosk, chose a movie clip, then entered a small recording booth where they performed their voiceover. The system processed everything instantly and played back their newly dubbed scene. You could hear people laugh, redo their lines, and call their friends over to watch.\n\nIt became one of those installations people talk about. Not because of the technology alone, but because it made them feel creative and confident enough to try something new.",
    image: dfiImage,
    images: [dfiImage, detail4, detail2],
    deliverables: [
      {
        title: "Friendly bilingual interface",
        description: "An easy to use design that made both Arabic and English speaking visitors feel comfortable."
      },
      {
        title: "Smooth real time processing",
        description: "Audio and video handling that stayed responsive during constant use."
      },
      {
        title: "A takeaway people were proud of",
        description: "Personalized dubbed clips that participants saved, shared, and remembered."
      }
    ]
  }
];
