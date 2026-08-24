import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { projectsMeta } from "@shared/projects";

const SITE_URL = "https://highbeam.digital";

const staticRoutes = [
  "/",
  "/capabilities",
  "/work",
  "/process",
  "/about",
  "/agencies",
  "/contact",
];

const contactFormSchema = z.object({
  name: z.string().min(2),
  company: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  description: z.string().min(10),
});

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  app.get("/sitemap.xml", (_req, res) => {
    const urls = [
      ...staticRoutes,
      ...projectsMeta.map((p) => `/work/${p.slug}`),
    ];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url>\n    <loc>${SITE_URL}${url}</loc>\n  </url>`).join("\n")}
</urlset>`;

    res.type("application/xml").send(xml);
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const formData = contactFormSchema.parse(req.body);
      
      const emailBody = `
New contact form submission from HighBeam website:

Name: ${formData.name}
Company: ${formData.company}
Email: ${formData.email}
Phone: ${formData.phone || 'N/A'}

Project Description:
${formData.description}
      `.trim();

      const smtp2goPayload = {
        api_key: process.env.SMTP2GO_API_KEY,
        to: ["info@highbeam.digital"],
        sender: "noreply@highbeam.digital",
        subject: `New Inquiry from ${formData.name} - ${formData.company}`,
        text_body: emailBody,
        html_body: emailBody.replace(/\n/g, '<br>'),
      };

      const response = await fetch("https://api.smtp2go.com/v3/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(smtp2goPayload),
      });

      const result = await response.json();

      if (!response.ok || result.data?.error) {
        console.error("SMTP2GO Error:", result);
        return res.status(500).json({ 
          message: "Failed to send email",
          error: result.data?.error || "Unknown error"
        });
      }

      res.json({ 
        message: "Email sent successfully",
        success: true
      });

    } catch (error) {
      console.error("Contact form error:", error);
      
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Invalid form data",
          errors: error.errors
        });
      }

      res.status(500).json({ 
        message: "Failed to send email"
      });
    }
  });

  return httpServer;
}
