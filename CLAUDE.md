# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal website (shiftingedges.com) built with SvelteKit and deployed on Netlify. The site includes:

- Professional info and links
- A poetry section with individual poem pages
- A unique "hypertext collage" feature that combines poems, essays, stories, song lyrics with images of artworks and movie stills
- A photo section "Trees of Los Angeles" featuring 143 Instagram photos in a grid layout
- Static site generation using `@sveltejs/adapter-static`

## Common Commands

### Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Code Quality

- `npm run lint` - Run ESLint and Prettier checks
- `npm run format` - Format code with Prettier
- `npm run check` - Run Svelte type checking
- `npm run check:watch` - Run Svelte type checking in watch mode

### Testing

- `npm run test` - Run tests with Vitest

### Content Analysis

- `npm run poems:analyze` - Analyze poem paths (custom script)

## Architecture

### Key Directories

- `src/routes/` - SvelteKit routes and pages
- `src/routes/collage/` - Hypertext collage section with individual collage pages
- `src/routes/poems/` - Poetry section with individual poem pages
- `src/routes/treesoflosangeles/` - Trees of Los Angeles photo section
- `src/lib/` - Shared components and utilities
- `src/lib/img/` - Image assets
- `static/` - Static assets (fonts, PDFs, favicon)
- `static/treesoflosangeles/` - Tree photos from Instagram export

### Route Structure

- `/` - Home page
- `/links` - Links page
- `/software` - Software page
- `/shifting-edges` - Shifting edges page
- `/poems/` - Poetry section with nested poem pages
- `/collage/` - Hypertext collage section with nested collage pages
- `/treesoflosangeles/` - Trees of Los Angeles photo grid with individual photo detail pages

### Component Patterns

- Page components use `+page.svelte` files
- Layout components use `+layout.svelte` files
- Shared components are in `src/lib/` or route-specific directories
- Navigation components (Nav.svelte, TopNav.svelte, BottomNav.svelte) for collage section

### Content Management

- Poems and collages are individual Svelte components in their respective directories
- Trees of Los Angeles photos are managed via `data.js` file with metadata for 143 images
- Each section has its own route following SvelteKit's file-based routing
- Images are stored in `src/lib/img/` and `static/treesoflosangeles/` and referenced from components
- Static assets like fonts and PDFs are in the `static/` directory

### Technology Stack

- SvelteKit for the framework
- TypeScript for type safety
- Vite for build tooling
- Vitest for testing
- ESLint and Prettier for code quality
- Static site generation for deployment
