import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { getProjectMetaBySlug } from "@shared/projects";

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  app.use(express.static(distPath));

  // Handle project detail pages with dynamic OG meta tags
  app.get("/work/:slug", (req, res) => {
    const { slug } = req.params;
    const project = getProjectMetaBySlug(slug);
    const indexPath = path.resolve(distPath, "index.html");
    
    if (!project) {
      return res.sendFile(indexPath);
    }

    let html = fs.readFileSync(indexPath, "utf-8");
    
    const baseUrl = "https://highbeam.digital";
    const ogTitle = `${project.title} | HighBeam`;
    const ogDescription = project.shortDescription;
    const ogImage = `${baseUrl}${project.ogImage}`;
    const ogUrl = `${baseUrl}/work/${project.slug}`;

    html = html.replace(
      /<title>.*?<\/title>/,
      `<title>${ogTitle}</title>`
    );
    html = html.replace(
      /<meta property="og:title" content=".*?" \/>/,
      `<meta property="og:title" content="${ogTitle}" />`
    );
    html = html.replace(
      /<meta property="og:description" content=".*?" \/>/,
      `<meta property="og:description" content="${ogDescription}" />`
    );
    html = html.replace(
      /<meta property="og:url" content=".*?" \/>/,
      `<meta property="og:url" content="${ogUrl}" />`
    );
    html = html.replace(
      /<meta property="og:image" content=".*?" \/>/,
      `<meta property="og:image" content="${ogImage}" />`
    );
    html = html.replace(
      /<meta property="og:type" content=".*?" \/>/,
      `<meta property="og:type" content="article" />`
    );
    html = html.replace(
      /<meta name="twitter:title" content=".*?" \/>/,
      `<meta name="twitter:title" content="${ogTitle}" />`
    );
    html = html.replace(
      /<meta name="twitter:description" content=".*?" \/>/,
      `<meta name="twitter:description" content="${ogDescription}" />`
    );
    html = html.replace(
      /<meta name="twitter:image" content=".*?" \/>/,
      `<meta name="twitter:image" content="${ogImage}" />`
    );
    html = html.replace(
      /<meta name="description" content=".*?" \/>/,
      `<meta name="description" content="${ogDescription}" />`
    );
    html = html.replace(
      /<link rel="canonical" href=".*?" \/>/,
      `<link rel="canonical" href="${ogUrl}" />`
    );

    res.send(html);
  });

  // fall through to index.html if the file doesn't exist
  app.use("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
