/**
 * NORTH wordmark. Always typographic, never an image: Fraunces semibold
 * with a tight track and the olive period. One component so the header,
 * menu and footer can never drift apart.
 */
export default function Wordmark({
  className = "",
  dotClassName = "text-accent",
}: {
  className?: string;
  dotClassName?: string;
}) {
  return (
    <span className={`font-serif font-semibold tracking-[-0.01em] ${className}`}>
      NORTH
      <span className={dotClassName} aria-hidden>
        .
      </span>
    </span>
  );
}
