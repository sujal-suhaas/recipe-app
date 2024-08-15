import type { Metadata } from "next";
import { Sofia } from "next/font/google";
import localFont from "@next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const sofiaPro = localFont({
  src: [
    {
      path: "../public/fonts/sofia-pro/Sofia-Pro-Black-Az.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/sofia-pro/Sofia-Pro-Black-Italic-Az.otf",
      weight: "900",
      style: "italic",
    },
    {
      path: "../public/fonts/sofia-pro/Sofia-Pro-Bold-Az.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/sofia-pro/Sofia-Pro-Bold-Italic-Az.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/fonts/sofia-pro/Sofia-Pro-Light-Az.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/sofia-pro/Sofia-Pro-Light-Italic-Az.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/sofia-pro/Sofia-Pro-Medium-Az.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/sofia-pro/Sofia-Pro-Medium-Italic-Az.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/sofia-pro/Sofia-Pro-Regular-Az.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/sofia-pro/Sofia-Pro-Regular-Italic-Az.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/sofia-pro/Sofia-Pro-Semi-Bold-Az.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/sofia-pro/Sofia-Pro-Semi-Bold-Italic-Az.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../public/fonts/sofia-pro/Sofia-Pro-UltraLight-Az.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/sofia-pro/Sofia-Pro-UltraLight-Italic-Az.otf",
      weight: "200",
      style: "italic",
    },
  ],
  display: "swap",
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
      <body className={`${sofiaPro.variable} ${sofia.className} bg-background`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
