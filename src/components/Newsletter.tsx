"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

type Status = "idle" | "error" | "success";

/**
 * One field, one button, and honest states. No gradient panel, no badge — a
 * printed subscription slip rather than a marketing CTA.
 */
export function Newsletter() {
  const reduce = useReducedMotion();
  const fieldId = useId();
  const messageId = `${fieldId}-message`;

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
    setStatus(valid ? "success" : "error");
  }

  const message =
    status === "error"
      ? "That address doesn’t look right. Check it and try again."
      : status === "success"
        ? "You’re on the list. The next dispatch lands Sunday morning."
        : "";

  return (
    <section
      id="newsletter"
      aria-labelledby="newsletter-heading"
      className="scroll-mt-24 border-t border-ink/15 py-20 sm:py-24 lg:py-32"
    >
      <div className="shell">
        <div className="grid grid-cols-12 items-end gap-x-6 gap-y-10">
          <div className="col-span-12 lg:col-span-5">
            <p className="label-xs text-faint">The Sunday dispatch</p>
            <h2
              id="newsletter-heading"
              className="mt-4 font-display text-[clamp(2.75rem,1.5rem+4.6vw,5.5rem)] font-medium leading-[0.92] tracking-[-0.03em] text-ink"
            >
              Stay curious.
            </h2>
            <p className="mt-6 max-w-[40ch] text-[1.0625rem] leading-[1.6] text-muted">
              One thoughtful dispatch every Sunday. No noise. Just the stories worth
              keeping.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <form onSubmit={onSubmit} noValidate className="max-w-[34rem]">
              <label htmlFor={fieldId} className="label-xs block text-ink">
                Email address
              </label>

              <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-6">
                <input
                  id={fieldId}
                  name="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    if (status !== "idle") setStatus("idle");
                  }}
                  placeholder="Your email address"
                  aria-describedby={message ? messageId : undefined}
                  aria-invalid={status === "error"}
                  className={cn(
                    "w-full border-b bg-transparent pb-3 text-[1.0625rem] leading-[1.4] text-ink outline-none transition-colors duration-300 placeholder:text-ink/35 focus:border-ink sm:flex-1",
                    status === "error" ? "border-oxide" : "border-ink/30",
                  )}
                />

                <button
                  type="submit"
                  className="label -mx-3 shrink-0 rounded-sharp bg-ink px-7 py-4 text-paper transition-colors duration-500 ease-editorial hover:bg-oxide sm:mx-0"
                >
                  Subscribe
                </button>
              </div>

              <div className="mt-4 min-h-6">
                <AnimatePresence initial={false}>
                  {message ? (
                    <motion.p
                      key={status}
                      id={messageId}
                      role="status"
                      aria-live="polite"
                      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className={cn(
                        "label-xs",
                        status === "error" ? "text-oxide" : "text-signal",
                      )}
                    >
                      {message}
                    </motion.p>
                  ) : null}
                </AnimatePresence>
              </div>

              <p className="label-xs mt-6 text-faint">
                We write on Sundays and never more than once. Unsubscribe in a click.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
