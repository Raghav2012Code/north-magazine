import Image from "next/image";
import Reveal from "./Reveal";
import Folio from "./Folio";
import { latestStories } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

export default function LatestStories() {
  return (
    <section id="latest" className="mx-auto max-w-[1400px] scroll-mt-28 px-5 py-16 md:px-10 md:py-28">
      <Reveal>
        <Folio left="N° 18 / Index" right="pp. 67–90" />
        <div className="flex items-end justify-between gap-6">
          <h2 className="font-serif text-5xl leading-none font-medium tracking-[-0.01em] md:text-7xl">
            Latest stories.
          </h2>
          <a href="#latest" className="u-link hidden text-sm font-medium tracking-[0.06em] uppercase md:block">
            Full archive
          </a>
        </div>
      </Reveal>

      <ol className="mt-8 border-t-2 border-ink">
        {latestStories.map((s) => (
          <li key={s.no} className="group border-b border-ink/10">
            <a
              href="#latest"
              className="grid grid-cols-12 items-center gap-3 py-4 md:gap-5 md:py-5"
            >
              <span className="col-span-2 font-mono text-xs text-ink/40 sm:col-span-1">
                {s.no}
              </span>
              <span className="col-span-10 font-serif text-[22px] leading-tight font-medium group-hover:underline group-hover:underline-offset-4 sm:col-span-6 md:text-[28px]">
                {s.title}
              </span>
              <span className="col-span-6 col-start-3 font-mono text-xs text-muted uppercase sm:col-span-2 sm:col-start-auto">
                {s.category}
              </span>
              <span className="hidden text-xs text-muted sm:col-span-1 sm:block md:text-right">
                {s.date}
              </span>
              <span className="col-span-4 col-start-9 hidden sm:block md:col-span-2 md:col-start-auto">
                <span className="ml-auto block h-14 w-20 overflow-hidden bg-paper-deep md:h-16 md:w-28">
                  <Image
                    src={s.image}
                    alt={s.alt}
                    width={300}
                    height={200}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </span>
              </span>
              <span className="hidden md:flex md:justify-end" aria-hidden>
                <ArrowUpRight
                  size={17}
                  className="text-ink/30 transition-colors duration-200 group-hover:text-accent"
                />
              </span>
              <span className="col-span-10 col-start-3 mt-1 sm:hidden">
                <span className="block h-28 w-full overflow-hidden bg-paper-deep">
                  <Image
                    src={s.image}
                    alt={s.alt}
                    width={600}
                    height={300}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </span>
              </span>
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}
