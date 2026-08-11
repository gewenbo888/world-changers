import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://world-changers.psyverse.fun"),
  title: "World Changers | 世界改变者图鉴",
  description:
    "Sixteen paths that changed the world — from the Yellow Emperor to the nameless. An atlas of the archetypes behind every great system: creators, organizers, institutionalists, and the people history forgot.",
  keywords: [
    "world changers",
    "history of power",
    "great leaders",
    "Genghis Khan",
    "Alexander the Great",
    "systems thinking",
    "institution building",
    "历史人物",
    "改变世界",
    "成吉思汗",
    "刘邦",
    "制度创新",
    "伟人分析",
  ],
  authors: [{ name: "Gewenbo", url: "https://psyverse.fun" }],
  alternates: {
    canonical: "/",
    languages: { en: "/", "zh-CN": "/", "x-default": "/" },
  },
  openGraph: {
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "World Changers · 世界改变者图鉴" }],
    title: "World Changers — 世界改变者图鉴",
    description:
      "Sixteen paths that changed the world: from the Yellow Emperor to the nameless. Systems and ideas outlive conquest and power.",
    url: "https://world-changers.psyverse.fun/",
    siteName: "Psyverse",
    type: "website",
    locale: "en_US",
    alternateLocale: ["zh_CN"],
  },
  twitter: {
    images: ["/twitter-image.png"],
    card: "summary_large_image",
    title: "World Changers — 世界改变者图鉴",
    description:
      "Sixteen paths that changed the world. Systems and ideas outlive conquest and power.",
  },
  robots: { index: true, follow: true },
  other: { "theme-color": "#0a0a0c" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,600;9..144,800;9..144,900&family=Space+Grotesk:wght@300;400;500;600;700&family=Noto+Serif+SC:wght@400;600;800;900&family=JetBrains+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Script
          src="https://analytics-dashboard-two-blue.vercel.app/tracker.js"
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  );
}
