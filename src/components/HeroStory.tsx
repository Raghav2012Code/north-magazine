"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import { hero } from "@/data/content";
import { Photo } from "@/components/Photo";

const EASE = [0.16, 1, 0.3, 1] as const;

const group: Variants = {
  hidden: {},
  shown: { transition: { delayChildren: 0.1, staggerChildren: 0.08 } },
};

const rise: Variants = {
  hidden: { opacity: 0, y: 26 },
  shown: { opacity: 1, y: 0, transition: { duration: 1, ease: EASE } },
};

/** With reduced motion the entrance becomes a plain fade-free appearance. */
const still = {
  hidden: { opacity: 1, y: 0 },
  shown: { opacity: 1, y: 0 },
};

/**
 * The cover. Deliberately not a two-column SaaS hero: a full-bleed frame
 * carries the photography while the masthead headline breaks out of a paper
 * column that overlaps it. Set as three masked lines so the type prints in
 * rather than fades up.
 */
export function HeroStory() {
  const wrapRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion() ?? false;
  const enter = reduce ? still : rise;

  /* A small, slow drift of the photograph against the scroll. Transform only. */
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "9%"]);

  return (
    <section
      id="cover-story"
      ref={wrapRef}
      aria-labelledby="cover-title"
      className="relative overflow-x-clip pb-16 pt-28 sm:pt-32 lg:pb-28 lg:pt-44"
    >
      <div className="shell">
        <motion.div
          variants={group}
          initial="hidden"
          animate="shown"
          className="grid grid-cols-12 gap-x-6 gap-y-10 lg:gap-y-0"
        >
          {/* Masthead line, headline and deck — the paper column. */}
          <div className="col-span-12 lg:col-span-7 lg:col-start-1 lg:row-start-1 lg:z-20 lg:self-center">
            <motion.div variants={enter} className="flex items-center gap-4">
              <span className="label-xs text-oxide">{hero.meta}</span>
              <span aria-hidden="true" className="h-px w-14 bg-ink/25 sm:w-20" />
              <span className="label-xs hidden text-faint xl:inline">Cover story</span>
            </motion.div>

            <h1
              id="cover-title"
              className="mt-6 font-display text-[clamp(3.2rem,2.1rem+7.6vw,9.2rem)] font-medium uppercase leading-[0.86] tracking-[-0.03em]"
            >
              <MaskedLine reduce={reduce}>The</MaskedLine>
              <MaskedLine reduce={reduce}>New</MaskedLine>
              <MaskedLine reduce={reduce} delay={0.13}>Quiet</MaskedLine>
            </h1>

            <motion.p
              variants={enter}
              className="measure-cover mt-7 text-[clamp(1.0625rem,0.98rem+0.36vw,1.3125rem)] leading-[1.55] text-ink-2"
            >
              {hero.dek}
            </motion.p>

            <motion.div
              variants={enter}
              className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-ink/15 pt-5"
            >
              <p className="label-xs text-ink">{hero.byline}</p>
              <a
                href="#feature"
                className="label link-rule text-ink transition-colors duration-300 hover:text-oxide"
              >
                Read the story
              </a>
            </motion.div>
          </div>

          {/* Photograph. */}
          <div className="col-span-12 lg:col-span-7 lg:col-start-6 lg:row-start-1 lg:-mt-14 lg:pb-24">
            <motion.div variants={enter} className="relative">
              <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[16/10] lg:aspect-[4/3]">
                <motion.div
                  style={reduce ? undefined : { y: imageY }}
                  className="absolute inset-x-0 -inset-y-[9%]"
                >
                  <Photo
                    id={hero.art.id}
                    alt={hero.art.alt}
                    position={hero.art.position}
                    sizes="(min-width: 1024px) 58vw, 100vw"
                    frame="h-full"
                    priority
                    quality={82}
                  />
                </motion.div>
              </div>

              {/* Vertical spine detail, large screens only. */}
              <p
                aria-hidden="true"
                className="label-xs absolute -left-7 top-0 hidden origin-top-left rotate-90 text-faint lg:block"
              >
                Photography — Ansel Roth
              </p>

              <div className="mt-3 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-t border-ink/15 pt-3">
                <p className="label-xs max-w-[46ch] leading-relaxed text-faint">
                  {hero.art.caption}
                </p>
                <p className="label-xs shrink-0 text-faint">{hero.art.credit}</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/** One headline line, masked by its own overflow box. */
function MaskedLine({
  children,
  delay = 0,
  reduce,
}: {
  children: string;
  delay?: number;
  reduce: boolean;
}) {
  return (
    <span className="block overflow-hidden pb-[0.06em]">
      <motion.span
        className="block"
        initial={{ y: reduce ? "0%" : "108%" }}
        animate={{ y: "0%" }}
        transition={{ duration: reduce ? 0 : 1.15, delay: reduce ? 0 : 0.08 + delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}
