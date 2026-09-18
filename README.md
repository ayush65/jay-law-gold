# Jay Law — Website

A fully responsive marketing website for **Jay Law**, a New Zealand law firm specialising in Property, Immigration, Family and Commercial Law. Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4** and **Framer Motion** for animations.

## Pages

- `/` — Home (hero, marquee, about, interactive practice-area tabs, Legal Aid band, values, CTA)
- `/services` — Family Law, Elders Law, Immigration + Legal Aid (accordions & detail grids)
- `/about` — Firm story timeline + our people (Jay & Sadat)
- `/contact` — Office cards (North/South Island) + enquiry form (opens the client's email app)
- `/faq` — Accordion-styled frequently asked questions
- `/privacy` — Privacy Policy
- `/terms` — Terms of Engagement

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — ESLint

## Key files

- `src/app/` — routes (`layout.tsx` sets fonts, metadata, Navbar, Footer)
- `src/components/` — shared UI (Navbar, Footer, Reveal animation, PracticeTabs, Accordion, ContactForm, Marquee, BackToTop…)
- `src/lib/data.ts` — single source of truth for services, contact details and values
- `src/app/globals.css` — design tokens (auburn/navy/jade palette), squircle buttons, marquee keyframes

## Notes

- Contact email: `jaylawandassociates@gmail.com`
- The enquiry form composes a `mailto:` draft — swap out the recipient in `src/components/ContactForm.tsx` when a backend/form service is ready.
- Icons and content can be edited via `src/lib/data.ts` and the page components under `src/app/`.