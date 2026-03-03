# Lumivox Studio Website

![App Preview](https://imgix.cosmicjs.com/7948df80-171f-11f1-a07f-ffa45b2cae93-photo-1520607162513-77705c0f0d4a-1772555937132.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A premium dark-themed Next.js website for Lumivox Studio, fully powered by Cosmic content. The site features a cinematic hero, services bento grid, featured work, testimonials, and a gradient CTA—crafted with a luxury visual system and responsive layout.

## Features
- Sticky navigation with transparent-to-solid scroll effect
- Full-viewport hero with mesh gradient background
- Bento grid services layout and featured projects
- Testimonial highlight and animated stats counters
- Dynamic blog preview and gradient CTA
- Cosmic-powered data for all core content

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=69a70adc2f592b85452c83c9&clone_repository=69a710bb2f592b85452c8465)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Build a premium design studio website content model for Lumivox Studio with these 6 object types and demo content: 1) Pages (with template, SEO title, hero heading, hero subheading, hero CTA, sections JSON), 2) Services (title, icon, description, order), 3) Projects (title, category tags, description, featured image, case study content, client name, year, results metrics JSON), 4) Testimonials (quote, author name, role, company, photo), 5) Blog Posts (title, excerpt, content, featured image, author, category), 6) Site Settings singleton (site name, tagline, logo, contact email, social links JSON, color palette JSON, typography). Include demo: 1 Home Page, 3 services (Brand Identity, Web Experiences, Product Design), 2 projects (Aether Fintech, Lumen Labs), 2 testimonials, 2 blog posts, and site settings with color palette obsidian #0B0B14, iris #6C63FF, coral #FF6B9D, linen #F0EDE8."

### Code Generation Prompt

> Build a premium dark-themed Next.js website for Lumivox Studio design agency using my existing Cosmic content. Use Tailwind CSS with this color palette: obsidian #0B0B14 (background), canvas #141422 (cards), iris #6C63FF (primary accent), coral #FF6B9D (secondary accent), linen #F0EDE8 (text on dark), pewter #8A8A9A (secondary text). Include all 10 sections: sticky navigation with transparent-to-solid scroll effect, full-viewport hero with mesh gradient background and headline "We design digital experiences that speak before they're read", trusted-by logo strip, 3-column services bento grid, featured work/projects showcase, 4-step process section, testimonial with large quote, animated stats counters (12+ Years, 200+ Projects, 98% Retention, 4.9 Rating), gradient CTA section, and 4-column footer. Use Cabinet Grotesk for headings and Plus Jakarta Sans for body text. Fetch all content from Cosmic (Pages, Services, Projects, Testimonials, Blog Posts, Site Settings). Make it responsive and award-winning.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies used
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Cosmic SDK
- Marked (Markdown rendering)

## Getting Started

### Prerequisites
- Bun installed
- A Cosmic account with the provided content model

### Installation
```bash
bun install
bun run dev
```

## Cosmic SDK Examples
```ts
import { cosmic } from '@/lib/cosmic'

const services = await cosmic.objects
  .find({ type: 'services' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

## Cosmic CMS Integration
This app fetches Pages, Services, Projects, Testimonials, Blog Posts, and Site Settings using the Cosmic SDK. See the docs: https://www.cosmicjs.com/docs

## Deployment Options
- Vercel (recommended for Next.js)
- Netlify (static exports)
- Any Node.js hosting with environment variables set

<!-- README_END -->