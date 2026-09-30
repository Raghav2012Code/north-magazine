import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // The magazine art-directs third-party photography (Unsplash) at build/runtime.
    // Remote patterns are declared here so next/image can optimise and serve them locally.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
    // Every quality the art direction actually asks for. Declaring them keeps
    // next/image from re-encoding the same frame at different levels.
    qualities: [55, 74, 78, 80, 82, 84],
    deviceSizes: [390, 640, 828, 1080, 1280, 1600, 1920, 2560],
    imageSizes: [96, 160, 240, 320, 420, 560, 720],
  },
};

export default nextConfig;
