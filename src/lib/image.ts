import type { ImageLoaderProps } from "next/image";

/**
 * Photography is served from Unsplash's public CDN and cropped per breakpoint,
 * so the browser downloads exactly the pixels the art direction asks for.
 * `crop=entropy` keeps the focal point of each frame when the aspect changes.
 */
export function unsplashLoader({
  src,
  width,
  quality,
}: ImageLoaderProps): string {
  const url = new URL(`https://images.unsplash.com/${src}`);
  url.searchParams.set("auto", "format");
  url.searchParams.set("fit", "crop");
  url.searchParams.set("crop", "entropy");
  url.searchParams.set("w", String(width));
  url.searchParams.set("q", String(quality ?? 74));
  return url.href;
}
