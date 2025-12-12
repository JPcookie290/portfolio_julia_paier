import type { Metadata } from "next";
import "./globals.css";
import { Fraunces, Source_Sans_3 } from "next/font/google";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Julia Paier - Portfolio",
  description:
    "Portfolio website of Julia Paier, a software developer specializing in web development and UI/UX design.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // This layout should NOT contain locale logic.
  return (
    <html lang="en" className={`${fraunces.variable} ${sourceSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
