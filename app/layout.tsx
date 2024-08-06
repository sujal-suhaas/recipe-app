import type { Metadata } from "next";
import { Sofia } from "next/font/google";
import localFont from "@next/font/local";
import "./globals.css";

const sofiaPro = localFont({
  src: [
    {
      path: "../public/fonts/sofia-pro/Sofia-Pro-Black-Az.otf",
    },
    { path: "../public/fonts/sofia-pro/Sofia-Pro-Black-Italic-Az.otf" },
    { path: "../public/fonts/sofia-pro/Sofia-Pro-Bold-Az.otf" },
    { path: "../public/fonts/sofia-pro/Sofia-Pro-Bold-Italic-Az.otf" },
    { path: "../public/fonts/sofia-pro/Sofia-Pro-Light-Az.otf" },
    { path: "../public/fonts/sofia-pro/Sofia-Pro-Light-Italic-Az.otf" },
    { path: "../public/fonts/sofia-pro/Sofia-Pro-Medium-Az.otf" },
    { path: "../public/fonts/sofia-pro/Sofia-Pro-Medium-Italic-Az.otf" },
    { path: "../public/fonts/sofia-pro/Sofia-Pro-Regular-Az.otf" },
    { path: "../public/fonts/sofia-pro/Sofia-Pro-Regular-Italic-Az.otf" },
    { path: "../public/fonts/sofia-pro/Sofia-Pro-Semi-Bold-Az.otf" },
    { path: "../public/fonts/sofia-pro/Sofia-Pro-Semi-Bold-Italic-Az.otf" },
    { path: "../public/fonts/sofia-pro/Sofia-Pro-UltraLight-Az.otf" },
    { path: "../public/fonts/sofia-pro/Sofia-Pro-UltraLight-Italic-Az.otf" },
  ],
  variable: "--font-sofia-pro",
});
const sofia = Sofia({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sofia",
});

export const metadata: Metadata = {
  title: "Recipe App",
  description: "A simple recipe sharing and meal planning app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sofia.className} bg-background`}>{children}</body>
    </html>
  );
}
