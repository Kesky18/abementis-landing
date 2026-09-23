# Abementis — Landing Page

Next.js 14 (App Router) + Tailwind CSS + Framer Motion, ready to deploy on Vercel.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel

```bash
npm install -g vercel   # if you don't have it
vercel
```

Or push this folder to a GitHub repo and import it at vercel.com/new — Vercel
detects Next.js automatically, no config needed.

## Structure

- `app/layout.tsx` — fonts (Lora + Inter) and page metadata
- `app/page.tsx` — assembles the sections
- `components/` — one file per section (Hero, Problem, Solution, Impact,
  GetInvolved, Footer, Nav)
- `tailwind.config.ts` — the color and font tokens used throughout

## Content to double-check before launch

- The two "Get involved" buttons link to your Google Forms — confirm both
  URLs still work and consider moving to a custom domain form later.
- The testimonial in `components/Impact.tsx` is a placeholder based on your
  brief; swap in a verified, consented quote before publishing.
- Social links in `components/Footer.tsx` point to the Instagram and
  LinkedIn handles you provided.
