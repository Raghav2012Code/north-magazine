import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/motion/primitives";
import { latest } from "@/data/content";

/**
 * An index, not a grid: a numbered typographic list with a thumbnail at the
 * end of each row, the way a magazine runs its contents page.
 */
export function LatestStories() {
  return (
    <section
      id="latest"
      aria-labelledby="latest-heading"
      className="scroll-mt-24 border-t border-ink/15 py-16 sm:py-20 lg:py-28"
    >
      <div className="shell">
        <Reveal className="flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
          <div>
            <p className="label-xs text-faint">Filed this week</p>
            <h2
              id="latest-heading"
              className="mt-3 font-display text-[clamp(2.25rem,1.3rem+3.2vw,4rem)] font-medium leading-[0.96] tracking-[-0.028em] text-ink"
            >
              Latest stories
            </h2>
          </div>
          <p className="label-xs text-faint">Six of {latest.length * 4 + 26} in the index</p>
        </Reveal>

        <ul className="mt-10 border-t border-ink/25 lg:mt-14">
          {latest.map((entry) => (
            <li key={entry.slug} className="border-b border-ink/15">
              <a
                href={`#${entry.slug}`}
                id={entry.slug}
                className="group grid scroll-mt-28 grid-cols-12 items-center gap-x-4 gap-y-1 py-4 transition-colors duration-500 lg:gap-x-6 lg:py-5"
              >
                {/* Folio */}
                <span className="label-xs tnum col-span-2 text-faint lg:col-span-1">
                  {entry.number}
                </span>

                {/* Title */}
                <h3 className="font-display col-span-8 col-start-3 text-[clamp(1.375rem,1.15rem+1vw,2rem)] font-medium leading-[1.08] tracking-[-0.02em] text-ink transition-[color,transform] duration-500 ease-editorial group-hover:translate-x-1 group-hover:text-oxide lg:col-span-5 lg:col-start-2">
                  {entry.title}
                </h3>

                {/* Section */}
                <span className="label-xs col-span-5 col-start-3 text-muted lg:col-span-2 lg:col-start-7">
                  {entry.category}
                </span>

                {/* Date */}
                <span className="label-xs tnum col-span-5 col-start-8 text-right text-faint lg:col-span-2 lg:col-start-9 lg:text-left">
                  {entry.date}
                </span>

                {/* Thumbnail */}
                <span className="col-span-2 col-start-11 row-span-2 row-start-1 lg:col-span-1 lg:col-start-12 lg:row-span-1 lg:self-center">
                  <Photo
                    id={entry.art.id}
                    alt={entry.art.alt}
                    position={entry.art.position}
                    sizes="72px"
                    frame="aspect-square"
                    quality={55}
                    className="group-hover:scale-110"
                  />
                </span>
              </a>
            </li>
          ))}
        </ul>

        <Reveal className="mt-8 flex justify-end">
          <a
            href="#cover-story"
            className="label link-rule text-ink transition-colors duration-300 hover:text-oxide"
          >
            Open the archive
            <span aria-hidden="true" className="ml-2 inline-block">
              &#8594;
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
