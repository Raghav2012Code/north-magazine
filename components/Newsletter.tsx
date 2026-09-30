"use client";
import { useState } from "react";
import Reveal from "./Reveal";
import Folio from "./Folio";
import { ArrowRight, Check } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setDone(true);
  };

  return (
    <section id="newsletter" className="border-t border-ink/10">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
        <Reveal>
          <Folio left="N° 18 / Newsletter" right="Sunday dispatch" />
        </Reveal>
        <div className="grid grid-cols-12 gap-x-5 gap-y-8">
          <Reveal className="col-span-12 lg:col-span-5">
            <h2 className="font-serif text-6xl leading-[0.9] font-medium md:text-7xl">
              Stay <em className="font-light">curious.</em>
            </h2>
          </Reveal>
          <Reveal className="col-span-12 lg:col-span-6 lg:col-start-7">
            <p className="prose-measure max-w-md text-[15px] leading-relaxed text-ink/70">
              One thoughtful dispatch every Sunday. No noise. Just the stories worth keeping.
            </p>
            {done ? (
              <p role="status" className="mt-6 flex items-center gap-3 border border-ink/15 bg-paper-deep/60 px-5 py-4 text-[15px]">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink text-paper">
                  <Check size={15} />
                </span>
                You are on the list. The first dispatch arrives Sunday morning.
              </p>
            ) : (
              <form onSubmit={submit} className="mt-6" noValidate>
                <label htmlFor="newsletter-email" className="mb-2 block font-mono text-xs text-ink/60">
                  Email address
                </label>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                    id="newsletter-email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-invalid={!!error}
                    aria-describedby={error ? "newsletter-error" : "newsletter-note"}
                    className="h-[52px] w-full border border-ink/25 bg-transparent px-5 font-serif text-lg italic placeholder:text-ink/35 focus:border-ink focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="group inline-flex h-[52px] shrink-0 items-center justify-center gap-2 bg-ink px-8 text-sm font-medium tracking-[0.08em] text-paper uppercase transition-colors duration-200 hover:bg-accent active:scale-[0.98]"
                  >
                    Subscribe
                    <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </div>
                {error ? (
                  <p id="newsletter-error" role="alert" className="mt-2 text-sm text-accent">
                    {error}
                  </p>
                ) : (
                  <p id="newsletter-note" className="mt-3 text-xs text-muted">
                    24,000 readers. Unsubscribe anytime. We never share your address.
                  </p>
                )}
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
