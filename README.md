# Business Website Template

A production-grade marketing website template for professional-services businesses — dentists, clinics, law firms, consultants and similar appointment-based practices. The sample content is a fictional family dental practice ("Willow Creek Dental"); every word of it lives in one file, so re-skinning the site for a real business takes minutes, not days.

Built with **Next.js 14 (App Router) + TypeScript + Tailwind CSS**.

## Features

- **Conversion-first structure** — sticky header with one primary call to action, a hero that answers who/what/next-step in five seconds, trust facts and a priced offer beside the CTAs, services, patient proof, then a short booking form.
- **One content file** — all copy, prices, hours, phone numbers and testimonials live in `lib/content.ts`, fully typed. Components contain no hard-coded business text.
- **Short appointment form** — name, phone, one service choice, one preferred time, one optional note. Submitting composes a prefilled email to the practice in the visitor's own mail app; swap the handler for an API route or form provider when the business has a backend.
- **Accessible by default** — semantic landmarks, a single `h1`, labelled form fields, visible keyboard focus, skip-to-content link, 44px minimum touch targets and WCAG 2.2 AA contrast.
- **Header that never breaks** — navigation labels are locked to one line (`whitespace-nowrap`, `flex-nowrap`); at tight widths the phone number yields first, then the nav collapses into a menu button. Labels never wrap or overlap.
- **Responsive** — designed mobile-first from 360px up; cards stack into one readable column and the booking section becomes a single column on small screens.
- **Design system, not stray values** — one 60-30-10 colour palette, two typefaces (Fraunces for display, Inter for body), an 8-point spacing rhythm and consistent radius/shadow language, all defined in `tailwind.config.ts` and `app/globals.css`.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000. For a production build:

```bash
npm run build
npm start
```

## How to customise

1. **Edit `lib/content.ts`** — business name, tagline, phone, email, address, opening hours, navigation labels, hero copy and stats, services and fees, testimonials, form wording and footer text. The TypeScript interfaces at the top of the file show exactly what shape is expected; the compiler will flag anything you miss.
2. **Change the palette** — edit the `pine`, `brass`, `ink` and `mist` colours in `tailwind.config.ts`. Keep body-text contrast at 4.5:1 or better.
3. **Change the typefaces** — swap the Google Fonts loaded in `app/layout.tsx` and the `fontFamily` entries in `tailwind.config.ts`.
4. **Connect a real form backend** — in `components/AppointmentForm.tsx`, replace the `mailto:` handler in `handleSubmit` with a `fetch` to your API route or provider (the composed subject/body strings are already built for you).
5. **Update SEO metadata** — title and description are generated from `lib/content.ts` in `app/layout.tsx`; add Open Graph images there as needed.

## Project structure

```
app/
  layout.tsx        Fonts, metadata, header/footer shell, skip link
  page.tsx          Page composition (hero → services → stories → booking)
  globals.css       Tailwind layers, base styles, shared component classes
components/
  Header.tsx        Sticky header, one-line nav, mobile menu
  Hero.tsx          Headline, CTAs, trust stats, new-patient offer card
  Services.tsx      Services grid with fees and per-service booking links
  Testimonials.tsx  Patient stories with star ratings
  AppointmentForm.tsx  Booking form + opening hours panel
  Footer.tsx        Contact, hours, navigation, legal line
lib/
  content.ts        Every word on the site, typed — edit this to re-skin
tailwind.config.ts  Palette, fonts, shadows, content width
```

## Notes

- The practice, people, prices and phone number in the sample content are fictional and included to show realistic, complete copy — replace them with the real business's verified facts before going live.
- No analytics, tracking or third-party scripts are included; add them deliberately if the business needs them.
