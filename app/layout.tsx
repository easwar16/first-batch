import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";

const onest = Onest({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Keyline Studio | WhatsApp front desk and growth for Chennai clinics",
  description: "An AI assistant on your clinic's WhatsApp that replies in under a minute, books the slot, sends reminders, asks for reviews and recalls patients at 6 months. Live in 7 days.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={onest.variable}>
      <body>{children}</body>
    </html>
  );
}
