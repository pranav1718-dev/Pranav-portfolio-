# Pranav Rajkumar Gharge — Portfolio

A single-page portfolio built to demonstrate UI/UX and frontend ability —
editorial typography, minimal premium interaction, and real project case
studies.

## Stack

- React 19 + Vite
- Tailwind CSS v4 (`@tailwindcss/vite`)
- Framer Motion
- Lucide React

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
npm run preview   # preview the production build
```

## Before deploying — things to fill in

This project deliberately avoids invented data. A few placeholders need
your real information before launch:

- `src/data/contact.js` — replace the placeholder email, GitHub and
  LinkedIn URLs with your real links.
- `src/data/projects.js` — each project has `liveUrl` / `githubUrl` set
  to `null`. Fill these in as your projects go live / are pushed to
  GitHub, and the UI will automatically show the link buttons.
- `src/components/projects/ProjectVisual.jsx` — currently renders an
  abstract typographic placeholder for each project (no fake
  screenshots were used). Swap this for real product screenshots/video
  once you have them, ideally as optimized `.webp`/`.avif` images.
- `public/og-image.png` — referenced in `index.html`'s Open Graph tags
  but not yet created; add a real 1200×630 social preview image.

## Project structure

```
src/
  assets/            static images (currently empty — see note above)
  components/
    layout/          scroll progress, shared layout chrome
    navigation/       navbar
    hero/             hero section
    projects/         "Selected Work" — project rows + visuals
    about/            about section
    services/         services section
    process/          process section
    skills/           skills/stack section
    case-studies/      case study overlay
    contact/          contact section
    footer/
    ui/               shared primitives (Button, SectionHeading, Magnetic, CustomCursor)
  data/               all site copy/content as data (no hardcoded strings in components)
  hooks/              useReducedMotion, useActiveSection
  lib/                cn() helper, shared Framer Motion variants
```

## Notes

- Fully respects `prefers-reduced-motion` (disables custom cursor,
  magnetic hover, and shortens animation durations).
- Mobile-first responsive, tested at 360/390/430/768/1024/1440px.
- Semantic HTML, visible focus states, keyboard-operable nav and case
  study overlay (Escape to close).
- JavaScript is intentionally listed as "Learning" in the Skills
  section — this reflects real current ability, not inflated claims.
