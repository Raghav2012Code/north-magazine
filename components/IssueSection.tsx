import Image from "next/image";
import Reveal from "./Reveal";
import Folio from "./Folio";
import { ArrowRight } from "lucide-react";

export default function IssueSection() {
  return (
    <section id="issue" className="mx-auto max-w-[1400px] scroll-mt-28 px-5 py-16 md:px-10 md:py-28">
      <Reveal>
        <Folio left="N° 18 / The issue" right="pp. 1–164" />
      </Reveal>
      <div className="grid grid-cols-12 gap-x-5 gap-y-12">
        <Reveal className="col-span-12 md:col-span-6 lg:col-span-5">
          <div className="group relative mx-auto max-w-[420px] [perspective:1200px]">
            <div className="absolute -left-4 top-8 bottom-8 w-6 bg-ink/90 [transform:rotateY(-18deg)]" aria-hidden />
            <div className="relative bg-[#E9E2D2] shadow-[24px_30px_60px_-20px_rgba(22,19,14,0.35)] transition-transform duration-300 ease-out group-hover:[transform:rotateY(-6deg)_rotateX(2deg)]">
              <div className="relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=900&auto=format&fit=crop"
                  alt="Wooden boat drifting on a still alpine lake toward grey cliffs"
                  width={840}
                  height={1080}
                  className="aspect-[3/4] w-full object-cover"
                  sizes="(max-width:768px) 90vw, 32vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" aria-hidden />
                <div className="absolute inset-x-0 top-0 h-2/5 bg-gradient-to-b from-black/50 via-black/10 to-transparent" aria-hidden />
                <div className="absolute inset-x-0 top-0 p-5">
                  <div className="flex items-start justify-between text-white">
                    <span className="font-serif text-4xl font-semibold tracking-tight">NORTH.</span>
                    <span className="font-mono text-[11px] leading-tight tracking-[0.08em] uppercase opacity-90">
                      Issue
                      <br />
                      018
                    </span>
                  </div>
                  <p className="mt-1 font-mono text-[11px] tracking-[0.08em] uppercase text-white/85">
                    September 2026
                  </p>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="font-mono text-[11px] tracking-[0.08em] uppercase text-white/85">
                    The Attention Issue
                  </p>
                  <p className="mt-1 font-serif text-4xl leading-[0.95] font-medium text-white">
                    The New
                    <br />
                    <em className="font-light">Quiet.</em>
                  </p>
                  <p className="mt-2 font-mono text-[11px] text-white/75">
                    Sen, Park, Reyes and fourteen more
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-ink/10 bg-[#E9E2D2] px-5 py-3">
                <span className="font-mono text-[11px] text-ink/60">
                  164 pages, printed in Denmark
                </span>
                <span className="h-6 w-6 rounded-full bg-accent" aria-hidden />
              </div>
            </div>
            <p className="mt-4 text-center text-xs text-muted">
              Cover: still water, early morning.
            </p>
          </div>
        </Reveal>

        <div className="col-span-12 md:col-span-6 lg:col-span-6 lg:col-start-7">
          <Reveal>
            <p className="font-mono text-xs text-accent uppercase">Current issue</p>
            <p className="mt-3 font-mono text-xs text-ink/60">
              Issue 018, September 2026
            </p>
            <h2 className="mt-2 font-serif text-6xl leading-[0.9] font-medium tracking-[-0.01em] md:text-8xl">
              The
              <br />
              Attention
              <br />
              <em className="font-light">Issue.</em>
            </h2>
            <p className="prose-measure mt-6 max-w-md text-[15.5px] leading-relaxed text-ink/75">
              A collection of stories about attention, craft, culture and the things
              that still deserve our time.
            </p>
            <ul className="mt-6 border-t border-ink/15 text-[15px]">
              {[
                ["p. 24", "The New Quiet, Maya Sen"],
                ["p. 58", "Concrete Dreams, Tomas Reyes"],
                ["p. 92", "Sound Without Permission"],
              ].map(([pg, t]) => (
                <li key={t} className="flex items-center justify-between gap-4 border-b border-ink/15 py-3">
                  <span className="font-serif text-lg italic">{t}</span>
                  <span className="shrink-0 font-mono text-xs text-muted">{pg}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a
                href="#newsletter"
                className="group inline-flex items-center gap-3 bg-ink px-7 py-3.5 text-sm font-medium tracking-[0.08em] text-paper uppercase transition-colors duration-200 hover:bg-accent active:scale-[0.98]"
              >
                Explore issue
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <span className="text-sm text-muted">
                Print and digital, ships worldwide
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
