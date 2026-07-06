import type { Metadata } from "next";
import { Orbitron, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bd71shop.com - Your Digital Gateway to Global Gaming",
  description:
    "Bangladesh's premier digital online global game store. Instant delivery on gaming top-ups (Free Fire, PUBG, COD), gift cards (Google Play, Amazon, Apple, Steam), and digital services. 100% secure payment.",
  keywords: [
    "free fire diamond top up bd",
    "pubg uc buy bangladesh",
    "google play gift card bd",
    "amazon gift card",
    "apple gift card",
    "steam wallet bd",
    "razergold gift card",
    "netflix gift card",
    "bd71shop",
    "gaming top up bangladesh",
  ],
  authors: [{ name: "BD71SHOP" }],
  openGraph: {
    title: "Bd71shop.com - Your Digital Gateway to Global Gaming",
    description:
      "Bangladesh's premier digital online global game store. Instant delivery on gaming top-ups, gift cards, and digital services.",
    url: "https://bd71shop.com",
    siteName: "Bd71shop.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bd71shop.com",
    description: "Your Digital Gateway to Global Gaming",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${orbitron.variable} ${outfit.variable} ${jetbrains.variable} antialiased bg-background text-foreground font-sans`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
