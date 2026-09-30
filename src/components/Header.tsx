"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { nav } from "@/data/content";

const EASE_VEIL = [0.62, 0.02, 0.2, 1] as const;

export function Header() {
  const [condensed, setCondensed] = useState(false);
  const [panel, setPanel] = useState<"none" | "menu" | "search">("none");
  const [query, setQuery] = useState("");

  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const searchBtnRef = useRef<HTMLButtonElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  /** One ref per panel: only the open panel should trap focus. */
  const menuPanelRef = useRef<HTMLDivElement>(null);
  const searchPanelRef = useRef<HTMLDivElement>(null);
  const activePanelRef =
    panel === "menu" ? menuPanelRef : panel === "search" ? searchPanelRef : null;

  /* Condense on scroll. Transparent over the hero, paper once the reader has
     moved into the page. */
  useEffect(() => {
    const onScroll = () => setCondensed(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock the page behind the open panel. */
  useEffect(() => {
    if (panel === "none") return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [panel]);

  /* Move focus into the panel so keyboard readers land in the right place:
     the field for search, the dialog itself for the index. */
  useEffect(() => {
    if (panel === "search") searchInputRef.current?.focus();
    if (panel === "menu") menuPanelRef.current?.focus();
  }, [panel]);

  const close = useCallback(() => {
    setPanel("none");
    setQuery("");
  }, []);

  /* Escape closes; Tab is trapped inside the open panel. */
  useEffect(() => {
    if (panel === "none") return;
    const container = activePanelRef?.current;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        (panel === "menu" ? menuBtnRef.current : searchBtnRef.current)?.focus();
        return;
      }
      if (event.key !== "Tab" || !container) return;

      const focusables = container.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])',
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && (active === first || !container.contains(active))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [panel, close, activePanelRef]);

  const results = query.trim().length > 1 ? SEARCHABLE.filter((entry) =>
    `${entry.title} ${entry.category}`.toLowerCase().includes(query.trim().toLowerCase()),
  ) : [];

  return (
    <>
      <a
        href="#cover-story"
        className="label sr-only focus:not-sr-only focus:fixed focus:left-5 focus:top-5 focus:z-[80] focus:rounded-sharp focus:bg-ink focus:px-4 focus:py-3 focus:text-paper"
      >
        Skip to content
      </a>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500",
          condensed
            ? "border-b border-ink/12 bg-paper/92 backdrop-blur-[2px]"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="shell">
          <div
            className={cn(
              "flex items-center justify-between gap-6 transition-[height] duration-500 ease-editorial",
              condensed ? "h-16 lg:h-[4.5rem]" : "h-[4.75rem] lg:h-[6.5rem]",
            )}
          >
            {/* Masthead */}
            <a
              href="#cover-story"
              className="group -ml-1 rounded-sharp px-1 py-1"
              aria-label="NORTH, back to top"
            >
              <span
                className={cn(
                  "font-display block font-medium uppercase leading-none tracking-[-0.02em] transition-colors duration-500",
                  "text-[1.5rem] sm:text-[1.7rem] lg:text-[1.85rem]",
                  "group-hover:text-oxide",
                )}
                style={{ fontVariationSettings: '"opsz" 144, "WONK" 1' }}
              >
                North
              </span>
            </a>

            {/* Section navigation */}
            <nav aria-label="Sections" className="hidden lg:block">
              <ul className="flex items-center gap-9">
                {nav.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="label link-rule text-ink/80 hover:text-ink">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Search + menu */}
            <div className="flex items-center gap-1 sm:gap-3">
              <button
                ref={searchBtnRef}
                type="button"
                onClick={() => setPanel(panel === "search" ? "none" : "search")}
                aria-expanded={panel === "search"}
                aria-controls="north-search-panel"
                className={cn(
                  "label -mr-1 flex items-center gap-2 rounded-sharp px-1 py-2 text-ink/80 transition-colors duration-300 hover:text-ink",
                  panel === "search" && "text-ink",
                )}
              >
                {panel === "search" ? (
                  <X aria-hidden="true" strokeWidth={1.4} className="size-[1.05rem]" />
                ) : (
                  <Search aria-hidden="true" strokeWidth={1.4} className="size-[1.05rem]" />
                )}
                <span className="hidden sm:inline">
                  {panel === "search" ? "Close" : "Search"}
                </span>
                <span className="sr-only sm:hidden">
                  {panel === "search" ? "Close search" : "Search the archive"}
                </span>
              </button>

              <button
                ref={menuBtnRef}
                type="button"
                onClick={() => setPanel(panel === "menu" ? "none" : "menu")}
                aria-expanded={panel === "menu"}
                aria-controls="north-menu-panel"
                className={cn(
                  "label -mr-1 flex items-center gap-2 rounded-sharp px-1 py-2 text-ink/80 transition-colors duration-300 hover:text-ink",
                  panel === "menu" && "text-ink",
                )}
              >
                {panel === "menu" ? (
                  <X aria-hidden="true" strokeWidth={1.4} className="size-[1.05rem]" />
                ) : (
                  <MenuLine aria-hidden="true" />
                )}
                <span className="hidden sm:inline">{panel === "menu" ? "Close" : "Menu"}</span>
                <span className="sr-only sm:hidden">{panel === "menu" ? "Close menu" : "Menu"}</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ---- Panels -------------------------------------------------------- */}
      <Panel
        open={panel === "search"}
        labelledBy="north-search-label"
        ref={searchPanelRef}
        variant="search"
      >
        <div className="shell pb-8 pt-24 lg:pb-10 lg:pt-28">
          <p id="north-search-label" className="label border-b border-ink/15 pb-3 text-faint">
            Search the archive
          </p>

          <form
            onSubmit={(event) => event.preventDefault()}
            className="mt-6 flex items-center gap-4"
            role="search"
          >
            <label htmlFor="north-search-input" className="sr-only">
              Search stories by title or section
            </label>
            <input
              ref={searchInputRef}
              id="north-search-input"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Type a story or a section…"
              autoComplete="off"
              className="font-display w-full border-b border-ink/20 bg-transparent pb-2 text-[clamp(1.5rem,1.1rem+1.6vw,2.5rem)] leading-tight tracking-[-0.02em] text-ink outline-none transition-colors duration-300 placeholder:text-ink/30 focus:border-oxide"
            />
          </form>

          <div aria-live="polite" className="mt-5">
            {query.trim().length > 1 && results.length === 0 ? (
              <p className="text-caption text-muted">
                Nothing matches{" "}
                <span className="text-ink">“{query.trim()}”</span>. Try photography,
                architecture, cities.
              </p>
            ) : null}

            {results.length > 0 ? (
              <ul className="flex flex-col">
                {results.map((entry) => (
                  <li key={entry.slug} className="border-b border-ink/10">
                    <a
                      href={`#${entry.slug}`}
                      onClick={close}
                      className="group flex items-baseline gap-5 py-3"
                    >
                      <span className="label-xs w-6 shrink-0 text-faint tnum">
                        {entry.number}
                      </span>
                      <span className="flex-1 truncate font-display text-[1.25rem] tracking-[-0.015em] text-ink transition-colors duration-300 group-hover:text-oxide lg:text-[1.5rem]">
                        {entry.title}
                      </span>
                      <span className="label-xs hidden shrink-0 text-faint sm:inline">
                        {entry.category}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}

            {query.trim().length <= 1 ? (
              <p className="text-caption text-muted">
                Every issue back to 2009 is searchable. {SEARCHABLE.length} stories
                indexed from the current issue.
              </p>
            ) : null}
          </div>
        </div>
      </Panel>

      <Panel
        open={panel === "menu"}
        labelledBy="north-menu-label"
        ref={menuPanelRef}
        variant="menu"
      >
        <div className="shell flex min-h-full flex-col pb-8 pt-24 lg:pt-28">
          <p
            id="north-menu-label"
            className="label border-b border-ink/15 pb-3 text-faint"
          >
            Index — Issue 018
          </p>

          <nav aria-label="All sections" className="flex-1 py-6">
            <ul className="flex flex-col">
              {MENU_ITEMS.map((item, index) => (
                <li key={item.label} className="border-b border-ink/12">
                  <a
                    href={item.href}
                    onClick={close}
                    className="group flex items-baseline gap-4 py-3.5 lg:gap-8"
                    style={{ transitionDelay: `${index * 30}ms` }}
                  >
                    <span className="label-xs w-6 shrink-0 text-faint tnum">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display flex-1 text-[clamp(1.9rem,1.2rem+2.6vw,3.4rem)] leading-[1.05] tracking-[-0.025em] text-ink transition-transform duration-500 ease-editorial group-hover:translate-x-1.5">
                      {item.label}
                    </span>
                    <span className="label-xs hidden shrink-0 text-faint lg:inline">
                      {item.hint}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-ink/15 pt-5">
            <p className="label-xs text-faint">
              © 2026 NORTH Magazine · Issue 018
            </p>
            <a
              href="#newsletter"
              onClick={close}
              className="label link-rule text-ink"
            >
              Stay curious
            </a>
          </div>
        </div>
      </Panel>
    </>
  );
}

/* ------------------------------------------------------------------------- */

const MENU_ITEMS = [
  { label: "Stories", href: "#stories", hint: "Features" },
  { label: "Culture", href: "#feature", hint: "The long read" },
  { label: "Design", href: "#issue", hint: "Issue 018" },
  { label: "Archive", href: "#latest", hint: "Everything since 2009" },
  { label: "Newsletter", href: "#newsletter", hint: "Sundays" },
] as const;

const SEARCHABLE = [
  { slug: "after-the-algorithm", number: "01", title: "After the Algorithm", category: "Photography" },
  { slug: "concrete-dreams", number: "02", title: "Concrete Dreams", category: "Architecture" },
  { slug: "the-long-way-home", number: "03", title: "The Long Way Home", category: "Travel" },
  { slug: "sound-without-permission", number: "04", title: "Sound Without Permission", category: "Music" },
  { slug: "objects-with-a-life-of-their-own", number: "05", title: "Objects with a life of their own", category: "Design" },
  { slug: "architecture-of-waiting", number: "06", title: "The Architecture of Waiting", category: "Architecture" },
  { slug: "what-we-keep", number: "07", title: "What We Keep", category: "Objects" },
  { slug: "cities-after-midnight", number: "08", title: "Cities After Midnight", category: "Cities" },
  { slug: "the-case-for-boring-design", number: "09", title: "The Case for Boring Design", category: "Design" },
  { slug: "a-room-of-one-s-own", number: "10", title: "A Room of One's Own", category: "Interiors" },
  { slug: "photographs-that-remember", number: "11", title: "Photographs That Remember", category: "Film" },
] as const;

/**
 * A full-height paper sheet that wipes down from the masthead. Search and menu
 * share it so there is only one overlay idiom in the product.
 */
function Panel({
  open,
  children,
  labelledBy,
  variant,
  ref,
}: {
  open: boolean;
  children: React.ReactNode;
  labelledBy: string;
  variant: "menu" | "search";
  ref: React.RefObject<HTMLDivElement | null>;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div
      ref={ref}
      id={`north-${variant}-panel`}
      role="dialog"
      aria-modal="true"
      aria-labelledby={labelledBy}
      /* Focused programmatically on open, so it is not an interactive stop. */
      tabIndex={-1}
      className={cn(
        "fixed inset-0 z-40 overflow-y-auto overscroll-contain bg-paper focus:outline-none",
        open ? "pointer-events-auto" : "pointer-events-none invisible",
      )}
      style={{
        clipPath: open ? "inset(0 0 0% 0)" : "inset(0 0 100% 0)",
        transition: `clip-path ${EASE_VEIL.join(",")}`,
        transitionDuration: "620ms",
        visibility: open ? "visible" : "hidden",
      }}
    >
      {children}
    </div>
  );
}

/** A two-rule menu glyph, drawn to the same grid as the close cross. */
function MenuLine({ size = 17 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 17 17"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.3}
      className="shrink-0"
    >
      <path d="M1 4.75h15M1 12.25h9" />
    </svg>
  );
}
