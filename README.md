# NORTH — Culture, in context.

An independent culture magazine, translated to the web. A single-page editorial experience covering fashion, music, architecture, photography, film, design, people and cities — built with the restraint of a print issue: strong typography, art-directed photography, generous whitespace, quiet motion.

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | React 19 + TypeScript |
| Styling | Tailwind CSS v4 (OKLCH tokens) |
| Motion | Framer Motion (restrained, reduced-motion aware) |
| Icons | Lucide React |
| Type | Fraunces (display) + Archivo (body) + IBM Plex Mono (furniture) via `next/font` |
| Images | `next/image` + Unsplash CDN |

No backend, database, auth, API keys or environment variables. No component library.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build
npm run start    # production serving
```

## Structure

```
app/
  layout.tsx      # fonts, metadata, favicon
  page.tsx        # homepage composition
  icon.svg        # N-monogram favicon
  globals.css     # OKLCH theme, folio rules, motion tokens
components/
  Header.tsx      # sticky nav, search, fullscreen menu
  HeroStory.tsx   # cover story: The New Quiet
  FeaturedStories.tsx
  FeatureSpread.tsx   # dark visual essay
  IssueSection.tsx    # Issue 018 cover mockup
  QuoteSection.tsx
  LatestStories.tsx   # editorial index
  Newsletter.tsx
  Footer.tsx
  Folio.tsx       # signature print-furniture rule
  Reveal.tsx      # quiet scroll reveal
  Wordmark.tsx    # shared typographic logo
lib/
  data.ts         # article content, separate from presentation
DESIGN.md         # the full design system: tokens, rationale, audit log
```

## Design system

The short version: warm paper canvas, near-black ink, one deep-olive accent, photography carrying the color. Every section opens with a heavy folio rule (`N° 18 / Stories`, `pp. 24–66`) instead of eyebrow labels. Full tokens, type scale (1.333), motion budget and the slop self-audit live in [`DESIGN.md`](./DESIGN.md).

## License

MIT — see [LICENSE](./LICENSE).
