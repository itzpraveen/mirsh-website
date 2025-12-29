import type { Metadata } from "next";
import { Outfit, Oswald } from "next/font/google"; // Using Outfit as primary, Oswald for display
import "./globals.css";
import { cn } from "@/lib/utils";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: 'swap',
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: 'swap',
});

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "MIRSH | Premium Sneaker Care",
  description: "Advanced sneaker care products. Fast, Safe, Free From.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark"> {/* Force dark mode class */}
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          outfit.variable,
          oswald.variable
        )}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
