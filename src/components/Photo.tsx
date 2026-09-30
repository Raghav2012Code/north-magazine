"use client";

import Image from "next/image";
import { cn } from "@/lib/cn";
import { unsplashLoader } from "@/lib/image";

/**
 * A single editorial photograph.
 *
 * The frame owns its aspect ratio and clips the overflow, which keeps the crop
 * deliberate at every breakpoint and prevents layout shift. `fill` keeps the
 * image responsive while the frame holds the space.
 */
export function Photo({
  id,
  alt,
  sizes,
  frame = "aspect-[4/3]",
  priority = false,
  quality = 78,
  position,
  className,
  frameClassName,
}: {
  id: string;
  alt: string;
  sizes: string;
  frame?: string;
  priority?: boolean;
  quality?: number;
  position?: string;
  /** Classes for the <img> itself — used for hover scale. */
  className?: string;
  /** Classes for the clipping frame. */
  frameClassName?: string;
}) {
  return (
    <div
      className={cn("relative overflow-hidden bg-paper-3", frame, frameClassName)}
    >
      <Image
        loader={unsplashLoader}
        src={id}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        quality={quality}
        style={{ objectPosition: position ?? "50% 50%" }}
        className={cn(
          "object-cover regrade transition-transform duration-[1100ms] ease-editorial",
          className,
        )}
      />
    </div>
  );
}

/** Printed caption line that sits under a frame. */
export function Caption({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  if (!children) return null;
  return (
    <p className={cn("label-xs mt-3 max-w-[52ch] text-faint leading-relaxed", className)}>
      {children}
    </p>
  );
}
