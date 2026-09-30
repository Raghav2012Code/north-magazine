"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import { cn } from "@/lib/cn";

const EASE = [0.16, 1, 0.3, 1] as const;

/* -------------------------------------------------------------------------
   Reveal — the single scroll-reveal primitive used across the page.
   Children start hidden only once JavaScript is running; the <noscript>
   stylesheet in the layout restores them otherwise.
   ------------------------------------------------------------------------- */

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Travel distance in px. Set to 0 for a pure fade. */
  y?: number;
  duration?: number;
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  duration = 0.9,
}: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      data-reveal=""
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* -------------------------------------------------------------------------
   ParallaxFrame — an overscaled inner layer translated against scroll. The
   outer frame owns the crop, the inner layer owns the motion, so nothing
   animates width, height or top.
   ------------------------------------------------------------------------- */

type ParallaxFrameProps = {
  children: ReactNode;
  className?: string;
  /** Total travel in px across the element's scroll lifetime. */
  distance?: number;
  /** Entrance scale, eased back to 1 as the frame arrives. */
  from?: number;
  /** Delay before the entrance scale begins. */
  delay?: number;
};

export function ParallaxFrame({
  children,
  className,
  distance = 44,
  from = 1.1,
  delay = 0,
}: ParallaxFrameProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);

  const entrance: Variants = { hidden: { scale: from }, shown: { scale: 1 } };

  if (reduce) {
    return (
      <div ref={ref} className={cn("relative overflow-hidden", className)}>
        {children}
      </div>
    );
  }

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.div
        data-reveal=""
        className="absolute inset-x-0 -inset-y-[10%]"
        style={{ y }}
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        variants={entrance}
        transition={{ duration: 1.5, delay, ease: EASE }}
      >
        {children}
      </motion.div>
    </div>
  );
}
