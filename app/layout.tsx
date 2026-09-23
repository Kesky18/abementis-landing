import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ABEMENTIS — Raising the Boy Child, Healing the Invisible Wounds",
  description:
    "ABEMENTIS is a Nigerian non-profit empowering boys to become emotionally healthy, resilient men, while breaking the silence around male abuse and providing the support they deserve.",
  openGraph: {
    title: "ABEMENTIS — Raising the Boy Child, Healing the Invisible Wounds",
    description:
      "Empowering boys to become emotionally healthy, resilient men. Breaking the silence around male abuse in Nigeria.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lora.variable} ${inter.variable}`}>
      <body className="font-body bg-white text-navy antialiased">
        {children}
      </body>
    </html>
  );
}
