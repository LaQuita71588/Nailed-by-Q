import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nailed by Q — Luxury Press-On Nails",
  description:
    "Handcrafted luxury press-on nails for the woman who demands more. 6 sizes, 7 shapes, and infinite style — from the Zodiac collection to custom bespoke sets.",
  keywords:
    "luxury press on nails, nail sets, zodiac nails, glow nails, custom nails, press-on nail boutique, liquid dimensional nails",
  openGraph: {
    title: "Nailed by Q — Luxury Press-On Nails",
    description:
      "Where luxury meets nail artistry. Press-on sets for the woman who demands more.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${inter.variable} h-full`}
    >
      <body
        className="min-h-full flex flex-col"
        style={{ backgroundColor: "#0A0A0A", color: "#F5F0EB" }}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
