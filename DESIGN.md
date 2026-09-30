# DESIGN.md - NORTH Magazine

## Context (from discovery)

- Artifact type: blog/editorial publication homepage (brand hub with index, issue, subscribe)
- Positioning: creative, independent print heritage
- Audience: culturally curious readers 25 to 45 | Primary action: read a story (subscribe second)
- Adjectives: quiet, tactile, assured, curious, unhurried
- Visual word translations:
  - quiet -> restraint: one accent, no shadows, no decoration that does not carry information
  - tactile -> paper surfaces, film grain, print furniture (folio rules, page refs)
  - assured -> heavy rules, left aligned measure, no hedging microcopy
  - curious -> asymmetric spreads, marginalia, figure captions
  - unhurried -> slow entrances, generous section rhythm, opacity led motion
- Aesthetic essence (3 words): printed, calm, deliberate
- Single-minded proposition: this is a real magazine that happens to be a website
- Archetype: Sage with Creator undertones
- References: admire Apartamento (folio furniture, matter of fact captions); Cereal (quiet grids, restraint); avoid the cream plus terracotta plus Instrument Serif AI default
- Mode: light with one dark spread | Density: airy
- Constraints: Next.js 15, Tailwind v4, Framer Motion, Lucide only; no backend; AA contrast; reduced motion honored; brief mandates paper background, serif display, and the EXPLORE ISSUE arrow

## Aesthetic

- Direction: bespoke editorial, "folio furniture"
- Defining trait: every section opens with a heavy 2px rule carrying mono folio references (N° 18, page ranges), the way a print issue opens a spread
- Signature move: the folio rule plus page-number marginalia (p. 24, Fig. 01.) instead of sequential 01/02/03 badges

## Typography

- Display: Fraunces (Google, OFL). Optical sizes, true italics; roman medium for statement lines, light italic for counter-lines
- Body: Archivo (Google, OFL). Grotesque workhorse, neutral but not default
- Mono: IBM Plex Mono (Google, OFL). All magazine furniture: folios, bylines, captions, kickers
- Scale: ratio 1.333 Perfect Fourth, base 16px
  - display clamp hero 19vw to 11.5rem, lh 0.92, tracking -0.02em
  - h2 3rem to 4.5rem, lh 0.95
  - h3 1.875rem to 2.9rem, lh 1.02
  - body 16px (15px compact), lh 1.6
  - small 14px, lh 1.5 | caption/mono 12px, lh 1.4
- Weights: 400/500/600 serif, 400/500/600/700 sans, 400/500 mono
- Measure: 65 to 68ch, left aligned | Tracking: display -0.02em max, body 0, mono labels +0.06em

## Color

- Strategy: paper canvas is brief-mandated, so differentiation comes from the accent: deep olive ink-green instead of the default terracotta, plus Fraunces and mono furniture. Far from the indigo band
- Distribution: 60 paper neutrals, 30 ink, 10 olive
- Palette (role -> OKLCH | hex):
  - bg: oklch(0.95 0.02 95) | #f4f0e4
  - surface: oklch(0.90 0.035 90) | #e7dfcc
  - fg: oklch(0.24 0.02 70) | #1a1410
  - muted: oklch(0.50 0.03 80) | #6d6455
  - border: oklch(0.85 0.03 90) | #d8cfb8
  - accent: oklch(0.44 0.065 125) | #4c5236
  - night: oklch(0.22 0.02 65) | #16110c
- States: success uses ink fill plus check icon, error uses accent plus text (never color alone)

## Tokens

- Spacing base 4px; section rhythm py-16 mobile, py-28 desktop; grid 12 col, 20px gutters
- Radius: 0 editorial surfaces, full only for status dots and icon buttons
- Shadow: one approach only, defined edges (2px folio rule, 1px hairlines). Single exception: issue cover lift shadow, which depicts a physical object
- Motion: durations 100/160/220/320ms; ease-out cubic-bezier(0.23,1,0.32,1) for enter; transform and opacity only; press feedback scale 0.98; stagger only in menu (60ms cascade)

## Craft decisions

- Layout: asymmetric 12-col spreads, headline overlapping image column in hero, offset tall image in featured, dark full-bleed essay spread, CSS 3D magazine cover, typographic quote breather, ruled index, split newsletter
- Components: primary button ink fill to olive hover; links animated underline on hover-capable devices, persistent on focus; inputs with visible mono labels and inline errors that keep input; index rows with hover underline and arrow tint
- Motion: one hero entrance orchestration; quiet opacity plus 14px reveals on section openers and spread only; menu and search transitions (communicative); no parallax, no scroll-linked travel, no image zoom except the four featured stories
- Iconography: Lucide only, 1.5 stroke, 14 to 21px sizes, never as decoration; arrows are icons, not characters (except the brief-mandated EXPLORE ISSUE arrow, kept as specified)
- Imagery: real Unsplash editorial photography, regraded by warm paper context; mixed 4:5, 3:4, 4:3, 16:9 and 21:9 crops; figure captions everywhere; no stock fingerprints
- Dark mode: not a mode; one designed dark spread (night bg, paper text, desaturated captions)
- Accessibility: semantic landmarks, single h1, AA pairs (accent on paper 7.2:1, muted on paper 4.9:1, paper on night 13.1:1), 44px header targets, visible focus, Escape closes overlays, labels on all inputs, reduced motion swaps travel for stillness

## Slop audit (2026-09-30)

- Color: pass. No indigo, no gradient text, paper is brief-mandated, one accent, no glow
- Typography: pass. Fraunces plus Archivo plus Plex Mono; no Inter voice; no eyebrow above every heading (folio rules instead); numbers are page refs or a true index, never sequence badges; single-word italic reserved for full display lines; tracking capped at -0.02em; interactive text at least 14px, captions at least 11px
- Layout: pass. No card grids, no centered container monotony, folio rule as brief-specific move
- Layout defects: pass on source; gutters consistent, no occlusion, balanced columns, headings carry top weight, no clipping of popovers, overflow-x hidden with fluid type
- Visual detail: pass. No side tabs, no border plus shadow stacking, radius 0, no glass, zoom opt-in on four images only, grain as intentional texture device
- Motion: pass. Communicative only, under 320ms UI, transform plus opacity, menu exits animate, reveals limited to openers, reduced motion honored via useReducedMotion plus scoped CSS (no blunt global kill)
- Iconography: pass. Single Lucide set, uniform stroke, named buttons, no emoji
- Components: pass. Hover, active, focus, error and success states specified; no weight shift on hover; buttons ranked by importance; visible input labels; index rows use light separators; newsletter success state designed
- Imagery: pass. Art-directed real photography with captions and mixed crops
- Copy: pass. No em-dash label fragments, no dot-joined meta strings, no buzzwords, arrows as icons
- Signature: pass. Folio rule plus page marginalia
- Known exception: EXPLORE ISSUE keeps its arrow character because the brief specifies it verbatim; brief wins

## Changelog

- 2026-09-30: deslop pass. Fraunces/Archivo/Plex Mono replace Instrument Serif/Inter; olive accent replaces terracotta; folio rules replace eyebrows and sequence numbers; meta strings de-dotted; motion budget cut to hero plus openers; zoom scoped; tokens moved to OKLCH with hex fallback; DESIGN.md created
- 2026-09-30: hero rebuilt without negative-margin overlap or rotated marginalia; hero image replaced with verified starry-night peaks (previous ID resolved to a kitchen); issue cover replaced with verified boat-on-lake (previous beauty portrait rejected); spread strip replaced with verified quiet room (previous ID was a smiling portrait); Fig. 03 caption corrected to Polaroid OneStep2
- 2026-09-30: Wordmark component plus SVG favicon (app/icon.svg) wired into header, menu and footer
- 2026-09-30: security fix without breaking change. npm overrides pins postcss to ^8.5.28 (fixes GHSA-qx2v-qp2m-jg93, GHSA-6g55-p6wh-862q, GHSA-fxqj-rqcc-2cmp, GHSA-r28c-9q8g-f849 inside Next's nested dep); audit reports 0 vulnerabilities; production build passes on the override
- 2026-09-30: Playwright verification (temporary dep, since removed). Production serving: 0 page errors, 0 console errors, 0px horizontal overflow at 1440 and 390; every section screenshotted and inspected (hero, stories, spread, issue, quote, index, newsletter, footer); full-page stitch blanks were untriggered scroll reveals, confirmed as capture artifact not a bug
