import { cn } from "@/lib/cn";
import { Photo } from "@/components/Photo";
import type { Story } from "@/data/content";

type StoryCardProps = {
  story: Story;
  /** Grid placement — the section supplies the asymmetry, not the card. */
  className?: string;
  /** Aspect ratio of the photograph. */
  frame: string;
  /** Headline scale, tuned to the column width it sits in. */
  headline: string;
  /** Some stories lead with type, some lead with the photograph. */
  order?: "type-first" | "image-first";
  sizes: string;
  priority?: boolean;
};

/**
 * One featured story. Every card is a single link so the whole frame is
 * clickable, and every card owns its own crop and type scale — the four
 * together are a composed page, not a repeated component.
 */
export function StoryCard({
  story,
  className,
  frame,
  headline,
  order = "image-first",
  sizes,
  priority = false,
}: StoryCardProps) {
  const type = (
    <>
      <div className="mt-5 flex items-center gap-3">
        <span className="label-xs tnum text-oxide">{story.number}</span>
        <span aria-hidden="true" className="h-px w-5 bg-ink/25" />
        <span className="label-xs text-ink">{story.category}</span>
      </div>

      <h3
        className={cn(
          "font-display mt-3 font-medium leading-[1.02] tracking-[-0.022em] text-ink",
          "transition-colors duration-500 group-hover:text-oxide",
          headline,
        )}
      >
        {story.title}
      </h3>

      <p className="mt-3 max-w-[48ch] text-[0.9375rem] leading-[1.6] text-muted">
        {story.dek}
      </p>

      <p className="label-xs mt-4 text-faint">
        {story.author} · {story.date} · {story.readTime}
      </p>
    </>
  );

  const photograph = (
    <Photo
      id={story.art.id}
      alt={story.art.alt}
      position={story.art.position}
      sizes={sizes}
      frame={frame}
      priority={priority}
      className="group-hover:scale-[1.045] group-focus-visible:scale-[1.02]"
    />
  );

  return (
    <article id={story.slug} className={cn("scroll-mt-28", className)}>
      <a
        href={`#${story.slug}`}
        className="group block rounded-sharp"
        aria-label={`${story.title} — ${story.category}, ${story.date}`}
      >
        {order === "type-first" ? (
          <>
            {type}
            <div className="mt-6">{photograph}</div>
          </>
        ) : (
          <>
            {photograph}
            {type}
          </>
        )}
        <p className="label-xs mt-4 max-w-[52ch] leading-relaxed text-faint">
          {story.art.caption}
        </p>
      </a>
    </article>
  );
}
