import { getProjectMetaBySlug } from "@shared/projects";

export const SITE_URL = "https://highbeam.digital";

export interface PageMeta {
  title: string;
  description: string;
  image: string;
  type: "website" | "article";
}

const staticPagesMeta: Record<string, { title: string; description: string }> = {
  "/": {
    title: "HighBeam | Experiential Tech Studio",
    description: "HighBeam is a premium experiential tech studio that builds interactive and immersive digital experiences for events, activations, and installations.",
  },
  "/capabilities": {
    title: "Capabilities | HighBeam",
    description: "Interactive digital experiences, AR and VR builds, and engagement systems. What HighBeam creates for events, activations, and brand experiences.",
  },
  "/work": {
    title: "Work | HighBeam",
    description: "Six projects, each with a real deadline, a real crowd, and no room to fail on launch day. See how HighBeam's installations, VR training, and mobile apps got built.",
  },
  "/process": {
    title: "Process | HighBeam",
    description: "Five stages, the same five every time: Discover, Design, Build, Test, Launch. How HighBeam builds experiences that hold up under real crowd pressure.",
  },
  "/about": {
    title: "About | HighBeam",
    description: "A tech studio with a creative soul. HighBeam blends imagination and engineering to build interactive and immersive digital experiences.",
  },
  "/agencies": {
    title: "For Agencies | HighBeam",
    description: "HighBeam partners with event, creative, and marketing agencies as their creative technology team, powering unforgettable experiences behind the scenes.",
  },
  "/contact": {
    title: "Contact | HighBeam",
    description: "Tell us what you're building and when it needs to be ready. We'll tell you honestly whether we're the right fit.",
  },
};

export function getMetaForPath(pathname: string): PageMeta | null {
  const staticMeta = staticPagesMeta[pathname];
  if (staticMeta) {
    return { ...staticMeta, image: "/og-image.png", type: "website" };
  }

  const workMatch = pathname.match(/^\/work\/([^/]+)\/?$/);
  if (workMatch) {
    const project = getProjectMetaBySlug(workMatch[1]);
    if (project) {
      return {
        title: `${project.title} | HighBeam`,
        description: project.shortDescription,
        image: project.ogImage,
        type: "article",
      };
    }
  }

  return null;
}

export function injectMeta(html: string, meta: PageMeta, pathname: string): string {
  const url = pathname === "/" ? SITE_URL : `${SITE_URL}${pathname}`;
  const image = meta.image.startsWith("http") ? meta.image : `${SITE_URL}${meta.image}`;

  return html
    .replace(/<title>.*?<\/title>/, `<title>${meta.title}</title>`)
    .replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${meta.description}" />`)
    .replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${meta.title}" />`)
    .replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${meta.description}" />`)
    .replace(/<meta property="og:type" content=".*?" \/>/, `<meta property="og:type" content="${meta.type}" />`)
    .replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${url}" />`)
    .replace(/<meta property="og:image" content=".*?" \/>/, `<meta property="og:image" content="${image}" />`)
    .replace(/<meta name="twitter:title" content=".*?" \/>/, `<meta name="twitter:title" content="${meta.title}" />`)
    .replace(/<meta name="twitter:description" content=".*?" \/>/, `<meta name="twitter:description" content="${meta.description}" />`)
    .replace(/<meta name="twitter:image" content=".*?" \/>/, `<meta name="twitter:image" content="${image}" />`)
    .replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${url}" />`);
}
