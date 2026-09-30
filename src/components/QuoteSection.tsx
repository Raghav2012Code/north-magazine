import { Reveal } from "@/components/motion/primitives";
import { quote } from "@/data/content";

/**
 * A pause. No photography, no cards — just the page's largest type, given
 * enough air around it to actually be read.
 */
export function QuoteSection() {
  return (
    <section
      aria-labelledby="quote-heading"
      className="border-t border-ink/15 py-24 sm:py-28 lg:py-44"
    >
      <div className="shell">
        <div className="flex items-center justify-between gap-6 border-b border-ink/15 pb-3">
          <p className="label-xs text-faint">Pull quote</p>
          <p className="label-xs text-faint">{quote.source}</p>
        </div>

        <Reveal y={36} className="mt-12 lg:mt-20">
          <blockquote>
            <h2 id="quote-heading" className="sr-only">
              {quote.text}
            </h2>
            <p className="font-display max-w-[19ch] text-[clamp(2.25rem,1.05rem+5.4vw,6rem)] font-medium leading-[1.03] tracking-[-0.03em] text-ink lg:max-w-[22ch]">
              <span aria-hidden="true">&ldquo;</span>Attention is becoming the{" "}
              <em className="not-italic text-oxide">{quote.emphasis}</em> luxury.
              <span aria-hidden="true">&rdquo;</span>
            </p>

            <footer className="mt-9 flex items-center gap-5">
              <span aria-hidden="true" className="h-px w-12 shrink-0 bg-oxide" />
              <cite className="label-xs not-italic text-ink">{quote.attribution}</cite>
            </footer>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
