import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import ClientProvider from "@/components/app/ClientProvider";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My ROBATO — The Personalized Learning Companion for Children",
  description:
    "My ROBATO is a personalized AI learning companion for children that combines adaptive curriculum, story-driven exploration, and emotional companionship into one evolving experience.",
  openGraph: {
    title: "My ROBATO — The Personalized Learning Companion for Children",
    description:
      "Adaptive curriculum, immersive storytelling, and an AI companion that grows alongside your child.",
    type: "website",
    locale: "en_US",
    siteName: "My ROBATO",
  },
  twitter: {
    card: "summary_large_image",
    title: "My ROBATO — The Personalized Learning Companion for Children",
    description:
      "Adaptive curriculum, immersive storytelling, and an AI companion that grows alongside your child.",
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
      <body className="min-h-full bg-navy-950 font-sans">
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
