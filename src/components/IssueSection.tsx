import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/motion/primitives";
import { issue } from "@/data/content";

/**
 * The newsstand. A deep-indigo band breaks the run of paper sections, and the
 * cover beside it is built in CSS the way a cover is actually built: masthead
 * reversed out of the photograph, a spot colour, a hairline, and colophon
 * details along the foot.
 */
export function IssueSection() {
  return (
    <section
      id="issue"
      aria-labelledby="issue-heading"
      className="relative mt-24 scroll-mt-24 bg-indigo py-20 text-paper sm:py-24 lg:mt-36 lg:py-32"
    >
      <div className="shell">
        <div className="grid grid-cols-12 items-center gap-x-6 gap-y-12 lg:gap-y-0">
          {/* ---- Cover ---------------------------------------------------- */}
          <Reveal className="col-span-12 sm:col-span-7 lg:col-span-5">
            <div className="mx-auto w-full max-w-[23rem] sm:max-w-none lg:max-w-[26rem]">
              <a
                href="#newsletter"
                className="group block rounded-sharp"
                aria-label={`Explore Issue ${issue.number} — ${issue.title}`}
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-paper shadow-press transition-[transform,box-shadow] duration-700 ease-editorial group-hover:-translate-y-1.5 group-hover:shadow-[0_2px_4px_oklch(0.1692_0.0062_62/0.1),0_34px_60px_-34px_oklch(0.1692_0.0062_62/0.55)]">
                  <div className="absolute inset-0 overflow-hidden">
                    <Photo
                      id={issue.cover.id}
                      alt={issue.cover.alt}
                      position={issue.cover.position}
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 58vw, 92vw"
                      frame="h-full"
                      quality={80}
                    />
                  </div>

                  {/* Value scale, so reversed type always clears contrast. */}
                  <div className="absolute inset-0 bg-linear-to-t from-indigo/90 via-indigo/40 to-indigo/25 transition-opacity duration-700 group-hover:opacity-90" />

                  {/* Masthead */}
                  <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-4 px-5 pt-5">
                    <span
                      className="font-display text-[clamp(2.1rem,1.6rem+1.6vw,2.9rem)] font-semibold uppercase leading-none tracking-[-0.02em] text-paper"
                      style={{ fontVariationSettings: '"opsz" 144, "WONK" 1' }}
                    >
                      North
                    </span>
                    <span className="label-xs mt-1 text-paper/75">Issue {issue.number}</span>
                  </div>

                  {/* Cover lines */}
                  <div className="absolute inset-x-0 bottom-0 px-5 pb-5">
                    <span className="block h-px w-9 bg-oxide-2" aria-hidden="true" />
                    <p className="font-display mt-3 text-[clamp(1.5rem,1.1rem+1.4vw,2.1rem)] font-medium leading-[1.02] tracking-[-0.02em] text-paper">
                      The Attention
                      <br />
                      Issue
                    </p>

                    <div className="mt-4 flex items-center justify-between gap-4 border-t border-paper/25 pt-2.5">
                      <span className="label-xs text-paper/80">September 2026</span>
                      <span className="label-xs text-paper/80">184 pages</span>
                      <span className="label-xs text-paper/80">€16</span>
                    </div>
                  </div>

                  {/* Spine */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-y-0 left-0 w-[7%] bg-linear-to-r from-black/25 to-transparent"
                  />
                </div>
              </a>

              <p className="label-xs mt-4 text-center text-mist-2 lg:text-left">
                Cover — {issue.cover.credit}
              </p>
            </div>
          </Reveal>

          {/* ---- Issue detail -------------------------------------------- */}
          <Reveal
            className="col-span-12 sm:col-span-5 sm:col-start-8 lg:col-span-6 lg:col-start-7"
            delay={0.1}
          >
            <div className="max-w-[46rem]">
              <p className="label-xs text-mist-2">On the newsstand now</p>

              <h2
                id="issue-heading"
                className="mt-4 font-display text-[clamp(2.5rem,1.4rem+4.4vw,5rem)] font-medium leading-[0.94] tracking-[-0.03em] text-paper"
              >
                Issue {issue.number}
                <span className="mt-1 block text-mist-2">The Attention Issue</span>
              </h2>

              <p className="mt-7 max-w-[54ch] text-[clamp(1rem,0.95rem+0.28vw,1.1875rem)] leading-[1.6] text-mist">
                {issue.description}
              </p>

              <div className="mt-9 border-t border-mist/20">
                <p className="label-xs pt-4 text-mist-2">Inside this issue</p>
                <ul className="mt-2">
                  {issue.contents.map((item) => (
                    <li
                      key={item}
                      className="flex gap-4 border-b border-mist/15 py-2.5 last:border-b-0"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[0.55rem] h-px w-3 shrink-0 bg-oxide-2"
                      />
                      <span className="text-caption leading-[1.55] text-mist">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
                <a
                  href="#newsletter"
                  className="label group inline-flex min-h-12 items-center gap-3 rounded-sharp border border-mist/45 px-6 text-paper transition-colors duration-500 ease-editorial hover:bg-paper hover:text-indigo"
                >
                  Explore issue
                  <span
                    aria-hidden="true"
                    className="inline-block transition-transform duration-500 ease-editorial group-hover:translate-x-1"
                  >
                    &#8594;
                  </span>
                </a>
                <p className="label-xs text-mist-2">
                  {issue.specs.join(" · ")}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
