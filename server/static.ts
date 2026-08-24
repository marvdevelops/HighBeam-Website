import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { getMetaForPath, injectMeta } from "./seo";

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  app.use(express.static(distPath));

  // fall through to index.html for any unmatched route, injecting
  // per-page meta tags where we have them
  app.use("*", (req, res) => {
    const indexPath = path.resolve(distPath, "index.html");
    const pathname = req.originalUrl.split("?")[0];
    const meta = getMetaForPath(pathname);

    if (!meta) {
      return res.sendFile(indexPath);
    }

    const html = fs.readFileSync(indexPath, "utf-8");
    res.send(injectMeta(html, meta, pathname));
  });
}
