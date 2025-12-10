# HighBeam - Experiential Tech Studio Website

## Overview

HighBeam is a premium experiential tech studio marketing website built with a modern React + Vite stack. The site showcases interactive and immersive digital experiences for events, activations, and installations. It features a dark-themed, futuristic design with yellow accent colors, smooth animations, and a multi-page architecture for capabilities, work portfolio, process, about, and contact sections.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite with custom plugins for meta images and Replit integration
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS v4 with custom theme variables defined in `client/src/index.css`
- **UI Components**: shadcn/ui component library (new-york style) with Radix UI primitives
- **Animations**: Framer Motion for scroll-based and interactive animations
- **Typography**: Google Fonts (Space Grotesk for headings, Inter for body)

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript with ES modules
- **API Pattern**: REST endpoints under `/api/` prefix
- **Build Process**: esbuild for server bundling, Vite for client bundling
- **Static Serving**: Express serves built client assets in production

### Data Storage
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema Location**: `shared/schema.ts` contains database table definitions
- **Current Schema**: Basic users table with id, username, password fields
- **In-Memory Storage**: `server/storage.ts` provides a MemStorage class for development

### Project Structure
```
client/           # Frontend React application
  src/
    components/   # Reusable UI components
      layout/     # Navbar, Footer, Layout wrapper
      sections/   # Page sections (Hero, Capabilities, etc.)
      ui/         # shadcn/ui component library
    pages/        # Route page components
    hooks/        # Custom React hooks
    lib/          # Utilities and data
server/           # Express backend
  index.ts        # Server entry point
  routes.ts       # API route definitions
  storage.ts      # Data storage interface
  static.ts       # Static file serving
  vite.ts         # Vite dev server integration
shared/           # Shared code between client/server
  schema.ts       # Drizzle database schema
```

### Design Patterns
- **Component Composition**: Layout component wraps pages with Navbar/Footer
- **Path Aliases**: `@/` maps to client/src, `@shared/` maps to shared directory
- **Form Handling**: React Hook Form with Zod validation schemas
- **API Communication**: Fetch-based API calls with typed responses

## External Dependencies

### Email Service
- **Provider**: SMTP2GO API for transactional email
- **Usage**: Contact form submissions sent via `/api/contact` endpoint
- **Environment Variable**: `SMTP2GO_API_KEY`

### Database
- **Type**: PostgreSQL
- **Connection**: `DATABASE_URL` environment variable
- **Session Store**: connect-pg-simple for session persistence (configured but not actively used)

### Third-Party Libraries
- **Radix UI**: Headless component primitives for accessibility
- **Embla Carousel**: Image carousels on project detail pages
- **Lucide Icons**: Icon library for UI elements
- **class-variance-authority**: Component variant management
- **date-fns**: Date formatting utilities

### CDN/External Resources
- **Google Fonts**: Space Grotesk and Inter fonts loaded via CDN
- **Assets**: Project images stored in `attached_assets/` and `client/public/`