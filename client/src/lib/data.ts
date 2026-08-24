import dfiImage from "@assets/golden_voice_app_1764994852180.png";
import fifaImage1 from "@assets/Gemini_Generated_Image_oidr42oidr42oidr_(1)_1764995151473.png";
import fifaImage2 from "@assets/Gemini_Generated_Image_vo6u3qvo6u3qvo6u_1764995151474.png";
import ncsaImage1 from "@assets/Gemini_Generated_Image_6693mj6693mj6693_1764995345872.png";
import ncsaImage2 from "@assets/Gemini_Generated_Image_eg3m1qeg3m1qeg3m_1764995345873.png";
import ncsaImage3 from "@assets/Gemini_Generated_Image_oqm6a0oqm6a0oqm6_1764995345873.png";
import qcertImage from "@assets/cover_1_1765200427526.jpg";
import detail2 from "@assets/generated_images/hands_on_interactive_surface.png";
import detail4 from "@assets/generated_images/holographic_texture_detail.png";
import kokoHero from "@assets/koko-hero.png";
import kokoThumbnail from "@assets/koko-thumbnail.jpeg";
import kokoHomeNew from "@assets/koko-home-new.jpeg";
import kokoGreeting from "@assets/koko-greeting.jpeg";
import kokoThinkingNew from "@assets/koko-thinking-new.jpeg";
import kokoPhotosynthesis from "@assets/koko-photosynthesis.jpeg";
import survivalIcon from "@assets/survivalkit-icon.png";
import survivalHero from "@assets/survivalkit-hero.png";
import survivalThumbnail from "@assets/survivalkit-thumbnail.jpeg";
import survivalHome from "@assets/survivalkit-home.jpeg";
import survivalTools from "@assets/survivalkit-tools.jpeg";
import survivalMap from "@assets/survivalkit-map.jpeg";
import rootah1 from "@assets/rootah-screenshot-1.jpeg";
import rootah2 from "@assets/rootah-screenshot-2.jpeg";
import rootah3 from "@assets/rootah-screenshot-3.jpeg";
import carpioAr1 from "@assets/bernardo-carpio-ar-1.png";
import carpioAr2 from "@assets/bernardo-carpio-ar-2.png";
import carpioAr3 from "@assets/bernardo-carpio-ar-3.png";
import carpioCover from "@assets/bernardo-carpio-cover.png";
import carpioHero from "@assets/bernardo-carpio-hero.png";
import qnbPoster from "@assets/qnb-coloring-poster.jpg";
import qnbVideo from "@assets/generated_videos/qnb-coloring-app.mp4";

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
  videoUrl?: string;
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
    shortDescription: "Attendees sketched on a kiosk. Their drawing showed up on a giant shared wall in under a second, in front of the whole conference floor.",
    description: "Most conference feedback happens in a survey nobody opens after the event. We built something people did while the conversation was still happening. Attendees sketched or wrote on a kiosk and watched it appear on a giant shared wall in front of the whole room, in real time.",
    theExperience: "A 21-inch touchscreen kiosk on one side, a large LED wall on the other. Someone would draw a quick doodle or write a note, and within a second it showed up on the wall for the entire floor to see. People stopped mid-conversation to look up. A few went back for a second submission once they saw the first one land. That's the moment the installation was actually built for: not the tech working, but a room full of strangers realizing they were all adding to the same picture.",
    image: ncsaImage3,
    images: [ncsaImage1, ncsaImage2, ncsaImage3],
    deliverables: [
      { title: "An inviting input experience", description: "A guided, secure flow that let people take part without needing an explanation first." },
      { title: "A live visual mosaic", description: "A wall that turned individual input into something the whole room shared, instantly." },
      { title: "A stronger sense of community", description: "People at a cybersecurity conference, of all places, ended up talking to strangers because of it." }
    ]
  },
  {
    slug: "fifa-arab-cup-fan-wall",
    category: "Fan Activation",
    title: "FIFA ARAB CUP FAN WALL: Your Name, Your Jersey, Your Moment",
    shortDescription: "Fans typed in a name and number on their phone. Their custom jersey lit up a stadium-sized screen seconds later.",
    description: "A phone screen is where most sports fandom lives now, alone, scrolling. We built the opposite: a way for a fan's name to end up on the biggest screen in the stadium, in front of everyone around them.",
    theExperience: "Fans typed their name, team, and jersey number into a mobile web app. Seconds later their custom jersey appeared on a stadium-sized Fan Wall. The part worth noting isn't the speed, it's what happened next: groups of friends gathered around a phone to watch one person's jersey go up, phones already out to capture it before the app had even finished loading. The tech's job was to get out of the way fast enough for that moment to happen.",
    image: fifaImage1,
    images: [fifaImage1, fifaImage2],
    deliverables: [
      { title: "Simple and fast personalization", description: "A mobile flow quick enough that the moment didn't get lost waiting for a loading screen." },
      { title: "Designed for real excitement", description: "Visuals bold enough to be worth pulling out a phone for." },
      { title: "Built for large crowds", description: "An approval system that held up under heavy foot traffic without slowing the room down." }
    ]
  },
  {
    slug: "dfi-golden-voice-studio",
    category: "Experiential Activation",
    title: "DFI GOLDEN VOICE STUDIO: Step In, Speak Up, Star in Your Own Scene",
    shortDescription: "Festival-goers stepped into a booth, dubbed a real film scene, and walked out with a clip worth sending to their group chat.",
    description: "Dubbing a movie scene used to be something only a professional voice actor got to do. We built a booth at the Doha Film Institute where any festival-goer could step in and do it themselves.",
    theExperience: "Guests picked a movie clip, stepped into a small recording booth, and performed the voiceover live. Playback was instant. What we noticed watching it run: almost nobody left after their first take. They laughed at themselves, asked to redo it, then went and grabbed a friend to watch. Nobody had to be told to try it twice. That's the actual tell that something is working: not a satisfaction score, a person choosing to do it again on their own.",
    image: dfiImage,
    images: [dfiImage, detail4, detail2],
    deliverables: [
      { title: "Friendly bilingual interface", description: "A design simple enough that both Arabic and English speakers felt at ease immediately." },
      { title: "Smooth real time processing", description: "Audio and video that kept up under constant back-to-back use, no waiting between guests." },
      { title: "A takeaway people were proud of", description: "A clip people actually wanted to send to someone, not just a receipt that they'd shown up." }
    ]
  },
  {
    slug: "qcert-vr-training",
    category: "VR Training",
    title: "QCERT VR TRAINING: Learning to Respond, One Real Scenario at a Time",
    shortDescription: "Trainees put on a headset and had to make real incident-response decisions under a simulated attack, not read about them in a slide deck.",
    description: "Cybersecurity training usually means reading a slide deck and clicking next. We built a VR simulation for QCert Qatar where trainees had to live through a realistic attack scenario and make real decisions under pressure, not memorize a checklist.",
    theExperience: "Trainees put the headset on expecting a demo. What we watched happen instead: about ninety seconds in, the questions to booth staff stopped and the focus on the screen sharpened. People were making calls under simulated pressure, the same kind of pressure a real incident creates. That shift, from passive to alert, is the actual difference between training that sticks and training that gets forgotten by lunch.",
    image: qcertImage,
    images: [qcertImage],
    deliverables: [
      { title: "Immersive, high fidelity simulation", description: "A VR environment realistic enough to trigger real decision-making, not just observation." },
      { title: "Step by step guided learning", description: "A flow that built understanding of why each step mattered, not just what to click." },
      { title: "A safe space to practice under pressure", description: "Room to get it wrong, learn, and try again before a real incident ever tests them." }
    ]
  },
  {
    slug: "bernardo-carpio-komiks-ar",
    category: "Augmented Reality",
    tags: ["AR", "Publishing", "Mobile App"],
    title: "BERNARDO CARPIO KOMIKS: Augmented Reality Comics",
    shortDescription: "A phone camera turns the printed page into a 3D scene. The first AR reading experience built for Filipino comics.",
    description: "A comic book is usually a flat page you read once and put down. We built an AR layer for Bernardo Carpio Komiks that lets the characters step off the page in 3D, using nothing but a phone camera pointed at the panel.",
    theExperience: "A reader opens the free companion app, points their phone at a page, and the character stands up off the paper in full 3D, right on the table in front of them, moving through real Filipino martial arts stances instead of just standing there. It's a first for Filipino comics. The moment that matters isn't the tech working, it's a reader realizing the story they've been reading is suddenly standing in their own living room.",
    image: carpioHero,
    images: [carpioHero, carpioAr1, carpioAr2, carpioAr3, carpioCover],
    deliverables: [
      { title: "First-of-its-kind AR reading", description: "A phone-camera experience that turns a printed page into a 3D scene." },
      { title: "Animated with real martial arts", description: "The character moves through authentic Filipino martial arts forms, not a generic idle animation." },
      { title: "Built for a local story", description: "An experience made specifically for a Filipino character and a Filipino audience, not a generic AR template." },
      { title: "A reason to pick the book back up", description: "A feature that gives a comic a second life after the first read." }
    ]
  },
  {
    slug: "qnb-interactive-coloring-app",
    category: "AI Activation",
    tags: ["AI", "Experiential", "Banking"],
    title: "QNB INTERACTIVE COLORING APP: Color It, Then Watch It Move",
    shortDescription: "A child colors a printed page, holds it up to a camera, and watches their exact colors come alive on screen in seconds.",
    description: "Kids color printed pages with crayons all the time. We built a way for Qatar National Bank to bring that coloring page to life on a screen the moment a child finished it, using AI to turn a crayon drawing into a moving scene in real time.",
    theExperience: "A child colors a printed QNB page by hand, the same way they always have, then holds it up to a camera at the event. Within seconds, their exact coloring choices appear animated on a live display: their colors, their choices, moving. Parents watched their kids point at the screen and say \"that's mine.\" That's the whole point: the tech disappears, and what's left is a kid seeing their own drawing come alive.",
    image: qnbPoster,
    videoUrl: qnbVideo,
    deliverables: [
      { title: "Real crayon, real recognition", description: "AI that read each child's actual coloring choices, not a generic animation." },
      { title: "Instant turnaround", description: "A live event display fast enough to keep up with a line of excited kids." },
      { title: "A brand moment kids actually enjoyed", description: "A banking activation that felt like play, not marketing." }
    ]
  },
  {
    slug: "koko-safe-ai-for-kids",
    category: "Mobile App",
    tags: ["iOS", "Android", "AI", "EdTech"],
    title: "KOKO: Safe AI Companion for Kids",
    shortDescription: "A chat companion for kids 5 to 10, built with parental controls and safety filtering from day one, not bolted on after launch.",
    description: "Most AI products for kids are built for engagement first and safety as an afterthought. KoKo is a chat companion for kids 5 to 10 where the parental controls and safety filtering came first, before a single feature got added on top.",
    theExperience: "A kid's first conversation with KoKo isn't with a chatbot optimized to keep them scrolling. It's with something a parent can actually watch, adjust, and trust, because the guardrails were the starting point of the build, not a patch after launch. That's the whole bet: AI for kids should earn a parent's trust before it earns a kid's attention.",
    image: kokoThumbnail,
    images: [kokoHero, kokoHomeNew, kokoGreeting, kokoThinkingNew, kokoPhotosynthesis],
    externalUrl: "https://www.heykoko.app",
    deliverables: [
      { title: "Multi-layer safety system", description: "Sensitive topics are gently redirected to trusted adults without disrupting the child's experience." },
      { title: "Parent dashboard", description: "PIN-protected access with full conversation history, flagged content alerts, and daily time limits." },
      { title: "On-device privacy", description: "No cloud sync, no account required — all data stays on the family's device." },
      { title: "Age-adaptive responses", description: "KoKo adjusts language and tone for children aged 5–10 across up to 3 child profiles." }
    ]
  },
  {
    slug: "rootah-route-planning",
    category: "Mobile App",
    tags: ["iOS", "Android", "Running", "Cycling"],
    title: "ROOTAH: Route Planning App",
    shortDescription: "Tap your start, tap your stops. Rootah builds the actual route along real streets and trails, live distance and elevation included.",
    description: "Runners and cyclists in the Philippines were stuck estimating distances or switching between apps mid-route. Rootah is the first route planning app built and launched in the Philippines, made to solve that exact problem: tap your start, tap your stops, and the app builds the actual route along real streets and trails, not a straight line through a building.",
    theExperience: "A runner opens Rootah, taps a starting point and a few stops, and watches the route snap to real streets with live distance and elevation updating as they drag each point. Before heading out, they can preview the terrain in 3D to see the hill they're about to commit to. Out on the trail, GPX export sends the route straight to a Garmin or Coros watch, so there's no more guessing and no more switching apps mid-run.",
    image: rootah1,
    images: [rootah1, rootah2, rootah3],
    externalUrl: "https://rootah.com",
    deliverables: [
      { title: "Real-street routing", description: "Routes that follow actual roads and trails, with distance and elevation updating live as you build them." },
      { title: "Terrain you can see before you run it", description: "A 3D flythrough preview so a hill isn't a surprise halfway through." },
      { title: "Built for the local running community", description: "Club tools for scheduling group runs and managing RSVPs, made for how Filipino running groups actually organize." }
    ]
  },
  {
    slug: "survivalkit-emergency-guide",
    category: "Mobile App",
    tags: ["iOS", "Utilities", "Offline"],
    title: "SURVIVALKIT: Offline Emergency Guide",
    shortDescription: "484 emergency locations, a go-bag tracker, and first aid guides, all working with zero signal. Built for the moment your phone has no bars.",
    description: "An emergency doesn't wait for a signal bar. SurvivalKit is an offline guide built for the exact moment a Filipino family's phone has no connection and no time to search for help.",
    theExperience: "484 emergency locations, a go-bag tracker, and first aid guides, all working with zero signal, zero data collected. The design question wasn't \"how do we make this engaging.\" It was \"what does someone need in their hand in the sixty seconds after the power goes out.\" That's a different kind of tech, built for a moment when a person needs it to just work, not to hold their attention.",
    image: survivalThumbnail,
    images: [survivalHero, survivalHome, survivalTools, survivalMap],
    externalUrl: "https://apps.apple.com/us/app/survivalkit-emergency-guide/id6766275190",
    deliverables: [
      { title: "Fully offline maps", description: "484+ points of interest within 10km — hospitals, police, evacuation routes — no data needed." },
      { title: "CPR & tourniquet timers", description: "100 BPM metronome with age-specific guidance; tourniquet alerts at the 2-hour critical mark." },
      { title: "Family go-bag tracker", description: "Per-member checklist covering adults, children, babies, and pets." },
      { title: "28 offline survival guides", description: "Covers earthquakes, fire safety, first aid, and more — completely offline." }
    ]
  }
];
