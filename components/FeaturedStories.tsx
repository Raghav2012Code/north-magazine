import Image from "next/image";
import Reveal from "./Reveal";
import Folio from "./Folio";
import { featuredStories } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

const folios = ["p. 24", "p. 38", "p. 52", "p. 66"];

function Category({ children }: { children: string }) {
  return (
    <p className="font-mono text-xs tracking-[0.06em] text-accent uppercase">{children}</p>
  );
}

function Byline({ author, date }: { author: string; date: string }) {
  return (
    <p className="mt-3 font-mono text-xs text-muted">
      {author}, {date}
    </p>
  );
}

export default function FeaturedStories() {
  const [a, b, c, d] = featuredStories;
  return (
    <section id="stories" className="mx-auto max-w-[1400px] scroll-mt-28 px-5 py-16 md:px-10 md:py-28">
      <Reveal>
        <Folio left="N° 18 / Stories" right="pp. 24–66" />
        <h2 className="max-w-3xl font-serif text-5xl leading-[0.95] font-medium tracking-[-0.01em] md:text-7xl">
          Stories worth your time.
        </h2>
      </Reveal>

      <div className="mt-10 grid grid-cols-12 gap-x-5 gap-y-12 md:mt-14">
        <div className="col-span-12 lg:col-span-7">
          <a href="#stories" className="group block">
            <div className="zoomable overflow-hidden bg-paper-deep">
              <Image
                src={a.image}
                alt={a.alt}
                width={1100}
                height={750}
                className="aspect-[3/2] w-full object-cover"
                sizes="(max-width:1024px) 100vw, 58vw"
                loading="lazy"
              />
            </div>
            <div className="mt-4 grid grid-cols-12 gap-3">
              <span className="col-span-2 font-mono text-xs text-ink/40">{folios[0]}</span>
              <div className="col-span-10">
                <Category>{a.category}</Category>
                <h3 className="mt-2 font-serif text-4xl leading-[1.02] font-medium md:text-[2.9rem]">
                  {a.title}
                </h3>
                <p className="prose-measure mt-2 text-[15px] leading-relaxed text-ink/70">{a.dek}</p>
                <Byline author={a.author} date={a.date} />
              </div>
            </div>
          </a>
        </div>

        <div className="col-span-12 sm:col-span-6 lg:col-span-5 lg:pt-24">
          <a href="#stories" className="group block">
            <div className="zoomable overflow-hidden bg-paper-deep">
              <Image
                src={b.image}
                alt={b.alt}
                width={800}
                height={1100}
                className="aspect-[3/4] w-full object-cover"
                sizes="(max-width:1024px) 50vw, 32vw"
                loading="lazy"
              />
            </div>
            <div className="mt-4 flex gap-4">
              <span className="font-mono text-xs text-ink/40">{folios[1]}</span>
              <div>
                <Category>{b.category}</Category>
                <h3 className="mt-2 font-serif text-3xl leading-[1.02] font-medium">{b.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink/70">{b.dek}</p>
                <Byline author={b.author} date={b.date} />
              </div>
            </div>
          </a>
        </div>

        <div className="col-span-12 sm:col-span-6 lg:col-span-5">
          <a href="#stories" className="group block lg:-mt-6">
            <div className="zoomable overflow-hidden bg-paper-deep">
              <Image
                src={c.image}
                alt={c.alt}
                width={900}
                height={650}
                className="aspect-[4/3] w-full object-cover"
                sizes="(max-width:1024px) 50vw, 38vw"
                loading="lazy"
              />
            </div>
            <div className="mt-4 flex gap-4">
              <span className="font-mono text-xs text-ink/40">{folios[2]}</span>
              <div>
                <Category>{c.category}</Category>
                <h3 className="mt-2 font-serif text-3xl leading-[1.02] font-medium">{c.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink/70">{c.dek}</p>
                <Byline author={c.author} date={c.date} />
              </div>
            </div>
          </a>
        </div>

        <div className="col-span-12 lg:col-span-7 lg:pl-10">
          <a href="#stories" className="group grid items-end gap-6 border-t border-ink/15 pt-8 sm:grid-cols-2">
            <div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-ink/40">{folios[3]}</span>
                <Category>{d.category}</Category>
              </div>
              <h3 className="mt-3 font-serif text-4xl leading-[1] font-medium md:text-5xl">{d.title}</h3>
              <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-ink/70">{d.dek}</p>
              <Byline author={d.author} date={d.date} />
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium tracking-[0.08em] uppercase underline underline-offset-4">
                Read <ArrowUpRight size={15} />
              </span>
            </div>
            <div className="zoomable overflow-hidden bg-paper-deep">
              <Image
                src={d.image}
                alt={d.alt}
                width={800}
                height={600}
                className="aspect-[4/3] w-full object-cover"
                sizes="(max-width:1024px) 100vw, 30vw"
                loading="lazy"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
