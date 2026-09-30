"use client";

import { ParallaxFrame, Reveal } from "@/components/motion/primitives";
import { Photo } from "@/components/Photo";
import { feature } from "@/data/content";

/**
 * The printed spread. A full-bleed panorama carries the page; the type block
 * below it rises back over the photograph the way a white column is knocked
 * out of a printed spread. Contrast comes from an actual paper surface rather
 * than a decorative scrim.
 */
export function FeatureStory() {
  return (
    <section
      id="feature"
      aria-labelledby="feature-heading"
      className="relative scroll-mt-24 pt-20 sm:pt-24 lg:pt-32"
    >
      <ParallaxFrame
        className="aspect-[4/5] sm:aspect-[5/3] lg:aspect-[21/9]"
        distance={80}
        from={1.14}
      >
        <Photo
          id={feature.art.id}
          alt={feature.art.alt}
          position={feature.art.position}
          sizes="100vw"
          frame="h-full"
          quality={84}
        />

        {/* Running head, set over the photograph. */}
        <div className="pointer-events-none absolute inset-x-0 top-0">
          <div className="shell flex items-center justify-between gap-6 pt-6 sm:pt-8">
            <p className="label-xs text-paper/85">{feature.eyebrow}</p>
            <p className="label-xs text-paper/70">Issue 018 &nbsp;/&nbsp; p. 44</p>
          </div>
        </div>

        {/* Caption. Sits to the right of the paper column below, never under it. */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0">
          <div className="shell flex justify-end pb-6 sm:pb-8">
            <p className="label-xs max-w-[46ch] text-right leading-relaxed text-paper/80">
              {feature.art.caption}
              <span className="ml-3 whitespace-nowrap text-paper/60">
                {feature.art.credit}
              </span>
            </p>
          </div>
        </div>
      </ParallaxFrame>

      <div className="shell relative">
        <div className="grid grid-cols-12 gap-x-6">
          <Reveal className="col-span-12 lg:col-span-7">
            <div className="-mt-8 bg-paper pr-2 pt-8 sm:-mt-14 sm:pr-8 lg:-mt-28 lg:pt-12">
              <h2
                id="feature-heading"
                className="font-display text-[clamp(2.125rem,1.2rem+4.6vw,4.875rem)] font-medium leading-[0.96] tracking-[-0.03em] text-ink"
              >
                Objects with a life of their own.
              </h2>

              <p className="mt-6 max-w-[52ch] text-[clamp(1rem,0.95rem+0.3vw,1.25rem)] leading-[1.55] text-ink-2">
                {feature.dek}
              </p>

              <p className="label-xs mt-7 border-t border-ink/15 pt-5 text-faint">
                {feature.byline}
              </p>
            </div>
          </Reveal>

          {/* Production credits, set as a colophon. */}
          <Reveal className="col-span-12 lg:col-span-4 lg:col-start-9 lg:pt-4" delay={0.12}>
            <div className="mt-10 border-t border-ink/20 lg:mt-6">
              <dl className="flex flex-col">
                {feature.specs.map(([term, value]) => (
                  <div
                    key={term}
                    className="flex items-baseline justify-between gap-6 border-b border-ink/12 py-3"
                  >
                    <dt className="label-xs text-faint">{term}</dt>
                    <dd className="text-caption text-ink">{value}</dd>
                  </div>
                ))}
              </dl>

              <a
                href="#issue"
                className="label link-rule mt-8 inline-block text-ink transition-colors duration-300 hover:text-oxide"
              >
                Continue to the issue
                <span aria-hidden="true" className="ml-2 inline-block">
                  &#8594;
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
