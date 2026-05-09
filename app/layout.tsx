import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, DM_Sans } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Kalista Frozen Food",
  description:
    "Kalista adalah toko makanan beku yang terjamin kualitasnya yang terletak di Kota Raha, Muna, Sulawesi Tenggara",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body
        className={`text-frost font-body bg-navy flex min-h-full flex-col ${dmSans.variable} ${playfair.variable} `}
      >
        {children}
      </body>
    </html>
  );
}
