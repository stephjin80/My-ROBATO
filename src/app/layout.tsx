import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ROBATO — Premium Learning for Elementary Students",
  description:
    "ROBATO is a premium learning companion for elementary students, combining expert curriculum, adaptive tools, and the joy of discovery.",
  openGraph: {
    title: "ROBATO — Premium Learning for Elementary Students",
    description:
      "A premium learning companion for elementary students — expert curriculum, adaptive tools, and the joy of discovery.",
    type: "website",
    locale: "en_US",
    siteName: "ROBATO",
  },
  twitter: {
    card: "summary_large_image",
    title: "ROBATO — Premium Learning for Elementary Students",
    description:
      "A premium learning companion for elementary students — expert curriculum, adaptive tools, and the joy of discovery.",
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://my-robato.vercel.app"
  ),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-stone-50 text-stone-900 font-sans">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
