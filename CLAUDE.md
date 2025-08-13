# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 13 landing page for Sous, an AI sous-chef mobile application. The project uses static export configuration for deployment and features a modern marketing site with interactive components.

## Key Development Commands

```bash
# Development
npm run dev       # Start development server on http://localhost:3000

# Build & Deploy
npm run build     # Build static export (outputs to /out directory)
npm run start     # Serve the production build locally

# Quality Checks
npm run lint      # Run ESLint (configured to ignore errors during builds)
```

## Architecture & Component Structure

### Core Architecture
- **Framework**: Next.js 13.5.1 with App Router
- **Styling**: Tailwind CSS with CSS variables + shadcn/ui components
- **Type Safety**: TypeScript with strict configuration
- **Export**: Configured for static export (`output: 'export'` in next.config.js)

### Component Organization
The application follows a modular component-based architecture:

1. **Landing Page Sections** (`/components/`):
   - `HeroSection`: Main hero with app download links
   - `ValueProposition`: Feature highlights with animated icons
   - `ScrollytellingSection`: Interactive scrolling feature showcase
   - `PricingSection`: Pricing tiers and comparisons
   - `FinalCTA`: Call-to-action section
   - `Footer`: Site footer with links
   - `FloatingIngredients`: Background animation elements

2. **UI Component Library** (`/components/ui/`):
   - Complete shadcn/ui component library (50+ components)
   - Uses Radix UI primitives with Tailwind styling
   - Components are server-component ready (`rsc: true`)

3. **Utility Functions** (`/lib/utils.ts`):
   - `cn()`: Class name merger utility using clsx + tailwind-merge

### Key Technical Decisions

1. **Static Export**: Site is built as static HTML for CDN deployment
2. **Image Optimization Disabled**: Due to static export requirements
3. **ESLint Bypass**: Configured to ignore linting errors during builds (be cautious)
4. **Component Imports**: Uses `@/` alias for clean imports
5. **CSS Variables**: Theme is managed through CSS custom properties

## Important Configuration Files

- `next.config.js`: Static export configuration with unoptimized images
- `components.json`: shadcn/ui configuration with component aliases
- `tailwind.config.ts`: Extended theme with custom colors and animations
- `package.json`: All dependencies and scripts

## Development Patterns

When working with this codebase:

1. **Adding New Sections**: Create components in `/components/` and import in `app/page.tsx`
2. **Using UI Components**: Import from `@/components/ui/` (all shadcn components available)
3. **Styling**: Use Tailwind classes with the `cn()` utility for conditional styling
4. **Images**: Place in `/public/` and reference directly (no optimization due to static export)

## Assets & Public Files

- Marketing images: `/public/` directory contains PNG assets for the landing page
- App store badges: Referenced via external URLs in components
- Static build output: `/out/` directory (generated after build)

## Theme & Design System

The project uses a comprehensive design token system:
- Colors: Managed through CSS variables (--primary, --secondary, etc.)
- Animations: Custom keyframes for accordions and other interactions
- Typography: References custom font variable `--font-winky`
- Responsive: Mobile-first approach with Tailwind breakpoints