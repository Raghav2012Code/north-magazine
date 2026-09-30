/** Tiny class-name joiner. Avoids a dependency for a four-line function. */
export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}
