"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Search, Menu, X, ArrowUpRight } from "lucide-react";
import Wordmark from "./Wordmark";

const links = ["Stories", "Culture", "Design", "Archive"];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open ]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setSearchOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const anim = reduce
    ? {}
    : {
        initial: { height: 0, opacity: 0 },
        animate: { height: "auto", opacity: 1 },
        exit: { height: 0, opacity: 0 },
      };

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50">
        <div className="bg-night text-paper/90">
          <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-[7px] font-mono text-[11px] uppercase md:px-10">
            <span className="opacity-80">Issue 018, the Attention Issue</span>
            <span className="hidden sm:block opacity-80">September 2026</span>
            <span className="sm:hidden opacity-80">Sep 2026</span>
          </div>
        </div>
        <header
          className={`border-b transition-colors duration-200 ${
            scrolled
              ? "bg-paper/90 backdrop-blur-md border-ink/15"
              : "bg-paper border-ink/10"
          }`}
        >
          <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-3 md:px-10 md:py-4">
            <a href="#top" aria-label="NORTH home">
              <Wordmark className="text-[30px] leading-none md:text-[34px]" />
            </a>
            <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
              {links.map((l) => (
                <a
                  key={l}
                  href={l === "Stories" ? "#stories" : l === "Design" ? "#feature" : l === "Archive" ? "#latest" : "#issue"}
                  className="u-link text-sm font-medium text-ink/80 hover:text-ink"
                >
                  {l}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-1 md:gap-2">
              <button
                onClick={() => setSearchOpen((v) => !v)}
                aria-label="Search"
                aria-expanded={searchOpen}
                className="flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-200 hover:bg-ink/5 active:scale-[0.97]"
              >
                {searchOpen ? <X size={19} strokeWidth={1.5} /> : <Search size={19} strokeWidth={1.5} />}
              </button>
              <span className="hidden text-sm text-ink/60 md:block">
                Search
              </span>
              <span className="mx-2 hidden h-4 w-px bg-ink/15 md:block" aria-hidden />
              <button
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                className="flex h-11 items-center gap-2 px-2 text-sm font-medium active:scale-[0.97]"
              >
                <span className="hidden md:block">Menu</span>
                <Menu size={21} strokeWidth={1.5} />
              </button>
            </div>
          </div>
          <AnimatePresence>
            {searchOpen && (
              <motion.div
                {...anim}
                transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                className="overflow-hidden border-t border-ink/10"
              >
                <form
                  className="mx-auto flex max-w-[1400px] items-center gap-4 px-5 py-4 md:px-10"
                  onSubmit={(e) => e.preventDefault()}
                  role="search"
                >
                  <Search size={16} className="shrink-0 text-muted" aria-hidden />
                  <label htmlFor="site-search" className="sr-only">
                    Search articles
                  </label>
                  <input
                    id="site-search"
                    placeholder="Search stories, photographers, cities"
                    className="w-full bg-transparent font-serif text-xl italic placeholder:text-ink/30 focus:outline-none md:text-2xl"
                  />
                  <span className="hidden font-mono text-xs text-muted md:block">
                    Press Enter
                  </span>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </header>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.25 }}
            className="fixed inset-0 z-[70] bg-night text-paper"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
          >
            <div className="mx-auto flex h-full max-w-[1400px] flex-col px-5 py-6 md:px-10">
              <div className="flex items-center justify-between">
                <Wordmark className="text-3xl" />
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  autoFocus
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-paper/25 transition-colors duration-200 hover:bg-paper hover:text-night active:scale-[0.97]"
                >
                  <X size={20} strokeWidth={1.5} />
                </button>
              </div>
              <nav aria-label="Menu" className="mt-10 flex flex-1 flex-col justify-center">
                {[
                  { n: "p. 24", label: "Stories", href: "#stories" },
                  { n: "p. 40", label: "Culture", href: "#issue" },
                  { n: "p. 52", label: "Design", href: "#feature" },
                  { n: "p. 67", label: "Archive", href: "#latest" },
                ].map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    initial={reduce ? false : { opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: reduce ? 0 : 0.08 + i * 0.06, duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
                    className="group flex items-baseline gap-5 border-b border-paper/15 py-4 md:py-5"
                  >
                    <span className="font-mono text-xs text-paper/50">{item.n}</span>
                    <span className="font-serif text-5xl leading-none font-medium transition-transform duration-200 group-hover:translate-x-2 md:text-7xl">
                      {item.label}
                    </span>
                    <ArrowUpRight className="ml-auto opacity-0 transition-opacity duration-200 group-hover:opacity-100" size={24} aria-hidden />
                  </motion.a>
                ))}
              </nav>
              <div className="flex flex-wrap items-center justify-between gap-4 pt-8 font-mono text-xs text-paper/60">
                <span>Culture, in context.</span>
                <div className="flex gap-6">
                  <a href="#newsletter" onClick={() => setOpen(false)} className="u-link">Newsletter</a>
                  <a href="#footer" onClick={() => setOpen(false)} className="u-link">Contact</a>
                  <span>© 2026</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
