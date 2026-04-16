# ROBATO — Premium Learning Companion

A premium learning companion web app for elementary students, built with Next.js 16, TypeScript, and Tailwind CSS.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Pages

| Route | Description |
|---|---|
| `/` | Landing page with hero, stats, value props, programs preview, testimonials |
| `/about` | Brand story, mission, values, and team |
| `/programs` | All three programs, how-it-works steps, FAQ |
| `/contact` | Contact form with subject selector and success state |

## Project Structure

```
src/
├── app/                  # Next.js App Router pages + layouts
│   ├── layout.tsx        # Root layout (Navbar + Footer)
│   ├── page.tsx          # Home
│   ├── about/
│   ├── programs/
│   └── contact/
├── components/
│   ├── layout/           # Navbar, Footer
│   ├── ui/               # Button, SectionHeader, ProgramCard
│   └── sections/         # Hero, StatsBar, ValueProps, FeaturedPrograms, Testimonials, CallToAction
├── lib/
│   └── constants.ts      # Nav items, programs, team, stats data
└── types/
    └── index.ts          # Shared TypeScript types
```

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Geist** font (via next/font)

## Future Expansion

The architecture is prepared for:

- **Authentication** — add `src/app/(auth)/login` and `src/app/(auth)/signup` route groups
- **Student dashboard** — add `src/app/(app)/dashboard` behind auth middleware
- **CMS integration** — replace `src/lib/constants.ts` with a headless CMS client
- **API routes** — add `src/app/api/` for the contact form backend and future features
