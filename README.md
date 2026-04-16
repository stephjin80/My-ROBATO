# ROBATO — Premium Learning Companion

A premium learning companion web app for elementary students, built with Next.js 16, TypeScript, and Tailwind CSS.

---

## How to See It Live (Vercel Deployment Guide)

> **No coding experience needed.** Follow each step exactly and your site will be live in about 5 minutes.

### What you need before you start
- A free **GitHub** account → [github.com](https://github.com)
- A free **Vercel** account → [vercel.com](https://vercel.com)

That's it. Both are free. No credit card required.

---

### Step 1 — Make sure the code is on GitHub

Your code is already pushed to GitHub at:
`https://github.com/stephjin80/My-ROBATO`

If you can see files there, you're ready. Move to Step 2.

---

### Step 2 — Create a free Vercel account

1. Open your browser and go to **[vercel.com](https://vercel.com)**
2. Click the big **"Sign Up"** button (top-right corner)
3. Click **"Continue with GitHub"**
4. A pop-up will ask you to log in to GitHub — do that
5. Click **"Authorize Vercel"** when GitHub asks for permission
6. You now have a Vercel account connected to your GitHub ✓

---

### Step 3 — Import your project into Vercel

1. You should now see the **Vercel dashboard** (it may say "Let's build something new")
2. Click the button that says **"Add New…"** → then click **"Project"**
3. On the left side, you'll see a list of your GitHub repositories
4. Find **"My-ROBATO"** in the list
5. Click the **"Import"** button next to it

---

### Step 4 — Configure the project (no changes needed)

A settings screen will appear. **You don't need to change anything.**

Vercel automatically detects that this is a Next.js project and fills in all the right settings for you.

Just scroll down and click the big **"Deploy"** button.

---

### Step 5 — Wait about 60 seconds

You'll see a screen with moving progress bars. Vercel is building and publishing your website. This takes about 1 minute.

When it finishes, you'll see **confetti** and a preview of your website. 🎉

---

### Step 6 — Open your live website

1. Click the **preview image** of your site (or the link under it)
2. Your site is now live at a URL like: `https://my-robato.vercel.app`
3. You can share this link with anyone in the world — it works on any phone or computer

---

### Every time you make changes

Vercel watches your GitHub automatically. Whenever code is pushed to your repository, Vercel will **automatically rebuild and update your website** — no extra steps needed.

---

### Optional: Use your own custom domain name

If you want your site to be at something like `www.robato.com` instead of `my-robato.vercel.app`:

1. In your Vercel project, click **"Settings"** (top menu)
2. Click **"Domains"** on the left side
3. Type your domain name and click **"Add"**
4. Vercel will show you instructions from your domain provider

You need to purchase a domain first (e.g. from [namecheap.com](https://namecheap.com) or [godaddy.com](https://godaddy.com)).

---

## Run Locally (for developers)

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Pages

| Route | Description |
|---|---|
| `/` | Landing page — hero, stats, value props, programs preview, testimonials |
| `/about` | Brand story, mission, values, and team |
| `/programs` | All three programs, how-it-works, FAQ |
| `/contact` | Contact form with success state |

## Project Structure

```
src/
├── app/                    # Pages and layouts (Next.js App Router)
│   ├── layout.tsx          # Root layout — Navbar + Footer on every page
│   ├── page.tsx            # Home page
│   ├── about/page.tsx
│   ├── programs/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── layout/             # Navbar, Footer
│   ├── ui/                 # Button, SectionHeader, ProgramCard
│   └── sections/           # Hero, StatsBar, ValueProps, FeaturedPrograms, Testimonials, CallToAction
├── lib/
│   └── constants.ts        # All content data (nav, programs, team, stats)
└── types/
    └── index.ts            # Shared TypeScript types
```

## Tech Stack

- **Next.js 16** (App Router, static export)
- **TypeScript**
- **Tailwind CSS v4**
- **Geist** font via `next/font`

## Prepared for Future Expansion

| Feature | Where to add |
|---|---|
| Login / Sign up | `src/app/(auth)/login/page.tsx` |
| Student dashboard | `src/app/(app)/dashboard/page.tsx` |
| Contact form backend | `src/app/api/contact/route.ts` |
| CMS integration | Replace `src/lib/constants.ts` with CMS client |
| Custom domain | Vercel → Settings → Domains |
