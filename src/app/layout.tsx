import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ireh Studio — Crafting Digital Excellence",
  description:
    "ireh Studio is a digital agency that designs, builds, and optimizes high-performance online systems. Web development & UI/UX, marketing & branding, and automation services.",
  keywords: [
    "ireh Studio",
    "Web Development",
    "UI/UX Design",
    "SEO",
    "Automation",
    "Branding",
    "Digital Agency",
  ],
  authors: [{ name: "ireh Studio" }],
  openGraph: {
    title: "ireh Studio — Crafting Digital Excellence",
    description:
      "Your partner in web development, integrated marketing, and intelligent automation.",
    siteName: "ireh Studio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ireh Studio — Crafting Digital Excellence",
    description:
      "Your partner in web development, integrated marketing, and intelligent automation.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-ink text-foreground overflow-x-hidden`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
