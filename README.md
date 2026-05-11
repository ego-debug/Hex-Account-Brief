# Headway — Account Brief

A custom interactive web brief on Headway, prepared for Andela's SDR opening by Jovan Marrero.

Built as a one-page editorial experience — designed to be the alternative to a slide deck.

## Stack

- Next.js 14 (App Router)
- React 18 + TypeScript
- Tailwind CSS 3
- Framer Motion
- Inter + Instrument Serif (via `next/font`)

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Deploy to Vercel

This repo is Vercel-ready. From the project root:

```bash
npx vercel        # one-time link + preview
npx vercel --prod # production deploy
```

Or push to a GitHub repo and import it in the Vercel dashboard — no settings needed.

## Swapping in screenshots

Drop the real product screenshots into `/public/screenshots/`:

- `tayibeats.png` — TayibEats homepage
- `hvaclaunch.png` — HVACLaunch homepage

Then in `app/components/Portfolio.tsx`, replace the `<PlaceholderArt />` block inside each card with:

```tsx
<img src={p.swap} alt={`${p.name} homepage`} className="absolute inset-0 top-9 w-full h-[calc(100%-2.25rem)] object-cover object-top" />
```

## Sections

1. Hero — editorial title, kicker, meta
2. The Headway Account — magazine profile + Tezi acquisition callout
3. Where Andela Fits — buyer / problem / solution + animated stat trio (66% / 48hr / 30–50%)
4. The Cold Call — interactive 3-stage playthrough (click-to-advance)
5. The Email — animated draft reveal in a styled mail client
6. What I've Built — TayibEats + HVACLaunch with hover states
7. The Rep — editorial essay
8. First 30 Days — three-priority plan
9. Contact — designed CTA
