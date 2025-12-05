import { Link, useLocation } from "wouter";
import project1 from "@assets/generated_images/abstract_immersive_digital_art_installation_with_neon_lights.png";
import project2 from "@assets/generated_images/interactive_digital_engagement_zone_with_touchscreens.png";
import project3 from "@assets/generated_images/architectural_light_installation_in_a_dark_space.png";

export const projects = [
  {
    slug: "immersive-brand-showcase",
    title: "Immersive Brand Showcase",
    shortDescription: "A multi-layered experience designed to captivate and inspire.",
    description: "A digital environment designed to spark exploration.",
    image: project1,
    details: {
        challenge: "The brand needed an experience that stood out, attracted visitors, and created meaningful interaction.",
        vision: "Build a digital environment that sparks curiosity and invites hands-on exploration.",
        built: "A bespoke experience designed with immersive visuals, smooth interactions, and real-time engagement.",
        result: "Increased traffic, deeper engagement, and a memorable brand moment guests remembered long after the event."
    }
  },
  {
    slug: "digital-interaction-zone",
    title: "Digital Interaction Zone",
    shortDescription: "A playful, exploration-driven engagement environment.",
    description: "A playful experience that drew visitors deeper into the brand story.",
    image: project2,
    details: {
        challenge: "Create a high-energy zone that encourages participation and social sharing.",
        vision: "Gamify the brand experience to make it fun and accessible for all ages.",
        built: "Touch-responsive interfaces connected to large-scale LED displays with real-time feedback.",
        result: "Over 10,000 interactions in 3 days and massive social media amplification."
    }
  },
  {
    slug: "spatial-storytelling-installation",
    title: "Spatial Storytelling Installation",
    shortDescription: "A branded environment that transformed movement into narrative.",
    description: "A space transformed into a living digital canvas.",
    image: project3,
    details: {
        challenge: "Turn a passive hallway into an active storytelling journey.",
        vision: "Use motion tracking to trigger narrative elements as guests walk through the space.",
        built: "Lidar-based tracking system integrated with projection mapping and spatial audio.",
        result: "A seamless blend of physical and digital that immersed guests completely in the brand story."
    }
  },
];
