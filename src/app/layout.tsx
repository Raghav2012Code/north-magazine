import type { Metadata, Viewport } from "next";
import { Archivo, Fraunces } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  weight: "variable",
  axes: ["opsz", "SOFT", "WONK"],
  variable: "--font-fraunces",
  preload: true,
});

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  weight: "variable",
  variable: "--font-archivo",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://north-magazine.example"),
  title: {
    default: "NORTH — Culture, in context.",
    template: "%s · NORTH",
  },
  description:
    "NORTH is an independent magazine of contemporary culture. Issue 018: The Attention Issue. Fashion, music, architecture, photography, film, design, people and cities — reported with patience.",
  keywords: [
    "independent magazine",
    "culture",
    "editorial",
    "architecture",
    "photography",
    "music",
    "design",
    "fashion",
    "film",
  ],
  authors: [{ name: "NORTH Magazine" }],
  openGraph: {
    type: "website",
    title: "NORTH — Culture, in context.",
    description:
      "Issue 018 — The Attention Issue. An independent magazine of contemporary culture.",
    siteName: "NORTH",
  },
  twitter: {
    card: "summary_large_image",
    title: "NORTH — Culture, in context.",
    description:
      "Issue 018 — The Attention Issue. An independent magazine of contemporary culture.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f4efe6",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${archivo.variable}`}>
      <body className="grain antialiased">
        {/*
          Reveal-on-scroll starts from an opacity-0 inline style. This keeps the
          page fully readable when JavaScript is unavailable, and for anyone
          who has asked for reduced motion.
        */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
