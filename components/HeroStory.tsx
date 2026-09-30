"use client";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const ease = [0.23, 1, 0.32, 1] as const;

export default function HeroStory() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="overflow-x-clip pt-[108px] md:pt-[124px]">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between gap-4 border-b border-ink/15 pb-3 font-mono text-xs text-ink/70"
        >
          <span>Issue 018, September 2026</span>
          <span className="hidden md:block">Cover story: slow living</span>
          <span className="shrink-0 text-accent">N° 01 of 09</span>
        </motion.div>

        <div className="mt-6 grid grid-cols-12 gap-x-5 gap-y-10 md:mt-10">
          <div className="col-span-12 lg:col-span-8">
            <motion.p
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mb-5 flex items-center gap-3 font-mono text-xs text-muted"
            >
              <span className="inline-block h-px w-10 bg-accent" aria-hidden />
              Essay
            </motion.p>
            <h1 className="font-serif display-tight text-[18vw] sm:text-[15vw] lg:text-[8.5rem] xl:text-[10rem]">
              <motion.span
                className="block font-medium"
                initial={reduce ? false : { opacity: 0, y: 48 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [...ease] }}
              >
                The New
              </motion.span>
              <motion.span
                className="block font-light italic"
                initial={reduce ? false : { opacity: 0, y: 48 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3, ease: [...ease] }}
              >
                Quiet<span className="text-accent not-italic">.</span>
              </motion.span>
            </h1>
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [...ease] }}
              className="mt-6 max-w-md"
            >
              <p className="text-base leading-relaxed text-ink/80 md:text-lg md:leading-relaxed">
                Why a generation surrounded by noise is rediscovering the beauty of
                making less, moving slower, and paying attention.
              </p>
              <p className="mt-4 font-mono text-xs text-ink/60">
                By Maya Sen, 14 min read
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-5">
                <a
                  href="#stories"
                  className="group inline-flex items-center gap-2 bg-ink px-6 py-3 text-sm font-medium tracking-[0.08em] text-paper uppercase transition-colors duration-200 hover:bg-accent active:scale-[0.98]"
                >
                  Read story
                  <ArrowUpRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a href="#issue" className="u-link text-sm font-medium tracking-[0.08em] uppercase">
                  View issue
                </a>
              </div>
            </motion.div>
          </div>

          <motion.figure
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.35 }}
            className="col-span-12 sm:col-span-10 sm:col-start-2 lg:col-span-4 lg:col-start-9 lg:mt-32"
          >
            <div className="overflow-hidden bg-paper-deep">
              <Image
                src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1400&auto=format&fit=crop"
                alt="Snow-covered mountain peaks under a star-filled night sky with the Milky Way"
                width={1000}
                height={1250}
                priority
                className="aspect-[4/3] w-full object-cover sm:aspect-[4/5]"
                sizes="(max-width: 1024px) 100vw, 30vw"
              />
            </div>
            <figcaption className="mt-2 flex justify-between gap-4 text-xs text-muted">
              <span>Fig. 01. Past midnight, above the treeline.</span>
              <span className="hidden shrink-0 sm:block">2:14 am</span>
            </figcaption>
          </motion.figure>
        </div>

        <div className="mt-10 flex items-center justify-between gap-4 border-t border-ink/15 py-4 font-mono text-xs text-ink/60 md:mt-14">
          <span className="flex shrink-0 items-center gap-2">
            Scroll <ArrowDown size={13} />
          </span>
          <span className="hidden truncate md:block">Fashion, music, architecture, photography, film</span>
          <span className="shrink-0">Culture, in context.</span>
        </div>
      </div>
    </section>
  );
}
