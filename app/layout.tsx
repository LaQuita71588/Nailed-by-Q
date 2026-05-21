import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nailed by Q — Press-On Nails & Accessories",
  description:
    "Level up your nail game with Nailed by Q! Shop zodiac sets, glow in the dark, custom press-ons, phone accessories, kits, and more.",
  keywords: "press on nails, nail sets, zodiac nails, glow nails, custom nails, nail kits",
  openGraph: {
    title: "Nailed by Q",
    description: "Press-On Nails That Hit Different 💅",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.className} h-full`}>
      <body
        className="min-h-full flex flex-col"
        style={{ backgroundColor: "#FFF8F0", color: "#0D0D2B" }}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
