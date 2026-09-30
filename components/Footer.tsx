import { ArrowUpRight } from "lucide-react";
import Wordmark from "./Wordmark";

export default function Footer() {
  return (
    <footer id="footer" className="bg-night text-paper">
      <div className="mx-auto max-w-[1400px] px-5 pb-8 pt-14 md:px-10 md:pt-20">
        <div className="grid grid-cols-12 gap-x-5 gap-y-10">
          <div className="col-span-12 lg:col-span-5">
            <Wordmark className="text-6xl leading-none md:text-7xl" />
            <p className="mt-3 font-serif text-xl font-light italic text-paper/70">Culture, in context.</p>
            <p className="mt-6 max-w-xs text-[15px] leading-relaxed text-paper/55">
              An independent magazine about fashion, music, architecture, photography
              and the cities we live in. Printed twice a year.
            </p>
          </div>
          <nav aria-label="Footer" className="col-span-6 sm:col-span-4 lg:col-span-2 lg:col-start-7">
            <p className="font-mono text-xs text-paper/45 uppercase">Sections</p>
            <ul className="mt-4 space-y-3 text-[15px]">
              {["Stories", "Archive", "About", "Contact"].map((l) => (
                <li key={l}>
                  <a href="#top" className="u-link text-paper/85 hover:text-paper">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="col-span-6 sm:col-span-4 lg:col-span-2">
            <p className="font-mono text-xs text-paper/45 uppercase">Follow</p>
            <ul className="mt-4 space-y-3 text-[15px]">
              {["Instagram", "X", "YouTube"].map((l) => (
                <li key={l}>
                  <a href="#top" className="u-link text-paper/85 hover:text-paper">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 sm:col-span-4 lg:col-span-2">
            <p className="font-mono text-xs text-paper/45 uppercase">Issue 018</p>
            <p className="mt-4 font-serif text-2xl leading-tight font-medium">
              The Attention Issue
            </p>
            <a href="#issue" className="u-link mt-2 inline-flex items-center gap-1.5 text-sm font-medium tracking-[0.06em] uppercase text-paper/80">
              Get the issue <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-paper/15 pt-5 font-mono text-xs text-paper/50 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 NORTH Magazine</span>
          <span className="flex gap-6">
            <a href="#top" className="hover:text-paper">Privacy</a>
            <a href="#top" className="hover:text-paper">Terms</a>
            <span>Made slowly, on purpose.</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
