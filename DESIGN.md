# NORTH — design system

The durable source of truth for this project. If the CSS, a Tailwind class or a
component drifts from anything below, this file wins and the code is wrong.

---

## 1. Discovery

**Artifact type** — editorial publication landing page (magazine homepage), not a
marketing page. It has one job: make a reader want to open the issue.

**Who / why** — readers of an independent print magazine. They arrive from a
link, decide in about two seconds whether this publication has taste, and read
on a phone while commuting. Positioning: *independent, confident, quiet.*
Nothing here should sound like a startup.

**Brand adjectives** — *editorial · art-directed · restrained · tactile ·
contemporary.*

**Aesthetic commitment** — a high-contrast print magazine translated to the web:
warm paper, near-black ink, one oxidised-red spot colour, and photography as the
only source of visual colour. Display type is set enormous and cropped tight.
Layouts are asymmetric and deliberately unbalanced; no card ever repeats another
card's shape.

**Signature move** — the full-bleed photograph with a *paper column knocked out of
it*. Type is never set over an image: a solid paper block breaks the frame and
the headline runs into the picture. It appears on the cover, again on the
editorial spread, and it closes with the NORTH masthead running the full measure
of the footer.

**Explicitly rejected** — SaaS hero, pill buttons, glassmorphism, purple/indigo
gradients, 3-up icon-card grids, Inter, drop-shadow stacks, decorative blobs.

---

## 2. Typography

| Role | Face | Notes |
| --- | --- | --- |
| Display | **Fraunces** (variable: `opsz`, `SOFT`, `WONK`) | All headlines, wordmarks, folios |
| UI / body | **Archivo** (variable) | Running copy, labels, metadata, navigation |

Rationale: Fraunces carries real axis control — headlines run at `opsz 144` with a
touch of `SOFT`/`WONK` so they read as *set* rather than rendered. Archivo is a
neutral grotesque that stays out of the way and has the tabular figures the
index needs. The pairing is high-contrast (didone-ish serif against a plain
grotesque) which is exactly the print idiom.

Hierarchy, in order of visual weight:

1. Footer masthead — `min(28.5vw, 27rem)`, tracking `-0.035em`
2. Cover headline — `clamp(3.2rem, 2.1rem + 7.6vw, 9.2rem)`, uppercase, `leading 0.86`
3. Section / feature headlines — `clamp(2.25rem … 4.875rem)`, sentence case
4. Article headlines — per-column, `clamp(1.5rem … 3.25rem)`
5. Pull quote — `clamp(2.25rem … 6rem)`, `max-width 22ch`
6. Standfirst / dek — `clamp(1.0625rem … 1.3125rem)`, measure 46ch
7. Body — 16px / 1.62
8. Caption & metadata — 13px, then 11–12px uppercase tracked `0.17em`

Token steps defined in `@theme`: `--text-meta` (11px), `--text-eyebrow` (12px),
`--text-caption` (13px), `--text-body` (16px). Everything above body is set
per component with a fluid clamp — editorial hierarchy is art direction, not a
modular ramp, so no shared h1–h4 utilities exist.

**Legibility floor:** nothing ships below 11px. Interactive text is 12px+;
the newsletter input and all buttons are 16px+.

---

## 3. Colour

Authored in OKLCH. Roughly 60 % paper, 30 % ink, 10 % photography, with oxide
used only as a spot colour.

| Token | Value | Role |
| --- | --- | --- |
| `--color-paper` | `oklch(0.9612 0.0104 88)` | dominant surface |
| `--color-paper-3` | `oklch(0.9120 0.0132 87)` | image placeholder |
| `--color-ink` | `oklch(0.1692 0.0062 62)` | primary text |
| `--color-ink-2` | `oklch(0.2436 0.0074 62)` | running copy |
| `--color-muted` | `oklch(0.4722 0.0098 78)` | secondary text |
| `--color-faint` | `oklch(0.6312 0.0102 80)` | captions, metadata |
| `--color-indigo` | `oklch(0.2412 0.0324 274)` | the one dark section |
| `--color-mist` | `oklch(0.9274 0.0058 265)` | text on indigo |
| `--color-mist-2` | `oklch(0.7736 0.0104 268)` | secondary text on indigo |
| `--color-oxide` | `oklch(0.5075 0.1186 33)` | **the accent** — folio numbers, spot rules, error, hover |
| `--color-oxide-2` | `oklch(0.5872 0.1312 38)` | accent on dark surfaces |
| `--color-signal` | `oklch(0.4921 0.0984 152)` | form success only |

Why oxide: a rust/burnt red reads as newsprint spot colour rather than as a
brand gradient, and it is the one hue the photographs never contain, so it always
separates from the imagery. It never appears as a background wash.

**Photography is re-graded** (`.regrade`: `saturate(0.82) contrast(1.05) sepia(0.05)`)
so third-party images sit inside the paper palette rather than fighting it.

---

## 4. Tokens

```
Type      Fraunces / Archivo, steps above
Radius    --radius-sharp: 1px   (the only radius in the project)
Shadow    --shadow-press  — one defined, tight, transparent-black elevation
Motion    --ease-editorial: cubic-bezier(0.16, 1, 0.3, 1)
Spacing   4px base; tight inside groups, 64–112px between bands
Layout    .shell — max 1560px, gutters 20 / 32 / 48 / 56px
```

Radius is effectively zero. Cards are square, inputs are square, the only
"rounded" things are the focus ring and the photo corners at `overflow: hidden`.
There is no `rounded-2xl` reflex anywhere.

Elevation is **defined edges, not soft shadows**: hairlines at 10–25 % ink do the
structural work; `--shadow-press` is reserved for the magazine cover, the only
object that is physically a printed thing.

---

## 5. Craft decisions

**Layout.** A 12-column grid with hand-placed spans — no auto-flowing card grid.
Each section has a different internal composition:

- *Cover* — headline column overlapping the photograph by one track
- *Stories* — wide opener, portrait dropped into the right margin, narrow column
  low-left, landscape closing, with staggered vertical offsets
- *Feature* — full-bleed panorama, paper column knocking into it, colophon right
- *Issue* — deep indigo band, cover mock-up left, contents right
- *Quote* — type only, maximum air
- *Index* — numbered typographic rows with thumbnails at the foot of each
- *Newsletter* — one field, one button, hairline rules

**Photography.** Thirteen frames, all with art-directed `objectPosition`, all
with alt text describing what is genuinely in the picture (verified against the
rendered crops, not assumed). Crops differ per breakpoint: `4/5` on mobile,
`16/10` on tablet, `4/3` and `21/9` on desktop.

**Motion.** One easing token, transform and opacity only.

- Cover: masked line-by-line headline reveal + staggered rise, on mount
- Scroll: `Reveal` fades content up 28px once, `-12%` bottom margin
- Images: slow `y` drift tied to scroll progress; entrance scale `1.1 → 1`
- Panels: `clip-path` wipe down from the masthead, 620ms
- Hover: images scale to `1.045` over 1.1s, links wipe an underline in from the
  left, headline colours shift to oxide

**Reduced motion.** `useReducedMotion()` swaps every entrance for an instant
appearance, `ParallaxFrame` drops the drift, the panel transition shortens to an
opacity fade, and a global media query neutralises CSS transitions. Reveal
elements additionally carry a `<noscript>` rule so the page is fully readable
with JavaScript disabled.

**Accessibility.** Semantic landmarks, one `h1`, ordered headings, visible
2px oxide focus rings on every interactive element, a skip link, `role="dialog"` +
`aria-modal` + focus trap + focus return + Escape on both overlays, a labelled
email field with inline validation that never clears the user's input, and
`role="status"` announcements. Touch targets are ≥ 44px on mobile.

**Iconography.** Two glyphs, one grid, 1.3–1.4 stroke: `Search` and `X` from
Lucide, plus a hand-drawn two-rule menu mark on the same 17px grid. No decorative
icons anywhere.

---

## 6. Slop audit

Scored against the generated-UI checklist after reviewing the rendered page at
1440, 1280, 1024, 768, 390 and 375px.

| Check | Result |
| --- | --- |
| Accent outside indigo/violet band | Pass — oxide rust |
| No gradient text, blobs, glass | Pass |
| Primary face is not Inter/Roboto/system | Pass — Fraunces + Archivo |
| Distinct display/body pairing | Pass |
| Not hero + 3 cards + testimonials | Pass — 7 distinct compositions |
| No identical card grid | Pass — 4 frames, 4 spans, 2 orderings |
| No nested cards | Pass — no card component at all |
| No decorative grid-line texture | Pass |
| Only 01/02/03 markers where content is sequential | Pass — folio numbers are genuinely an index |
| No full-sentence display headline | Pass — "The New Quiet" is 3 words |
| Radius ≤ 16px | Pass — 1px only |
| No hairline + diffuse shadow stacks | Pass — edges for UI, shadow for the cover only |
| Motion under 300ms, transform/opacity only | Pass — 620ms panel wipe is the single exception, deliberate |
| Reduced motion honoured | Pass |
| Body ≥ 14px, measure 46–62ch | Pass |
| No console errors, no TS errors | Pass |
| No horizontal overflow at any width | Pass — verified 375 → 1440 |
| No broken images, no broken anchors | Pass — 13/13 images resolve; all links target real ids |

Fixed during the audit: a zero-height parallax wrapper that hid the cover
photograph, index thumbnails collapsing to 0px via `justify-self-end`, a shared
ref that trapped focus in the wrong overlay, duplicate DOM ids, `&nbsp;` rendering
as literal text in a JSX string, a feature caption hidden behind the paper
column, a dead zone in the stories grid, and two hero collisions at 1024px.

---

## 7. Changelog

- **v1.0** — initial system for the Issue 018 homepage.
