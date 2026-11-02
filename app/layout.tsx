import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700", "800"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Day One Studio | AI product reels for D2C brands",
  description: "12 AI product reels a month for Indian food, beverage and wellness brands, made from the photos you already have. First 3 ready in 7 days.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body>{children}</body>
    </html>
  );
}
