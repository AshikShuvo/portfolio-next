# Ashik Ahmmed Shuvo - Portfolio Website

A modern, responsive portfolio website showcasing professional work, projects, and skills. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, professional design with light and dark mode
- 📱 Fully responsive from mobile to desktop
- ♿ Accessible with semantic HTML and keyboard navigation
- 🚀 Optimized for performance with static rendering
- 🔍 SEO-friendly with metadata, Open Graph tags, and sitemap
- 🎭 Respects `prefers-reduced-motion` for accessibility

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS 4
- **Package Manager:** pnpm
- **Deployment:** Vercel-ready (zero config)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- pnpm installed (`npm install -g pnpm`)

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
# Create production build
pnpm build

# Preview production build locally
pnpm start
```

### Lint and Type Check

```bash
# Run ESLint
pnpm lint

# Run TypeScript type checking
pnpm type-check
```

## Project Structure

```
├── public/                    # Static assets
│   └── ashik-shuvo-resume.pdf # Resume PDF for download
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── layout.tsx         # Root layout, metadata, JSON-LD
│   │   ├── page.tsx           # Home page
│   │   ├── globals.css        # Global styles and class-based dark mode
│   │   ├── opengraph-image.tsx
│   │   ├── twitter-image.tsx
│   │   ├── icon.tsx           # Favicon
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   ├── components/            # React components
│   │   ├── header.tsx         # Navigation header
│   │   ├── hero.tsx           # Hero section
│   │   ├── production-work.tsx # Client work showcase
│   │   ├── impact-metrics.tsx # Impact metrics strip
│   │   ├── projects.tsx       # Personal projects
│   │   ├── experience.tsx     # Work experience timeline
│   │   ├── skills.tsx         # Skills by tier
│   │   ├── education.tsx      # Education section
│   │   ├── contact.tsx        # Contact section
│   │   ├── theme-provider.tsx # Dark mode provider
│   │   └── theme-toggle.tsx   # Theme toggle button
│   └── data/
│       └── content.ts         # All site content (EDIT HERE)
└── package.json
```

## Editing Content

All site content is centralized in **`src/data/content.ts`**. This file contains:

- Personal information (name, email, social links)
- Production work details
- Impact metrics
- Personal projects
- Work experience
- Skills organized by proficiency tier
- Education details

To update the site content:

1. Open `src/data/content.ts`
2. Edit the relevant constants
3. The changes will automatically reflect on the site

### Adding a New Project

```typescript
// In src/data/content.ts, add to the projects array:
{
  name: "Project Name",
  url: "https://github.com/username/repo", // optional
  tech: ["Next.js", "TypeScript", "PostgreSQL"],
  description: "Project description here",
  highlights: ["Key achievement 1", "Key achievement 2"], // optional
  availability: "Private repo, available on request", // optional, for private repos
}
```

### Updating the Resume

Replace `public/ashik-shuvo-resume.pdf` with your updated resume PDF.

## Deployment on Vercel

This site is ready to deploy on Vercel with zero configuration:

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy
4. Optional: set `NEXT_PUBLIC_SITE_URL` in the Vercel project (for example `https://your-domain.com`) so canonical URLs, the sitemap, and Open Graph tags use the production domain. If it is unset, the site falls back to Vercel's deployment URL.

### Environment Variables

No environment variables are required for this static site.

## Customization

### Colors

The site uses a blue accent color scheme. To change it:

1. Search for `blue-` classes in component files
2. Replace with your preferred Tailwind color (e.g., `purple-`, `green-`)

### Fonts

The site uses Geist Sans and Geist Mono fonts. To change:

1. Edit `src/app/layout.tsx`
2. Import different fonts from `next/font/google`
3. Update the font variables

## License

© 2026 Ashik Ahmmed Shuvo. All rights reserved.

## Contact

- Email: ashikshuvo1996@gmail.com
- GitHub: [@AshikShuvo](https://github.com/AshikShuvo)
- LinkedIn: [Ashik Ahmmed Shuvo](https://linkedin.com/in/ashik-ahmmed-shuvo-280646140)
