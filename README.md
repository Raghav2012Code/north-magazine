# NORTH

**Culture, in context.** A landing page for a fictional independent magazine of
contemporary culture — fashion, music, architecture, photography, film, design,
people, cities.

Built as a single, fully static homepage with Next.js 15 (App Router), React 19,
TypeScript, Tailwind CSS v4, Framer Motion and Lucide.

```bash
npm install
npm run dev
```

Open <http://localhost:3000>. No backend, database, auth, API keys or environment
variables are required. Photography is served from Unsplash's public CDN.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build (fully static) |
| `npm start` | Serve the production build |
| `npm run typecheck` | `tsc --noEmit` |

## Structure

```
src/
  app/
    layout.tsx          fonts, metadata, the <noscript> reveal fallback
    page.tsx            composes the sections — a server component
    globals.css         the whole design system as Tailwind v4 @theme tokens
  components/
    Header.tsx          client — sticky masthead, search, menu overlay
    HeroStory.tsx       client — the cover
    StoryGrid.tsx       server — section frame + asymmetric placement
    StoryCard.tsx       server — one feature, parameterised crop and scale
    FeatureStory.tsx    client — the printed spread
    IssueSection.tsx    server — cover mock-up built in CSS
    QuoteSection.tsx    server — typographic pull quote
    LatestStories.tsx   server — the index
    Newsletter.tsx      client — the only form
    Footer.tsx          server — masthead at scale
    Photo.tsx           client — the single image wrapper
    motion/primitives.tsx  client — Reveal and ParallaxFrame
  data/content.ts       typed editorial content, separate from presentation
  lib/
    image.ts            Unsplash loader — crops per breakpoint
    cn.ts               class-name joiner
```

Content lives entirely in `src/data/content.ts` behind `Story`, `Art`,
`IndexEntry` and `Issue` types. Swapping in a real CMS means replacing that one
file.

## Design

See [`DESIGN.md`](./DESIGN.md) for the full system — type, colour, tokens, motion
and the accessibility contract.

## Notes

- **Server components by default.** Only `Header`, `HeroStory`, `FeatureStory`,
  `Newsletter` and the two motion primitives are client components, because each
  one genuinely needs state or animation. `Photo` is client-only because a custom
  `next/image` loader cannot cross the server/client boundary.
- **Images** are requested at the exact size each frame needs (`sizes` per
  breakpoint) through a custom loader that asks Unsplash to crop with entropy,
  so the focal point survives the aspect change. Every frame carries an
  art-directed `objectPosition` and alt text describing what is actually in the
  picture.
- **Reduced motion** is honoured everywhere. Content is also readable with
  JavaScript disabled — reveal animations start from an opacity-0 inline style
  that a `<noscript>` rule restores.
