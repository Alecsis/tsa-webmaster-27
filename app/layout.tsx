import type { Metadata } from "next";
import {
  Atkinson_Hyperlegible_Next,
  Atkinson_Hyperlegible_Mono,
  Bricolage_Grotesque,
} from "next/font/google";

import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const body = Atkinson_Hyperlegible_Next({
  subsets: ["latin"],
  variable: "--font-atkinson",
  display: "swap",
  adjustFontFallback: false,
  fallback: ["system-ui", "Segoe UI", "Arial", "sans-serif"],
});

const mono = Atkinson_Hyperlegible_Mono({
  subsets: ["latin"],
  variable: "--font-atkinson-mono",
  display: "swap",
  adjustFontFallback: false,
  fallback: ["ui-monospace", "Consolas", "monospace"],
});

export const metadata: Metadata = {
  title: "Tokenline — The AI Learning Portal",
  description: "An interactive AI learning portal for high school students.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body className="flex min-h-dvh flex-col">
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}