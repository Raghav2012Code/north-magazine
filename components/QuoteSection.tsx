import Reveal from "./Reveal";

export default function QuoteSection() {
  return (
    <section aria-label="Editorial quote" className="border-y border-ink/10 bg-paper-deep/50">
      <div className="mx-auto max-w-[1100px] px-5 py-20 text-center md:py-32">
        <Reveal>
          <p className="font-mono text-xs text-muted">From the editor&apos;s letter</p>
          <blockquote className="mx-auto mt-6 max-w-4xl font-serif text-[11vw] leading-[1.04] font-medium tracking-[-0.01em] text-balance sm:text-6xl md:text-7xl">
            Attention is becoming the <em className="font-light text-accent">rarest luxury.</em>
          </blockquote>
          <p className="mt-8 font-mono text-xs text-ink/60">
            Maya Sen, writer
          </p>
        </Reveal>
      </div>
    </section>
  );
}
