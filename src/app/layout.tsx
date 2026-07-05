import type { Metadata } from "next";
import "@fontsource/red-hat-text/400.css";
import "@fontsource/red-hat-text/600.css";
import "@fontsource/red-hat-text/700.css";
import "./globals.css";
import OrderModalRoot from "@/components/order/OrderModalRoot";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cart from "@/components/cart/Cart";
import { Playfair_Display, Dancing_Script } from "next/font/google";

export const metadata: Metadata = {
  title: {
    template: "%s | Dessertful",
    default: "Dessertful — Handcrafted Desserts Delivered to Your Door",
  },
  description:
    "Discover handcrafted desserts made fresh with premium ingredients. Carbon-neutral delivery. Tiramisu, macarons, cakes, and more.",
  openGraph: {
    title: "Dessertful — Handcrafted Desserts",
    description:
      "Handcrafted desserts made fresh with premium ingredients. Carbon-neutral delivery.",
    url: "https://dessertful.com",
    siteName: "Dessertful",
    locale: "en_US",
    type: "website",
  },
};

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-playfair",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-dancing-script",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${dancingScript.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
        <OrderModalRoot />
        <Cart />
      </body>
    </html>
  )
}