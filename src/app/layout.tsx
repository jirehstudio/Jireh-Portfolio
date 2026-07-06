import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#030712",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://jireh.studio"),
  alternates: {
    canonical: "/",
  },
  title: "Jireh Studio | Crafting Digital Excellence",
  description:
    "Jireh Studio is a digital agency that designs, builds, and optimizes high-performance online systems. Web development & UI/UX, marketing & branding, and AI and automation services.",
  keywords: [
    "Jireh Studio",
    "Web Development",
    "UI/UX Design",
    "SEO",
    "AI and Automation",
    "Branding",
    "Digital Agency",
  ],
  authors: [{ name: "Jireh Studio" }],
  openGraph: {
    title: "Jireh Studio | Crafting Digital Excellence",
    description:
      "Your partner in web development, integrated marketing, and intelligent AI and automation.",
    siteName: "Jireh Studio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jireh Studio | Crafting Digital Excellence",
    description:
      "Your partner in web development, integrated marketing, and intelligent AI and automation.",
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
