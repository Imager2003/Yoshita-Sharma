# Yoshita Sharma — Personal Portfolio

A frontend-only Next.js site for Yoshita Sharma, Corporate & Commercial Legal Professional.
No backend, database, CMS, API routes or contact form — every conversion action is a direct
link (email, phone, WhatsApp, LinkedIn, CV download).

## Running locally

```bash
npm install
npm run dev        # http://localhost:3000
```

```bash
npm run build      # production build
npm run start      # serve the production build
npm run lint       # eslint
npx tsc --noEmit   # typecheck
```

## Editing content

All copy lives in **`src/data/yoshita.ts`** — personal details, expertise, experience,
selected work, publication, education, certifications, achievements, leadership, skills
and links. Components read from it, so nothing needs to be edited in JSX to update the CV.

## Outstanding placeholders

| What | Where | Action |
| --- | --- | --- |
| Professional portrait | `public/yoshita.jpg` | Add the photo, then set `person.portraitAvailable = true` in `src/data/yoshita.ts`. Until then an editorial "YS" placeholder is shown. |
| Publication URL | `publication.url` | Currently `null`, which renders "Publication link — to be added". Set the real IJLMH URL to turn it into a live button. |
| Domain | `person.siteUrl` | Used for canonical URL, sitemap, robots and OG metadata. Replace `https://yoshitasharma.com` with the deployed domain. |
| Availability wording | `person.availability` | "Graduating 2026 · Open to corporate & commercial legal roles" — confirm the phrasing Yoshita wants publicly. |
| Advocate enrolment | — | Not displayed anywhere. Add only if/when it is confirmed. |

Verified from Yoshita's CVs and already live: email, phone, WhatsApp, LinkedIn
(`linkedin.com/in/yoshita-sharma1500/`), CV at `public/resume.pdf`.

Client names that appear on the CV are deliberately omitted from the site, and no matter
details beyond what the CV states are published.

## Structure

```
src/
  app/
    layout.tsx              metadata, fonts, JSON-LD, reveal bootstrap
    page.tsx                section composition
    globals.css             design tokens + utilities
    icon.tsx                generated favicon (YS monogram)
    opengraph-image.tsx     generated 1200×630 social card
    robots.ts / sitemap.ts
    _og/                    Instrument Serif TTFs used by the OG image
  components/               one component per section (+ Reveal, RevealController)
  data/yoshita.ts           all content
  lib/useActiveSection.ts   scroll-spy for nav + timeline
public/
  resume.pdf                        primary CV (Download CV target)
  yoshita-sharma-detailed-cv.pdf    long-form CV
```

## Notes on motion

Scroll reveals are CSS transitions driven by one shared `IntersectionObserver`
(`RevealController`), gated on a `data-js` attribute set before first paint. If JavaScript
fails or the observer never fires, everything is shown anyway. Framer Motion handles the
interactive pieces: mobile menu, experience accordion and the recruiter snapshot.
`prefers-reduced-motion` collapses all of it to instant state changes.
