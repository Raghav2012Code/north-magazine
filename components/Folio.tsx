/**
 * Folio rule. The signature furniture of NORTH: a heavy print rule carrying
 * mono folio references, opening each section the way a magazine opens a spread.
 */
export default function Folio({
  left,
  right,
  dark = false,
}: {
  left: string;
  right?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`folio-rule mb-8 flex items-baseline justify-between gap-4 md:mb-12 ${
        dark ? "[border-color:var(--color-paper)]" : ""
      }`}
    >
      <span
        className={`font-mono text-xs tracking-[0.06em] ${
          dark ? "text-paper/75" : "text-ink/70"
        }`}
      >
        {left}
      </span>
      {right && (
        <span
          className={`hidden font-mono text-xs tracking-[0.06em] sm:block ${
            dark ? "text-paper/50" : "text-muted"
          }`}
        >
          {right}
        </span>
      )}
    </div>
  );
}
