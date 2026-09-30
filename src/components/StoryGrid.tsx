import { Reveal } from "@/components/motion/primitives";
import { StoryCard } from "@/components/StoryCard";
import { featured } from "@/data/content";

/**
 * Four stories, four different frames, four different positions on the page.
 * The asymmetry is deliberate: a wide opener, a portrait dropped into the
 * right margin, a narrow column low on the left, and a landscape that closes
 * the spread.
 */
export function StoryGrid() {
  return (
    <section
      id="stories"
      aria-labelledby="stories-heading"
      className="scroll-mt-24 border-t border-ink/15 py-16 sm:py-20 lg:py-28"
    >
      <div className="shell">
        {/* Section head */}
        <Reveal className="flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
          <div>
            <p className="label-xs text-faint">Features — Issue 018</p>
            <h2
              id="stories-heading"
              className="mt-3 font-display text-[clamp(2.25rem,1.3rem+3.2vw,4rem)] font-medium leading-[0.96] tracking-[-0.028em] text-ink"
            >
              Stories worth your time.
            </h2>
          </div>
          <div className="flex w-full justify-end sm:w-auto">
            <a
              href="#latest"
              className="label link-rule pb-1 text-ink transition-colors duration-300 hover:text-oxide"
            >
              All stories
              <span aria-hidden="true" className="ml-2 inline-block">
                &#8594;
              </span>
            </a>
          </div>
        </Reveal>

        {/* The spread */}
        <div className="mt-12 grid grid-cols-12 gap-x-6 gap-y-14 sm:gap-y-16 lg:mt-16 lg:gap-y-0">
          <Reveal className="col-span-12 lg:col-span-7 lg:col-start-1 lg:row-start-1">
            <StoryCard
              story={featured[0]}
              frame="aspect-[4/3]"
              headline="text-[clamp(1.875rem,1.3rem+2.4vw,3.25rem)]"
              sizes="(min-width: 1024px) 58vw, 100vw"
            />
          </Reveal>

          <Reveal
            className="col-span-7 col-start-1 sm:col-span-5 sm:col-start-8 lg:col-span-4 lg:col-start-9 lg:row-start-1 lg:mt-40"
            delay={0.08}
          >
            <StoryCard
              story={featured[1]}
              frame="aspect-[3/4]"
              headline="text-[clamp(1.5rem,1.15rem+1.4vw,2.125rem)]"
              order="type-first"
              sizes="(min-width: 1024px) 32vw, (min-width: 640px) 40vw, 58vw"
            />
          </Reveal>

          <Reveal
            className="col-span-5 col-start-8 sm:col-span-6 sm:col-start-1 lg:col-span-4 lg:col-start-1 lg:row-start-2"
            delay={0.08}
          >
            <StoryCard
              story={featured[2]}
              frame="aspect-[4/5]"
              headline="text-[clamp(1.5rem,1.15rem+1.4vw,2.125rem)]"
              sizes="(min-width: 1024px) 32vw, (min-width: 640px) 50vw, 42vw"
            />
          </Reveal>

          <Reveal
            className="col-span-12 sm:col-span-6 sm:col-start-7 lg:col-span-7 lg:col-start-6 lg:row-start-2 lg:mt-16"
            delay={0.08}
          >
            <StoryCard
              story={featured[3]}
              frame="aspect-[16/10] lg:aspect-[3/2]"
              headline="text-[clamp(1.75rem,1.25rem+2vw,2.875rem)]"
              sizes="(min-width: 1024px) 58vw, (min-width: 640px) 50vw, 100vw"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
